// import React from 'react'
import facebook from '../../../assets/icon-facebook.svg'
import twitter from '../../../assets/icon-twitter.svg'
import instagram from '../../../assets/icon-instagram.svg'
import youtube from '../../../assets/icon-youtube.svg'

import { Card } from "../Card/Card"

import styles from "./Cards.module.css"

export const Cards = () => {
    const historic = [
        {
            platform: 'facebook',
            image: facebook,
            profile: '@nathanf',
            followers: 1987,
            variation: '12 Today'
        },
        {
            platform: 'twitter',
            image: twitter,
            profile: '@nathanf',
            followers: 1044,
            variation: '99 Today'
        },
        {
            platform: 'instagram',
            image: instagram,
            profile: '@realnathanf',
            followers: '11k',
            variation: '1099 Today'
        },
        {
            platform: 'youtube',
            image: youtube,
            profile: 'Nathan F.',
            subscribers: 8239,
            variation: '144 Today'
        }
    ]


    return (
        <div className={styles.cardsContainer}>
            {historic.map((data) => (
                <Card
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
