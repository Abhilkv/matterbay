import React from "react";
 
    
import styles from "./index.module.scss";

export const Footer: React.FC = () => {

  return (
    <div className={styles.footer}>
        <div className={styles.icons}  >
            <a href="https://github.com/Abhilkv" target="_blank" >
                <img  src="/icons/github-icon.svg" alt="github" width="28" height="29" />
            </a>
            <a
                href="https://www.youtube.com/feed/library"
                target="_blank"
            >
                <img  src="/icons/youtube-icon.svg" alt="youtube" width="28" height="29" />
            </a>
            <a
                href="https://www.linkedin.com/in/abhil-vidhyadharan-950b65197/"
                target="_blank"
            >
                <img  src="/icons/linkedin-icon.svg" alt="linkedin" width="28" height="32" />
            </a>
        </div>
    </div>
  );
};
