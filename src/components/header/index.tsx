import React from "react";
import styles from "./index.module.scss";

export const Header: React.FC = () => {
    return (
        <div className={styles.header}  >
            <span className={styles.title}>MatterBay</span>
        </div>
    );
};
