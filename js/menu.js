var btnSearch = document.getElementById("search-menu");
var divSearch = document.getElementById("search");
var btnNotificacao = document.getElementById("notificacao-menu");
var divNotificacao = document.getElementById("notificacoes");
var btnCriar = document.getElementById("criar-menu");
var areas = document.getElementById("areas");
var iconHome = document.getElementById("home-menu").children[0];
var btnMais = document.querySelectorAll("div.btn-mais")[0];
var dropMais = btnMais.children[1];
var btnsSeguirNotificacao = document.querySelectorAll("button.botao-padrao");
var btnsSeguirSugestoes = document.querySelectorAll("button.btn-seguir");
var criarPublicacao = document.getElementById("criar-publicacao");
var btnsDecisoes = document.querySelectorAll("label.btn-decisao");
var btnConfigAvancadas = document.getElementById("btn-config-avancadas");
var configArea = document.getElementById("config-area");
var legendaPublicacao = document.getElementById("legenda-criar-publicacao");
var contagemCaractere = document.getElementById("contagem-caractere");
var acoesCriarPublicacao = document.getElementById("acoes-criar-publicacao");
var selecione = document.getElementById("selecione");
var compartilhar = document.getElementById("compartilhar");
var criarPublicacaoInput = document.getElementById("criar-publicacao-input");
var btnVoltarCriarPublicacao = document.getElementById("btn-voltar-criar-publicacao");
var btnCompartilharPublicacao = document.getElementById("btn-compartilhar-publicacao");
var btnFecharCriarPublicacao = document.getElementById("fechar-criar-publicacao");

function hiddenDiv(element) {
  element.style.marginLeft = "-50rem";

  btnSearch.style.border = "none";
  btnNotificacao.style.border = "none";

  areas.classList.remove("area-ativa");
}

function validMenu(btnMenu, menuName, btnRemover, menuNameRemover) {
  let icon = btnMenu.children[0];
  let iconRemover = btnRemover.children[0];
  if (icon.classList.contains("icon-" + menuName)) {
    icon.classList.remove("icon-" + menuName);
    icon.classList.add("icon-" + menuName + "-ativo");
    iconHome.classList.remove("icon-home-ativo");
    iconHome.classList.add("icon-home");
    iconRemover.classList.remove("icon-" + menuNameRemover + "-ativo");
    iconRemover.classList.add("icon-" + menuNameRemover);
  } else {
    icon.classList.remove("icon-" + menuName + "-ativo");
    icon.classList.add("icon-" + menuName);
    iconHome.classList.remove("icon-home");
    iconHome.classList.add("icon-home-ativo");
  }
}

function hiddenDropMais() {
  dropMais.style.display = "none";
}

btnSearch.addEventListener("click", () => {
  hiddenDropMais();
  validMenu(btnSearch, "search", btnNotificacao, "coracao");
  if (divNotificacao.style.marginLeft == "0px") {
    hiddenDiv(divNotificacao);
    divSearch.style.marginLeft = "0";
    btnSearch.style.border = ".1rem solid #DBDBDB";
    areas.classList.add("area-ativa");
  } else if (areas.classList.contains("area-ativa")) {
    hiddenDiv(divSearch);
  } else {
    divSearch.style.marginLeft = "0";
    btnSearch.style.border = ".1rem solid #DBDBDB";
    areas.classList.add("area-ativa");
  }
});

btnNotificacao.addEventListener("click", () => {
  hiddenDropMais();
  validMenu(btnNotificacao, "coracao", btnSearch, "search");
  if (divSearch.style.marginLeft == "0px") {
    hiddenDiv(divSearch);
    divNotificacao.style.marginLeft = "0";
    btnNotificacao.style.border = ".1rem solid #DBDBDB";
    areas.classList.add("area-ativa");
  } else if (areas.classList.contains("area-ativa")) {
    hiddenDiv(divNotificacao);
  } else {
    divNotificacao.style.marginLeft = "0";
    btnNotificacao.style.border = ".1rem solid #DBDBDB";
    areas.classList.add("area-ativa");
  }
});

btnMais.children[0].addEventListener("click", () => {
  if (dropMais.style.display === "none" || dropMais.style.display === "") {
    dropMais.style.display = "flex";
  } else {
    dropMais.style.display = "none";
  }
});

document.getElementsByClassName("right")[0].addEventListener("click", function (e) {
  if (e.target != divSearch) {
    hiddenDiv(divSearch);
    iconHome.classList.remove("icon-home");
    iconHome.classList.add("icon-home-ativo");
    btnSearch.children[0].classList.remove("icon-search-ativo");
    btnSearch.children[0].classList.add("icon-search");
  }

  if (e.target != divNotificacao) {
    hiddenDiv(divNotificacao);
    iconHome.classList.remove("icon-home");
    iconHome.classList.add("icon-home-ativo");
    btnNotificacao.children[0].classList.remove("icon-coracao-ativo");
    btnNotificacao.children[0].classList.add("icon-coracao");
  }

  if (e.target != dropMais) {
    dropMais.style.display = "none";
  }
});

btnsSeguirNotificacao.forEach((btnSeguir) => {
  btnSeguir.addEventListener("click", () => {
    if (btnSeguir.innerText === "Seguir") {
      btnSeguir.innerText = "Seguindo";
      btnSeguir.classList.remove("botao-padrao");
      btnSeguir.classList.add("botao-padrao-ativo");
    } else {
      btnSeguir.innerText = "Seguir";
      btnSeguir.classList.add("botao-padrao");
      btnSeguir.classList.remove("botao-padrao-ativo");
    }
  });
});

btnsSeguirSugestoes.forEach((btnSeguir) => {
  btnSeguir.addEventListener("click", () => {
    if (btnSeguir.innerText === "Seguir") {
      btnSeguir.innerText = "Seguindo";
      btnSeguir.classList.remove("btn-seguir");
      btnSeguir.classList.add("btn-seguir-seguindo");
    } else {
      btnSeguir.innerText = "Seguir";
      btnSeguir.classList.add("btn-seguir");
      btnSeguir.classList.remove("btn-seguir-seguindo");
    }
  });
});

btnCriar.addEventListener("click", () => {
  if (criarPublicacao.style.display == "block") {
    criarPublicacao.style.display = "none";
    acoesCriarPublicacao.style.transform = "scale(0)";
    document.getElementsByTagName("body")[0].style.overflow = "";
  } else {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    criarPublicacao.style.display = "block";
    setTimeout(() => {
      acoesCriarPublicacao.style.transform = "scale(1)";
    }, 100);
  }
});

function cancelarCriarPublicacao() {
  criarPublicacao.style.display = "none";
  acoesCriarPublicacao.style.transform = "scale(0)";
  document.getElementsByTagName("body")[0].style.overflow = "";

  voltarCriarPublicacao();
}

btnsDecisoes.forEach((btnDecisao) => {
  btnDecisao.addEventListener("click", () => {
    if (btnDecisao.classList.contains("botao-checkbox")) {
      btnDecisao.classList.remove("botao-checkbox");
      btnDecisao.classList.add("botao-checkbox-ativo");
    } else {
      btnDecisao.classList.add("botao-checkbox");
      btnDecisao.classList.remove("botao-checkbox-ativo");
    }
  });
});

function fecharConfigAvancadas(isBtn) {
  if (isBtn) {
    if (btnConfigAvancadas.children[0].style.fontWeight == "600") {
      btnConfigAvancadas.children[0].style.fontWeight = "400";
      configArea.style.display = "none";
      btnConfigAvancadas.children[1].classList.remove("icon-seta-cima");
      btnConfigAvancadas.children[1].classList.add("icon-seta-baixo");
    } else {
      btnConfigAvancadas.children[0].style.fontWeight = "600";
      configArea.style.display = "block";
      btnConfigAvancadas.children[1].classList.add("icon-seta-cima");
      btnConfigAvancadas.children[1].classList.remove("icon-seta-baixo");
    }
  } else {
    btnConfigAvancadas.children[0].style.fontWeight = "400";
    configArea.style.display = "none";
    btnConfigAvancadas.children[1].classList.remove("icon-seta-cima");
    btnConfigAvancadas.children[1].classList.add("icon-seta-baixo");
  }
}

btnConfigAvancadas.addEventListener("click", () => {
  fecharConfigAvancadas(true);
});

legendaPublicacao.addEventListener("keyup", () => {
  contagemCaractere.children[0].innerText = `${legendaPublicacao.value.length}/${legendaPublicacao.maxLength}`;
});

function compartilharPublicacao() {
  if (criarPublicacaoInput.files.length > 0) {
    selecione.style.display = "none";
    compartilhar.style.display = "flex";
    acoesCriarPublicacao.style.maxWidth = "86.7rem";
    btnVoltarCriarPublicacao.style.display = "block";
    btnCompartilharPublicacao.style.display = "block";

    var divSwiperWrapper = compartilhar.getElementsByClassName("swiper-wrapper")[0];
    for (var i = 0; i < criarPublicacaoInput.files.length; i++) {
      importFileToSwiper(criarPublicacaoInput.files[i], divSwiperWrapper);
    }
  }
}

function importFileToSwiper(file, divSwiperWrapper) {
  var imagem = file;
  var reader = new FileReader();
  if (imagem.size > 0) {
    reader.onload = function () {
      var imgNova = reader.result;

      var swiperSlide = `
            <div class="swiper-slide">
              <div class="image" style="background-image: url(${imgNova})"></div>
            </div>
            `;

      divSwiperWrapper.innerHTML += swiperSlide;
    };

    reader.readAsDataURL(imagem);
  }
}

function voltarCriarPublicacao() {
  selecione.style.display = "flex";
  compartilhar.style.display = "none";
  acoesCriarPublicacao.style.maxWidth = "52.7rem";
  btnVoltarCriarPublicacao.style.display = "none";
  btnCompartilharPublicacao.style.display = "none";
  criarPublicacaoInput.value = "";
  compartilhar.getElementsByClassName("swiper-wrapper")[0].innerHTML = "";

  fecharConfigAvancadas(false);
}

btnVoltarCriarPublicacao.addEventListener("click", () => {
  voltarCriarPublicacao();
});

btnFecharCriarPublicacao.addEventListener("click", () => {
  cancelarCriarPublicacao();
});
