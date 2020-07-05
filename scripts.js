let turn = 'circle'
let numberCheck = 0

for(let i = 1; i <= 3; i++){
  for(let j = 1; j <=3; j++){
    document.getElementById(`ttt${i}${j}`).addEventListener("click", function(){
      var elemt = document.getElementById(`ttt${i}${j}`)
      if(!elemt.className.split(' ').includes('active')) {
        elemt.classList.add(turn)
        elemt.classList.add('active')
        turn = turn === 'xis' ? 'circle' : 'xis'
        if (numberCheck + 1 >= 5) {
          HaveWinner()
        }
        numberCheck++
      }
    });
    document.getElementById(`ttt${i}${j}`).addEventListener("mouseenter", function(){
      var elemt = document.getElementById(`ttt${i}${j}`)
      if(!elemt.className.split(' ').includes('active')) {
        elemt.classList.add(turn)
      }
    });

    document.getElementById(`ttt${i}${j}`).addEventListener("mouseleave", function(){
      var elemt = document.getElementById(`ttt${i}${j}`)
      if(!elemt.className.split(' ').includes('active')) {
        elemt.classList.remove(turn) 
      }
    });
  }
}

function HaveWinner () {
  // Verifica as linhas
  for(let i = 1; i <= 3; i++){
    check(`${i}1`, `${i}2`, `${i}3`)
    check(`1${i}`, `2${i}`, `3${i}`)
  }
  // Verifica as diagonais
  check('11', '22', '33')
  check('13', '22', '31')
}


function check(first, secont, third) {
  var elemt = document.getElementById(`ttt${first}`)
  if(elemt.className.split(' ').includes('active')) {
    const lineClass = elemt.className.split(' ').includes('xis') ? 'xis' : 'circle'
    var parent2 = document.getElementById(`ttt${secont}`)
    var parent3 = document.getElementById(`ttt${third}`)
    if (parent2.className.split(' ').includes(lineClass) 
      && parent3.className.split(' ').includes(lineClass)) {
      const button = document.querySelectorAll('button')
      for (var i = 0, len = button.length; i<len; i++){
        button[i].disabled = true;
      }
      elemt.classList.add('win')
      parent2.classList.add('win')
      parent3.classList.add('win')
    }
  }
}


function reset () {
  turn = 'circle'
  numberCheck = 0
  const button = document.querySelectorAll('button')
  for (var i = 0, len = button.length; i<len; i++){
    button[i].classList = '';
    button[i].disabled = false;
  }
}

