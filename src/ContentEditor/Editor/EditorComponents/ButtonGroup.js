/* @flow */

import React from "react";
import cx from "classnames";

import "./ButtonGroup.css";

export default function ButtonGroup(props) {
  let className = cx(props.className, "button-group");
  return <div {...props} className={className} />;
}
