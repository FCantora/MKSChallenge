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
    <div className={`${styles.cardContainer} ${borderClass}`} onClick={() => onClick(platform)}>
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
