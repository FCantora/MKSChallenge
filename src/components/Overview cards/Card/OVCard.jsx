/* eslint-disable react/prop-types */
import styles from './OVCard.module.css'


export const OVCard = ({ platform, image, interactions }) => {
    return (
        <>
            {interactions.map((interaction) => (
                <div key={`${interaction.type} ${platform}`} className={styles.cardContainer}>
                    <div className={styles.elements}>
                        <div className={styles.header}>
                            <p className={styles.title}>{interaction.type}</p>
                            <img src={image} alt={platform} className={styles.img}></img>
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.number}>{interaction.value}</h1>
                            {
                                platform === 'Youtube' || interaction.variation === '2%'
                                    ? <p className={styles.variationDown}>▼{interaction.variation}</p>
                                    : <p className={styles.variation}>▲{interaction.variation}</p>
                            }
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
