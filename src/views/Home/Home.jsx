import { Cards } from "../../components/Dashboard cards/Cards/Cards"
import { Toggle } from "../../components/Toggle/Toggle"
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
        <div className={styles.headerToggle}>
          <p className={styles.subtitle}>Dark Mode</p>
          <Toggle />
        </div>
      </div>
      <Cards />
      <Overview />
    </div>
  )
}
