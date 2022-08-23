import React from "react";
import Map from "../../../assets/Map.png";
const Page = () => {
  return (
    <div className="page__container">
      <div className="page__wrapper">
        <div className="page__hero">
          <div className="page__image"></div>

          <div className="page__text">
            <h1>Where do you find us?</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              facilis eveniet reprehenderit at temporibus alias illo id
              provident minus accusantium culpa corrupti neque soluta, animi
              veritatis adipisci cumque officia consectetur quos! Unde
              accusantium laboriosam numquam sunt incidunt sit at iste.
              Praesentium eum tempore id voluptatem consequuntur rem possimus
              aut quis?
            </p>
            <img src={Map} width="400" height="200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
