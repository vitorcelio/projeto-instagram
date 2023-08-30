var storys = [
  {
    id: 1,
    foto: "./img/storys/pessoa1.jpg",
    username: "julia",
    storyList: [
      {
        imagem: "./img/storys/pessoa1.1.jpg",
        hora: "10 h",
        visto: false,
        proximos: false,
      },
      {
        imagem: "./img/storys/pessoa1.2.jpg",
        hora: "5 h",
        visto: false,
        proximos: false,
      },
    ],
  },
  {
    id: 2,
    foto: "./img/storys/pessoa3.jpg",
    username: "marcos",
    storyList: [
      {
        imagem: "./img/storys/pessoa3.1.jpg",
        hora: "12 h",
        visto: false,
        proximos: false,
      },
      {
        imagem: "./img/storys/pessoa3.2.jpg",
        hora: "4 h",
        visto: false,
        proximos: true,
      },
    ],
  },
  {
    id: 3,
    foto: "./img/storys/pessoa2.jpg",
    username: "renata",
    storyList: [
      {
        imagem: "./img/storys/pessoa2.1.jpg",
        hora: "17 h",
        visto: false,
        proximos: false,
      },
      {
        imagem: "./img/storys/pessoa2.2.jpg",
        hora: "1 h",
        visto: false,
        proximos: false,
      },
      {
        imagem: "./img/storys/pessoa2.3.jpg",
        hora: "30 min",
        visto: false,
        proximos: true,
      },
    ],
  },
  {
    id: 4,
    foto: "./img/storys/pessoa4.jpg",
    username: "jonatan",
    storyList: [
      {
        imagem: "./img/storys/pessoa4.1.jpg",
        hora: "19 h",
        visto: false,
        proximos: true,
      },
      {
        imagem: "./img/storys/pessoa4.2.jpg",
        hora: "8 h",
        visto: false,
        proximos: true,
      },
    ],
  },
  {
    id: 5,
    foto: "./img/storys/pessoa5.jpg",
    username: "maria",
    storyList: [
      {
        imagem: "./img/storys/pessoa5.1.jpg",
        hora: "2 h",
        visto: false,
        proximos: true,
      },
      {
        imagem: "./img/storys/pessoa5.2.jpg",
        hora: "1 h",
        visto: false,
        proximos: false,
      },
    ],
  },
  {
    id: 6,
    foto: "./img/storys/pessoa6.jpg",
    username: "joao",
    storyList: [
      {
        imagem: "./img/storys/pessoa6.1.jpg",
        hora: "10 min",
        visto: false,
        proximos: true,
      },
    ],
  },
];

var widthTela = document.documentElement.scrollWidth + 17;
var swiperStorysAbertos;
function initSwiper() {
  if (widthTela > 480) {
    swiperStorysAbertos = new Swiper(".storySwiper", {
      centeredSlides: true,
      slidesPerView: 3,
      slideToClickedSlide: true,
      watchOverflow: true,
      spaceBetween: 5,
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        811: {
          slidesPerView: 3,
        },
      },
    });
  } else {
    swiperStorysAbertos = new Swiper(".storySwiper", {
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
}

initSwiper();

function amigosProximos(amigoProx) {
  if(amigoProx) {
    return `<button class="amigos-p">Amigos próximos</button>`;
  } else {
    return `<button class="amigos-p" style="display: none;">Amigos próximos</button>`;
  }
}

//pega a div onde ficam as outras divs para os storys
var divStorysPostagens = document.querySelector(".storys-postagens");

//Pega a div que vão ficar os stories (vai servir como um document)
var divSwiperWrapper = divStorysPostagens.getElementsByClassName("swiper-wrapper")[0];

//Foreach para juntar todos os storys(como slides)
var storysAll = "";
storys.forEach((story) => {
  var qtsStorys = "";
  story.storyList.forEach((storyNum) => {
    qtsStorys += `<div class="story-barra-info"><div class="story-barra-foto"></div></div>`;
  });

  storysAll += ` <!-- Storys do ${story.username} -->
    <div class="swiper-slide">
      <div id="${story.id}" class="story-inativo" style="background-image: url(${story.storyList[0].imagem})">
        <header>
          <div class="barra-storys">${qtsStorys}</div>
          <div class="perfil-story">
            <div class="info-perfil">
              <div class="story-foto">
                <img src="${story.foto}" alt="" />
              </div>
              <a href="">${story.username}</a>
              <span class="story-hora">${story.storyList[0].hora}</span>
            </div>
            <div class="botoes-acoes">
              ${amigosProximos(story.storyList[0].proximos)}
              <button type="button">
                <i class="icon-3points-storys"></i>
              </button>
              <button type="button" class="btn-close-story">
                <i class="icon-fechar"></i>
              </button>
            </div>
          </div>
        </header>
        <main>
          <button class="anterior-story"></button>
          <button class="proximo-story"></button>
        </main>
        <footer>
          <input class="input-story" type="text" name="responder" placeholder="Responder a vitucelio..." />
          <button><i class="icon-curtir-branco"></i></button>
          <button><i class="icon-compartilhar-branco"></i></button>
        </footer>
      </div>
      <div class="navega-story">
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>`;
});

//Pegando os storys(slides) juntos e colocando na div responsável pelos storys
divSwiperWrapper.innerHTML += storysAll;

//Método ativado ao mudar de storys
swiperStorysAbertos.on("slideChange", function () {
  ativarSequenciaStory(divSwiperWrapper, this.slides[this.activeIndex], this.activeIndex, false);
});

function ativarSequenciaStory(divSwiperWrapper, activeIndexSlide, slideIndex, ativo) {
  if (ativo) {
    for (var indexSlide = 0; indexSlide < slideIndex; indexSlide++) {
      swiperStorysAbertos.slideNext();
    }
  }

  /* Pega todas as divs com a class .swiper-slide e vai remover a class .story-ativo e adicionar
    .story-inativo do primeiro elem. filho que é a div de story mesmo (vai fazer isso com todos os itens) */
  var listStorys = divSwiperWrapper.querySelectorAll(".swiper-slide");
  listStorys.forEach((s) => {
    var storyIndefinido = s.children[0];
    if (widthTela > 480) {
      storyIndefinido.classList.add("story-inativo");
      storyIndefinido.classList.remove("story-ativo");
    } else {
      storyIndefinido.classList.remove("story-inativo");
      storyIndefinido.classList.add("story-ativo");
    }
  });

  /* Vamos pegar o slide (a div dele) ativo a partir do this.activeIndex (posição do slide ativo),
     iremos remover a class .story-inativo e adicionar .story-ativo (apenas um story por vez terá .story-ativo) */
  var swiperSlideAtivo = activeIndexSlide;
  var storyAtivo = swiperSlideAtivo.children[0];
  storyAtivo.classList.remove("story-inativo");
  storyAtivo.classList.add("story-ativo");

  /* Depois vamos comparar o id da div do storyAtivo com o id recebido da lista de storys (dados do banco),
    se o id for igual é pq o story pertence a tal pessoa */
  var idStory = storyAtivo.id;
  var storyUser = storys.find((st) => st.id == idStory);

  // Vamos calcular quantos storys têm para percorrer
  var stQt = 0;
  storyUser.storyList.forEach((stNum) => {
    stQt += 15;
  });

  //Multiplacmos por 1000 pq é em milisegundos
  var tempoTotalStory = stQt * 1000;

  // Vamos adicionar o atributo de autoplay para o story passar com o tempo certo
  swiperSlideAtivo.setAttribute("data-swiper-autoplay", tempoTotalStory);

  /* Mudando a imagem e a hora do storys com índice "0", pois sempre começará pela primeira iamgem
    que vem na lista de storys */
  storyAtivo.style.backgroundImage = `url(${storyUser.storyList[0].imagem})`;
  storyAtivo.getElementsByClassName("story-hora")[0].innerHTML = storyUser.storyList[0].hora;

  // Pegamos a quantidade de barras que tem no nosso storyAtivo
  var quantidadeBarrasStorys = storyAtivo.getElementsByClassName("story-barra-info");
  // Faremos um loop para pegar cada elemento do story
  for (var qtdBarra = 0; qtdBarra < quantidadeBarrasStorys.length; qtdBarra++) {
    // Cada elemento tem dois um ou dois filhos, o story normal e o story sendo visto
    var listBarras = quantidadeBarrasStorys[qtdBarra].children;
    // Faremos um loop em cada elemento de storys
    for (var barraIndex = 0; barraIndex < listBarras.length; barraIndex++) {
      // Pegamos div por div
      var barraStory = listBarras[barraIndex];
      // Se a div tiver a class .story-barra-foto, vamos colocar a cor padrão dela, de não visto
      if (barraStory.classList.contains("story-barra-foto")) {
        barraStory.style.backgroundColor = "rgba(255, 255, 255, 0.35)";
      }
      /* Se a div tiver a class .story-barra-vendo, vamos remover a mesma class para voltar
        a ser um story não visto */
      if (barraStory.classList.contains("story-barra-vendo")) {
        barraStory.classList.remove("story-barra-vendo");
      }
    }
  }

  /* Criamos a div que vai servir para passar pelo storys quando ele estiver sendo visto,
    ele vai ser a barrinha branca percorrendo a barra do storys */
  var divStoryVendo = document.createElement("div");
  divStoryVendo.classList.add("story-barra-vendo");

  /* Pegando a primeira barra de storys e colocando o divStoryVendo, pois sempre o primeiro story
    começa sendo percorrido */
  var primeiroBarraStory = storyAtivo.getElementsByClassName("story-barra-info")[0];
  primeiroBarraStory.appendChild(divStoryVendo);

  // O indexStory começa no 1, pois o storyAtivo já começa com os dados do índice "0"
  var indexStory = 1;
  var timerStory = 15000;
  function loopStory() {
    setInterval(() => {
      // Se o storyAtivo de fato tiver a class .story-ativo ele vai está apto para mudar as info do story
      if (storyAtivo.classList.contains("story-ativo")) {
        if (indexStory < storyUser.storyList.length) {
          // Mudando as informações pelo indexStory
          storyAtivo.style.backgroundImage = `url(${storyUser.storyList[indexStory].imagem})`;
          storyAtivo.getElementsByClassName("story-hora")[0].innerHTML = storyUser.storyList[indexStory].hora;
          storyAtivo.getElementsByClassName("story-barra-info")[indexStory].appendChild(divStoryVendo);
          if(!storyUser.storyList[indexStory].proximos) {
            storyAtivo.getElementsByClassName("amigos-p")[0].style.display = "none";
          } else {
            storyAtivo.getElementsByClassName("amigos-p")[0].style.display = "block";
          }
          if (indexStory - 1 >= 0) {
            storyAtivo.getElementsByClassName("story-barra-info")[indexStory - 1].children[0].style.backgroundColor = "white";
          }

          // Incrementando o indexStory para o próximo story ser ativo
          indexStory++;

          /* Se o indexStory for menor que a qts de storys desse usuário, significa que ainda tem
              mais storys para serem percorridos e chamará novamente esse método */
          if (indexStory < storyUser.storyList.length) {
            loopStory();
          }
        }
      }
    }, timerStory);
  }

  // Inicia a chamada dos storys
  loopStory();

  // Evento de clique para poder passar o story atual para o próximo
  storyAtivo.getElementsByClassName("proximo-story")[0].addEventListener("click", () => {
    nextStory();
  });
  // Evento de clique para pode voltar o story atual para o anterior
  storyAtivo.getElementsByClassName("anterior-story")[0].addEventListener("click", () => {
    previousStory();
  });

  storyAtivo.getElementsByClassName("btn-close-story")[0].addEventListener("click", () => {
    var storyPagina = document.getElementById("story-pagina");
    storyPagina.style.transform = "scale(0)";
    body.style.overflow = "auto";
  });

  function nextStory() {
    // Se o indexStory for menor que a qtd de storys, pode pular o story
    if (indexStory < storyUser.storyList.length) {
      // Apenas passamos o indexStory para os índices, pois o loopStory incrementa no final
      if (indexStory >= 0) {
        if (indexStory === 0) indexStory++;

        storyAtivo.style.backgroundImage = `url(${storyUser.storyList[indexStory].imagem})`;
        storyAtivo.getElementsByClassName("story-hora")[0].innerHTML = storyUser.storyList[indexStory].hora;
        storyAtivo.getElementsByClassName("story-barra-info")[indexStory].appendChild(divStoryVendo);
        if(!storyUser.storyList[indexStory].proximos) {
          storyAtivo.getElementsByClassName("amigos-p")[0].style.display = "none";
        } else {
          storyAtivo.getElementsByClassName("amigos-p")[0].style.display = "block";
        }

        if (indexStory - 1 >= 0) {
          storyAtivo.getElementsByClassName("story-barra-info")[indexStory - 1].children[0].style.backgroundColor = "white";
        }

        /* Para cada story que passamos, diminuimos o atributo de tempo em 15000, pois cada story
          tem 15000 milisegundos, deixando apenas o tempo para os storys que restaram */
        var tempoStory = swiperSlideAtivo.getAttribute("data-swiper-autoplay");
        var num = Number(tempoStory) - 15000;
        swiperSlideAtivo.setAttribute("data-swiper-autoplay", num);

        // Incrementamos o indexStory, pois o fluxo precisa voltar normalmente a partir do próximo storys
        indexStory++;
      }
    }
  }

  function previousStory() {
    // Se o indexStory for menor que a qtd de storys, pode pular o story
    if (indexStory <= storyUser.storyList.length) {
      // Incrementamos o indexStory, pois o fluxo precisa voltar normalmente a partir do próximo storys
      if (indexStory > 0 && indexStory !== 1) {
        indexStory -= 2;
      } else {
        if (indexStory >= 1) {
          indexStory--;
        }
      }

      if (indexStory >= 0) {
        // Apenas passamos o indexStory para os índices, pois o loopStory incrementa no final
        storyAtivo.style.backgroundImage = `url(${storyUser.storyList[indexStory].imagem})`;
        storyAtivo.getElementsByClassName("story-hora")[0].innerHTML = storyUser.storyList[indexStory].hora;
        storyAtivo.getElementsByClassName("story-barra-info")[indexStory].appendChild(divStoryVendo);
        storyAtivo.getElementsByClassName("story-barra-info")[indexStory].children[0].style.backgroundColor = "rgba(255, 255, 255, 0.35)";
        if(!storyUser.storyList[indexStory].proximos) {
          storyAtivo.getElementsByClassName("amigos-p")[0].style.display = "none";
        } else {
          storyAtivo.getElementsByClassName("amigos-p")[0].style.display = "block";
        }
        /* Para cada story que passamos, diminuimos o atributo de tempo em 15000, pois cada story
          tem 15000 milisegundos, deixando apenas o tempo para os storys que restaram */
        var tempoStory = swiperSlideAtivo.getAttribute("data-swiper-autoplay");
        swiperSlideAtivo.setAttribute("data-swiper-autoplay", Number(tempoStory) + 15000);
      }
    }
  }

  swiperSlideAtivo.getElementsByClassName("swiper-button-next")[0].addEventListener("click", () => {
    nextStory();
  });

  swiperSlideAtivo.getElementsByClassName("swiper-button-prev")[0].addEventListener("click", () => {
    previousStory();
  });
}
