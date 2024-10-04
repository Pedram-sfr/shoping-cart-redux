import { RotatingLines } from "react-loader-spinner";

import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.Loader}>
      <RotatingLines
        width="100px"
        heigth="100px"
        strokeColor="#fe5d42"
        strokeWidth="3"
      />
    </div>
  );
}

export default Loader;
