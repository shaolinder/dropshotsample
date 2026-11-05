/** Public shop facts. Edit this file to update phones, addresses, and copy. */

export const brand = {
  name: "Dropshot Laundry",
  legal: "Dropshot Laundry Shop",
  parent: "Dropshot Ventures Corp.",
  founded: "April 2021",
  email: "dropshotlaundrystation@gmail.com",
  franchiseEmail: "cris.wabinga@dropshotcorp.com",
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

export const branches = [
  {
    slug: "cabancalan",
    name: "Cabancalan",
    short: "Cabancalan Mandaue",
    city: "Mandaue City",
    kind: "Full service",
    image: img("photo-1517677208171-0bc6725a3e60", 1200),
    tagline: "Full-service laundry on Quezon Avenue, with a self-service area now open.",
    address: "787 ML Quezon Avenue, Cabancalan, Mandaue City, Cebu",
    phones: ["0955 540 9958", "0928 829 9957", "0968 899 0228"],
  },
  {
    slug: "cabancalan-self-service",
    name: "Cabancalan Self-Service",
    short: "Cabancalan Self Service",
    city: "Mandaue City",
    kind: "Self-service",
    image: img("photo-1626806787461-102c1bfaaea1", 1200),
    tagline: "Washers and dryers you run yourself, inside the Cabancalan shop.",
    address: "787 ML Quezon Avenue, Cabancalan, Mandaue City, Cebu",
    phones: ["0955 540 9958", "0928 829 9957", "0968 899 0228"],
  },
  {
    slug: "banilad",
    name: "Banilad",
    short: "Banilad Mandaue",
    city: "Mandaue City",
    kind: "Full service",
    image: img("photo-1610557892470-55d9e80c0bce", 1200),
    tagline: "Staff wash, fold, and finish on A.S. Fortuna.",
    address: "Unit 1, 880 A.S. Fortuna Street, Banilad, Mandaue City, Cebu",
    phones: ["0919 330 9275", "0975 507 2665", "0968 899 0228"],
  },
  {
    slug: "banilad-self-service",
    name: "Banilad Self-Service",
    short: "Banilad Self Service",
    city: "Mandaue City",
    kind: "Self-service",
    image: img("photo-1545173168-9f1947eebb7f", 1200),
    tagline: "Self-service machines in the unit beside the Banilad counter.",
    address: "Unit 2, 880 A.S. Fortuna Street, Banilad, Mandaue City, Cebu",
    phones: ["0919 330 9275", "0975 507 2665", "0968 899 0228"],
  },
  {
    slug: "lahug",
    name: "Lahug",
    short: "Lahug Salinas Drive Cebu",
    city: "Cebu City",
    kind: "Full service",
    image: img("photo-1489274495757-95c7c837b101", 1200),
    tagline: "Ground-floor shop on Salinas Drive, easy for pick-up and drop-off.",
    address: "GF ABC Plus Hotel & Homes, 35 Salinas Drive, Lahug, Cebu City",
    phones: ["0919 671 4248", "0969 092 8743"],
  },
  {
    slug: "maguikay",
    name: "Maguikay",
    short: "Maguikay Mandaue",
    city: "Mandaue City",
    kind: "Full service",
    image: img("photo-1582735689369-4fe89db7114c", 1200),
    tagline: "Full-service laundry along Quezon Avenue in Maguikay.",
    address: "728 ML Quezon Avenue, Maguikay, Mandaue City, Cebu",
    phones: ["0953 682 9085", "0962 303 0494", "0968 899 0228"],
  },
  {
    slug: "sm-seaside",
    name: "SM Seaside",
    short: "SM Seaside Cebu",
    city: "Cebu City",
    kind: "Full service",
    image: img("photo-1556905055-8f358a7a47b2", 1200),
    tagline: "Inside the mall, built for people who want pick-up and delivery nearby.",
    address:
      "Lower Ground Floor, Mountain Wing Arcade, SM Seaside City, South Coastal Road, Antuwanga, Cebu City",
    phones: ["0952 629 5313", "0968 899 0228"],
  },
];

export const faqs = [
  {
    q: "Do you pick up and deliver laundry?",
    a: "Yes. The delivery fee depends on the pick-up location. There is no minimum order.",
  },
  {
    q: "Where do you pick up?",
    a: "Mandaue City, Cebu City, Consolacion, Liloan, Lapu-Lapu City, Cordova, and Talisay City.",
  },
  {
    q: "When will my laundry be ready?",
    a: "Regular service is usually 24–48 hours. Express is about 4 hours, depending on the queue that day.",
  },
  {
    q: "What bag should I use?",
    a: "Your own basket or any bag is fine. Keep valuables and pieces you cannot replace out of the bag.",
  },
  {
    q: "How do I book a pick-up?",
    a: "Send your name, mobile number, address with a landmark, date and time, number of bags, and any special instruction to 0998 958 4398 or 0955 540 9958. The form on the pick-up page writes that message for you.",
  },
  {
    q: "How do I pay?",
    a: "Pay cash to the pick-up agent when the bag is collected, or pay by GCash or Maya before delivery.",
  },
  {
    q: "Can you handle delicates?",
    a: "Yes. Say so when you book. Delicates and hand-wash pieces are separated from the regular load and billed on their own.",
  },
  {
    q: "What if I miss the delivery?",
    a: "We can try again the next day. After two failed attempts we stop re-delivery and the delivery fee is forfeited. You can then collect at the shop. Storage is free for seven days, then a storage fee applies. We only deliver back to the original pick-up address.",
  },
  {
    q: "How heavy can one load be?",
    a: "8 kilos. Over that, the extra weight starts another load.",
  },
  {
    q: "What else do you wash besides clothes?",
    a: "Dry cleaning, hand washing, shoes and bags, and commercial linen. Those are priced separately from a standard wash-and-fold load.",
  },
];

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
