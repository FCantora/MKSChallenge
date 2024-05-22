/* eslint-disable react/prop-types */
import styles from './OVCard.module.css'


export const OVCard = ({ platform, image, interactions }) => {
    return (
        <>
            {interactions.map((interaction) => (
                <div key={`${interaction.type} ${platform}`} className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.header}>
                            <p>{interaction.type}</p>
                            <img src={image} alt={platform}></img>
                        </div>
                        <div className={styles.data}>
                            <h1>{interaction.value}</h1>
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
