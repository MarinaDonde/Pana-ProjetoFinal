import religiao from '../../../img/religiao.png'
import { useTranslation } from 'react-i18next';

const Religioes = () => {

    const { t } = useTranslation();

    return (
        <section className="cultura">
            <div>
                <img className="img-cultura" src={religiao} alt="Language" />
            </div>
            <div>
                <h3>{t('title8')}</h3>
                <p>{t('par19')}</p>
                <p className="fonte">{t('par15')}<a href="https://www.maioresemelhores.com/maiores-religioes-brasil/" target="_blank" rel="noopener noreferrer"><em>MaioresEMelhores</em></a></p>
            </div>
        </section>
    )
}

export default Religioes
