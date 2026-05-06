import os

from flask import Flask, request, jsonify
from flask_cors import CORS
from db import get_conn
from auth import hash_password, verify_password, create_token

app = Flask(__name__)
CORS(app)

# SIGNUP
@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    name = data.get("name")
    phone = data.get("phone")
    password = data.get("password")
    email = data.get("email")

    if not name or not phone or not password:
        return jsonify({"error": "Missing fields"}), 400

    if not phone or not password:
        return jsonify({"error": "Missing fields"}), 400

    conn = get_conn()
    cur = conn.cursor()

    try:
        cur.execute(
            "INSERT INTO users (name, phone, email, password) VALUES (%s,%s,%s,%s)",
            (name, phone, email, hash_password(password))
        )
        conn.commit()
    except:
        return jsonify({"error": "User already exists"}), 400

    return jsonify({"msg": "Signup successful"})

# LOGIN
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    identifier = data.get("phone") or data.get("email")  # can be phone OR email
    password = data.get("password")

    if not identifier or not password:
        return jsonify({"error": "Missing fields"}), 400

    conn = get_conn()
    cur = conn.cursor()

    # check both phone OR email
    cur.execute(
        "SELECT phone, password FROM users WHERE phone=%s OR email=%s",
        (identifier, identifier)
    )
    user = cur.fetchone()

    if not user:
        return jsonify({"error": "User not found"}), 404

    stored_phone, stored_password = user

    if not verify_password(password, stored_password):
        return jsonify({"error": "Wrong password"}), 401

    token = create_token(stored_phone)

    return jsonify({"token": token})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)