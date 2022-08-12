import styles from "../styles/Card.module.css";
import { ReactNode } from "react";

interface CardProps {
  className: string;
  children: ReactNode;
}
const Card = ({ className, children }: CardProps) => (
  <li className={`${styles.card} ${className}`}>{children}</li>
);
export default Card;
