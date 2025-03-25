import type { Product } from "./types"

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Professional Electrician's Tool Kit - 48 Piece Set",
    description: "Complete toolkit for professional electricians with insulated tools and carrying case",
    fullDescription:
      "This comprehensive 48-piece electrician's toolkit contains everything a professional needs for electrical installations and repairs. Each tool is insulated up to 1000V for safety and meets international standards. The durable carrying case keeps everything organized and portable. Includes wire strippers, various pliers, screwdrivers, voltage tester, and more essential tools for any electrical job.",
    price: 199.99,
    salePrice: 169.99,
    onSale: true,
    category: "tools",
    images: [
      "https://m.media-amazon.com/images/I/81LrD7KwS0L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Zt1gg6xKL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Zt1gg6xKL._AC_SL1500_.jpg",
    ],
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    featured: true,
    isBestseller: true,
    specifications: [
      { name: "Number of Pieces", value: "48" },
      { name: "Insulation Rating", value: "1000V" },
      { name: "Case Material", value: "Heavy-duty plastic" },
      { name: "Weight", value: "12 lbs" },
      { name: "Warranty", value: "Lifetime" },
    ],
    reviews: [
      {
        author: "John D.",
        rating: 5,
        date: "2023-05-15",
        content:
          "Best toolkit I've owned in my 20 years as an electrician. The tools are high quality and the case keeps everything organized.",
      },
      {
        author: "Sarah M.",
        rating: 4,
        date: "2023-04-22",
        content:
          "Great set of tools. The only thing missing is a better multimeter, but otherwise perfect for my needs.",
      },
    ],
  },
  {
    id: "2",
    name: "Premium 12/3 SJTW Extension Cord - 50ft",
    description: "Heavy-duty extension cord for professional and home use with lighted end",
    fullDescription:
      "This premium 12/3 SJTW extension cord is designed for heavy-duty applications both indoors and outdoors. The durable outer jacket resists oil, grease, and abrasion, while the 12-gauge copper wire safely handles up to 15 amps. Features a lighted end that indicates when power is on, and the cord remains flexible even in cold temperatures down to -40°F.",
    price: 49.99,
    salePrice: 0,
    onSale: false,
    category: "wiring",
    images: [
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
    ],
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    featured: false,
    isNew: true,
    specifications: [
      { name: "Length", value: "50 feet" },
      { name: "Wire Gauge", value: "12/3" },
      { name: "Amperage", value: "15A" },
      { name: "Jacket Type", value: "SJTW" },
      { name: "Temperature Rating", value: "-40°F to 140°F" },
    ],
    reviews: [
      {
        author: "Mike T.",
        rating: 5,
        date: "2023-06-10",
        content:
          "This cord is perfect for my workshop. Stays flexible in cold weather and the lighted end is a nice touch.",
      },
    ],
  },
  {
    id: "3",
    name: "Smart Wi-Fi Light Switch - Voice Control Compatible",
    description: "Control your lights from anywhere with this smart Wi-Fi enabled light switch",
    fullDescription:
      "Transform your home lighting with this smart Wi-Fi light switch that works with Alexa, Google Assistant, and Apple HomeKit. Control your lights from anywhere using the smartphone app or voice commands. Features include scheduling, away mode, and sunset/sunrise automation. No hub required and installs like a standard light switch with neutral wire.",
    price: 34.99,
    salePrice: 29.99,
    onSale: true,
    category: "switches",
    images: [
      "https://m.media-amazon.com/images/I/61WD2XFfGJL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
    ],
    rating: 4.5,
    reviewCount: 212,
    inStock: true,
    featured: true,
    isBestseller: true,
    specifications: [
      { name: "Connectivity", value: "Wi-Fi 2.4GHz" },
      { name: "Voice Assistants", value: "Alexa, Google Assistant, HomeKit" },
      { name: "Neutral Wire", value: "Required" },
      { name: "Max Load", value: "600W LED, 1800W Incandescent" },
      { name: "Warranty", value: "3 years" },
    ],
    reviews: [
      {
        author: "Lisa K.",
        rating: 5,
        date: "2023-05-28",
        content:
          "Super easy to install and the app is intuitive. I love being able to control my lights with voice commands.",
      },
      {
        author: "Robert J.",
        rating: 4,
        date: "2023-04-15",
        content:
          "Works great with my smart home setup. Took off one star because the app occasionally has connectivity issues.",
      },
    ],
  },
  {
    id: "4",
    name: "Commercial Electric Panel - 200 Amp Main Breaker",
    description: "Indoor load center with main breaker and space for 42 circuits",
    fullDescription:
      "This commercial-grade 200 Amp main breaker panel provides reliable power distribution for residential and light commercial applications. The indoor load center includes a main breaker and space for up to 42 circuit breakers. Features copper bus bars, ground bar kit, and a durable steel enclosure with removable door for easy access during installation and maintenance.",
    price: 249.99,
    salePrice: 0,
    onSale: false,
    category: "breakers",
    images: [
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
    ],
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    featured: false,
    specifications: [
      { name: "Amperage", value: "200A" },
      { name: "Spaces", value: "42" },
      { name: "Voltage", value: "120/240V" },
      { name: "Phase", value: "Single" },
      { name: "Enclosure", value: "NEMA Type 1 Indoor" },
    ],
    reviews: [
      {
        author: "Thomas E.",
        rating: 5,
        date: "2023-03-12",
        content:
          "Excellent quality panel. I'm an electrical contractor and this is my go-to panel for residential installations.",
      },
    ],
  },
  {
    id: "5",
    name: "LED Recessed Lighting Kit - 6 Pack",
    description: "Energy-efficient 12W LED recessed lights with dimmable feature",
    fullDescription:
      "Upgrade your home lighting with this 6-pack of energy-efficient LED recessed lights. Each fixture delivers 900 lumens of bright, natural light while only consuming 12 watts of power. The slim design fits into shallow ceiling spaces, and the fixtures are dimmable from 10-100% with compatible dimmers. Easy installation with spring clips and included junction box.",
    price: 89.99,
    salePrice: 79.99,
    onSale: true,
    category: "lighting",
    images: [
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
    ],
    rating: 4.6,
    reviewCount: 183,
    inStock: true,
    isNew: true,
    featured: true,
    specifications: [
      { name: "Wattage", value: "12W per fixture" },
      { name: "Lumens", value: "900 per fixture" },
      { name: "Color Temperature", value: "3000K (Warm White)" },
      { name: "Dimmable", value: "Yes, 10-100%" },
      { name: "Lifespan", value: "50,000 hours" },
    ],
    reviews: [
      {
        author: "Jennifer L.",
        rating: 5,
        date: "2023-06-05",
        content: "These lights transformed my kitchen. Easy to install and the warm light is perfect.",
      },
      {
        author: "David M.",
        rating: 4,
        date: "2023-05-20",
        content: "Good quality lights. The dimming feature works well with my Lutron dimmer.",
      },
    ],
  },
  {
    id: "6",
    name: "Electrical Safety Kit - OSHA Compliant",
    description: "Complete electrical safety kit with gloves, mat, and face shield",
    fullDescription:
      "Stay safe on the job with this OSHA-compliant electrical safety kit. Includes Class 0 rubber insulating gloves (1000V rated), leather protector gloves, insulating rubber mat, arc flash face shield, and safety glasses. All components meet or exceed ASTM standards for electrical work. The included storage bag keeps everything organized and protected when not in use.",
    price: 159.99,
    salePrice: 0,
    onSale: false,
    category: "safety",
    images: [
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
    ],
    rating: 4.9,
    reviewCount: 42,
    inStock: true,
    isBestseller: true,
    specifications: [
      { name: "Glove Rating", value: "Class 0 (1000V)" },
      { name: "Mat Rating", value: "Class 2 (17,000V)" },
      { name: "Face Shield", value: "Arc Flash Rated 12 cal/cm²" },
      { name: "Standards", value: "ASTM, OSHA Compliant" },
      { name: "Bag Dimensions", value: '24" x 12" x 10"' },
    ],
    reviews: [
      {
        author: "Carlos R.",
        rating: 5,
        date: "2023-04-18",
        content: "This kit has everything needed for electrical safety. The quality of each item is excellent.",
      },
    ],
  },
  {
    id: "7",
    name: "Digital Multimeter with Auto-Ranging",
    description: "Professional-grade multimeter for voltage, current, and resistance measurements",
    fullDescription:
      "This professional-grade digital multimeter features auto-ranging capability for easy and accurate measurements of AC/DC voltage, current, resistance, continuity, frequency, capacitance, and temperature. The large backlit LCD display makes readings clear in any lighting condition. Includes test leads, temperature probe, 9V battery, and protective holster with built-in test lead storage.",
    price: 79.99,
    salePrice: 69.99,
    onSale: true,
    category: "tools",
    images: [
      "https://m.media-amazon.com/images/I/61WD2XFfGJL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61WD2XFfGJL._AC_SL1500_.jpg",
    ],
    rating: 4.7,
    reviewCount: 128,
    inStock: true,
    featured: true,
    specifications: [
      { name: "Display", value: "4000 count backlit LCD" },
      { name: "DC Voltage", value: "0.1mV to 1000V" },
      { name: "AC Voltage", value: "0.1mV to 750V" },
      { name: "Resistance", value: "0.1Ω to 40MΩ" },
      { name: "Safety Rating", value: "CAT III 600V, CAT II 1000V" },
    ],
    reviews: [
      {
        author: "Alex P.",
        rating: 5,
        date: "2023-05-30",
        content: "Excellent multimeter for the price. Auto-ranging makes it quick to use and the backlight is bright.",
      },
      {
        author: "Maria S.",
        rating: 4,
        date: "2023-04-25",
        content: "Good quality meter. I use it daily in my work and it's holding up well.",
      },
    ],
  },
  {
    id: "8",
    name: "12/2 Romex NM-B Wire - 250ft Roll",
    description: "Indoor residential electrical wire for general purpose circuits",
    fullDescription:
      "This 12/2 Romex NM-B wire is perfect for general purpose 20-amp circuits in residential wiring applications. The 250ft roll features two 12-gauge copper conductors plus a ground wire, all wrapped in a durable PVC jacket that's flame-retardant and moisture-resistant. Meets or exceeds UL standards and National Electrical Code requirements for residential wiring.",
    price: 119.99,
    salePrice: 0,
    onSale: false,
    category: "wiring",
    images: [
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
    ],
    rating: 4.8,
    reviewCount: 95,
    inStock: true,
    isBestseller: true,
    specifications: [
      { name: "Wire Gauge", value: "12 AWG" },
      { name: "Conductors", value: "2 plus ground" },
      { name: "Length", value: "250 feet" },
      { name: "Ampacity", value: "20 amps" },
      { name: "Application", value: "Indoor residential" },
    ],
    reviews: [
      {
        author: "Brian K.",
        rating: 5,
        date: "2023-06-02",
        content: "Good quality Romex at a fair price. I used this for rewiring my garage and it worked perfectly.",
      },
    ],
  },
  {
    id: "9",
    name: "GFCI Outlet - Tamper Resistant",
    description: "Weather and tamper resistant GFCI outlet for indoor and outdoor use",
    fullDescription:
      "Protect against electrical shock with this tamper-resistant GFCI outlet. Designed for use in kitchens, bathrooms, outdoor spaces, and anywhere near water sources. Features include a self-testing function that automatically conducts a test every 3 seconds, tamper-resistant shutters to prevent foreign objects from being inserted, and weather-resistant construction for outdoor installations.",
    price: 24.99,
    salePrice: 19.99,
    onSale: true,
    category: "switches",
    images: [
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
    ],
    rating: 4.6,
    reviewCount: 157,
    inStock: true,
    isNew: true,
    specifications: [
      { name: "Amperage", value: "15A" },
      { name: "Voltage", value: "125V" },
      { name: "Features", value: "Self-testing, Tamper-resistant, Weather-resistant" },
      { name: "Color", value: "White" },
      { name: "Standards", value: "UL Listed, Meets NEC Requirements" },
    ],
    reviews: [
      {
        author: "Patricia N.",
        rating: 5,
        date: "2023-05-15",
        content: "These outlets are easy to install and the self-testing feature gives peace of mind.",
      },
      {
        author: "Kevin W.",
        rating: 4,
        date: "2023-04-10",
        content: "Good quality GFCI outlets. I installed several in my bathroom renovation.",
      },
    ],
  },
  {
    id: "10",
    name: "100A GFCI Spa Panel with Disconnect",
    description: "Outdoor rated spa panel with GFCI breaker and disconnect switch",
    fullDescription:
      "This 100-amp spa panel is designed specifically for hot tubs, pools, and other outdoor equipment requiring GFCI protection. Features include a 50-amp GFCI breaker, 60-amp non-GFCI breaker, and a visible blade disconnect for safety during maintenance. The NEMA 3R enclosure is rainproof and weather-resistant for outdoor installation. Pre-wired and ready for installation by a qualified electrician.",
    price: 189.99,
    salePrice: 0,
    onSale: false,
    category: "breakers",
    images: [
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
    ],
    rating: 4.8,
    reviewCount: 36,
    inStock: true,
    featured: false,
    specifications: [
      { name: "Amperage", value: "100A" },
      { name: "GFCI Breaker", value: "50A" },
      { name: "Non-GFCI Breaker", value: "60A" },
      { name: "Enclosure", value: "NEMA 3R Rainproof" },
      { name: "Disconnect", value: "Visible blade, lockable" },
    ],
    reviews: [
      {
        author: "James L.",
        rating: 5,
        date: "2023-03-28",
        content:
          "Perfect for my hot tub installation. Well-built and the pre-wiring made installation straightforward.",
      },
    ],
  },
  {
    id: "11",
    name: "Motion Sensor Floodlight - LED",
    description: "Dual-head LED security light with adjustable motion sensor",
    fullDescription:
      "Enhance your home security with this dual-head LED floodlight featuring an adjustable motion sensor. The bright 2500-lumen output illuminates large areas while using only 28 watts of power. The motion sensor can detect movement up to 70 feet away and has adjustable time, sensitivity, and range settings. Weather-resistant construction allows for installation in exposed outdoor locations.",
    price: 69.99,
    salePrice: 59.99,
    onSale: true,
    category: "lighting",
    images: [
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
    ],
    rating: 4.5,
    reviewCount: 112,
    inStock: true,
    isBestseller: true,
    specifications: [
      { name: "Lumens", value: "2500" },
      { name: "Wattage", value: "28W" },
      { name: "Color Temperature", value: "5000K (Daylight)" },
      { name: "Detection Range", value: "Up to 70 feet" },
      { name: "Weather Rating", value: "IP65" },
    ],
    reviews: [
      {
        author: "Michelle T.",
        rating: 5,
        date: "2023-05-22",
        content: "Excellent security light. Very bright and the motion sensor works reliably.",
      },
      {
        author: "Steven B.",
        rating: 4,
        date: "2023-04-18",
        content: "Good light output and easy to install. The adjustment controls could be more intuitive.",
      },
    ],
  },
  {
    id: "12",
    name: "Arc Flash Protection Kit - 40 Cal/cm²",
    description: "Complete arc flash protection kit for high-risk electrical work",
    fullDescription:
      "This comprehensive arc flash protection kit provides maximum safety for electricians working in high-risk environments. The 40 Cal/cm² rating offers protection for the highest hazard levels. Includes arc flash hood with hard hat and face shield, arc flash coat and bib overalls, voltage-rated gloves with leather protectors, and a protective gear bag. All components meet NFPA 70E standards for electrical safety in the workplace.",
    price: 899.99,
    salePrice: 849.99,
    onSale: true,
    category: "safety",
    images: [
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ql-ZniqIL._AC_SL1500_.jpg",
    ],
    rating: 5.0,
    reviewCount: 18,
    inStock: true,
    isNew: true,
    specifications: [
      { name: "Arc Rating", value: "40 Cal/cm²" },
      { name: "Standards", value: "NFPA 70E, ASTM F1506" },
      { name: "Hood", value: "With hard hat and face shield" },
      { name: "Gloves", value: "Class 0 (1000V) with leather protectors" },
      { name: "Material", value: "Inherent flame-resistant fabric" },
    ],
    reviews: [
      {
        author: "Richard M.",
        rating: 5,
        date: "2023-04-05",
        content: "Top quality arc flash protection. Our team feels much safer when working on high-energy equipment.",
      },
    ],
  },
]

