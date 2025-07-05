<h1 align="center">🌐 Web Page Generator</h1>

<p align="center">
A full-stack web application to generate custom web pages using <b>Gemini 3 API</b>. Built with <b>ReactJS</b> for the frontend and <b>Node.js</b> for the backend, this app allows users to enter prompts and receive dynamic, AI-generated HTML content for their web projects.
</p>

---

<h2>About the Project</h2>

This project is designed to simplify webpage creation by utilizing Google’s **Gemini 3 API**. The user provides a prompt through a ReactJS frontend, which communicates with a Node.js backend. The backend processes the prompt, interacts with Gemini 3 to generate content, and sends back an HTML response that can be rendered in real time.

---

<h2>Tech Stack</h2>

<ul>
  <li><b>Frontend:</b> ReactJS, Axios</li>
  <li><b>Backend:</b> Node.js, Express.js, CORS, Body-Parser</li>
  <li><b>AI API:</b> Gemini 3 (Google GenAI SDK)</li>
  <li><b>Deployment:</b> Render.com (for both frontend and backend)</li>
</ul>

---

<h2>Features</h2>

<ul>
  <li>User-friendly ReactJS frontend for entering prompts.</li>
  <li>Backend API in Node.js to process and forward requests to Gemini 3.</li>
  <li>Dynamic generation of HTML content from user prompts.</li>
  <li>Supports CORS for cross-origin communication between frontend and backend.</li>
  <li>Deployed on Render with separate frontend and backend services.</li>
</ul>

---

<h2>How to Setup Locally</h2>

<h3>📂 Project Structure</h3>

```
GeminiProject/
├── client/         # ReactJS frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
├── server/         # Node.js backend
│   ├── server.js
│   ├── package.json
│   └── .env
```

---

<h3>Clone the Repository</h3>

```bash
git clone https://github.com/Singh-Aman-Hub/WebPageGenerator-Gemini
cd webpage-generator
```

<h3>Install Dependencies</h3>
<p><b>Frontend (ReactJS)</b></p>

```
cd client
npm install
```
<p><b>Backend (Node.js)</b></p>

```
cd ../server
npm install
```
<h3>Setup Environment Variables</h3>

Create a .env file in both the frontend and backend directories:

<p><b>client/.env</b></p>
REACT_APP_API_URL=http://localhost:5000/api
<p><b>server/.env</b></p>
PORT=5000
GENAI_API_KEY=your_gemini_api_key_here
<h3>▶️ Run the App Locally</h3>
<p><b>Start Backend Server</b></p>

```

cd server
node server.js
```
<p><b>Start Frontend Development Server</b></p>

```

cd ../client
npm start
```

<h2>Deployment</h2>
<p><b>Backend Deployment (Render)</b></p>
<ul>
  <li>Deploy the <code>server/</code> folder as a Node.js service on Render.</li>
  <li>Set environment variable <code>PORT</code> and <code>GENAI_API_KEY</code> in Render Dashboard.</li>
</ul>
<p><b>Frontend Deployment (Render)</b></p>
<ul>
  <li>Deploy the <code>client/</code> folder as a Static Site on Render.</li>
  <li><b>Build Command:</b> <code>cd client && npm install && npm run build</code></li>
  <li><b>Publish Directory:</b> <code>client/build</code></li>
</ul>

<h2>🔗 API Endpoints</h2>

<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Route</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/</td>
      <td>Returns a basic server health check message.</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/api</td>
      <td>Accepts a user prompt and returns AI-generated HTML content.</td>
    </tr>
  </tbody>
</table>
<h2>📖 Example Usage</h2>
{
  "query": "Create a simple landing page for a portfolio site"
}

<img src="https://github.com/user-attachments/assets/0d7f0984-c7f9-4ae0-bdf3-5bd5e8de8192">
<h2>Live project link: <a href="https://webpagegenerator-f.onrender.com/"> https://webpagegenerator-f.onrender.com/</h2>
  
<h2>License</h2>
<p>This project is licensed under the <b>MIT License</b>.</p>
<h3 align="center"> Built with ❤️ using ReactJS, Node.js, and Gemini 3 API</h3>




