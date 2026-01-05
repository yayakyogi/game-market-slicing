import Image from "next/image";

export interface MarketCardProps {
  gameIcon: string;
  gameName: string;
  listingsCount: number;
  rating: number;
  reviewCount: number;
}

export default function MarketCard({
  gameIcon,
  gameName,
  listingsCount,
  rating,
  reviewCount,
}: MarketCardProps) {
  return (
    <div className="rounded-lg bg-background p-4 border border-slate-600 hover:border-slate-500 transition-colors cursor-pointer">
      <div className="flex items-start gap-3">
        <div className="relative shrink-0">
          <Image
            src={gameIcon}
            alt={gameName}
            width={48}
            height={48}
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
        <div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src="/icons/ic-star.png"
                alt="star"
                width={12}
                height={12}
                className="opacity-100"
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-1">
            ({reviewCount} reviews)
          </span>
        </div>
      </div>
    </div>
  );
}
