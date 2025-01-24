import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { APP_ROUTES } from "../../constants/routes";
import { AppLayout } from "./components/AppLayout";
import { GridPage } from "../../pages/GridPage";

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path={APP_ROUTES.GRID} element={<GridPage />} />
        <Route path="*" element={<Navigate to={APP_ROUTES.GRID} />} />
      </Routes>
    </AppLayout>
  );
};

export const AppProvider = () => {
  return (
    <Router>
      <App />
      <ToastContainer />
    </Router>
  );
};
