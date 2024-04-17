"use strict";
// Assignment # 03
// storing a person’s name in a variable
let personName = "Subhan Sheikh";
// printing the person’s name in Lowercase.
console.log(`Lowercase: ${personName.toLowerCase()}`);
// printing the person’s name in Uppercase.
console.log(`Lowercase: ${personName.toUpperCase()}`);
// printing the person’s name in Titlecase.
function titleCase(personName) {
    let name = personName.toLowerCase().split(" ");
    for (let i = 0; i < name.length; i++) {
        name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }
    return name.join(" ");
}
console.log(`Titlecase: ${titleCase("Subhan Sheikh")}`);
