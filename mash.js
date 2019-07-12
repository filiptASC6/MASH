
var home = ["a Mansion", "an Apartment" , "a Shack", "a House", "a Dumpster", "your Parents' Basement"];

var vehicle = ["Lambo", "Tesla", "Horse", "Wagon","SUV", "Submarine", "Cardboard Box"]

const spouseName = ["Karen", "Sophia", "Shaniqua", "Trish", "Oliva", "Emma", "Grace", "Hannah"]

const job = ["Engineer", "Stunt Double", "Doctor", "Librarian", "Soldier"]

function getHome () {
    return (home[Math.floor(Math.random()*home.length)]);
}

function getHomeInput (){
    if (process.argv[2] == " "){
        return getHome();
    }
    else {
        home.push (process.argv[2]); 
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
    if (process.argv[3] == " "){
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




function mash() {
    return "You live in " + homeSeventyFive() + ", and you have " + fiftyFifty() + " kids with the woman you married," + spouse() +"!" + " Together with your family you ride a " + getCar() + "! " + "The neighbors are very jealous of your vehicle.";
}


console.log (mash());


