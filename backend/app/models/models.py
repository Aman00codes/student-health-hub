from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, Text, JSON
from sqlalchemy.orm import relationship
from datetime import datetime
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    student_id = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    full_name = Column(String)
    date_of_birth = Column(DateTime)
    is_active = Column(Boolean, default=True)
    role = Column(String)  # student, doctor, admin
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    health_records = relationship("HealthRecord", back_populates="student")
    appointments = relationship("Appointment", back_populates="student")
    prescriptions = relationship("Prescription", back_populates="student")

class HealthRecord(Base):
    __tablename__ = "health_records"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("users.id"))
    doctor_id = Column(Integer, ForeignKey("users.id"))
    diagnosis = Column(Text)
    symptoms = Column(Text)
    treatment = Column(Text)
    notes = Column(Text)
    record_date = Column(DateTime, default=datetime.utcnow)
    blockchain_hash = Column(String)  # For record verification
    ai_analysis = Column(JSON)  # Store AI-generated insights
    
    # Relationships
    student = relationship("User", foreign_keys=[student_id], back_populates="health_records")
    doctor = relationship("User", foreign_keys=[doctor_id])
    prescriptions = relationship("Prescription", back_populates="health_record")

class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("users.id"))
    doctor_id = Column(Integer, ForeignKey("users.id"))
    appointment_date = Column(DateTime)
    status = Column(String)  # scheduled, completed, cancelled
    reason = Column(Text)
    priority = Column(Integer)  # AI-determined priority
    notes = Column(Text)
    
    # Relationships
    student = relationship("User", foreign_keys=[student_id], back_populates="appointments")
    doctor = relationship("User", foreign_keys=[doctor_id])

class Prescription(Base):
    __tablename__ = "prescriptions"

    id = Column(Integer, primary_key=True, index=True)
    health_record_id = Column(Integer, ForeignKey("health_records.id"))
    student_id = Column(Integer, ForeignKey("users.id"))
    medication_name = Column(String)
    dosage = Column(String)
    frequency = Column(String)
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    status = Column(String)  # active, completed, cancelled
    notes = Column(Text)
    
    # Relationships
    health_record = relationship("HealthRecord", back_populates="prescriptions")
    student = relationship("User", back_populates="prescriptions")

class MentalHealthLog(Base):
    __tablename__ = "mental_health_logs"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("users.id"))
    mood_score = Column(Integer)  # Scale of 1-10
    stress_level = Column(Integer)  # Scale of 1-10
    notes = Column(Text)
    log_date = Column(DateTime, default=datetime.utcnow)
    ai_recommendations = Column(JSON)  # Store AI-generated recommendations

class EmergencyContact(Base):
    __tablename__ = "emergency_contacts"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("users.id"))
    name = Column(String)
    relationship = Column(String)
    phone_number = Column(String)
    email = Column(String)
    is_primary = Column(Boolean, default=False)

class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("users.id"))
    document_type = Column(String)  # medical_certificate, leave_application
    file_path = Column(String)
    issue_date = Column(DateTime, default=datetime.utcnow)
    expiry_date = Column(DateTime)
    blockchain_hash = Column(String)  # For document verification
    status = Column(String)  # pending, approved, rejected
    verification_status = Column(Boolean, default=False)
