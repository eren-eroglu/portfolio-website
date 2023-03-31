import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [myState, setMyState] = useState("Hello, I'm Eren Eroğlu.");
  const [myStateSecond, setMyStateSecond] = useState(
    "What would you like to know?"
  );
  const [myStateThird, setMyStateThird] = useState("Here are my skills:");
  const [myStateFourth, setMyStateFourth] = useState(
    "⭐ Here are my favorite projects ⭐"
  );
  const [skills, setSkills] = useState("Skills");
  const [projects, setProjects] = useState("Projects");
  const [contact, setContact] = useState("Contact");
  const [home, setHome] = useState("Back Home");
  const [cybershotsdesc, setCybershotsdesc] = useState(
    "'Cyber Shots' is a React-based app that utilizes the Unsplash API to provide users with a cyberpunk-themed alternative to Unsplash. With Tailwind CSS, the user interface is highly customizable and provides a visually stunning experience for browsing and downloading high-quality, royalty-free images."
  );
  const [cyberblogsdesc, setCyberblogsdesc] = useState(
    "'Cyber Blogs' is a React app built with Tailwind CSS, designed to be a platform for sharing my personal tech related blog posts. The app offers a simple and user-friendly interface to read my blog posts, as well as a streamlined way to manage and search existing posts."
  );
  const [timelessdesc, setTimelessdesc] = useState(
    "'Timeless Love' is a React-based app built with Tailwind CSS, designed to help couples calculate how long they have been together. The app offers a simple and intuitive user interface, where users can enter their anniversary date and the app will calculate and display the number of days, months, and years they have been together."
  );
  const [contactText, setContactText] = useState(
    'Check out my social media to keep in touch.'
  );
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
        setHome,
        myStateFourth,
        setMyStateFourth,
        cybershotsdesc,
        setCybershotsdesc,
        cyberblogsdesc,
        setCyberblogsdesc,
        timelessdesc,
        setTimelessdesc,
        contactText,
        setContactText,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
