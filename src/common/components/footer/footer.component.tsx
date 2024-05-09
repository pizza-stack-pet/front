import React from "react";
import FooterLink from "../footer-link/footer-link.component";

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-900 p-12 flex flex-col gap-8">
      <div>
        <div className="mb-4">
          <span className="uppercase text-sm text-bold text-zinc-500">
            Контакти
          </span>
        </div>

        <ul>
          <FooterLink href="tel:+380501234567">(050) 123 45 67</FooterLink>
          <FooterLink href="mailto:info@pizzastack.com">
            info@pizzastack.com
          </FooterLink>
        </ul>
      </div>
      <hr aria-hidden className="border-zinc-500" />
      <div className="">
        <span className="text-xl font-semibold text-slate-50">
          🍕 PizzaStack
        </span>
      </div>
    </div>
  );
};

export default Footer;