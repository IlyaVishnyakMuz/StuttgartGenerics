import { forwardRef } from "react";
import styles from "./Card_3.module.css";

interface Card_3Props {
  title: string;
  image: string | null;
}

export const Card_3 = forwardRef<HTMLDivElement, Card_3Props>(
  ({ title, image }, ref) => {
    return (
      <div className={styles.card} ref={ref}>
        <div className={styles.content}>
            <div className={styles.image}>
                <img
                    src={image ? image : "https://placehold.co/600x400/EEE/213123"}
                />
            </div>
            <h3 className={styles.title} dangerouslySetInnerHTML={{__html: title}}></h3>
        </div>
      </div>
    );
  }
);
