/* @flow */

import React from "react";
import cx from "classnames";

import "./ButtonWrap.css";

export default function ButtonWrap(props) {
  let className = cx(props.className, "button-wrap");
  return <div {...props} className={className} />;
}
