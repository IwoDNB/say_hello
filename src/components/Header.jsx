import { React, useContext } from "react";
import LanguageChooser from "./LanguageChooser";
import { MyContext } from "../context";

function Header() {
  const { dispatch } = useContext(MyContext);
  const onLanguage = (e) => {
    e.preventDefault();
    dispatch({ type: e.target.value });
  };

  return (
    <div className="header-con">
      <LanguageChooser onLanguage={onLanguage} />
    </div>
  );
}

export default Header;
