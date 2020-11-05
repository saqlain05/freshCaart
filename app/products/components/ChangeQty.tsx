import styles from '../../styles/Product.module.scss'

const ChangeQty = ({qty, incrementValue, decrementValue, min}) => {
    return (
        <div className={styles.button}>
            <button className={styles.addToCart2} disabled={qty <= min && true} onClick={decrementValue}>-</button>
            <span className={styles.addToCart3}> {qty} KG</span>
            <button className={styles.addToCart2} onClick={incrementValue}>+</button>
        </div>
    )
}

export default ChangeQty
