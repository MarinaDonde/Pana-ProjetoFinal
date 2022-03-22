import pt from '../../img/pt.png'
import en from '../../img/en.png'
import es from '../../img/es.png'
import fr from '../../img/fr.png'
import { useTranslation } from 'react-i18next'

import './language.css';


const languageOptions = [
    {
        name: "portuguese",
        value: "pt",
        flag: pt
    },
    {
        name: "english",
        value: "en",
        flag: en
    },
    {
        name: "spanish",
        value: "es",
        flag: es
    },
    {
        name: "french",
        value: "fr",
        flag: fr
    }
]

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    return (
        <div>
            <div className="language-switcher">
                {languageOptions.map(languageOption => (
                    <button
                        key={languageOption.value}
                        onClick={() => {
                            i18n.changeLanguage(languageOption.value)
                        }}
                    >
                        <img className="flag" src={languageOption.flag} alt={languageOption.name} />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default LanguageSwitcher
