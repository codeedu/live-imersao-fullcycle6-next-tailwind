import * as React from "react";
import styles from "./Button.module.css";

type variants = "primary" | "secondary";
type ButtonProps = {
  variant?: variants;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// const primaryClasses = "bg-yellow-500 text-black  hover:bg-yellow-600";
// const secondaryClasses = "bg-black text-yellow-500 hover:bg-slate-800";

// const VariantMap = {
//   primary: primaryClasses,
//   secondary: secondaryClasses,
// };

const VariantMap = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { variant = "primary", ...otherProps } = props;
  //const defaultClassName = "rounded font-bold py-2 px-4";
  const className = [styles.root, VariantMap[variant]];
  return (
    <button {...otherProps} className={className.join(" ")}>
      {props.children}
    </button>
  );
};

//Tailwind CSS é class por style - Falácia e discussão que quem não conhece