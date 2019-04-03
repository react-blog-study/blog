import React from 'react';
import './SavePostTemplate.scss';

const SavePostTemplate = ({ header, children }) => {
  return (
    <div className="SettingTemplate">
      {header}
      <main>
        <h2>임시 글 목록</h2>
        {children}
      </main>
    </div>
  );
};

export default SavePostTemplate;
