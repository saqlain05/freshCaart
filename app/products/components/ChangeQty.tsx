import styles from '../../styles/Product.module.scss'

const ChangeQty = ({qty, incrementValue, decrementValue, min}) => {
    return (
        <div className={styles.button}>
            <button disabled={qty <= min && true} onClick={decrementValue}>-</button>
            <button onClick={incrementValue}>+</button>
        </div>
    )
}

export default ChangeQty
