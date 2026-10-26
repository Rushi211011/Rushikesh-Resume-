import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Cloud, Code2, Database, Github, Linkedin, Mail, Menu, ExternalLink, GraduationCap, BriefcaseBusiness, Award, MapPin, Sparkles, Workflow, Layers3, Terminal } from 'lucide-react';
import './style.css';

const skills = [
  { icon: Code2, title: 'Programming', items: ['Python', 'Java', 'C / C++', 'SQL'] },
  { icon: Layers3, title: 'Frontend & Web', items: ['React', 'JavaScript', 'HTML & CSS', 'WordPress', 'Elementor'] },
  { icon: Cloud, title: 'Cloud & Tools', items: ['AWS', 'Git', 'VS Code', 'Cloud fundamentals'] },
  { icon: Database, title: 'Data & Databases', items: ['MySQL', 'Pandas', 'NumPy', 'Tableau', 'Advanced Excel'] },
];
const projects = [
  { number: '01', name: 'TripSync', subtitle: 'AI Itinerary & Expense Planner', desc: 'A travel planning application with personalized itinerary generation and shared expense tracking for group trips.', tech: ['React', 'TypeScript', 'MySQL', 'AWS'], icon: Workflow, featured: true, link: '' },
  { number: '02', name: 'Student Management System', subtitle: 'Academic records, organized', desc: 'A Java application for managing student records, attendance, and grades, backed by a normalized relational database and CRUD operations.', tech: ['Java', 'MySQL', 'Database Design'], icon: Database, link: '' },
  { number: '03', name: 'Cloud & CI/CD Lab', subtitle: 'Learning by deploying', desc: 'Hands-on cloud infrastructure coursework exploring source control, automated build and deployment workflows, containers, and cloud services.', tech: ['AWS', 'Git', 'Docker / CI/CD*'], icon: Cloud, link: '' },
];
function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="nav-wrap"><nav className="nav container">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">RG</span><span>rushikesh<span className="brand-dot">.</span></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><Menu size={22}/></button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {['About','Skills','Projects','Journey','Contact'].map(x => <a key={x} href={'#'+x.toLowerCase()} onClick={closeMenu}>{x}</a>)}
        <a className="nav-cta" href="/Rushikesh-Gadekar-Resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={15}/></a>
      </div>
    </nav></header>
    <main>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> COMPUTER SCIENCE · CLOUD COMPUTING</div>
          <h1>Building for<br/><span className="gradient-text">what’s next.</span></h1>
          <p className="hero-lede">Hey, I’m <strong>Rushikesh Gadekar</strong> — a computer science student interested in cloud technology, thoughtful web experiences, and data-driven solutions.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17}/></a><a className="button button-quiet" href="#contact">Let’s connect <ArrowUpRight size={16}/></a></div>
          <div className="hero-meta"><span><MapPin size={14}/> Pune, India</span><span className="meta-divider"/><span>Open to learning & building</span></div>
        </div>
        <div className="hero-visual" aria-label="Cloud infrastructure illustration">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="visual-label label-top"><span className="mini-pulse"/> CLOUD / 01</div>
          <div className="cloud-core"><Cloud size={62} strokeWidth={1.15}/><span className="core-glow"/></div>
          <div className="node node-a"><Code2 size={19}/><span>BUILD</span></div><div className="node node-b"><Database size={19}/><span>DATA</span></div><div className="node node-c"><Workflow size={19}/><span>DEPLOY</span></div>
          <div className="connection connection-a"/><div className="connection connection-b"/><div className="connection connection-c"/>
          <div className="visual-label label-bottom">IDEAS → SYSTEMS → IMPACT</div>
          <span className="spark spark-one">✳</span><span className="spark spark-two">✦</span>
        </div>
        <a href="#about" className="scroll-cue"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
      </section>
      <section className="intro-band"><div className="container intro-inner"><span className="section-index">01 / A LITTLE ABOUT ME</span><p>I enjoy connecting <em>clean code</em>, useful data, and <em>cloud technology</em> to turn ideas into practical digital experiences.</p><a href="#about" className="round-link" aria-label="Read about me"><ArrowDownRight size={20}/></a></div></section>
      <section className="section container" id="about">
        <div className="section-heading"><div><span className="section-index">01 — ABOUT</span><h2>Curious by nature.<br/><span className="muted-heading">Builder by practice.</span></h2></div><p className="heading-note">I’m a B.Sc. Computer Science student at MIT World Peace University, Pune, specializing in Cloud Computing. I like understanding how applications work behind the scenes—from database design to the infrastructure that helps them run.</p></div>
        <div className="about-stats"><div className="stat"><span className="stat-number">8.52<span>/10</span></span><span className="stat-label">Academic CGPA</span></div><div className="stat"><span className="stat-number">02<span>+</span></span><span className="stat-label">Featured projects</span></div><div className="stat"><span className="stat-number">01</span><span className="stat-label">Web development internship</span></div><div className="stat stat-note"><Sparkles size={18}/><span>Always learning something new.</span></div></div>
      </section>
      <section className="section skills-section" id="skills"><div className="container"><div className="section-heading"><div><span className="section-index">02 — TOOLKIT</span><h2>Tools I work <span className="gradient-text">with.</span></h2></div><p className="heading-note">A growing toolkit for building interfaces, working with data, and exploring cloud infrastructure.</p></div>
        <div className="skill-grid">{skills.map(({icon:Icon,title,items},i)=><article className="skill-card" key={title}><div className="skill-card-top"><span className="skill-icon"><Icon size={21}/></span><span className="card-number">0{i+1}</span></div><h3>{title}</h3><div className="tags">{items.map(item=><span className="tag" key={item}>{item}</span>)}</div></article>)}</div>
      </div></section>
      <section className="section container" id="projects"><div className="section-heading"><div><span className="section-index">03 — SELECTED WORK</span><h2>Projects with <span className="gradient-text">purpose.</span></h2></div><p className="heading-note">A selection of academic and personal work where software, data, and problem-solving meet.</p></div>
        <div className="project-list">{projects.map(({number,name,subtitle,desc,tech,icon:Icon,featured})=><article className={`project-card ${featured?'project-featured':''}`} key={name}><div className="project-topline"><span className="project-number">{number} / PROJECT</span><span className="project-icon"><Icon size={22}/></span></div><div className="project-content"><div><p className="project-subtitle">{subtitle}</p><h3>{name}</h3></div><p className="project-desc">{desc}</p></div><div className="project-bottom"><div className="tags">{tech.map(t=><span className="tag" key={t}>{t}</span>)}</div><span className="project-arrow" title="Project details"><ArrowUpRight size={20}/></span></div></article>)}</div>
        <p className="fine-print">*Cloud & CI/CD Lab describes coursework and hands-on learning. Update this card with the exact tools and repository you completed before presenting.</p>
      </section>
      <section className="section journey-section" id="journey"><div className="container"><div className="section-heading"><div><span className="section-index">04 — THE JOURNEY</span><h2>Learning, then <span className="gradient-text">doing.</span></h2></div><p className="heading-note">A few milestones that have shaped my technical and personal growth.</p></div>
        <div className="timeline">
          <article className="timeline-item"><div className="timeline-icon"><GraduationCap size={20}/></div><div className="timeline-date">JUN 2023 — PRESENT</div><div className="timeline-main"><h3>B.Sc. Computer Science — Cloud Computing</h3><p>MIT World Peace University · Pune, India</p><span className="timeline-detail">Relevant coursework: Big Data Analytics, Cloud Computing (AWS, Azure, Google Cloud), and DBMS.</span></div></article>
          <article className="timeline-item"><div className="timeline-icon"><BriefcaseBusiness size={20}/></div><div className="timeline-date">OCT 2025 — JAN 2026</div><div className="timeline-main"><h3>Web Developer Intern</h3><p>GAO TEK Inc. · Remote</p><span className="timeline-detail">Worked on relational database design, SQL query optimization, and responsive website improvements using WordPress, Elementor, HTML, CSS, and JavaScript.</span></div></article>
          <article className="timeline-item"><div className="timeline-icon"><Award size={20}/></div><div className="timeline-date">2025</div><div className="timeline-main"><h3>Machine Learning & Deep Learning</h3><p>NIT Goa under MIT-WPU · Certification</p><span className="timeline-detail">Studied supervised and unsupervised learning, deep learning fundamentals, and hands-on model building.</span></div></article>
          <article className="timeline-item"><div className="timeline-icon"><Sparkles size={20}/></div><div className="timeline-date">2018 — PRESENT</div><div className="timeline-main"><h3>Community & Personal Development</h3><p>Lions International Club of Pune Unique · Volunteer</p><span className="timeline-detail">Helped coordinate educational programs, health camps, and community outreach; participated in a Guinness World Record workshop initiative.</span></div></article>
        </div>
      </div></section>
      <section className="cloud-strip"><div className="container cloud-strip-inner"><div className="strip-icon"><Terminal size={25}/></div><div><span className="section-index">CURRENT FOCUS</span><h2>From local builds to the cloud.</h2><p>Exploring how reliable infrastructure and well-designed applications come together.</p></div><div className="strip-orbit"><Cloud size={42}/><span/></div></div></section>
      <section className="section contact-section container" id="contact"><span className="section-index">05 — GET IN TOUCH</span><h2>Have an idea?<br/><span className="gradient-text">Let’s talk.</span></h2><p className="contact-copy">I’m always happy to connect about technology, projects, and opportunities to learn and build.</p><a className="email-link" href="mailto:rushikeshgadekar2105@gmail.com">rushikeshgadekar2105@gmail.com <ArrowUpRight size={19}/></a><div className="contact-bottom"><span>Made with curiosity & code.</span><div className="social-links"><a href="https://www.linkedin.com/in/rushikesh-gadekar-568077260" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href="mailto:rushikeshgadekar2105@gmail.com" aria-label="Email"><Mail size={18}/></a><a href="/Rushikesh-Gadekar-Resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume"><ExternalLink size={18}/></a></div><a href="#home" className="back-top">BACK TO TOP ↑</a></div></section>
    </main>
    <footer className="footer"><div className="container"><a className="brand" href="#home"><span className="brand-mark">RG</span><span>rushikesh<span className="brand-dot">.</span></span></a><span>© {new Date().getFullYear()} Rushikesh Gadekar</span><span>Designed for the next idea.</span></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
