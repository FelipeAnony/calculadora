var num;

function setDate () {
    const dataN = new Date;
    const digitoData = document.querySelector('.dt');
    const time = document.querySelector('.time');
    digitoData.innerHTML = dataN.toLocaleDateString('pt-BR');
    time.innerHTML = dataN.toLocaleTimeString('pt-BR');

}

function atualizaData () {
    setDate();
    setInterval(() => {
        const dataN = new Date;
        const digitoData = document.querySelector('.dt');
        const time = document.querySelector('.time');
        digitoData.innerHTML = dataN.toLocaleDateString('pt-BR');
        time.innerHTML = dataN.toLocaleTimeString('pt-BR');
        
    }, 1000);
}

atualizaData()


function insert(num) 
{
    
    var numero = document.querySelector('.digito0').innerHTML;
    document.querySelector('.digito0').innerHTML = numero + num;
   
}
function clean() 
{
    document.querySelector('.digito0').innerHTML = "";

}

function voltar() 
{
    var merda = document.querySelector('.digito0').innerHTML;
    document.querySelector('.digito0').innerHTML = merda.substring(0, merda.length -1);
   
}

function calcular()
{
    let resultado = document.querySelector('.digito0').innerHTML;
    if(resultado)
        {
        let result = eval(resultado);
        document.querySelector('.digito0').innerHTML = result;
        let history = document.querySelector('.historico');
        history.innerHTML = result;
    }

    else
         {
        document.querySelector('.digito0').innerHTML = "0"
    }
    
   

}

function fazerRaiz() 
{
    var numero00 = document.querySelector(".digito0").innerHTML;
    if (numero00){
        var resultado00 = Math.sqrt(numero00);
        document.querySelector(".digito0").innerHTML = resultado00;
        document.querySelector('.historico').innerHTML = resultado00;
    }

}

document.addEventListener("keydown", insert2);

function insert2() {
    let tecla = event.keyCode;
    numero = document.querySelector(".digito0").innerHTML;
    if (tecla==49) {
        document.querySelector(".digito0").innerHTML = numero + "1";
    }
    if (tecla==50) {
        document.querySelector(".digito0").innerHTML = numero + "2";
    }
    if (tecla==51) {
        document.querySelector(".digito0").innerHTML = numero + "3";
    }
    if (tecla==52) {
        document.querySelector(".digito0").innerHTML = numero + "4";
    }
    if (tecla==53) {
        document.querySelector(".digito0").innerHTML = numero + "5";
    }
    if (tecla==54) {
        document.querySelector(".digito0").innerHTML = numero + "6";
    }
    if (tecla==55) {
        document.querySelector(".digito0").innerHTML = numero + "7";
    }
    if (tecla==56) {
        document.querySelector(".digito0").innerHTML = numero + "8";
    }
    if (tecla==57) {
        document.querySelector(".digito0").innerHTML = numero + "9";
    }
    if (tecla==48) {
        document.querySelector(".digito0").innerHTML = numero + "0";
    }
    if (tecla == 8) {
        document.querySelector('.digito0').innerHTML = numero.substring(0, numero.length -1);
    }
    if (tecla==187) {
        document.querySelector(".digito0").innerHTML = numero + "+";
    }
    if (tecla==88) {
        document.querySelector(".digito0").innerHTML = numero + "*";
    }
    if (tecla==186) {
        document.querySelector(".digito0").innerHTML = numero + "**";
    }
    if (tecla==220) {
        document.querySelector(".digito0").innerHTML = numero + "/";
    }
    if (tecla==189) {
        document.querySelector(".digito0").innerHTML = numero + "-";
    }
    if (tecla==13) {
        calcular();
    }
    if (tecla==72) {
        let history = document.querySelector('.historico');
        numero = document.querySelector(".digito0").innerHTML;
        h = history.innerHTML;
        document.querySelector('.digito0').innerHTML = numero + h;
    }

    
}

function insert3() {
    let history = document.querySelector('.historico');
    numero = document.querySelector(".digito0").innerHTML;
    h = history.innerHTML;
    document.querySelector('.digito0').innerHTML = numero + h;
}
