function print(){
for(i = 1; i<51; i++){
        console.log(i);
        if(i%2==0){
            console.log("even");
        }
    }
}

print();

const numArr = new Array();
numArr.push(2,3,4,5,6,7,8);

function filterNum(numArr){
    numArr.filter(p => p%2==0).forEach(element => {
        console.log(element);});
}

filterNum(numArr);

const skills = new Array();
skills.push("JavaScript" , "HTML", "CSS");

const student = {name: "Talib", age: "21", skills: skills};

console.log(student.skills);
console.log(student.age);
console.log(student.name);

skills.push("JAVA");

console.log(student.skills);

function keyValues(object){
    for(i = 0; i<Object.keys(object).length; i++){
        console.log(Object.keys(object)[i] + " : " + Object.values(object)[i]);

    }
}

keyValues(student);


