import React from "react";

function LanguageChooser({ onLanguage }) {
  return (
    <div className="dropDown-con">
      <select className="select-con" onChange={onLanguage}>
        <option className="option" value="NONE">Choose your Language</option>
        <option className="option" value="ARABIC">Arabic</option>
        <option value="ENGLISH">English</option>
        <option value="GERMAN">German</option>
        <option value="RUSSIAN">Russian</option>
        <option value="PASHTO">Pashto</option>
        <option value="POLISH">Polish</option>
        <option value="KOREAN">Korean</option>
        <option value="ITALIAN">Italian</option>
      </select>
    </div>
  );
}

export default LanguageChooser;
