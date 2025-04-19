import styles from './verify_user.module.css';


import about_info from "../About.json";
import { useEffect, useState } from 'react';
export const About = () =>
{
    const [about, setAbout] = useState(null);
    useEffect(() =>
    {
        setAbout(about_info);

    }, []);

    if (!about)
    {
        return <div>Loading...</div>
    }

    return (


        <div className="text-center" key={about.id}>
            <h6 className={styles.about_h6}>{about.about_h3}</h6>
            <p className={`text-mute ${styles.about_p}`}>{about.about_info}</p>
        </div>


    )
}