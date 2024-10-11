function operacion() {
    let n1,n2,tipoope,ope,resul;
     n1 = parseInt(document.getElementById("n1").value);
     n2 = parseInt(document.getElementById("n2").value);
     tipoope = document.getElementById("tipo").value;
     ope;

    if(isNumber(n1) && isNumber(n2))
    {
        switch (tipoope) {
            case "suma": 
                ope = n1 + n2; 
                simbolo = "+"; 
                break;
            case "resta": 
                ope = n1 - n2; 
                simbolo = "-"; 
                break;
            case "multiplicacion": 
                ope = n1 * n2; 
                simbolo = "*"; 
                break;
            case "division": 
                ope = n1 / n2; 
                simbolo = "/"; 
                break;
            default: 
                ope = "Operación no válida"; 
                simbolo = "";
        }

        resul=document.getElementById("resultado").innerHTML=`<h2>${n1} ${simbolo} ${n2} = ${ope}</h2>`;
    }

    else
   alert("Ingrese solo numeros")
   
}

function isNumber (n)
{
 return !isNaN(parseInt(n) && isFinite(n))
}