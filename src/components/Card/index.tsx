import { formatCurrency } from "@/utils/formatters";
import styles from "./Card.module.css";

interface CardProps {
  header: string;
  classType: string;
  currency?: boolean;
  value?: number;
  text?: string;
}

export default function Card({
  header,
  classType = "profitLoss",
  value,
  currency,
  text,
}: CardProps) {
  let content;

  if (currency && value) {
    content = formatCurrency(value);
  } else if (value && !text) {
    content = value;
  } else {
    content = text;
  }

  return (
    <div className={`${styles.container} ${styles[classType]}`}>
      <h3 className={styles.header}>{header}</h3>
      <h4 className={styles.content}>{content}</h4>
    </div>
  );
}
