import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "title": "BMI Calculator",
            "height": "Height:",
            "weight": "Weight:",
            "calculate": "Calculate",
            "result": "Your BMI is {{value}}",
            "classification": "Classification: {{classification}}"
        }
    },
    pt: {
        translation: {
            "title": "Calculadora de IMC",
            "height": "Altura(cm):",
            "weight": "Peso:",
            "calculate": "Calcular",
            "result": "Seu IMC é {{value}}",
            "classification": "Classificação: {{classification}}"
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;