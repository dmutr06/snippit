"use client";

import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

// TODO: add more variants
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary",
    isLoading?: boolean,
}

const base = "px-4 py-2 rounded font-medium transition-colors duration-300 hover:cursor-pointer disabled:opacity:50 disabled:cursor-not-allowed";

const variants = {
    primary: "bg-btn text-btn-text hover:bg-btn-hover",
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
