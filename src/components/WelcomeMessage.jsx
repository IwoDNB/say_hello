import { useContext, React } from "react";
import { MyContext } from "../context";

function WelcomeMessage() {
  const { state } = useContext(MyContext);

  return (
    <div className="msg-con">
      <h1>{state.isLanguage}</h1>
    </div>
  );
}

export default WelcomeMessage;
