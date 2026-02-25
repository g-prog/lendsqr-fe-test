import detailsStyles from "../userdetails.module.scss";
import LongForwardIcon from "@/components/icons/LongForwardIcon";
import SvgAvatar from "@/components/icons/SvgAvatar";
import FullStar from "@/components/icons/FullStar";
import EmptyStar from "@/components/icons/EmptyStar";

const UserDetailsPageIndex = () => {
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
      </div>
    </div>
  );
};

export default UserDetailsPageIndex;
