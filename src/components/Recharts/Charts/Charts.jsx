/* eslint-disable react/prop-types */
import { Chart } from "../Chart/Chart"

import { data } from "../../../Data/Data"

export const Charts = ({ isOpen, onClose, platformToRender }) => {

    const dataForChart = data.find((data) => data.platform === platformToRender)

    return (
        <div>
            <Chart
                key={dataForChart.platform}
                platform={dataForChart.platform}
                image={dataForChart.image}
                profile={dataForChart.profile}
                followers={dataForChart.followers ? dataForChart.followers : null}
                subscribers={dataForChart.subscribers ? dataForChart.subscribers : null}
                variation={dataForChart.variation}
                interactions={dataForChart.interactions}
                chartInfo={dataForChart.chartInfo}
                isOpen={isOpen}
                onClose={onClose}
            />
        </div>
    )
}
