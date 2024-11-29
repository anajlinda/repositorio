const url='https:// https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-dados-gerais.json&#39;

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    //console.log(dados)
    const pessoasConectadas = (dados.total_trabalho / 1e9)
const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
const horas = parseInt(dados.tempo_medio)
const minutos = Math.round((dados.tempo_medio - horas) * 60)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
     paragrafo.innerHTML = ` O trabalho é muito importante para o ser humano, tanto que de um total de <span>${dados.total_pessoas_do_mundo}?</span> apenas  <span>${dados.total_desempregados} </span> de desempregados e o <span>${dados.total_empregados}</span>, da população em idade ativa. Para o tempo médio de trabalho temos um total de <span>$ {dados.tempo_de_trabalho_semanal?</span> . E você, trabalha? Quantas horas por semana? Acredita que isso é importante, porque?`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}
vizualizarInformacoesGlobais()
