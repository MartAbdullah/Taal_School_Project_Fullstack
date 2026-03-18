from sqlalchemy import Column, Integer, String, DateTime, Text, create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

import urllib.parse

password = urllib.parse.quote_plus("!@#123qwert")
SQLALCHEMY_DATABASE_URL = f"mysql+mysqlconnector://root:{password}@localhost/app_db"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class Question(Base):
    __tablename__ = "app_question_body"

    id = Column(Integer, primary_key=True, index=True)
    created_at = Column(DateTime)
    level = Column(String(10))
    skill = Column(String(50))
    code = Column(String(50))
    title = Column(String(255))
    paragraphs = Column(Integer)
    question_count = Column(Integer)
    status = Column(String(50))

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
