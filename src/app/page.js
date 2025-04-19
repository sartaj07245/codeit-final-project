"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

 
  const router = useRouter(); 

  const handleLoginChange = () => {
    return setLogin(!login);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      fetch("https://notifications.googleapis.com/email/redirect?t=AFG8qyXwaQ8SrKEeQSZ85a_w9GcKpHRUCTy2EqLag5eKykG2QL4KUdTIouJIM6hhYLHfOSfkeyHJ-lFfLHtz89RpImuqwDCyoeTml7zrK7ZG7fxaTZG6D6-jy5zTPZjI5g5KcW1Xs3X1E4XVCZUMsPvb_djpZIxrtrQ5mN4QGRmZR_Y6QvcxP5fnjhSw3fc0Kx4O6KxjXm60VydjVFCrz9QYuBf14vuHBzipz0lDg58sWzY2yDsQmehowE3sUXI4oYuAPc7bAZWMKxjC2rzt-Tdd3zOerXDC_d6ZlM_PLt2jguM0PIXVjqjXq_lKxqV_uwiKBbutzVbUQBDRADAIlZbaKdJ1&r=eJzLKCkpKLbS109LzE4tLskvSk0syNRLzs_VT8lPLlYuSUzXDy1OLSrWzy9ILUosyczP009MSQEJAQBwPxWm&s=ALHZ2r7tEdp7q-41EmXlEJpuP7gR", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username:"johnd",
          password: "m38rmf$",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
           
            router.replace("/products", {path: 'products'});
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <main className={styles.main}>
      <form className={styles.container} onSubmit={handleSubmit}>
        {login ? (
          <>
            <h3 className={styles.signin}>Sign In</h3>
            <p className={styles.desc}>please sign in to access market.</p>
            <input
              onChange={(event) => {
                return setUsername(event.target.value);
              }}
              className={styles.input}
              placeholder="username"
            />
            <input
              onChange={(event) => {
                return setPassword(event.target.value);
              }}
              className={styles.input}
              type="password"
              placeholder="password"
            />
            <button className={styles.button} type="submit">
              Sign In
            </button>
            <button
              onClick={handleLoginChange}
              className={styles.notResgitered}
            >
              Not Registered? sign up
            </button>
          </>
        ) : (
          <>
            <h3 className={styles.signin}>Sign Up</h3>
            <button
              onClick={handleLoginChange}
              className={styles.notResgitered}
            >
              Already Registered? sign in
            </button>
          </>
        )}
      </form>
    </main>
  );
}
