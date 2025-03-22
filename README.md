# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Reward System Dashboard

## 📌 Project Overview
The **Reward System Dashboard** is a web application built with **React, Redux, and React Router**. It allows users to track their **reward points, transactions, and activities**, while an **admin panel** provides management features.

---

## 📂 Folder Structure
```
/src
 ├── /components            # Reusable components (Login, Activities, etc.)
 ├── /features              
 │   ├── /users             # User List, User Profile, Redux slice
 │   ├── /rewards           # Rewards List, Redux slice
 │   ├── /admin             # Admin Dashboard
 ├── /services              # API requests (fetchUsers, fetchRewards)
 ├── /store                 # Redux store setup
 ├── App.js                 # Main Router Setup
 ├── index.js               # React Root File
```

---

## 🚀 Features
### **1️⃣ User Management**
✅ Displays user list with profile details.  
✅ Shows **reward points** and **transaction history**.  
✅ Fetches data from an API and manages state with Redux.  

### **2️⃣ Activities & Rewards**
✅ Fetches available **activities and rewards** from an API.  
✅ Displays activity list and reward details.

### **3️⃣ Admin Dashboard**
✅ Allows admins to manage user points and rewards.  
✅ Provides an overview of users and their activities.

### **4️⃣ Navigation with React Router**
✅ `/` → User List  
✅ `/users/:userId` → User Profile  
✅ `/activities` → Activity List  
✅ `/rewards` → Rewards List  
✅ `/admin` → Admin Panel  

### **5️⃣ State Management with Redux**
✅ Uses `createEntityAdapter` for optimized state handling.  
✅ Supports adding, updating, and removing users efficiently.  

### **6️⃣ UI & Styling**
✅ Built with **styled-components** for a clean UI.  
✅ Responsive design with **dynamic styles** (e.g., badge color changes based on points).

### **7️⃣ Error Handling**
✅ Handles API failures gracefully.  
✅ Displays a "User Not Found" message if an invalid user ID is accessed.

---

## 🔧 Installation & Setup
1️⃣ **Clone the repository:**
```bash
git clone https://github.com/your-repo/reward-system-dashboard.git
cd reward-system-dashboard
```
2️⃣ **Install dependencies:**
```bash
npm install
```
3️⃣ **Start the development server:**
```bash
npm start
```
4️⃣ **Backend API Setup:**  
Ensure the backend API is running at `http://localhost:3001`.

---

## 🛠️ Technologies Used
- **React.js** - Frontend framework  
- **Redux Toolkit** - State management  
- **React Router** - Navigation  
- **Styled Components** - UI styling  
- **Mock API** - JSON server for development  

---

## 🔮 Future Enhancements
✅ Add **authentication** with JWT.  
✅ Implement **dark mode** toggle.  
✅ Enhance **admin dashboard** with more insights.  

---

## 🤝 Contributing
Feel free to **fork** this project and submit a **pull request**! 🚀

---

## 📄 License
This project is licensed under the **MIT License**.

---

## 📬 Contact
For any questions or suggestions, reach out at **your-email@example.com**.

