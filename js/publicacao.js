// CURTIDAS NAS FOTOS
var btnsCurtirPublicacoes = document.querySelectorAll("button.btn-curtir-publicacao");
var likesFotos = document.querySelectorAll("div.conteudo-fotos");

likesFotos.forEach((botaoSeguir, index, fullarray) => {
  botaoSeguir.addEventListener("dblclick", () => {
    let btnLike = document.getElementsByClassName("btn-like")[index];
    btnLike.classList.add("heart-like");

    let iconCurtir = btnsCurtirPublicacoes[index].children[0];
    iconCurtir.classList.remove("icon-curtir");
    iconCurtir.classList.add("icon-curtir-ativo");

    setTimeout(() => {
      btnLike.classList.remove("heart-like");
    }, 900);
  });

  let doisCliques = 0;
  botaoSeguir.addEventListener("touchstart", (e) => {
    e.preventDefault();
    doisCliques++;

    setTimeout(() => {
      doisCliques = 0;
    }, 500);

    if (doisCliques === 2) {
      let btnLike = document.getElementsByClassName("btn-like")[index];
      btnLike.classList.add("heart-like");

      let iconCurtir = btnsCurtirPublicacoes[index].children[0];
      iconCurtir.classList.remove("icon-curtir");
      iconCurtir.classList.add("icon-curtir-ativo");

      setTimeout(() => {
        btnLike.classList.remove("heart-like");
      }, 900);
    }
  });
});

btnsCurtirPublicacoes.forEach((botaoCurtir, index, fallarray) => {
  botaoCurtir.addEventListener("click", () => {
    let iconCurtir = btnsCurtirPublicacoes[index].children[0];

    if (iconCurtir.classList.contains("icon-curtir")) {
      iconCurtir.classList.remove("icon-curtir");
      iconCurtir.classList.add("icon-curtir-ativo");
    } else {
      iconCurtir.classList.add("icon-curtir");
      iconCurtir.classList.remove("icon-curtir-ativo");
    }
  });
});

// PUBLICAÇÃO DIALOG
var divPublicacaoDialog = document.getElementById("publicacao-dialog");
var fecharPublicacaoDialog = document.getElementById("fechar-publicacao-dialog");
var btnCurtirDetalhe = document.getElementById("btn-curtir-detalhe");
var btnCompartilharDetalhe = document.getElementById("btn-compartilhar-detalhe");
var btnSalvarDetalhe = document.getElementById("btn-salvar-detalhe");
var btnComentarDetalhe = document.getElementById("btn-comentar-detalhe");
var inputComentarioDetalhe = document.getElementById("input-comentario-detalhe");
var likeFotoDetalhe = document.querySelectorAll("div.publicacao-media");
var btnsVerComentarios = document.querySelectorAll("button.btn-ver-comentarios");
var btnsVerRespostas = document.querySelectorAll("div.comentarios-respostas");
var btnsComentarPublicacoes = document.querySelectorAll("button.btn-comentar-publicacao");
var btnsCurtirComentarios = document.querySelectorAll("button.btn-curtir-comentario");

likeFotoDetalhe.forEach((botaoCurtir, index, fallarray) => {
  botaoCurtir.addEventListener("dblclick", () => {
    let icon = btnCurtirDetalhe.children[0];
    icon.classList.add("icon-curtir-ativo");
    icon.classList.remove("icon-curtir");
    let btnLike = document.getElementById("btn-like");
    btnLike.classList.add("heart-like");

    setTimeout(() => {
      btnLike.classList.remove("heart-like");
    }, 900);
  });
});

btnCurtirDetalhe.addEventListener("click", () => {
  let icon = btnCurtirDetalhe.children[0];
  if (icon.classList.contains("icon-curtir-ativo")) {
    icon.classList.add("icon-curtir");
    icon.classList.remove("icon-curtir-ativo");
  } else {
    icon.classList.add("icon-curtir-ativo");
    icon.classList.remove("icon-curtir");
  }
});

btnCompartilharDetalhe.addEventListener("click", () => {
  buscarPerfis();
  compartilhamentoPagina.style.display = "block";
  setTimeout(() => {
    acoesCompartilhamento.style.transform = "scale(1)";
  }, 100);
});

btnSalvarDetalhe.addEventListener("click", () => {
  let icon = btnSalvarDetalhe.children[0];
  if (icon.classList.contains("icon-salvar-ativo")) {
    icon.classList.add("icon-salvar");
    icon.classList.remove("icon-salvar-ativo");
  } else {
    icon.classList.add("icon-salvar-ativo");
    icon.classList.remove("icon-salvar");
  }
});

btnComentarDetalhe.addEventListener("click", () => {
  inputComentarioDetalhe.focus();
});

btnVerComentario(btnsComentarPublicacoes);

btnVerComentario(btnsVerComentarios);

btnsVerRespostas.forEach((btnVerResposta, index, fallarray) => {
  btnVerResposta.children[0].addEventListener("click", () => {
    if (btnVerResposta.children[1].style.display === "none" || btnVerResposta.children[1].style.display === "") {
      btnVerResposta.children[0].innerText = "Ocultar respostas";
      btnVerResposta.children[1].style.display = "flex";
    } else {
      btnVerResposta.children[0].innerText = "Ver respostas";
      btnVerResposta.children[1].style.display = "none";
    }
  });
});

btnsCurtirComentarios.forEach((btnCurtidaComentario) => {
  btnCurtidaComentario.addEventListener("click", () => {
    var iconBtnCurtida = btnCurtidaComentario.children[0];
    if (iconBtnCurtida.classList.contains("icon-coracao-comentario")) {
      iconBtnCurtida.classList.add("icon-coracao-comentario-ativo");
      iconBtnCurtida.classList.remove("icon-coracao-comentario");
    } else {
      iconBtnCurtida.classList.remove("icon-coracao-comentario-ativo");
      iconBtnCurtida.classList.add("icon-coracao-comentario");
    }
  });
});

function btnVerComentario(list) {
  list.forEach((btnVer, index, fallarray) => {
    btnVer.addEventListener("click", () => {
      mostrarPublicacaoDialog();
    });
  });
}

function sumirPublicacaoDialog() {
  divPublicacaoDialog.style.display = "none";
  document.getElementsByTagName("body")[0].style.overflow = "";
}

function mostrarPublicacaoDialog() {
  divPublicacaoDialog.style.display = "block";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

fecharPublicacaoDialog.addEventListener("click", () => {
  sumirPublicacaoDialog();
});

// SALVAR FOTOS
var saveFotos = document.querySelectorAll("button.btn-salvar-publicacao");

saveFotos.forEach((btnSalvar, index, fallarray) => {
  btnSalvar.addEventListener("click", () => {
    let iconSalvar = btnSalvar.children[0];
    if (iconSalvar.classList.contains("icon-salvar")) {
      iconSalvar.classList.add("icon-salvar-ativo");
      iconSalvar.classList.remove("icon-salvar");
    } else {
      iconSalvar.classList.remove("icon-salvar-ativo");
      iconSalvar.classList.add("icon-salvar");
    }
  });
});

// BOTÃO DE TRES PONTOS NA PUBLICACAO
var btns3PontosPublicacacoes = document.querySelectorAll("button.btn-3points");
var tresPontosPagina = document.getElementById("tres-pontos-pagina");
var acoesPublicacao = tresPontosPagina.getElementsByClassName("acoes-publicacao")[0];

btns3PontosPublicacacoes.forEach((btn3Points) => {
  btn3Points.addEventListener("click", () => {
    if (tresPontosPagina.style.display === "block") {
      tresPontosPagina.style.display = "none";
      acoesPublicacao.style.transform = "scale(0)";
      document.getElementsByTagName("body")[0].style.overflow = "";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      tresPontosPagina.style.display = "block";
      setTimeout(() => {
        acoesPublicacao.style.transform = "scale(1)";
      }, 100);
    }
  });
});

function cancelarBtn3PontosPublicacoes() {
  tresPontosPagina.style.display = "none";
  acoesPublicacao.style.transform = "scale(0)";
  document.getElementsByTagName("body")[0].style.overflow = "";
}

// COMPARTILHAMENTO PUBLICACOES
var btnsCompartilharPublicacaoes = document.querySelectorAll("button.btn-compartilhar-publicacao");
var compartilhamentoPagina = document.getElementById("compartilhamento-pagina");
var acoesCompartilhamento = document.getElementsByClassName("acoes-compartilhamento")[0];
var divPerfisParaSelecao = document.getElementsByClassName("perfis-para-selecao")[0];
var divPerfisSelecionados = document.getElementsByClassName("perfis-selecionados")[0];
var mensagemCompartilhada = document.getElementById("mensagem-compartilhar");
var btnEnviarMensagem = document.getElementById("btn-enviar-mensagem");
var perfisSelecionados = divPerfisSelecionados.children;
var pesquisarCompartilhar = document.getElementById("pesquisar-compartilhar");

function buscarPerfis() {
  var perfis = [
    {
      id: 1,
      foto: "./img/storys/pessoa1.jpg",
      username: "julia",
      nome: "Julia G.",
    },
    {
      id: 2,
      foto: "./img/storys/pessoa2.jpg",
      username: "marcos",
      nome: "Marcos H.",
    },
    {
      id: 3,
      foto: "./img/storys/pessoa3.jpg",
      username: "renata",
      nome: "Renata I.",
    },
    {
      id: 4,
      foto: "./img/storys/pessoa4.jpg",
      username: "jonatan",
      nome: "Jonatan P.",
    },
    {
      id: 5,
      foto: "./img/storys/pessoa5.jpg",
      username: "maria",
      nome: "Maria O.",
    },
    {
      id: 6,
      foto: "./img/storys/pessoa6.jpg",
      username: "joao",
      nome: "João S.",
    },
  ];

  var perfisDivs = "";
  perfis.forEach((perfil) => {
    perfisDivs += `<!-- perfil do ${perfil.username} -->
          <div class="perfil-para-selecionar">
            <div class="foto-info">
              <button class="foto">
                <img src="${perfil.foto}" alt="" />
              </button>
              <div class="info">
                <h4>${perfil.nome}</h4>
                <p>${perfil.username}</p>
              </div>
            </div>
            <button type="button" class="btn-seleciona-perfil" id="btn-selecionar-perfil-${perfil.id}">
              <i class="icon-seleciona-perfil"></i>
            </button>
          </div>`;
  });

  divPerfisParaSelecao.innerHTML += perfisDivs;
  divPerfisParaSelecao.querySelectorAll("button.btn-seleciona-perfil").forEach((btnSeleciona) => {
    btnSeleciona.addEventListener("click", () => {
      var icon = btnSeleciona.children[0];
      var idPerfil = btnSeleciona.id.replace("btn-selecionar-perfil-", "");
      var user = perfis.find((p) => p.id == idPerfil);

      if (icon.classList.contains("icon-seleciona-perfil")) {
        icon.classList.remove("icon-seleciona-perfil");
        icon.classList.add("icon-seleciona-perfil-ativo");

        var perfilEnviar = "";
        perfilEnviar += ` <!-- perfil enviar -->
        <div class="perfil-para-enviar" id="perfil-para-enviar-${user.id}">
          <h4>${user.nome}</h4>
          <button type="button" onclick="removerPerfilSelecionado('perfil-para-enviar-${user.id}', '${btnSeleciona.id}')">
            <i class="icon-fechar-perfil"></i>
          </button>
        </div>`;

        divPerfisSelecionados.innerHTML += perfilEnviar;
        mensagemCompartilhada.style.marginBottom = "0rem";
        btnEnviarMensagem.removeAttribute("disabled");
      } else {
        removerPerfilSelecionado(`perfil-para-enviar-${user.id}`, btnSeleciona.id);
      }

      if (perfisSelecionados.length > 1) {
        btnEnviarMensagem.innerText = "Enviar separadamente";
      } else {
        btnEnviarMensagem.innerText = "Enviar";
      }
    });
  });
}

btnsCompartilharPublicacaoes.forEach((btnCompartilhar) => {
  btnCompartilhar.addEventListener("click", () => {
    if (compartilhamentoPagina.style.display === "block") {
      compartilhamentoPagina.style.display = "none";
      acoesCompartilhamento.style.transform = "scale(0)";
      document.getElementsByTagName("body")[0].style.overflow = "";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      compartilhamentoPagina.style.display = "block";
      setTimeout(() => {
        acoesCompartilhamento.style.transform = "scale(1)";
      }, 100);

      buscarPerfis();
    }
  });
});

function cancelarCompartilhamento() {
  compartilhamentoPagina.style.display = "none";
  acoesCompartilhamento.style.transform = "scale(0)";
  document.getElementsByTagName("body")[0].style.overflow = "";

  divPerfisSelecionados.innerHTML = "";
  divPerfisParaSelecao.innerHTML = "";
  pesquisarCompartilhar.value = "";
  mensagemCompartilhada.children[0].value = "";
  verificaSeExistePerfisSelecionados();
}

function removerPerfilSelecionado(idPerfilParaEnviar, idBtnSeleciona) {
  var perfilParaEnviar = document.getElementById(idPerfilParaEnviar);
  divPerfisSelecionados.removeChild(perfilParaEnviar);

  var btnSeleciona = document.getElementById(idBtnSeleciona);
  var icon = btnSeleciona.children[0];
  icon.classList.add("icon-seleciona-perfil");
  icon.classList.remove("icon-seleciona-perfil-ativo");

  verificaSeExistePerfisSelecionados();
}

function verificaSeExistePerfisSelecionados() {
  if (perfisSelecionados.length <= 0) {
    mensagemCompartilhada.style.marginBottom = "-3.2rem";
    btnEnviarMensagem.setAttribute("disabled", true);
  }

  if (perfisSelecionados.length <= 1) {
    btnEnviarMensagem.innerText = "Enviar";
  }
}
