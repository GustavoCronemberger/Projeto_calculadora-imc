import React, { useState } from 'react';
import './IMCForm.css';
import { useTranslation } from 'react-i18next';

function IMCForm() {
    const { t } = useTranslation();
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = (event) => {
        event.preventDefault();
        const alturaMetros = altura / 100;
        const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(1);
        setImc(imcCalculado);
        setClassificacao(getClassificacaoIMC(imcCalculado));

        setAltura('');
        setPeso('');
    };

    const getClassificacaoIMC = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
        if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
        if (imc >= 30 && imc < 34.9) return 'Obesidade grau 1';
        if (imc >= 35 && imc < 39.9) return 'Obesidade grau 2';
        return 'Obesidade grau 3';
    };

    return (
        <container>
            <div className="imc-widget">
    <h2>Calculadora de IMC</h2>
    <form onSubmit={calcularIMC}>
        <div className="input-group">
            <label htmlFor="altura">Altura (cm):</label>
            <input
                type="number"
                id="altura"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                required
            />
        </div>
        <div className="input-group">
            <label htmlFor="peso">Peso (kg):</label>
            <input
                type="number"
                id="peso"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                required
            />
        </div>
        <button type="submit" className="btn-calculate">Calcular</button>
    </form>
    {imc && (
        <div className="result">
            <h3>Seu IMC: {imc}</h3>
            <p>Classificação: {classificacao}</p>
        </div>
    )}
    <div className="footer">
        <a href="https://github.com/GustavoCronemberger/Projeto_calculadora-imc" target="_blank" className="btn-about">Sobre</a>
    </div>
</div>
        </container>

    );
}

export default IMCForm;