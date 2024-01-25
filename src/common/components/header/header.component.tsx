import React from "react";

const Header: React.FC = () => {
  return (
    <header className="h-12 shadow-xl px-6">
      <div className="flex items-center h-full">
        <a href="/" className="text-xl font-semibold">
          🍕 PizzaStack
        </a>
      </div>
    </header>
  );
};

export default Header;
