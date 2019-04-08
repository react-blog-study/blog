import React from 'react';
import MarkdownEditor from 'components/common/MarkdownEditor';
import './UserAboutEdit.scss';
const UserAboutEdit = ({ text, onChange, onSave, flash }) => {
  return (
    <div className="UserAboutEdit">
      <MarkdownEditor
        placeholder="자기소개를 작성해보세요.
  * markdown을 사용 하실 수 있습니다."
        value={text}
        onChange={onChange}
        flash={flash}
      />
      <div className="btn-wrapper">
        <button onClick={onSave}>저장</button>
      </div>
    </div>
  );
};

export default UserAboutEdit;
