import { Analytics } from "@vercel/analytics/react"
import Terminal from "../components/Terminal";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        kirousek:$ <span className={styles.help}>type help to start</span>
      </h1>
      <p>
        Powered by Next.js
      </p>
      <Terminal />
      <Analytics />
    </div>
  );
}
