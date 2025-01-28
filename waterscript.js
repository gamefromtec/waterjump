const IP1=10;
const IP2=129;
const IP3=33;
const IP4=45;

const bits = [
    document.getElementById('bit1'),
    document.getElementById('bit2'),
    document.getElementById('bit3'),
    document.getElementById('bit4'),
    document.getElementById('bit5'),
    document.getElementById('bit6'),
    document.getElementById('bit7'),
    document.getElementById('bit8')
];

const ipAddressDiv = document.querySelector(".ipAddress");

function updateIPAddress() {
    let binaryValue = '';
    bits.forEach(bit => {
        binaryValue += bit.value === '1' ? '1' : '0';
    });

    const decimalValue = parseInt(binaryValue, 2);

    ipAddressDiv.innerHTML = `= ${decimalValue}`;
}

bits.forEach(bit => {
    bit.addEventListener('input', updateIPAddress);
});

function getCode (){
    document.querySelector('.getRegulatorCode').style.display = "none";
    document.querySelector('.input-regulator-code').style.display = "inline";
    document.querySelector('#answer').innerHTML = `I fandt den rigtige PC og får koden til at låse computeren op. Koden er: <h1> 7QRS2`
}

function showComputerMap () {
    userIP1 = parseInt(document.querySelector('#firstIP').value)
    userIP2 = parseInt(document.querySelector('#secondIP').value)
    userIP3 = parseInt(document.querySelector('#thirdIP').value)
    userIP4 = parseInt(document.querySelector('#fourthIP').value)
if (IP1 === userIP1 && IP2 === userIP2 && IP3 === userIP3 && IP4 === userIP4)
    {
        document.querySelector('#the-pc-map').style.display= "block"
    } else {
        document.querySelector('#wrong-answer').innerHTML = "IP-adressen er forkert!"
    }
    
}

function showRegulator() {
    if(document.querySelector("#regulatorPW").value === "7QRS2")
    {
    document.querySelector('.input-regulator-code').style.display = "none";   
    document.querySelector('.regulator').style.display = "flex";
    } else {document.querySelector('#the-code').innerHTML = "Koden er forkert!"}
}

function regulate(number) {
    document.querySelector(".button-amount").style.backgroundColor = "white"
    presentPH = parseFloat(document.querySelector("#phValue").innerHTML);
    console.log(presentPH) 
presentPH = presentPH + number
document.querySelector('[role="progressbar"]').style.display = "grid";
showPH(presentPH)
}
function showPH (phNumber) {
    document.querySelector("#phValue").innerHTML = phNumber;
}

function onProgressComplete() {
  document.querySelector('[role="progressbar"]').style.display = "none";
  if(parseFloat(document.querySelector("#phValue").innerHTML) === 1.5)
    {
    document.querySelector(".button-amount").style.backgroundColor = "green"
    setTimeout(delayedFunction, 2000);}

    else{document.querySelector(".button-amount").style.backgroundColor = "red"}

}
document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.querySelector('[role="progressbar"]');
progressBar.addEventListener('animationend', function() {
    if (progressBar.getAttribute('aria-valuenow') == 100) {
      onProgressComplete()
    }
  });
});
function delayedFunction() {
    document.querySelector('.congrats').style.display = "flex";
    document.querySelector('.regulator').style.display = "none";
}

function updateCoords() {
    var img = document.getElementById('pcMap');
    var area = document.querySelector('area');

    var originalCoords = "330,494,430,567";
    var coords = originalCoords.split(',').map(Number);

    var scaleFactor = (window.innerWidth <= 600) ? 1 / 3 : 1;

    var newCoords = coords.map(function(coord) {
        return coord * scaleFactor; 
    });

    area.setAttribute('coords', newCoords.join(','));
}

window.addEventListener('load', updateCoords);
window.addEventListener('resize', updateCoords);
