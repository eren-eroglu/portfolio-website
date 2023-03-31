import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [myState, setMyState] = useState("Hello, I'm Eren Eroğlu.");
  const [myStateSecond, setMyStateSecond] = useState(
    "What would you like to know?"
  );
  const [myStateThird, setMyStateThird] = useState("Here are my skills:");
  const [skills, setSkills] = useState("Skills");
  const [projects, setProjects] = useState("Projects");
  const [contact, setContact] = useState("Contact");
  const [home, setHome] = useState('Back Home')
  return (
    <MyContext.Provider
      value={{
        myState,
        setMyState,
        myStateSecond,
        setMyStateSecond,
        lang,
        setLang,
        skills,
        setSkills,
        projects,
        setProjects,
        contact,
        setContact,
        myStateThird,
        setMyStateThird,
        home,
        setHome
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
