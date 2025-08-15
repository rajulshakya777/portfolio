import React from 'react';
import '../assets/styles/Courses.scss';

type Course = {
  title: string; // full course name (without provider) OR combined with provider using dash
  iconKey: string; // used to resolve icon
  provider: string; // institution / platform
};

const COURSES: Course[] = [
  { title: 'Advanced System Analysis and Design', provider: 'University of Nebraska at Omaha', iconKey: 'uno' },
  { title: 'Advanced Software Engineering', provider: 'University of Nebraska at Omaha', iconKey: 'uno' },
  { title: 'NoSQL and Big Data', provider: 'University of Nebraska at Omaha', iconKey: 'uno' },
  { title: 'Machine Learning & Data Analysis using Python', provider: 'EICT Academy · IIT Roorkee', iconKey: 'eict' },
  { title: 'Introduction to Algorithms & Analysis', provider: 'NPTEL', iconKey: 'nptel' },
  { title: 'Computer Architectures & Microprocessors', provider: 'IIT Roorkee', iconKey: 'iitr' },
  { title: 'Data Structures & Algorithms', provider: 'IIT Roorkee', iconKey: 'iitr' },
  { title: 'Embedded Systems', provider: 'IIT Roorkee', iconKey: 'iitr' },
  { title: 'Fundamentals of OOP (Java & C++)', provider: 'IIT Roorkee', iconKey: 'iitr' },
  { title: 'Probability & Statistics', provider: 'IIT Roorkee', iconKey: 'iitr' },
  { title: 'Strategic Human Resources Management', provider: 'IIT Roorkee', iconKey: 'iitr' },
  { title: 'Intro to Containers (Docker, K8s & OpenShift)', provider: 'Coursera', iconKey: 'coursera' },
  { title: 'Business Etiquette: Phone, Email & Text', provider: 'LinkedIn Learning', iconKey: 'linkedin' },
  { title: 'Learning Bitcoin & Other Cryptocurrencies', provider: 'LinkedIn Learning', iconKey: 'linkedin' },
  { title: 'Java Essential Training: Objects & APIs', provider: 'LinkedIn Learning', iconKey: 'linkedin' },
  { title: 'Intro to Data Structures & Algorithms in Java', provider: 'LinkedIn Learning', iconKey: 'linkedin' }
];

// Attempt to resolve icon path; fall back to provider initials if not found.
function resolveIcon(key: string): { src?: string; fallback: string } {
  const baseCourses = process.env.PUBLIC_URL + '/courses-icons/';
  const educationBase = process.env.PUBLIC_URL + '/education-logos/';
  switch (key) {
    case 'uno':
      return { src: educationBase + 'uno-logo.png', fallback: 'UNO' };
    case 'iitr':
      return { src: educationBase + 'iitr-logo.png', fallback: 'IIT' };
    case 'eict':
      return { src: baseCourses + 'eict.jpeg', fallback: 'EICT' };
    case 'nptel':
      return { src: baseCourses + 'nptel.jpg', fallback: 'NPTEL' };
    case 'linkedin':
      return { src: baseCourses + 'linkedin.svg', fallback: 'IN' };
    case 'coursera':
      // Using IBM.png as a placeholder if Coursera icon not present
      return { src: baseCourses + 'IBM.png', fallback: 'C' };
    default:
      return { fallback: key.substring(0, 3).toUpperCase() };
  }
}

const Courses: React.FC = () => {
  return (
    <div id="courses" className="courses-section">
      <div className="items-container">
        <h1>Courses & Certifications</h1>
        <div className="courses-list" role="list">
          {COURSES.map(c => {
            const icon = resolveIcon(c.iconKey);
            return (
              <div key={c.title + c.provider} className="course-item" role="listitem">
                <div className={"course-icon" + (!icon.src ? ' fallback' : '')} data-fallback={icon.fallback}>
                  {icon.src && (
                    <img
                      src={icon.src}
                      alt={c.provider + ' logo'}
                      loading="lazy"
                      onError={e => { e.currentTarget.remove(); }}
                    />
                  )}
                </div>
                <div className="course-text">
                  <h3 className="course-name">{c.title}</h3>
                  <p className="course-provider">{c.provider}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
