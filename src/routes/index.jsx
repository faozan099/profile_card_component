import { Routes, Route } from "react-router-dom";

import Card from "../components/card/Card";

const ROUTE_LIST = [
  {
    path: "/",
    element: <Card />,
  },
];

const URL = () => {
  return (
    <Routes>
      {ROUTE_LIST.map((route, index) => (
        <Route
          key={`route-${index}`}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};

export default URL;
