/* eslint-disable no-unused-vars */
import { useState } from "react"
import { DBCards } from "../../components/Dashboard cards/Cards/DBCards"
import { Toggle } from "../../components/Toggle/Toggle"
import { Overview } from "../Overview/Overview"
import styles from "./Home.module.css"
import { Charts } from "../../components/Recharts/Charts/Charts"


export const Home = () => {

  const [showModal, setShowModal] = useState(false);
  const [keyToRender, setKeyToRender] = useState(null);

  const modalHandler = (platform) => {
    setShowModal(true);
    setKeyToRender(platform)
  }

  const closeModal = () => {
    setShowModal(false);
    setKeyToRender(null);
  }

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
      <DBCards onClick={modalHandler} />
      {
        keyToRender !== null
          ? <Charts isOpen={showModal} onClose={closeModal} platformToRender={keyToRender} />
          : null
      }
      <Overview />
    </div>
  )
}
