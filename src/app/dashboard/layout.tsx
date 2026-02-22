import layoutStyles from "./layout.module.scss";
import Image from "next/image";
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
