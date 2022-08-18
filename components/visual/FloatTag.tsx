import { ReactNode } from "react";
import styles from "../../styles/FloatTag.module.scss";

interface FloatTagProps {
  children: ReactNode;
}

const FloatTag = ({ children }: FloatTagProps) => (
  <div className={styles.floatTag}>{children}</div>
);

export default FloatTag;
