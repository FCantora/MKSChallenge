import { Charts } from '../Recharts/Charts/Charts'
import styles from './Modal.module.css'

// eslint-disable-next-line react/prop-types
export const Modal = ({ isOpen, onClose, platformToRender }) => {
  return (
    <div className={styles.container} style={{ display: isOpen ? 'grid' : 'none' }}>
        <Charts isOpen={isOpen} onClose={onClose} platformToRender={platformToRender}/>
    </div>
  )
}
