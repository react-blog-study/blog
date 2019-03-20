import React from "react";
import "./LoginTemplate.scss";
const LoginTemplate = ({ children }) => {
  return (
    <div className="LoginTemplate">
      <div className="left">
        <div className="logo">Velog</div>
        <h2 className="title">개발자들은 대체 글을 어디서 써야 할까....?</h2>
        <div>
          개발자들의 취향저격하는 글쓰기 플랫폼이 바로 여기에,
          <br />
          고민하지 말고 지금 시작하자.
        </div>
      </div>
      <div className="right">{children}</div>
    </div>
  );
};

export default LoginTemplate;
