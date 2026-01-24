---
# 🚀 ProDash | Modern E-Commerce Dashboard

ProDash is a high-performance product listing and management application built with React.js. It features a seamless user experience with real-time searching, advanced filtering, and a robust global cart management system.


---

## 🛠️ Tech Stack

* **Frontend:** React.js (Hooks, Context API)
* **State Management:** Redux Toolkit (RTK)
* **Styling:** Tailwind CSS (Mobile-first, Responsive)
* **Routing:** React Router DOM
* **API:** FakeStore API (RESTful)
* **Storage:** LocalStorage for persistent sessions

---

## ✨ Key Features

### 🏗️ Global State Management (Redux Toolkit)
* Centralized **Cart Slice** to manage items, quantities, and real-time total price calculations.
* Decoupled business logic from UI components for better scalability.

### 🛡️ Authentication & Persistence
* Utilized **React Context API** for global User Authentication (Login/Signup).
* Integrated **LocalStorage** to persist user sessions and cart data across page refreshes.

### 🔍 Optimized "Master Data" Search
* Implemented a high-performance filtering pattern. By maintaining a **Master Copy** of the product list, users can search categories and filter by "Top Rated" (⭐) instantly without redundant API calls.

### 📝 Dynamic Form Validation
* Developed Support and Contact modules using **State-driven validation**.
* Used **Conditional Rendering** to provide real-time UI feedback and error messaging to guide user input.

---

## 📸 Component Architecture

1. **Home Page:** Features a dynamic grid with category-based search and rating filters.
2. **Product Card:** Optimized with Tailwind's `group-hover` and `line-clamp` for visual consistency.
3. **Cart Page:** Real-time quantity adjustments and order summary calculation.
4. **About Page:** Technical breakdown of the project's functionalities.

---

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/ShailajaTripathi/ProDash
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the application**
```bash
npm run dev
```

---

## 💡 What I Learned

* How to handle **Asynchronous API lifecycles** using `useEffect`.
* The difference between **Context API** (for global static data like Auth) and **Redux Toolkit** (for transactional data like a Cart).
* Optimizing UI performance by preventing unnecessary re-renders during search.

---

