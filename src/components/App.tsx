import { useIntegration } from "@telegram-apps/react-router-integration";
import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  initNavigator,
  useLaunchParams,
  useMiniApp,
  useThemeParams,
  useViewport,
} from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { type FC, useEffect, useMemo } from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";

// import { routes } from '@/navigation/routes.tsx';
import Layout from "@/layout/MainLayout";
import HomePage from "@/pages/HomePage/HomePage";
// import { IndexPage } from "@/pages/IndexPage/IndexPage";
import { InitDataPage } from "@/pages/InitDataPage/InitDataPage";
import { LaunchParamsPage } from "@/pages/LaunchParamsPage/LaunchParamsPage.tsx";
import { TONConnectPage } from "@/pages/TONConnectPage/TONConnectPage";

export const App: FC = () => {
  const lp = useLaunchParams();
  const miniApp = useMiniApp();
  const themeParams = useThemeParams();
  const viewport = useViewport();

  useEffect(() => {
    return bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

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
    <AppRoot
      appearance={miniApp.isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
    >
      <Router location={location} navigator={reactNavigator}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/init-data" element={<InitDataPage />} />
            <Route path="/launch-params" element={<LaunchParamsPage />} />
            <Route path="/ton-connect" element={<TONConnectPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Router>
    </AppRoot>
  );
};
