import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    theme: {
      pcr: [
        "bg-[#85B8BA]",
        "hover:bg-[#9DC7C9]",
      ],
      pcp: [
        "bg-[#878ED8]",
        "hover:bg-[#9EA3DD]"
      ],
      pdp: [
        "bg-[#91A9EA]",
        "hover:bg-[#A6BAF0]"
      ],
      pca: [
        "bg-[#5CB5F6]",
        "hover:bg-[#77C3FA]"
      ],
    },
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  theme,
  ...props
}) => <button className={button({ theme, className }) + " text-base py-2 px-4 text-white border-transparent rounded-lg"} {...props} />;
export default Button;