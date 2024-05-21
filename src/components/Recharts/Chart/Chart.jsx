/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import styles from './Chart.module.css'

export const Chart = ({ isOpen, onClose, platform, image, profile, followers, subscribers, variation, interactions, chartInfo }) => {

    const sumOfFollowers = (chartInfo) => {
        let sum = 0
        for (let i = 2; i < chartInfo.length; i++) {
            if (chartInfo[i].followers !== null) {
                sum += chartInfo[i].followers;
            } else {
                sum += chartInfo[i].subscribers;
            }
        }
        return sum;
    }

    const lastDay = chartInfo[chartInfo.length - 1].day

    return (
        <div className={styles.container} style={{ display: isOpen ? 'grid' : 'none' }}>
            <div className={styles.chart}>
                <div className={styles.infoContainer}>
                    <h1 >{platform} {followers !== null ? 'followers' : 'subscribers'}</h1>
                    <div className={styles.subtitle}>
                        <img src={image} alt={platform} />
                        <p>{profile}</p>
                    </div>
                    <div className={styles.chartInfo}>
                        <div className={styles.totalFollowers}>
                            <p className={styles.number}>{followers !== null ? followers : subscribers}</p>
                            <p className={styles.text}>{followers !== null ? 'Total followers' : 'Total subscribers'}</p>
                        </div>
                        <div className={styles.newFollowers}>
                            <p className={styles.number}>{sumOfFollowers(chartInfo)}</p>
                            <p className={styles.text}>{followers !== null ? 'New followers in the past 10 days' : 'New subscribers in the past 10 days'}</p>
                        </div>
                        <div className={styles.newFollowersToday}>
                            <p className={styles.number}>{lastDay}</p>
                            <p className={styles.text}>{followers !== null ? 'New followers today' : 'New subscribers today'}</p>
                        </div>
                    </div>
                </div>
                <button className={styles.button} onClick={onClose}>x</button>
                <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart
                        width={500}
                        height={300}
                        data={chartInfo}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis dataKey={followers !== null ? 'followers' : 'subscribers'} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={followers !== null ? 'followers' : 'subscribers'} stroke="#8884d8" activeDot={{ r: 8 }} />

                    </LineChart>

                </ResponsiveContainer>
            </div>
        </div>
    )
}
