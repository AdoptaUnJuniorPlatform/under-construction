import Logo from "../../../../../../assets/brand/Vector_logo.svg";
import './Introduction.css';
export const Introduction = () => {
    return (<article className={'introduction'}>
        <section className="intro">
            <p>Hace mucho tiempo</p>
            <p>en una galaxia muy, muy cercana ....</p>
        </section>
        <section className="logo">
            <img className='image' src={Logo} alt="Logotipo de Adopta un Junior"/>
            <p>#AdoptaUnJunior</p>
        </section>
    </article>)
}