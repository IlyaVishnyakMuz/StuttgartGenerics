import { forwardRef, useEffect, useState } from "react";
import styles from "./Card_5.module.css";
import logo from "../../assets/logo.png";
import { processImage } from "../../app/processImage";


interface Card_5Props {
  title: string;
  description: string;
  image: string | null;
}

export const Card_5 = forwardRef<HTMLDivElement, Card_5Props>(
  ({ title, description, image }, ref) => {
    const [processedImage, setProcessedImage] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (!image) {
            setProcessedImage(undefined);
            return;
        }

        const run = async () => {
            try {
                setLoading(true);
                const result = await processImage(image);
                setProcessedImage(result ?? image);
            } catch (error) {
                console.error("Ошибка при обработке:", error);
                setProcessedImage(image);
            } finally {
                setLoading(false);
            }
        };

        run();
    }, [image]);

    return (
      <div className={styles.card} ref={ref}>
        <div className={styles.content}>
          <h3 className={styles.title} dangerouslySetInnerHTML={{__html: title}}></h3>
          <p className={styles.description} dangerouslySetInnerHTML={{__html: description}}></p>
        </div>

        <div className={styles.image}>
          {loading ? (
            <div className={styles.loader}>Удаляем фон...</div>
          ) : (
            <img
              src={processedImage || image || "https://placehold.co/600x400/EEE/213123"}
              alt={title}
              className={styles.trimmedImage}
            />
          )}
        </div>

        <div className={styles.logo}>
          <img src={logo} alt="Логотип" />
        </div>
      </div>
    );
  }
);
