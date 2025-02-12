<h1 align="center">File Sharing App with AWS S3 & React</h1>

<p align="center">
  <b>A simple file-sharing application using React.js, Node.js, Express, and AWS S3.</b><br>
  Users can upload files, generate shareable links, and download files seamlessly.
</p>

---

<h2>🚀 Features</h2>
<ul>
  <li>📂 <b>Upload files</b> from your local system.</li>
  <li>🔗 <b>Generate a shareable link</b> for each uploaded file.</li>
  <li>📥 <b>Download files</b> using the shared link.</li>
  <li>🔄 <b>Copy link to clipboard</b> for easy sharing.</li>
  <li>☁ <b>Files stored securely in AWS S3.</b></li>
  <li>🛠️<b>Hosted and Deployed on Amazon EC2.</b></li>
</ul>

---

<h2>📌 Tech Stack</h2>

<h3>Frontend (React.js)</h3>
<ul>
  <li>React.js</li>
  <li>Axios (for API requests)</li>
  <li>CSS for styling</li>
</ul>

<h3>Backend (Node.js & Express)</h3>
<ul>
  <li>Express.js (Server)</li>
  <li>AWS SDK (for S3 integration)</li>
  <li>Multer (for handling file uploads)</li>
  <li>dotenv (for environment variables)</li>
</ul>

<h3>Cloud Storage</h3>
<ul>
  <li>AWS S3 (Amazon Simple Storage Service)</li>
  <li>EC2 (Elastic Cloud Compute)</li>
</ul>

---

<h2>⚡ Getting Started</h2>
<p>Follow these steps to set up the project locally.</p>

<h3>1️⃣ Clone the Repository</h3>
<pre>
<code>
git clone https://github.com/yashan0202/file_sharing_web.git
cd file_sharing_web
</code>
</pre>

---

<h2>🖥 Frontend Setup (React.js)</h2>

<h3>2️⃣ Install Dependencies</h3>
<pre>
<code>
cd frontend
npm install
</code>
</pre>

<h3>3️⃣ Start the Frontend</h3>
<pre>
<code>
npm start
</code>
</pre>
<p>The app will run on <code>http://localhost:3000</code>.</p>

---

<h2>🌐 Backend Setup (Node.js + Express)</h2>

<h3>4️⃣ Install Backend Dependencies</h3>
<pre>
<code>
cd backend
npm install
</code>
</pre>

<h3>5️⃣ Configure Environment Variables</h3>
<p>Create a <code>.env</code> file in the <code>backend</code> folder and add your AWS credentials:</p>

<pre>
<code>
PORT=5000
AWS_REGION=your-region
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_BUCKET_NAME=your-bucket-name
</code>
</pre>

<h3>6️⃣ Start the Backend Server</h3>
<pre>
<code>
node server.js
</code>
</pre>
<p>The backend will run on <code>http://localhost:5000</code>.</p>

---

<h2>📌 API Endpoints</h2>

<h3>1️⃣ Upload File</h3>
<ul>
  <li><b>Endpoint:</b> <code>POST /api/files/upload</code></li>
  <li><b>Request:</b> FormData (file)</li>
  <li><b>Response:</b></li>
</ul>

<pre>
<code>
{
  "message": "File uploaded successfully",
  "url": "https://your-bucket.s3.your-region.amazonaws.com/filename",
  "name": "filename"
}
</code>
</pre>

---

---

<h2>📜 License</h2>
<p>This project is open-source and available under the <b>MIT License</b>.</p>

---

<h2>🙌 Acknowledgments</h2>
<ul>
  <li><b>AWS S3</b> for file storage</li>
  <li><b>EC2</b> for Hosting & Deployment<li>
  <li><b>React.js & Node.js</b> for development</li>
  <li><b>Node.js & Express</b> for backend
  <li><b>Multer</b> for handling file uploads</li>
</ul>

---

<h2>💡 Contributing</h2>
<p>Feel free to <b>fork</b> this repo, create a new branch, and submit a <b>Pull Request (PR)</b>.</p>

---

<h2>📬 Contributors</h2>
<p><b>Developer:</b> Yash</a></p>
<p><b>Developer:</b> Rafiya</a></p>
<p><b>Developer:</b> Vamshi</a></p>
<p><b>Developer:</b> Snehal</a></p>
<p><b>Developer:</b> Shruti</a></p>
<p><b>Developer:</b> Vinay</a></p>
<p><b>Developer:</b> Krutika</a></p>


