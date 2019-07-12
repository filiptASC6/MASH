
var home = ["a Mansion", "an Apartment" , "a Shack", "a House", "a Dumpster", "your Parents' Basement"];

var vehicle = ["in a Lambo", "in a Tesla", "on a Horse", "in a Wagon","in a SUV", "inside a Submarine", "in a Cardboard Box"]

const spouseName = ["Karen", "Sophia", "Shaniqua", "Trish", "Oliva", "Emma", "Grace", "Hannah"]

const jobs = ["Engineer", "Stunt Double", "Doctor", "Librarian", "Soldier", "Teacher", "Disney World Employee", "Janitor"]

function getHome () {
    return (home[Math.floor(Math.random()*home.length)]);
}

function getHomeInput (){
    if (process.argv[2] != null){
        home.push (process.argv[2]); 
        return getHome();
    }
    else {
        return getHome();
    }
}

function homeSeventyFive (){
    if (Math.random() >= 0.50){
        return (getHome());
    }
    else {
        return (getHomeInput());
    }
    
}
    
function getChildrenCount (){
    return (Math.floor(Math.random()*100));
}

function childrenCountInput (){
    if (process.argv[3] == null){
        return getChildrenCount();
    }
    else {
        return process.argv[3]; 
    }
}

function fiftyFifty (){
    if (Math.random() >= 0.50){
        return (getChildrenCount());
    }
    else {
        return (childrenCountInput());
    }
    
}




function getCar (){
        home.push(process.argv[4])
        return ((vehicle[Math.floor(Math.random()*vehicle.length)]));
    }
  


function spouse(){
    return ((spouseName[Math.floor(Math.random()*spouseName.length)]));
}

function job(){
    return ((jobs[Math.floor(Math.random()*jobs.length)]));
}



function mash() {
    return "You live in " + homeSeventyFive() + ", and you have " + fiftyFifty() + " kids with the woman you married, " + spouse() +"!" + " Together with your family you ride " + getCar() + "! ";
}

function mash2(){
    return "The neighbors are very jealous of your vehicle." +" "+ "You work as a " + job() + ". " + "It took forever to get that job, but you finally made it, the hard work paid off."
}

console.log (mash());
console.log (mash2());

