import styles from './verify_user.module.css';
import banner from '../assets/harsh-img-hero.png';
import { About } from './About';
import { useState } from 'react';
import axios from 'axios';
import { Radio } from 'antd';
//import { Audio } from 'react-loader-spinner';
import { Header } from './Header';
// Loader import
import Loders from './Loaders';
import { Flex, Modal } from 'antd';
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const PLATFORM_URL_1 = import.meta.env.VITE_PLATFORM_URL_1;
const PLATFORM_URL_2 = "https://cosmofeed.com/vig/68012973c5314a0013f5ae72";
const authToken = import.meta.env.VITE_API_AUTH_TOKEN;

const options = [
    {
        label: 'Star Club',
        value: 1,
    },
    {
        label: 'Crypto Club',
        value: 2,
    }
];

export const Verify_user = () =>
{
    const [values, setValues] = useState(1);
    const [open, setOpen] = useState(false);
    const [inputnumber, setInputNumber] = useState('');
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');
    const [platformUrl, setPlatformUrl] = useState('');
    const [countError, setCountError] = useState('');
    const [platformid, setPlatformid] = useState(false);

    const handalOnselechPunchOrSemco = ({ target: { value } }) =>
    {
        setValues(value);
    };
    // Input function
    const handleOnChange = (value) =>
    {
        setInputNumber(value);
    };
    const handleOnClickButton = async () =>
    {

        if (!inputnumber)
        {
            setError("Please enter your mobile number to continue");
            return;
        }
        setError('');
        setCountError('');
        setLoader(true);

        setOpen(false);
        var platform = null;
        var visit_count_limit = 1;

        if (!platformid)
        {
            try
            {
                const apiurl = `${baseUrl}/verify-client?phone=${inputnumber}`;
                const response = await axios.get(apiurl, {
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                    },
                });
               // console.log(response.data);
                setLoader(false);

                if(response.data.platform_id === 0) return;
                
                if (response.data?.platform_id == 3)
                {
                    visit_count_limit = 3;
                }       
                
                if (response.data.visit_count > visit_count_limit)
                {
                    setCountError(
                        <div>
                            You have exceeded the limit for getting the joining link, if still not added,
                            chat with our team or
                            <a href='https://wa.link/2l65n9' target="_blank"
                                style={{ textDecoration: 'none', color: 'rgb(220 53 69)' }}> <b>Click here </b></a>
                        </div>
                    );

                    return;
                } else
                {
                    if (response.data?.platform_id == 3)
                    {
                        setPlatformid(true);
                        return;
                    } else
                    {
                        setOpen(true);
                    }
                }

                if (response.data.user_exist)
                {
                    setOpen(true);
                    if (response.data.platform_id == 1)
                    {
                        platform = PLATFORM_URL_1;
                    } else if (response.data.platform_id == 2)
                    {
                        platform = PLATFORM_URL_2;
                    }
                    setPlatformUrl(platform);
                } else
                {
                    setError(
                        <div>
                            User Not Registered Yet
                            <a href='https://wa.link/jg9o8q' target="_blank"
                                style={{ textDecoration: 'none', color: 'rgb(220 53 69)' }}> <b>Click here to Register</b></a>
                        </div>

                    );
                    setOpen(false);
                    return;
                }

            } catch (error)
            {
                console.error("Error fetching data:", error);
                setLoader(false);
                setError(
                    <div>
                        User Not Registered Yet
                        <a href='https://wa.link/jg9o8q' target="_blank"
                            style={{ textDecoration: 'none', color: 'rgb(220 53 69)' }}> <b>Click here to Register</b></a>
                    </div>
                );
            }

        } else
        {

            if (values == 1)
            {
                platform = PLATFORM_URL_1;
            } else if (values == 2)
            {
                platform = PLATFORM_URL_2;
            }
            setOpen(true);

            setLoader(false);
            setPlatformUrl(platform);
            setPlatformid(false);
        }
    };
    return (
        <main>
            <header>
                <Header />
            </header>
            <section>
                <div className="container">
                    <div className={styles.container_body}>
                        <div className="banner_image d-flex justify-content-center">
                            <img src={banner} alt="banner-img" className={styles.banner_img}></img>
                        </div>

                        <div className="phone_number_elemnt">
                            <h3 className={`text-center mb-0 ${styles.harsh_name}`}>
                                Welcome! I'm Harsh,
                            </h3>
                            <p className={`text-mute text-center ${styles.verify_info}`}>
                                a trader and speaker on Josh Talks. With 6+ years of experience, I've helped thousands achieve financial success.
                                Join 200K+ others for simple, actionable trading tips!
                            </p>
                        </div>

                        <div className={`card mb-3 ${styles.about}`}>
                            <div className={`card-body ${styles.card_body}`}>

                                <div>
                                    <About />
                                </div>

                                <div className={`d-flex justify-content-center mt-5  ${styles.input_elementDiv}`}>
                                    <div className={styles.max_width}>

                                        <div className="wrapper_input">
                                            <label className={styles.formRow_input_wrapper}>
                                                <input
                                                    className={styles.formRow_input}
                                                    type="number"
                                                    value={inputnumber}
                                                    onChange={(event) => handleOnChange(event.target.value)}
                                                    placeholder="With Punch/Aliceblue/Angel One/Delta Exchange"
                                                />
                                                <span className={styles.placeholder}>Registered Mobile Number</span>
                                            </label>
                                        </div>

                                        <div className={`${styles.error_msg}`}>
                                            <p className='text-danger text-center' style={{ fontSize: '12.5px', color: 'red' }}>
                                                {error || countError}
                                            </p>
                                        </div>

                                        {platformid && (
                                            <div className='d-flex justify-content-center mt-1'>
                                                <Radio.Group options={options} onChange={handalOnselechPunchOrSemco} value={values} checked={values === 1} />
                                            </div>
                                        )}
                                        <div className={`continus_btn d-flex justify-content-center mt-4 ${styles.btnContainerDiv}`}>
                                            <button
                                                type="button"
                                                className={styles.continus_btn}
                                                onClick={handleOnClickButton}
                                                disabled={loader}
                                            >
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <Flex vertical gap="middle" align="flex-start" style={{ height: '70vh' }}>
                        <Modal
                            centered
                            open={open}
                            onCancel={() => setOpen(false)}
                            width={1100}
                            padding={10}
                            footer={null}
                            bodyStyle={{ height: '70vh' }}
                        >
                            <iframe
                                src={platformUrl}
                                height="100%"
                                width="100%"
                                title="Iframe Example">
                            </iframe>
                        </Modal>
                    </Flex>
                </div>

            </section>

            {
                loader && (
                    <Loders />
                )
            }
        </main>

    );
};
