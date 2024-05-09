import Header from "./common/components/header/header.component";
import MenuList from "./modules/menu/components/menu-list/menu-list.component";
import PIZZA_MENU from "@/mocks/pizza.json";

export const App = () => {
  return (
    <div className="font-sans antialiased bg-slate-50 text-slate-900">
      <Header />
      <div className="mx-12 mb-24">
        <MenuList items={PIZZA_MENU} />
      </div>
    </div>
  );
};
