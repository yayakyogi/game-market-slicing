"use client";

import Image from "next/image";
import { MessageCircleMore, ArrowRight, ArrowLeft, Search } from "lucide-react";
import { Button } from "../ui/button";
import ProductCard, { ProductCardProps } from "../product-card/product-card";
import MarketCard, { MarketCardProps } from "../market-card/market-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRef, useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  products: ProductCardProps[];
  markets: MarketCardProps[];
}

export default function ContentSection({
  products,
  markets,
}: ContentSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalResults = markets.length;

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);

      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[url(/background-image.png)] bg-cover bg-center bg-no-repeat">
      <div className="bg-linear-to-b from-background/85 via-background/95 to-background">
        {/* Content */}
        <div className="max-w-5xl mx-auto py-7 flex items-start gap-5">
          {/* About */}
          <div className="rounded-lg bg-card w-1/4 sticky top-24 p-5 border border-slate-700">
            {/* Profile */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative">
                <Image
                  src="/photo-profile.png"
                  alt="photo-profile"
                  width={98}
                  height={98}
                />
                <div className="w-5 h-5 rounded-full bg-green-500 absolute bottom-2 right-0" />
              </div>

              <h1 className="text-2xl font-bold text-white">BeastSpeed</h1>

              <div className="flex items-center gap-1">
                <Image
                  src="/icons/ic-star.png"
                  alt="star"
                  width={16}
                  height={16}
                />
                <span className="text-sm font-semibold text-warning">4.9</span>
                <span className="text-sm text-muted-foreground">
                  (200 reviews)
                </span>
              </div>

              <span className="text-muted-foreground text-xs">
                Member since 2025
              </span>

              <Button className="button-message w-3/4">
                <MessageCircleMore className="text-white font-semibold" />
                <span className="text-white font-semibold">Chat Seller</span>
              </Button>

              <div className="w-full h-px mt-3 bg-slate-600" />
            </div>

            {/* About */}
            <div className="mt-5 space-y-2">
              <h2 className="text-xl font-medium text-white">About</h2>
              <p className="text-white text-sm">
                ⚡️ BestSpeed – Fast & Trusted Game Boosting Services
              </p>
              <p className="text-white text-sm">🟢 Available 24/7</p>
              <p className="text-white text-sm">
                🚀 Delivery Time: Usually within 1–15 minutes after your order
                is received (mostly instant!)
              </p>
              <p className="text-white text-sm">
                Got any questions about our services? Need a custom order,
                special request, or something else?
              </p>
              <p className="text-white text-sm">
                💬 Just message us — we&apos;re always ready to help.
              </p>
              <p className="text-white text-sm">
                BestSpeed is trusted by thousands of gamers worldwide for speed,
                reliability, and excellent customer service. Let us handle the
                grind while you enjoy the game.
              </p>
            </div>

            {/* Badges */}
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-white">Badges</h2>
                <Button variant="link" className="text-xs">
                  See All Badges
                </Button>
              </div>

              <div className="flex items-center gap-2 justify-around mt-2">
                <Image
                  src="/icons/badge-1.png"
                  alt="badge-1"
                  width={62}
                  height={62}
                />
                <Image
                  src="/icons/badge-2.png"
                  alt="badge-2"
                  width={62}
                  height={62}
                />
                <Image
                  src="/icons/badge-3.png"
                  alt="badge-3"
                  width={62}
                  height={62}
                />
              </div>
            </div>
          </div>

          {/* Newest products */}
          <div className="w-3/4">
            {/* Title & Navigation */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-medium text-white">
                Newest products
              </h2>
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "relative rounded-full p-px bg-linear-to-r from-[#00a8e9] to-[#5961f3]",
                    !canScrollLeft && "opacity-50"
                  )}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}
                    className="h-8 w-8 rounded-full bg-background hover:bg-background"
                  >
                    <ArrowLeft className="h-4 w-4 text-white" />
                  </Button>
                </div>
                <div
                  className={cn(
                    "relative rounded-full p-px bg-linear-to-r from-[#00a8e9] to-[#5961f3]",
                    !canScrollRight && "opacity-50"
                  )}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={scrollRight}
                    disabled={!canScrollRight}
                    className="h-8 w-8 rounded-full bg-background hover:bg-background"
                  >
                    <ArrowRight className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Scrollable products */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex items-center gap-5 overflow-x-scroll scrollbar-hide max-w-full"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
              {/* Blur effect on the left */}
              {canScrollLeft && (
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent pointer-events-none" />
              )}
              {/* Blur effect on the right */}
              {canScrollRight && (
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent pointer-events-none" />
              )}
            </div>

            {/* Tabs Content */}
            <Tabs defaultValue="markets" className="w-full mt-5">
              <div className="border-b border-slate-700">
                <TabsList className="bg-transparent border-none p-0 h-auto gap-6">
                  <TabsTrigger value="markets">BestSpeed markets</TabsTrigger>
                  <TabsTrigger value="reviews">Recent reviews</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="markets" className="mt-5 w-full">
                <div className="space-y-4 bg-card p-5 rounded-lg border border-slate-700">
                  {/* Header with title and search */}
                  <div className="flex items-center justify-between">
                    <h1 className="text-xl font-medium text-white">
                      BestSpeed markets
                    </h1>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search markets..."
                        className="w-[300px] pl-4 pr-10 py-1.5 border border-slate-600 bg-background rounded-md text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      />
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    </div>
                  </div>

                  {/* Markets Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {markets
                      .slice(
                        (currentPage - 1) * itemsPerPage,
                        currentPage * itemsPerPage
                      )
                      .map((market, index) => (
                        <MarketCard key={index} {...market} />
                      ))}
                  </div>

                  {/* Pagination */}
                  <div className="flex items-center justify-between pt-4 ">
                    {/* Items per page dropdown */}
                    <div className="flex items-center gap-2">
                      <Select
                        value={itemsPerPage.toString()}
                        onValueChange={(value) => {
                          setItemsPerPage(Number(value));
                          setCurrentPage(1);
                        }}
                      >
                        <SelectTrigger className="w-[80px] h-9 text-muted-foreground">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10</SelectItem>
                          <SelectItem value="20">20</SelectItem>
                          <SelectItem value="50">50</SelectItem>
                        </SelectContent>
                      </Select>

                      <div className="text-sm text-muted-foreground">
                        Showing{" "}
                        {currentPage === 1
                          ? 1
                          : (currentPage - 1) * itemsPerPage + 1}{" "}
                        of {Math.min(currentPage * itemsPerPage, totalResults)}{" "}
                        from {totalResults} Results
                      </div>
                    </div>

                    {/* Pagination controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCurrentPage(1)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                          currentPage === 1
                            ? "bg-input/30 text-white border border-input"
                            : "text-muted-foreground hover:text-white"
                        }`}
                      >
                        01
                      </button>
                      {Math.ceil(totalResults / itemsPerPage) > 1 && (
                        <button
                          onClick={() => setCurrentPage(2)}
                          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                            currentPage === 2
                              ? "bg-input/30 text-white border border-input"
                              : "text-muted-foreground hover:text-white"
                          }`}
                        >
                          02
                        </button>
                      )}
                      {currentPage < Math.ceil(totalResults / itemsPerPage) && (
                        <button
                          onClick={() =>
                            setCurrentPage((prev) =>
                              prev < Math.ceil(totalResults / itemsPerPage)
                                ? prev + 1
                                : prev
                            )
                          }
                          className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                        >
                          Next
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-5"></TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
