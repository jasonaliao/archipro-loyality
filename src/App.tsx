import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"; // Import the Layout component
import "./styles/variables.css";
import { UserContextProvider, user } from "./context/User";

import {
  Dashboard,
  GetPoints,
  Benefits,
  MyAccount,
  QRScanView,
} from "./views/index";

const App = () => {
  return (
    <Router>
      <UserContextProvider user={user}>
        <Layout>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Layout>
      </UserContextProvider>
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
