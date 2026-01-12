const display=document.getElementById("display");
const result=document.getElementById("result");
function appendtodisplay(inpt){
    display.value+=inpt;
};
function calculate(){
    try{
        result.innerHTML=eval(display.value);
    }
    catch(err){
        resuly.innerHTML="Error"
    }
};
function cleardisplay(){
    display.value="";
    result.innerHTML="0";
};
function deletedisplay(){
    display.value=display.value.slice(0,-1);
}