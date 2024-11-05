const IP1=10;
const IP2=129;
const IP3=33;
const IP4=45;

function getCode (){
    userIP1 = parseInt(document.querySelector('#firstIP').value)
    userIP2 = parseInt(document.querySelector('#secondIP').value)
    userIP3 = parseInt(document.querySelector('#thirdIP').value)
    userIP4 = parseInt(document.querySelector('#fourthIP').value)
if (IP1 === userIP1 && IP2 === userIP2 && IP3 === userIP3 && IP4 === userIP4)
    {
        document.querySelector('#answer').innerHTML = "I fandt den rigtige PC og får koden. Koden er: 7QRS2"
    } else {
        document.querySelector('#answer').innerHTML = "IP-adressen er forkert!"
    }

}

