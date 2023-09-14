var numberOfAnimalButtons = document.querySelectorAll(".animal").length;

for (var i = 0; i <numberOfAnimalButtons; i++) {
    
    document.querySelectorAll(".animal")[i].addEventListener("click", function() {
        
        var buttons = this.innerText;

        switch (buttons) {
            case "cat":
                var cat = new Audio ("cat.mp3")
                cat.play();
                break;
            case "puppy":
                var puppy = new Audio ("puppy.mp3")
                puppy.play();
                break;
            case "bee":
                var bee = new Audio ("bee.mp3")
                bee.play();
                break;
            case "monkey":
                var monkey = new Audio ("monkey.mp3")
                monkey.play();
                break;
            default:
                break;
        }

});
}

// function teacher (name, age, years_experience, subject, grade, hobbies) {
//     this.name = name;
//     this.age = age;
//     this.years_experience = years_experience;
//     this.subject = subject;
//     this.grade = grade;
//     this.hobbies = hobbies;
// }

// const teacher1 = new teacher ("Ben", 21, "5 years", "math", ["1, 2, 3, 4, 5, 6"], ["reading, writting, drawing, teaching"]);
// console.log (teacher1.name);
// console.log (teacher1.age);
// console.log (teacher1.years_experience);
// console.log (teacher1.subject);
// console.log (teacher1.grade);
// console.log (teacher1.hobbies);