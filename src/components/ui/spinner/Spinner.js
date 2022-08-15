import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.container_spinner}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;
