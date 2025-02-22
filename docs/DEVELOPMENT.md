# Development Guide

## Project Structure

```
student-health-hub/
├── backend/
│   ├── app/
│   │   ├── models/      # Database models
│   │   ├── routes/      # API endpoints
│   │   ├── services/    # Business logic
│   │   └── utils/       # Helper functions
│   └── tests/           # Backend tests
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Next.js pages
│   │   ├── styles/      # CSS styles
│   │   └── utils/       # Helper functions
│   └── tests/           # Frontend tests
└── docs/                # Documentation
```

## Setup Development Environment

### Prerequisites

- Python 3.9+
- Node.js 16+
- PostgreSQL 13+
- Redis
- Git

### Backend Setup

1. Create and activate virtual environment:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials and other configurations
```

4. Initialize database:
```bash
python -m alembic upgrade head
```

5. Start the backend server:
```bash
uvicorn app.main:app --reload
```

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your API endpoint and other configurations
```

3. Start the development server:
```bash
npm run dev
```

## Database Models

### Core Models

1. **User**
   - Stores student and healthcare provider information
   - Handles authentication and authorization
   - Links to health records and appointments

2. **HealthRecord**
   - Maintains medical history
   - Includes AI analysis and blockchain verification
   - Links to prescriptions and documents

3. **Appointment**
   - Manages healthcare provider appointments
   - Includes AI-determined priority system
   - Handles scheduling and notifications

4. **Prescription**
   - Tracks medication details
   - Manages prescription status
   - Links to health records

5. **MentalHealthLog**
   - Tracks student mental health
   - Provides AI-powered recommendations
   - Maintains mood and stress levels

## API Documentation

### Authentication

```
POST /api/auth/login
POST /api/auth/register
POST /api/auth/refresh-token
```

### Health Records

```
GET /api/records
POST /api/records
GET /api/records/{id}
PUT /api/records/{id}
```

### Appointments

```
GET /api/appointments
POST /api/appointments
PUT /api/appointments/{id}
DELETE /api/appointments/{id}
```

## AI Features

### Health Analysis

- Symptom analysis using NLP
- Health trend prediction
- Appointment priority determination

### Document Processing

- Medical certificate verification
- Automated document generation
- Blockchain-based verification

## Security Considerations

1. **Data Protection**
   - End-to-end encryption for sensitive data
   - HIPAA compliance measures
   - Regular security audits

2. **Authentication**
   - JWT-based authentication
   - Role-based access control
   - Session management

3. **Blockchain Integration**
   - Document verification
   - Immutable health records
   - Smart contracts for automation

## Testing

### Backend Testing

```bash
cd backend
pytest
```

### Frontend Testing

```bash
cd frontend
npm test
```

## Deployment

### Production Checklist

1. Update environment variables
2. Run database migrations
3. Build frontend assets
4. Configure CORS settings
5. Set up SSL certificates
6. Configure monitoring tools

### Docker Deployment

```bash
docker-compose up -d
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## Troubleshooting

Common issues and solutions:

1. Database connection issues
   - Check credentials in .env
   - Verify PostgreSQL service is running
   - Check network connectivity

2. Frontend build errors
   - Clear node_modules and reinstall
   - Check for conflicting dependencies
   - Verify Node.js version

3. API errors
   - Check API endpoint configuration
   - Verify authentication tokens
   - Check server logs
