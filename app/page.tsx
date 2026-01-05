"use client";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ContentSection from "./components/content-section/content-section";
import { ProductCardProps } from "./components/product-card/product-card";
import { MarketCardProps } from "./components/market-card/market-card";

const products: ProductCardProps[] = [
  {
    gameIcon: "/icons/ic-genshin.png",
    gameName: "Genshin Impact",
    timeAgo: "5 minutes ago",
    productImage: "/pp-genshin.png",
    sellerAvatar: "/photo-profile.png",
    sellerName: "BestSpeed",
    sellerRating: 4.9,
    reviewCount: 200,
    productName:
      "Asia [TL70] 8 Limited (AcheronE1 +sign, RuanMeiE1, Tribbie+Sign,Bothill+Sign, BSwan+ Sign,Aventurine) |Take Email|CHECK SS (HSR1354)",
    productType: "Boost",
    deliveryMethod: "In Chat",
    server: "Standard",
    price: 49.99,
  },
  {
    gameIcon: "/icons/ic-genshin.png",
    gameName: "Genshin Impact",
    timeAgo: "10 minutes ago",
    productImage: "/pp-genshin.png",
    sellerAvatar: "/photo-profile.png",
    sellerName: "BestSpeed",
    sellerRating: 4.9,
    reviewCount: 200,
    productName: "Europe [TL80] Full Account with 5-Star Characters",
    productType: "Account",
    deliveryMethod: "Email",
    server: "Europe",
    price: 99.99,
  },
  {
    gameIcon: "/icons/ic-genshin.png",
    gameName: "Genshin Impact",
    timeAgo: "15 minutes ago",
    productImage: "/pp-genshin.png",
    sellerAvatar: "/photo-profile.png",
    sellerName: "BestSpeed",
    sellerRating: 4.9,
    reviewCount: 200,
    productName: "America [TL60] Character Leveling Service",
    productType: "Service",
    deliveryMethod: "In Chat",
    server: "America",
    price: 29.99,
  },
  {
    gameIcon: "/icons/ic-genshin.png",
    gameName: "Genshin Impact",
    timeAgo: "20 minutes ago",
    productImage: "/pp-genshin.png",
    sellerAvatar: "/photo-profile.png",
    sellerName: "BestSpeed",
    sellerRating: 4.9,
    reviewCount: 200,
    productName: "Asia [TL90] Premium Account with All Characters",
    productType: "Account",
    deliveryMethod: "Email",
    server: "Asia",
    price: 149.99,
  },
];

const markets: MarketCardProps[] = [
  {
    gameIcon: "/icons/ic-path-of-exile.png",
    gameName: "Path of Exile",
    listingsCount: 32,
    rating: 5,
    reviewCount: 87,
  },
  {
    gameIcon: "/icons/ic-ballance.png",
    gameName: "Albion Online",
    listingsCount: 28,
    rating: 5,
    reviewCount: 87,
  },
  {
    gameIcon: "/icons/ic-genshin.png",
    gameName: "Delta Force",
    listingsCount: 20,
    rating: 5,
    reviewCount: 87,
  },
  {
    gameIcon: "/icons/ic-genshin.png",
    gameName: "Diablo IV",
    listingsCount: 18,
    rating: 5,
    reviewCount: 87,
  },
  {
    gameIcon: "/icons/ic-genshin.png",
    gameName: "Genshin Impact",
    listingsCount: 15,
    rating: 5,
    reviewCount: 87,
  },
  {
    gameIcon: "/icons/ic-genshin.png",
    gameName: "Growtopia",
    listingsCount: 12,
    rating: 5,
    reviewCount: 87,
  },
  {
    gameIcon: "/icons/ic-genshin.png",
    gameName: "Trove",
    listingsCount: 10,
    rating: 5,
    reviewCount: 87,
  },
  {
    gameIcon: "/icons/ic-genshin.png",
    gameName: "Black Desert Online",
    listingsCount: 8,
    rating: 5,
    reviewCount: 87,
  },
  {
    gameIcon: "/icons/ic-genshin.png",
    gameName: "Destiny 2",
    listingsCount: 5,
    rating: 5,
    reviewCount: 87,
  },
  {
    gameIcon: "/icons/ic-genshin.png",
    gameName: "Valorant",
    listingsCount: 2,
    rating: 5,
    reviewCount: 87,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <ContentSection products={products} markets={markets} />
      <Footer />
    </div>
  );
}
