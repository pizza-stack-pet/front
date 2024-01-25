import React from "react";
import PIZZA_MENU from "@app/mocks/pizza.json";
import MenuItem from "../menu-item/menu-item.component";

interface MenuListProps {}

const MenuList: React.FC<MenuListProps> = () => {
  return (
    <div className="flex flex-wrap gap-10">
      {PIZZA_MENU.map(({ image, ...pizza }) => (
        <MenuItem imagePath={`/assets/pizza/${image}`} {...pizza} />
      ))}
    </div>
  );
};

export default MenuList;
