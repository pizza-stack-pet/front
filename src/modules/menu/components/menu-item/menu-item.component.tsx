import React from "react";

interface MenuItemProps {
  imagePath: string;
  weight: number;
  title: string;
  ingredients: string;
  price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  imagePath,
  ingredients,
  price,
  title,
  weight,
}) => {
  return (
    <div className="w-full flex flex-col shadow-md rounded-md bg-slate-50">
      <div className="relative">
        <img
          className="object-cover object-center w-full h-[15rem] rounded-t-md"
          src={imagePath}
          alt={`Піцца ${title}`}
        />
        <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-full">
          {weight} г
        </span>
      </div>

      <div className="p-8 flex flex-col gap-2 justify-between h-full">
        <div className="">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p>{ingredients}</p>
        </div>
        <span className="text-xl font-medium text-slate-900 shrink-0">
          {price} грн
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
