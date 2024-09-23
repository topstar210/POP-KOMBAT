import { useEffect, useState } from "react";
import "./FriendsPage.css";

import { Box } from "@/components/system";
import InviteItem from "@/components/Friend/InviteItem";
import FriendItem from "@/components/Friend/InfoItem";
import { formatNum } from "@/utilities/number";
import { useApp } from "@/providers/useApp";
import { fetchData } from "@/services/apiService";
import { levelUpBouns } from "@/data/constant";
import { useNotification } from "@/providers/useNotification";

import tokenIcon from "@/assets/icons/token.png";
import copyIcon from "@/assets/icons/copy.png";
import userAvatar from "@/assets/imgs/avatar/user1.jfif";

const FriendsPage = () => {
  const { initData } = useApp();
  const { notification } = useNotification();
  const user = initData?.user;

  const [friends, setFriends] = useState<any>([]);

  useEffect(() => {
    const getFetchData = async () => {
      const { friends } = await fetchData(`friend/${user?.id}`);
      setFriends(friends);
    };
    getFetchData();
  }, []);

  const copyInviteLink = async () => {
    const link = `https://t.me/pop_kombat_bot?start=${user?.id}`;
    await navigator.clipboard.writeText(link);
    notification("The invite link copied");
  };

  return (
    <div className="main-page">
      <Box className="fp-header">
        <div className="fp-title fade-down">INvite friends!</div>
        <div className="fp-subtitle fade-left">
          Earn bonuses for you and your friends
        </div>
      </Box>
      <Box className="fp-status-section">
        <InviteItem
          title="Invite a Friend"
          coinVal={5000}
          onClick={() => console.log("Item clicked!")}
        />
        <InviteItem
          title="Invite a Friend with Telegram Premium"
          coinVal={25000}
        />
      </Box>
      <Box className="fp-yourfriends">
        <h2>Your Friends (**)</h2>
        <div className="fp-friends-list">
          {friends.length ? (
            friends.map((friend: any, i: number) => (
              <FriendItem
                name={`${friend.inviteUserDetails[0].firstName} ${friend.inviteUserDetails[0].lastName}`}
                key={i}
              />
            ))
          ) : (
            <div style={{ color: "#fff" }}>You haven't invited anyone yet</div>
          )}
        </div>
      </Box>
      <Box className="fp-levelbonus">
        <h2>Level Up Bonuses</h2>
        <div className="fp-bounse-levels">
          <table
            className="fp-bounseinfo-table"
            cellSpacing={0}
            cellPadding={0}
          >
            <thead>
              <tr>
                <th>Level</th>
                <th>For Friend</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              {levelUpBouns.map((val: any) =>
                val.title ? (
                  <tr key={val.title}>
                    <td>
                      <div>
                        <img
                          src={userAvatar}
                          className="avatar"
                          width={36}
                          height={36}
                          alt=""
                        />
                        <span>{val.title}</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <img src={tokenIcon} width={18} height={18} alt="" />
                        <span className="coin">
                          +{formatNum(val.forFriend)}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <img src={tokenIcon} width={18} height={18} alt="" />
                        <span className="coin">+{formatNum(val.premiun)}</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <tr key={val}></tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </Box>
      <Box className="fp-invitebtn-section">
        <button className="invite" onClick={copyInviteLink}>
          invite a friend
        </button>
        <button className="copy" onClick={copyInviteLink}>
          <img src={copyIcon} alt="" />
        </button>
      </Box>
    </div>
  );
};

export default FriendsPage;
