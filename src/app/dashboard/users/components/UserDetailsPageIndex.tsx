import detailsStyles from "../userdetails.module.scss";
import LongForwardIcon from "@/components/icons/LongForwardIcon";

const UserDetailsPageIndex = () => {
  return (
    <div className={detailsStyles.detailsContainer}>
      <div className={detailsStyles.topArrowDiv}>
        <div>
          <LongForwardIcon />
        </div>

        <p>Back to Users</p>
      </div>
    </div>
  );
};

export default UserDetailsPageIndex;
