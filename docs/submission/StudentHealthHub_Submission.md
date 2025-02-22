# StudentHealthHub - AI-Powered Healthcare Management System
### Fluxus 2025 Hackathon Submission - IIT Indore

## 🔗 Quick Access Links
- **GitHub Repository**: [https://github.com/Aman00codes/student-health-hub](https://github.com/Aman00codes/student-health-hub)
- **Live Demo**: [Your deployment URL]
- **Video Demo**: [Your video URL]

## 🎯 Problem Statement & Solution
### Problem
- Students struggle with managing health records across multiple healthcare providers
- Difficulty in tracking appointments and medical history
- Mental health monitoring needs more attention
- Lack of centralized healthcare management system

### Solution
StudentHealthHub provides an AI-powered healthcare management platform specifically designed for students, featuring:
- Centralized health record management
- Smart appointment scheduling
- Mental health tracking with AI insights
- Blockchain-secured medical records
- Real-time health analytics

## 💻 Technical Implementation

### Architecture
```
Frontend (Next.js + React)
├── User Interface (TailwindCSS)
├── State Management (React Context)
└── API Integration

Backend (FastAPI)
├── REST API Endpoints
├── Database (PostgreSQL)
├── AI Models (TensorFlow)
└── Blockchain Integration (Ethereum)
```

### Key Technologies
- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: FastAPI, PostgreSQL
- **AI/ML**: TensorFlow, scikit-learn
- **Security**: JWT, HIPAA compliance
- **Blockchain**: Ethereum Smart Contracts

## 📱 Features & Screenshots

### Dashboard
![Dashboard](docs/images/dashboard_img.png)
- Real-time health status overview
- Quick access to appointments and records
- AI-powered health insights

### Health Records
![Health Records](docs/images/health_records_img.png)
- Secure medical history storage
- Document management
- Blockchain verification

### Appointment Management
![Appointments](docs/images/appointment_img.png)
- Smart scheduling system
- Reminder notifications
- Doctor availability tracking

### Mental Health Tracking
![Mental Health](docs/images/mental_health_tracker_img.png)
![Mental Health Analytics](docs/images/mental_health_tracker_img2.png)
- Mood tracking and analysis
- AI-powered recommendations
- Progress visualization

### Profile Management
![Profile](docs/images/profile_img.png)
- Secure user profiles
- Privacy settings
- Data management

## 🚀 Innovation & Impact

### Technical Innovation
1. **AI Integration**
   - Health trend analysis
   - Personalized recommendations
   - Mental health pattern recognition

2. **Blockchain Security**
   - Immutable health records
   - Secure data sharing
   - Privacy preservation

3. **Smart Features**
   - Automated scheduling
   - Real-time analytics
   - Predictive health insights

### Social Impact
- Improved student health management
- Better mental health awareness
- Reduced healthcare administration burden
- Enhanced data security and privacy

## 🛠️ Setup Instructions

### Local Development
```bash
# Clone Repository
git clone https://github.com/Aman00codes/student-health-hub.git
cd student-health-hub

# Frontend Setup
cd frontend
npm install
npm run dev

# Backend Setup
cd ../backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Environment Variables
```env
DATABASE_URL=postgresql://user:password@localhost:5432/db
JWT_SECRET=your_jwt_secret
BLOCKCHAIN_NODE_URL=your_ethereum_node
```

## 🔜 Future Scope
- Telemedicine integration
- Wearable device connectivity
- Emergency response system
- Academic performance correlation
- Community health features

## 👥 Team
[Your Name]
- Role: Full Stack Developer
- Institution: IIT Indore
- Contact: [Your Email]

## 📄 API Documentation

### Core Endpoints
```
GET /api/health-records
POST /api/appointments
GET /api/mental-health/analytics
POST /api/auth/login
```

For detailed API documentation, visit: [API Docs URL]

---

### Thank You
Thank you for reviewing our project. We believe StudentHealthHub can make a significant impact on student healthcare management through innovation and technology.
