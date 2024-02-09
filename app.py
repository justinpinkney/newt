from flask import Flask, redirect, render_template, url_for
import yaml
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
link_file = "newt-links.yaml"
content = {}
with open(link_file, 'r') as file:
    content["links"] = yaml.safe_load(file)

@app.route('/')
def home():
    return render_template('index.html', content=content["links"])

@app.route('/update')
def update():
    # check for a new version of the gist
    from getgist.__main__ import GetGist
    g = GetGist(filename="newt-links.yaml", user="justinpinkney", assume_yes=True)
    g.get()
    with open(link_file, 'r') as file:
        content["links"] = yaml.safe_load(file)
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
