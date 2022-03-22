import idioma from '../../../img/idioma.png'
import { useTranslation } from 'react-i18next';

const Idioma = () => {

    const { t } = useTranslation();

    return (
        <section className="cultura">
            <div>
                <img className="img-cultura" src={idioma} alt="Language" />
            </div>
            <div>
                <h3>{t('title5')}</h3>
                <p>{t('par16')}</p>
                <p className="fonte">{t('par15')} <a href="https://www.infoescola.com/portugues/historia-da-lingua-portuguesa-no-brasil/" target="_blank" rel="noopener noreferrer"><em>InfoEscola</em></a></p>
            </div>
        </section>
    )
}

export default Idioma
