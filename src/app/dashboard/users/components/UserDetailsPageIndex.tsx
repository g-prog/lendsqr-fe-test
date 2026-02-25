"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import detailsStyles from "../userdetails.module.scss";
import LongForwardIcon from "@/components/icons/LongForwardIcon";
import SvgAvatar from "@/components/icons/SvgAvatar";
import FullStar from "@/components/icons/FullStar";
import EmptyStar from "@/components/icons/EmptyStar";
import DetailsSection from "./DetailsSection";

const UserDetailsPageIndex = () => {
  const { id } = useParams();
  const [display, setDisplay] = useState(0);
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    const decodedUsername = decodeURIComponent(id as string);

    const storedUsers = localStorage.getItem("users");

    if (!storedUsers) return;

    const users = JSON.parse(storedUsers);

    const selectedUser = users.find(
      (user: any) => user.username === decodedUsername,
    );

    setUser(selectedUser);
  }, [id]);

  if (!user) return <p>User not found</p>;

  if (!user) return <p style={{ textAlign: "center" }}>Loading...</p>;

  const personalInfo = [
    { label: "Full Name", value: user.username },
    { label: "Phone Number", value: user.phoneNumber },
    { label: "Email Address", value: user.email },
    { label: "BVN", value: "07060780922" },
    { label: "Gender", value: "Female" },
    { label: "Marital Status", value: "Single" },
    { label: "Children", value: "None" },
    { label: "Type of Residence", value: "Parent’s Apartment" },
  ];

  const educationInfo = [
    { label: "Level of Education", value: "B.Sc" },
    { label: "Employment Status", value: "Employed" },
    { label: "Sector of Employment", value: "FinTech" },
    { label: "Duration of Employment", value: "2 years" },
    { label: "Office Email", value: "grace@lendsqr.com" },
    { label: "Monthly Income", value: "₦200,000 - ₦400,000" },
    { label: "Loan Repayment", value: "40,000" },
  ];

  const socialsInfo = [
    { label: "Twitter", value: "@grace_effiom" },
    { label: "Facebook", value: "Grace Effiom" },
    { label: "Instagram", value: "@grace_effiom" },
  ];

  const guarantorInfo = [
    { label: "Full Name", value: "Debby Ogana" },
    { label: "Phone Number", value: "07060780922" },
    { label: "Email Address", value: "debby@gmail.com" },
    { label: "Relationship", value: "Sister" },
  ];

  const tabData = [
    {
      id: 0,
      text: "General Details",
      display: (
        <>
          <DetailsSection
            title="Personal Information"
            items={personalInfo}
            show={true}
          />
          <DetailsSection
            title="Education and Employment"
            items={educationInfo}
            show={true}
          />
          <DetailsSection title="Socials" items={socialsInfo} show={true} />
          <DetailsSection title="Guarantor" items={guarantorInfo} show={true} />
          <DetailsSection title="" items={guarantorInfo} show={false} />
        </>
      ),
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
              <h4>{user?.username}</h4>

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
      <div className={detailsStyles.wrapper}>
        <div className={detailsStyles.displayDiv}>
          {tabData[display].display}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPageIndex;
