"use client";
import { useState } from "react";
import styles from "../login.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginIndex() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid = email && password && isValidEmail(email);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/users");
  };
  return (
    <div className={styles.container}>
      <div className={styles.bodyWrapper}>
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
                  className={styles.inputStyles}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />

                <div className={styles.passwordWrapperStyles}>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />

                  <div onClick={togglePassword}>
                    <p className={styles.showHideText}>
                      {showPassword ? "HIDE" : "SHOW"}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className={styles.forgotPasswordText}>FORGOT PASSWORD?</p>
              </div>

              <button
                className={styles.loginButton}
                onClick={handleClick}
                disabled={!isFormValid}
              >
                LOG IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
