import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export interface ProductCardProps {
  gameIcon: string;
  gameName: string;
  timeAgo: string;
  productImage: string;
  sellerAvatar: string;
  sellerName: string;
  sellerRating: number;
  reviewCount: number;
  productName: string;
  productType: string;
  deliveryMethod: string;
  server: string;
  price: number;
}

export default function ProductCard({
  gameIcon,
  gameName,
  timeAgo,
  productImage,
  sellerAvatar,
  sellerName,
  sellerRating,
  reviewCount,
  productName,
  productType,
  deliveryMethod,
  server,
  price,
}: ProductCardProps) {
  return (
    <div className="rounded-lg min-w-[750px] p-5 border border-slate-600 space-y-3 bg-[linear-gradient(0deg,#1F2937,#1F2937),linear-gradient(108.93deg,rgba(31,41,55,0)_46.97%,rgba(72,78,201,0.3)_100%)]">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Image src={gameIcon} alt={gameName} width={20} height={20} />
          <h2 className="font-medium text-white text-lg">{gameName}</h2>
        </div>
        <span className="text-white text-sm">{timeAgo}</span>
      </div>

      <div className="flex items-start gap-5">
        {/* Product Image */}
        <div className="relative w-[280px] h-[280px] overflow-hidden rounded shrink-0">
          <Image
            src={productImage}
            alt={productName}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
          <div className="z-10 absolute bottom-0 w-full flex items-center justify-center p-2 gap-2">
            {/* User Profile */}
            <div className="relative">
              <Image
                src={sellerAvatar}
                alt={sellerName}
                width={20}
                height={20}
              />
              <div className="absolute w-2 h-2 right-0 bottom-0 rounded-full bg-green-500" />
            </div>

            <h3 className="text-white text-xs font-semibold">{sellerName}</h3>

            <div className="flex items-center gap-1">
              <Image
                src="/icons/ic-star.png"
                alt="star"
                width={20}
                height={20}
              />
              <span className="text-xs font-semibold text-warning">
                {sellerRating}
              </span>
              <span className="text-xs text-muted-foreground">
                ({reviewCount})
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 bg-linear-to-t from-background to-transparent w-full h-20"></div>
        </div>

        {/* Product Description */}
        <div className="space-y-3">
          {/* Product Name */}
          <h1 className="text-white font-semibold line-clamp-3">
            {productName}
          </h1>
          <Button variant="link" className="text-white p-0 text-xs">
            Show Description
          </Button>

          <div className="h-px bg-slate-600 w-full" />

          {/* Type */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-xs">Type</p>
              <div className="flex items-center gap-2">
                <span className="text-white">...</span>
                <ChevronRight className="text-white" size={15} />
                <p className="text-white text-sm">{productType}</p>
              </div>
            </div>

            <div>
              <p className="text-muted-foreground text-xs">Delivery Method</p>
              <p className="text-white text-sm">{deliveryMethod}</p>
            </div>

            <div>
              <p className="text-muted-foreground text-xs">Server</p>
              <p className="text-white text-sm">{server}</p>
            </div>
          </div>

          {/* Product Price */}
          <div className="rounded-lg bg-primary p-5">
            <p className="text-2xl font-bold text-yellow-400">
              $ {price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
