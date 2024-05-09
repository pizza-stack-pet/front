import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { type Pizza } from "../../types/pizza";

interface MenuListProps {
  items: Pizza[];
}

const MenuList: React.FC<MenuListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
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