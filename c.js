//display num
function displaynum(num){
    result.value+=num;
}
//clear
function clearbox(){
    result.value="";
}
// evaluvation
function evaluvate(){
exp=result.value;
output=eval(exp)
result.value=output
}

//deleting datas
function remove(){
    remove1=result.value
    result.value=remove1.slice(0,-1)
    

}