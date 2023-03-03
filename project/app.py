from flask import Flask, redirect, render_template, request, session, flash
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.security import check_password_hash, generate_password_hash
import datetime
from cs50 import SQL
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Length, EqualTo, InputRequired

from helpers import login_required

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config['SECRET_KEY'] = "key"

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

class Form(FlaskForm):
    username = StringField("Username", validators=[InputRequired(message="Username is required!"), Length(min=3, max=20, message="Must be between 3 and 20 chars")])
    password = PasswordField("Password", validators=[DataRequired("Password is required!"), Length(min=3, message="Must have 3 or more chars")])
    confirmation = PasswordField("Password confirmation", validators=[DataRequired("Confirmation is required!"), EqualTo("password", message="Must be the same as the password")])
    submit = SubmitField('Sign in')

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/my_space", methods=["GET"])
@login_required
def my_space():
    return render_template("my_space.html")

@app.route("/sign-up", methods=["GET", "POST"])
def signup():
    form = Form()
    if form.validate_on_submit():
        return redirect("/")
    return render_template("modal.html", form=form)

@app.route("/log-in", methods=["GET", "POST"])
def login():
    form = Form()
    if form.validate_on_submit():
        return redirect("/")
    return render_template("modal.html", form=form)