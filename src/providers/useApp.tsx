import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import {
  initNavigator,
  useInitData,
  useLaunchParams,
  type InitDataParsed,
} from "@telegram-apps/sdk-react";
import { Placeholder } from "@telegram-apps/telegram-ui";

import type { GameDataIFC, MyMissionsIFC } from "@/types/game";
import { getMissionData } from "@/utilities/mission";
import { getLevelByBalance } from "@/utilities/level";

interface AppContextType {
  initData: InitDataParsed;
  navigator: any;
  gameData: GameDataIFC;
  handleSetGameData: (values: any) => void;
  curEenergy: number;
  handleDecrementCurEnergy: () => void;
  missions: MyMissionsIFC[];
  handleSetMission: (values: MyMissionsIFC) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initGameData: GameDataIFC = {
  level: 0,
  totalEarning: 10000000,
  balance: 10000000,
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
  const handleSetGameData = (values: any) => {
    setGameData({
      ...gameData,
      ...values,
    });
  };

  const [missions, setMissions] = useState<MyMissionsIFC[]>([
    {
      id: "agent",
      level: 1,
    },
  ]);
  const handleSetMission = (mission: MyMissionsIFC) => {
    const existInd = missions.findIndex((res) => mission.id === res.id);
    let copiedMission = [...missions];
    if (existInd > -1) copiedMission[existInd].level = mission.level;
    else copiedMission = [...missions, mission];
    setMissions(copiedMission);

    const missionCost = getMissionData(mission.id, mission.level - 1).cost;
    setGameData({
      ...gameData,
      balance: gameData.balance - missionCost,
    });
  };

  const [curEenergy, setCurEenergy] = useState(initGameData.energy);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurEenergy((prevCurEenergy) =>
        prevCurEenergy < initGameData.energy
          ? prevCurEenergy + 1
          : initGameData.energy
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const handleDecrementCurEnergy = () => {
    setCurEenergy((prevCurEenergy) =>
      prevCurEenergy > 0 ? prevCurEenergy - 1 : 0
    );
  };

  useEffect(() => {
    /**
     * @todo: use gameData.totalEarning instead of gameData.balance later
     */
    const res = getLevelByBalance(gameData.balance);
    setGameData({
      ...gameData,
      level: res.current - 1,
    });
  }, [gameData.balance]);

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
    <AppContext.Provider
      value={{
        initData,
        navigator,
        gameData,
        handleSetGameData,
        curEenergy,
        handleDecrementCurEnergy,
        missions,
        handleSetMission,
      }}
    >
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
