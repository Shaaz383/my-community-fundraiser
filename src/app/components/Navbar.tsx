import Link from 'next/link';
import { AiOutlineMenu } from "react-icons/ai";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">Fundraiser</Link>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <AiOutlineMenu className="text-white" size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-md rounded-md mt-2">
              <DropdownMenuLabel className="text-blue-600 font-bold">Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/dashboard" className="text-gray-700 hover:bg-blue-100 block px-4 py-2 rounded-md">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about" className="text-gray-700 hover:bg-blue-100 block px-4 py-2 rounded-md">About Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact" className="text-gray-700 hover:bg-blue-100 block px-4 py-2 rounded-md">Contact Us</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-blue-600 font-bold">Profile</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile" className="text-gray-700 hover:bg-blue-100 block px-4 py-2 rounded-md">My Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/profile/edit" className="text-gray-700 hover:bg-blue-100 block px-4 py-2 rounded-md">Edit</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/logout" className="text-gray-700 hover:bg-blue-100 block px-4 py-2 rounded-md">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
