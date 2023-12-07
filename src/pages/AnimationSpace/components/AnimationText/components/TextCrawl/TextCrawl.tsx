import './TextCrawl.css';
import {Introduction} from "../Introduction/Introduction.tsx";

export const TextCrawl = () => {
    return (
        <>
            <Introduction/>
            <div id="scroller">
                <div id="content">
                    <p id='title'>Episodio I</p>
                    <p id="subtitle">¡Una Nueva Esperanza!</p>
                    <p className={'textScroller'}>Es un período complicado para los juniors. </p>
                    <p className={'textScroller'}>Donde cada vez se hace más difícil encontrar una empresa que les de
                        una oportunidad. </p>
                    <p className={'textScroller'}>Es, en estos tiempos, cuando Maite y Laura lanzan un grito de guerra que cambia el rumbo de las cosas: #AdoptaUnJunior</p>
                    <p className={'textScroller'}>y NO...no estaban solas..enseguida aparecieron otros juniors como ellas para demostrar de lo que somos capaces </p>
                    <p className={'textScroller'}>y deciden montar una plataforma para reunir a más juniors y encontrar empresas que sepan valorar el potencial que tenemos </p>
                    <p className={'textScroller'}>Algunos de estos intrépidos Juniors Warriors son:</p>
                    <p className={'textScroller'}>Laura, Maite, Samuel, Arantxa, Estefanía, Elsa,</p>
                    <p className={'textScroller'}>Kevin, Belén, Daniel, Mercedes, Wilson, Ana,</p>
                    <p className={'textScroller'}>Carolina, Estefanía, Gary, Ángel, María, Alejandra... </p>
                    <p className={'textScroller'}>Muy pronto tendremos nuevas noticias de nuestros valientes, permaneced atentos a vuestras
                        pantallas...</p>
                </div>
            </div>
        </>
    )
}

