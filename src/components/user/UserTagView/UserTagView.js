import React from 'react';
import './UserTagView.scss';

const UserTagView = () => {
  return (
    <div className="UserTagView">
      <section>
        <div className="section-title">태그</div>
        <ul>
          <li>
            <a href="" className="active">
              전체보기
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default UserTagView;
