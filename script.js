function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let mins = data.getMinutes();


    msg.innerHTML = `Agora são ${hora} horas e ${mins} minutos.`
    if(hora >= 8 && hora < 12){
        //Bom dia!
        img.src = '/img/manha.jpg';
        document.body.style.background = "#e2cd9f"
    }else if(hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = '/img/tarde.jpg';
        document.body.style.background = "#b9846f"
    }else{
        //Boa noite!
        img.src = '/img/noite.jpg';
        document.body.style.background = "#515154"
    }
}