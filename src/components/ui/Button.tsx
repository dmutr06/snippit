"use client";

import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger",
    isLoading?: boolean,
}

const base = "px-4 py-2 rounded font-medium transition-colors duration-300 hover:cursor-pointer disabled:opacity:50 disabled:cursor-not-allowed";

const variants = {
    primary: "bg-fuchsia-600 text-white hover:bg-fuchsia-700",
    secondary: "bg-indigo-600 text-white hover:bg-indigo-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
}

export default function Button({ children, variant = "primary", isLoading = false, disabled, className, ...props }: ButtonProps) {
    return (
        <button 
            className={clsx(base, variants[variant], className)}
            disabled={disabled || isLoading}
            {...props}
        >
            {children}
        </button>
    );
}
