import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";


const languageOptions = [
  {
    label: "Afrikaans",
    value: "af"
  },
  {
    label: "Arabic",
    value: "ar"
  },
  {
    label: "Hindi",
    value: "hi"
  },
  {
    label: "Russian",
    value: "ru"
  },
  {
    label: "Belarusian",
    value: "be"
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(
    languageOptions[languageOptions.length - 1]
  );
  const [text, setText] = useState(''); 

  return(
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input 
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown 
        label="Select a Language"
        options={languageOptions}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert
        text={text}
        language={language}
      />
    </div>
  );
};

export default Translate;