/* eslint-disable react/prop-types */

import styles from './DBCard.module.css'

export const DBCard = ({ platform, image, profile, followers, subscribers, variation, onClick }) => {

  const getBorderClass = (platform) => {
    switch (platform) {
      case 'Facebook':
        return styles.facebookBorder;
      case 'Twitter':
        return styles.twitterBorder;
      case 'Instagram':
        return styles.instagramBorder;
      case 'Youtube':
        return styles.youtubeBorder;
      default:
        return '';
    }
  };

  const borderClass = getBorderClass(platform);

  return (
    <div className={`${styles.container} ${borderClass}`} onClick={() => onClick(platform)}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img src={image} alt={platform} />
          <p>{profile}</p>
        </div>
        <div className={styles.data}>
          {
            followers
              ? <><h1>{followers}</h1> <h2>Followers</h2></>
              : <><h1>{subscribers}</h1> <h2>Subscribers</h2></>
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
