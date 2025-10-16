import { forwardRef } from "react";
import guaranteeLogo from "../../assets/guarantee.svg";
import bottomLogo from "../../assets/logo.png";
import checkedIcon from "../../assets/checked.svg";
import styles from "./Card_1.module.css";
import { useEffect, useState } from "react";
import { processImage } from "../../app/processImage";
import logo1 from "../../assets/logo-1.png";
import logo2 from "../../assets/logo-2.png";
import logo3 from "../../assets/logo-3.png";
import logo4 from "../../assets/logo-4.png";

export type Type = "karcher" | "husqvarna" | "stiga" | "greenworks"

interface Card_1Props {
	type: Type;
	topTitle: string;
	guarantee: boolean;
	title: string;
	articul: string;
	image: string | null;
	element1: string;
	element2: string;
	element3: string;
}

export const Card_1 = forwardRef<HTMLDivElement, Card_1Props>(
	({ type, topTitle, guarantee, title, articul, image, element1, element2, element3 }, ref) => {
		const [processedImage, setProcessedImage] = useState<string | undefined>(undefined);
		const [loading, setLoading] = useState(false);

		const color = 
			type === "karcher" ? "#FFDE00" : 
			type === "husqvarna" ? "#2D3F65" : 
			type === "stiga" ? "#FFA600" : 
			type === "greenworks" ? "#82BB00" : "#FFFFFF";

		const logo = 
			type === "karcher" ? logo1 :
			type === "husqvarna" ? logo2 :
			type === "stiga" ? logo3 :
			type === "greenworks" ? logo4 : undefined;
	
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
				<div 
					className={styles.card_background} 
					style={{ 
						background: `linear-gradient(270deg, ${color} 0%, #FFFFFF 100%)` 
					}}>
				</div>
				{ guarantee ? <div className={styles.guarantee}><img src={guaranteeLogo} /></div> : ""}
				<div className={styles.card_content}>
					<div className={styles.top_content}>
						<div className={styles.top}>
							<div className={styles.logo}>{ logo ? <img src={logo} /> : ""}</div>
							<div className={styles.topTitle} dangerouslySetInnerHTML={{__html: topTitle}}></div>
						</div>
						<h3 className={styles.title} dangerouslySetInnerHTML={{__html: title}}></h3>
					</div>
					<div className={styles.image}>
						{loading ? (
								<div className={styles.loader}>Удаляем фон...</div>
							) : (
								processedImage && (
									<img
										src={processedImage}
									/>
								)
						)}
					</div>
					<div className={styles.bottom_content}>
						<div className={styles.elements}>
							<div className={styles.element}>
								<img src={checkedIcon} />
								<div dangerouslySetInnerHTML={{__html: element1}}></div>
							</div>
							<div className={styles.element}>
								<img src={checkedIcon} />
								<div dangerouslySetInnerHTML={{__html: element2}}></div>
							</div>
							<div className={styles.element}>
								<img src={checkedIcon} />
								<div dangerouslySetInnerHTML={{__html: element3}}></div>
							</div>
						</div>
						<div className={styles.bottom}>
							<p className={styles.articul}>{articul.replaceAll("/", "\n")}</p>
							<img src={bottomLogo} />
						</div>
					</div>
				</div>
			</div>
		);
	}
);
