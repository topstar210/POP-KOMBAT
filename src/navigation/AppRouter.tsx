import { useIntegration } from "@telegram-apps/react-router-integration";
import { initNavigator } from "@telegram-apps/sdk-react";
import { Navigate, Route, Router, Routes } from "react-router-dom";

import { useMemo } from "react";

// import { routes } from '@/navigation/routes.tsx';
import Layout from "@/layout/MainLayout";
import HomePage from "@/pages/HomePage/HomePage";
import MinePage from "@/pages/MinePage/MinePage";
// import { IndexPage } from "@/pages/IndexPage/IndexPage";
import { InitDataPage } from "@/pages/InitDataPage/InitDataPage";
import { LaunchParamsPage } from "@/pages/LaunchParamsPage/LaunchParamsPage";
import { TONConnectPage } from "@/pages/TONConnectPage/TONConnectPage";

const AppRouter = () => {
  // Create a new application navigator and attach it to the browser history, so it could modify
  // it and listen to its changes.
  const navigator = useMemo(() => initNavigator("app-navigation-state"), []);
  const [location, reactNavigator] = useIntegration(navigator);

  // // Don't forget to attach the navigator to allow it to control the BackButton state as well
  // // as browser history.
  // useEffect(() => {
  //   navigator.attach();
  //   return () => navigator.detach();
  // }, [navigator]);

  return (
    <Router location={location} navigator={reactNavigator}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/mine" element={<MinePage />} />
          <Route path="/init-data" element={<InitDataPage />} />
          <Route path="/launch-params" element={<LaunchParamsPage />} />
          <Route path="/ton-connect" element={<TONConnectPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
