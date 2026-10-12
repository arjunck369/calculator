let display=document.getElementById('output')

const displayData=(data)=>{

    display.value+=data
}

const removeLastItem=()=>{
    display.value=display.value.slice(0,-1)
}

const allClear=()=>{
    display.value=""
}
const result=()=>{
    try{
        console.log("inside try");
        display.value=eval(display.value)
        
    }
    catch{
        console.log("inside catch");
        
        display.value="Invalid Expression"
    }
    finally{
        console.log("action complete");
        
    }
}

