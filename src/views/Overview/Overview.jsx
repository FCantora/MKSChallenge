import { OVCards } from "../../components/Overview cards/Cards/OVCards"
import styles from "./Overview.module.css"


export const Overview = () => {
  return (
    <div className={styles.container}>
        <h1>Overview - Today</h1>
        <OVCards />
    </div>
  )
}
