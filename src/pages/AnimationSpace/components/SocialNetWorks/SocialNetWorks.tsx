import "./SocialNetWoks.css";
import linkedinIcon from "../../../../assets/icons/linkedin-mark.png";
import instagramIcon from "../../../../assets/icons/instagram-mark.png";
import xIcon from "../../../../assets/icons/x-mark-white.png";

export const SocialNetWorks = () => {
    return (
        <article className={'socialNetWorks'}>
            <section className={'socialLinks'}>
                    <a href={'https://www.linkedin.com/company/adoptaunjunior/'} target={'_blank'} referrerPolicy={'no-referrer'}>
                        <img className={'linkedinNetWork'} src={linkedinIcon} alt={'Icono Linkedin'}/>
                    </a>
                    <a href={'https://www.instagram.com/adoptaunjunior/'} target={'_blank'} referrerPolicy={'no-referrer'}>
                        <img className={'instagramNetWork'} src={instagramIcon} alt={'Icono Instagram'}/>
                    </a>

                    <a href={'https://x.com/adoptaunjunior?s=21&t=Ba2TQDZXy7cEoG4dD7VFFA'} target={'_blank'} referrerPolicy={'no-referrer'}>
                        <img className={'twitterNetWork'} src={xIcon} alt={'Icono X anteriormente Twitter'}/>
                    </a>
            </section>
            <section>
                <section className="titleEnd">
                    <p>#AdoptaUnJunior</p>
                </section>
            </section>
        </article>
)}

