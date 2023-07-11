var campos = document.querySelectorAll("[required]")
var nome = document.querySelector("input.email")
let form = document.querySelector("form")
var camp = []




function envio() {
    let veri = document.querySelector("div.alert")
    let hid = veri.getAttribute("hidden")

    veri.innerHTML = "Matrícula enviada!"
    veri.removeAttribute(hid)
}

function validation(event) {
    const field = event.target
    let clas = field.classList
    // console.log(field)
    // console.log(clas)

    function verifiqueErro() {
        let vali = false

        // console.log(field.validity)
        // console.log("------------------------------------------------------------")
        for (key in field.validity) {
            if (key == "valid" && field.validity[key]) {
                break
            } else if (key != "customError" && field.validity[key]) {
                console.log(key)
                vali = true
                // field.setCustomValidity("")
            }
            // console.log(vali)
        }
        return vali
    }

    function tagClas(clas) {
        var tag = ''
        for (let con = 1; con in clas; con++) {
            tag = clas[con]
            // console.log(tag)
            return tag
        }
    }

    function textCamp(tag) {
        if (tag == "name") {
            // console.log(tag)
            return "Esse campo é obrigatório"
        } else if (tag == "email") {
            if (nome.value.indexOf("@") == -1 && nome.value != '') {
                // console.log(tag)
                return "Email inválido"
            }
            // console.log(tag)
            return "O campo de email é obrigatório"
        } else if (tag == "cel") {
            // console.log(tag)
            return "Esse campo é obrigatório"
        }
    }

    const erro = verifiqueErro()

    if (erro) {
        field.setCustomValidity(textCamp(tagClas(clas)))
        // console.log("men")
    } else {
        field.setCustomValidity("")
    }
}


for (let field of campos) {
    // console.log(field)
    // console.log(campos)
    field.addEventListener("invalid", validation)
}


// document.querySelector(".bot").click()
form.addEventListener("submit", (event) => {
    envio()
    console.log("ok")
    // event.preventDefault()
})



