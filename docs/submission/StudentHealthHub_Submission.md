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

### System Architecture
```mermaid
flowchart TB
    subgraph Client["📱 Client Layer"]
        UI["UI Components\n(Next.js + React)"] 
        State["State Management\n(React Context)"] 
        API["API Integration\n(Axios)"] 
    end

    subgraph Server["🖥️ Server Layer"]
        FastAPI["FastAPI Backend"] 
        Auth["Authentication\n(JWT)"] 
        Cache["Cache Layer\n(Redis)"] 
    end

    subgraph AI["🤖 AI Layer"]
        TF["TensorFlow Models"] 
        SKLearn["Scikit-learn\nAnalytics"] 
        NLP["NLP Processing"] 
    end

    subgraph Data["💾 Data Layer"]
        DB[("PostgreSQL\nDatabase")] 
        Blockchain["Ethereum\nBlockchain"] 
        S3["File Storage\n(AWS S3)"] 
    end

    UI --> State
    State --> API
    API --> FastAPI
    FastAPI --> Auth
    FastAPI --> Cache
    FastAPI --> AI
    FastAPI --> Data
    
    TF --> NLP
    SKLearn --> NLP
    
    DB --> Blockchain
    DB --> S3

    style Client fill:#e1f5fe,stroke:#01579b
    style Server fill:#f3e5f5,stroke:#4a148c
    style AI fill:#f1f8e9,stroke:#33691e
    style Data fill:#fff3e0,stroke:#e65100
```

### Component Details

#### 1. Client Layer
- **UI Components**: Built with Next.js and React for dynamic rendering
- **State Management**: React Context for global state
- **API Integration**: Axios for RESTful communication

#### 2. Server Layer
- **FastAPI Backend**: High-performance Python web framework
- **Authentication**: JWT-based secure authentication
- **Cache Layer**: Redis for performance optimization

#### 3. AI Layer
- **TensorFlow Models**: Health prediction and analysis
- **Scikit-learn**: Data analytics and pattern recognition
- **NLP Processing**: Natural language understanding for health records

#### 4. Data Layer
- **PostgreSQL**: Primary database for structured data
- **Blockchain**: Ethereum for immutable health records
- **File Storage**: AWS S3 for document storage

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

### Core Team Members

#### Rohan Singh - Frontend & AI Lead
- 💻 **Frontend Development**
  - Designed and implemented the responsive UI using Next.js and TailwindCSS
  - Created interactive dashboard components and data visualizations
  - Built real-time notification system and health analytics dashboard

- 🤖 **AI Integration**
  - Developed symptom analysis using Natural Language Processing
  - Implemented mental health pattern recognition
  - Created predictive health analytics models

#### Rudra Pratap Singh - Backend & DevOps Lead
- 🖥️ **Backend Architecture**
  - Designed the FastAPI backend infrastructure
  - Implemented JWT authentication and security
  - Set up PostgreSQL database and Redis caching

- 🚀 **DevOps & Infrastructure**
  - Managed deployment pipelines and CI/CD
  - Configured cloud infrastructure on AWS
  - Implemented monitoring and logging systems

#### Aman Kumar - Blockchain & Security Lead
- ⛓️ **Blockchain Development**
  - Developed smart contracts for health records
  - Implemented zero-knowledge proofs
  - Created the blockchain verification system

- 🔒 **Security Architecture**
  - Designed HIPAA-compliant data handling
  - Implemented end-to-end encryption
  - Set up authentication and authorization

### Contact Information
- **Institution**: Indian Institute of Technology (IIT), Indore
- **Project Repository**: [student-health-hub](https://github.com/student-health-hub)
- **Demo Website**: [https://student-health-hub.vercel.app](https://student-health-hub.vercel.app)

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
