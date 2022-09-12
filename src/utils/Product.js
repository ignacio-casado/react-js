 import imagenes from "../assets/imagenes"; 



const Product = [
    {
        id: 1,
        image: imagenes.img4,
        name: "Nike air jordan 1",
        stock: 10,
        positionID: "Jordan 1",
        categoryid: 11,
        category:{
            name: "Air Jordan",
            id: 11
        },
    },
    {
        id: 2,
        image: imagenes.img5,
        name: "Nike air jordan low",
        stock: 4,
        positionID: "Jordan Low",
        categoryid: 11,
        category:{
            name: "Air Jordan",
            id: 11
        },

    },
    {
        id: 3,
        image: imagenes.img6,
        name: "Nike air jordan 1 retro",
        stock: 7,
        positionID: "Jordan Retro",
        description: "Unicas en estilo y onda....",
        precio: 200,
        categoryid: 11,
        category:{
            name: "Air Jordan",
            id: 11
        },

    },
    {
        id:4,
        image: [
            "https://essential.vtexassets.com/arquivos/ids/571590/316-0414_1.jpg?v=637909172123500000",

        ],
        name: "Nike air force 1",
        stock: 3,
        positionID: "Force 1",
        categoryid: 12,
        category:{
            name: "Air Force",
            id:12,
        }
    }
];


export default Product;