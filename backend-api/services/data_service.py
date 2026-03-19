from sqlalchemy.orm import Session
from models.models import Question, StudentStats, Student
from schemas.student import StudentCreate

def get_questions(db: Session):
    return db.query(Question).all()

def get_student_stats(db: Session):
    return db.query(StudentStats).all()

def get_students(db: Session):
    return db.query(Student).all()

def create_student(db: Session, student: StudentCreate):
    db_student = Student(
        first_name=student.first_name,
        last_name=student.last_name,
        country=student.country,
        age=student.age,
        gender=student.gender,
        education_level=student.education_level
    )
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student
