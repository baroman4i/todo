let textInput = document.getElementById('inp')
let subInput = document.getElementById('sub')
let budContainer = document.querySelector('.bud_container')

let bud = budContainer.querySelectorAll('.bud')
function createDelDone() {
    if (textInput.value !== "") {
        budContainer.insertAdjacentHTML('afterbegin', `<div class="bud">
      <div class="name">
          <h3 class="text"> ${textInput.value}</h3>
      </div>
      <div class="btn_container">
          <button class="done">done</button>
          <button class="delete">delete</button>
      </div>
    </div>`)
    } else {
        alert('введите название покупки')
    }
    textInput.value = ""
    let doneAll = document.querySelectorAll('.done')
    
    let deleteAll = document.querySelectorAll('.delete')
    
    
    deleteAll.forEach(deleteBud => {
        deleteBud.addEventListener('click', () => {
            deleteBud.closest('.bud').remove()
        })
    })
    doneAll.forEach(doneBud => {
        doneBud.addEventListener('click', () => {
            doneBud.closest('.bud').classList.add('active')
            
        })
    })

    document.getElementById('searchinp').oninput = function() {
        let val = this.value.toLowerCase().trim()
        let textAll = document.querySelectorAll('.bud')
        if (val != '') {
            textAll.forEach(function (elem) {
                // console.log(elem.innerText)
                if (elem.innerText.toLowerCase().search(val) == -1) {
                    
                    elem.classList.add('hide')
                }
                else {
                    elem.classList.remove('hide')
                }
        }) 
    }
        else {
            textAll.forEach( function (elem) {
                    elem.classList.remove('hide')
            })
        }
    }
}
document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        createDelDone()
    }
});

subInput.onclick = () => {
    createDelDone()
}