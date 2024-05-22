/* eslint-disable react/prop-types */

import { data } from "../../../Data/Data"
import { Chart } from "../Chart.jsx/Chart"
import { Rechart } from "../Rechart/Rechart"

import styles from "./Charts.module.css"

export const Charts = ({ onClose, platformToRender }) => {

    const dataForChart = data.find((data) => data.platform === platformToRender)

    const { chartInfo } = dataForChart

    const sumOfFollowers = (chartInfo) => {
        let sum = 0
        for (let i = 2; i < chartInfo.length; i++) {
            if (chartInfo[i].followers) {
                sum += chartInfo[i].followers;
            } else {
                sum += chartInfo[i].subscribers;
            }
        }
        return sum;
    }

    const lastDay = chartInfo[chartInfo.length - 1].day

    return (
        <div className={styles.container}>
            <Chart
                key={dataForChart.platform}
                platform={dataForChart.platform}
                image={dataForChart.image}
                profile={dataForChart.profile}
                followers={dataForChart.followers ? dataForChart.followers : null}
                subscribers={dataForChart.subscribers ? dataForChart.subscribers : null}
                chartInfo={chartInfo}
                sumOfFollowers={sumOfFollowers}
                lastDay={lastDay}
            />
            <button onClick={onClose}>x</button>
            <Rechart chartInfo={chartInfo} followers={dataForChart.followers ? dataForChart.followers : null} />
        </div>
    )
}
