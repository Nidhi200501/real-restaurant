import psycopg2, os
from dotenv import load_dotenv

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")
def get_conn():
    return psycopg2.connect(
        DATABASE_URL,
        sslmode='require'
    )