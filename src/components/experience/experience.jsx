import React from 'react';
import './experience.css';
import experienceData from '../../data/experienceData';

const Experience = () => {
  return (
    <div>
      {experienceData.map((element, Index) => (
        <div key={Index} className="title">
          {element.titleSmall && <small>{element.titleSmall}</small>}
          {element.title && <h1>{element.title}</h1>}
        </div>
      ))}
      <div className="experieces">
        <div className="experience">
         
        </div>
      </div>
    </div>
  );
};

export default Experience;
