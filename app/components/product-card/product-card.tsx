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
    <div className="relative rounded-lg min-w-[600px] h-full p-5 border border-[#374151] space-y-3 bg-linear-to-br from-[#1F2937] from-60% to-[#484EC9]/50 hover:from-0% transition-all duration-300 hover:to-[#484EC9]/90 cursor-pointer hover:border-[#484EC9]">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Image src={gameIcon} alt={gameName} width={20} height={20} />
          <h2 className="font-semibold text-white text-xs">{gameName}</h2>
        </div>
        <span className="text-white opacity-80 text-xs">{timeAgo}</span>
      </div>

      <div className="flex items-start gap-5">
        {/* Product Image */}
        <div className="relative w-[250px] h-[218px] overflow-hidden rounded-lg shrink-0">
          <Image
            src={productImage}
            alt={productName}
            width={250}
            height={250}
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

            <div className="flex items-center gap-2">
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
          <h1 className="text-white font-semibold  text-sm line-clamp-3 mb-0">
            {productName}
          </h1>
          <Button variant="link" className="text-white p-0 text-[10px]">
            Show Description
          </Button>

          <div className="h-px bg-slate-600 w-full" />

          {/* Type */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-[8px]">Type</p>
              <div className="flex items-center gap-2">
                <span className="text-white text-[10px]">...</span>
                <ChevronRight className="text-white" size={10} />
                <p className="text-white text-[10px]">{productType}</p>
              </div>
            </div>

            <div>
              <p className="text-muted-foreground text-[8px]">
                Delivery Method
              </p>
              <p className="text-white text-[10px]">{deliveryMethod}</p>
            </div>

            <div>
              <p className="text-muted-foreground text-[8px]">Server</p>
              <p className="text-white text-[10px]">{server}</p>
            </div>
          </div>

          {/* Product Price */}
          <div className="rounded-lg bg-background px-4 py-3.5">
            <p className="text-xl font-bold text-yellow-300">
              $ {price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <Image
        src="/icons/ic-logo.png"
        alt="logo"
        width={250}
        height={250}
        className="absolute bottom-0 right-0 hover:right-20 transition-all duration-500"
      />
    </div>
  );
}
