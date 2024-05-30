const display = document.getElementById("display");
function appendToDisplay(input)

{
    
    display.value +=input;
}
function Allclear()
{
    display.value = "";
}
function cal()
{
    try{
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "Error";
    }
  
}
