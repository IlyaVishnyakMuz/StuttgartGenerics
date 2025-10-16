import { forwardRef } from "react";
import styles from "./Card_4.module.css";

interface Card_4Props {
  title: string;
  description: string;
  image: string | null;
}

export const Card_4 = forwardRef<HTMLDivElement, Card_4Props>(
  ({ title, description, image }, ref) => {
    return (
      <div className={styles.card} ref={ref}>
        <div className={styles.image}>
          <img
            src={image ? image : "https://placehold.co/600x400/EEE/213123"}
            alt={title}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title} dangerouslySetInnerHTML={{__html: title}}></h3>
          <p className={styles.description} dangerouslySetInnerHTML={{__html: description}}></p>
        </div>
      </div>
    );
  }
);
