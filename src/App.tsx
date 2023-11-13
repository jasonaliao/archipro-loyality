// App.tsx - modified with <Layout>
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"; // Import the Layout component

import { Dashboard, GetPoints, Benefits, MyAccount, QRScanView } from "./views/index";


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/get-points",
    element: <GetPoints />,
  },
  {
    path: "/get-points/qr-scan",
    element: <QRScanView />,
  },
  {
    path: "/benefits",
    element: <Benefits />,
  },
  {
    path: "/my-account",
    element: <MyAccount />,
  },
];
