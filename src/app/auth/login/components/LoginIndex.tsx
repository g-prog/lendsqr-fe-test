import styles from "../login.module.scss";
import Image from "next/image";

export default function LoginIndex() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image src="/logo.svg" fill alt="logo-img" />
          </div>

          <div className={styles.heroImgWrapper}>
            <Image src="/login-image.svg" fill alt="login-img" />
          </div>
        </div>
        <div className={styles.right}>right</div>
      </div>
    </div>
  );
}
