
# Argent Bank API

Welcome to the Argent Bank API repository. This project is part of an initiative to support Argent Bank. The application allows users to securely access and manage their accounts online.

## 📖 Project Overview

This project is developed in two main phases:

### Phase 1: User Authentication
- Develop a responsive React application enabling users to securely log in, view, and update their profile data.
- Key Features:
  1. Homepage with login functionality.
  2. Secure login and logout.
  3. Authenticated access to user-specific profile information.
  4. Editable user profile with persistent data storage in the database.

### Phase 2: Transactions
- Define and document API endpoints to support transaction management, including the ability for users to view, add, edit, and delete transaction details.
- **API Documentation**: [View in SwaggerHub](https://app.swaggerhub.com/apis/HOTPOT-91e/OCR-P13_Bank/1.0.0)

## 🛠 Prerequisites

Ensure you have the following software installed:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

## 🚀 Installation

Follow these steps to set up and run the application locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/HOTP0T/OCR-P13_ArgentBank/tree/main
   ```

2. **Install dependencies**  
   Navigate to the backend and frontend directories, and install dependencies:
   ```bash
   cd argent-bank-backend
   npm install

   cd ../argent-bank-frontend
   npm install
   ```

3. **Populate the database**  
   Add initial data by running the following command:
   ```bash
   npm run populate-db
   ```

4. **Start the Backend Server**  
   Launch the backend server from the backend directory:
   ```bash
   npm run dev:server
   ```
   The backend server will be available at `http://localhost:3001`.

5. **Start the Frontend Application**  
   Launch the frontend application from the frontend directory:
   ```bash
   npm start
   ```
   The frontend app will be available at `http://localhost:3000`.

## 👥 Sample Users in Database

After running the `populate-db` script, you will have two users in the database:

1. **Tony Stark**
   - First Name: Tony
   - Last Name: Stark
   - Email: tony@stark.com
   - Password: password123

2. **Steve Rogers**
   - First Name: Steve
   - Last Name: Rogers
   - Email: steve@rogers.com
   - Password: password456

## 🎨 Design Assets

- **HTML & CSS**: Basic layout and styling are available in the `/designs` folder.
- **Wireframes**:
  - **Edit User Name**: `/designs/wireframes/edit-user-name.png`
  - **Transactions Model**: `/designs/wireframes/transactions.png`

---