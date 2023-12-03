import './TextCrawl.css';
import {Introduction} from "../Introduction/Introduction.tsx";

export const TextCrawl = () => {
    return (
        <>
            <Introduction/>
            <div id="scroller">
                <div id="content">
                    <p id='title'>Episodio I</p>
                    <p id="subtitle">Una nueva esperanza</p>
                    <p className={'textScroller'}>Es un período complicado para los juniors. Las oportunidades laborales para la gente que acaba de
                        incorporarse al sector son unicornios y cada vez se hace más difícil encontrar una empresa en la
                        que establecer base.</p>
                    <p className={'textScroller'}>En estos tiempos, Maite y Laura tienen una idea que puede cambiar el rumbo de las cosas: Adopta
                        un Junior. Deciden montar una plataforma con la ayuda de otros juniors como ellas y demostrar de
                        lo que somos capaces.</p>
                    <p className={'textScroller'}>Algunos de estos intrépidos juniors son: </p>
                    <p className={'textScroller'}>Laura, Maite, Samuel, Carolina, Daniel, Ana, Wilson, Kevin, Belén, Mercedes, Arantxa, Estefanía,
                        Alejandra, Gary, Ángel, María, Rubén, Natalia.... </p>
                    <p className={'textScroller'}>Muy pronto tendremos nuevas noticias de nuestros valientes, permaneced atentos a vuestras
                        pantallas.</p>
                </div>
            </div>
        </>
    )
}

