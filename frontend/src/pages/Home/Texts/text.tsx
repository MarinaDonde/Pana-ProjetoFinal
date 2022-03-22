import { useTranslation } from 'react-i18next';

const Text = () => {

  const { t } = useTranslation();

  return (
      <section className="text">
        <h1>{t('title1')} </h1>
        <p>{t('par01')}</p>
        <p>{t('par02')}</p>
        <p>{t('par03')}</p>
        <p>{t('par04')}</p>
        <h1>{t('title2')} </h1>
        <p>{t('par05')}</p>
        <p>{t('par06')}</p>
        <p>{t('par07')}</p>
        <p>{t('par08')}</p>
        <h1>{t('title3')} </h1>
        <p>{t('par09')}</p>
        <p>{t('par10')}</p>
        <p>{t('par11')}</p>
        <h1>{t('title4')} </h1>
        <p>{t('par12')}</p>
        <p>{t('par13')}</p>
        <p>{t('par14')}</p>
        <p className="fonte">
        {t('par15')} <a href="https://www.acnur.org/portugues/dados-sobre-refugio/perguntas-e-respostas/#direitos" target="_blank" rel="noopener noreferrer"><em>AcnurBrasil</em></a>
        </p>
      </section>
  )
}

export default Text
