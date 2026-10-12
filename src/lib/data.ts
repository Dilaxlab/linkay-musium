export interface Artifact {
  id: string;
  name: string;
  era: string;
  region: string;
  hash: string;
  image: string;
  category: string;
  verified: boolean;
  polygons: string;
}

export interface Auction {
  id: string;
  title: string;
  image: string;
  currentBid: number;
  endsAt: string;
  verified: boolean;
  bidsCount: number;
  tier: "Tier 1: Sovereign" | "Tier 2: Institutional" | "Tier 3: Collector";
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  dept: string;
  linkedin: string;
}

export const artifacts: Artifact[] = [
  {
    id: "LTM-001",
    name: "Pharaoh's Electrum Crown of Amenhotep III",
    era: "1386–1349 BCE",
    region: "Thebes, Egypt",
    hash: "0x8f4c399b1a20d921b74a382e77cc",
    image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80",
    category: "Royal Regalia",
    verified: true,
    polygons: "2.4M",
  },
  {
    id: "LTM-002",
    name: "Benin Bronze Oba Commemorative Plaque",
    era: "16th Century CE",
    region: "Kingdom of Benin, Nigeria",
    hash: "0x3b1af8820c741e9bb872410a56fd",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    category: "Bronze Sculptures",
    verified: true,
    polygons: "1.8M",
  },
  {
    id: "LTM-003",
    name: "Axumite Granite Stele Monolith Fragment",
    era: "4th Century CE",
    region: "Tigray, Ethiopia",
    hash: "0xa1e47992c31e44da214902cd517e",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    category: "Architectural Monuments",
    verified: true,
    polygons: "3.1M",
  },
  {
    id: "LTM-004",
    name: "Timbuktu Astronomical Illuminated Codex",
    era: "1375 CE",
    region: "Mali Empire",
    hash: "0x5c90e102f9c8d321bb013284aa33",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
    category: "Ancient Manuscripts",
    verified: false,
    polygons: "0.4M",
  },
  {
    id: "LTM-005",
    name: "Great Zimbabwe Soapstone Bird Figurine",
    era: "11th–15th Century CE",
    region: "Masvingo, Zimbabwe",
    hash: "0x12fa6c50e184b299c855a90d3419",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    category: "Sacred Totems",
    verified: true,
    polygons: "1.2M",
  },
  {
    id: "LTM-006",
    name: "Nubian Kandake Royal Diadem",
    era: "~100 BCE",
    region: "Meroë, Sudan",
    hash: "0x77c25441a99b4712cc0954316aef",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    category: "Royal Regalia",
    verified: true,
    polygons: "2.0M",
  },
  {
    id: "LTM-007",
    name: "Kushite Bronze Archery Thumb Ring",
    era: "750 BCE",
    region: "Napata, Nubia",
    hash: "0x89bb41094dc12ea7b51094ba4391",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    category: "Weaponry & Armor",
    verified: true,
    polygons: "0.8M",
  },
  {
    id: "LTM-008",
    name: "Djenne Terracotta Equestrian Figure",
    era: "13th Century CE",
    region: "Inland Niger Delta, Mali",
    hash: "0x44dc1899eab3182a0b127495ccfa",
    image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=800&q=80",
    category: "Ceramics & Terracotta",
    verified: true,
    polygons: "1.5M",
  },
  {
    id: "LTM-009",
    name: "Nok Culture Sculptural Terracotta Head",
    era: "500 BCE",
    region: "Kaduna, Nigeria",
    hash: "0x98bb77a10df54129bb881a50dc03",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    category: "Ceramics & Terracotta",
    verified: true,
    polygons: "1.7M",
  },
  {
    id: "LTM-010",
    name: "Lalibela Carved Processional Cross",
    era: "12th Century CE",
    region: "Amhara, Ethiopia",
    hash: "0x21cc0981bfae3450981aa420fe81",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    category: "Sacred Totems",
    verified: true,
    polygons: "1.1M",
  },
  {
    id: "LTM-011",
    name: "Swahili Coast Coral Stone Mihrab Fragment",
    era: "14th Century CE",
    region: "Kilwa Kisiwani, Tanzania",
    hash: "0x66fe189a0ba1255eef990145bc38",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    category: "Architectural Monuments",
    verified: false,
    polygons: "2.9M",
  },
  {
    id: "LTM-012",
    name: "Ashanti Golden Stool Ceremonial Bell",
    era: "1701 CE",
    region: "Kumasi, Ghana",
    hash: "0x33aa9812ccf1092a991475bbdd09",
    image: "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=800&q=80",
    category: "Royal Regalia",
    verified: true,
    polygons: "1.3M",
  },
];

export const auctions: Auction[] = [
  {
    id: "AUC-001",
    title: "Dynasty Gold Ceremonial Mask & 1:1 Twin NFT",
    image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80",
    currentBid: 87500,
    endsAt: new Date(Date.now() + 2 * 3600000 + 45 * 60000).toISOString(),
    verified: true,
    bidsCount: 28,
    tier: "Tier 1: Sovereign",
  },
  {
    id: "AUC-002",
    title: "Benin Bronze Oba Plaque (Photogrammetry 3D NFT)",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    currentBid: 34200,
    endsAt: new Date(Date.now() + 6 * 3600000 + 12 * 60000).toISOString(),
    verified: true,
    bidsCount: 42,
    tier: "Tier 2: Institutional",
  },
  {
    id: "AUC-003",
    title: "Axumite Carved Obsidian Stele Fragment",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    currentBid: 21800,
    endsAt: new Date(Date.now() + 14 * 3600000 + 30 * 60000).toISOString(),
    verified: true,
    bidsCount: 15,
    tier: "Tier 2: Institutional",
  },
  {
    id: "AUC-004",
    title: "Kushite Royal Gold Sceptre Edition #01",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    currentBid: 16500,
    endsAt: new Date(Date.now() + 28 * 3600000).toISOString(),
    verified: true,
    bidsCount: 9,
    tier: "Tier 3: Collector",
  },
  {
    id: "AUC-005",
    title: "Timbuktu Astrolabe Celestial Dial",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
    currentBid: 12400,
    endsAt: new Date(Date.now() + 42 * 3600000).toISOString(),
    verified: false,
    bidsCount: 11,
    tier: "Tier 3: Collector",
  },
  {
    id: "AUC-006",
    title: "Great Zimbabwe Monolithic Hawk Relic",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    currentBid: 49000,
    endsAt: new Date(Date.now() + 52 * 3600000).toISOString(),
    verified: true,
    bidsCount: 31,
    tier: "Tier 1: Sovereign",
  },
];

export const tokens = {
  price: 2.47,
  change24h: "+4.2%",
  marketCap: "$49.4M",
  circulatingSupply: "20,000,000",
  totalSupply: "100,000,000",
  distribution: [
    { name: "Community & Ecosystem", value: 40, color: "#00E5FF" },
    { name: "Museum Treasury & Vault", value: 20, color: "#D4AF37" },
    { name: "Core Curators & Tech", value: 15, color: "#1E3A8A" },
    { name: "DEX Liquidity & Staking", value: 15, color: "#10B981" },
    { name: "Advisory & Research", value: 10, color: "#CD7F32" },
  ],
};

export const milestones: Milestone[] = [
  { year: "2019", title: "Inception & Research", description: "Founding of Linkay Thinktank with focus on archeological digitization and restitution protocols." },
  { year: "2021", title: "Sub-Millimeter LiDAR", description: "Deployed custom 3D scanning rigs across 5 African heritage repositories." },
  { year: "2023", title: "AI Neural Curator 1.0", description: "Launched our first multimodal knowledge engine for museum visitor assistance." },
  { year: "2024", title: "LTM Token Economy", description: "Published on-chain provenance standard ERC-721H and decentralized vault governance." },
  { year: "2025", title: "Spatial WebXR Platform", description: "Seamless stereoscopic museum galleries deployed to Apple Vision Pro and Quest 3." },
  { year: "2026", title: "Global Thinktank Network", description: "40+ museum partners interconnected via real-time Digital & Information Twins." },
];

export const team: TeamMember[] = [
  { name: "Dr. Amara Osei", role: "Executive Director & Founder", image: "https://i.pravatar.cc/400?img=32", dept: "Executive", linkedin: "#" },
  { name: "Prof. Kwame Asante", role: "Chief Curator & Antiquities Lead", image: "https://i.pravatar.cc/400?img=11", dept: "Curatorial", linkedin: "#" },
  { name: "Dr. Leila Nazari", role: "Head of AI & Neural Curating", image: "https://i.pravatar.cc/400?img=47", dept: "Engineering", linkedin: "#" },
  { name: "Marcus Chen", role: "Lead Spatial XR Architect", image: "https://i.pravatar.cc/400?img=60", dept: "Virtual Reality", linkedin: "#" },
  { name: "Sofia Almeida", role: "Principal UI/UX Systems", image: "https://i.pravatar.cc/400?img=25", dept: "Design", linkedin: "#" },
  { name: "Dr. Tariq Al-Mansoor", role: "Blockchain Cryptography Lead", image: "https://i.pravatar.cc/400?img=68", dept: "Web3", linkedin: "#" },
  { name: "Elena Rostova", role: "Director of Institutional Partnerships", image: "https://i.pravatar.cc/400?img=9", dept: "Enterprise", linkedin: "#" },
  { name: "Chidi Nnamdi", role: "IoT & Smart Sensor Director", image: "https://i.pravatar.cc/400?img=12", dept: "Physica", linkedin: "#" },
];

export const advisoryBoard: TeamMember[] = [
  { name: "Dame Evelyn Crawford", role: "Senior Advisor, UNESCO Heritage", image: "https://i.pravatar.cc/400?img=44", dept: "Advisory", linkedin: "#" },
  { name: "Dr. Kenji Takahashi", role: "Fellow, MIT Media Lab Spatial Computing", image: "https://i.pravatar.cc/400?img=33", dept: "Advisory", linkedin: "#" },
  { name: "Hon. Fatoumata Diallo", role: "Former Minister of Arts & Culture", image: "https://i.pravatar.cc/400?img=20", dept: "Advisory", linkedin: "#" },
];

export interface PatentModel {
  id: string;
  name: string;
  inventor: string;
  year: string;
  category: string;
  description: string;
  status: "Authenticated" | "Vaulted" | "Available for Viewing";
  image: string;
}

export const patentModels: PatentModel[] = [
  {
    id: "PM-1874-01",
    name: "Mercantile Signal Printer",
    inventor: "Elias Whitmore",
    year: "1874",
    category: "Communication & Market Data",
    description: "A compact communication model showing how market information could move faster, more clearly, and with greater confidence across commercial networks.",
    status: "Authenticated",
    image: "/images/hero-image-version-3.png",
  },
  {
    id: "PM-1888-02",
    name: "Adjustable Hospital Companion Table",
    inventor: "Clara B. Harlan",
    year: "1888",
    category: "Clinical Care & Patient Comfort",
    description: "A practical care model designed around patient comfort, bedside access, and everyday clinical usefulness in convalescent care facilities.",
    status: "Vaulted",
    image: "/images/im1.png",
  },
  {
    id: "PM-1881-03",
    name: "Concert Piano Action Model",
    inventor: "Anton Vale",
    year: "1881",
    category: "Acoustic Engineering",
    description: "A finely built mechanism that turns touch into movement, revealing the intricate wooden levers and dampers hidden inside musical expression.",
    status: "Authenticated",
    image: "/images/im2.png",
  },
  {
    id: "PM-1892-04",
    name: "Urban Rescue Ladder Carriage",
    inventor: "Jonah Merritt",
    year: "1892",
    category: "Public Safety & Municipal Works",
    description: "A public-safety model focused on vertical reach, mechanical stability, and rapid response gear deployed in densely crowded city streets.",
    status: "Vaulted",
    image: "/images/im3.png",
  },
  {
    id: "PM-1889-05",
    name: "Portable Roll-Film Camera Model",
    inventor: "Lydia Eastbrook",
    year: "1889",
    category: "Optics & Early Photography",
    description: "A hand-carried image-making model that points toward photography becoming a simpler, lighter, and universally accessible personal practice.",
    status: "Authenticated",
    image: "/images/ChatGPT-Image-Jan-9-2026-01_19_43-PM.png",
  },
  {
    id: "PM-1885-06",
    name: "Iron Prairie Wind Engine",
    inventor: "Samuel Harrow",
    year: "1885",
    category: "Rural Energy & Mechanical Power",
    description: "A durable rural-power model built for agricultural water pumping, utility milling, and dependable self-governing work across open country.",
    status: "Available for Viewing",
    image: "/images/Jan-7-2026-06_28_07-PM.png",
  },
];
