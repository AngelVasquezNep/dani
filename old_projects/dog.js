const dogs = [
  "https://images.dog.ceo/breeds/brabancon/n02112706_2391.jpg",
  "https://images.dog.ceo/breeds/cotondetulear/100_2397.jpg",
  "https://images.dog.ceo/breeds/setter-irish/n02100877_3141.jpg",
  "https://images.dog.ceo/breeds/pembroke/n02113023_1136.jpg",
  "https://images.dog.ceo/breeds/terrier-irish/n02093991_3034.jpg",
  "https://images.dog.ceo/breeds/briard/n02105251_7170.jpg",
  "https://images.dog.ceo/breeds/setter-english/n02100735_1680.jpg",
  "https://images.dog.ceo/breeds/pitbull/20190710_143021.jpg",
  "https://images.dog.ceo/breeds/pitbull/IMG_20190826_121528_876.jpg",
  "https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg",
  "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_195.jpg",
  "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_3604.jpg",
  "https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg",
  "https://images.dog.ceo/breeds/pekinese/n02086079_11684.jpg",
  "https://images.dog.ceo/breeds/weimaraner/n02092339_4214.jpg",
  "https://images.dog.ceo/breeds/pointer-german/n02100236_1435.jpg",
  "https://images.dog.ceo/breeds/keeshond/n02112350_9195.jpg",
  "https://images.dog.ceo/breeds/setter-irish/n02100877_2588.jpg",
  "https://images.dog.ceo/breeds/terrier-kerryblue/n02093859_467.jpg",
  "https://images.dog.ceo/breeds/cattledog-australian/IMG_7057.jpg",
  "https://images.dog.ceo/breeds/frise-bichon/stevebaxter_bichon_frise.jpg",
  "https://images.dog.ceo/breeds/terrier-tibetan/n02097474_4875.jpg",
  "https://images.dog.ceo/breeds/basenji/n02110806_3880.jpg",
  "https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg",
  "https://images.dog.ceo/breeds/hound-ibizan/n02091244_3320.jpg",
  "https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_4180.jpg",
  "https://images.dog.ceo/breeds/spaniel-irish/n02102973_2645.jpg",
  "https://images.dog.ceo/breeds/terrier-russell/iguet3.jpeg",
  "https://images.dog.ceo/breeds/mountain-swiss/n02107574_1871.jpg",
  "https://images.dog.ceo/breeds/terrier-border/n02093754_5975.jpg",
  "https://images.dog.ceo/breeds/spaniel-sussex/n02102480_6514.jpg",
  "https://images.dog.ceo/breeds/terrier-irish/n02093991_1978.jpg",
  "https://images.dog.ceo/breeds/hound-ibizan/n02091244_4281.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
  "https://images.dog.ceo/breeds/terrier-border/n02093754_4285.jpg",
  "https://images.dog.ceo/breeds/papillon/n02086910_9527.jpg",
  "https://images.dog.ceo/breeds/collie-border/n02106166_1975.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-16.jpg",
  "https://images.dog.ceo/breeds/coonhound/n02089078_3078.jpg",
  "https://images.dog.ceo/breeds/spaniel-sussex/n02102480_2385.jpg",
  "https://images.dog.ceo/breeds/terrier-norwich/n02094258_1825.jpg",
  "https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191126134713895_COVER.jpg",
  "https://images.dog.ceo/breeds/bouvier/n02106382_4503.jpg",
  "https://images.dog.ceo/breeds/briard/n02105251_5649.jpg",
  "https://images.dog.ceo/breeds/spaniel-irish/n02102973_4513.jpg",
  "https://images.dog.ceo/breeds/bulldog-french/n02108915_9666.jpg",
  "https://images.dog.ceo/breeds/retriever-curly/n02099429_1883.jpg",
  "https://images.dog.ceo/breeds/chow/n02112137_11927.jpg",
  "https://images.dog.ceo/breeds/borzoi/n02090622_8764.jpg",
  "https://images.dog.ceo/breeds/rottweiler/n02106550_10478.jpg",
];

const $container = document.getElementById("container");
const $imageHover = document.getElementById("hover-image");

dogs.forEach(function (dogImage, index) {
  const dogImageElement = document.createElement("img");

  dogImageElement.className = "dog";
  dogImageElement.src = dogImage;
  dogImageElement.alt = "Imagen de perrito " + index;

  // dogImageElement.style.border = '10px solid red'

  $container.appendChild(dogImageElement);
});

document.addEventListener("mousemove", (event) => {
  $imageHover.style.left = `${event.screenX}px`;
  $imageHover.style.top = `${event.screenY}px`;
});

$container.addEventListener("mouseover", (event) => {
  console.log(event)

  $imageHover.src = event.target.src;
  $imageHover.classList.add("is-visible");
});

$container.addEventListener("mouseleave", (event) => {
  $imageHover.src = "";
  $imageHover.classList.remove("is-visible");
});
