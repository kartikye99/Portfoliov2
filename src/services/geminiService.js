// Service to communicate with Google Gemini API with smart built-in knowledge fallback

const KARTIKYE_SYSTEM_PROMPT = `
You are "Kartikye AI", the personal intelligent representative and portfolio assistant for Kartikye Saini.
Your purpose is to represent Kartikye accurately, professionally, concisely, and enthusiastically to recruiters, engineering managers, and visitors.

--- KARTIKYE'S VERIFIED KNOWLEDGE BASE ---
1. PERSONAL & CONTACT:
   - Full Name: Kartikye Saini
   - Title: Full-Stack Developer & Software Engineer
   - Location: Punjab / Uttar Pradesh, India
   - Email: kartikyesaini@gmail.com
   - Phone / WhatsApp: +91 7906913880
   - LinkedIn: https://www.linkedin.com/in/kartikye-saini (username: kartikye-saini)
   - GitHub: https://github.com/kartikye99 (username: kartikye99)
   - Status: Actively seeking full-time Software Engineer (SWE) roles and developer internships.

2. ACADEMICS & EDUCATION:
   - University: Lovely Professional University (LPU), Phagwara, Punjab
   - Degree: Bachelor of Technology (B.Tech) in Computer Science and Engineering
   - Academic CGPA: 7.94 (August 2023 – Present)
   - Intermediate (Class XII): Asha Modern International, Saharanpur, UP (March 2022 – May 2023) | PCM Stream | Percentage: 75%
   - Matriculation (Class X): Asha Modern International, Saharanpur, UP (March 2020 – May 2021) | Percentage: 75%

3. COMPETITIVE PROGRAMMING & DSA:
   - LeetCode: Solved 400+ Data Structures & Algorithms problems (February 2026 milestone). Strong focus on Dynamic Programming, Graph Theory (Dijkstra, BFS/DFS), Trees, Two Pointers, and Binary Search.
   - HackerRank:
     * 5 Stars in C++ (January 2026)
     * 5 Stars in SQL (January 2026)
     * 4 Stars in Python (January 2026)
   - High runtime efficiency focus: O(N log N) / O(N) time and O(1) auxiliary space optimization.

4. CORE SKILLS & TECHNICAL ARSENAL:
   - Languages: C++, Java, JavaScript (ES6+), SQL
   - Frontend: React.js, Tailwind CSS, HTML5, CSS3, Responsive Design, CSS Grid, Flexbox
   - Backend & Real-Time: Node.js, Express.js, WebSockets (Socket.io), RESTful APIs, JWT (JSON Web Tokens)
   - Databases & Cloud: MongoDB Atlas, MySQL, Key-Value Storage, Serverless Edge Workers, Cloud Computing (NPTEL)
   - Tools & Design: Git, GitHub, Visual Studio Code, Postman, Figma (UI/UX wireframing & prototypes)
   - Soft Skills: Problem-Solving, Adaptability, Critical Thinking, Collaborative Teamwork

5. FLAGSHIP PROJECTS:
   A) Roomify – AI-Powered 3D Room Design Web App (January 2026):
      - Converts 2D room layouts into structured 3D architectural models automatically.
      - Drastically cuts down manual spatial modeling time.
      - Tech Stack: React.js, JavaScript, AI Integration, Serverless Workers, Key-Value Storage, Tailwind CSS.
      - Features: Drag-and-drop floorplan uploads, automated AI prompt pipelines, client-side image processing, validated through 100+ layout submissions.
   B) Full-Stack Real-Time Chat Platform (February 2026):
      - Low-latency multi-room messaging platform supporting instant message delivery and synchronized active sessions.
      - Tech Stack: React, JavaScript, Node.js, Express.js, MongoDB Atlas, JWT, WebSockets (Socket.io).
      - Features: Sub-20ms WebSocket communication via Socket.io, JWT authentication, modular RESTful APIs, stress-tested with 50+ concurrent simulated users with zero packet drops.
      - Live App: https://vibechat-golf.onrender.com/
   C) Algorithmic Solutions Lab (LeetCode 400+):
      - C++ performance-optimized implementations across DP, graph algorithms, and data structures.
   D) Think Design Prototype UI/UX System (July 2025):
      - High-fidelity Figma design system with reusable component libraries and WCAG-compliant design thinking heuristics.

6. TRAINING & CERTIFICATIONS:
   - Summer Training on Design Thinking & Figma: Lovely Professional University (July 2025) – UI/UX principles, layouts, typography, wireframing in Figma.
   - Cloud Computing Certification: NPTEL (November 2025) – Virtualization, cloud architecture, IaaS/PaaS/SaaS models.
   - Java Programming: Neo Colab (May 2025) – OOP, collections framework, exception handling.
   - Data Structures & Algorithms (C++): Neo Colab (December 2024) – Complexity analysis and algorithmic patterns.
   - Responsive Web Design: FreeCodeCamp (October 2023) – Semantic web, CSS flex/grid, responsive layouts.

--- GUIDELINES FOR RESPONSES ---
- Keep answers crisp, clear, well-structured, and helpful (use bullet points when appropriate).
- Always be accurate to the data above. If asked about CGPA, state 7.94 clearly.
- If asked about contacting or hiring Kartikye, provide his email (kartikyesaini@gmail.com) and phone (+91 7906913880).
- If asked something not in the knowledge base, politely state that you represent Kartikye's professional profile, and suggest contacting him directly for further details.
`;

// Helper: Smart Local Knowledge Fallback if no Gemini API Key is configured yet
export function generateLocalFallback(query) {
  const q = query.toLowerCase();

  if (q.includes('cgpa') || q.includes('gpa') || q.includes('grade') || q.includes('marks')) {
    return `Kartikye has an academic **CGPA of 7.94** in his Bachelor of Technology (B.Tech) in Computer Science and Engineering at **Lovely Professional University (LPU)** (2023 – Present). In high school (Class XII PCM), he secured **75%** from Asha Modern International.`;
  }

  if (q.includes('college') || q.includes('university') || q.includes('education') || q.includes('degree') || q.includes('school')) {
    return `**Kartikye's Educational Journey:**\n\n- 🎓 **Lovely Professional University (LPU)**: B.Tech in Computer Science and Engineering (Aug 2023 – Present) with a **7.94 CGPA**.\n- 🏫 **Asha Modern International (Saharanpur, UP)**: Intermediate (Class XII PCM) with **75%** (2022–2023) and Matriculation with **75%** (2020–2021).`;
  }

  if (q.includes('roomify') || q.includes('3d') || (q.includes('ai') && q.includes('project'))) {
    return `**Roomify – AI-Powered 3D Room Design Web App (Jan 2026):**\n\n- **What it does:** Converts 2D architectural sketches into structured 3D spatial concepts automatically, drastically reducing manual 3D modeling time.\n- **Tech Stack:** React.js, JavaScript, AI Prompt Workflows, Serverless Workers, Key-Value Storage, Tailwind CSS.\n- **Scalability:** Validated by successfully processing over **100+ layout submissions** during intensive testing.\n- **Live App:** You can experience it live here: [roomify-ashen.vercel.app](https://roomify-ashen.vercel.app/) 🚀`;
  }

  if (q.includes('chat') || q.includes('socket') || q.includes('real-time') || q.includes('websocket')) {
    return `**Full-Stack Real-Time Chat Platform (Feb 2026):**\n\n- **Architecture:** High-concurrency bidirectional messaging engine using **Socket.io** achieving **sub-20ms latency**.\n- **Security & Storage:** Secure JWT token authentication, modular Express.js REST APIs, and MongoDB Atlas persistence.\n- **Validation:** Tested and verified under **50+ concurrent simulated users** with zero dropped packets.\n- **Live App:** Try the live deployment here: [vibechat-golf.onrender.com](https://vibechat-golf.onrender.com/) 🚀`;
  }

  if (q.includes('leetcode') || q.includes('dsa') || q.includes('hackerrank') || q.includes('problem') || q.includes('coding')) {
    return `**Competitive Programming & Problem Solving:**\n\n- 🏆 **LeetCode:** Solved **400+ DSA problems** across Dynamic Programming, Graphs, Trees, and Two Pointers.\n- 💎 **HackerRank Ratings:**\n  - **5 Stars** in C++ (Jan 2026)\n  - **5 Stars** in SQL (Jan 2026)\n  - **4 Stars** in Python (Jan 2026)\n- Core language of choice for algorithms is **C++** with high runtime efficiency.`;
  }

  if (q.includes('skill') || q.includes('tech stack') || q.includes('languages') || q.includes('framework')) {
    return `**Kartikye's Technical Arsenal:**\n\n- 💻 **Languages:** C++, Java, JavaScript (ES6+), SQL\n- ⚛️ **Frontend:** React.js, Tailwind CSS, HTML5, CSS3, Flexbox/Grid\n- 🚀 **Backend:** Node.js, Express.js, WebSockets (Socket.io), REST APIs, JWT\n- 🗄️ **Databases & Cloud:** MongoDB Atlas, MySQL, Serverless Workers, Cloud Computing (NPTEL)\n- 🎨 **Tools & UI/UX:** Git, GitHub, VS Code, Postman, Figma`;
  }

  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('reach') || q.includes('call')) {
    return `You can reach out to Kartikye directly through:\n\n- 📧 **Email:** [kartikyesaini@gmail.com](mailto:kartikyesaini@gmail.com)\n- 📱 **Phone / WhatsApp:** [+91 7906913880](tel:+917906913880)\n- 💼 **LinkedIn:** [linkedin.com/in/kartikye-saini](https://www.linkedin.com/in/kartikye-saini)\n- 🐙 **GitHub:** [github.com/kartikye99](https://github.com/kartikye99)\n\nHe is actively open for Software Engineering roles and internships!`;
  }

  if (q.includes('certificate') || q.includes('certif') || q.includes('nptel') || q.includes('training')) {
    return `**Certifications & Industry Training:**\n\n1. ☁️ **Cloud Computing** – NPTEL (Nov 2025)\n2. ☕ **Java Programming** – Neo Colab (May 2025)\n3. ⚡ **Data Structures & Algorithms (C++)** – Neo Colab (Dec 2024)\n4. 🌐 **Responsive Web Design** – FreeCodeCamp (Oct 2023)\n5. 🎨 **Think Design Prototype (Figma)** – Summer Training at LPU (July 2025)`;
  }

  if (q.includes('resume') || q.includes('cv')) {
    return `You can view and download Kartikye's complete, verified resume anytime by clicking the **"Resume"** button in the top navigation bar or asking me to open it!`;
  }

  return `Kartikye Saini is a Full-Stack Software Engineer and Computer Science undergrad at **Lovely Professional University (7.94 CGPA)** with **400+ LeetCode DSA solutions**, **5★ HackerRank in C++ & SQL**, and production projects in **AI 3D Room Design (Roomify)** and **Real-Time WebSockets (Chat App)**.\n\nFeel free to ask me specifically about his projects, CGPA, DSA accomplishments, or how to contact him!`;
}

// Main Gemini API caller function
export async function sendChatMessage(messages, customApiKey = '') {
  // Check API key from custom parameter, localStorage, or Vite environment
  const apiKey = 
    customApiKey || 
    (typeof window !== 'undefined' ? localStorage.getItem('kartikye_gemini_api_key') : '') || 
    import.meta.env.VITE_GEMINI_API_KEY || 
    '';

  const lastUserMessage = messages[messages.length - 1]?.content || '';

  // If no API key is provided, use our intelligent knowledge fallback engine
  if (!apiKey || apiKey.trim() === '' || apiKey === 'YOUR_GEMINI_API_KEY') {
    // Simulate slight natural latency (350ms)
    await new Promise(r => setTimeout(r, 350));
    return {
      text: generateLocalFallback(lastUserMessage),
      isFallback: true
    };
  }

  try {
    // Format conversation history for Gemini API
    const contents = messages.map(m => ({
      role: m.sender === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey.trim()}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: KARTIKYE_SYSTEM_PROMPT }]
        },
        contents: contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 650,
          topP: 0.95
        }
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.warn("Gemini API returned error, falling back to local knowledge:", errData);
      return {
        text: generateLocalFallback(lastUserMessage),
        isFallback: true,
        apiError: errData?.error?.message || `HTTP ${response.status}`
      };
    }

    const data = await response.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (candidateText) {
      return {
        text: candidateText,
        isFallback: false
      };
    } else {
      return {
        text: generateLocalFallback(lastUserMessage),
        isFallback: true
      };
    }
  } catch (error) {
    console.warn("Network error reaching Gemini, using fallback:", error);
    return {
      text: generateLocalFallback(lastUserMessage),
      isFallback: true,
      apiError: error.message
    };
  }
}
