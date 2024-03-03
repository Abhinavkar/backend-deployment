const express = require("express");
require("dotenv").config();
const app = express();
const obj = [
  {
    _id: "65e427460f6e8d2a6aad310e",
    index: 0,
    guid: "75436da1-cba5-4acc-826c-fcc8131397c5",
    isActive: true,
    balance: "$1,497.14",
    picture: "http://placehold.it/32x32",
    age: 37,
    eyeColor: "brown",
    name: "Bianca Stein",
    gender: "female",
    company: "ISOTRACK",
    email: "biancastein@isotrack.com",
    phone: "+1 (809) 553-2431",
    address: "694 Montieth Street, Ahwahnee, Connecticut, 3212",
    about:
      "Nulla dolor minim adipisicing adipisicing dolor cupidatat enim cillum consectetur aute in minim tempor amet. Sint veniam sint deserunt aute cupidatat nisi ad ullamco ad ea. Veniam quis duis ipsum non dolor do aliqua ullamco do quis consectetur cupidatat.\r\n",
    registered: "2018-02-16T07:35:34 -06:-30",
    latitude: -2.615386,
    longitude: -36.647409,
    tags: ["ad", "aliquip", "nulla", "in", "proident", "deserunt", "magna"],
    friends: [
      {
        id: 0,
        name: "Wong Hansen",
      },
      {
        id: 1,
        name: "Valarie Morales",
      },
      {
        id: 2,
        name: "Juliana Cole",
      },
    ],
    greeting: "Hello, Bianca Stein! You have 1 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "65e4274623bc2588afed01cf",
    index: 1,
    guid: "b6d30f4f-2543-4bbb-a835-bd40e09626c9",
    isActive: true,
    balance: "$2,135.07",
    picture: "http://placehold.it/32x32",
    age: 31,
    eyeColor: "blue",
    name: "Vivian Sawyer",
    gender: "female",
    company: "CHILLIUM",
    email: "viviansawyer@chillium.com",
    phone: "+1 (857) 527-2260",
    address: "425 Florence Avenue, Urbana, Michigan, 8725",
    about:
      "Ut enim est exercitation eiusmod ut quis velit commodo veniam Lorem nisi incididunt reprehenderit laborum. Occaecat veniam velit velit dolore laborum minim irure excepteur in quis. Proident quis in in in sint reprehenderit dolor. Elit ea velit adipisicing in velit. Ullamco minim culpa sint ut aliquip proident labore culpa laboris in nostrud nisi.\r\n",
    registered: "2018-08-29T11:37:04 -06:-30",
    latitude: -5.942281,
    longitude: -117.083781,
    tags: ["reprehenderit", "qui", "eu", "nisi", "et", "magna", "in"],
    friends: [
      {
        id: 0,
        name: "Ladonna Malone",
      },
      {
        id: 1,
        name: "Parks Baldwin",
      },
      {
        id: 2,
        name: "Fischer Stephens",
      },
    ],
    greeting: "Hello, Vivian Sawyer! You have 10 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "65e42746ae7752f15ff7431b",
    index: 2,
    guid: "f8cd2097-9b95-4af3-affe-398491d3e0d6",
    isActive: true,
    balance: "$2,309.15",
    picture: "http://placehold.it/32x32",
    age: 21,
    eyeColor: "brown",
    name: "Osborn Owens",
    gender: "male",
    company: "HAWKSTER",
    email: "osbornowens@hawkster.com",
    phone: "+1 (814) 400-2269",
    address: "324 President Street, Sunnyside, Idaho, 5209",
    about:
      "Ea cillum voluptate nostrud culpa consequat aliquip cupidatat ex cillum id aliqua ex adipisicing. Mollit excepteur incididunt elit amet laboris. Cupidatat nostrud ea adipisicing magna in cillum exercitation anim id duis sunt. Dolore eiusmod commodo ipsum ad amet anim eu eiusmod est qui cillum. Magna cupidatat aute tempor commodo consequat duis. Ipsum nostrud cupidatat deserunt labore nostrud est.\r\n",
    registered: "2022-12-13T12:06:51 -06:-30",
    latitude: 4.642801,
    longitude: 3.053551,
    tags: ["duis", "pariatur", "amet", "ea", "sint", "veniam", "nulla"],
    friends: [
      {
        id: 0,
        name: "Hooper Padilla",
      },
      {
        id: 1,
        name: "Foley Anthony",
      },
      {
        id: 2,
        name: "Sargent Vasquez",
      },
    ],
    greeting: "Hello, Osborn Owens! You have 2 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "65e42746f4f305a8eca4b863",
    index: 3,
    guid: "d2dee4c2-1f20-4a66-85e3-cbbb0079062b",
    isActive: false,
    balance: "$1,756.75",
    picture: "http://placehold.it/32x32",
    age: 26,
    eyeColor: "brown",
    name: "Guerrero Tucker",
    gender: "male",
    company: "AQUAFIRE",
    email: "guerrerotucker@aquafire.com",
    phone: "+1 (834) 570-2709",
    address: "727 Kensington Street, Soudan, Florida, 8061",
    about:
      "Eiusmod dolore nulla dolor aliquip magna aliqua occaecat sit eu ex qui sit amet. Laboris sunt culpa mollit deserunt. Reprehenderit consectetur amet velit anim. Elit ea magna tempor ex.\r\n",
    registered: "2015-10-19T07:29:28 -06:-30",
    latitude: -10.963322,
    longitude: -88.14644,
    tags: ["commodo", "commodo", "commodo", "ipsum", "nulla", "do", "anim"],
    friends: [
      {
        id: 0,
        name: "Glenna Collier",
      },
      {
        id: 1,
        name: "Rose Logan",
      },
      {
        id: 2,
        name: "Russo Lowe",
      },
    ],
    greeting: "Hello, Guerrero Tucker! You have 3 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "65e42746fd74708e22ec77b6",
    index: 4,
    guid: "6d31fe0e-81cb-4bad-abb4-99f41722cf29",
    isActive: true,
    balance: "$2,526.28",
    picture: "http://placehold.it/32x32",
    age: 39,
    eyeColor: "green",
    name: "Maddox Bowers",
    gender: "male",
    company: "REMOLD",
    email: "maddoxbowers@remold.com",
    phone: "+1 (848) 427-2091",
    address: "135 Columbus Place, Homestead, North Dakota, 7511",
    about:
      "Ullamco occaecat fugiat excepteur voluptate. Ullamco eiusmod laboris sit ullamco aliquip incididunt duis aute sunt enim. Ad laborum adipisicing reprehenderit veniam ea. Sunt excepteur dolor consequat aliquip cillum consectetur enim elit occaecat deserunt enim deserunt. Aliquip velit commodo Lorem ullamco commodo qui. Mollit et amet aliqua consectetur labore reprehenderit magna deserunt esse nulla laboris culpa. Aliqua dolor est id nisi nisi excepteur aliquip officia duis velit ea aliquip.\r\n",
    registered: "2023-09-07T11:04:23 -06:-30",
    latitude: -73.326062,
    longitude: 173.999797,
    tags: [
      "laborum",
      "ullamco",
      "elit",
      "anim",
      "mollit",
      "reprehenderit",
      "minim",
    ],
    friends: [
      {
        id: 0,
        name: "Darla Randall",
      },
      {
        id: 1,
        name: "Lila Frank",
      },
      {
        id: 2,
        name: "Fernandez Williamson",
      },
    ],
    greeting: "Hello, Maddox Bowers! You have 5 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "65e4274660ff6818894ef780",
    index: 5,
    guid: "31617b72-1806-41e7-b31c-f138553232f3",
    isActive: true,
    balance: "$3,974.33",
    picture: "http://placehold.it/32x32",
    age: 34,
    eyeColor: "green",
    name: "Jodi Farrell",
    gender: "female",
    company: "PEARLESEX",
    email: "jodifarrell@pearlesex.com",
    phone: "+1 (871) 423-3616",
    address: "172 Ryder Street, Taycheedah, Virginia, 7370",
    about:
      "Aliqua duis magna ad esse velit laborum ad nisi voluptate enim consectetur nisi voluptate dolore. Ex nisi irure culpa fugiat tempor laborum voluptate esse nostrud adipisicing qui commodo non. Duis cillum cillum commodo aliqua enim nisi et tempor quis labore qui. Magna nostrud cillum irure cupidatat qui fugiat sunt aliquip consectetur in incididunt occaecat laboris.\r\n",
    registered: "2015-09-09T08:50:25 -06:-30",
    latitude: -67.947444,
    longitude: -22.65418,
    tags: [
      "aliquip",
      "nostrud",
      "qui",
      "consectetur",
      "irure",
      "eiusmod",
      "ullamco",
    ],
    friends: [
      {
        id: 0,
        name: "Rowena Perkins",
      },
      {
        id: 1,
        name: "Key Burt",
      },
      {
        id: 2,
        name: "Barr Steele",
      },
    ],
    greeting: "Hello, Jodi Farrell! You have 6 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "65e4274633152f7fcf26cfdf",
    index: 6,
    guid: "a5586156-1847-4ea0-9efb-33afebe483b7",
    isActive: false,
    balance: "$3,375.03",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "green",
    name: "Joan Trujillo",
    gender: "female",
    company: "GEEKNET",
    email: "joantrujillo@geeknet.com",
    phone: "+1 (816) 548-2582",
    address: "755 Crescent Street, Roberts, South Carolina, 4628",
    about:
      "Eu adipisicing ad ea anim reprehenderit reprehenderit exercitation fugiat labore id dolore anim enim officia. Elit tempor dolore aliqua eiusmod pariatur duis laboris ullamco occaecat nostrud tempor. Deserunt irure ut ex mollit magna sint non incididunt aliqua magna incididunt laboris. Eiusmod tempor non dolor dolor proident reprehenderit nulla incididunt. Esse commodo adipisicing proident veniam duis.\r\n",
    registered: "2015-05-09T09:37:06 -06:-30",
    latitude: -5.696732,
    longitude: 45.076859,
    tags: ["velit", "anim", "nostrud", "culpa", "aliqua", "amet", "non"],
    friends: [
      {
        id: 0,
        name: "Cotton Daniels",
      },
      {
        id: 1,
        name: "Virginia Macdonald",
      },
      {
        id: 2,
        name: "Emily Black",
      },
    ],
    greeting: "Hello, Joan Trujillo! You have 7 unread messages.",
    favoriteFruit: "apple",
  },
];

const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("Hi, Welcome to the world of Node.js");
});
app.get("/about", (req, res) => {
  res.send("this is mya bout page ");
});
app.get("/login", (req, res) => {
  res.send("<h1>This is the login Page </h1>");
});
app.get("/users", (req, res) => {
  res.json(obj);
});
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
