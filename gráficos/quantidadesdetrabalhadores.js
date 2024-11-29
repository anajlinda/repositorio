async function quantidadeTrabalhadores() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-tipos-de-ocupacao.json&#39;
    const res = await fetch(url)
    const dados = await res.json()
    const horasdetrabalho = Object.keys(dados)
    const quantidadeTrabalhadores = Object.values(dados)
    const data = [
        {
          x: horasdetrabalho,
          y: quantidadeTrabalhadores,
          type: 'bar'
        }
      ]
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
  }
  quantidadeTrabalhadores()