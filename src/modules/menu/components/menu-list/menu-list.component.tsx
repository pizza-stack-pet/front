import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { type Pizza } from "../../types/pizza";

interface MenuListProps {
  items: Pizza[];
}

const MenuList: React.FC<MenuListProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {items.map(({ image, ...pizza }) => (
        <MenuItem
          key={`pizza-${pizza.id}`}
          imagePath={`/assets/pizza/${image}`}
          {...pizza}
        />
      ))}
    </div>
  );
};

export default MenuList;
