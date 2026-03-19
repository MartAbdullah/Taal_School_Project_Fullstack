from pydantic import BaseModel
from typing import Optional

class StudentBase(BaseModel):
    first_name: str
    last_name: str
    country: str
    age: int
    gender: str
    education_level: str

class StudentCreate(StudentBase):
    pass

class Student(StudentBase):
    student_id: int

    class Config:
        from_attributes = True
