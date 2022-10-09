import { createContext } from "react";
import { useReducer } from "react";

// Our Context function
export const MyContext = createContext();

// useReducer Function

const initialState = { isLanguage: "Say Hello to the rest of the world in a different language!!" };

const reducer = (state, action) => {
  switch (action.type) {
    case "NONE":
      return {
        ...state,
        isLanguage: "Welcome World!",
      };

    case "GERMAN":
      return {
        ...state,
        isLanguage: "Hallo Welt!",
      };

    case "ARABIC":
      return {
        ...state,
        isLanguage: "مرحبا بالعالم !",
      };
    case "ENGLISH":
      return {
        ...state,
        isLanguage: "Hello World !",
      };
    case "RUSSIAN":
      return {
        ...state,
        isLanguage: "Привет, мир!",
      };
    case "POLISH":
      return {
        ...state,

        isLanguage: "Halo Świecie! ",
      };
    case "PASHTO":
      return {
        ...state,
        isLanguage: "سلام نړی!",
      };
    case "KOREAN":
      return {
        ...state,
        isLanguage: "안녕 세상!",
      };
    case "ITALIAN":
      return {
        ...state,
        isLanguage: "Ciao mondo!",
      };

    default:
      return state;
  }
};

// Provider
export default function MyProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MyContext.Provider>
  );
}
