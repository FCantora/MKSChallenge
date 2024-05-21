import facebook from '../../src/assets/icon-facebook.svg'
import twitter from '../../src/assets/icon-twitter.svg'
import instagram from '../../src/assets/icon-instagram.svg'
import youtube from '../../src/assets/icon-youtube.svg'

export const data = [
    {
        platform: 'Facebook',
        image: facebook,
        profile: '@nathanf',
        followers: 1987,
        variation: '12 Today',
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
        ],
        chartInfo: [{day: 1, followers: 10}, {day: 2, followers: 4}, {day: 3, followers: 12}, {day: 4, followers: 2}, {day: 5, followers: 3}, {day: 5, followers: 5}, {day: 6, followers: 6}, {day: 7, followers: 12}, {day: 8, followers: 1}, {day: 9, followers: 3}, {day: 10, followers: 3}, {day: 11, followers: 7}, {day: 12, followers: 12}],
    },
    {
        platform: 'Twitter',
        image: twitter,
        profile: '@nathanf',
        followers: 1044,
        variation: '99 Today',
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
        ],
        chartInfo: [{day: 1, followers: 10}, {day: 2, followers: 4}, {day: 3, followers: 12}, {day: 4, followers: 2}, {day: 5, followers: 70}, {day: 5, followers: 5}, {day: 6, followers: 6}, {day: 7, followers: 12}, {day: 8, followers: 1}, {day: 9, followers: 3}, {day: 10, followers: 3}, {day: 11, followers: 7}, {day: 12, followers: 12}],
    },
    {
        platform: 'Instagram',
        image: instagram,
        profile: '@realnathanf',
        followers: '11k',
        variation: '1099 Today',
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
        ],
        chartInfo: [{day: 1, followers: 30}, {day: 2, followers: 4}, {day: 3, followers: 12}, {day: 4, followers: 2}, {day: 5, followers: 3}, {day: 5, followers: 5}, {day: 6, followers: 6}, {day: 7, followers: 12}, {day: 8, followers: 1}, {day: 9, followers: 3}, {day: 10, followers: 3}, {day: 11, followers: 7}, {day: 12, followers: 0}],
    },
    {
        platform: 'Youtube',
        image: youtube,
        profile: 'Nathan F.',
        subscribers: 8239,
        variation: '144 Today',
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
        ],
        chartInfo: [{day: 1, subscribers: 3}, {day: 2, subscribers: 3}, {day: 3, subscribers: 3}, {day: 4, subscribers: 3}, {day: 5, subscribers: 3}, {day: 5, subscribers: 5}, {day: 6, subscribers: 100}, {day: 7, subscribers: 90}, {day: 8, subscribers: 70}, {day: 9, subscribers: 25}, {day: 10, subscribers: 3}, {day: 11, subscribers: 3}, {day: 12, subscribers: 40}],
    }
]