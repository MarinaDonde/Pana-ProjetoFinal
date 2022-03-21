import economia from '../../../img/economia.png'
import { useTranslation } from 'react-i18next';

const Economia = () => {

    const { t } = useTranslation();

    return (
        <section className="cultura">
            <div>
                <img className="img-cultura" src={economia} alt="Language" />
            </div>
            <div>
                <h3>{t('title6')}</h3>
                <p>{t('par17')}</p>
                <p className="fonte">{t('par15')} <a href="https://www.todamateria.com.br/economia-no-brasil/" target="_blank" rel="noopener noreferrer"><em>TodaMateria</em></a></p>
            </div>
        </section>
    )
}

export default Economia
