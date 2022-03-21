import religiao from '../../../img/religiao.png'

const Religioes = () => {
    return (
        <section className="cultura">
            <div>
                <img className="img-cultura" src={religiao} alt="Language" />
            </div>
            <div>
                <h3>Religiões</h3>
                <p>A miscigenação dos brasileiros mostra-se também na sua divisão religiosa, marcada pelo sincretismo entre religiões cristãs e ritos de matriz africana ou indígena. Em janeiro de 2020, uma pesquisa realizada pelo Datafolha revelou que 50% dos brasileiros são católicos, 31% evangélicos e 10% não possuem religião.

                Os que declararam não seguir nenhuma religião, podem acreditar em Deus, na força do universo ou ter um lado espiritual, mas sentem-se satisfeitos em não seguir nenhum dogma específico.

                Os espíritas representam 3% da população brasileira, segundo a pesquisa, sendo que a comunidade espírita brasileira é a maior do mundo.

                Segundo a pesquisa, 2% dos brasileiros são adeptos de religiões afro-brasileiras. As duas religiões afro-brasileiras com o maior número de adeptos no Brasil são a Umbanda e o Candomblé.
                De acordo com o Datafolha, 2% da população brasileira pratica outras religiões. Dentre elas, podemos destacar o budismo, o hinduísmo, o islamismo e as religiões esotéricas.

                Os ateus não acreditam que exista um Deus e, geralmente, têm uma visão voltada à ciência. De acordo com a pesquisa do Datafolha, 1% do povo brasileiro se considera ateu.
                A pesquisa revelou que apenas 0,3% da população brasileira é judaica.</p>
                <p className="fonte">Fonte: <a href="https://www.maioresemelhores.com/maiores-religioes-brasil/" target="_blank" rel="noopener noreferrer"><em>MaioresEMelhores</em></a></p>
            </div>
        </section>
    )
}

export default Religioes
