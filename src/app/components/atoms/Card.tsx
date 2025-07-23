import React, { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
    as?: React.ElementType;
    href?: string;
};

export default function Card({
    children,
    className = "",
    as: Component = "div",
    href,
    ...rest
}: CardProps) {
    return (
        <Component href={href} className={`card ${className}`} {...rest}>
            {children}
        </Component>
    );
}
