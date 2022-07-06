function verificar() {
var altura = (document.getElementById('altura').value)
var peso = (document.getElementById ('peso').value)
var idade= (document.getElementById ('idade').value)
var res = document.getElementById ('res')


var tmbhomemS = (1.2*66+(13.7*peso)+(5*altura)-(6.8*idade))

if (altura == '') {
    res.innerHTML =('Faltam Dados')
} else {
    var fsex= document.getElementsByName ('radsex')
    var fatorativ = document.getElementsByName ('fatorat')
} if (fsex[0].checked && fatorativ[0].checked) {
    res.innerHTML = (`A sua taxa de metabolismo basal é ${tmbhomemS.toFixed(2)} calorias `)
}

var tmbhomemLA = (1.3*66+(13.7*peso)+(5*altura)-(6.8*idade))
if (altura == '') {
    res.innerHTML =('Faltam Dados')
} else {
    var fsex= document.getElementsByName ('radsex')
    var fatorativ = document.getElementsByName ('fatorat')
} if (fsex[0].checked && fatorativ[1].checked) {
    res.innerHTML = (`A sua taxa de metabolismo basal é ${tmbhomemLA.toFixed(2)} calorias `)
}

var tmbhomemMA = (1.55*66+(13.7*peso)+(5*altura)-(6.8*idade))
if (altura == '') {
    res.innerHTML =('Faltam Dados')
} else {
    var fsex= document.getElementsByName ('radsex')
    var fatorativ = document.getElementsByName ('fatorat')
} if (fsex[0].checked && fatorativ[2].checked) {
    res.innerHTML = (`A sua taxa de metabolismo basal é ${tmbhomemMA.toFixed(2)} calorias `)
}

var tmbhomemAA = (1.72*66+(13.7*peso)+(5*altura)-(6.8*idade))
if (altura == '') {
    res.innerHTML =('Faltam Dados')
} else {
    var fsex= document.getElementsByName ('radsex')
    var fatorativ = document.getElementsByName ('fatorat')
} if (fsex[0].checked && fatorativ[3].checked) {
    res.innerHTML = (`A sua taxa de metabolismo basal é ${tmbhomemAA.toFixed(2)} calorias `)
}

var tmbhomemEA = (1.9*66+(13.7*peso)+(5*altura)-(6.8*idade))
if (altura == '') {
    res.innerHTML =('Faltam Dados')
} else {
    var fsex= document.getElementsByName ('radsex')
    var fatorativ = document.getElementsByName ('fatorat')
} if (fsex[0].checked && fatorativ[4].checked) {
    res.innerHTML = (`A sua taxa de metabolismo basal é ${tmbhomemEA.toFixed(2)} calorias `)
}




 





}