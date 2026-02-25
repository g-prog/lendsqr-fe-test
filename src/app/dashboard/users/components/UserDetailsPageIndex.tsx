"use client";
import { useState } from "react";
import detailsStyles from "../userdetails.module.scss";
import LongForwardIcon from "@/components/icons/LongForwardIcon";
import SvgAvatar from "@/components/icons/SvgAvatar";
import FullStar from "@/components/icons/FullStar";
import EmptyStar from "@/components/icons/EmptyStar";

const UserDetailsPageIndex = () => {
  const [display, setDisplay] = useState(0);

  const tabData = [
    {
      id: 0,
      text: "General Details",
      display: <div>Personal profile</div>,
    },

    {
      id: 1,
      text: "Documents",
      display: <div>Documents</div>,
    },

    {
      id: 2,
      text: "Bank Details",
      display: <div>Bank Details</div>,
    },

    {
      id: 3,
      text: "Loans",
      display: <div>Loans</div>,
    },

    {
      id: 4,
      text: "Savings",
      display: <div>Savings</div>,
    },

    {
      id: 5,
      text: "App and System",
      display: <div>App and System</div>,
    },
  ];
  return (
    <div className={detailsStyles.detailsContainer}>
      <div className={detailsStyles.topArrowDiv}>
        <div>
          <LongForwardIcon />
        </div>

        <p>Back to Users</p>
      </div>

      <div className={detailsStyles.topFlex}>
        <h4 className={detailsStyles.userHeader}>User Details</h4>
        <div className={detailsStyles.topRight}>
          <div className={detailsStyles.blackListBtn}>Blacklist User</div>
          <div className={detailsStyles.activateBtn}>Activate User</div>
        </div>
      </div>

      <div className={detailsStyles.generalInfoDiv}>
        <div className={detailsStyles.infoWrapper}>
          <div className={detailsStyles.nameFlex}>
            <div className={detailsStyles.iconContainer}>
              <SvgAvatar />
            </div>

            <div className={detailsStyles.nameCol}>
              <h4>Grace Effiom</h4>

              <p>LSQFf587g90</p>
            </div>
          </div>

          <div className={detailsStyles.tierContianer}>
            <p>User’s Tier</p>

            <div className={detailsStyles.starFlex}>
              <FullStar />
              <EmptyStar />
              <EmptyStar />
            </div>
          </div>

          <div className={detailsStyles.numeralContainer}>
            <h4>₦200,000.00</h4>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>

        <div className={detailsStyles.bottomTabContainer}>
          {tabData?.map((item) => (
            <div
              key={item.id}
              onClick={() => setDisplay(item.id)}
              className={`${detailsStyles.tabItems} ${
                display === item.id ? detailsStyles.activeTab : ""
              }`}
            >
              <p> {item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={detailsStyles.displayDiv}>{tabData[display].display}</div>
    </div>
  );
};

export default UserDetailsPageIndex;
