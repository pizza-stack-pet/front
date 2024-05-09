import React from "react";

interface FooterLinkProps extends React.PropsWithChildren {
  href: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <a
        href={href}
        className="text-sm transition-colors font-medium text-gray-400 hover:text-gray-300 hover:underline underline-offset-4"
      >
        {children}
      </a>
    </li>
  );
};

export default FooterLink;