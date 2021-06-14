"use strict";

var cards = [
  {
    img_card: "https://picsum.photos/300/100",
    user_img: "https://picsum.photos/201",
    user_name: "Pajaro Devs",
    time: "Jun 11",
    card_title: "Lagrimas de Koder",
    tags: ["javascript", "fronted", "beginners", "kodemia"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/202",
    user_name: "Lynx Pardelle",
    time: "Jun 11",
    card_title: "Challenge Accepted",
    tags: ["javascript", "fronted", "beginners", "kodemia"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/203",
    user_name: "Misael",
    time: "Jun 11",
    card_title: "React for beginners",
    tags: ["javascript", "frontend", "beginners", "HTML"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/204",
    user_name: "Ubaldo",
    time: "Jun 11",
    card_title: "10 tricks for JS",
    tags: ["javascript", "frontend", "tips", "CSS"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/205",
    user_name: "Hector",
    time: "Jun 11",
    card_title: "50 PROJECTS 50 DAYS",
    tags: ["javascript", "frontend", "challenge", "foryou"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/206",
    user_name: "Gerardo",
    time: "Jun 11",
    card_title: "Design Patterns In JavaScript",
    tags: ["javascript", "frontend", "challenge", "foryou"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/207",
    user_name: "Carlos Alcalá",
    time: "Jun 11",
    card_title: "Design Patterns In JavaScript",
    tags: ["javascript", "frontend", "kodeawards", "foryou"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/207",
    user_name: "Arnold Bernal",
    time: "Jun 11",
    card_title: "Javascript Array Methods",
    tags: ["javascript", "frontend", "kodeawards", "foryou"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/207",
    user_name: "Eduardo Perez",
    card_title: "Design Patterns In JavaScript",
    tags: ["javascript", "frontend", "kodeawards", "foryou"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/207",
    user_name: "Karen Ascencio",
    time: "Jun 11",
    card_title: "",
    tags: ["javascript", "frontend", "kodeawards", "foryou"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/207",
    user_name: "Salvador Jiménez",
    time: "Jun 11",
    card_title: "Fullstack developer roadmap",
    tags: ["javascript", "frontend", "kodeawards", "foryou"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/207",
    user_name: "Jesus Pluma",
    time: "Jun 11",
    card_title: "Cripto bots",
    tags: ["javascript", "frontend", "kodeawards", "foryou"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/207",
    user_name: "Carlos Velazques",
    time: "Jun 11",
    card_title: "How to Master flexbox",
    tags: ["javascript", "frontend", "kodeawards", "foryou"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/207",
    user_name: "Alfredo Castuera",
    time: "Jun 11",
    card_title: "League of Legends Clone in JS",
    tags: ["javascript", "frontend", "kodeawards", "foryou"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/207",
    user_name: "Oscar Rodríguez",
    time: "Jun 11",
    card_title: "CSS Grid and Flexbox",
    tags: ["javascript", "frontend", "kodeawards", "foryou"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/207",
    user_name: "Martha",
    time: "Jun 11",
    card_title: "Kodemia awards tips",
    tags: ["javascript", "frontend", "kodeawards", "foryou"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/207",
    user_name: "Miguel Angel",
    time: "Jun 11",
    card_title: "API in JS",
    tags: ["javascript", "frontend", "kodeawards", "foryou"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/207",
    user_name: "Bulmaro",
    time: "Jun 11",
    card_title: "MVP APP",
    tags: ["javascript", "frontend", "kodeawards", "foryou"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
  {
    img_card: "",
    user_img: "https://picsum.photos/207",
    user_name: "Miguel A. Contreras",
    time: "Jun 11",
    card_title: "25 git commands i use daily",
    tags: ["javascript", "frontend", "kodeawards", "foryou"],
    reactions: Math.floor(Math.random() * 100 + 1),
    comments: Math.floor(Math.random() * 100 + 1),
    minutes_ago: Math.floor(Math.random() * 59 + 1),
  },
];

var cards_div = document.getElementById("div_cards_section_primary");
var card_innerhtml = "";

for (let card of cards) {
  card_innerhtml =
    card_innerhtml +
    `
  <!-- Section-card-${card.card_title} -->
        <div class="card mb-3 ">`;

  if (card.img_card) {
    card_innerhtml =
      card_innerhtml +
      `
    <img src="${card.img_card}" class="card-img-top" alt="${card.img_card}">
    `;
  }

  card_innerhtml =
    card_innerhtml +
    `
          <div class="card-body ">
            <!-- sp-img-user-&-user-name -->
            <div class="row">
              <div class="col-2 pr-0 pr-sm-4 pr-md-2 col-sm-1">
                <img src="${card.user_img}" class="img-user" alt="${card.user_img}">
              </div>
              <div class="col-9 pl-0 pl-sm-4 pl-md-2 col-sm-10">
                <h4 class="fs-3 m-0"><a class="text-dark text-decoration-none" href="#">${card.user_name}</a></h4>
                <span class="fs-3 m-0">${card.time}</span>
              </div>
            </div>
            
            <!-- sp-bot card -->
            <div class="ml-0 ml-sm-4 ml-md-5" id="card_info">
              <h2 class="card-title"><a class="text-decoration-none card-title-hover stretched-link"  href="/post_example.html">${card.card_title}</a></h2>
              <!--# Hashtags #-->
              <div class="mb-2">`;

  for (let tag of card.tags) {
    card_innerhtml =
      card_innerhtml +
      `
      <a class="text-decoration-none post-hash-tag" href="#"><small class="text-muted mr-2">#${tag.replace(",", "")} </small></a>
      `;
  }

  card_innerhtml =
    card_innerhtml +
    `
              </div>
              
              <!-- sp-card-bottom-btns-start -->
              <div class="row d-flex justify-content-between">
                <!-- btn reactions comments -->
                  <div class="col-7 col-md-6 col-lg-8 d-flex justify-content-start align-items-center">
                      <a href="#" class="btn btn-light fs-3 d-inline">
                        <!-- Icon Heart -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img"
                        aria-labelledby="aoqxokippqaxwqyosgslhpdvn95soxj8" class="crayons-icon">
                        <title id="aoqxokippqaxwqyosgslhpdvn95soxj8">Reactions</title>
                        <path
                        d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12
                        17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z">
                        </path>
                        </svg>
                        <span>${card.reactions}<span class="d-none d-lg-inline"> reactions</span></span>
                      </a>
                      
                      
                      <a href="#" class="btn btn-light fs-3 ml-0 d-inline">
                        <!-- Icon Comments -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img"
                        aria-labelledby="a52pxqxbfhft3e5b0s0gkc7i7rv3dzb" class="crayons-icon">
                        <title id="a52pxqxbfhft3e5b0s0gkc7i7rv3dzb">Comments</title>
                        <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12
                        15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0
                        2.707 1.846 4.475 6 6.36V15.5z"></path>
                        </svg>
                        <span>${card.comments}<span class="d-none d-lg-inline"> comments</span></span>
                      </a>
                  </div>
                <!-- btn reactions comments -->

                <div class="col-5 col-md-6 col-lg-4 d-flex justify-content-end align-items-center pl-0">
                    <span><small class="text-muted fs-3">${card.minutes_ago} mins ago</small></span>
                    <button class="btn btn-outline-secondary btn-card-save mr-1">Save</button>
                </div>
              </div>
              <!-- sp-card-bottom-btns-end -->
            </div>
          
          </div>  
        </div>
        <!-- Section-card-${card.title} -->
  `;
}

cards_div.innerHTML = card_innerhtml;
console.log(cards_div);
