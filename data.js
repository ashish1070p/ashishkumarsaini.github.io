// ============================================================
//  👋 HI ASHISH! THIS IS YOUR CONTENT FILE.
//  You only ever need to edit THIS file — never touch index.html
//  To update anything on your portfolio, just change the text here,
//  save the file, and upload both files to GitHub. That's it!
// ============================================================

const PORTFOLIO = {

  // ── YOUR BASIC INFO ──────────────────────────────────────
  name: "Ashish Kumar Saini",
  tagline: "OD & Change Leadership · Samsung R&D · TISS Mumbai",
  about: `I'm a people-first professional at the intersection of technology, human behaviour, and organisational change. With 4+ years at LTIMindtree, an ongoing internship at Samsung R&D Delhi, and a Master's at TISS Mumbai, I've built a rare blend of technical rigour and human insight. My journey from software quality engineering to HR & OD is not a pivot — it's an evolution. I believe the best professionals are translators: between people and process, between strategy and execution.`,
  photo: "photo.jpeg",   // ← Your photo file — keep both files in the same folder
  email: "ashishak.saini25@gmail.com",
  phone: "+91 7895327767",
  linkedin: "https://www.linkedin.com/in/ashish-saini-80204612a",
  github: "",   // left blank — not needed
  location: "Delhi / Mumbai · Open to Relocation",
  openToWork: false,  // Set to true when you're looking for opportunities

  // ── STATS (shown on hero) ────────────────────────────────
  stats: [
    { number: "4+",   label: "Years Industry Experience" },
    { number: "2", label: "HR Internships" },
    { number: "1",  label: "OD Consulting Project" },
  ],

  // ── CHIPS (shown below your name) ───────────────────────
  chips: ["HR & OD", "Change Management", "OD Consulting", "Samsung R&D", "L&D Design", "Process Improvement", "Generative AI", "Creative Writing"],

  // ── EXPERIENCE ───────────────────────────────────────────
  // To ADD a new job: copy one { block }, paste it at the top, fill in details
  experience: [
    {
      company: "Samsung R&D Institute India",
      role: "HR",
      type: "Summer Internship",
      date: "April 2026 – June 2026",
      tags: ["HR", "OD", "R&D"],
      points: [
        "Currently interning at Samsung R&D Delhi as part of my Summer Internship",
        "Engaging with HR practices within a leading global technology research organisation",
      ]
    },
    {
      company: "Aseema Charitable Trust, Mumbai",
      role: "OD Consultant (Leadership as Service)",
      type: "Academic Engagement · TISS",
      date: "Feb 2026 – Mar 2026",
      tags: ["OD Consulting", "Process Consultation", "Data Audit", "NGO", "Change Management"],
      points: [

        "Delivered a mixed-methods feedback session to senior leadership — presenting school-by-school error rates alongside causal analysis — received with visible recognition and commitment to action",
      ]
    },
    {
      company: "Cilicant",
      role: "HR Intern",
      type: "Field Immersion · F.I. 1",
      date: "Sep 2025 – Oct 2025",
      tags: ["HR", "FGD", "L&D", "Policy Design"],
      points: [
        "Conducted FGDs and interviews with 30+ workers to uncover HR challenges, producing actionable policy refinement insights",
        "Designed JDs for 50+ employees, defining competencies, KRAs, and performance metrics to improve role clarity",
        "Proposed targeted L&D initiatives to build capability and drive a culture of continuous improvement",
      ]
    },
    {
      company: "LTIMindtree",
      role: "Senior Quality Engineer",
      type: "Full Time",
      date: "Jul 2023 – Oct 2024",
      tags: ["Quality", "Stakeholder Management", "L&D", "Change Management"],
      points: [
        "Facilitated cross-functional collaboration for smoother adoption of new processes, reducing change resistance",
        "Led onboarding and KT sessions, cutting new hire time-to-productivity significantly",
        "Enhanced process tracking on a high-visibility project, reducing post-deployment issues by 30%+",
        "Developed L&D resources including training materials and process documentation",
        "Designed and implemented improvement plans resulting in a 30%+ reduction in repeated issues",
      ]
    },
    {
      company: "LTIMindtree",
      role: "Software Quality Engineer",
      type: "Full Time",
      date: "Jul 2021 – Jun 2023",
      tags: ["Selenium", "WebDriverIO", "JIRA", "Automation Testing"],
      points: [
        "Managed regression suite of 800+ test cases and sanity suite of 300+ test cases, reducing defect leakage",
        "Led transformation from manual testing to automation using Selenium and WebDriverIO",
        "Engineered automated suites, cutting manual testing effort by 40%+ and improving coverage",
        "Streamlined defect resolution, reducing turnaround time by 50%+ through accurate tracking",
        "Conducted in-depth root cause analysis for recurring challenges and process gaps",
      ]
    },
    {
      company: "LTIMindtree",
      role: "Graduate Engineer Trainee",
      type: "Full Time",
      date: "Jun 2020 – Jun 2021",
      tags: ["Functional Testing", "JIRA", "End-to-End Testing"],
      points: [
        "Executed end-to-end testing — functional, system, regression, and sanity — ensuring reliable releases",
        "Reported and tracked defects in JIRA with thorough documentation for clarity and traceability",
      ]
    },
    {
      company: "Jamura Robotics",
      role: "MEAN Cloud Application Developer",
      type: "Internship",
      date: "Jun 2019 – Sep 2019",
      tags: ["MEAN Stack", "Cloud", "Node.js"],
      points: [
        "Contributed to a cloud-based education portal supporting server-side infrastructure using the MEAN stack",
        "Facilitated stakeholder meetings, enhancing requirement clarity and aligning team priorities",
        "Received 'Excellent' rating for project understanding, communication, and quality of work",
      ]
    },
  ],

  // ── EDUCATION ────────────────────────────────────────────
  education: [
    {
      institution: "Tata Institute of Social Sciences, Mumbai",
      degree: "MA — Organisational Development & Change Leadership",
      score: "Pursuing",
      year: "2024 – 2026",
    },
    {
      institution: "University of Petroleum and Energy Studies",
      degree: "B.Tech — Computer Science Engineering",
      score: "7.89 CGPA",
      year: "2020",
    },
    {
      institution: "St. Mary's Sr. Sec. School (CBSE)",
      degree: "Class XII",
      score: "89.4%",
      year: "2015",
    },
    {
      institution: "St. Mary's Sr. Sec. School (CBSE)",
      degree: "Class X",
      score: "10 CGPA",
      year: "2013",
    },
  ],

  // ── SKILLS ───────────────────────────────────────────────
  // To ADD a skill: add a new line like { icon: "🔥", name: "Skill Name", category: "Category" }
  skills: [
    { icon: "🧠", name: "OD Interventions",     category: "HR & OD" },
    { icon: "🔄", name: "Change Management",    category: "HR & OD" },
    { icon: "📋", name: "JD Design",            category: "HR & OD" },
    { icon: "📊", name: "Performance Metrics",  category: "HR & OD" },
    { icon: "🎓", name: "L&D Design",           category: "HR & OD" },
    { icon: "🗣️", name: "FGDs & Interviews",   category: "HR & OD" },
    { icon: "🤝", name: "Stakeholder Mgmt",     category: "HR & OD" },
    { icon: "✍️", name: "Business Writing",     category: "HR & OD" },
    { icon: "🧪", name: "Quality Engineering",  category: "Technology" },
    { icon: "🤖", name: "Selenium",             category: "Technology" },
    { icon: "⚙️", name: "WebDriverIO",          category: "Technology" },
    { icon: "🐛", name: "JIRA",                 category: "Technology" },
    { icon: "☁️", name: "AWS",                  category: "Technology" },
    { icon: "📈", name: "Power BI",             category: "Technology" },
    { icon: "⛓️", name: "Blockchain",           category: "Technology" },
    { icon: "🌐", name: "MEAN Stack",           category: "Technology" },
    { icon: "✨", name: "Generative AI",        category: "AI & Data" },
    { icon: "💬", name: "ChatGPT / LLMs",       category: "AI & Data" },
    { icon: "📊", name: "Big Data Analytics",   category: "AI & Data" },
    { icon: "🔍", name: "SEO Writing",          category: "AI & Data" },
  ],

  // ── COURSEWORK INSIGHTS ──────────────────────────────────
  // Replace with your actual TISS subjects and YOUR key insight from each
  coursework: [
    {
      subject: "Organisational Behaviour",
      insight: "People don't resist change — they resist loss. Understanding motivation, group dynamics, and perception shifted how I diagnose organisational problems entirely.",
    },
    {
      subject: "Human Resource Management",
      insight: "HR is not support — it's strategy. The most impactful interventions happen when HR is embedded in business decisions, not called in after them.",
    },
    {
      subject: "Organisation Development & Change",
      insight: "Change cannot be mandated — it must be co-created. Participatory diagnosis and planned interventions are far more sustainable than top-down directives.",
    },
    {
      subject: "Research Methods",
      insight: "Data without context is noise. I learned to combine quantitative rigour with qualitative depth — a rare skill in HR practice today.",
    },
    {
      subject: "Labour Law & Industrial Relations",
      insight: "Compliance is the floor, not the ceiling. The best IR environments are built on trust and dialogue, not just legal frameworks.",
    },
    {
      subject: "Leadership & Team Dynamics",
      insight: "Leadership is contextual. The same person needs different leadership at different stages. Adaptive leadership is the most underrated corporate skill.",
    },
  ],

  // ── CERTIFICATIONS ───────────────────────────────────────
  certifications: [
    { icon: "🤖", title: "Generative AI for Business Leaders",        source: "LinkedIn Learning", year: "2025" },
    { icon: "📊", title: "Microsoft Power BI — Data Modeling",        source: "Udemy",             year: "2025" },
    { icon: "⛓️", title: "Blockchain A-Z: Build a Blockchain",        source: "Udemy",             year: "2024" },
    { icon: "💬", title: "ChatGPT: Ethical Use of Generative AI",     source: "Udemy",             year: "2024" },
    { icon: "☁️", title: "AWS Partner: Accreditation (Business)",     source: "AWS Official",      year: "2022" },
  ],

  // ── EXTRA-CURRICULAR ─────────────────────────────────────
  extras: [
    { text: "Participated in IBM's Gurukool 2019 — expert-led lectures and hands-on project workshops",                    year: "2019" },
    { text: "Published SEO-optimised pop culture articles on TheCinemaholic reaching 2M+ monthly readers",                 year: "2018" },
    { text: "Attended execution-focused workshop on Big Data Analytics & Visualisation by ACM",                            year: "2018" },
    { text: "Participated in hands-on Amazon Web Services (AWS) workshop organised by UPES CSI club",                     year: "2018" },
    { text: "Completed Personality Enhancement Program by the Centre for Professional Communication",                      year: "2016" },
  ],

  // ── POSITION OF RESPONSIBILITY ───────────────────────────
  por: {
    role: "Class Representative",
    org: "TISS Mumbai",
    year: "2025",
    points: [
      "Represented a cohort of 34 students, driving collaboration and fostering a cohesive learning environment",
      "Mediated and resolved 20+ academic and administrative issues, strengthening trust and class engagement",
      "Led 5+ peer-learning and academic engagement initiatives, fostering teamwork and collective performance",
    ]
  },

  // ── INTERESTS ────────────────────────────────────────────
  interests: [
    { icon: "♟️", label: "Chess — Strategic Thinking" },
    { icon: "📚", label: "Fiction Reading" },
    { icon: "🌀", label: "Paradoxes & Logic Puzzles" },
    { icon: "✍️", label: "Creative Writing" },
  ],

  blogs: [
    {
      title: "Advice for Your MBA Journey",
      date: "May 2026",
      summary: "Eight honest lessons from someone still in the middle of it — on panic, comparison, SIP shortlists, criticism, and everything in between.",
      tags: ["MBA", "Student Life", "Reflection", "TISS"],
      content: `
        <p>Eight honest lessons from someone still in the middle of it.</p>

        <h3>1. Don't Panic</h3>
        <p>There will be stretches when you feel completely overwhelmed — but here's the truth: everyone around you feels the same way. You are not alone in this. Learn to calm yourself down, take small breaks whenever you can, and find something that genuinely helps you decompress. What works for someone else may not work for you, so figure out your own reset button and use it without guilt.</p>

        <h3>2. Comparison Is the Thief of Joy</h3>
        <p>Life is not fair, and an MBA will not be either. The sooner you accept this, the lighter you will feel. Focus on your own journey. When someone around you achieves something great, congratulate them sincerely and move on. Do not let jealousy take root. And when you achieve something great, accept the acknowledgment graciously and move on. Do not let it make you cocky. Neither jealousy nor arrogance serves you here.</p>

        <h3>3. SIP Shortlists Are Not a Measure of Your Competence</h3>
        <p>When that first shortlist goes up and your name is not on it, the initial excitement can quickly turn to dread. As companies come and go, and the people around you start getting placed while you are still waiting, it can get very dark mentally. Here is what you do: every time you do not get a shortlist, go home and work harder than those who did. Repeat this for every missed shortlist, until you are placed. It is far better to be prepared for an opportunity that does not come than to have an opportunity and not be prepared for it.</p>

        <h3>4. Be Okay With Criticism</h3>
        <p>Seek feedback, even when it is uncomfortable — especially when it is uncomfortable. Understanding your weaknesses is one of the most powerful things you can do for yourself. You will not be able to fix all of them, and that is fine, but simply knowing what they are gives you a clarity that most people never develop. The people who improve the fastest are rarely the most talented; they are the ones most willing to hear hard things about themselves and act on them.</p>

        <h3>5. Do Not Psychoanalyse Everything</h3>
        <p>Humans are pattern-seeking creatures — we see dogs in clouds, faces on the moon, and country maps in skid marks. The same instinct can make you overanalyse the decisions of people around you, searching for meaning or motive that may not exist. Many decisions others make will be ones you simply do not understand, and that is okay. Learn to let things go. Stay informed, but do not become a gossip machine.</p>

        <h3>6. Get Into the Habit of Reading</h3>
        <p>Even one page a day puts you one page ahead of everyone who read nothing. Reading is one of those compounding habits that quietly sets you apart from the crowd over time. It sharpens how you think, how you communicate, and how you see problems. Start small, stay consistent.</p>

        <h3>7. Learn to Use AI Effectively</h3>
        <p>Use AI tools for routine, repetitive, and low-cognitive tasks — formatting a presentation, organizing research, structuring insights into a readable format. Even using AI to brainstorm or pressure-test your thinking is perfectly fine, as long as you actually understand what the tool is suggesting and why. The best use case for any AI tool is to make your thinking sharper, not to replace it.</p>

        <h3>8. Be Humble</h3>
        <p>If you find yourself in a position of responsibility or influence during your two years here, wear it lightly. Everyone around you is a student doing their best, navigating the same pressures and uncertainties. Power, even in small doses, comes with real responsibility. Treat people accordingly.</p>
      `,
    },
  ],

}; // ← Don't delete this line!
