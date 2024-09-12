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
import { postData, fetchData } from "@/services/apiService";

interface AppContextType {
  initData: InitDataParsed;
  navigator: any;
  gameData: GameDataIFC;
  handleSetGameData: (values: any) => void;
  curEenergy: number;
  handleDecrementCurEnergy: () => void;
  missions: MyMissionsIFC[];
  handleSetMission: (values: MyMissionsIFC) => void;
  isProfitPerH: boolean;
  handleSetIsProfitPerH: (status?: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initGameData: GameDataIFC = {
  level: 0,
  totalEarning: 1000,
  balance: 1000,
  energy: 1000,
  isJoinTG: false,
  isJoinX: false,
  isJoinBinance: false,
  isInvite1Friend: false,
  isInvite3Friend: false,
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const initDataRaw = useLaunchParams().initDataRaw;
  const initData = useInitData();

  const [gameData, setGameData] = useState<GameDataIFC>({
    ...initGameData,
  });
  const [missions, setMissions] = useState<MyMissionsIFC[]>([
    // {
    //   id: "accountant",
    //   level: 1,
    // },
  ]);
  const [curEenergy, setCurEenergy] = useState(initGameData.energy);
  const [isProfitPerH, setIsProfitPerH] = useState(false);

  const handleSetGameData = async (values: any) => {
    const user = initData?.user;
    let data = {
      ...gameData,
      ...values,
    };
    const userLevel = getLevelByBalance(data.totalEarning);
    data.level = userLevel.current - 1;
    setGameData(data);
    try {
      await postData(`games/${user?.id}`, data);
    } catch (error) {}
  };

  const handleSetMission = async (mission: MyMissionsIFC) => {
    const existInd = missions.findIndex((res) => mission.id === res.id);
    let copiedMission = [...missions];
    if (existInd > -1) copiedMission[existInd].level = mission.level;
    else copiedMission = [...missions, mission];
    try {
      const user = initData?.user;
      await postData(`missions/save`, {
        userId: user?.id,
        missions: copiedMission,
      });
      setMissions(copiedMission);
    } catch (error) {}

    const missionCost = getMissionData(mission.id, mission.level - 1).cost;
    handleSetGameData({
      balance: gameData.balance - missionCost,
    });
  };

  useEffect(() => {
    const initAppData = async () => {
      const user = initData?.user;
      try {
        // get and set user data from database
        await postData("users/save", user);

        // get game data of user
        const gameRes = await fetchData(`games/${user?.id}`);
        handleSetGameData({ ...gameRes });

        // get mission data of user
        const missionRes = await fetchData(`missions/${user?.id}`);
        setMissions(missionRes);
      } catch (error) {
        console.log(error);
      }
    };
    initAppData();

    const intervalForEnergy = setInterval(() => {
      setCurEenergy((prevCurEenergy) =>
        prevCurEenergy < initGameData.energy
          ? prevCurEenergy + 1
          : initGameData.energy
      );
    }, 1000);

    const intervalProfitPerHour = setInterval(() => {
      setIsProfitPerH(true);
    }, 3600000);

    return () => {
      clearInterval(intervalProfitPerHour);
      clearInterval(intervalForEnergy);
    };
  }, []);

  const handleDecrementCurEnergy = () => {
    setCurEenergy((prevCurEenergy) =>
      prevCurEenergy > 0 ? prevCurEenergy - 1 : 0
    );
  };

  const handleSetIsProfitPerH = (status = false) => {
    setIsProfitPerH(status);
  };

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
        isProfitPerH,
        handleSetIsProfitPerH,
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
