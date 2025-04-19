
import styles from "./verify_user.module.css";
import hearsh_logo from "../assets/harsh-bhagat-logo.png"
export const Header = () =>
{
    return (
        <>
            <div className={styles.header_element} >
                <div className={`container ${styles.logo}`}>
                    <img src={hearsh_logo} alt="logo" className={styles.hearsh_icon} ></img>
                </div>
            </div>
        </>
    )
}