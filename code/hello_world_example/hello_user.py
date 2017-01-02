from flask import Flask
app = Flask(__name__)

@app.route("/world")
def hello():
    return "Hello World!"

@app.route("/user/<name>")
def hello_user(name):
    return "Hello %s, how are you today?" % name

if __name__ == "__main__":
    app.run()
