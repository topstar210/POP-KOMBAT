import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  useLaunchParams,
  useMiniApp,
  useThemeParams,
  useViewport,
} from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { type FC, useEffect } from "react";

import AppRouter from "@/navigation/AppRouter";
import { AppProvider } from "@/providers/useApp";

export const App: FC = () => {
  const lp = useLaunchParams();
  const miniApp = useMiniApp();
  const themeParams = useThemeParams();
  const viewport = useViewport();

  useEffect(() => {
    //@ts-ignore
    const webApp = window.Telegram?.WebApp;

    if (webApp) {
      webApp.ready(); // Tell Telegram the app is ready

      // Repeatedly try to expand the app at intervals
      const intervalId = setInterval(() => {
        console.log('Attempting to expand the app');
        webApp.expand(); // Try expanding repeatedly
      }, 500); // Repeat every 500 milliseconds

      // Stop after 5 seconds of trying to expand
      setTimeout(() => {
        clearInterval(intervalId);
        console.log('Stopped trying to expand');
      }, 5000); // Stop expanding after 5 seconds
    }
  }, []);

  useEffect(() => {
    return bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  return (
    <AppRoot
      appearance={miniApp.isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
    >
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </AppRoot>
  );
};
