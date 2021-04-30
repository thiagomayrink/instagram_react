import PostTopo from "./PostTopo"
import PostImagem from "./PostImagem"
import PostFundoAcoes from "./PostFundoAcoes"
import PostFundoCurtidas from "./PostFundoCurtidas"

export default function Post(props) {
    return (
        <div className="post">
            <PostTopo 
                usuario={props.usuario}
            />
            <PostImagem 
                imagem={props.imagem}
            />
            <div className="fundo">
                <PostFundoAcoes/>
                <PostFundoCurtidas 
                    curtidas={props.curtidas}
                />
            </div>
        </div>
    );
}