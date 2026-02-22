import layoutStyles from "./layout.module.scss";
import Image from "next/image";
import SearchIcon from "../../../components/icons/SearchIcon";
import BellIcon from "../../../components/icons/BellIcon";
import DownArrow from "../../../components/icons/DownArrow";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={layoutStyles.wrapper}>
      <div className={layoutStyles.navBar}>
        <div className={layoutStyles.logoContainer}>
          <Image src="/logo.svg" fill alt="logo" />
        </div>
        <div className={layoutStyles.searchOverAll}>
          <div className={layoutStyles.searchBox}>
            <input type="text" placeholder="Search for anything" />
            
          </div>
          <div className={layoutStyles.searchWrapper}>
            <SearchIcon />
          </div>

          
        </div>
      </div>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.layoutLeft}>
          <p>left</p>
        </div>

        <div className={layoutStyles.layoutRight}>{children}</div>
      </div>
    </div>
  );
}
