/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import styles from './Rechart.module.css'

export const Rechart = ({ chartInfo, followers }) => {

    return (
        <div className={styles.container}>
            <h1>May 3 - May 12</h1>
            <ResponsiveContainer width="100%" aspect={5}>
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
                    <Line type="monotone" dataKey={followers !== null ? 'followers' : 'subscribers'} stroke="#8884d8" activeDot={{ r: 8 }} />

                </LineChart>

            </ResponsiveContainer>
        </div>
    )
}
