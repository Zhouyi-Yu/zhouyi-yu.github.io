"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Code2, Database, Globe, Network } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const projects = [
    {
      id: "01",
      title: "Neo4j RAG System",
      category: "AI Engineering / Cloud Deployment",
      desc: "Production-grade RAG pipeline reduced latency from 50s to <20s using Speculative Parallel Synthesis.",
      link: "#",
      tags: ["FastAPI", "Neo4j", "Docker", "React"]
    },
    {
      id: "02",
      title: "Textile Risk Engine",
      category: "Data Science / Machine Learning",
      desc: "Global supply chain analytics platform using ML forecasts and Monte Carlo risk simulations.",
      link: "#",
      tags: ["Python", "Pandas", "XGBoost", "Jupyter"]
    },
    {
      id: "03",
      title: "Distributed MapReduce",
      category: "Systems Programming / Concurrency",
      desc: "High-performance parallel processing framework rewritten in Go. Handles concurrent task distribution.",
      link: "#",
      tags: ["Go", "Distributed Systems", "Mutex/Locking"]
    },
    {
      id: "04",
      title: "Polyglot News Manager",
      category: "Data Engineering / TUI",
      desc: "Hybrid Go/Python ETL pipeline loading JSONL data into MongoDB with a Rich Terminal UI.",
      link: "#",
      tags: ["Go", "MongoDB", "Python", "Rich CLI"]
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-white selection:text-black">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
        <span className="text-xl font-bold tracking-tighter">ZY.</span>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#work" className="hover:opacity-50 transition-opacity">WORK</a>
          <a href="#about" className="hover:opacity-50 transition-opacity">ABOUT</a>
          <a href="mailto:zhouyi1@ualberta.ca" className="hover:opacity-50 transition-opacity">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-end pb-20 px-6 md:px-12 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
        </motion.div>

        <div className="z-10 relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 mb-4 font-light tracking-wide"
          >
            Software Engineer / Systems & AI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-[12vw] leading-[0.85] font-bold tracking-tighter mb-8"
          >
            ZHOUYI<br />YU
          </motion.h1>

          <div className="flex gap-6 mt-8">
            <SocialLink href="https://github.com/Zhouyi-Yu" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/zhouyiyu" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="mailto:zhouyi1@ualberta.ca" icon={<Mail size={20} />} label="Email" />
          </div>
        </div>
      </header>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="mb-20">
          <span className="text-neutral-500 text-sm tracking-widest uppercase border-b border-neutral-800 pb-2">Selected Works</span>
        </div>

        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* About / Skills Section */}
      <section id="about" className="py-32 px-6 md:px-12 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
            Engineering intelligent systems that scale.
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed mb-12">
            I am a Computer Engineering Coop Student at the University of Alberta.
            My expertise lies in <span className="text-white font-medium">low-level systems programming</span>,
            <span className="text-white font-medium">distributed data pipelines</span>, and
            <span className="text-white font-medium">production-grade AI</span>.
            I don't just write code; I design resilient architectures.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <SkillCol title="Languages" items={["Python (Expert)", "Go (Golang)", "Java", "C/C++", "TypeScript"]} />
            <SkillCol title="Infrastructure" items={["Docker / K8s", "Neo4j GraphDB", "MongoDB", "AWS / GCP", "Linux"]} />
            <SkillCol title="AI / Data" items={["RAG Pipelines", "Vector Search", "PySpark", "Pandas", "LLM Agents"]} />
            <SkillCol title="Web" items={["FastAPI", "React / Next.js", "TailwindCSS", "Node.js"]} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 text-center border-t border-neutral-800 text-neutral-500">
        <p className="text-sm">© 2025 Zhouyi Yu. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}

function ProjectItem({ project }: { project: any }) {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group border-t border-neutral-800 py-16 flex flex-col md:flex-row justify-between md:items-start gap-6 hover:bg-neutral-900/30 transition-colors"
    >
      <div className="md:w-1/4">
        <span className="text-neutral-500 font-mono text-xl">/{project.id}</span>
      </div>

      <div className="md:w-3/4">
        <h3 className="text-3xl md:text-5xl font-bold mb-4 group-hover:text-neutral-300 transition-colors">
          {project.title}
        </h3>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">{project.category}</span>
          <span className="hidden md:inline text-neutral-700">|</span>
          <p className="text-neutral-400 max-w-lg">{project.desc}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((t: string, i: number) => (
            <span key={i} className="px-3 py-1 rounded-full border border-neutral-800 text-xs text-neutral-500">
              {t}
            </span>
          ))}
        </div>

        <a href={project.link} className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-all">
          View Project <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.div>
  )
}

function SocialLink({ href, icon, label }: { href: string, icon: any, label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-800 hover:bg-white hover:text-black transition-all duration-300 group"
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </a>
  )
}

function SkillCol({ title, items }: { title: string, items: string[] }) {
  return (
    <div>
      <h4 className="text-neutral-500 mb-4 font-mono text-sm uppercase">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm md:text-base text-neutral-300">{item}</li>
        ))}
      </ul>
    </div>
  )
}
