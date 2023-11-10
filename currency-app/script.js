let usd = parseInt(prompt("What ammout of USD would you like to convert?"));

let usdSpan = document.getElementById("usd");
usdSpan.innerText = usd;


let eur = (usd*.94)
let eurSpan = document.getElementById("eur");
eurSpan.innerText = eur;

let gbp = (usd*.82)
let gbpSpan = document.getElementById("gbp");
gbpSpan.innerText = gbp;

let cad = (usd*1.38)
let cadSpan = document.getElementById("cad");
cadSpan.innerText = cad;

let chf = (usd*.90)
let chfSpan = document.getElementById("chf");
chfSpan.innerText = chf;

let jpy = (usd*152.52)
let jpySpan = document.getElementById("jpy");
jpySpan.innerText = jpy;

