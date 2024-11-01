const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${dados.total_pessoas_mundo} </span> de pessoas e que aproximadamente <span> ${dados.total_pessoas_com_acesso_a_educacao} </span> estão empregadas em serviços registrados. Eles trabalham <span> ${dados.tempo_medio_dia_estudando} </span> horas por semana.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo) ;
}
visualizarInformacoesGlobais() ;
