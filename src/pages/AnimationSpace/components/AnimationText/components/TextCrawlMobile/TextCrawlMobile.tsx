import {Introduction} from "../Introduction/Introduction.tsx";
import './TextCrawlMobile.css';

export const TextCrawlMobile = () => {
    return (
        <>
            <section>
                <Introduction/>
            </section>
            <article className={'textCrawlMobile'}>

                <header className={'headerText'}>
                    <h1>Episodio I</h1>
                    <h2>¡Una Nueva Esperanza!</h2>
                </header>
                <section id={'introduction'}>
                    <p id={'introduction'}>Es un período complicado para los juniors.</p>
                </section>
                <section id={'description'}><p>Donde cada vez se hace más difícil encontrar una empresa que les de
                        una oportunidad.</p></section>
                <section id={'knot'}><p>Es, en estos tiempos, cuando Maite y Laura lanzan un grito de guerra que cambia el rumbo de las cosas: #AdoptaUnJunior.</p>
                <p>y NO...no estaban solas..enseguida aparecieron otros juniors como ellas para demostrar de lo que somos capaces</p> 
                <p> y deciden montar una plataforma para reunir a más juniors y encontrar empresas que sepan valorar el potencial que tenemos. </p>
                </section>
                <section id={'presentation'}><p>Algunos de estos intrépidos Juniors Warriors son: </p></section>
                <section id={'collaborations'}><p>Laura, Maite, Samuel, Arantxa, Estefanía, Elsa,Kevin, Belén, Daniel, Mercedes, Wilson, Ana, Carolina, Estefanía, Gary, Ángel, María, Alejandra...</p></section>
                <section id={'footer'}><p>Muy pronto tendremos nuevas noticias de nuestros valientes, permaneced
                    atentos a vuestras pantallas.</p></section>
            </article>
        </>)
};