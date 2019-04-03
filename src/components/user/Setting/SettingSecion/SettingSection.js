import React from 'react';
import './SettingSection.scss';

const SettingSection = ({ title, children }) => {
  return (
    <div className="SettingSection">
      <h4>{title}</h4>
      <div className="section-content">{children}</div>
    </div>
  );
};

export default SettingSection;
