/* eslint-disable react/prop-types */
import styles from './Card.module.css'


export const Card = ({ platform, image, interactions }) => {
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
                                platform === 'youtube' || interaction.variation === '2%'
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
