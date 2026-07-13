//Criação de uma timeline GSAP com animações sicronizadas com o scroll 
let lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        markers: false, // depuração
    }
});

tl.to(
    "#fanta",
    {
        top: "120%", // move o elemento com id fanta para 120% do topo
        left: "0%", // move o elemento com id fanta para 50% da esquerda

    },
    "orange"

);//nomeando este trecho de animação como "orange" para sicronização

tl.to(
    "#laranja-cortada",
    {
        top: "160%", // move o elemento com id fanta para 160% do topo
        left: "23%",
        rotate: "580deg" // move o elemento com id fanta para 23% da esquerda

    },
    "orange"

);//nomeando este trecho de animação como "orange" para sicronização

tl.to(
    "#laranja",
    {
        width: "15%", // reduz a largura do elemento com id fanta para 15% da largura original
        top: "165%", // move o elemento com id fanta para 160% do topo
        right: "10%", // move o elemento com id fanta para 23% da esquerda

    },
    "orange"

);//nomeando este trecho de animação como "orange" para sicronização

tl.to(
    "#folha",
    {
        top: "110%", // move o elemento com id leaf para 110% do topo
        rotate: "530deg", // move o elemento em 530 graus 
        left: "70%", // move o elemento com id fanta para 70% da esquerda

    },
    "orange"

);//nomeando este trecho de animação como "orange" para sicronização

tl.to(
    "#folha2",
    {
        top: "110%", // move o elemento com id leaf para 110% do topo
        rotate: "530deg", // move o elemento em 530 graus 
        left: "0%", // move o elemento com id fanta para 00% da esquerda

    },
    "orange"

);//nomeando este trecho de animação como "orange" para sicronização

//criando outra timeline GSAP com animações sicronizadas com o scroll

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%", // fim da animação (top da tela atinge 50% da altura quando estiver 20% da seção .three)
        scrub: true,
        markers: false, // depuração




    }
});

tl2.from(
    ".lemon1",
    {
        rotate: "830deg",
        xPercent: -100, // era left: "-100%"
        yPercent: 110,  // era top: "110%"
    },
    "ca"
);

tl2.from(
    "#cocacola",
    {
        rotate: -90,
        xPercent: -100,
        yPercent: 110,
    },
    "ca"
);

tl2.from(
    ".lemon2",
    {
        rotate: "830deg",
        xPercent: 100,
        yPercent: 110,
    },
    "ca"
);

tl2.from(
    "#pepsi",
    {
        rotate: 90,
        xPercent: 100,
        yPercent: 110,
    },
    "ca"
);

tl2.to(
    "#laranja-cortada",
    {
        width: "18%",
        xPercent: 100,
        yPercent:  120,
        rotate: "520deg",
    },
    "ca"
);

tl2.to(
    "#fanta",
    {
        width: "35%",
        xPercent: 93,
        yPercent: 163,
        rotate: "360deg",
    },
    "ca"
);

window.addEventListener("load", () => ScrollTrigger.refresh());

    