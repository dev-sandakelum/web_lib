import React from "react";

export default function HTML_Content(data: {
  question: string;
  userAnswer: string;
  modelAnswer: string;
  feedback: string;
  studentName?: string;
  topic?: string;
  qrCodeUrl?: string;
  improvements?: string[];
}) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Question Review - Save as JPG</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1e293b;
          background: #f8fafc;
          padding: 20px;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          padding: 0;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding: 20px 30px;
          border-bottom: 2px solid #e2e8f0;
        }

        h1 {
          font-size: 24px;
          color: #0f172a;
          font-weight: 700;
        }

        .save-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #10b981;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          transition: background 0.2s;
        }

        .save-btn:hover {
          background: #059669;
        }

        .save-btn:disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }

        /* Top Bar Styles */
        .top-bar {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 20px 30px;
          border-radius: 8px 8px 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
        }

        .top-bar-left {
          flex: 1;
        }

        .top-bar-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .top-bar-subtitle {
          font-size: 12px;
          opacity: 0.9;
        }

        .top-bar-right {
          text-align: right;
        }

        .top-bar-date {
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .top-bar-time {
          font-size: 11px;
          opacity: 0.9;
        }

        /* Footer Styles */
        .footer {
          background: #f8fafc;
          padding: 20px 30px;
          border-radius: 0 0 8px 8px;
          border-top: 2px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          font-size: 11px;
          color: #64748b;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footer-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-label {
          font-weight: 600;
          color: #475569;
        }

        .footer-right {
          display: flex;
          flex-direction: row-reverse;
          align-items: flex-end;
          gap: 10px;
        }

        .footer-text {
          text-align: right;
          font-size: 10px;
          color: #94a3b8;
        }

        .qr-code {
          width: 80px;
          height: 80px;
          border: 2px solid #e2e8f0;
          border-radius: 4px;
          padding: 4px;
          background: white;
        }

        #content {
          background: white;
          padding: 30px;
        }

        .section {
          margin-bottom: 20px;
          padding: 16px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        .section-title {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          color: #64748b;
        }

        .section-content {
          font-size: 12px;
          line-height: 1.8;
          color: #1e293b;
        }

        .question-section {
          background: #f1f5f9;
          border-color: #cbd5e1;
        }

        .user-answer-section {
          background: #ecfdf5;
          border-color: #a7f3d0;
        }

        .user-answer-section .section-title {
          color: #10b981;
        }

        .model-answer-section {
          background: #f0fdf4;
          border-color: #86efac;
        }

        .model-answer-section .section-title {
          color: #16a34a;
        }

        .feedback-section {
          background: #fefce8;
          border-color: #fde047;
        }

        .feedback-section .section-title {
          color: #ca8a04;
        }

        .loading-text {
          margin-left: 8px;
          font-size: 12px;
          color: #64748b;
        }
          .improvements-section {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.improvements-section .section-title {
  color: #0284c7;
}

      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Question Review</h1>
          <button class="save-btn" id="saveBtn" onclick="saveAsJPG()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span id="btnText">Save as JPG</span>
          </button>
        </div>

        <div id="content">
          <!-- Top Bar -->
          <div class="top-bar">
            <div class="top-bar-left">
              <div class="top-bar-title">Question Review Sheet</div>
              <div class="top-bar-subtitle">${
                data.topic || "General Assessment"
              }</div>
            </div>
            <div class="top-bar-right">
              <div class="top-bar-date">${formattedDate}</div>
              <div class="top-bar-time">${formattedTime}</div>
            </div>
          </div>

          <!-- Content Sections -->
          <div style="padding: 30px;">
            <div class="section question-section">
              <div class="section-title">Question:</div>
              <div class="section-content">${data.question}</div>
            </div>

            <div class="section user-answer-section">
              <div class="section-title">Your Answer:</div>
              <div class="section-content">${data.userAnswer}</div>
            </div>

            <div class="section model-answer-section">
              <div class="section-title">✓ Model Answer:</div>
              <div class="section-content">${data.modelAnswer}</div>
            </div>

            <div class="section feedback-section">
              <div class="section-title">Feedback:</div>
              <div class="section-content">${data.feedback}</div>
            </div>
              ${
                data.improvements && data.improvements.length > 0
                  ? `
            <div class="section improvements-section">
              <div class="section-title">Improvements:</div>
              <ul style="list-style:none; padding-left:0; margin:0;">
                ${data.improvements
                  .map(
                    (improvement, idx) => `
                    <li style="
                      display:flex; 
                      gap:10px; 
                      font-size:12px; 
                      margin-bottom:10px; 
                      color:#475569;
                    ">
                      <span style="
                        font-weight:700; 
                        color:#0ea5e9; 
                        width:22px; 
                        height:22px; 
                        min-width:22px;
                        min-height:22px;
                        background:#e0f2fe; 
                        border-radius:50%; 
                        display:flex; 
                        align-items:center; 
                        justify-content:center; 
                        font-size:11px;
                      ">
                        ${idx + 1}
                      </span>
                      <span style="line-height:1.6;">${improvement}</span>
                    </li>
                  `
                  )
                  .join("")}
              </ul>
            </div>
`
                  : ""
              }

            
          </div>

          <!-- Footer -->
          <div class="footer">
            <div class="footer-left">
              <div class="footer-item">
                <span class="footer-label">Student:</span>
                <span>${data.studentName || "N/A"}</span>
              </div>
              <div class="footer-item">
                <span class="footer-label">Topic:</span>
                <span>${data.topic || "General Assessment"}</span>
              </div>
              <div class="footer-item">
                <span class="footer-label">Generated:</span>
                <span>${formattedDate} at ${formattedTime}</span>
              </div>
            </div>
            <div class="footer-right">
              ${
                data.qrCodeUrl
                  ? `<img src="${data.qrCodeUrl}" alt="QR Code" class="qr-code" />`
                  : ""
              }
              <div class="footer-text">
                Question Review System<br>
                © ${currentDate.getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <script>
        async function saveAsJPG() {
          const btn = document.getElementById('saveBtn');
          const btnText = document.getElementById('btnText');
          const content = document.getElementById('content');
          
          // Disable button and show loading
          btn.disabled = true;
          btnText.textContent = 'Generating...';
          
          try {
            // Wait a bit for fonts to load
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Capture the content as canvas with high quality
            const canvas = await html2canvas(content, {
              scale: 2, // Higher quality
              backgroundColor: '#ffffff',
              logging: false,
              useCORS: true,
              allowTaint: true
            });
            
            // Convert to JPG
            canvas.toBlob(function(blob) {
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'question-review-' + new Date().getTime() + '.jpg';
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
              
              // Reset button
              btn.disabled = false;
              btnText.textContent = 'Save as JPG';
            }, 'image/jpeg', 0.95);
            
          } catch (error) {
            console.error('Error generating image:', error);
            alert('Error generating image. Please try again.');
            btn.disabled = false;
            btnText.textContent = 'Save as JPG';
          }
        }
      </script>
    </body>
    </html>
  `;
}
