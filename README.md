# An Introduction to Web Development with Flask

This repository contains all of the relevant content for the workshop of the same name, given on January 13, 2017 as part of the Rice CS Club Hack & Learn.

## Slides
https://github.com/hack-rice/flask-tutorial/blob/master/presentation/flask-tutorial.pdf

## Code
All of the source code for the two examples used in this workshop are in the `code` directory.

### Requirements
- Ensure that Python2 or 3.3+ is installed on your system
- Install [Flask](flask.pocoo.org) using pip: `pip install Flask`

### Usage
Enter the following commands into your shell:
```
> git clone https://github.com/hack-rice/flask-tutorial.git
> cd flask-tutorial/code/list_sort_example
> export FLASK_APP=list_sort.py
> flask run
```

Once you see the following in your terminal:
```
 * Serving Flask app "list_sort"
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```
the webapp will be accessible at [127.0.0.1:5000](http://127.0.0.1:5000/)
