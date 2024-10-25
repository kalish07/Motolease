const carData = [
    {
      id: 1,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/47051/compass-exterior-right-front-three-quarter-74.jpeg?isig=0&q=80",
      name: "Jeep Compass 2021",
      price: "₹490/hr",
      distance: "3.0 km away",
      rating: "5.0 ★ | 13 Trips",
      type: "SUV",
      transmission: "Automatic",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2021,
      offers: ["10% off"],
      addOns: ["FASTag"],
      deliveryType: false,
    },
    {
      id: 2,
      image: "https://imgd.aeplcdn.com/664x374/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=0&q=80",
      name: "Maruti Suzuki BALENO 2021",
      price: "₹98/hr",
      distance: "8.4 km away",
      rating: "4.66 ★ | 9 Trips",
      type: "Sedan",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2021,
      offers: [],
      addOns: [],
      deliveryType: false,
    },
    {
      id: 3,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
      name: "Hyundai i20 2023",
      price: "₹132/hr",
      distance: "10.1 km away",
      rating: "5.0 ★ | 99 Trips",
      type: "Hatchback",
      transmission: "Automatic",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2023,
      offers: ["20% off"],
      addOns: ["Zoom Plus"],
      deliveryType: false,
    },
    {
      id: 4,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/45951/amaze-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      name: "Honda Amaze 2023",
      price: "₹154/hr",
      distance: "6.7 km away",
      rating: "5.0 ★ | 5 Trips",
      type: "Sedan",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2023,
      offers: [],
      addOns: [],
      deliveryType: false,
    },
    {
      id: 5,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141115/creta-exterior-right-front-three-quarter-16.jpeg?isig=0&q=80",
      name: "Hyundai Creta 2024",
      price: "₹278/hr",
      distance: "12.0 km away",
      rating: "5.0 ★ | 11 Trips",
      type: "SUV",
      transmission: "Automatic",
      fuelType: "Diesel",
      seats: "5 Seater",
      modelYear: 2024,
      offers: ["10% off"],
      addOns: ["FASTag"],
      deliveryType: true,
    },
    {
      id: 6,
      image: "https://imgd.aeplcdn.com/664x374/cw/ec/31676/Ford-EcoSport-New-Right-Front-Three-Quarter-111783.jpg?v=201711021421&q=80",
      name: "Ford EcoSport 2022",
      price: "₹215/hr",
      distance: "7.2 km away",
      rating: "4.8 ★ | 18 Trips",
      type: "SUV",
      transmission: "Automatic",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2022,
      offers: [],
      addOns: ["FASTag"],
      deliveryType: false,
    },
    {
      id: 7,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141125/kwid-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      name: "Renault Kwid 2021",
      price: "₹120/hr",
      distance: "5.8 km away",
      rating: "4.5 ★ | 22 Trips",
      type: "Hatchback",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "4 Seater",
      modelYear: 2021,
      offers: [],
      addOns: [],
      deliveryType: false,
    },
    {
      id: 8,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80",
      name: "Toyota Innova Crysta 2023",
      price: "₹350/hr",
      distance: "9.3 km away",
      rating: "4.9 ★ | 14 Trips",
      type: "SUV",
      transmission: "Automatic",
      fuelType: "Diesel",
      seats: "7 Seater",
      modelYear: 2023,
      offers: ["10% off"],
      addOns: ["Zoom Plus"],
      deliveryType: true,
    },
    {
      id: 9,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      name: "Maruti Suzuki Swift 2022",
      price: "₹150/hr",
      distance: "6.1 km away",
      rating: "4.7 ★ | 17 Trips",
      type: "Hatchback",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2022,
      offers: [],
      addOns: [],
      deliveryType: false,
    },
    {
      id: 10,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=80",
      name: "Volkswagen Polo 2021",
      price: "₹175/hr",
      distance: "11.2 km away",
      rating: "4.6 ★ | 20 Trips",
      type: "Hatchback",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2021,
      offers: [],
      addOns: ["FASTag"],
      deliveryType: false,
    },
    {
      id: 11,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/134287/city-exterior-right-front-three-quarter-77.jpeg?isig=0&q=80",
      name: "Honda City 2024",
      price: "₹290/hr",
      distance: "13.0 km away",
      rating: "4.9 ★ | 15 Trips",
      type: "Sedan",
      transmission: "Automatic",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2024,
      offers: ["10% off"],
      addOns: [],
      deliveryType: true,
    },
    {
      id: 12,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      name: "Mahindra XUV700 2023",
      price: "₹320/hr",
      distance: "8.9 km away",
      rating: "4.8 ★ | 16 Trips",
      type: "SUV",
      transmission: "Automatic",
      fuelType: "Diesel",
      seats: "7 Seater",
      modelYear: 2023,
      offers: ["20% off"],
      addOns: ["Zoom Plus"],
      deliveryType: false,
    },
    {
      id: 13,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80",
      name: "Audi A4 2023",
      price: "₹550/hr",
      distance: "14.2 km away",
      rating: "5.0 ★ | 10 Trips",
      type: "Luxury",
      transmission: "Automatic",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2023,
      offers: ["10% off"],
      addOns: ["FASTag"],
      deliveryType: false,
    },
    {
      id: 14,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/x1-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
      name: "BMW X1 2024",
      price: "₹400/hr",
      distance: "10.5 km away",
      rating: "4.7 ★ | 13 Trips",
      type: "SUV",
      transmission: "Automatic",
      fuelType: "Diesel",
      seats: "5 Seater",
      modelYear: 2024,
      offers: [],
      addOns: ["Zoom Plus"],
      deliveryType: true,
    },
    {
      id: 15,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/174323/seltos-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      name: "Kia Seltos 2023",
      price: "₹280/hr",
      distance: "7.8 km away",
      rating: "4.6 ★ | 19 Trips",
      type: "SUV",
      transmission: "Automatic",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2023,
      offers: [],
      addOns: [],
      deliveryType: false,
    },
    {
      id: 16,
      image: "https://imgd.aeplcdn.com/664x374/cw/ec/28376/Nissan-Terrano-Front-view-93548.jpg?v=201711021421&q=80",
      name: "Nissan Terrano 2021",
      price: "₹230/hr",
      distance: "9.6 km away",
      rating: "4.8 ★ | 12 Trips",
      type: "SUV",
      transmission: "Manual",
      fuelType: "Diesel",
      seats: "5 Seater",
      modelYear: 2021,
      offers: ["10% off"],
      addOns: ["FASTag"],
      deliveryType: false,
    },
    {
      id: 17,
      image: "https://imgd.aeplcdn.com/664x374/cw/ec/12624/Fiat-Linea-Exterior-128099.jpg?wm=0&q=80",
      name: "Fiat Linea 2020",
      price: "₹140/hr",
      distance: "6.3 km away",
      rating: "4.5 ★ | 21 Trips",
      type: "Sedan",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2020,
      offers: [],
      addOns: [],
      deliveryType: false,
    },
    {
      id: 18,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40371/octavia-exterior-right-front-three-quarter-2.jpeg?q=80",
      name: "Skoda Octavia 2023",
      price: "₹310/hr",
      distance: "11.0 km away",
      rating: "4.9 ★ | 8 Trips",
      type: "Sedan",
      transmission: "Automatic",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2023,
      offers: ["20% off"],
      addOns: ["Zoom Plus"],
      deliveryType: false,
    },
    {
      id: 19,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178535/c-class-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      name: "Mercedes-Benz C-Class 2022",
      price: "₹600/hr",
      distance: "15.0 km away",
      rating: "5.0 ★ | 9 Trips",
      type: "Luxury",
      transmission: "Automatic",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2022,
      offers: ["10% off"],
      addOns: ["FASTag"],
      deliveryType: false,
    },
    {
      id: 20,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/131131/xc60-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      name: "Volvo XC60 2024",
      price: "₹500/hr",
      distance: "12.5 km away",
      rating: "4.8 ★ | 11 Trips",
      type: "SUV",
      transmission: "Automatic",
      fuelType: "Diesel",
      seats: "5 Seater",
      modelYear: 2024,
      offers: [],
      addOns: ["Zoom Plus"],
      deliveryType: true,
    },
    {
      id: 21,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/174975/wrangler-facelift-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      name: "Jeep Wrangler 2023",
      price: "₹350/hr",
      distance: "14.8 km away",
      rating: "4.7 ★ | 7 Trips",
      type: "SUV",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2023,
      offers: ["10% off"],
      addOns: ["FASTag"],
      deliveryType: false,
    },
    {
      id: 22,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/55215/defender-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      name: "Land Rover Defender 2024",
      price: "₹450/hr",
      distance: "13.6 km away",
      rating: "4.9 ★ | 10 Trips",
      type: "SUV",
      transmission: "Automatic",
      fuelType: "Diesel",
      seats: "5 Seater",
      modelYear: 2024,
      offers: ["20% off"],
      addOns: ["Zoom Plus"],
      deliveryType: true,
    },
    {
      id: 23,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/139465/rx-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
      name: "Lexus RX 2023",
      price: "₹420/hr",
      distance: "15.5 km away",
      rating: "5.0 ★ | 6 Trips",
      type: "Luxury",
      transmission: "Automatic",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2023,
      offers: [],
      addOns: ["FASTag"],
      deliveryType: false,
    },
    {
      id: 24,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/47336/e-class-exterior-right-front-three-quarter-27.jpeg?isig=0&q=80",
      name: "Mercedes-Benz E-Class 2022",
      price: "₹550/hr",
      distance: "14.0 km away",
      rating: "4.9 ★ | 8 Trips",
      type: "Luxury",
      transmission: "Automatic",
      fuelType: "Petrol",
      seats: "5 Seater",
      modelYear: 2022,
      offers: ["10% off"],
      addOns: ["Zoom Plus"],
      deliveryType: false,
    },
    {
      id: 25,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/53591/q5-exterior-right-front-three-quarter-36.jpeg?isig=0&q=80",
      name: "Audi Q5 2024",
      price: "₹480/hr",
      distance: "12.8 km away",
      rating: "5.0 ★ | 12 Trips",
      type: "Luxury",
      transmission: "Automatic",
      fuelType: "Diesel",
      seats: "5 Seater",
      modelYear: 2024,
      offers: ["20% off"],
      addOns: ["FASTag"],
      deliveryType: true,
    },
  ];

export default carData;