import { Cards } from "../../components/Dashboard cards/Cards/Cards"
import { Overview } from "../Overview/Overview"
import styles from "./Home.module.css"


export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Social Media Dashboard</h1>
          <p className={styles.subtitle}>Total Followers: 23,004</p>
        </div>
        <h1>Toggle</h1>
      </div>
      <Cards />
      <Overview />
    </div>
  )
}
