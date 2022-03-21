import economia from '../../../img/economia.png'

const Economia = () => {
    return (
        <section className="cultura">
            <div>
                <img className="img-cultura" src={economia} alt="Language" />
            </div>
            <div>
                <h3>ECONOMIA</h3>
                <p>Hoje, a economia brasileira é baseada na produção agrícola, o que faz do Brasil um dos principais exportadores de soja, frango e suco de laranja do mundo. Ainda é líder na produção de açúcar e derivados da cana, celulose e frutas tropicais.
                Igualmente, possui uma importante indústria de carne, com a criação e abate de animais, ocupando o posto de terceiro produtor mundial de carne bovina.
                Em termos de indústria de transformação, o Brasil se destaca na produção de peças para abastecimento dos setores automotivos e aeronáuticos. Da mesma forma é um dos principais produtores de petróleo do mundo, dominando a exploração de petróleo em águas profundas.</p>
            </div>
        </section>
    )
}

export default Economia
