import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import Event from "./Otherpages/Event";
import About from "./Otherpages/About";
import News from "./Otherpages/News";
import Connect from "./Otherpages/Connect";
import Project from "./Otherpages/Project";

const Otherpages = () => {
  let { links } = useParams();
  let { url, path } = useRouteMatch();
  console.log(url);
  console.log(path);
  console.log(links);

  switch (links) {
    case "about":
      return <About />;
    case "event":
      return <Event />;
    case "news":
      return <News />;
    case "connect":
      return <Connect />;
    case "projects":
      return <Project />;
    default:
      return null;
  }
};

export default Otherpages;
