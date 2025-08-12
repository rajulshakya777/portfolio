import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

type JourneyItem = {
  date: string;
  role: string;
  company: string;
  location: string;
  highlight: string; // concise high‑impact line
  details: string[]; // full description bullets
  companyUrl: string; // external link
  logo: string; // path under /professional-journey
};

// Wrap numeric tokens in a <strong> for emphasis (e.g., 60%, 50+, 1.5K, 800GB -> 800, 0.7101)
function formatHighlight(text: string) {
  const regex = /([0-9]+(?:\.[0-9]+)?(?:K)?\+?%?)/g;
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) => {
        if (regex.test(part)) {
          // reset lastIndex since test with global advances it
          regex.lastIndex = 0;
          return <strong key={i} className="metric">{part}</strong>;
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}

const JOURNEY: JourneyItem[] = [
  {
    date: 'May 2025 – Present',
    role: 'Software Engineer (GenAI)',
    company: 'Sera Digital Corp',
  location: 'Remote',
  companyUrl: 'https://www.seradigital.com/',
  logo: '/professional-journey/Sera_logo.jpeg',
    highlight: 'Private AI infrastructure (LLM fine‑tuning on CMMC) + optimized RAG/CAG (policy retrieval latency ↓60%).',
    details: [
      'Building private AI infrastructure for DoD contractors by fine‑tuning an LLM on CMMC compliance standards.',
  'Developing a Retrieval- & Context-Augmented Generation (RAG/CAG) system leveraging internal Obsidian knowledge to automate auditing and cut policy retrieval latency by 60% over a structured knowledge base.',
      'Engineering cross‑functional, CMMC‑compliant WinDev applications to meet DoD standards.'
    ]
  },
  {
    date: 'Jan 2025 – May 2025',
    role: 'AI & Software Engineer',
    company: 'Assembli AI',
  location: 'Remote',
  companyUrl: 'https://www.assembli.ai/',
  logo: '/professional-journey/assembli_ai_logo.jpeg',
    highlight: 'Cut construction pricing & proposal time from 50+ hours to minutes via an LLM pipeline.',
    details: [
      'Early AI team member; built an end‑to‑end pricing pipeline (extraction, standardization, structuring) with LLMs.',
      'Reduced cost estimation & proposal generation from 50+ hours to minutes.',
      'Developed an AI agent for project‑specific Q&A including intelligent material grade selection.'
    ]
  },
  {
    date: 'Feb 2024 – Jul 2024',
  role: 'Co-founder (Tech)',
    company: 'SkyRang',
    location: 'Madhya Pradesh, India',
  companyUrl: 'https://skyrang.in/',
  logo: '/professional-journey/skyrang-logo.png',
    highlight: 'Architected & launched an online decoration services platform (700+ users across 3 cities).',
    details: [
      'Technical co‑founder: owned architecture & development of the full platform (content, orders, admin modules).',
      'Stack: Java, JSP/Servlets, Hibernate, MySQL, JavaScript.',
      'Deployed & managed on AWS; scaled to 700+ users across 3 cities.'
    ]
  },
  {
    date: 'Feb 2024 – May 2024',
    role: 'Student Researcher',
    company: 'University of Nebraska Omaha',
    location: 'Omaha, NE (USA)',
  companyUrl: 'https://www.unomaha.edu/',
  logo: '/professional-journey/uno-logo.png',
    highlight: 'Optimized distributed neural network training across a 5‑GPU Kubernetes cluster.',
    details: [
      'Implemented distributed training methods (e.g., CIPHAR) across 5 GPU nodes in Kubernetes.',
      'Fine‑tuned large language models for advanced NLP tasks.'
    ]
  },
  {
    date: 'Jul 2021 – Jan 2024',
    role: 'Software Development Engineer',
    company: 'Jio Platforms',
    location: 'Bangalore, India',
  companyUrl: 'https://www.jio.com/',
  logo: '/professional-journey/jio-logo.png',
    highlight: 'Centralized cache (CCMS 800GB, 1.5K RPS) + feature toggling tool (CLT ↓30%) & cache dashboard for JioMart.',
    details: [
      'Front-end: Designed and implemented a dashboard that efficiently managed the JioMart cache cluster handling millions of daily requests.',
      'Backend: Led end-to-end Distributed Cache-as-a-Service proof of concept using Redis, including an interactive UI for usability.',
      'Backend: Reduced Change Lead Time (CLT) by 30% by implementing a feature toggling tool enabling independent deployments and streamlining releases.',
      'Conducted 15+ SDE interviews: interviewed and evaluated SDE I, II, and III candidates, supporting JioMart engineering talent growth.'
    ]
  },
  {
    date: 'Jul 2020 – Aug 2020',
    role: 'Machine Learning Intern',
    company: 'Techvolt Software',
    location: 'Coimbatore, India',
  companyUrl: 'https://www.techvoltcoimbatore.com/',
  logo: '/professional-journey/techvolt-logo.jpeg',
    highlight: 'Used ML to predict used car prices (R² = 0.7101).',
    details: [
      'Predicted second/third‑hand car prices using mileage, fuel type, engine capacity & other features.',
      'Achieved an R² score of 0.7101 leveraging ML modeling & feature engineering.'
    ]
  },
  {
    date: 'Feb 2020 – Apr 2020',
    role: 'Summer Intern (Machine Learning)',
    company: 'Vyorius Drones LLP',
    location: 'New Delhi, India',
  companyUrl: 'https://www.vyorius.com/',
  logo: '/professional-journey/vyorius-logo.jpeg',
    highlight: 'Analyzed geospatial data to propose 150+ optimal drone hub and station locations.',
    details: [
      'Applied ML & geospatial analysis to locate 150+ optimal drone hubs across the Andaman & Nicobar Islands.',
      'Integrated government geospatial datasets (hospitals, power stations, blood banks, population sparsity).'
    ]
  }
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional Journey</h1>
        <VerticalTimeline>
          {JOURNEY.map(exp => (
            <VerticalTimelineElement
              key={exp.role + exp.date}
              className="vertical-timeline-element--work journey-item"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date={exp.date}
              iconStyle={{ background: '#ffffff', color: 'rgb(39, 40, 34)', boxShadow: '0 0 0 4px #e2e2e2, inset 0 0 0 1px #f7f7f7' }}
              icon={
                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" aria-label={exp.company + ' website'} className="company-icon-link">
                  <div className="company-icon-wrapper" data-initials={exp.company.split(/\s+/).map(w => w[0]).slice(0,3).join('').toUpperCase()}>
                    <img
                      src={(exp.logo.startsWith('http') ? exp.logo : (process.env.PUBLIC_URL + (exp.logo.startsWith('/') ? exp.logo : '/' + exp.logo)))}
                      alt={exp.company + ' logo'}
                      loading="lazy"
                      onError={e => {
                        const img = e.currentTarget;
                        const wrapper = img.parentElement;
                        if (wrapper) {
                          wrapper.classList.add('fallback');
                        }
                        img.remove();
                      }}
                    />
                  </div>
                </a>
              }
            >
              <h3 className="vertical-timeline-element-title">{exp.role}</h3>
              <h4 className="vertical-timeline-element-subtitle"><a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="company-link">{exp.company}</a> · {exp.location}</h4>
              <p className="journey-highlight">{formatHighlight(exp.highlight)}</p>
              <div className="journey-details">
                <ul>
                  {exp.details.map(d => <li key={d}>{d}</li>)}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;