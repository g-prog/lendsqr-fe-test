import detailsStyles from "../userdetails.module.scss";
import LongForwardIcon from "@/components/icons/LongForwardIcon";
import SvgAvatar from "@/components/icons/SvgAvatar";

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
        <div className={detailsStyles.iconContainer}>
          <SvgAvatar />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPageIndex;
