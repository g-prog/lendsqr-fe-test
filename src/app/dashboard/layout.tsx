"use client";
import { usePathname, useRouter } from "next/navigation";
import layoutStyles from "./layout.module.scss";
import Image from "next/image";
import SearchIcon from "../../../components/icons/SearchIcon";
import BellIcon from "../../../components/icons/BellIcon";
import DownArrow from "../../../components/icons/DownArrow";
import BriefCaseIcon from "../../../components/icons/BriefCaseIcon";
import ChevronDownIcon from "../../../components/icons/ChevronDownIcon";
import HomeIcon from "../../../components/icons/HomeIcon";
import UserIcon from "../../../components/icons/UserIcon";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const pathname = usePathname() || '';
    const router = useRouter()
  const dashboardItemsCustomers = [
    {
      id: 0,
      icon: <UserIcon />,
      text: "Users",
      link: "/dashboard/users",
    },

    {
      id: 1,
      icon: <HomeIcon />,
      text: "Guarantors",
      link: "/dashboard/guarantors",
    },

    {
      id: 3,
      icon: <HomeIcon />,
      text: "Loans",
      link: "/dashboard/user1",
    },

    {
      id: 4,
      icon: <HomeIcon />,
      text: "Decision Models",
      link: "/dashboard/user2",
    },

    {
      id: 5,
      icon: <HomeIcon />,
      text: "Savings",
      link: "/dashboard/user3",
    },

    {
      id: 6,
      icon: <HomeIcon />,
      text: "Loan Requests",
      link: "/dashboard/user4",
    },

    {
      id: 7,
      icon: <HomeIcon />,
      text: "Whitelist",
      link: "/dashboard/user5",
    },

    {
      id: 8,
      icon: <HomeIcon />,
      text: "Karma",
      link: "/dashboard/user6",
    },
  ];
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
        <div className={layoutStyles.navRight}>
          <p className={layoutStyles.docsText}>Docs</p>
          <div className={layoutStyles.bellDiv}>
            <BellIcon />
          </div>

          <div className={layoutStyles.userDiv}>
            <div className={layoutStyles.userImg}>
              <Image src="/user.svg" fill alt="logo" />
            </div>
            <p className={layoutStyles.userName}>Adedeji</p>
            <div className={layoutStyles.arrowDiv}>
              <DownArrow />
            </div>
          </div>
        </div>
      </div>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.layoutLeft}>
          <div className={layoutStyles.leftBody}>
            <div className={layoutStyles.switchOrgContainer}>
              <BriefCaseIcon />
              <p>Switch Organization</p>
              <div className={layoutStyles.svgWrapper}>
                <ChevronDownIcon />
              </div>
            </div>

            <div className={layoutStyles.dashboardContainer}>
              <HomeIcon />
              <p>Dashboard</p>
            </div>

            <div className={layoutStyles.linksSection}>
              <p className={layoutStyles.sectionHeaderText}>CUSTOMERS</p>
              {/* {dashboardItemsCustomers.map((item) => (
                <div key={item.id} className={layoutStyles.linkItems}>
                  <div>{item.icon}</div>
                  <p>{item.text}</p>
                </div>
              ))} */}

              {dashboardItemsCustomers.map((item) => {
                const isActive = pathname === item.link; 

                return (
                  <div
                    key={item.id}
                    className={`${layoutStyles.linkItems} ${isActive ? layoutStyles.activeLink : ""}`}
                    onClick={() => router.push(item.link)}
                  >
                    <div>{item.icon}</div>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={layoutStyles.layoutRight}>{children}</div>
      </div>
    </div>
  );
}
