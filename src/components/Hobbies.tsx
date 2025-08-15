import React from 'react';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SecurityIcon from '@mui/icons-material/Security';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import '../assets/styles/Hobbies.scss';


type Hobby = {
  label: string;
  icon: React.ReactNode;
};

const HOBBIES: Hobby[] = [
  {
    label: 'Badminton',
    icon: <SportsTennisIcon />
  },
  {
    label: 'Strategic Defense Analysis',
    icon: <SecurityIcon />
  },
  {
    label: 'Traveling',
    icon: <FlightTakeoffIcon />
  }
];

function Hobbies() {
  return (
    <div id="hobbies">
      <div className="items-container">
        <h1>Hobbies</h1>
        <div className="hobbies-grid" role="list">
          {HOBBIES.map(h => (
            <div key={h.label} className="hobby-card" role="listitem">
              <div className="hobby-icon" aria-hidden>{h.icon}</div>
              <div className="hobby-body">
                <h3>{h.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
