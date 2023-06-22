import React from "react";
import { connect } from "react-redux";
const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
      <button onClick={rnd}>RND</button>
    </div>
  );
};
// передает пропсы из стейта в компонент
// возвращает обьект со сво-вами которые хочу вернуть
const mapStateToProps = (state) => {
  return {
    counter: state.value,
  };
};
export default connect(mapStateToProps)(Counter);
