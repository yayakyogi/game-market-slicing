import Image from "next/image";

import {
  Bell,
  ChevronDown,
  MessageCircleMore,
  ShoppingCart,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import IconMenu from "./icon-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Header() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between py-3 px-8 backdrop-blur-2xl bg-[radial-gradient(27.22%_77.17%_at_48.72%_50%,#363B9F_0%,#1F2937_100%)]">
      <div className="w-96">
        <Image src="/logo.png" alt="logo" width={55} height={40} />
      </div>

      <div>
        <Select>
          <SelectTrigger className="w-[400px] text-white bg-primary border-none">
            <SelectValue placeholder="Browse 1.700+ game markets..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Mobile Legend</SelectItem>
            <SelectItem value="dark">Genshin Impact</SelectItem>
            <SelectItem value="system">Pubg Mobile</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-5">
        {/* Shortcut Menu */}
        <IconMenu icon={<ShoppingCart className="text-white" />} count={10} />
        <IconMenu icon={<Bell className="text-white" />} count={99} />
        <IconMenu
          icon={<MessageCircleMore className="text-white" />}
          count={5}
        />

        {/* Ballance Menu Section */}
        <div className="border border-slate-600 bg-primary gap-2 rounded-lg py-2 px-3 flex items-center justify-between">
          <Image
            src="/icons/ic-ballance.png"
            width={25}
            height={25}
            alt="ballance"
          />
          <span className="font-semibold text-sm text-white">$ 99,999.0</span>
        </div>

        {/* Profile Menu Section */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-between gap-2">
              <Image
                src="/icons/ic-profile.png"
                width={30}
                height={30}
                alt="profile"
              />
              <ChevronDown className="text-white" size={15} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile Menu</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Currency Menu Section */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-between gap-2">
              <span className="text-white text-sm font-semibold">USD</span>
              <ChevronDown className="text-white" size={15} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>USD</DropdownMenuItem>
            <DropdownMenuItem>EUR</DropdownMenuItem>
            <DropdownMenuItem>GBP</DropdownMenuItem>
            <DropdownMenuItem>JPY</DropdownMenuItem>
            <DropdownMenuItem>KRW</DropdownMenuItem>
            <DropdownMenuItem>CNY</DropdownMenuItem>
            <DropdownMenuItem>INR</DropdownMenuItem>
            <DropdownMenuItem>BRL</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
