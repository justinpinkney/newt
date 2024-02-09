document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('search-box');

    searchBox.addEventListener('keyup', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        filterLinks(searchTerm);
    });

    // Attach keydown listener to the whole window
    window.addEventListener('keydown', function(e) {
        if (e.key === "Escape") { // Clear search on ESC key.
            clearSearch();
        }

        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission
            var firstResult = document.getElementsByClassName('link-box')[0];
            console.log(firstResult);
            if (firstResult) {
                // Do something with the first result, e.g., navigate to its link
                window.location.href = firstResult.href;
            }
        }

    });
    // Function to clear the search box and reset the link visibility.
    window.clearSearch = function() {
        searchBox.value = '';
        filterLinks('');
    }

    // Function to filter links based on the search term.
    function filterLinks(searchTerm) {
        const linkBoxes = document.querySelectorAll('.link-box');

        linkBoxes.forEach(function(box) {
            const text = box.textContent.toLowerCase();
            const isVisible = text.includes(searchTerm);
            box.style.display = isVisible ? 'block' : 'none';
        });
    }

    // Function to bold the text before the "/"
    function boldBeforeSlash() {
        // Select all elements with the class 'link-box'
        var links = document.querySelectorAll('.link-box');

        // Iterate over each link
        for (var i = 0; i < links.length; i++) {
            // Split the text content at the '/'
            var parts = links[i].textContent.split('/');

            // If there is a part before the '/', make it bold
            if (parts.length > 1) {
                links[i].innerHTML = '<strong>' + parts[0] + '</strong>/' + parts.slice(1).join('/');
            }
        }
    }

    // Call the function to bold the text before the "/"
    boldBeforeSlash();
});
