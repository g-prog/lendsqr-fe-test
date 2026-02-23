import userStyles from "../users.module.scss";
import PurplePeopleIcon from "../../../../../components/icons/PurplePeopleIcon";
import ThreePeopleIcon from "../../../../../components/icons/ThreePeopleIcon";
import FileIcon from "../../../../../components/icons/FileIcon";
import CoinIcon from "../../../../../components/icons/CoinIcon";
import UsersTable from "./UserTable";

type CardData = {
  name: string;
  metric: string;
  iconColor: string;
  icon: React.ReactNode;
};

const UsersIndex = () => {
  const cardsData: CardData[] = [
    {
      name: "Users",
      metric: "2,453",
      iconColor: "#DF18FF",
      icon: <PurplePeopleIcon />,
    },

    {
      name: "Active Users",
      metric: "2,453",
      iconColor: "#5718FF",
      icon: <ThreePeopleIcon />,
    },

    {
      name: "Users with Loans",
      metric: "12,453",
      iconColor: "#F55F44",
      icon: <FileIcon />,
    },

    {
      name: "Users with Savings",
      metric: "102,453",
      iconColor: "#F55F44",
      icon: <CoinIcon />,
    },
  ];

  return (
    <div className={userStyles.usersContainer}>
      <h4 className={userStyles.userHeaderText}>Users</h4>

      <div className={userStyles.cardsDiv}>
        {cardsData.map((cardItem) => (
          <div key={cardItem.name} className={userStyles.cards}>
            <div
              className={userStyles.iconContainer}
              style={{
                backgroundColor: `${cardItem.iconColor}1A`,
              }}
            >
              {cardItem.icon}
            </div>
            <p className={userStyles.cardHeaderText}>{cardItem.name}</p>
            <div className={userStyles.cardsBottom}>
              <h6>{cardItem.metric}</h6>
            </div>
          </div>
        ))}
      </div>

      <div className={userStyles.tableContainer}>
        <UsersTable/>

      </div>
    </div>
  );
};

export default UsersIndex;
