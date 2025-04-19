
//import styles from '/src/Component/verify_user.module.css'
import styles from './loader.module.css';
const Loders = () =>
{
    return (
        <div className={styles.windowLayer}>
            <div className='d-flex justify-content-center'>
                {
                    // <div className="spinner-border" role="status" style={{ width: '2.5rem', height: '2.5rem' }}>
                    //     <span className="visually-hidden"></span>
                    // </div> 
                }
                <div>

                    <div id="loader-7" className={styles.loaderSpan}>
                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <div className='pt-3'>
                        <h6 className='text-center text-white' style={{ fontSize: '20px' }}>Loading Please Wait...</h6>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Loders;