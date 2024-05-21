/* eslint-disable react/prop-types */

import { data } from '../../../Data/Data'

import { DBCard } from "../Card/DBCard"

import styles from "./DBCards.module.css"

export const DBCards = ({ onClick }) => {

    return (
        <div className={styles.cardsContainer}>
            {data.map((data) => (
                <DBCard
                    onClick={onClick}
                    key={data.platform}
                    platform={data.platform}
                    image={data.image}
                    profile={data.profile}
                    followers={data.followers ? data.followers : null}
                    subscribers={data.subscribers ? data.subscribers : null}
                    variation={data.variation}
                />
            ))
            }
        </div>
    )
}
