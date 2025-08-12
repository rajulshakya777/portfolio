import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type EduItem = {
  date: string;
  title: string;
  subtitle: string;
  logo: string;
  alt: string;
  extraLine?: string;
  url: string;
};

const EDU: EduItem[] = [
  {
    date: 'Jan 2024 – May 2025',
  title: 'University of Nebraska Omaha (NE), USA',
  subtitle: 'M.S., IT Innovation',
    logo: process.env.PUBLIC_URL + '/education-logos/uno-logo.png',
    alt: 'UNO Logo',
  url: 'https://www.unomaha.edu/'
  },
  {
    date: 'Jul 2017 – May 2021',
    title: 'Indian Institute of Technology (IIT) Roorkee, India',
    subtitle: 'B.Tech, Electronics & Communication Engineering',
    logo: process.env.PUBLIC_URL + '/education-logos/iitr-logo.png',
    alt: 'IIT Roorkee Logo',
  url: 'https://www.iitr.ac.in/'
  },
  {
    date: 'Jun 2014 – Apr 2016',
  title: 'Jawahar Navodaya Vidyalaya Bundi (RAJ), India',
  subtitle: 'Dakshana Foundation Scholar',
  extraLine: 'Two‑year residential coaching scholarship',
    logo: process.env.PUBLIC_URL + '/education-logos/dakshana.jpg',
    alt: 'Dakshana Foundation Logo',
  url: 'https://www.dakshana.org/'
  },
  {
    date: 'Jul 2008 – May 2015',
  title: 'Jawahar Navodaya Vidyalaya Guna (MP), India',
  subtitle: 'Central Board of Secondary Education',
    logo: process.env.PUBLIC_URL + '/education-logos/jnv-logo.png',
    alt: 'JNV Guna Logo',
  url: 'https://www.navodaya.gov.in/nvs/nvs-school/GUNA/en/about_us/About-JNV/'
  },
];

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          {EDU.map((e) => (
            <VerticalTimelineElement
              key={e.title}
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date={e.date}
              iconStyle={{ background: '#ffffff', color: 'rgb(39, 40, 34)', boxShadow: '0 0 0 4px #e2e2e2, inset 0 0 0 1px #f7f7f7' }}
              icon={
                <a href={e.url} target="_blank" rel="noopener noreferrer" aria-label={e.title + ' website'} style={{
                  width: '100%', height: '100%', display: 'grid', placeItems: 'center', background: '#fff', borderRadius: '50%', overflow: 'hidden', textDecoration: 'none'
                }}>
                  <img src={e.logo} alt={e.alt} style={{ width: '70%', height: '70%', objectFit: 'contain' }} />
                </a>
              }
            >
              <h3 className="vertical-timeline-element-title"><a href={e.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{e.title}</a></h3>
              {e.extraLine ? (
                <p>
                  {e.subtitle}
                  <br />
                  {e.extraLine}
                </p>
              ) : (
                <p>{e.subtitle}</p>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
