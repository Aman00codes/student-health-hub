# API Documentation

## Base URL

```
http://localhost:8000/api/v1
```

## Authentication

### Login

```http
POST /auth/login
```

Request body:
```json
{
  "email": "student@university.edu",
  "password": "securepassword"
}
```

Response:
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "token_type": "bearer",
  "user": {
    "id": 1,
    "email": "student@university.edu",
    "full_name": "John Doe",
    "role": "student"
  }
}
```

### Register

```http
POST /auth/register
```

Request body:
```json
{
  "email": "student@university.edu",
  "password": "securepassword",
  "full_name": "John Doe",
  "student_id": "2025CS001",
  "date_of_birth": "2000-01-01"
}
```

## Health Records

### Get All Records

```http
GET /records
```

Query parameters:
- `page`: Page number (default: 1)
- `limit`: Records per page (default: 10)
- `start_date`: Filter by start date
- `end_date`: Filter by end date

Response:
```json
{
  "total": 100,
  "pages": 10,
  "records": [
    {
      "id": 1,
      "diagnosis": "Common Cold",
      "symptoms": "Fever, Cough",
      "treatment": "Prescribed medication",
      "record_date": "2025-02-21T14:30:00Z",
      "doctor": {
        "id": 2,
        "full_name": "Dr. Smith"
      }
    }
  ]
}
```

### Create Record

```http
POST /records
```

Request body:
```json
{
  "student_id": 1,
  "doctor_id": 2,
  "diagnosis": "Common Cold",
  "symptoms": "Fever, Cough",
  "treatment": "Prescribed medication",
  "notes": "Follow up in 3 days"
}
```

## Appointments

### Get All Appointments

```http
GET /appointments
```

Query parameters:
- `status`: Filter by status (scheduled, completed, cancelled)
- `date`: Filter by date

Response:
```json
{
  "appointments": [
    {
      "id": 1,
      "appointment_date": "2025-02-25T10:00:00Z",
      "status": "scheduled",
      "doctor": {
        "id": 2,
        "full_name": "Dr. Smith"
      },
      "reason": "Regular checkup"
    }
  ]
}
```

### Schedule Appointment

```http
POST /appointments
```

Request body:
```json
{
  "doctor_id": 2,
  "appointment_date": "2025-02-25T10:00:00Z",
  "reason": "Regular checkup"
}
```

## Documents

### Generate Medical Certificate

```http
POST /documents/generate
```

Request body:
```json
{
  "type": "medical_certificate",
  "health_record_id": 1,
  "start_date": "2025-02-21",
  "end_date": "2025-02-23",
  "reason": "Medical leave"
}
```

### Verify Document

```http
GET /documents/verify/{hash}
```

Response:
```json
{
  "verified": true,
  "document": {
    "id": 1,
    "type": "medical_certificate",
    "issue_date": "2025-02-21T14:30:00Z",
    "issuer": "Dr. Smith"
  }
}
```

## Mental Health

### Log Mood

```http
POST /mental-health/log
```

Request body:
```json
{
  "mood_score": 8,
  "stress_level": 3,
  "notes": "Feeling good today"
}
```

### Get AI Recommendations

```http
GET /mental-health/recommendations
```

Response:
```json
{
  "recommendations": [
    {
      "type": "exercise",
      "description": "Consider a 30-minute walk",
      "priority": "high"
    },
    {
      "type": "meditation",
      "description": "Try guided meditation",
      "priority": "medium"
    }
  ]
}
```

## Error Responses

### 400 Bad Request
```json
{
  "error": "validation_error",
  "message": "Invalid input data",
  "details": {
    "field": ["error message"]
  }
}
```

### 401 Unauthorized
```json
{
  "error": "unauthorized",
  "message": "Invalid or expired token"
}
```

### 403 Forbidden
```json
{
  "error": "forbidden",
  "message": "Insufficient permissions"
}
```

### 404 Not Found
```json
{
  "error": "not_found",
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "internal_server_error",
  "message": "An unexpected error occurred"
}
```
