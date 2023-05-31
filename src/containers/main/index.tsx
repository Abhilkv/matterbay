import React, { useEffect, useRef, useState } from "react";
import { useMachine } from '@xstate/react';
import styles from "./index.module.scss";
import { Card, Loader } from '../../components';
import { infiniteScrollMachine } from '../../machines/infinite';

const Main: React.FC = () => {
  const [current, send] = useMachine(infiniteScrollMachine);

  useEffect(() => {
    send('FETCH');
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && !current.matches('loading')) {
      send('FETCH');
    }
  };

  return (
  <div className={styles.main}>
    {current.matches('loading') && (<Loader />)}
    {(
       (current.context?.items?.length > 0) && current.context?.items?.map((cardItem) => (
        <Card data={cardItem.node} />
      )) 
    )}
  </div>);
};

export default React.memo(Main);
