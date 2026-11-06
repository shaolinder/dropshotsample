/** Public shop facts. Edit this file to update phones, addresses, and copy. */

export const brand = {
  name: "Dropshot Laundry",
  legal: "Dropshot Laundry Shop",
  parent: "Dropshot Ventures Corp.",
  founded: "April 2021",
  email: "dropshotlaundrystation@gmail.com",
  franchiseEmail: "cris.wabinga@dropshotcorp.com",
  serviceDesk: "0968 899 0228",
  serviceWhatsapp: "https://wa.me/639688990228",
  whatsapp: "https://wa.me/639989584398",
  office: {
    name: "Corporate office",
    city: "Mandaue City",
    address: "GF Alba Building, Casuntingan, Mandaue City, Cebu",
    phones: ["0998 958 4398", "0968 899 0228"],
  },
  booking: [
    { display: "0998 958 4398", tel: "+639989584398" },
    { display: "0955 540 9958", tel: "+639555409958" },
  ],
  socials: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100070801525691",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dropshotlaundrystation",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCIi0fijtPmlpobqA4-KlK9A",
    },
  ],
  announcement:
    'Now open: self-service area at the Cabancalan branch, Mandaue City',
};

export const areas = [
  "Mandaue City",
  "Cebu City",
  "Consolacion",
  "Liloan",
  "Lapu-Lapu City",
  "Cordova",
  "Talisay City",
];

const img = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Same laundry photos used on the homepage and the inner pages. */
export const servicePhotos = {
  "personal-laundry": img("photo-1610557892470-55d9e80c0bce", 1200),
  "dry-cleaning": img("photo-1489274495757-95c7c837b101", 1200),
  "shoes-and-bags": img("photo-1549298916-b41d501d3772", 1200),
  "commercial-laundry": img("photo-1582735689369-4fe89db7114c", 1200),
  "hand-washing": img("photo-1604335399105-a0c585fd81a1", 1200),
  "pickup-delivery": img("photo-1617347454431-f49d7ff5c3b1", 1200),
  "self-service": img("photo-1626806787461-102c1bfaaea1", 1200),
  express: img("photo-1517677208171-0bc6725a3e60", 1200),
  "open-daily": img("photo-1556905055-8f358a7a47b2", 1200),
};

export const pagePhotos = {
  pickup: img("photo-1617347454431-f49d7ff5c3b1", 1800),
  services: img("photo-1556905055-8f358a7a47b2", 1800),
  story: img("photo-1545173168-9f1947eebb7f", 1800),
  who: img("photo-1626806787461-102c1bfaaea1", 1800),
  franchise: img("photo-1582735689369-4fe89db7114c", 1800),
  locations: img("photo-1545173168-9f1947eebb7f", 1800),
  contact: img("photo-1610557892470-55d9e80c0bce", 1800),
  careers: img("photo-1545173168-9f1947eebb7f", 1800),
  faq: img("photo-1489274495757-95c7c837b101", 1800),
  reviews: img("photo-1604335399105-a0c585fd81a1", 1800),
  fullService: img("photo-1517677208171-0bc6725a3e60", 1400),
  selfService: img("photo-1626806787461-102c1bfaaea1", 1400),
};

export const slides = [
  {
    image: img("photo-1517677208171-0bc6725a3e60"),
    kicker: "Mandaue · Cebu City",
    title: "Not just another laundry shop.",
    text: "Full service, self-service, and pick-up that actually comes back clean.",
  },
  {
    image: img("photo-1545173168-9f1947eebb7f"),
    kicker: "Wash · Dry · Fold",
    title: "Smooth results. On time.",
    text: "Regular loads are usually ready in 24–48 hours. Express is about 4 hours.",
  },
  {
    image: img("photo-1604335399105-a0c585fd81a1"),
    kicker: "Cabancalan · Banilad",
    title: "Self-service, when you want the machines.",
    text: "Run your own wash at Cabancalan and Banilad, or hand it to the staff.",
  },
  {
    image: img("photo-1617347454431-f49d7ff5c3b1"),
    kicker: "Metro Cebu",
    title: "We pick up. We deliver.",
    text: "From Mandaue and Cebu City out to Lapu-Lapu, Consolacion, Liloan, Cordova, and Talisay.",
  },
];

export const services = [
  {
    slug: "personal-laundry",
    name: "Personal laundry",
    blurb: "Everyday clothes, washed, dried, and folded for home.",
    body: "Bring a bag or book a pick-up. Each machine load is capped at 8 kilos — anything over that is a second load. Tell us if whites need their own cycle.",
  },
  {
    slug: "dry-cleaning",
    name: "Dry cleaning",
    blurb: "Suits, dresses, and pieces that should not go in a washer.",
    body: "Dry cleaning is priced apart from wash-and-fold. Point out stains and fabric notes when you drop the piece off or when the rider collects it.",
  },
  {
    slug: "shoes-and-bags",
    name: "Shoes and bags",
    blurb: "Sneakers, leather, and bags cleaned as their own job.",
    body: "Shoes and bags are handled separately from clothing loads. Ask the branch what the pair or bag needs before you leave it.",
  },
  {
    slug: "commercial-laundry",
    name: "Commercial laundry",
    blurb: "Linens and uniforms for shops, spas, salons, and small hotels.",
    body: "Restaurants, salons, spas, and lodging can set a recurring drop-off. Call the nearest branch so the volume has a slot.",
  },
  {
    slug: "hand-washing",
    name: "Hand washing",
    blurb: "Delicates that need hands, not a drum.",
    body: "Lingerie, embellished pieces, and anything marked hand-wash are separated from the regular load. There is an extra charge.",
  },
  {
    slug: "pickup-delivery",
    name: "Pick-up & delivery",
    blurb: "A rider collects, the shop washes, and the same address gets it back.",
    body: "There is no minimum order. The fee depends on where we collect. Delivery runs from 8 AM to 6 PM, and only back to the original pick-up address.",
    href: "/pickup",
  },
  {
    slug: "self-service",
    name: "Self-service",
    blurb: "Your coins or your card, your cycle, at two Mandaue shops.",
    body: "Self-service machines are at the Cabancalan branch and at Unit 2 on A.S. Fortuna, Banilad. Staff next door can still take a full-service bag.",
  },
  {
    slug: "express",
    name: "Express service",
    blurb: "Same-day when you cannot wait a day.",
    body: "Express is turned around in about 4 hours. Ask the branch before you count on a window — it depends on the queue.",
  },
  {
    slug: "open-daily",
    name: "Open daily",
    blurb: "Seven days. Call the branch for today’s hours.",
    body: "Every shop is open daily. Hours can differ by branch and by mall rules at SM Seaside, so call ahead if you are cutting it close.",
    href: "/where-we-are",
  },
];

export const clients = [
  "Students",
  "Families",
  "Professionals",
  "Working couples",
  "Hotel guests",
  "Spas",
  "Beauty salons",
  "Restaurants",
];

const shopPhoto = (slug, name) => `/branches/${slug}/${name}`;
const pickupPhoto = (id) => `/branches/pickup/${id}.jpg`;
const pickupShared = [
  "6325",
  "6702",
  "6705",
  "6710",
  "6709",
  "6700",
  "6695",
  "6703",
  "6704",
  "6136",
  "6327",
  "6696",
  "6707",
  "6697",
  "6698",
  "6857",
  "6191",
  "6858",
  "8783",
  "8784",
  "8791",
  "9246",
  "8799",
].map(pickupPhoto);
const pickupMall = [
  "3805",
  "6325",
  "6702",
  "6705",
  "6710",
  "6709",
  "6700",
  "6695",
  "6703",
  "6704",
  "6136",
  "6327",
  "6696",
  "6707",
  "6697",
  "6698",
  "6857",
  "6858",
  "8783",
  "8784",
  "8791",
  "8799",
].map(pickupPhoto);
const pickupCabancalan = Array.from(
  { length: 27 },
  (_, index) => `/branches/cabancalan/gallery/${String(index + 1).padStart(2, "0")}.jpg`,
);
const machineLine =
  "The machines set the temperature, water level, and cycle time for each load.";
const machineCare =
  "The machines set the temperature, water level, and cycle time so the clothes are cleaned without being worn out.";

export const branches = [
  {
    slug: "cabancalan",
    name: "Cabancalan",
    short: "Cabancalan Mandaue",
    city: "Mandaue City",
    kind: "Full service",
    image: shopPhoto("cabancalan", "hero.jpg"),
    servicesImage: shopPhoto("cabancalan", "services.png"),
    techImage: shopPhoto("cabancalan", "tech.jpg"),
    tagline: "The easiest drop you'll ever make.",
    services:
      "Self-service machines, drop-off, and wash-and-fold. Leave a bag and the staff send it back clean.",
    tech: machineLine,
    address: "787 ML Quezon Avenue, Cabancalan, Mandaue City, Cebu",
    email: "dropshotlaundry@gmail.com",
    hours: ["7:00 AM – 9:00 PM daily"],
    phones: ["0955 540 9958", "0928 829 9957", "0968 899 0228"],
    gallery: pickupCabancalan,
    video: "https://player.vimeo.com/video/774249920?h=8e1fc1046c&title=0&byline=0&portrait=0",
    videoTitle: "Dropshot Laundry Station, Cabancalan branch",
  },
  {
    slug: "cabancalan-self-service",
    name: "Cabancalan Self-Service",
    short: "Cabancalan Self Service",
    city: "Mandaue City",
    kind: "Self-service",
    image: shopPhoto("cabancalan-self-service", "hero.jpg"),
    servicesImage: shopPhoto("cabancalan-self-service", "services.jpg"),
    techImage: shopPhoto("cabancalan-self-service", "tech.jpg"),
    tagline: "Self-service at the Cabancalan shop.",
    services:
      "Self-service machines, drop-off, and wash-and-fold. Leave a bag and the staff send it back clean.",
    tech: machineLine,
    address: "787 ML Quezon Avenue, Cabancalan, Mandaue City, Cebu",
    email: "dropshotlaundry@gmail.com",
    hours: ["7:00 AM – 9:00 PM daily"],
    phones: ["0955 540 9958", "0928 829 9957", "0968 899 0228"],
    gallery: pickupCabancalan,
  },
  {
    slug: "banilad",
    name: "Banilad",
    short: "Banilad Mandaue",
    city: "Mandaue City",
    kind: "Full service",
    image: shopPhoto("banilad", "hero.jpg"),
    servicesImage: shopPhoto("banilad", "services.jpg"),
    techImage: shopPhoto("banilad", "tech.jpg"),
    tagline: "Where your laundry gets a professional wash.",
    services: "Drop the bag off. The staff wash, dry, and fold it, and hand it back clean.",
    tech: machineLine,
    address: "Unit 1, 880 A.S. Fortuna Street, Banilad, Mandaue City, Cebu",
    email: "dropshotlaundry@gmail.com",
    hours: ["7:00 AM – 9:00 PM daily"],
    phones: ["0919 330 9275", "0975 507 2665", "0968 899 0228"],
    gallery: pickupShared,
    video: "https://player.vimeo.com/video/824737466?h=66eaff1873&title=0&byline=0&portrait=0",
    videoTitle: "Dropshot Laundry Shop, Banilad branch",
  },
  {
    slug: "banilad-self-service",
    name: "Banilad Self-Service",
    short: "Banilad Self Service",
    city: "Mandaue City",
    kind: "Self-service",
    image: shopPhoto("banilad-self-service", "hero.jpg"),
    servicesImage: shopPhoto("banilad-self-service", "services.jpg"),
    techImage: shopPhoto("banilad-self-service", "tech.jpg"),
    tagline: "Wash and fold, or the machines you run yourself.",
    services: "You run the wash. Choose the time, the cycle, and the detergent.",
    tech: machineLine,
    address: "Unit 2, 880 A.S. Fortuna Street, Banilad, Mandaue City, Cebu",
    email: "dropshotlaundry@gmail.com",
    hours: ["7:00 AM – 9:00 PM daily"],
    phones: ["0998 829 7016", "0975 507 2665", "0968 899 0228"],
    gallery: pickupShared,
  },
  {
    slug: "lahug",
    name: "Lahug",
    short: "Lahug Salinas Drive Cebu",
    city: "Cebu City",
    kind: "Full service",
    image: shopPhoto("lahug", "hero.jpg"),
    servicesImage: shopPhoto("lahug", "services.jpg"),
    techImage: shopPhoto("lahug", "tech.jpg"),
    tagline: "Ground floor of ABC Plus Hotel & Homes on Salinas Drive.",
    services: "Self-service machines, or wash-and-fold if you leave the bag with the staff.",
    tech: machineCare,
    address: "GF ABC Plus Hotel & Homes, 35 Salinas Drive, Lahug, Cebu City",
    email: "dropshotlaundrylahug@gmail.com",
    hours: ["8:00 AM – 9:00 PM Monday to Friday", "7:00 AM – 9:00 PM Saturday and Sunday"],
    phones: ["0919 671 4248", "0969 092 8743", "0968 899 0228"],
    gallery: pickupMall,
  },
  {
    slug: "maguikay",
    name: "Maguikay",
    short: "Maguikay Mandaue",
    city: "Mandaue City",
    kind: "Full service",
    image: shopPhoto("maguikay", "hero.jpg"),
    servicesImage: shopPhoto("maguikay", "services.jpg"),
    techImage: shopPhoto("maguikay", "tech.jpg"),
    tagline: "The easiest drop you'll ever make.",
    services: "A self-service wash, or drop the bag for wash, dry, and fold.",
    tech: machineCare,
    address: "728 ML Quezon Avenue, Maguikay, Mandaue City, Cebu",
    email: "dropshotlaundry@gmail.com",
    hours: ["7:00 AM – 9:00 PM daily"],
    phones: ["0953 682 9085", "0962 303 0494", "0968 899 0228"],
    gallery: pickupShared,
  },
  {
    slug: "sm-seaside",
    name: "SM Seaside",
    short: "SM Seaside Cebu",
    city: "Cebu City",
    kind: "Full service",
    image: shopPhoto("sm-seaside", "hero.jpg"),
    servicesImage: shopPhoto("sm-seaside", "services.jpg"),
    techImage: shopPhoto("sm-seaside", "tech.jpg"),
    tagline: "Let us take the stress out of laundry day.",
    services: "Self-service machines, or wash-and-fold if you leave the bag with the staff.",
    tech: machineCare,
    address:
      "Lower Ground Floor, Mountain Wing Arcade, SM Seaside City, South Coastal Road, Antuwanga, Cebu City",
    email: "dropshotlaundry@gmail.com",
    hours: ["11:00 AM – 9:00 PM Monday to Friday", "10:00 AM – 10:00 PM Saturday and Sunday"],
    phones: ["0952 629 5313", "0968 899 0228"],
    gallery: pickupMall,
    video: "https://player.vimeo.com/video/1112652819?h=452cf059d6&title=0&byline=0&portrait=0",
    videoTitle: "Check out this great video",
  },
].sort((a, b) => a.name.localeCompare(b.name, "en"));

export const reviews = {
  place: "Dropshot Laundry Shop at Cabancalan, Mandaue City, Cebu",
  rating: "4.9",
  count: 94,
  href: "https://maps.google.com/maps?cid=15650659963529890565",
  note: "Your reviews and comments are very important to us.",
  video: "https://player.vimeo.com/video/774249920?h=8e1fc1046c&title=0&byline=0&portrait=0",
  items: [
    {
      name: "Orville Patrick Barandino",
      date: "October 29, 2026",
      text: "The staff here is super friendly and welcoming",
    },
    {
      name: "Walter Wilwayco",
      date: "October 28, 2026",
      text: "Hospitable and accomodating staff.. Exquisite service",
    },
    {
      name: "jucel gadiano",
      date: "October 28, 2026",
      text: "Definitely one of the best laundry shops we've tried! What we love most is their…",
      more: true,
    },
    {
      name: "maxwell john bongo",
      date: "April 8, 2022",
      text: "I happen to avail of the services of Dropshot Laundry, aside from their excellent…",
      more: true,
    },
  ],
};

export const roles = [
  {
    title: "Laundry attendant",
    points: [
      "Basic laundry knowledge",
      "At least a high school graduate",
      "Customer service oriented",
      "Can work under pressure",
      "With or without experience",
      "Cheerful and trustworthy",
    ],
  },
  {
    title: "Admin assistant",
    points: [
      "College graduate",
      "Good English communication",
      "Able to handle several tasks at once",
      "Comfortable with spreadsheets",
      "Customer service oriented",
      "Can work under pressure",
      "Cheerful and trustworthy",
    ],
  },
];

export const faqs = [
  {
    q: "Do you pick up and deliver laundry?",
    a: "Yes. The fee depends on the pick-up location.",
  },
  {
    q: "What is the coverage area?",
    a: "Pick-up and delivery cover these areas.",
    list: areas,
  },
  {
    q: "Is there a minimum amount for pick-up and delivery?",
    a: "No. There is no minimum amount.",
  },
  {
    q: "When can I get my laundry?",
    a: "Turnaround varies. Regular service is usually 24–48 hours.",
  },
  {
    q: "Do you have express or rush service?",
    a: "Yes. Express is about 4 hours, depending on the queue that day.",
  },
  {
    q: "What bag or basket should I use?",
    a: "Your own basket or any bag is fine. Keep valuables and pieces you cannot replace out of the bag.",
  },
  {
    q: "How do I book a pick-up?",
    a: "Send these details to 0998 958 4398 or 0955 540 9958. The form on the pick-up page writes that message for you.",
    list: [
      "Name",
      "Contact number",
      "Pick-up address and a landmark",
      "Date and time of pick-up",
      "Number of bags",
      "Any special instruction",
    ],
  },
  {
    q: "How do I pay?",
    a: "Cash when the bag is collected, or GCash. Maya is also accepted before delivery.",
  },
  {
    q: "How do you handle delicates or special instructions?",
    a: "Say so when you book. Delicates and hand-wash pieces are separated from the regular load and billed on their own.",
  },
  {
    q: "What do you offer besides wash and fold?",
    a: "Dry cleaning and hand washing, plus shoes, bags, and commercial linen. Those are priced apart from a standard wash-and-fold load.",
  },
  {
    q: "What if I miss the delivery?",
    a: "We can try again the next day. After two failed attempts we stop re-delivery and the delivery fee is forfeited. You can then collect at the shop. Storage is free for seven days, then a storage fee applies. We only deliver back to the original pick-up address.",
  },
  {
    q: "How heavy can one load be?",
    a: "8 kilos. Over that, the extra weight starts another load.",
  },
];

/** Dates printed on the journey chart published on the original Our Story page. */
export const milestones = [
  {
    when: "July 2021",
    title: "Shop 1 · Cabancalan",
    text: "Cabancalan branch, Mandaue City.",
  },
  {
    when: "April 2023",
    title: "Shop 2 · Banilad",
    text: "Banilad branch, A.S. Fortuna, Mandaue City.",
  },
  {
    when: "March 2024",
    title: "Dropshot Ventures Corporation",
    text: "The company that holds the laundry shops.",
  },
  {
    when: "June 2024",
    title: "Shop 3 · Maguikay",
    text: "Maguikay branch, Mandaue City.",
  },
  {
    when: "February 2025",
    title: "Shop 4 · SM Seaside",
    text: "SM Seaside City branch, Cebu City.",
  },
  {
    when: "June 2025",
    title: "Warehouse and office",
    text: "Dropshot Ventures Corporation opens a new warehouse and office.",
  },
  {
    when: "July 2025",
    title: "Shop 5 · Banilad self-service",
    text: "Self-service at the Banilad branch, A.S. Fortuna, Mandaue City.",
  },
  {
    when: "November 2025",
    title: "Shop 6 · Lahug",
    text: "Lahug branch, Cebu City.",
  },
  {
    when: "March 2026",
    title: "Shop 7 · Cabancalan self-service",
    text: "Self-service area at the Cabancalan branch, Mandaue City.",
  },
];

const storyPhoto = (name) => `/story/${name}`;

export const storyMedia = {
  hero: storyPhoto("hero.jpg"),
  milestone: storyPhoto("milestone.png"),
  letter: storyPhoto("christmas-banner.png"),
  summer: [
    "summer-01.jpg",
    "summer-02.jpg",
    "summer-03.jpg",
    "summer-04.jpg",
    "summer-05.jpg",
    "summer-06.jpg",
    "summer-07.jpg",
    "summer-08.jpg",
    "summer-10.jpg",
    "summer-11.jpg",
    "summer-12.jpg",
    "summer-13.jpg",
    "summer-14.jpg",
  ].map(storyPhoto),
  christmas: [
    "christmas-01.jpg",
    "christmas-card.png",
    "christmas-02.jpg",
    "christmas-03.jpg",
    "christmas-04.jpg",
    "christmas-05.jpg",
    "christmas-06.jpg",
    "christmas-07.jpg",
    "christmas-08.jpg",
    "christmas-09.png",
    "christmas-10.jpg",
  ].map(storyPhoto),
};

export const gallery = [
  img("photo-1517677208171-0bc6725a3e60", 900),
  img("photo-1610557892470-55d9e80c0bce", 900),
  img("photo-1489274495757-95c7c837b101", 900),
  img("photo-1582735689369-4fe89db7114c", 900),
  img("photo-1626806787461-102c1bfaaea1", 900),
  img("photo-1556905055-8f358a7a47b2", 900),
];

export function telHref(display) {
  const digits = display.replace(/\D/g, "").replace(/^0/, "63");
  return `tel:+${digits}`;
}

export function mapsHref(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function findBranch(slug) {
  return branches.find((branch) => branch.slug === slug);
}
