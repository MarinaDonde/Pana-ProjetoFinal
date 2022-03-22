import cultura from '../../../img/cultura.png'
import { useTranslation } from 'react-i18next';

const CulturaBrasileira = () => {

    const { t } = useTranslation();

    return (
        <section className="cultura">
            <div className="img-card-cultura">
                <img className="img-cultura" src={cultura} alt="Language" />
            </div>
            <div className="cultura-card">
                <h3>{t('title7')}</h3>
                <p>{t('par18')}</p>
                <p className="fonte">{t('par15')} <a href="https://www.todamateria.com.br/cultura-brasileira/" target="_blank" rel="noopener noreferrer"><em>TodaMateria</em></a></p>
            </div>
        </section>
    )
}

export default CulturaBrasileira
