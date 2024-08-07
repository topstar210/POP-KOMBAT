import { useIntegration } from "@telegram-apps/react-router-integration";
import { Navigate, Route, Router, Routes } from "react-router-dom";

import { useApp } from "@/providers/useApp";

// import { routes } from '@/navigation/routes.tsx';
import Layout from "@/layout/MainLayout";
import HomePage from "@/pages/HomePage/HomePage";
import MinePage from "@/pages/MinePage/MinePage";
import FriendsPage from "@/pages/FriendsPage/FriendsPage";
import EarnPage from "@/pages/EarnPage/EarnPage";
import AirdropPage from "@/pages/AirdropPage/AirdropPage";

// import { IndexPage } from "@/pages/IndexPage/IndexPage";
import { InitDataPage } from "@/pages/InitDataPage/InitDataPage";
import { LaunchParamsPage } from "@/pages/LaunchParamsPage/LaunchParamsPage";
import { TONConnectPage } from "@/pages/TONConnectPage/TONConnectPage";

const AppRouter = () => {
  const { navigator } = useApp();
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
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/earn" element={<EarnPage />} />
          <Route path="/airdrop" element={<AirdropPage />} />

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
