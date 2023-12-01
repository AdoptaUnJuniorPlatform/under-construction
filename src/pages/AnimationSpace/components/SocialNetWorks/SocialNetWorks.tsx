import "./SocialNetWoks.css";
import githubIcon from "../../../../assets/icons/github-mark-white.png";
import linkedinIcon from "../../../../assets/icons/linkedin-mark.png";
import instagramIcon from "../../../../assets/icons/instagram-mark.png";
import xIcon from "../../../../assets/icons/x-mark-white.png";

export const SocialNetWorks = () => {
    return (<article className={'socialNetWorks'}>
        <section>
            <img className={'githubNetWork'} src={githubIcon} alt={'Icono GitHub'}/>
        </section>
        <section >
            <img className={'linkedinNetWork'} src={linkedinIcon} alt={'Icono Linkedin'}/>
        </section>
        <section >
            <img className={'instagramNetWork'} src={instagramIcon} alt={'Icono Instagram'}/>

        </section>
        <section >
            <img className={'twitterNetWork'} src={xIcon} alt={'Icono X anteriormente Twitter'}/>

        </section>
    </article>)
}

