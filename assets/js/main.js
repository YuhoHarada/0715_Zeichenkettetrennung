let kette = document.getElementById("zeichenkette")
let wort = document.getElementById("stichwort")
let index 
let resultVor = document.getElementById("resultVor")
let resultHinter = document.getElementById("resultHinter")
let davor = document.getElementById("davor")

function trennen() {
    index = kette.value.indexOf(wort.value)
    if (index == -1) {
        resultVor.innerHTML = "*** Das Zeichen könnte leider nicht gefunden werden ***"
        resultHinter.innerHTML = ""
        return false
    }
    if (davor.checked == true) {
        resultVor.innerHTML = kette.value.slice(0, index)
        resultHinter.innerHTML = kette.value.slice(index)
    } else {
        resultVor.innerHTML = kette.value.slice(0, index + wort.value.length)
        resultHinter.innerHTML = kette.value.slice(index + wort.value.length)
    }
}