from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db import get_db
from services import data_service
from schemas.student import StudentCreate

router = APIRouter(prefix="/api", tags=["data"])

@router.get("/questions")
def read_questions(db: Session = Depends(get_db)):
    return data_service.get_questions(db)

@router.get("/student-stats")
def read_student_stats(db: Session = Depends(get_db)):
    return data_service.get_student_stats(db)

@router.get("/students")
def read_students(db: Session = Depends(get_db)):
    return data_service.get_students(db)

@router.post("/students")
def create_student(student: StudentCreate, db: Session = Depends(get_db)):
    return data_service.create_student(db, student)
