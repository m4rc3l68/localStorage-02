/* const criaStorage = () => {

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

getStorage() */  



const produtos = () => {

  const dadosDoProduto = {
    "nome": `Caneta Bic`,
    "preco": 1.90,
    "desconto": 0.05,
     "caracteristicas": [
      {nome: 'Cor', valor: 'preco'},
      {nome: 'Material', valor: 'Plástico'}
     ]
  }

  localStorage.setItem(`produto`, JSON.stringify(dadosDoProduto))
}

const getStorage = () => {
  const dadosDoProduto = localStorage.getItem('produto')

  if(dadosDoProduto) {
    const objDadosDoProduto = JSON.parse(dadosDoProduto)
    const {nome, preco, desconto} = objDadosDoProduto

    const resumo = nome + '<br>' + preco + '<br>' + desconto
    
    document.querySelector('#conteudo1').innerHTML = resumo
  }
  else if(!dadosDoProduto) {
    document.querySelector('#conteudo2').innerHTML = 'A chave não existe!'      
  } 
}  

const removeStorage = () => {
  localStorage.removeItem('produto')
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

document.getElementById('cria-storage').onclick = produtos
document.getElementById('remove-storage').onclick = removeStorage
document.getElementById('limpar-storage').onclick = clearStorage

getStorage()  