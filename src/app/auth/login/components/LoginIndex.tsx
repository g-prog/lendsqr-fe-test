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
        <div className={styles.right}>
          <div className={styles.centerDiv}>
            <div className={styles.rightContainer}>
              <h4>Welcome!</h4>
              <p className={styles.introText}>Enter details to login.</p>

              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Email"
                  className={styles.inputStyles}
                />

                <div className={styles.passwordWrapperStyles}>
                  <input
                    type="password"
                    placeholder="Password"
                    
                  />

                  <p className={styles.showHideText}>
                    SHOW
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
