import Image from "next/image";

export interface MarketCardProps {
  gameAvatar: string;
  gameName: string;
  listingsCount: number;
  rating: number;
  reviewCount: number;
}

export default function MarketCard({
  gameAvatar,
  gameName,
  listingsCount,
  rating,
  reviewCount,
}: MarketCardProps) {
  return (
    <div className="rounded-lg bg-background p-4 transition-all duration-300 cursor-pointer hover:bg-linear-to-r from-[#1F2937] to-[#484EC9]/50 hover:outline-2 hover:outline-[#484EC9]">
      <div className="flex items-start gap-3">
        <div className="relative shrink-0">
          <Image
            src={gameAvatar}
            alt={gameName}
            width={44}
            height={44}
            className="rounded-full"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-medium text-sm mb-1 truncate">
            {gameName}
          </h3>
          <p className="text-muted-foreground text-xs mb-2">
            {listingsCount} listings
          </p>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src="/icons/ic-star.png"
                alt="star"
                width={20}
                height={20}
                className="opacity-100"
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({reviewCount} reviews)
          </span>
        </div>
      </div>
    </div>
  );
}
