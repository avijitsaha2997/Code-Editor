import React from "react";
import "./CodeEditor.css";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

function CodeEditor({ displayName, language, value, onChange }) {
  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button className="buttonOC">O/C</button>
      </div>

      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}

export default CodeEditor;
