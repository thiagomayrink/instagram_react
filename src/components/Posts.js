import Post from "./Post"

export default function Posts() {
    {/* esse const é a simulação de um objeto recebido do servidor */}
    const dadosDoPost = [
        {dadosPostUsuario: [
                {nome: "meowed",imagem: "assets/img/meowed.svg"},
            ],
            listaImagens: ["assets/img/gato-telefone.svg"],
            listaCurtidas: [
                {img: 'assets/img/respondeai.svg', perfil:'respondeai', contador: '101.523'} 
            ]
        },
        {dadosPostUsuario: [
                {nome: "barked",imagem: "assets/img/barked.svg"},
            ],
            listaImagens: ["assets/img/dog.svg"],
            listaCurtidas: [
                {img: 'assets/img/adorable_animals.svg', perfil:'adorable_animals', contador: '99.159'} 
            ]
        }
    ]
    
 return (
    <div className="posts">
        {dadosDoPost.map((dados) => (
            <Post usuario={dados.dadosPostUsuario} imagem={dados.listaImagens} curtidas={dados.listaCurtidas}/>
        ))}
    </div>
 );
}