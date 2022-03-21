import styles from './styles.css';

export default function Container(props) {
    return <div className={`${styles.container} ${styles[props]}`} >{props.children}</div>;
}
