# AFCON 2023 MongoDB Football Stats Project

This project is a MongoDB-based football statistics tracker for the **2023 Africa Cup of Nations (AFCON)**. It allows users to view player profiles, match details, and team data through a simple web interface. The database is structured using collections for each team and additional match-related information.

---

## 📁 Project Structure

```
afcon2023-mongodb-project/
│
├── server.js              # Node.js backend using Express
├── index.html             # Frontend user interface
├── style.css              # Styles for the frontend
├── package.json           # Project dependencies
├── package-lock.json      # Locked dependency versions
```

---

## ⚙️ Technologies Used

- **MongoDB** (Compass & Atlas)
- **Node.js** with **Express**
- **HTML**, **CSS**, and **JavaScript**

---

## 🔧 Setup and How to Run

### 📦 1. Install Dependencies

Open a terminal in the project folder and run:

```bash
npm install
```

### ▶️ 2. Start the Server

Start the backend server (Node.js + Express):

```bash
node server.js
```

The server will typically run on `http://localhost:3000`.

---

### 🌐 3. Open the Interface

After starting the server, open the `index.html` file in your browser, or access `http://localhost:3000` if the server serves the HTML page.

---

### 🗃️ 4. Import Data into MongoDB

1. Open **MongoDB Compass**.
2. Create a database (e.g., `AFCON2023`).
3. Create collections such as:
   - `AFCON.Nigeria`, `AFCON.Morocco`, etc.
   - `Match_Details`, `Matches_KnockOuts`, `Qualified_Countries`
4. Right-click a collection → **"Import Data"** → select the appropriate `.json` file.

---

## 🔍 Key Features

- View players by team
- Basic queries: find, insert, update using MongoDB shell or Compass
- Optimized queries using indexed fields
- Cloud database hosting supported (MongoDB Atlas)

---

## 🔐 Optional Hosting (MongoDB Atlas)

If using MongoDB Atlas:
- Create a cluster
- Add your IP to access list
- Get connection string and use it in `server.js`

---

## 🧠 Lessons Learned

- NoSQL flexibility is ideal for sports data with varying fields.
- Indexing improves performance significantly.
- Compass makes manual input easy for beginners.
- Using Node.js and Express creates a lightweight backend.

---

## 📜 License

This project is for academic and educational purposes only. No commercial use permitted.
