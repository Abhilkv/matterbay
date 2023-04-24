import { lazy, Suspense } from "react";
import "styles/global.scss";

import { Loader } from "components";
const Home = lazy(() => import("pages"));

function App(): JSX.Element {
  return (
    <Suspense fallback={<Loader />}>
    <div className="App">
      <Home />
    </div>
  </Suspense>
  );
}

export default App;
