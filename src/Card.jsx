import React from "react";
import Image from "./Image";
import Heading from "./Heading";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <Image imgscr={props.imgscr} />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <Heading/>
            <a href={props.link} target="blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
