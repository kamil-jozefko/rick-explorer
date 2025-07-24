import React, { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
    as?: React.ElementType;
    href?: string;
    hoverable?: boolean;
};

export default function Card({
    children,
    className = "",
    as: Component = "div",
    href,
    hoverable = false,
    ...rest
}: CardProps) {
    const hoverClasses = hoverable
        ? "hover:ring-2 hover:ring-primary-hover hover:bg-primary-hover hover:dark:bg-dark-primary-hover"
        : "";

    return (
        <Component
            href={href}
            className={`bg-card dark:bg-dark-card text-default dark:text-dark-default rounded-xl p-4 transition shadow-card ${hoverClasses} ${className}`}
            {...rest}
        >
            {children}
        </Component>
    );
}
