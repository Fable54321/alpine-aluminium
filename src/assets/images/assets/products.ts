import produit1 from '../assets/produits --1.png'
import produit2 from '../assets/produits--2.png'
import produit3 from '../assets/produits--3.jpg'
import produit4 from '../assets/produits --4.jpg'
import produit4_2 from '../assets/produits--4.jpg'
import produit5 from '../assets/produits--5.jpg' 
 
export const productsList = [
    {
        id: 1,
        name: 'Des Vêtements',
        description: "Voici nos collections les plus populaires:",    
        image: produit1,
        catalogues: ['Cutter & buck', 'Biz', 'Stormtech Performace', 'SS Canada'],
        links: ['https://viewer.zoomcatalog.com/cutter-and-buck-assortment-guide-2024-2025/page/1', 'https://issuu.com/fashionbiznz/docs/2024_fashion_biz_-_ca-fr?fr=xKAE9_zU1NQ', 'https://stormtechperformance.cld.bz/Stormtech-Spring-2025-Collection-FRH', 'https://viewer.zoomcatalog.com/s-and-s-canada-guide-de-style-d-ete-2024/page/1'],
        canada : [true, false, true, true]
    },
    {
        id: 2,
        name: 'Des Accessoires',
        description: "Des casquettes, des tuques, des foulards et bien plus !",    
        image: produit2,
        catalogues: ['AJM', 'DML', 'Headwear'],
        links: ['https://www.calameo.com/ajmintl/read/00018913940884a0cf464', 'https://viewer.zoomcatalog.com/dml-2025-canada', ''],
        canada : [true, true, true]  
    },
    {
        id: 3,
        name: 'Des Produits Éco-responsables',
        description: "Pour acheter des produits de qualité en toute conscience",    
        image: produit3,
        catalogues: ["Attraction", "Manteaux d'hiver klo"],
        links: ['https://viewer.zoomcatalog.com/attraction-2025/page/1','https://cdn.shopify.com/s/fiBusrelles/1/0012/9535/1897/files/KLo_Catalog_2024-25_bookstyle_rvsd_c.pdf?v=1724854414' ],
        canada: [true, true]
    },
    {
        id: 4,
        name: 'Des Produits locaux',
        description: "Nous sommes fier de faire affaire avec des fournisseurs locaux. Repérez le symbole Canadien",    
        image: produit4,
        image2: produit4_2
    },
    {
        id: 5,
        name: 'Et bien plus encore !',
        description: "Des sacs, des glacières ou même des verres et des tasses !",    
        image: produit5,
        catalogues: ["Busrel", "St regis Group", "Urbano", "Sacs Bugatti"],
        links: ['', '','', ''],
        canada: [true, true, true, false]	
    }
]
