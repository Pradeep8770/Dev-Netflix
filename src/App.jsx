import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const App = () => {
  return (
    <>
      <h1 className="heading"> Top 5 Netflix web series</h1>
      <div className="cards_page">
        {Sdata.map((value) => {
          return (
            <Card
              key={value.id}
              imgscr={value.imgscr}
              sname={value.sname}
              title={value.title}
              link={value.link}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
