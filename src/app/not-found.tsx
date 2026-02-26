"use client";

import styles from "./not-found.module.scss";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.description}>
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <button
          className={styles.button}
          onClick={() => router.push("/dashboard/users")}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default NotFound