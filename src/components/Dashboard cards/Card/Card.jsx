/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'

import styles from './Card.module.css'

export const Card = ({ platform, image, profile, followers, subscribers, variation }) => {

  const getBorderClass = (platform) => {
    switch (platform) {
        case 'facebook':
            return styles.facebookBorder;
        case 'twitter':
            return styles.twitterBorder;
        case 'instagram':
            return styles.instagramBorder;
        case 'youtube':
            return styles.youtubeBorder;
        default:
            return '';
    }
};

  const borderClass = getBorderClass(platform);

  return (
    <div className={`${styles.cardContainer} ${borderClass}`}>
      <div className={styles.elements}>
        <div className={styles.cardHeader}>
          <img className={styles.img} src={image} alt={platform} />
          <p className={styles.profile}>{profile}</p>
        </div>
        <div className={styles.numberContainer}>
          {
            followers
              ? <><h1 className={styles.number}> {followers} </h1> <h2 className={styles.followers}>Followers</h2></>
              : <><h1 className={styles.number}> {subscribers} </h1> <h2 className={styles.followers}>Subscribers</h2></>
          }
        </div>
        {
          followers
            ? <p className={styles.variation}>▲{variation}</p>
            : <p className={styles.variationDown}>▼{variation}</p>
        }
      </div>
    </div>
  )
}
