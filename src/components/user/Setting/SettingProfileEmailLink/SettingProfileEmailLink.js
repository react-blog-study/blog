import React from 'react';
import './SettingProfileEmailLink.scss';

const SettingProfileEmailLink = ({ text, address, onChange, templateUrl }) => {
  return (
    <div className="SettingProfileEmailLink">
      <div className="label">{text}</div>
      <div className="input-wrapper">
        {templateUrl && <div className="template-url">{templateUrl}</div>}
        <input type="text" value={address} onChange={onChange} />
      </div>
    </div>
  );
};

export default SettingProfileEmailLink;
