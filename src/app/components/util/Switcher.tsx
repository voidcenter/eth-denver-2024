import styles from '../../styles/Switcher.module.css';

export default function Switcher({ isActive, setIsActive, option1, option2}: any) {

    const handleClick = () => {
        if (isActive === option1) {
            setIsActive(option2);
        } else {
            setIsActive(option1);
        }
    };

    return (
        <div className={styles.switcher} onClick={() => handleClick()}>
            <button
                className={`${styles.button} ${isActive === option1 ? styles.active : ''}`}
                type="button"
            >
                {option1}
            </button>
            <button
                className={`${styles.button} ${isActive === option2 ? styles.active : ''}`}
                type="button"
            >
                {option2}
            </button>
        </div>
    );
}