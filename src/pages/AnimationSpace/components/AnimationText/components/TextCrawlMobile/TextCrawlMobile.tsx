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
                    <h2>Una nueva esperanza</h2>
                </header>
                <section id={'introduction'}>
                    <p id={'introduction'}>Es un período complicado para los juniors.</p>
                </section>
                <section id={'description'}><p>Donde cada vez se hace más difícil encontrar una empresa que les de
                    una oportunnidad.</p></section>
                <section id={'knot'}><p>En estos tiempos, Maite y Laura tienen una idea que puede cambiar el rumbo
                    de las cosas: Adopta un Junior. Deciden montar una plataforma con la ayuda de otros juniors como
                    ellas y demostrar de lo que somos capaces.</p>
                </section>
                <section id={'presentation'}><p>Algunos de estos intrépidos juniors son: </p></section>
                <section id={'collaborations'}><p>Laura, Maite, Samuel, Carolina, Daniel, Ana, Wilson, Kevin, Belén,
                    Mercedes, Arantxa, Estefanía, Alejandra, Gary, Ángel, María, Rubén, Natalia.... </p></section>
                <section id={'footer'}><p>Muy pronto tendremos nuevas noticias de nuestros valientes, permaneced
                    atentos a vuestras pantallas.</p></section>
            </article>
        </>)
};