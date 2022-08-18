import { createElement, ElementType, ReactNode } from "react";
import styles from "./Banner.module.scss";

interface BannerProps {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

const Banner = ({ className = "", component = "div", ...props }: BannerProps) =>
  createElement(component, {
    ...props,
    className: `${styles.banner} ${className}`,
  });

export default Banner;
