## 👨‍💻 Team

### Core Team Members

#### Rohan Singh - Full Stack & AI Developer
- 💻 **Technical Contributions**
  - Designed and implemented the responsive UI using Next.js and TailwindCSS
  - Developed the AI-powered health prediction system using TensorFlow
  - Created the FastAPI backend infrastructure with PostgreSQL and Redis
  - Implemented real-time notifications and health analytics dashboard

- 🤖 **AI/ML Features**
  - Symptom analysis system using Natural Language Processing
  - Mental health pattern recognition and recommendations
  - Health trend analysis and predictive analytics
  - Real-time health score calculation

#### Rudra Pratap Singh - Blockchain & Security Expert
- ⛓️ **Blockchain Implementation**
  - Developed smart contracts for secure health record management
  - Implemented zero-knowledge proofs for privacy protection
  - Created the blockchain verification system for medical records
  - Set up the Ethereum network integration

- 🔒 **Security & Infrastructure**
  - Designed HIPAA-compliant data handling systems
  - Implemented end-to-end encryption for sensitive data
  - Created secure backup and recovery protocols
  - Set up authentication and authorization systems

### Contact Information
- **Institution**: Indian Institute of Technology (IIT), Indore
- **Project Repository**: [student-health-hub](https://github.com/student-health-hub)
- **Demo Website**: [https://student-health-hub.vercel.app](https://student-health-hub.vercel.app)
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

## 👥 Team

- **Rohan Singh** - Full Stack Developer & Team Lead
- **[Team Member 2]** - AI/ML Specialist
- **[Team Member 3]** - UI/UX Designer
- **[Team Member 4]** - Blockchain Developer

## 🎮 Demo

- **Live Demo**: [https://student-health-hub.vercel.app](https://student-health-hub.vercel.app)
- **Video Demo**: [Watch on YouTube](youtube-link)

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
- 🌍 Social impact

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

### Achievements in Fluxus 2025
- 🥇 Best Healthcare Solution
- 🌟 Most Innovative Use of AI
- ⭐ Best Technical Implementation

## 🙏 Acknowledgments

- Thanks to the Fluxus 2025 organizing team at IIT Indore
- Special thanks to our mentors and judges

## 📞 Contact

For any queries regarding this hackathon submission:
- **Developer**: Rohan Singh
- **Email**: rohan.singh@studenthealthhub.tech
- **LinkedIn**: [Rohan Singh](linkedin-link)
- **GitHub**: [github-profile](github-link)

---

<div align="center">
  Made with ❤️ by Team StudentHealthHub<br>
  Fluxus 2025 | IIT Indore
</div>
