import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import {
  initNavigator,
  useInitData,
  useLaunchParams,
  type InitDataParsed,
} from "@telegram-apps/sdk-react";
import { Placeholder } from "@telegram-apps/telegram-ui";

import type { GameDataIFC } from "@/types/game";

interface AppContextType {
  initData: InitDataParsed;
  navigator: any;
  gameData: GameDataIFC;
  setGameData: any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initGameData: GameDataIFC = {
  level: 0,
  balance: 1000,
  energy: 1000,
  yesterdayLogin: false,
  todayLogin: false,
  isJoinTG: false,
  isJoinX: false,
  isJoinBinance: false,
  isInvite1Friend: false,
  isInvite3Friend: false,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const initDataRaw = useLaunchParams().initDataRaw;
  const initData = useInitData();
  const [gameData, setGameData] = useState<GameDataIFC>({
    ...initGameData,
  });

  // Create a new application navigator and attach it to the browser history, so it could modify
  // it and listen to its changes.
  const navigator = useMemo(() => initNavigator("app-navigation-state"), []);

  if (!initData || !initDataRaw) {
    return (
      <Placeholder
        header="Oops"
        description="Application was launched with missing init data"
      >
        <img
          alt="Telegram sticker"
          src="https://xelene.me/telegram.gif"
          style={{ display: "block", width: "144px", height: "144px" }}
        />
      </Placeholder>
    );
  }
  return (
    <AppContext.Provider value={{ initData, navigator, gameData, setGameData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
