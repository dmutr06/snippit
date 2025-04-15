import { LucideIcon } from "lucide-react";

export default function MenuIcon({ icon: Icon }: { icon: LucideIcon }) {
    return <Icon className="text-primary-400 hover:text-primary-100 transition-colors duration-300 w-full h-full max-h-12 p-2 aspect-square" />; 
}
