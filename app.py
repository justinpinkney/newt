from flask import Flask, render_template
import yaml

app = Flask(__name__)

@app.route('/')
def home():
    with open('links.yaml', 'r') as file:
        content = yaml.safe_load(file)
    return render_template('index.html', content=content)

if __name__ == '__main__':
    app.run(debug=True)
