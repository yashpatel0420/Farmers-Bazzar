import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  if (props.href) {
    return (
      <a
        className={`cmp-button cmp-button--${props.size || "default"} ${
          props.inverse && "cmp-button--inverse"
        } ${props.danger && "cmp-button--danger"}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`cmp-button cmp-button--${props.size || "default"} ${
          props.inverse && "cmp-button--inverse"
        } ${props.danger && "cmp-button--danger"}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`cmp-button cmp-button--${props.size || "default"} ${
        props.inverse && "cmp-button--inverse"
      } ${props.danger && "cmp-button--danger"}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
