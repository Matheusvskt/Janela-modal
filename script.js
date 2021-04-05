window.onload = function (){ //
    const modal = document.querySelector(".modal");//selecionando objeto modal, correspondente ao div
    const buttonClose = modal.querySelector(".buttonClose");// selecionando botão fechar dentro do conteúdo do modal

    buttonClose.addEventListener("click", function(){// é adicionado uma função que ao clicar no botão fechar
        modal.style.display = 'none';// altera a propriedade display para none novamente
    });

    const buttonOpenModal = document.getElementById("btnOpenModal");// selecionando o botão abrir modal 
    buttonOpenModal.addEventListener("click", function(){// ao clicar no botão abrir modal é adicionado uma função
        modal.style.display =  'block';// mudando o display de none para block
    });

}