let limiteNumero = 6
let chute = 0
let numeroCorreto = Math.round(Math.random() * 100)
let teste = false
const reiniciarChance = () => {
  numeroCorreto = Math.round(Math.random() * 100)
  chute = 0
  if (teste == false){
    var toastHTML = `<span class="rede">Adivinhe o numero</span><img src="../img/happy.svg"></img>`;
    M.toast({html: toastHTML});
    teste = true
  }
}

const verificarNumero = () => {
  teste = false
  if (chute <= limiteNumero) {
    chute++
  }
  // let resultado = document.querySelector('.resultado')
  let input = document.getElementById('numero').value
  
  // VERIFICAR SE JA USOU TODAS CHANCES
  if(chute >=  limiteNumero) {
    var toastHTML = `<span class="rede">Que pena... Acabou suas chances... | ${numeroCorreto}</span><img src="../img/crying.svg"></img>`;
    M.toast({html: toastHTML});
  } else {

  if (limiteNumero == chute -1) {
    return
  } else {
  // AVISE QUE O CHUTE TEM QUE SER MAIS BAIXO
    if (input > numeroCorreto) {
      var toastHTML = `<span class="rede">Tente um número menor...</span><img src="../img/crying.svg"></img>`;
      M.toast({html: toastHTML});
      document.getElementById('numero').value = ''
    }

    // AVISE QUE O CHUTE TEM QUE SER MAIS ALTO
    else if (input < numeroCorreto) {
      var toastHTML = `<span class="rede">Tente um número maior...</span><img src="../img/crying.svg"></img>`;
      M.toast({html: toastHTML});
      document.getElementById('numero').value = ''
    } 
  }
  // SE O JOGADOR ACERTAR
  if(numeroCorreto == input) {
    var toastHTML = `<span>Acertou... | Número: ${numeroCorreto}</span><img src="../img/happy.svg"></img>`;
    M.toast({html: toastHTML});
    document.getElementById('numero').value = ''
  }
}
}
