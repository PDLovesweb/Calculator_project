
function input(num){
    document.getElementById("inputtext").value += num;
}
function calculate(){
    try{
        result = document.getElementById("inputtext").value;
        document.getElementById("inputtext").value = eval(result);
    }
    catch(err){
        alert("Invalid input! Enter in valid format Eg - 9*8 | 4+3*2/9 | 5+4 etc..")
    }   
}
function clearall(){
    document.getElementById("inputtext").value=" ";
}
function del(){
    document.getElementById("inputtext").value = 
    document.getElementById("inputtext").value.slice(0, -2);
}
