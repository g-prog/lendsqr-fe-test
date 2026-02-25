"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import layoutStyles from "./layout.module.scss";
import Image from "next/image";
import SearchIcon from "../../components/icons/SearchIcon";
import BellIcon from "../../components/icons/BellIcon";
import DownArrow from "../../components/icons/DownArrow";
import BriefCaseIcon from "../../components/icons/BriefCaseIcon";
import ChevronDownIcon from "../../components/icons/ChevronDownIcon";
import HomeIcon from "../../components/icons/HomeIcon";
import UserIcon from "../../components/icons/UserIcon";
import HamburgerIcon from "../../components/icons/HamburgerIcon";
import CloseIcon from "../../components/icons/CloseIcon";
import GuarantorsIcon from "../../components/icons/GuarantorsIcon";
import LoansIcon from "../../components/icons/LoansIcon";
import HandshakeIcon from "../../components/icons/HandshakeIcon";
import SavingsIcon from "@/components/icons/SavingsIcon";
import LoanRequestIcon from "@/components/icons/LoanRequestIcon";
import WhitelistIcon from "@/components/icons/WhitelistIcon";
import KarmaIcon from "@/components/icons/KarmaIcon";
import SavingsProductIcon from "@/components/icons/SavingsProductIcon";
import FeesAndCharges from "@/components/icons/FeesAndCharges";
import TransactionsIcon from "@/components/icons/TransactionsIcon";
import ServicesIcon from "@/components/icons/ServicesIcon";
import ServiceAccount from "@/components/icons/ServiceAccount";
import SettlementsIcon from "@/components/icons/SettlementsIcon";
import ReportsIcon from "@/components/icons/ReportsIcon";
import PreferencesIcon from "@/components/icons/PreferencesIcon";
import FeesAndPricing from "@/components/icons/FeesAndPricing";
import AuditLogs from "@/components/icons/AuditLogs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const dashboardItemsCustomers = [
    {
      id: 0,
      icon: <UserIcon />,
      text: "Users",
      link: "/dashboard/users",
    },

    {
      id: 1,
      icon: <GuarantorsIcon />,
      text: "Guarantors",
      link: "/dashboard/guarantors",
    },

    {
      id: 3,
      icon: <LoansIcon />,
      text: "Loans",
      link: "/dashboard/user1",
    },

    {
      id: 4,
      icon: <HandshakeIcon />,
      text: "Decision Models",
      link: "/dashboard/user2",
    },

    {
      id: 5,
      icon: <SavingsIcon />,
      text: "Savings",
      link: "/dashboard/user3",
    },

    {
      id: 6,
      icon: <LoanRequestIcon />,
      text: "Loan Requests",
      link: "/dashboard/user4",
    },

    {
      id: 7,
      icon: <WhitelistIcon />,
      text: "Whitelist",
      link: "/dashboard/user5",
    },

    {
      id: 8,
      icon: <KarmaIcon />,
      text: "Karma",
      link: "/dashboard/user6",
    },
  ];

  const dashboardItemsSettings = [
    {
      id: 0,
      icon: <PreferencesIcon />,
      text: "Preferences",
      link: "/preferences",
    },

    {
      id: 1,
      icon: <FeesAndPricing />,
      text: "Fees and Pricing",
      link: "/dashboard/guarantors",
    },

    {
      id: 3,
      icon: <AuditLogs />,
      text: "Audit Logs",
      link: "/dashboard/user1",
    },
  ];

  const dashboardItemsBusiness = [
    {
      id: 0,
      icon: <BriefCaseIcon />,
      text: "Organization",
      link: "/dashboard/users12",
    },

    {
      id: 1,
      icon: <LoanRequestIcon />,
      text: "Loan Products",
      link: "/dashboard/guarantors",
    },

    {
      id: 3,
      icon: <SavingsProductIcon />,
      text: "Savings Products",
      link: "/dashboard/user1",
    },

    {
      id: 4,
      icon: <FeesAndCharges />,
      text: "Fees and Charges",
      link: "/dashboard/user2",
    },

    {
      id: 5,
      icon: <TransactionsIcon />,
      text: "Transactions",
      link: "/dashboard/user3",
    },

    {
      id: 6,
      icon: <ServicesIcon />,
      text: "Services",
      link: "/dashboard/user4",
    },

    {
      id: 7,
      icon: <ServiceAccount />,
      text: "Service Account",
      link: "/dashboard/user5",
    },

    {
      id: 8,
      icon: <SettlementsIcon />,
      text: "Settlements",
      link: "/dashboard/user6",
    },

    {
      id: 9,
      icon: <ReportsIcon />,
      text: "Reports",
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
        <div
          className={layoutStyles.hamburgerContainer}
          onClick={toggleMobileMenu}
        >
          <HamburgerIcon />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={layoutStyles.mobileWrapper}>
          <div className={layoutStyles.mobileClose} onClick={closeMobileMenu}>
            <CloseIcon />
          </div>

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

            <div className={layoutStyles.linksSection}>
              <p className={layoutStyles.sectionHeaderText}>BUSINESS</p>

              {dashboardItemsBusiness.map((item) => {
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

             <div className={layoutStyles.linksSection}>
              <p className={layoutStyles.sectionHeaderText}>SETTINGS</p>

              {dashboardItemsSettings.map((item) => {
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
      )}
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

            <div className={layoutStyles.linksSection}>
              <p className={layoutStyles.sectionHeaderText}>BUSINESS</p>

              {dashboardItemsBusiness.map((item) => {
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

            <div className={layoutStyles.linksSection}>
              <p className={layoutStyles.sectionHeaderText}>SETTINGS</p>

              {dashboardItemsSettings.map((item) => {
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
