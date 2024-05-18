import { Card } from "../Card/Card"

import styles from "./Cards.module.css"

import facebook from '../../../assets/icon-facebook.svg'
import twitter from '../../../assets/icon-twitter.svg'
import instagram from '../../../assets/icon-instagram.svg'
import youtube from '../../../assets/icon-youtube.svg'


export const Cards = () => {
    const today = [
        {
            platform: 'facebook',
            image: facebook,
            interactions: [
                {
                    type: 'Page Views',
                    value: 87,
                    variation: '3%'
                },
                {
                    type: 'Likes',
                    value: 52,
                    variation: '2%'
                }
            ]
        },
        {
            platform: 'twitter',
            image: twitter,
            interactions: [
                {
                    type: 'Retweets',
                    value: 117,
                    variation: '303%'
                },
                {
                    type: 'Likes',
                    value: 507,
                    variation: '553%'
                }
            ]
        },
        {
            platform: 'instagram',
            image: instagram,
            interactions: [
                {
                    type: 'Profile Views',
                    value: '52k',
                    variation: '1375%'
                },
                {
                    type: 'Likes',
                    value: 5462,
                    variation: '2257%'
                }
            ]
        },
        {
            platform: 'youtube',
            image: youtube,
            interactions: [
                {
                    type: 'Total Views',
                    value: 1407,
                    variation: '12%'
                },
                {
                    type: 'Likes',
                    value: 107,
                    variation: '19%'
                }
            ]
        }
    ]

    return (
        <div className={styles.cardsContainer}>
            {today.map((data) => (
                <Card
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
