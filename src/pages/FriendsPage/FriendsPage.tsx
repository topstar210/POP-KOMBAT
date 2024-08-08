import "./FriendsPage.css";

import { Box } from "@/components/system";
import InviteItem from "@/components/Friend/InviteItem";
import InfoItem from "@/components/Friend/InfoItem";

import { formatNum } from "@/utilities/number";
import tokenIcon from "@/assets/icons/token.png";
import copyIcon from "@/assets/icons/copy.png"

const FriendsPage = () => {
  return (
    <div className="main-page">
      <Box className="fp-header">
        <div className="fp-title">INvite friends!</div>
        <div className="fp-subtitle">Earn bonuses for you and your friends</div>
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
          <InfoItem />
          <InfoItem />
          <InfoItem />
          <InfoItem />
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
              <th>Level</th>
              <th>For Friend</th>
              <th>Premium</th>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map(() => (
                <tr>
                  <td>
                    <div>
                      <img
                        src="src/assets/imgs/avatar/user1.jfif"
                        className="avatar"
                        width={36}
                        height={36}
                        alt=""
                      />
                      <span>Legendary</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <img src={tokenIcon} width={18} height={18} alt="" />
                      <span className="coin">+{formatNum(8000000)}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <img src={tokenIcon} width={18} height={18} alt="" />
                      <span className="coin">+{formatNum(8000000)}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Box>
      <Box className="fp-invitebtn-section">
        <button className="invite">invite a friend</button>
        <button className="copy">
          <img src={copyIcon} alt="" />
        </button>
      </Box>
    </div>
  );
};

export default FriendsPage;
