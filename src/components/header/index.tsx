import React from "react";
import styles from "./index.module.scss";

export const Header: React.FC = () => {
    return (
        <div className={styles.header}  >
            <h1 className={styles.title}>MatterBay</h1>
        </div>
    );
};
