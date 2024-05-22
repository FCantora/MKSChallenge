/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styles from "./Chart.module.css"


export const Chart = ({ platform, image, profile, followers, subscribers, chartInfo, sumOfFollowers, lastDay }) => {


    return (
        <div className={styles.container}>
            <h1>{platform} {followers !== null ? 'followers' : 'subscribers'}</h1>
            <div className={styles.subtitle}>
                <img src={image} alt={platform} />
                <p>{profile}</p>
            </div>
            <div className={styles.data}>
                <div className={styles.totalFollowers}>
                    <p className={styles.numberTotal}>{followers !== null ? followers : subscribers}</p>
                    <p className={styles.text}>{followers !== null ? 'Total followers' : 'Total subscribers'}</p>
                </div>
                <div className={styles.newFollowers}>
                    <p className={styles.numberNew} ><span className={styles.firstLetter}>▲</span>{sumOfFollowers(chartInfo)}</p>
                    <p className={styles.text}>{followers !== null ? 'New followers in the past 10 days' : 'New subscribers in the past 10 days'}</p>
                </div>
                <div className={styles.newFollowersToday}>
                    <p className={followers ? styles.numberToday : styles.numberTodayRed}>{followers ? <span className={styles.firstLetter}>▲</span> : <span className={styles.firstLetter}>▼</span>}{lastDay}</p>
                    <p className={styles.text}>{followers !== null ? 'New followers today' : 'New subscribers today'}</p>
                </div>
            </div>
        </div>
    )
}
