import cultura from '../../../img/cultura.png'

const CulturaBrasileira = () => {
    return (
        <section className="cultura">
            <div>
                <img className="img-cultura" src={cultura} alt="Language" />
            </div>
            <div>
                <h3>testeeeeeeeeeeeeeeeCultura</h3>
                <p>A Cultura Brasileira é o resultado da miscigenação de diversos grupos étnicos que participaram da formação da população brasileira. A diversidade cultural predominante no Brasil é consequência também da grande extensão territorial e das características geradas em cada região do país. O indivíduo branco, que participou da formação da cultura brasileira, fazia parte de vários grupos que chegaram ao país durante a época colonial.
                Foram eles, os colonizadores, os responsáveis pela formação inicial da população brasileira. Isso decorreu do processo de miscigenação com índios e negros africanos, de 1500 a 1808. Durante três séculos, os portugueses eram os únicos europeus que podiam entrar livremente no Brasil.</p>
                <p className="fonte">Fonte: <a href="https://www.todamateria.com.br/cultura-brasileira/" target="_blank" rel="noopener noreferrer"><em>TodaMateria</em></a></p>
            </div>
        </section>
    )
}

export default CulturaBrasileira
