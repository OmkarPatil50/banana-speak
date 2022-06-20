var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var txtOutput = document.querySelector("#txt-output")
var url = 	"https://api.funtranslations.com/translate/minion.json"

function readURl(text)
{   var text = txtInput.value ;
    return url + "?" + "text=" + text;
}


function errorHandler(error)
{
 console.log("error occured", error)
 alert("Something wrong with server. Please try again after some time!")
} 

function clickEventHandler()
{
    fetch(readURl(txtInput))
    .then(response => response.json())
    .then(json => {
        var translatedOutput = json.contents.translated;
        txtOutput.innerText = translatedOutput;
    })
    .catch(errorHandler)

};


   



btnTranslate.addEventListener("click", clickEventHandler)
