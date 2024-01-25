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
    <div className="w-96 shadow-md rounded-b-lg bg-slate-50">
      <div className="relative">
        <img
          className="object-cover object-center w-full h-[15rem] rounded-t-lg"
          src={imagePath}
          alt={`Піцца ${title}`}
        />
        <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-full">
          {weight} г
        </span>
      </div>

      <div className="p-8">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mb-8">{ingredients}</p>
        <span className="text-xl font-medium text-slate-900">{price} грн</span>
      </div>
    </div>
  );
};

export default MenuItem;
