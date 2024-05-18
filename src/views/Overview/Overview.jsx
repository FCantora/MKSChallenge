import { Cards } from "../../components/Overview cards/Cards/Cards"
import styles from "./Overview.module.css"


export const Overview = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Overview - Today</h1>
        <Cards />
    </div>
  )
}
