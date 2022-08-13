import styles from "../../styles/Card.module.css";
import { ReactNode, ElementType, createElement } from "react";

interface CardProps {
  className: string;
  children: ReactNode;
  component?: ElementType;
}
const Card = ({ component = "div", className, ...props }: CardProps) =>
  createElement(component, {
    ...props,
    className: `${styles.card} ${className}`,
  });

export default Card;
