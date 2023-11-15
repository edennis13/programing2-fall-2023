
function convert(){
	// let usd = parseInt(prompt("What ammout of USD would you like to convert?"));
	let usd = document.getElementById("currency-amount").value;
	let usdSpan = document.getElementById("usd");
	let currency = document.getElementById("currencies").value;
	let convertedValueDiv = document.getElementById("converted-value");
	// usdSpan.innerText = usd;

console.log(currency);

if (currency == "eur"){
	let newAmount = usd*0.94;
	convertedValueDiv.innerText = "€ " + newAmount;

} 
else if(currency == "gbp"){
	let newAmount = usd*0.82;
	convertedValueDiv.innerText ="£ " + newAmount;
}
else if(currency == "cad"){
	let newAmount = usd*0.38;
	convertedValueDiv.innerText ="CA $ " + newAmount;
}
else if(currency == "chf"){
	let newAmount = usd*0.90;
	convertedValueDiv.innerText = "₣ " + newAmount;
}
else if(currency == "jpy"){
	let newAmount = usd*152.52;
	convertedValueDiv.innerText = "¥ " + newAmount;
}
else{
	convertedValueDiv.innerText = "ENTER A VALID CURRENCY";
}

// console.log(newAmount)

	// let eur = (usd*.94)
	// let eurSpan = document.getElementById("eur");
	// eurSpan.innerText = eur;

	// let gbp = (usd*.82)
	// let gbpSpan = document.getElementById("gbp");
	// gbpSpan.innerText = gbp;

	// let cad = (usd*1.38)
	// let cadSpan = document.getElementById("cad");
	// cadSpan.innerText = cad;

	// let chf = (usd*.90)
	// let chfSpan = document.getElementById("chf");
	// chfSpan.innerText = chf;

	// let jpy = (usd*152.52)
	// let jpySpan = document.getElementById("jpy");
	// jpySpan.innerText = jpy;
}
