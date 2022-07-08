import gitImagem from './github.png'
import linkedinImagem from './linkedin.png'

function Subtitulo() {
    return (
        <div className="aprendizados">
            <div className="redes">
                <a target="blank" href="https://github.com/De-Reis"><img src={gitImagem}/></a>
                <a target="blank" href="https://www.linkedin.com/in/denise-reis-0a643b7b/"><img src={linkedinImagem}/></a>
                
            </div>
            <hr></hr>
            <h1>4 aprendizados na reprograma</h1>
            
        </div>
    )
}

export default Subtitulo