import React from "react";
import styles from "./index.module.scss";

type CardProps = Record<string, any>;

export const  formatDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZoneName: "short",
    }).format(date);
    return formattedDate;
  }

export const Card: React.FC<CardProps> = (props) => {
  const { title, ImageStyle_thumbnail, last_update } = props.data;
  return (
    <div className={styles.card}>
      <img
        src={ImageStyle_thumbnail}
        width={250}
        height={200}
        alt="img"
        className={styles.cardImage}
      />
      <div className={styles.cardText}>
        <h1 className={styles.header}>{title.length > 66 ? title.slice(0, 66) + "..." : title}</h1>
        <div>{formatDate(last_update || '')}</div>
      </div>
    </div>
  );
};
