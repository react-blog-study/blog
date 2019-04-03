import React from 'react';
import cx from 'classnames';
import './Toggler.scss';

const Toggler = ({ text, active }) => {
  return (
    <div className="Toggler">
      <div className={cx('toggle-box', active)}>
        <div className="circle" />
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Toggler;
