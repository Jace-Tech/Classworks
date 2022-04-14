// Elements
const englishInput = document.querySelector("[name=english]")
const mathsInput = document.querySelector("[name=maths]")
const physicsInput = document.querySelector("[name=physics]")
const chemistryInput = document.querySelector("[name=chemistry]")

const btn = document.querySelector("button")
const tableContainer = document.querySelector(".table-container")

// English Score screen
const englishGradeScreen = document.querySelector("#english-grade")
const englishRemarkScreen = document.querySelector("#english-remark")

// Maths Score screen
const mathsGradeScreen = document.querySelector("#maths-grade")
const mathsRemarkScreen = document.querySelector("#maths-remark")

// Physics Score screen
const physicsGradeScreen = document.querySelector("#physics-grade")
const physicsRemarkScreen = document.querySelector("#physics-remark")

// Chemistry Score screen
const chemistryGradeScreen = document.querySelector("#chemistry-grade")
const chemistryRemarkScreen = document.querySelector("#chemistry-remark")


function getGrade (score) {
    let grade = ""

    if(score >= 70){
        grade = "A"
    }
    else if(score >= 60 && score < 70){
        grade = "B"
    }
    else if(score >= 50 && score < 60){
        grade = "C"
    }
    else if(score >= 45 && score < 50){
        grade = "D"
    }
    else if(score >= 30 && score < 45){
        grade = "E"
    }
    else {
        grade = "F"
    }

    return grade
}

function getRemark (grade) {
    let remark = ""

    switch (grade) {
        case "A":
            remark = "Distinction"
            break

        case "B":
            remark = "Very Good"
            break

        case "C":
            remark = "Credit"
            break

        case "D":
            remark = "Pass"
            break

        case "E":
            remark = "Fair"
            break

        default:
            remark = "Fail"
            break

    }

    return remark
}


btn.addEventListener("click", function(e) {
    e.preventDefault()

    // Get the input values
    const englishScore = parseInt(englishInput.value),
        mathsScore = parseInt(mathsInput.value),
        physicsScore = parseInt(physicsInput.value),
        chemistryScore = parseInt(chemistryInput.value)


    // Check For grade
    let englishGrade = getGrade(englishScore),
        mathsGrade = getGrade(mathsScore),
        physicsGrade = getGrade(physicsScore),
        chemistryGrade = getGrade(chemistryScore)

    // Check for remarks
    let englishRemarks = getRemark(englishGrade),
        mathsRemarks = getRemark(mathsGrade),
        chemistryRemarks = getRemark(chemistryGrade),
        physicsRemarks = getRemark(physicsGrade)

    // Output on the screen
    tableContainer.classList.add("show")

    // English
    englishGradeScreen.innerHTML = englishGrade
    englishRemarkScreen.innerHTML = englishRemarks

    // Maths
    mathsGradeScreen.innerHTML = mathsGrade
    mathsRemarkScreen.innerHTML = mathsRemarks

    // Physics
    physicsGradeScreen.innerHTML = physicsGrade
    physicsRemarkScreen.innerHTML = physicsRemarks

    // Chemistry
    chemistryGradeScreen.innerHTML = chemistryGrade
    chemistryRemarkScreen.innerHTML = chemistryRemarks
})
