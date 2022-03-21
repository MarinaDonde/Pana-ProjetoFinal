import idioma from '../../../img/idioma.png'

const Idioma = () => {
    return (
        <section className="cultura">
            <div>
                <img className="img-cultura" src={idioma} alt="Language" />
            </div>
            <div>
                <h3>Idioma</h3>
                <p>O Brasil foi "descoberto" por Portugal no ano de 1500, e desde então, com a grande presença dos portugueses nos territórios brasileiros, a língua portuguesa foi se enraizando, enquanto as línguas indígenas foram aos poucos desaparecendo. Uma delas, talvez a que mais influenciou o atual português falado no Brasil, foi o Tupinambá ou Tupi-guarani, falado pelos índios que habitavam o litoral. Esta língua foi a primeira utilizada como língua geral na colônia, ao lado do português.
                A língua portuguesa, falada no Brasil, herdou, no entanto, um vasto vocabulário das línguas indígenas, principalmente no que se diz respeito às denominações da fauna, flora, e demais palavras relacionadas à natureza.
                Os portugueses trouxeram, então, muitos escravos capturados na África, para trabalhar nas terras brasileiras, e estes vieram falando diversos dialetos, os quais contribuíram para a construção da nossa língua. Muito do que temos hoje, foi herdado das línguas africanas, bem como itens culturais que vieram junto com os escravos e aqui se instalaram.
                O português brasileiro sofreu, ainda, influências dos espanhóis, holandeses e demais países europeus que invadiram o Brasil após a independência (1822). Isso explica o porquê de algumas diferenças de vocabulário e/ou sotaque existentes entre algumas regiões do Brasil.</p>
                <p className="fonte">Fonte: <a href="https://www.infoescola.com/portugues/historia-da-lingua-portuguesa-no-brasil/" target="_blank" rel="noopener noreferrer"><em>InfoEscola</em></a></p>
            </div>
        </section>
    )
}

export default Idioma
