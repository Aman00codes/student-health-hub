# 🏥 StudentHealthHub - AI-Powered Student Healthcare Management System

<div align="center">
  <img src="./docs/images/svgviewer-output.svg" alt="StudentHealthHub Logo" width="200"/>
  <p><em>Revolutionizing Student Healthcare with AI and Blockchain</em></p>
  
  <h2>🏆 Fluxus 2025 Hackathon Submission</h2>
  <h3>Indian Institute of Technology (IIT), Indore</h3>
  
  <p>
    <a href="#-hackathon-details">🎯 Hackathon</a> |
    <a href="#-our-solution">💡 Solution</a> |
    <a href="#-key-features">🌟 Features</a> |
    <a href="#️-technology-stack">🛠️ Tech Stack</a> |
    <a href="#-team">👨‍💻 Team</a> |
    <a href="#-setup-instructions">🚀 Setup</a>
  </p>
</div>
  </p>
</div>
</div>

## 🎯 Hackathon Details

<details>
<summary><b>Problem Statement</b></summary>

### Challenge
Student healthcare management in educational institutions faces numerous challenges:
- Fragmented health records across different departments
- Inefficient appointment scheduling systems
- Limited access to mental health resources
- Lack of real-time health monitoring
- Privacy concerns with sensitive medical data

### Requirements Met
✅ Innovation in Healthcare Management
✅ Use of Advanced Technology (AI/ML)
✅ Data Security & Privacy
✅ User-Centric Design
✅ Scalable Architecture

### Track: Healthcare Innovation
**Theme**: Revolutionizing Campus Healthcare
**Category**: Student Wellness & Mental Health
</details>

## 💡 Our Solution

<details>
<summary><b>Comprehensive Healthcare Platform</b></summary>

StudentHealthHub is an innovative healthcare management system that leverages AI and blockchain technology to provide:
- Centralized health record management
- Smart appointment scheduling
- AI-powered health monitoring
- Secure data handling with blockchain
- Mental health support and tracking

### Innovation Highlights
1. **AI Integration**
   - Symptom analysis using NLP
   - Predictive health analytics
   - Mental health pattern recognition

2. **Blockchain Security**
   - Zero-knowledge proof for privacy
   - Smart contracts for record access
   - Immutable audit trails

3. **User Experience**
   - Mobile-first design
   - Offline capabilities
   - Real-time notifications
</details>

## 📸 App Screenshots

### 🎯 Dashboard
<div align="center">
  <img src="./docs/images/dashboard_img.png" alt="Dashboard" width="800"/>
  <p><em>Comprehensive overview of your health status and upcoming appointments</em></p>
</div>

### 📊 Health Records
<div align="center">
  <img src="docs/images/health_records_img.png" alt="Health Records" width="800"/>
  <p><em>Secure and organized access to your medical history</em></p>
</div>

### 📅 Appointments
<div align="center">
  <img src="docs/images/appointment_img.png" alt="Appointments" width="800"/>
  <p><em>Easy appointment scheduling and management</em></p>
</div>

### 🧠 Mental Health Tracking
<div align="center">
  <img src="docs/images/mental_health_tracker_img.png" alt="Mental Health" width="800"/>
  <p><em>Track and monitor your mental well-being with AI-powered insights</em></p>
  
  <img src="docs/images/mental_health_tracker_img2.png" alt="Mental Health Analytics" width="800"/>
  <p><em>Advanced analytics and mood tracking visualization</em></p>
</div>

### 👤 Profile Management
<div align="center">
  <img src="docs/images/profile_img.png" alt="Profile" width="800"/>
  <p><em>Secure profile management and preferences</em></p>
</div>

## 🌟 Key Features

### 🤖 AI-Powered Health Assistant
- **🔍 Smart Symptom Analysis**: Get instant preliminary health assessments
- **📈 Personalized Insights**: Receive tailored health recommendations
- **🎯 Predictive Analytics**: Early warning system for potential health issues

### 🔐 Blockchain-Secured Records
- **📜 Immutable Records**: Tamper-proof medical history
- **🔒 Smart Contracts**: Automated document verification
- **🌐 Decentralized Storage**: Enhanced security and accessibility

### 🧠 Mental Health Support
- **📊 Mood Analytics**: Track and visualize your mental well-being
- **🤝 Professional Support**: Connect with mental health experts
- **🎯 AI Recommendations**: Get personalized wellness suggestions

### 📱 Modern User Experience
- **💻 Responsive Design**: Seamless experience across all devices
- **🎨 Intuitive Interface**: User-friendly and accessible
- **🔔 Smart Notifications**: Stay updated with important reminders

## 🛠️ Technology Stack

### Frontend
- ⚛️ React.js with Next.js
- 🎨 TailwindCSS
- 📱 Progressive Web App

### Backend
- 🐍 Python FastAPI
- 🐘 PostgreSQL
- 🚀 Redis
- ⛓️ Ethereum Blockchain

### AI/ML
- 🧠 TensorFlow
- 📝 Natural Language Processing
- 👁️ Computer Vision

## 👨‍💻 Team

### Team Roles

| Member Name           | Role(s)                                    | Profile Link                          |
|----------------------|--------------------------------------------|--------------------------------------|
| Rohan Singh          | Project Manager, Frontend Developer        | [GitHub Profile](https://github.com/Aman00codes) |
| Rudra Pratap Singh   | Backend Developer, DevOps Engineer          | [GitHub Profile](https://github.com/Rudra00codes) |
| Raj Bardhan          | UI/UX Designer, Quality Assurance Tester   | [GitHub Profile](https://github.com/RAj2027) |

### Contact Information
- **GitHub Repository**: [student-health-hub](https://github.com/Aman00codes/student-health-hub?tab=readme-ov-file)
- **Project Email**: rudra17122005@gmail.com (Temporary)
- **Demo Website**: [https://student-health-hub.vercel.app](https://student-health-hub.vercel.app) (Not yet Deployed)

## 💻 System Architecture

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

    UI -->|Manages State| State
    State -->|Requests Data| API
    API -->|Handles Requests| FastAPI
    FastAPI -->|Validates| Auth
    FastAPI -->|Caches Responses| Cache
    FastAPI -->|Processes Data| AI
    FastAPI -->|Interacts with| Data
    
    TF -->|Trains on| NLP
    SKLearn -->|Analyzes Data| NLP
    
    DB -->|Stores Data| Blockchain
    DB -->|Stores Files| S3

    style Client fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    style Server fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    style AI fill:#f1f8e9,stroke:#33691e,stroke-width:2px
    style Data fill:#fff3e0,stroke:#e65100,stroke-width:2px
```

### Component Details

<details>
<summary><b>📱 Client Layer</b></summary>

- **UI Components**: Built with Next.js and React for dynamic rendering
- **State Management**: React Context for global state
- **API Integration**: Axios for RESTful communication
</details>

<details>
<summary><b>🖥️ Server Layer</b></summary>

- **FastAPI Backend**: High-performance Python web framework
- **Authentication**: JWT-based secure authentication
- **Cache Layer**: Redis for performance optimization
</details>

<details>
<summary><b>🤖 AI Layer</b></summary>

- **TensorFlow Models**: Health prediction and analysis
- **Scikit-learn**: Data analytics and pattern recognition
- **NLP Processing**: Natural language understanding for health records
</details>

<details>
<summary><b>💾 Data Layer</b></summary>

- **PostgreSQL**: Primary database for structured data
- **Blockchain**: Ethereum for immutable health records
- **File Storage**: AWS S3 for document storage
</details>

## 🚀 Setup Instructions

<details>
<summary><b>For Judges & Evaluators</b></summary>

### Quick Demo Access
1. **Live Demo**: [https://student-health-hub.vercel.app](https://student-health-hub.vercel.app)
   - Demo Credentials:
     - Username: `judge@fluxus.iiti.ac.in`
     - Password: `fluxus2025`
   - Role: Admin (Full access to all features)

2. **Test Accounts**:
   - Student: `student@test.com` / `test123`
   - Doctor: `doctor@test.com` / `test123`
   - Admin: `admin@test.com` / `test123`

### Key Features to Evaluate
1. **AI Capabilities** (5-10 minutes)
   - Try the symptom analyzer
   - Test mental health tracking
   - Explore predictive analytics

2. **Security Demo** (5 minutes)
   - View blockchain verification
   - Check data encryption
   - Test access controls

3. **User Experience** (5-10 minutes)
   - Book an appointment
   - Upload health records
   - Generate health reports
</details>

<details>
<summary><b>Local Development Setup</b></summary>

### Prerequisites
```bash
python 3.9+
node 16+
PostgreSQL 13+
Redis
```

### Installation Steps
```bash
# Clone repository
git clone https://github.com/yourusername/StudentHealthHub.git

# Backend setup
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Frontend setup
cd frontend
npm install
npm run dev
```

### Environment Setup
1. Copy `.env.example` to `.env`
2. Update the following variables:
   ```env
   DATABASE_URL=postgresql://user:pass@localhost:5432/healthdb
   REDIS_URL=redis://localhost:6379
   JWT_SECRET=your-secret-key
   ```

### Running Tests
```bash
# Backend tests
python -m pytest

# Frontend tests
npm test
```
</details>

## 🔒 Security Features

- 🛡️ HIPAA Compliant
- 🔐 End-to-end encryption
- 📝 Audit logging
- 🎯 Role-based access
- 🔑 Two-factor authentication

## 📈 Future Roadmap

### Phase 1 (Current)
- ✅ Core platform development
- ✅ Basic AI integration
- ✅ Mobile responsiveness

### Phase 2 (Q2 2025)
- 🎯 Telemedicine integration
- 🎯 Wearable device support
- 🎯 Advanced AI features

### Phase 3 (Q4 2025)
- 🎯 Multi-institution support
- 🎯 Research analytics
- 🎯 API marketplace

## 🤝 Contributing

We welcome contributions! Check out our [Contributing Guidelines](CONTRIBUTING.md) to get started.

## 📄 License

[MIT License](LICENSE)

## 🎮 Demo

- **Live Demo**: [https://student-health-hub.vercel.app](https://student-health-hub.vercel.app) [Not yet Deployed]
- **Video Demo**: [Watch on YouTube](youtube-link) [NA]

## 🌟 Unique Selling Points

1. 🤖 **AI-Powered Health Assistant**
   - Real-time symptom analysis
   - Personalized health recommendations
   - Predictive health alerts

2. ⛓️ **Blockchain Security**
   - Immutable health records
   - Decentralized data storage
   - Smart contract automation

3. 🧠 **Mental Health Focus**
   - Mood tracking and analytics
   - AI-driven wellness suggestions
   - Anonymous support system

## 🏆 Hackathon Submission Details

<details>
<summary><b>Project Evaluation Criteria</b></summary>

### 1. Innovation (30 points)
- ✨ Novel approach to healthcare management
- 🤖 Advanced AI/ML implementation
- 🔗 Blockchain integration for security

### 2. Technical Implementation (25 points)
- 📱 Full-stack application
- 🔄 Real-time data processing
- 🛡️ Security measures

### 3. Impact & Scalability (25 points)
- 🏫 Applicable to multiple institutions
- 📈 Scalable architecture
- 🌍 Social Impact

### 4. User Experience (20 points)
- 🎨 Intuitive design
- ⚡ Performance
- 📱 Responsiveness
</details>

<details>
<summary><b>Technical Architecture</b></summary>

### System Design
```mermaid
graph TD
    A[Web Client] --> B[Next.js Frontend]
    B --> C[FastAPI Backend]
    C --> D[PostgreSQL]
    C --> E[Redis Cache]
    C --> F[Blockchain]
    C --> G[AI Models]
```

### Key Technologies
- **Frontend**: Next.js, TailwindCSS
- **Backend**: FastAPI, PostgreSQL
- **AI/ML**: TensorFlow, scikit-learn
- **Blockchain**: Ethereum, Smart Contracts
</details>


## 🙏 Acknowledgments

- Thanks to the Fluxus 2025 organizing team at IIT Indore

---

<div align="center">
  Made with ❤️ by Team StudentHealthHub<br>
  Fluxus 2025 | IIT Indore
</div>
