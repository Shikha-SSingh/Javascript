var expression = "";
function hit(val){
    if(val=='√'){
        document.getElementById("txtPane").value=document.getElementById("txtPane").value+val+'(';
        expression+='Math.sqrt(';
    }
    else if(val=='π'){
        document.getElementById("txtPane").value+=val;
        expression+='Math.PI';
;    }
    else{
    document.getElementById("txtPane").value+=val;
    expression+=val;
    }
}

function solve() 
{ 
    let x = expression;
    let y = eval(x);
    document.getElementById("txtPane").value = y ;
    expression = "";
} 
  
function clr() 
{ 
    expression = "";
    document.getElementById("txtPane").value = "" 
    
} 

function lastOneCharClear(){
 
    let originalVal=document.getElementById("txtPane").value;
    let len= originalVal.length;
    let extracted =originalVal.slice(0,len-1);
    document.getElementById("txtPane").value=extracted;
    expression=document.getElementById("txtPane").value;

}

function changeSign(){
    let originalVal=document.getElementById("txtPane").value;
    let len= originalVal.length;
    let extracted =originalVal.slice(0,len-1);
    let lastCharcter = -(originalVal.slice(len-1,len));
    document.getElementById("txtPane").value = extracted+lastCharcter;
    expression=document.getElementById("txtPane").value;
}

