import React from "react";
import { MenuItem, SubHeading } from "../../components";

import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_food flex__center">
        <p className="app__specialMenu-menu_heading">BBQ & Sanwitches</p>
        <div className="app__specialMenu-menu_items">
          {data.foods.map((food, index) => (
            <MenuItem
              key={food.title + index}
              title={food.title}
              price={food.price}
              tags={food.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" className="" />
      </div>

      <div className="app__specialMenu-menu_drinks flex__center">
        <p className="app__specialMenu-menu_heading">Drinks</p>
        <div className="app__specialMenu-menu_items">
          {data.drinks.map((drink, index) => (
            <MenuItem
              key={drink.title + index}
              title={drink.title}
              price={drink.price}
              tags={drink.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
