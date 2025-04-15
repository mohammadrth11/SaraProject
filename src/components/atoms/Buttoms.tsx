import { children, ReactNode } from "react";

type BtnProps = {
  title: string;
  link: string;
  color?: "red";
  children?: ReactNode;
};

function MainBtn({ title, link, color, children }: BtnProps) {
  const baseStyles = "px-10 py-2  duration-75 hover:bg-blue-600";
  const redStyles = "bg-[#ff0000] text-white";
  const defaultStyles = "bg-white text-blue-600 ";

  return (
    <a
      href={link}
      className={`${
        color === "red" ? redStyles : defaultStyles
      }  ${baseStyles}`}
    >
      {children || title}
    </a>
  );
}

export default MainBtn;
