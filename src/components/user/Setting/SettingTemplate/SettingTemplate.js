import React from 'react';
import './SettingTemplate.scss';
import { FaCog as SettingIcon } from 'react-icons/fa';

const SettingTemplate = ({ header, children }) => {
  return (
    <div className="SettingTemplate">
      {header}
      <main>
        <h2>
          <SettingIcon />
          설정
        </h2>
        {children}
      </main>
    </div>
  );
};

export default SettingTemplate;
