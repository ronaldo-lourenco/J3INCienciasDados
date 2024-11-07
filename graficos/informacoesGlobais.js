const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_com_acesso_a_educacao/1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo/1e9)
    const horas = parseInt(dados.tempo_medio_dia_estudando)
    const minutos = Math.round((dados.tempo_medio_dia_estudando - horas)*60)
    const porcentagemConectada = ((pessoasConectadas/pessoasNoMundo)*100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span> ${pessoasConectadas} bilhões</span> estão empregadas em serviços registrados. Eles trabalham <span> ${horas} horas</span> e <span>${minutos} minutos</span> por semana.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> pessoas conectadas em alguma rede social.`
    
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo) ;
}
visualizarInformacoesGlobais() ;
