const { db } = require("../database/firebase");

const bulkAddRestaurants = async () => {
  const batch = db.batch(); // Initialize a Firestore batch

  // Sample data array
  const restaurants = [
    {
      id: "r1",
      data: {
        name: "La Picá de la Esquina",
        address: "Mackenna 1234, Osorno",
        phone: "+56642233445",
        specialty: "Comida Chilena",
        upTime: "12:00 PM - 10:00 PM",
        website: null,
        priceRange: "5000 - 15000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r1d1",
          data: {
            name: "Cazuela de Vacuno",
            description:
              "Contundente cazuela con vacuno, papa, zapallo y choclo.",
            price: 8500,
            category: "Platos de Fondo",
          },
        },
        {
          id: "r1d2",
          data: {
            name: "Pastel de Choclo",
            description: "Clásico pastel de choclo con pino de carne y pollo.",
            price: 9000,
            category: "Platos de Fondo",
          },
        },
        {
          id: "r1d3",
          data: {
            name: "Lomo a lo Pobre",
            description:
              "Lomo liso, papas fritas, huevo frito y cebolla caramelizada.",
            price: 12500,
            category: "Platos de Fondo",
          },
        },
        {
          id: "r1d4",
          data: {
            name: "Empanada de Pino",
            description: "Empanada frita con pino de carne.",
            price: 3500,
            category: "Entradas",
          },
        },
        {
          id: "r1d5",
          data: {
            name: "Porotos con Riendas",
            description:
              "Plato tradicional chileno con porotos, fideos y longaniza.",
            price: 7500,
            category: "Platos de Fondo",
          },
        },
        {
          id: "r1d6",
          data: {
            name: "Humitas",
            description: "Dos humitas frescas servidas con ensalada chilena.",
            price: 6500,
            category: "Platos de Fondo",
          },
        },
        {
          id: "r1d7",
          data: {
            name: "Paila Marina",
            description: "Sopa marina con variedad de mariscos frescos.",
            price: 11000,
            category: "Platos de Fondo",
          },
        },
        {
          id: "r1d8",
          data: {
            name: "Charquicán",
            description: "Guiso tradicional con carne, papas y verduras.",
            price: 7000,
            category: "Platos de Fondo",
          },
        },
        {
          id: "r1d9",
          data: {
            name: "Ensalada Chilena",
            description: "Tomate con cebolla pluma y cilantro.",
            price: 3000,
            category: "Acompañamientos",
          },
        },
        {
          id: "r1d10",
          data: {
            name: "Mote con Huesillo",
            description: "Bebida tradicional para el postre.",
            price: 3500,
            category: "Postres",
          },
        },
      ],
    },
    {
      id: "r2",
      data: {
        name: "Sushi House Osorno",
        address: "Ramírez 876, Osorno",
        phone: "+56642556677",
        specialty: "Sushi",
        upTime: "01:00 PM - 11:00 PM",
        website: "sushihouse.cl",
        priceRange: "8000 - 25000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: true },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r2d1",
          data: {
            name: "California Roll",
            description: "Kanikama, palta y queso crema, envuelto en sésamo.",
            price: 5500,
            category: "Rolls",
          },
        },
        {
          id: "r2d2",
          data: {
            name: "Avocado Roll",
            description: "Salmón, queso crema y cebollín, envuelto en palta.",
            price: 6500,
            category: "Rolls",
          },
        },
        {
          id: "r2d3",
          data: {
            name: "Tempura Roll",
            description: "Camarón, queso crema y cebollín, frito en tempura.",
            price: 7000,
            category: "Rolls",
          },
        },
        {
          id: "r2d4",
          data: {
            name: "Gohan",
            description:
              "Base de arroz de sushi con pollo teriyaki, palta y sésamo.",
            price: 8000,
            category: "Platos Calientes",
          },
        },
        {
          id: "r2d5",
          data: {
            name: "Sashimi Salmón",
            description: "5 cortes de salmón fresco.",
            price: 6000,
            category: "Sashimi",
          },
        },
        {
          id: "r2d6",
          data: {
            name: "Nigiri Camarón",
            description: "2 bocados de arroz cubiertos con camarón.",
            price: 4000,
            category: "Nigiris",
          },
        },
        {
          id: "r2d7",
          data: {
            name: "Gyozas de Cerdo",
            description: "5 empanaditas japonesas fritas.",
            price: 5000,
            category: "Entradas",
          },
        },
        {
          id: "r2d8",
          data: {
            name: "Yakimeshi",
            description: "Arroz salteado con verduras y pollo.",
            price: 7500,
            category: "Platos Calientes",
          },
        },
        {
          id: "r2d9",
          data: {
            name: "Ceviche Roll",
            description:
              "Reineta, pimentón y cebolla morada, envuelto en nori.",
            price: 7500,
            category: "Rolls",
          },
        },
        {
          id: "r2d10",
          data: {
            name: "Hosomaki Palta",
            description: "Roll delgado con palta.",
            price: 3500,
            category: "Rolls",
          },
        },
      ],
    },
    {
      id: "r3",
      data: {
        name: "Pizzería Nativa",
        address: "Los Carrera 1550, Osorno",
        phone: "+56987654321",
        specialty: "Pizza",
        upTime: "06:00 PM - 12:00 AM",
        website: "pizzerianativa.cl",
        priceRange: "10000 - 20000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r3d1",
          data: {
            name: "Pizza Margarita",
            description: "Salsa de tomate, mozzarella y albahaca.",
            price: 10500,
            category: "Pizzas",
          },
        },
        {
          id: "r3d2",
          data: {
            name: "Pizza Pepperoni",
            description: "Salsa de tomate, mozzarella y pepperoni.",
            price: 12000,
            category: "Pizzas",
          },
        },
        {
          id: "r3d3",
          data: {
            name: "Pizza Napolitana",
            description:
              "Salsa de tomate, mozzarella, tomate en rodajas y aceitunas.",
            price: 12500,
            category: "Pizzas",
          },
        },
        {
          id: "r3d4",
          data: {
            name: "Pizza Española",
            description: "Salsa de tomate, mozzarella, chorizo y pimiento.",
            price: 13500,
            category: "Pizzas",
          },
        },
        {
          id: "r3d5",
          data: {
            name: "Pizza Vegetariana",
            description:
              "Salsa de tomate, mozzarella, champiñones, pimiento, cebolla y aceitunas.",
            price: 13000,
            category: "Pizzas",
          },
        },
        {
          id: "r3d6",
          data: {
            name: "Calzone de Carne",
            description: "Masa de pizza rellena con carne, cebolla y queso.",
            price: 9500,
            category: "Calzones",
          },
        },
        {
          id: "r3d7",
          data: {
            name: "Lasaña Bolognesa",
            description: "Clásica lasaña con salsa bolognesa y bechamel.",
            price: 9000,
            category: "Pastas",
          },
        },
        {
          id: "r3d8",
          data: {
            name: "Focaccia al Ajo",
            description: "Pan plano horneado con ajo y romero.",
            price: 5000,
            category: "Entradas",
          },
        },
        {
          id: "r3d9",
          data: {
            name: "Tiramisú",
            description: "Postre italiano clásico.",
            price: 4500,
            category: "Postres",
          },
        },
        {
          id: "r3d10",
          data: {
            name: "Pizza Hawaiana",
            description: "Salsa de tomate, mozzarella, jamón y piña.",
            price: 12500,
            category: "Pizzas",
          },
        },
      ],
    },
    {
      id: "r4",
      data: {
        name: "Holy Fried Chicken",
        address: "Portales 555, Osorno",
        phone: null,
        specialty: "Pollo Frito",
        upTime: "01:00 PM - 11:00 PM",
        website: null,
        priceRange: "7000 - 18000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r4d1",
          data: {
            name: "Balde 6 Piezas",
            description: "6 piezas de nuestro famoso pollo frito.",
            price: 10990,
            category: "Pollo",
          },
        },
        {
          id: "r4d2",
          data: {
            name: "Balde 12 Piezas",
            description: "12 piezas de nuestro famoso pollo frito.",
            price: 18990,
            category: "Pollo",
          },
        },
        {
          id: "r4d3",
          data: {
            name: "Sándwich Crispy",
            description: "Filete de pollo crispy, lechuga, tomate y mayonesa.",
            price: 6990,
            category: "Sándwiches",
          },
        },
        {
          id: "r4d4",
          data: {
            name: "Papas Fritas Grandes",
            description: "Porción grande de papas fritas.",
            price: 3500,
            category: "Acompañamientos",
          },
        },
        {
          id: "r4d5",
          data: {
            name: "Aros de Cebolla",
            description: "8 aros de cebolla fritos.",
            price: 4000,
            category: "Acompañamientos",
          },
        },
        {
          id: "r4d6",
          data: {
            name: "Ensalada Coleslaw",
            description: "Clásica ensalada de repollo y zanahoria.",
            price: 2500,
            category: "Acompañamientos",
          },
        },
        {
          id: "r4d7",
          data: {
            name: "Tenders de Pollo",
            description: "5 tiras de pollo frito.",
            price: 7500,
            category: "Pollo",
          },
        },
        {
          id: "r4d8",
          data: {
            name: "Combo Individual",
            description: "2 piezas de pollo, papas fritas y bebida.",
            price: 8990,
            category: "Combos",
          },
        },
        {
          id: "r4d9",
          data: {
            name: "Alitas BBQ",
            description: "6 alitas de pollo bañadas en salsa BBQ.",
            price: 7990,
            category: "Pollo",
          },
        },
        {
          id: "r4d10",
          data: {
            name: "Helado",
            description: "Vaso de helado de vainilla.",
            price: 2000,
            category: "Postres",
          },
        },
      ],
    },
    {
      id: "r5",
      data: {
        name: "Loston Burger",
        address: "Patricio Lynch 1339, Osorno",
        phone: "+56911223344",
        specialty: "Hamburguesas",
        upTime: "12:30 PM - 11:00 PM",
        website: "lostonburger.cl",
        priceRange: "8000 - 16000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r5d1",
          data: {
            name: "Burger Clásica",
            description: "Hamburguesa, lechuga, tomate, cebolla y pepinillos.",
            price: 8500,
            category: "Hamburguesas",
          },
        },
        {
          id: "r5d2",
          data: {
            name: "Cheeseburger",
            description: "Clásica con queso cheddar.",
            price: 9000,
            category: "Hamburguesas",
          },
        },
        {
          id: "r5d3",
          data: {
            name: "Bacon Burger",
            description: "Cheeseburger con tocino crujiente.",
            price: 10500,
            category: "Hamburguesas",
          },
        },
        {
          id: "r5d4",
          data: {
            name: "Doble Loston",
            description:
              "Doble hamburguesa, doble queso, tocino y salsa especial.",
            price: 13500,
            category: "Hamburguesas",
          },
        },
        {
          id: "r5d5",
          data: {
            name: "Veggie Burger",
            description:
              "Hamburguesa de lentejas, rúcula, tomate y mayonesa vegana.",
            price: 9500,
            category: "Hamburguesas",
          },
        },
        {
          id: "r5d6",
          data: {
            name: "Papas Loston",
            description: "Papas fritas con queso cheddar fundido y tocino.",
            price: 5500,
            category: "Acompañamientos",
          },
        },
        {
          id: "r5d7",
          data: {
            name: "Milkshake de Chocolate",
            description: "Batido cremoso de helado de chocolate.",
            price: 4500,
            category: "Bebidas",
          },
        },
        {
          id: "r5d8",
          data: {
            name: "Onion Rings",
            description: "Aros de cebolla con salsa BBQ.",
            price: 4000,
            category: "Acompañamientos",
          },
        },
        {
          id: "r5d9",
          data: {
            name: "Ensalada César",
            description: "Lechuga, crutones, queso parmesano y aderezo César.",
            price: 6000,
            category: "Ensaladas",
          },
        },
        {
          id: "r5d10",
          data: {
            name: "Brownie con Helado",
            description:
              "Brownie de chocolate tibio con una bola de helado de vainilla.",
            price: 5000,
            category: "Postres",
          },
        },
      ],
    },
    {
      id: "r6",
      data: {
        name: "El Rincón del Sabor",
        address: "O'Higgins 987, Osorno",
        phone: null,
        specialty: "Comida Casera",
        upTime: "12:00 PM - 04:00 PM",
        website: null,
        priceRange: "4000 - 9000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r6d1",
          data: {
            name: "Menú del Día",
            description: "Plato de fondo, ensalada, pan y pebre.",
            price: 5500,
            category: "Menú",
          },
        },
        {
          id: "r6d2",
          data: {
            name: "Pollo Arvejado",
            description: "Tuto de pollo en guiso de arvejas.",
            price: 6500,
            category: "Platos de Fondo",
          },
        },
        {
          id: "r6d3",
          data: {
            name: "Merluza Frita con Puré",
            description: "Merluza frita con puré de papas casero.",
            price: 7500,
            category: "Platos de Fondo",
          },
        },
        {
          id: "r6d4",
          data: {
            name: "Carne Mechada",
            description: "Carne mechada jugosa con arroz.",
            price: 8000,
            category: "Platos de Fondo",
          },
        },
        {
          id: "r6d5",
          data: {
            name: "Lentejas",
            description: "Guiso de lentejas con longaniza.",
            price: 6000,
            category: "Platos de Fondo",
          },
        },
        {
          id: "r6d6",
          data: {
            name: "Sopaipillas Pasadas",
            description: "5 sopaipillas pasadas en chancaca.",
            price: 4000,
            category: "Postres",
          },
        },
        {
          id: "r6d7",
          data: {
            name: "Leche Asada",
            description: "Postre clásico chileno.",
            price: 3000,
            category: "Postres",
          },
        },
        {
          id: "r6d8",
          data: {
            name: "Pescado al Horno",
            description: "Pescado de temporada al horno con papas.",
            price: 8500,
            category: "Platos de Fondo",
          },
        },
        {
          id: "r6d9",
          data: {
            name: "Tomates Rellenos",
            description: "Tomates rellenos con atún y mayonesa.",
            price: 5500,
            category: "Entradas",
          },
        },
        {
          id: "r6d10",
          data: {
            name: "Bistec a lo Pobre",
            description: "Bistec, papas fritas, huevo y cebolla.",
            price: 9000,
            category: "Platos de Fondo",
          },
        },
      ],
    },
    {
      id: "r7",
      data: {
        name: "Osaka Sushi Delivery",
        address: "Solo Delivery",
        phone: "+56933445566",
        specialty: "Sushi",
        upTime: "05:00 PM - 12:00 AM",
        website: null,
        priceRange: "12000 - 30000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r7d1",
          data: {
            name: "Promo 30 Piezas",
            description: "Selección de rolls del chef.",
            price: 15000,
            category: "Promociones",
          },
        },
        {
          id: "r7d2",
          data: {
            name: "Promo 50 Piezas",
            description: "Variedad de rolls fríos y calientes.",
            price: 25000,
            category: "Promociones",
          },
        },
        {
          id: "r7d3",
          data: {
            name: "Ebi Cheese Roll",
            description: "Camarón y queso crema envuelto en palta.",
            price: 6800,
            category: "Rolls",
          },
        },
        {
          id: "r7d4",
          data: {
            name: "Sake Tempura",
            description: "Salmón, queso crema y cebollín frito en panko.",
            price: 7200,
            category: "Rolls",
          },
        },
        {
          id: "r7d5",
          data: {
            name: "Pulpo a la Parrilla Roll",
            description:
              "Pulpo grillado, palta, envuelto en queso crema y ciboulette.",
            price: 8000,
            category: "Rolls Especiales",
          },
        },
        {
          id: "r7d6",
          data: {
            name: "Gyozas de Camarón",
            description: "5 empanaditas japonesas rellenas de camarón.",
            price: 5500,
            category: "Entradas",
          },
        },
        {
          id: "r7d7",
          data: {
            name: "Temaki Ebi",
            description: "Cono de alga nori relleno de arroz, camarón y palta.",
            price: 5000,
            category: "Temakis",
          },
        },
        {
          id: "r7d8",
          data: {
            name: "Sashimi Mixto",
            description: "Cortes de salmón y atún.",
            price: 9000,
            category: "Sashimi",
          },
        },
        {
          id: "r7d9",
          data: {
            name: "Nigiri de Pulpo",
            description: "2 bocados de arroz cubiertos con pulpo.",
            price: 4500,
            category: "Nigiris",
          },
        },
        {
          id: "r7d10",
          data: {
            name: "Bebida Lata",
            description: "Coca-Cola, Fanta o Sprite.",
            price: 1500,
            category: "Bebidas",
          },
        },
      ],
    },
    {
      id: "r8",
      data: {
        name: "Café Central",
        address: "Eleuterio Ramírez 928, Osorno",
        phone: "+56642234567",
        specialty: "Cafetería",
        upTime: "08:00 AM - 08:00 PM",
        website: "cafecentral.cl",
        priceRange: "3000 - 10000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r8d1",
          data: {
            name: "Café Espresso",
            description: "Café de grano recién molido.",
            price: 2000,
            category: "Café",
          },
        },
        {
          id: "r8d2",
          data: {
            name: "Cappuccino",
            description: "Espresso con leche vaporizada y espuma.",
            price: 2800,
            category: "Café",
          },
        },
        {
          id: "r8d3",
          data: {
            name: "Kuchen de Nuez",
            description: "Trozos de kuchen casero con nueces.",
            price: 4000,
            category: "Pastelería",
          },
        },
        {
          id: "r8d4",
          data: {
            name: "Cheesecake de Frutos Rojos",
            description: "Suave cheesecake con salsa de frutos rojos.",
            price: 4500,
            category: "Pastelería",
          },
        },
        {
          id: "r8d5",
          data: {
            name: "Sándwich Barros Luco",
            description: "Carne a la plancha y queso fundido en pan amasado.",
            price: 6500,
            category: "Sándwiches",
          },
        },
        {
          id: "r8d6",
          data: {
            name: "Jugo Natural de Naranja",
            description: "Jugo de naranja recién exprimido.",
            price: 3500,
            category: "Bebidas",
          },
        },
        {
          id: "r8d7",
          data: {
            name: "Té Ceylan",
            description: "Té negro de alta calidad.",
            price: 2200,
            category: "Té e Infusiones",
          },
        },
        {
          id: "r8d8",
          data: {
            name: "Tostadas con Palta",
            description: "Dos tostadas con palta molida.",
            price: 4000,
            category: "Desayunos",
          },
        },
        {
          id: "r8d9",
          data: {
            name: "Croissant",
            description: "Croissant recién horneado.",
            price: 2500,
            category: "Pastelería",
          },
        },
        {
          id: "r8d10",
          data: {
            name: "Muffin de Chocolate",
            description: "Muffin con chips de chocolate.",
            price: 3000,
            category: "Pastelería",
          },
        },
      ],
    },
    {
      id: "r9",
      data: {
        name: "El Fogón de Pepe",
        address: "Ruta 5 Sur, Km 925, Osorno",
        phone: "+56955667788",
        specialty: "Parrilladas",
        upTime: "12:30 PM - 11:00 PM",
        website: null,
        priceRange: "15000 - 40000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: true },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r9d1",
          data: {
            name: "Parrillada para 2",
            description:
              "Lomo, costillar, prietas, longanizas y papas cocidas.",
            price: 35000,
            category: "Parrilladas",
          },
        },
        {
          id: "r9d2",
          data: {
            name: "Lomo Vetado a la Parrilla",
            description: "350gr de lomo vetado con acompañamiento.",
            price: 18000,
            category: "Carnes",
          },
        },
        {
          id: "r9d3",
          data: {
            name: "Costillar de Cerdo",
            description: "Costillar de cerdo asado lentamente.",
            price: 16000,
            category: "Carnes",
          },
        },
        {
          id: "r9d4",
          data: {
            name: "Prietas con Papas Cocidas",
            description: "Dos prietas artesanales con papas cocidas.",
            price: 9000,
            category: "Platos de Fondo",
          },
        },
        {
          id: "r9d5",
          data: {
            name: "Provoleta al Orégano",
            description: "Queso provolone a la parrilla con orégano.",
            price: 8500,
            category: "Entradas",
          },
        },
        {
          id: "r9d6",
          data: {
            name: "Ensalada a la Chilena",
            description: "Tomate, cebolla y cilantro.",
            price: 4000,
            category: "Acompañamientos",
          },
        },
        {
          id: "r9d7",
          data: {
            name: "Papas Fritas",
            description: "Porción de papas fritas caseras.",
            price: 4500,
            category: "Acompañamientos",
          },
        },
        {
          id: "r9d8",
          data: {
            name: "Vino de la Casa (Copa)",
            description: "Copa de vino tinto o blanco.",
            price: 4000,
            category: "Bebidas",
          },
        },
        {
          id: "r9d9",
          data: {
            name: "Chorrillana",
            description: "Papas fritas con carne, cebolla y huevo frito.",
            price: 15000,
            category: "Platos para Compartir",
          },
        },
        {
          id: "r9d10",
          data: {
            name: "Mousse de Chocolate",
            description: "Suave mousse de chocolate casero.",
            price: 5000,
            category: "Postres",
          },
        },
      ],
    },
    {
      id: "r10",
      data: {
        name: "El Sabroso Completo",
        address: "Matta 678, Osorno",
        phone: null,
        specialty: "Comida Rápida",
        upTime: "11:00 AM - 01:00 AM",
        website: null,
        priceRange: "3000 - 8000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r10d1",
          data: {
            name: "Completo Italiano",
            description: "Vienesa, tomate, palta y mayonesa.",
            price: 3500,
            category: "Completos",
          },
        },
        {
          id: "r10d2",
          data: {
            name: "Completo Dinámico",
            description:
              "Vienesa, tomate, palta, chucrut, salsa americana y mayonesa.",
            price: 4000,
            category: "Completos",
          },
        },
        {
          id: "r10d3",
          data: {
            name: "As de Vacuno",
            description:
              "Carne de vacuno en trozos con los mismos ingredientes del completo.",
            price: 5500,
            category: "Ases",
          },
        },
        {
          id: "r10d4",
          data: {
            name: "Churrasco Italiano",
            description: "Bistec, tomate, palta y mayonesa en pan frica.",
            price: 6000,
            category: "Sándwiches",
          },
        },
        {
          id: "r10d5",
          data: {
            name: "Papas Fritas Medianas",
            description: "Porción mediana de papas fritas.",
            price: 2500,
            category: "Acompañamientos",
          },
        },
        {
          id: "r10d6",
          data: {
            name: "Empanada de Queso Frita",
            description: "Empanada frita rellena de queso.",
            price: 2000,
            category: "Frituras",
          },
        },
        {
          id: "r10d7",
          data: {
            name: "Sopaipilla con Mostaza",
            description: "Clásica sopaipilla pasada sureña.",
            price: 1000,
            category: "Frituras",
          },
        },
        {
          id: "r10d8",
          data: {
            name: "Bebida 1.5L",
            description: "Bebida desechable línea Coca-Cola.",
            price: 2500,
            category: "Bebidas",
          },
        },
        {
          id: "r10d9",
          data: {
            name: "Completo a lo Pobre",
            description: "Vienesa, cebolla frita y huevo frito.",
            price: 4500,
            category: "Completos",
          },
        },
        {
          id: "r10d10",
          data: {
            name: "Fricandela Completa",
            description: "Hamburguesa casera con ingredientes de completo.",
            price: 5000,
            category: "Sándwiches",
          },
        },
      ],
    },
    {
      id: "r11",
      data: {
        name: "ToroMoro",
        address: "Av. Cesar Ercilla 1448",
        phone: "+56987654321",
        specialty: "Carnes",
        upTime: "1 PM - 11 PM",
        website: "toromoro.cl",
        priceRange: "15000-30000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: true },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r11d1",
          data: {
            name: "Lomo Vetado 300gr",
            description: "Corte premium con papas rústicas y ensalada.",
            price: 22000,
            category: "Carnes",
          },
        },
        {
          id: "r11d2",
          data: {
            name: "Entraña a la Parrilla",
            description: "Acompañado de puré de papas y chimichurri.",
            price: 25000,
            category: "Carnes",
          },
        },
        {
          id: "r11d3",
          data: {
            name: "Parrillada para 2",
            description:
              "Variedad de carnes, chorizo, morcilla y acompañamientos.",
            price: 30000,
            category: "Parrilladas",
          },
        },
        {
          id: "r11d4",
          data: {
            name: "Costillar de Cerdo",
            description: "Marinado con miel y mostaza, con papas gratinadas.",
            price: 18000,
            category: "Carnes",
          },
        },
        {
          id: "r11d5",
          data: {
            name: "Filete Mignon",
            description: "200gr con salsa de hongos y vegetales salteados.",
            price: 28000,
            category: "Cortes Finos",
          },
        },
      ],
    },
    {
      id: "r12",
      data: {
        name: "Wambo",
        address: "Los Carrera 1475",
        phone: null,
        specialty: "Comida Rápida",
        upTime: "12 PM - 10 PM",
        website: null,
        priceRange: "6000-12000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r12d1",
          data: {
            name: "Wambo Burger",
            description: "Doble carne, queso cheddar, tocino y salsa especial.",
            price: 8000,
            category: "Hamburguesas",
          },
        },
        {
          id: "r12d2",
          data: {
            name: "Churrasco Italiano",
            description: "Lomo vetado, palta, tomate y mayonesa.",
            price: 7000,
            category: "Sándwiches",
          },
        },
        {
          id: "r12d3",
          data: {
            name: "Papas Wambo",
            description: "Papas fritas con cheddar, tocino y verdeo.",
            price: 5000,
            category: "Acompañamientos",
          },
        },
        {
          id: "r12d4",
          data: {
            name: "Hot Dog Gigante",
            description: "Dos vienesas, chucrut, salsa americana y tomate.",
            price: 6000,
            category: "Completos",
          },
        },
        {
          id: "r12d5",
          data: {
            name: "Nuggets de Pollo",
            description: "8 unidades con salsa BBQ o mostaza-miel.",
            price: 4500,
            category: "Entradas",
          },
        },
      ],
    },
    {
      id: "r13",
      data: {
        name: "Bitte Brot",
        address: "Av. Manuel Rodriguez 1040",
        phone: "+56642315690",
        specialty: "Cafetería",
        upTime: "9 AM - 8 PM",
        website: "bittebrot.cl",
        priceRange: "4000-12000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: false },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r13d1",
          data: {
            name: "Torta Selva Negra",
            description: "Clásico alemán con cerezas y crema.",
            price: 6000,
            category: "Repostería",
          },
        },
        {
          id: "r13d2",
          data: {
            name: "Sandwich Club",
            description: "Pollo, tocino, huevo y vegetales en pan de molde.",
            price: 7500,
            category: "Sándwiches",
          },
        },
        {
          id: "r13d3",
          data: {
            name: "Café Vienés",
            description: "Espresso con crema batida y chocolate.",
            price: 4000,
            category: "Bebidas Calientes",
          },
        },
        {
          id: "r13d4",
          data: {
            name: "Strudel de Manzana",
            description: "Masa hojaldrada con relleno de manzana y canela.",
            price: 5000,
            category: "Repostería",
          },
        },
        {
          id: "r13d5",
          data: {
            name: "Té Premium",
            description:
              "Selección de tés importados (Earl Grey, Chai, Frutales).",
            price: 3500,
            category: "Bebidas Calientes",
          },
        },
      ],
    },
    {
      id: "r14",
      data: {
        name: "Flow Bar",
        address: "Av. Republica 399",
        phone: null,
        specialty: "Bar",
        upTime: "6 PM - 2 AM",
        website: null,
        priceRange: "8000-20000",
        services: [
          { delivery: false },
          { takeOut: false },
          { booking: true },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r14d1",
          data: {
            name: "Pisco Sour Clásico",
            description: "Pisco, limón, azúcar y clara de huevo.",
            price: 8000,
            category: "Cócteles",
          },
        },
        {
          id: "r14d2",
          data: {
            name: "Tabla de Quesos",
            description:
              "Variedad de quesos nacionales con frutos secos y miel.",
            price: 15000,
            category: "Tablas",
          },
        },
        {
          id: "r14d3",
          data: {
            name: "Mojito",
            description: "Ron, menta, limón, azúcar y soda.",
            price: 9000,
            category: "Cócteles",
          },
        },
        {
          id: "r14d4",
          data: {
            name: "Nachos Supreme",
            description: "Nachos con carne, queso, guacamole y sour cream.",
            price: 12000,
            category: "Snacks",
          },
        },
        {
          id: "r14d5",
          data: {
            name: "Cerveza Artesanal",
            description: "Selección local (Golden Ale, Stout, IPA).",
            price: 6000,
            category: "Cervezas",
          },
        },
      ],
    },
    {
      id: "r15",
      data: {
        name: "Altabar",
        address: "Av. Cesar Ercilla 1205",
        phone: null,
        specialty: "Bar",
        upTime: "5 PM - 1 AM",
        website: null,
        priceRange: "10000-25000",
        services: [
          { delivery: false },
          { takeOut: false },
          { booking: true },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r15d1",
          data: {
            name: "Old Fashioned",
            description: "Bourbon, azúcar, bitters y twist de naranja.",
            price: 12000,
            category: "Cócteles Clásicos",
          },
        },
        {
          id: "r15d2",
          data: {
            name: "Margarita",
            description: "Tequila, triple sec y limón.",
            price: 10000,
            category: "Cócteles",
          },
        },
        {
          id: "r15d3",
          data: {
            name: "Tabla Mediterránea",
            description: "Hummus, aceitunas, pan pita y antipasto.",
            price: 18000,
            category: "Tablas",
          },
        },
        {
          id: "r15d4",
          data: {
            name: "Whisky Premium",
            description: "Selección de single malts (12 años mínimo).",
            price: 25000,
            category: "Destilados",
          },
        },
        {
          id: "r15d5",
          data: {
            name: "Piña Colada",
            description: "Ron, crema de coco y jugo de piña.",
            price: 9000,
            category: "Cócteles Tropicales",
          },
        },
      ],
    },
    {
      id: "r16",
      data: {
        name: "Ishin Sushi",
        address: "Los Carrera 1375",
        phone: "+56958473625",
        specialty: "Sushi",
        upTime: "1 PM - 11 PM",
        website: null,
        priceRange: "10000-28000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r16d1",
          data: {
            name: "Roll Tempura",
            description: "Relleno de camarón tempura con palta y queso crema.",
            price: 12000,
            category: "Rolls Especiales",
          },
        },
        {
          id: "r16d2",
          data: {
            name: "Sashimi Mixto",
            description: "12 piezas de salmón, atún y pescado blanco.",
            price: 18000,
            category: "Sashimi",
          },
        },
        {
          id: "r16d3",
          data: {
            name: "Roll California",
            description: "Palta, pepino y surimi con huevas de tobiko.",
            price: 10000,
            category: "Rolls Clásicos",
          },
        },
        {
          id: "r16d4",
          data: {
            name: "Nigiri Mix",
            description: "6 piezas (salmón, atún, camarón y pescado blanco).",
            price: 15000,
            category: "Nigiri",
          },
        },
        {
          id: "r16d5",
          data: {
            name: "Miso Soup",
            description: "Sopa tradicional con tofu y algas wakame.",
            price: 4000,
            category: "Entradas",
          },
        },
      ],
    },
    {
      id: "r17",
      data: {
        name: "Huaso Samurai",
        address: "Av. Manuel Rodriguez 1082",
        phone: null,
        specialty: "Sushi",
        upTime: "12 PM - 11 PM",
        website: null,
        priceRange: "9000-25000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r17d1",
          data: {
            name: "Roll Chileno",
            description: "Relleno de lomo vetado, palta y merkén.",
            price: 11000,
            category: "Rolls Fusión",
          },
        },
        {
          id: "r17d2",
          data: {
            name: "Sushi Burger",
            description:
              "Hamburguesa de arroz sushi con relleno de salmón o pollo.",
            price: 9000,
            category: "Fusión",
          },
        },
        {
          id: "r17d3",
          data: {
            name: "Roll Acevichado",
            description: "Relleno de camarón con salsa acevichada.",
            price: 13000,
            category: "Rolls Especiales",
          },
        },
        {
          id: "r17d4",
          data: {
            name: "Gyoza de Cerdo",
            description:
              "Empanadillas japonesas al vapor o fritas (6 unidades).",
            price: 7000,
            category: "Entradas",
          },
        },
        {
          id: "r17d5",
          data: {
            name: "Temaki Salmón",
            description: "Cono de alga nori relleno de salmón, palta y arroz.",
            price: 8000,
            category: "Temaki",
          },
        },
      ],
    },
    {
      id: "r18",
      data: {
        name: "Sushi Natsuki",
        address: "Angulo 758",
        phone: null,
        specialty: "Sushi",
        upTime: "2 PM - 10 PM",
        website: null,
        priceRange: "11000-30000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r18d1",
          data: {
            name: "Roll Rainbow",
            description:
              "Roll california cubierto con láminas de pescado variado.",
            price: 15000,
            category: "Rolls Premium",
          },
        },
        {
          id: "r18d2",
          data: {
            name: "Barca Sashimi",
            description: "20 piezas de sashimi fresco con decoración temática.",
            price: 30000,
            category: "Sashimi",
          },
        },
        {
          id: "r18d3",
          data: {
            name: "Roll Dragon",
            description:
              "Relleno de anguila y palta, cubierto con salsa unagi.",
            price: 14000,
            category: "Rolls Especiales",
          },
        },
        {
          id: "r18d4",
          data: {
            name: "Edamame",
            description: "Vainas de soja con sal marina.",
            price: 4000,
            category: "Entradas",
          },
        },
        {
          id: "r18d5",
          data: {
            name: "Uramaki Philadelphia",
            description: "Salmón ahumado, queso crema y pepino.",
            price: 11000,
            category: "Rolls Clásicos",
          },
        },
      ],
    },
    {
      id: "r19",
      data: {
        name: "Papa Johns",
        address: "Av. Juan Mackenna 1198",
        phone: "+56642240200",
        specialty: "Pizza",
        upTime: "12 PM - 11 PM",
        website: "papajohns.cl",
        priceRange: "12000-25000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r19d1",
          data: {
            name: "Pizza Pepperoni",
            description: "Clásica con doble pepperoni y extra queso.",
            price: 12000,
            category: "Pizzas Clásicas",
          },
        },
        {
          id: "r19d2",
          data: {
            name: "Pizza Hawaiana",
            description: "Jamón, piña y queso mozzarella.",
            price: 13000,
            category: "Pizzas Dulces",
          },
        },
        {
          id: "r19d3",
          data: {
            name: "Pizza Suprema",
            description: "Pepperoni, champiñones, pimientos y cebolla.",
            price: 15000,
            category: "Pizzas Vegetales",
          },
        },
        {
          id: "r19d4",
          data: {
            name: "Aros de Cebolla",
            description: "Crujientes con salsa BBQ.",
            price: 5000,
            category: "Acompañamientos",
          },
        },
        {
          id: "r19d5",
          data: {
            name: "Pizza BBQ Chicken",
            description: "Pollo, cebolla morada y salsa BBQ.",
            price: 16000,
            category: "Pizzas Especiales",
          },
        },
      ],
    },
    {
      id: "r20",
      data: {
        name: "Gohan Osorno",
        address: "Cochrane 858",
        phone: null,
        specialty: "Comida Japonesa",
        upTime: "1 PM - 10 PM",
        website: null,
        priceRange: "8000-20000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r20d1",
          data: {
            name: "Ramen Tonkotsu",
            description: "Fideos con caldo de cerdo, huevo y chashu.",
            price: 12000,
            category: "Ramen",
          },
        },
        {
          id: "r20d2",
          data: {
            name: "Donburi de Salmón",
            description: "Bowl de arroz con salmón fresco y vegetales.",
            price: 10000,
            category: "Donburi",
          },
        },
        {
          id: "r20d3",
          data: {
            name: "Karaage",
            description: "Pollo frito estilo japonés con salsa teriyaki.",
            price: 8000,
            category: "Entradas",
          },
        },
        {
          id: "r20d4",
          data: {
            name: "Yakisoba",
            description: "Fideos salteados con vegetales y carne.",
            price: 9000,
            category: "Fideos",
          },
        },
        {
          id: "r20d5",
          data: {
            name: "Takoyaki",
            description: "Bolitas de pulpo con salsa okonomiyaki (6 unidades).",
            price: 7000,
            category: "Entradas",
          },
        },
      ],
    },
    {
      id: "r21",
      data: {
        name: "La Pica del Pollo",
        address: "Erazurriz 1290",
        phone: null,
        specialty: "Pollo Frito",
        upTime: "12 PM - 9 PM",
        website: null,
        priceRange: "5000-15000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r21d1",
          data: {
            name: "Pollo Broaster",
            description: "8 presas con papas fritas y ensalada.",
            price: 12000,
            category: "Combos",
          },
        },
        {
          id: "r21d2",
          data: {
            name: "Alitas BBQ",
            description: "10 alitas con salsa BBQ o buffalo.",
            price: 8000,
            category: "Alitas",
          },
        },
        {
          id: "r21d3",
          data: {
            name: "Sandwich de Pollo",
            description: "Pechuga empanizada con lechuga y mayonesa.",
            price: 5000,
            category: "Sándwiches",
          },
        },
        {
          id: "r21d4",
          data: {
            name: "Papa Rellena",
            description: "Papa horneada con pollo desmenuzado y queso.",
            price: 6000,
            category: "Acompañamientos",
          },
        },
        {
          id: "r21d5",
          data: {
            name: "Menú Infantil",
            description: "4 nuggets, papas y jugo.",
            price: 4500,
            category: "Combos",
          },
        },
      ],
    },
    {
      id: "r22",
      data: {
        name: "El Tenedor de Palo",
        address: "Francisco Bilbao 1129",
        phone: "+56642231212",
        specialty: "Comida Chilena",
        upTime: "12 PM - 5 PM",
        website: null,
        priceRange: "7000-18000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: true },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r22d1",
          data: {
            name: "Cazuela de Vacuno",
            description: "Con choclo, zapallo y arroz.",
            price: 8000,
            category: "Platos Típicos",
          },
        },
        {
          id: "r22d2",
          data: {
            name: "Pastel de Choclo",
            description: "Clásico con pino y huevo.",
            price: 7000,
            category: "Platos Típicos",
          },
        },
        {
          id: "r22d3",
          data: {
            name: "Empanadas de Pino",
            description: "Fritas u horneadas (2 unidades).",
            price: 5000,
            category: "Entradas",
          },
        },
        {
          id: "r22d4",
          data: {
            name: "Chorrillana",
            description: "Papas fritas, carne, huevo y cebolla.",
            price: 12000,
            category: "Platos para Compartir",
          },
        },
        {
          id: "r22d5",
          data: {
            name: "Porotos con Riendas",
            description: "Con tallarines y longaniza.",
            price: 7500,
            category: "Platos Típicos",
          },
        },
      ],
    },
    {
      id: "r23",
      data: {
        name: "Sabor Oriental",
        address: "Portales 872",
        phone: null,
        specialty: "Comida China",
        upTime: "1 PM - 10 PM",
        website: null,
        priceRange: "8000-22000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r23d1",
          data: {
            name: "Arroz Frito Tres Delicias",
            description: "Con jamón, pollo y camarones.",
            price: 8000,
            category: "Arroces",
          },
        },
        {
          id: "r23d2",
          data: {
            name: "Tallarines Saltados",
            description: "Con carne, pimiento y salsa de ostión.",
            price: 9000,
            category: "Fideos",
          },
        },
        {
          id: "r23d3",
          data: {
            name: "Cerdo Agridulce",
            description: "Con piña, pimiento y salsa especial.",
            price: 10000,
            category: "Carnes",
          },
        },
        {
          id: "r23d4",
          data: {
            name: "Wantán Frito",
            description: "8 unidades con salsa agridulce.",
            price: 6000,
            category: "Entradas",
          },
        },
        {
          id: "r23d5",
          data: {
            name: "Pollo Kung Pao",
            description: "Con maní y vegetales picantes.",
            price: 9500,
            category: "Platos Especiales",
          },
        },
      ],
    },
    {
      id: "r24",
      data: {
        name: "La Vaca Loca",
        address: "Ruta 215, Km 5",
        phone: null,
        specialty: "Parrilladas",
        upTime: "1 PM - 11 PM",
        website: null,
        priceRange: "18000-45000",
        services: [
          { delivery: false },
          { takeOut: false },
          { booking: true },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r24d1",
          data: {
            name: "Parrillada Familiar",
            description: "Carnes variadas, chorizos, morcilla y achuras.",
            price: 45000,
            category: "Parrilladas",
          },
        },
        {
          id: "r24d2",
          data: {
            name: "Costillar BBQ",
            description: "Estilo americano con salsa ahumada.",
            price: 22000,
            category: "Carnes",
          },
        },
        {
          id: "r24d3",
          data: {
            name: "Entraña a la Pimienta",
            description: "Con salsa de pimienta negra y papas dauphine.",
            price: 25000,
            category: "Cortes",
          },
        },
        {
          id: "r24d4",
          data: {
            name: "Choripán Gourmet",
            description: "Chorizo argentino con pebre y chimichurri.",
            price: 8000,
            category: "Sándwiches",
          },
        },
        {
          id: "r24d5",
          data: {
            name: "Ensalada de la Casa",
            description: "Lechuga, tomate, palta y nueces.",
            price: 7000,
            category: "Ensaladas",
          },
        },
      ],
    },
    {
      id: "r25",
      data: {
        name: "Burgerlandia",
        address: "Ramírez 1010",
        phone: null,
        specialty: "Hamburguesas",
        upTime: "1 PM - 12 AM",
        website: null,
        priceRange: "7000-15000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r25d1",
          data: {
            name: "Clásica XL",
            description: "Doble carne, queso, lechuga y tomate.",
            price: 8000,
            category: "Hamburguesas",
          },
        },
        {
          id: "r25d2",
          data: {
            name: "Bacon King",
            description: "Triple carne, triple bacon y salsa BBQ.",
            price: 12000,
            category: "Hamburguesas",
          },
        },
        {
          id: "r25d3",
          data: {
            name: "Churrasco Burger",
            description: "Lomo vetado, palta y mayonesa casera.",
            price: 10000,
            category: "Hamburguesas Especiales",
          },
        },
        {
          id: "r25d4",
          data: {
            name: "Papas Cheddar",
            description: "Con tocino y cheddar derretido.",
            price: 5000,
            category: "Acompañamientos",
          },
        },
        {
          id: "r25d5",
          data: {
            name: "Onion Rings",
            description: "Aros de cebolla empanizados.",
            price: 4000,
            category: "Acompañamientos",
          },
        },
      ],
    },
    {
      id: "r26",
      data: {
        name: "Café del Sur",
        address: "Mackenna 850",
        phone: null,
        specialty: "Cafetería",
        upTime: "8:30 AM - 8 PM",
        website: null,
        priceRange: "3500-11000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r26d1",
          data: {
            name: "Café del Sur",
            description: "Blend exclusivo con notas de chocolate y avellana.",
            price: 3500,
            category: "Cafés",
          },
        },
        {
          id: "r26d2",
          data: {
            name: "Tostadas Mixtas",
            description: "Pan integral con palta, huevo y tomate.",
            price: 6000,
            category: "Desayunos",
          },
        },
        {
          id: "r26d3",
          data: {
            name: "Cheesecake de Frutos Rojos",
            description: "Porción individual con coulis.",
            price: 5000,
            category: "Repostería",
          },
        },
        {
          id: "r26d4",
          data: {
            name: "Chocolate Caliente Vienés",
            description: "Con crema batida y canela.",
            price: 4500,
            category: "Bebidas Calientes",
          },
        },
        {
          id: "r26d5",
          data: {
            name: "Jugo Natural",
            description: "Naranja, piña o frutilla.",
            price: 3000,
            category: "Bebidas Frías",
          },
        },
      ],
    },
    {
      id: "r27",
      data: {
        name: "El Mesón del Chef",
        address: "Lord Cochrane 560",
        phone: null,
        specialty: "Comida de Autor",
        upTime: "7 PM - 11 PM",
        website: "mesondelchef.cl",
        priceRange: "20000-50000",
        services: [
          { delivery: false },
          { takeOut: false },
          { booking: true },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r27d1",
          data: {
            name: "Risotto de Hongos",
            description: "Con trufa negra y parmesano reggiano.",
            price: 22000,
            category: "Platos de Autor",
          },
        },
        {
          id: "r27d2",
          data: {
            name: "Ossobuco al Vino Tinto",
            description: "Con puré de papas con ajo confitado.",
            price: 28000,
            category: "Platos Principales",
          },
        },
        {
          id: "r27d3",
          data: {
            name: "Carpaccio de Res",
            description: "Con rúcula, parmesano y alcaparras.",
            price: 18000,
            category: "Entradas",
          },
        },
        {
          id: "r27d4",
          data: {
            name: "Soufflé de Chocolate",
            description: "Con helado de vainilla y frutos rojos.",
            price: 12000,
            category: "Postres",
          },
        },
        {
          id: "r27d5",
          data: {
            name: "Degustación de Vinos",
            description: "3 copas de vinos premium con maridaje.",
            price: 25000,
            category: "Bebidas",
          },
        },
      ],
    },
    {
      id: "r28",
      data: {
        name: "Pastas de la Nona",
        address: "Guillermo Bühler 1830",
        phone: null,
        specialty: "Pastas",
        upTime: "12 PM - 4 PM, 7 PM - 10 PM",
        website: null,
        priceRange: "9000-20000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: true },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r28d1",
          data: {
            name: "Lasagna Bolognesa",
            description: "Clásica con carne, salsa bechamel y queso gratinado.",
            price: 12000,
            category: "Pastas",
          },
        },
        {
          id: "r28d2",
          data: {
            name: "Ñoquis de Papa",
            description: "Con salsa pomodoro o pesto.",
            price: 10000,
            category: "Pastas Frescas",
          },
        },
        {
          id: "r28d3",
          data: {
            name: "Raviolis de Ricotta",
            description: "Con salsa de nuez y espinacas.",
            price: 11000,
            category: "Pastas Rellenas",
          },
        },
        {
          id: "r28d4",
          data: {
            name: "Spaghetti Carbonara",
            description: "Con panceta, huevo y queso parmesano.",
            price: 11000,
            category: "Pastas",
          },
        },
        {
          id: "r28d5",
          data: {
            name: "Tiramisú",
            description: "Clásico italiano con café y cacao.",
            price: 7000,
            category: "Postres",
          },
        },
      ],
    },
    {
      id: "r29",
      data: {
        name: "Mariscos y Algo Más",
        address: "Mercado Municipal, Local 25",
        phone: null,
        specialty: "Mariscos",
        upTime: "11 AM - 5 PM",
        website: null,
        priceRange: "10000-25000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r29d1",
          data: {
            name: "Ceviche Clásico",
            description: "Filete de reineta, limón, cebolla y cilantro.",
            price: 12000,
            category: "Platos Fríos",
          },
        },
        {
          id: "r29d2",
          data: {
            name: "Paila Marina",
            description: "Mezcla de mariscos con caldo y vino blanco.",
            price: 15000,
            category: "Platos Calientes",
          },
        },
        {
          id: "r29d3",
          data: {
            name: "Chupe de Locos",
            description: "Con pan batido y queso gratinado.",
            price: 18000,
            category: "Platos Típicos",
          },
        },
        {
          id: "r29d4",
          data: {
            name: "Machas a la Parmesana",
            description: "6 unidades con queso parmesano gratinado.",
            price: 14000,
            category: "Entradas",
          },
        },
        {
          id: "r29d5",
          data: {
            name: "Camarones al Ajillo",
            description: "Con arroz blanco y perejil.",
            price: 16000,
            category: "Platos Principales",
          },
        },
      ],
    },
    {
      id: "r30",
      data: {
        name: "Taco Fiesta",
        address: "Manuel Antonio Matta 899",
        phone: null,
        specialty: "Comida Mexicana",
        upTime: "6 PM - 12 AM",
        website: null,
        priceRange: "7000-18000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r30d1",
          data: {
            name: "Tacos al Pastor",
            description: "3 unidades con carne adobada y piña.",
            price: 9000,
            category: "Tacos",
          },
        },
        {
          id: "r30d2",
          data: {
            name: "Burrito Gigante",
            description: "Relleno de carne, frijoles, arroz y guacamole.",
            price: 12000,
            category: "Platos Fuertes",
          },
        },
        {
          id: "r30d3",
          data: {
            name: "Nachos Supreme",
            description: "Con carne molida, queso, jalapeños y frijoles.",
            price: 10000,
            category: "Entradas",
          },
        },
        {
          id: "r30d4",
          data: {
            name: "Quesadilla de Huitlacoche",
            description: "Con hongos de maíz y queso oaxaca.",
            price: 8000,
            category: "Platos Vegetarianos",
          },
        },
        {
          id: "r30d5",
          data: {
            name: "Churros con Chocolate",
            description: "6 unidades con salsa de chocolate espeso.",
            price: 6000,
            category: "Postres",
          },
        },
      ],
    },
    {
      id: "r31",
      data: {
        name: "India Mágica",
        address: "Freire 740",
        phone: null,
        specialty: "Comida India",
        upTime: "1 PM - 10 PM",
        website: null,
        priceRange: "12000-28000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: true },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r31d1",
          data: {
            name: "Butter Chicken",
            description:
              "Pollo en salsa de mantequilla, tomate y especias. Acompañado de arroz basmati.",
            price: 15000,
            category: "Platos Principales",
          },
        },
        {
          id: "r31d2",
          data: {
            name: "Palak Paneer",
            description: "Queso fresco en salsa de espinacas y especias.",
            price: 12000,
            category: "Vegetarianos",
          },
        },
        {
          id: "r31d3",
          data: {
            name: "Naan Tradicional",
            description: "Pan indio cocido en horno tandoor.",
            price: 4000,
            category: "Acompañamientos",
          },
        },
        {
          id: "r31d4",
          data: {
            name: "Samosa",
            description: "Empanadillas de vegetales y especias (2 unidades).",
            price: 6000,
            category: "Entradas",
          },
        },
        {
          id: "r31d5",
          data: {
            name: "Lassi Mango",
            description: "Bebida tradicional de yogur con mango.",
            price: 5000,
            category: "Bebidas",
          },
        },
      ],
    },
    {
      id: "r32",
      data: {
        name: "El Griego",
        address: "Plaza de Armas 1",
        phone: null,
        specialty: "Comida Griega",
        upTime: "12 PM - 11 PM",
        website: null,
        priceRange: "10000-25000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: true },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r32d1",
          data: {
            name: "Gyros",
            description: "Pan pita con carne, tzatziki, tomate y cebolla.",
            price: 10000,
            category: "Platos Principales",
          },
        },
        {
          id: "r32d2",
          data: {
            name: "Moussaka",
            description: "Lasaña griega con berenjenas y carne molida.",
            price: 12000,
            category: "Especialidades",
          },
        },
        {
          id: "r32d3",
          data: {
            name: "Ensalada Griega",
            description: "Tomate, pepino, aceitunas y queso feta.",
            price: 8000,
            category: "Ensaladas",
          },
        },
        {
          id: "r32d4",
          data: {
            name: "Dolmades",
            description:
              "Hojas de parra rellenas de arroz y hierbas (6 unidades).",
            price: 7000,
            category: "Entradas",
          },
        },
        {
          id: "r32d5",
          data: {
            name: "Baklava",
            description: "Postre de hojaldre con nueces y miel.",
            price: 5000,
            category: "Postres",
          },
        },
      ],
    },
    {
      id: "r33",
      data: {
        name: "Rápido y Sabroso",
        address: "Terminal de Buses",
        phone: null,
        specialty: "Comida Rápida",
        upTime: "24 Horas",
        website: null,
        priceRange: "2000-7000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r33d1",
          data: {
            name: "Hamburguesa Simple",
            description: "Carne, lechuga, tomate y mayonesa.",
            price: 3000,
            category: "Hamburguesas",
          },
        },
        {
          id: "r33d2",
          data: {
            name: "Hot Dog",
            description: "Vienesa, chucrut y salsa americana.",
            price: 2500,
            category: "Completos",
          },
        },
        {
          id: "r33d3",
          data: {
            name: "Sandwich de Pollo",
            description: "Pechuga de pollo con lechuga y mayonesa.",
            price: 3500,
            category: "Sándwiches",
          },
        },
        {
          id: "r33d4",
          data: {
            name: "Papas Fritas",
            description: "Porción individual con ketchup.",
            price: 2000,
            category: "Acompañamientos",
          },
        },
        {
          id: "r33d5",
          data: {
            name: "Bebida 500ml",
            description: "Gaseosa o jugo.",
            price: 1500,
            category: "Bebidas",
          },
        },
      ],
    },
    {
      id: "r34",
      data: {
        name: "Sabor a Mar",
        address: "Cochrane 550",
        phone: null,
        specialty: "Pescados y Mariscos",
        upTime: "12 PM - 4 PM",
        website: null,
        priceRange: "12000-30000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r34d1",
          data: {
            name: "Congrio Frito",
            description: "Acompañado de ensalada y arroz.",
            price: 15000,
            category: "Platos Principales",
          },
        },
        {
          id: "r34d2",
          data: {
            name: "Marlin Ahumado",
            description: "Con puré de papas y espárragos.",
            price: 18000,
            category: "Especialidades",
          },
        },
        {
          id: "r34d3",
          data: {
            name: "Chupe de Mariscos",
            description: "Crema de mariscos con pan batido.",
            price: 12000,
            category: "Sopas",
          },
        },
        {
          id: "r34d4",
          data: {
            name: "Empanadas de Mariscos",
            description: "Rellenas de machas y queso (2 unidades).",
            price: 8000,
            category: "Entradas",
          },
        },
        {
          id: "r34d5",
          data: {
            name: "Ceviche Mixto",
            description: "Pescado, camarones y mejillones.",
            price: 14000,
            category: "Platos Fríos",
          },
        },
      ],
    },
    {
      id: "r35",
      data: {
        name: "Punto Vegano",
        address: "Portales 990",
        phone: null,
        specialty: "Comida Vegana",
        upTime: "11 AM - 8 PM",
        website: "punto-vegano.cl",
        priceRange: "8000-18000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r35d1",
          data: {
            name: "Bowl Vegano",
            description: "Quinoa, garbanzos, palta y vegetales frescos.",
            price: 10000,
            category: "Platos Principales",
          },
        },
        {
          id: "r35d2",
          data: {
            name: "Hamburguesa de Lentejas",
            description: "Con pan integral y acompañamientos.",
            price: 9000,
            category: "Hamburguesas",
          },
        },
        {
          id: "r35d3",
          data: {
            name: "Lasagna Vegana",
            description: "Con berenjenas, tofu y salsa de tomate.",
            price: 12000,
            category: "Pastas",
          },
        },
        {
          id: "r35d4",
          data: {
            name: "Leche Dorada",
            description: "Bebida de cúrcuma y leche vegetal.",
            price: 5000,
            category: "Bebidas",
          },
        },
        {
          id: "r35d5",
          data: {
            name: "Brownie Sin Gluten",
            description: "Postre de chocolate con harina de almendras.",
            price: 6000,
            category: "Postres",
          },
        },
      ],
    },
    {
      id: "r36",
      data: {
        name: "El Emporio del Sándwich",
        address: "Ramírez 1150",
        phone: null,
        specialty: "Sándwiches",
        upTime: "10 AM - 10 PM",
        website: null,
        priceRange: "6000-14000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r36d1",
          data: {
            name: "Chacarero",
            description: "Lomito, tomate, porotos verdes y ají.",
            price: 8000,
            category: "Sándwiches",
          },
        },
        {
          id: "r36d2",
          data: {
            name: "Barros Luco",
            description: "Lomo vetado y queso derretido.",
            price: 10000,
            category: "Sándwiches",
          },
        },
        {
          id: "r36d3",
          data: {
            name: "Vegano Integral",
            description: "Hummus, palta y vegetales frescos.",
            price: 7000,
            category: "Vegetarianos",
          },
        },
        {
          id: "r36d4",
          data: {
            name: "Italiano",
            description: "Lomito, palta, tomate y mayonesa.",
            price: 9000,
            category: "Sándwiches",
          },
        },
        {
          id: "r36d5",
          data: {
            name: "Papas Deluxe",
            description: "Papas fritas con cheddar y tocino.",
            price: 5000,
            category: "Acompañamientos",
          },
        },
      ],
    },
    {
      id: "r37",
      data: {
        name: "A la Leña Pizzería",
        address: "Av. Alemania 1234",
        phone: null,
        specialty: "Pizza",
        upTime: "5 PM - 12 AM",
        website: null,
        priceRange: "11000-22000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r37d1",
          data: {
            name: "Pizza Margherita",
            description: "Salsa de tomate, mozzarella y albahaca.",
            price: 12000,
            category: "Pizzas Clásicas",
          },
        },
        {
          id: "r37d2",
          data: {
            name: "Pizza Prosciutto",
            description: "Con jamón crudo y rúcula.",
            price: 15000,
            category: "Pizzas Premium",
          },
        },
        {
          id: "r37d3",
          data: {
            name: "Calzone",
            description: "Pizza doblada rellena de jamón y queso.",
            price: 13000,
            category: "Especialidades",
          },
        },
        {
          id: "r37d4",
          data: {
            name: "Bruschetta",
            description: "Pan tostado con tomate y albahaca.",
            price: 6000,
            category: "Entradas",
          },
        },
        {
          id: "r37d5",
          data: {
            name: "Tiramisú",
            description: "Postre italiano clásico.",
            price: 7000,
            category: "Postres",
          },
        },
      ],
    },
    {
      id: "r38",
      data: {
        name: "Dulce Manía",
        address: "O'Higgins 780",
        phone: null,
        specialty: "Pastelería",
        upTime: "9 AM - 7 PM",
        website: null,
        priceRange: "3000-9000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r38d1",
          data: {
            name: "Tres Leches",
            description: "Bizcocho humedecido con crema.",
            price: 5000,
            category: "Tortas",
          },
        },
        {
          id: "r38d2",
          data: {
            name: "Éclair de Chocolate",
            description: "Masa hojaldre rellena de crema.",
            price: 3000,
            category: "Pasteles",
          },
        },
        {
          id: "r38d3",
          data: {
            name: "Cheesecake de Frutos Rojos",
            description: "Porción individual con coulis.",
            price: 6000,
            category: "Tortas",
          },
        },
        {
          id: "r38d4",
          data: {
            name: "Macarons",
            description: "Galletas francesas (3 unidades).",
            price: 4000,
            category: "Galletas",
          },
        },
        {
          id: "r38d5",
          data: {
            name: "Café Americano",
            description: "Café filtrado.",
            price: 2500,
            category: "Bebidas",
          },
        },
      ],
    },
    {
      id: "r39",
      data: {
        name: "El Quincho Sureño",
        address: "Camino a Pilauco Km 2",
        phone: null,
        specialty: "Asados",
        upTime: "1 PM - 8 PM",
        website: null,
        priceRange: "15000-35000",
        services: [
          { delivery: false },
          { takeOut: false },
          { booking: true },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r39d1",
          data: {
            name: "Asado de Tira",
            description: "300gr con papas chilotas y pebre.",
            price: 18000,
            category: "Carnes",
          },
        },
        {
          id: "r39d2",
          data: {
            name: "Costillar BBQ",
            description: "Estilo americano con salsa ahumada.",
            price: 25000,
            category: "Especialidades",
          },
        },
        {
          id: "r39d3",
          data: {
            name: "Choripán",
            description: "Pan campesino con chorizo artesanal.",
            price: 7000,
            category: "Sándwiches",
          },
        },
        {
          id: "r39d4",
          data: {
            name: "Ensalada Sureña",
            description: "Lechuga, tomate, cebolla morada y aliño de limón.",
            price: 6000,
            category: "Ensaladas",
          },
        },
        {
          id: "r39d5",
          data: {
            name: "Mote con Huesillo",
            description: "Bebida tradicional chilena.",
            price: 4000,
            category: "Bebidas",
          },
        },
      ],
    },
    {
      id: "r40",
      data: {
        name: "Bar de Tapas",
        address: "Lynch 1400",
        phone: null,
        specialty: "Bar",
        upTime: "6 PM - 1 AM",
        website: null,
        priceRange: "8000-20000",
        services: [
          { delivery: false },
          { takeOut: false },
          { booking: true },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r40d1",
          data: {
            name: "Tabla Ibérica",
            description: "Jamón serrano, chorizo y queso manchego.",
            price: 18000,
            category: "Tablas",
          },
        },
        {
          id: "r40d2",
          data: {
            name: "Patatas Bravas",
            description: "Papas con salsa picante y alioli.",
            price: 8000,
            category: "Tapas",
          },
        },
        {
          id: "r40d3",
          data: {
            name: "Croquetas de Jamón",
            description: "6 unidades con bechamel.",
            price: 9000,
            category: "Tapas",
          },
        },
        {
          id: "r40d4",
          data: {
            name: "Sangría",
            description: "Copa de vino con frutas.",
            price: 7000,
            category: "Bebidas",
          },
        },
        {
          id: "r40d5",
          data: {
            name: "Tortilla Española",
            description: "Tortilla de papas tradicional.",
            price: 10000,
            category: "Tapas",
          },
        },
      ],
    },
    {
      id: "r41",
      data: {
        name: "Sazón Peruano",
        address: "Eleuterio Ramírez 1020",
        phone: null,
        specialty: "Comida Peruana",
        upTime: "12 PM - 11 PM",
        website: null,
        priceRange: "12000-30000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: true },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r41d1",
          data: {
            name: "Ceviche Clásico",
            description: "Pescado, limón, ají y camote.",
            price: 15000,
            category: "Platos Principales",
          },
        },
        {
          id: "r41d2",
          data: {
            name: "Lomo Saltado",
            description: "Carne salteada con cebolla y tomate.",
            price: 16000,
            category: "Platos Principales",
          },
        },
        {
          id: "r41d3",
          data: {
            name: "Aji de Gallina",
            description: "Pollo desmenuzado en salsa de ají amarillo.",
            price: 14000,
            category: "Platos Principales",
          },
        },
        {
          id: "r41d4",
          data: {
            name: "Pisco Sour",
            description: "Cóctel tradicional peruano.",
            price: 7000,
            category: "Bebidas",
          },
        },
        {
          id: "r41d5",
          data: {
            name: "Suspiro Limeño",
            description: "Postre tradicional de manjar y merengue.",
            price: 6000,
            category: "Postres",
          },
        },
      ],
    },
    {
      id: "r42",
      data: {
        name: "La Casona del Sabor",
        address: "Patricio Lynch 1600",
        phone: null,
        specialty: "Comida Casera",
        upTime: "12 PM - 4 PM",
        website: null,
        priceRange: "5000-10000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: false },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r42d1",
          data: {
            name: "Cazuela de Vacuno",
            description: "Con zapallo, choclo y arroz.",
            price: 7000,
            category: "Platos Típicos",
          },
        },
        {
          id: "r42d2",
          data: {
            name: "Porotos Granados",
            description: "Con mazamorra y albahaca.",
            price: 6000,
            category: "Platos Típicos",
          },
        },
        {
          id: "r42d3",
          data: {
            name: "Pastel de Choclo",
            description: "Clásico con pino y huevo.",
            price: 6500,
            category: "Platos Típicos",
          },
        },
        {
          id: "r42d4",
          data: {
            name: "Ensalada Chilena",
            description: "Tomate y cebolla con aliño de limón.",
            price: 4000,
            category: "Ensaladas",
          },
        },
        {
          id: "r42d5",
          data: {
            name: "Mote con Huesillo",
            description: "Bebida tradicional.",
            price: 3000,
            category: "Bebidas",
          },
        },
      ],
    },
    {
      id: "r43",
      data: {
        name: "El Rey del Completo",
        address: "Mercado, Pasillo 3",
        phone: null,
        specialty: "Comida Rápida",
        upTime: "10 AM - 8 PM",
        website: null,
        priceRange: "2500-7000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r43d1",
          data: {
            name: "Completo Italiano",
            description: "Palta, tomate y mayonesa.",
            price: 3500,
            category: "Completos",
          },
        },
        {
          id: "r43d2",
          data: {
            name: "Completo Dinámico",
            description: "Chucrut, salsa americana y mayonesa.",
            price: 4000,
            category: "Completos",
          },
        },
        {
          id: "r43d3",
          data: {
            name: "As",
            description: "Vienesa, palta y mayonesa.",
            price: 3000,
            category: "Completos",
          },
        },
        {
          id: "r43d4",
          data: {
            name: "Papas Fritas",
            description: "Porción individual.",
            price: 2500,
            category: "Acompañamientos",
          },
        },
        {
          id: "r43d5",
          data: {
            name: "Bebida 500ml",
            description: "Gaseosa o jugo.",
            price: 1500,
            category: "Bebidas",
          },
        },
      ],
    },
    {
      id: "r44",
      data: {
        name: "Amasandería La Sureña",
        address: "Baquedano 450",
        phone: null,
        specialty: "Panadería",
        upTime: "7 AM - 7 PM",
        website: null,
        priceRange: "1000-5000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r44d1",
          data: {
            name: "Pan Amasado",
            description: "Unidad grande.",
            price: 1000,
            category: "Pan",
          },
        },
        {
          id: "r44d2",
          data: {
            name: "Empanadas de Horno",
            description: "De pino o queso (2 unidades).",
            price: 3000,
            category: "Empanadas",
          },
        },
        {
          id: "r44d3",
          data: {
            name: "Tortilla de Rescoldo",
            description: "Tradicional chilena.",
            price: 2000,
            category: "Pan",
          },
        },
        {
          id: "r44d4",
          data: {
            name: "Sopaipillas",
            description: "6 unidades con pebre.",
            price: 2500,
            category: "Frituras",
          },
        },
        {
          id: "r44d5",
          data: {
            name: "Café",
            description: "Café de grano.",
            price: 1500,
            category: "Bebidas",
          },
        },
      ],
    },
    {
      id: "r45",
      data: {
        name: "La Fuente Alemana",
        address: "Mackenna 900",
        phone: null,
        specialty: "Sándwiches",
        upTime: "11 AM - 11 PM",
        website: null,
        priceRange: "7000-15000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: true },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r45d1",
          data: {
            name: "Lomito Italiano",
            description: "Lomo, palta, tomate y mayonesa.",
            price: 10000,
            category: "Sándwiches",
          },
        },
        {
          id: "r45d2",
          data: {
            name: "Barros Jarpa",
            description: "Jamón y queso derretido.",
            price: 9000,
            category: "Sándwiches",
          },
        },
        {
          id: "r45d3",
          data: {
            name: "Chacarero",
            description: "Lomo, tomate y porotos verdes.",
            price: 11000,
            category: "Sándwiches",
          },
        },
        {
          id: "r45d4",
          data: {
            name: "Papas Fritas",
            description: "Porción familiar.",
            price: 6000,
            category: "Acompañamientos",
          },
        },
        {
          id: "r45d5",
          data: {
            name: "Jugo Natural",
            description: "Naranja o piña.",
            price: 4000,
            category: "Bebidas",
          },
        },
      ],
    },
    {
      id: "r46",
      data: {
        name: "Thai Express",
        address: "Plaza Yungay, Food Court",
        phone: null,
        specialty: "Comida Tailandesa",
        upTime: "11 AM - 9 PM",
        website: null,
        priceRange: "9000-20000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r46d1",
          data: {
            name: "Pad Thai",
            description: "Fideos de arroz salteados con vegetales y maní.",
            price: 12000,
            category: "Platos Principales",
          },
        },
        {
          id: "r46d2",
          data: {
            name: "Curry Verde",
            description: "Con pollo, leche de coco y arroz jasmine.",
            price: 14000,
            category: "Currys",
          },
        },
        {
          id: "r46d3",
          data: {
            name: "Tom Yum",
            description: "Sopa picante con camarones y hierbas.",
            price: 9000,
            category: "Sopas",
          },
        },
        {
          id: "r46d4",
          data: {
            name: "Spring Rolls",
            description: "Rollitos de primavera (4 unidades).",
            price: 7000,
            category: "Entradas",
          },
        },
        {
          id: "r46d5",
          data: {
            name: "Mango Sticky Rice",
            description: "Postre tradicional con arroz glutinoso.",
            price: 8000,
            category: "Postres",
          },
        },
      ],
    },
    {
      id: "r47",
      data: {
        name: "El Bodegón de la Carne",
        address: "Angulo 345",
        phone: null,
        specialty: "Carnes",
        upTime: "1 PM - 10 PM",
        website: null,
        priceRange: "14000-32000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: true },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r47d1",
          data: {
            name: "Bife de Chorizo",
            description: "300gr con papas rústicas.",
            price: 22000,
            category: "Carnes",
          },
        },
        {
          id: "r47d2",
          data: {
            name: "Punta de Picana",
            description: "250gr con puré de papas.",
            price: 20000,
            category: "Carnes",
          },
        },
        {
          id: "r47d3",
          data: {
            name: "Costillar BBQ",
            description: "Estilo americano con salsa ahumada.",
            price: 25000,
            category: "Especialidades",
          },
        },
        {
          id: "r47d4",
          data: {
            name: "Ensalada César",
            description: "Con croûtons y aderezo casero.",
            price: 8000,
            category: "Ensaladas",
          },
        },
        {
          id: "r47d5",
          data: {
            name: "Vino Tinto de la Casa",
            description: "Copa de vino chileno.",
            price: 6000,
            category: "Bebidas",
          },
        },
      ],
    },
    {
      id: "r48",
      data: {
        name: "Gelatería Italiana",
        address: "Ramírez 950",
        phone: null,
        specialty: "Heladería",
        upTime: "12 PM - 9 PM",
        website: null,
        priceRange: "3000-8000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r48d1",
          data: {
            name: "Gelato Clásico",
            description: "1 bola (Vainilla, Chocolate o Frutilla).",
            price: 3000,
            category: "Helados",
          },
        },
        {
          id: "r48d2",
          data: {
            name: "Affogato",
            description: "Gelato de vainilla con espresso.",
            price: 5000,
            category: "Especialidades",
          },
        },
        {
          id: "r48d3",
          data: {
            name: "Sundae de Chocolate",
            description: "Con salsa caliente y nueces.",
            price: 7000,
            category: "Postres",
          },
        },
        {
          id: "r48d4",
          data: {
            name: "Granita de Limón",
            description: "Bebida helada italiana.",
            price: 4000,
            category: "Bebidas",
          },
        },
        {
          id: "r48d5",
          data: {
            name: "Cannoli Siciliano",
            description: "Postre relleno de ricotta.",
            price: 6000,
            category: "Postres",
          },
        },
      ],
    },
    {
      id: "r49",
      data: {
        name: "Shawarma King",
        address: "Matta 750",
        phone: null,
        specialty: "Comida Árabe",
        upTime: "12 PM - 11 PM",
        website: null,
        priceRange: "6000-15000",
        services: [
          { delivery: true },
          { takeOut: true },
          { booking: false },
          { parking: false },
        ],
      },
      dishes: [
        {
          id: "r49d1",
          data: {
            name: "Shawarma de Pollo",
            description: "Pan pita con pollo, ensalada y salsa de ajo.",
            price: 8000,
            category: "Platos Principales",
          },
        },
        {
          id: "r49d2",
          data: {
            name: "Falafel",
            description: "Croquetas de garbanzos (6 unidades).",
            price: 7000,
            category: "Vegetarianos",
          },
        },
        {
          id: "r49d3",
          data: {
            name: "Hummus con Pan Pita",
            description: "Crema de garbanzos con especias.",
            price: 6000,
            category: "Entradas",
          },
        },
        {
          id: "r49d4",
          data: {
            name: "Kebab Mixto",
            description: "Pollo y carne con arroz basmati.",
            price: 12000,
            category: "Platos Principales",
          },
        },
        {
          id: "r49d5",
          data: {
            name: "Baklava",
            description: "Postre de hojaldre con nueces y miel.",
            price: 5000,
            category: "Postres",
          },
        },
      ],
    },
    {
      id: "r50",
      data: {
        name: "Café Literario",
        address: "Bilbao 1050",
        phone: null,
        specialty: "Cafetería",
        upTime: "10 AM - 9 PM",
        website: null,
        priceRange: "4000-13000",
        services: [
          { delivery: false },
          { takeOut: true },
          { booking: true },
          { parking: true },
        ],
      },
      dishes: [
        {
          id: "r50d1",
          data: {
            name: "Café del Poeta",
            description: "Espresso con toques de cardamomo.",
            price: 4500,
            category: "Cafés",
          },
        },
        {
          id: "r50d2",
          data: {
            name: "Tostadas Literarias",
            description: "Pan integral con mermelada casera.",
            price: 6000,
            category: "Desayunos",
          },
        },
        {
          id: "r50d3",
          data: {
            name: "Sándwich Cervantes",
            description: "Jamón, queso y tomate en pan baguette.",
            price: 8000,
            category: "Sándwiches",
          },
        },
        {
          id: "r50d4",
          data: {
            name: "Té de los Escritores",
            description: "Blend especial con hierbas.",
            price: 4000,
            category: "Tés",
          },
        },
        {
          id: "r50d5",
          data: {
            name: "Brownie Neruda",
            description: "Con nueces y salsa de chocolate.",
            price: 5000,
            category: "Postres",
          },
        },
      ],
    },
  ];

  for (const restaurant of restaurants) {
    const restaurantRef = db.collection("localFood").doc(restaurant.id);
    batch.set(restaurantRef, restaurant.data);

    for (const dish of restaurant.dishes) {
      const dishRef = restaurantRef.collection("dishes").doc(dish.id);
      batch.set(dishRef, dish.data);
    }
  }

  await batch.commit();
  console.log("Bulk seeding completed!");
};
bulkAddRestaurants().catch(console.error);
