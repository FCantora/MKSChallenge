import { OVCard } from "../Card/OVCard"

import { data } from "../../../Data/Data"

import styles from "./OVCards.module.css"

export const OVCards = () => {

    return (
        <div className={styles.cardsContainer}>
            {data.map((data) => (
                <OVCard
                    key={data.platform}
                    platform={data.platform}
                    image={data.image}
                    interactions={data.interactions}
                />
            ))
            }
        </div>
    )
}
