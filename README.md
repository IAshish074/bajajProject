# BFHL Tree Visualizer

A full-stack MERN application built for the Chitkara Full Stack Engineering Challenge.

## Live Demo

**Frontend URL:** https://bajaj-project-ashen-eight.vercel.app/
**Backend URL: ** https://bajajproject-vt87.onrender.com/

## Overview

This application accepts hierarchical relationships in the format `X->Y`, processes them, detects cycles, removes duplicate edges, constructs trees, calculates depths, and returns structured insights through a REST API.

### Example Input

```json
{
  "data": ["A->B", "A->C", "B->D"]
}
```

### Features

* REST API implementation (`POST /bfhl`)
* Input validation
* Duplicate edge detection
* Multi-parent handling (first parent wins)
* Tree construction
* Cycle detection using DFS
* Tree depth calculation
* Summary generation
* Responsive React frontend
* Tailwind CSS UI
* Error handling
* CORS enabled

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* CORS
* dotenv

### Deployment

* Frontend: Vercel
* Backend: Render

## Project Structure

```text
server/
├── controllers/
├── routes/
├── utils/
├── middleware/
├── config/
├── app.js
├── server.js

client/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
```

## API Endpoint

### POST /bfhl

#### Request Body

```json
{
  "data": [
    "A->B",
    "A->C",
    "B->D"
  ]
}
```

#### Response Structure

```json
{
  "user_id": "fullname_ddmmyyyy",
  "email_id": "college_email",
  "college_roll_number": "roll_number",
  "hierarchies": [],
  "invalid_entries": [],
  "duplicate_edges": [],
  "summary": {
    "total_trees": 0,
    "total_cycles": 0,
    "largest_tree_root": ""
  }
}
```

## Processing Rules Implemented

### Validation

Valid format:

```text
A->B
X->Y
```

Invalid examples:

```text
hello
1->2
AB->C
A-B
A->
A->A
```

### Duplicate Edges

Input:

```text
A->B
A->B
A->B
```

Output:

```json
{
  "duplicate_edges": ["A->B"]
}
```

### Multi-Parent Handling

Input:

```text
A->D
B->D
```

Result:

```text
A->D retained
B->D ignored
```

### Cycle Detection

Input:

```text
X->Y
Y->Z
Z->X
```

Result:

```json
{
  "root": "X",
  "tree": {},
  "has_cycle": true
}
```

## Local Setup

### Clone Repository

```bash
git clone <repository-url>
cd project-folder
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the server folder:

```env
PORT=5000
```

## Performance

* Handles up to 50 nodes efficiently
* Average response time under 3 seconds
* Optimized graph traversal using DFS

## Author

Ashish Kumar Mishra

Chitkara University

Computer Science Engineering
