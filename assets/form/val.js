// Todos os seus filhos
// serão ensinados pelo Senhor,
// e grande será a paz de suas crianças. Isaias 54:13



const campo = document.querySelectorAll('[required]')
let form = document.querySelector("form")
var botao = document.querySelector(".bot")
var cont = 0
var ok = false


// console.log(campo)

function verifique() {
    for (key of campo) {
        console.log(key)
        if (key.value == "") {
            return ok
        } else {
            ok = true
            console.log(ok)
        }
    }
}

botao.addEventListener("submit", verifique, false)


// for (c of campo) {
//     c.addEventListener("invalid", verifique, false)
// }

// if (ok) {
//     botao.removeAttribute("disabled")
// }
form.addEventListener("submit", event => {
    let sub = event.submitter
    console.log(sub)
    event.preventDefault()
    console.log("ok")

}, false)


// event: SubmitEvent
// isTrusted: true
// bubbles: true
// cancelBubble: false
// cancelable: true
// composed: false
// currentTarget: form.formF
// defaultPrevented: false
// eventPhase: 2
// path: (8) [form.formF, div#conForm, div#conTcon, section.containerF, body, html.desktop.mbr-site-loaded, document, Window]
// returnValue: true
// srcElement: form.formF
// submitter: button.bot
// target: form.formF
// timeStamp: 10230.199999988079
// type: "submit"
// [[Prototype]]: SubmitEvent
// hea: undefined