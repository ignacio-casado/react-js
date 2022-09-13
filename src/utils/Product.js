 import imagenes from "../assets/imagenes"; 



const Product = [
    {
        id: 1,
        image:["https://static.nike.com/a/images/t_default/e24cc9da-a136-4262-987d-ab1a435cade1/air-jordan-1-retro-high-og-zapatillas.png"] ,
        name: "Nike air jordan 1",
        stock: 10,
        positionID: "Jordan 1",
        precio: 125,
        description: "Unicas en estilo y onda....",
        categoryid: 11,
        category:{
            namese: "Air Jordan",
            id: 11,
        },
    },
    {
        id: 2,
        image: ["https://cdn.shopify.com/s/files/1/2358/2817/products/air-jordan-1-low-light-smoke-grey-751782.png?v=1638812662"],
        name: "Nike air jordan low",
        stock: 4,
        positionID: "Jordan Low",
        description: "Unicas en estilo y onda....",
        precio: 350,
        categoryid: 11,
        category:{
            name: "Air Jordan",
            id: 11,
        },

    },
    {
        id: 3,
        image:["https://www.courir.es/dw/image/v2/BCCL_PRD/on/demandware.static/-/Sites-master-catalog-courir/default/dw5117d8c6/images/hi-res/001503168_102.png?sw=300&sh=300&sm=fit"],
        name: "Nike air jordan 1 retro",
        stock: 7,
        positionID: "Jordan Retro",
        description: "Unicas en estilo y onda....",
        precio: 200,
        categoryid: 11,
        category:{
            name: "Air Jordan",
            id: 11,
        },

    },
    {
        id:4,
        image: [
            "https://static.nike.com/a/images/t_default/28862ef5-d0f9-488c-9d37-702cd834ea2f/calzado-air-force-1-07-Dz225W.png",

        ],
        name: "Nike air force 1",
        stock: 3,
        positionID: "Force 1",
        description: "Unicas en estilo y onda....",
        precio: 290,
        categoryid: 12,
        category:{
            name: "Air Force",
            id:12,
        }
    },
    {
        id:5,
        image: [
            "https://static.nike.com/a/images/t_default/1aa3abc4-692e-466b-b985-570a178f25ef/calzado-talla-grande-air-force-1-M7mcL9.png",

        ],
        name: "Nike air force 1",
        stock: 5,
        positionID: "Force 1",
        description: "Unicas en estilo y onda....",
        precio: 160,
        categoryid: 12,
        category:{
            name: "Air Force",
            id:12,
        }
    },
    {
        id:6,
        image: [
            "https://static.nike.com/a/images/t_default/d1f614ba-dd82-4a93-bd8c-17fafc7b8fb9/air-force-1-07-shoes-cbBh9R.png",

        ],
        name: "Nike air force 1",
        stock: 133,
        positionID: "Force 1",
        description: "Unicas en estilo y onda....",
        precio: 240,
        categoryid: 12,
        category:{
            name: "Air Force",
            id:12,
        }
    },


];


export default Product;