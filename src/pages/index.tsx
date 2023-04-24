import React from "react";

import { Header, Footer } from "components";
import Main from '../containers/main'

const Home: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                maxHeight: "100vh",
            }}
        >
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Home;