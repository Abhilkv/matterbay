import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

import { Card, Loader } from '../../components';

const Main: React.FC = () => {
  const [page, setPage] = useState(1);
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    setLoading(true);
    fetch(`http://localhost:3001/api/${page}`)
      .then((response) => response.json())
      .then((data) => {
        setListData((prev) =>( [...prev, ...(data.nodes)]));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error)
      });
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && !loading) {
      setPage((prev) => prev + 1);
    }
  };


  return (
  <div className={styles.main}>
    {loading ? (
    <Loader />
    ) : (
      (listData?.length > 0) && listData?.map((cardItem) => (
        <Card data={cardItem.node} />
      )) 
    )}
  </div>);
};

export default React.memo(Main);
