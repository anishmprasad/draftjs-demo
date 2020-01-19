import React from "react";
import Editor from "./Editor";
console.log(Editor);
export default function RichTextEditor(props) {
  return React.cloneElement(Editor, props);
}
