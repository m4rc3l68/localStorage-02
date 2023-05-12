const criaStorage = () => {

  const dadosDoVideo = {
    "titulo": `Armazenando dados no localStorage em JS`,
    "duracao": `00:25:12`,
    "descricao": `Aprender a usar o localStorage do JavaScript`
  }

  localStorage.setItem(`video`, JSON.stringify(dadosDoVideo))
}

const getStorage = () => {
  const dadosDoVideo = localStorage.getItem('video')

  if(dadosDoVideo) {
    const objDadosDoVideo = JSON.parse(dadosDoVideo)
    const {titulo, duracao, descricao} = objDadosDoVideo

    const resumo = titulo + '<br>' + duracao + '<br>' + descricao
    
    document.querySelector('#conteudo1').innerHTML = duracao + '<br>' + resumo
  }
  else if(!dadosDoVideo) {
    document.querySelector('#conteudo2').innerHTML = 'A chave não existe!'      
  } 
}  

const removeStorage = () => {
  localStorage.removeItem('video')
}

const clearStorage = () => {
  localStorage.clear()
}

//== Méthods ==
// setItem
// getItem
// removeItem
// clear
// Extra:
// Utilize os JSON.stringfy e JSON.parse para poder 
// armazenar dados mais complexos no Storage

document.getElementById('cria-storage').onclick = criaStorage
document.getElementById('remove-storage').onclick = removeStorage
document.getElementById('limpar-storage').onclick = clearStorage

getStorage()  