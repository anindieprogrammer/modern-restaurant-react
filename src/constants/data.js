import images from "./images";

const foods = [
  {
    title: "Biscuits And Gravy",
    price: "$12.99",
    tags: "Sausage | Veggie | Eggs",
  },
  {
    title: "Eggs Benedict",
    price: "$14.99",
    tags: "Muffins | Eggs | Sause",
  },
  {
    title: "Grilled Flatiron Steak & Eggs",
    price: "$18.99",
    tags: "Eggs | Potato | Sausage",
  },
  {
    title: "Pacific NW Hash",
    price: "$11.99",
    tags: "Salmon | Bacon | Eggs | Cream",
  },
  {
    title: "Chorizo And Black Bean Egg Burrito",
    price: "$13.99",
    tags: "Eggs | Black Bean | Cheese",
  },
];

const drinks = [
  {
    title: "Hot Chocolate",
    price: "$2.99",
    tags: "Hot | Chocolate",
  },
  {
    title: "Milk Or Chocolate Milk",
    price: "$1.99",
    tags: "Milk | Chocolate Milk",
  },
  {
    title: "Iced Tea Or Lemonade",
    price: "$3.99",
    tags: "Iced Tea | Lemonade",
  },
  {
    title: "Fountain Soda",
    price: "$2.99",
    tags: "Fountain | Sode",
  },
  {
    title: "Apple, Orange, Tomato Juice",
    price: "$3.99",
    tags: "Apple | Orange | Tomato | Juice",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { foods, drinks, awards };
