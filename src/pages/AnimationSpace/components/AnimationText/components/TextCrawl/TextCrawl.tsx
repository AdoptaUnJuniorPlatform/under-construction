import './TextCrawl.css';
import Logo from '../../../../assets/brand/Vector_logo.svg';
export const TextCrawl = () => {
    return (
        <>
            <section className="intro">
                <p>Hace mucho tiempo</p>
                <p>en una galaxia muy, muy cercana ....</p>
            </section>
            <section className="logo">
                <img className='image' src={Logo} alt="Logotipo de Adopta un Junior"/>
                <p>#Adopta un junior</p>
            </section>
            <div id="scroller">
                <div id="content">
                    <p id='title'>Episodio I</p>
                    <p id="subtitle">Una nueva esperanza</p>
                    <p>Es un período complicado para los juniors. Las oportunidades laborales para la gente que acaba de
                        incorporarse al sector son unicornios y cada vez se hace más difícil encontrar una empresa en la
                        que establecer base.</p>
                    <p>En estos tiempos, Maite y Laura tienen una idea que puede cambiar el rumbo de las cosas: Adopta
                        un Junior. Deciden montar una plataforma con la ayuda de otros juniors como ellas y demostrar de
                        lo que somos capaces.</p>
                    <p>Algunos de estos intrépidos juniors son: </p>
                    <p>Laura, Maite, Samuel, Carolina, Daniel, Ana, Wilson, Kevin, Belén, Mercedes, Arantxa, Estefanía,
                        Alejandra, Gary, Ángel, María, Rubén, Natalia.... </p>
                    <p>Muy pronto tendremos nuevas noticias de nuestros valientes, permaneced atentos a vuestras
                        pantallas.</p>
                </div>
            </div>
        </>
    )
}

