function go() {
    let month = document.getElementById("month").value;
    let age = document.getElementById("age").value;
    let eyeColor = document.getElementById("eye").value;
    let outputDiv = document.getElementById("output-name");
    const random = [
        "Blaze Rhyme",
        "Cipher King",
        "Nova Verse",
        "Luna Lyric",
        "Titan Flow",
        "Quantum Quill",
        "Zenith Rhythm",
        "Stellar Spit",
        "Eclipse Echo",
        "Vortex Vibe",
        "Nebula Nectar",
        "Orion Rhyme",
        "Galaxy Groove",
        "Pinnacle Poet",
        "Radiant Rap",
        "Celestial Cadence",
        "Astral Anthem",
        "Supernova Serenade",
        "Infinity Ink",
        "Lyric Labyrinth"
    ]
    console.log(month)
    console.log(age)
    console.log(eyeColor)

    if ((month == "jan" || month == "feb" || month == "mar") && (age >= 0) && (age < 30) && (eyeColor == "grn" || eyeColor == "blu")) {
        outputDiv.innerText = "Your Rapper Name is:" + " MicrophoneMischief";
    } else if ((month == "apr" || month == "may" || month == "jun") && (age >= 30) && (age < 50) && (eyeColor == "bla" || eyeColor == "oth")) {
        outputDiv.innerText = "Your Rapper Name is:" + " WittyWordplayWizard";
    } else if ((month == "jul" || month == "aug" || month == "sep") && (age >= 50) && (age < 60) && (eyeColor == "grn" || eyeColor == "bla")) {
        outputDiv.innerText = "Your Rapper Name is:" + " ChuckleFlow";
    } else if ((month == "oct" || month == "nov" || month == "dec") && (age >= 60) && (age < 70) && (eyeColor == "brn")) {
        outputDiv.innerText = "Your Rapper Name is:" + " QuirkMasterFlex";
    } else if ((month == "dec") && (age == 17) && (eyeColor == "blu")) {
        outputDiv.innerText = "Your Rapper Name is:" + " Ethan Dennis";
    } else {
        outputDiv.innerText = "Your Rapper Name is:" + (random[(Math.floor(Math.random() * random.length))]);
    }




}