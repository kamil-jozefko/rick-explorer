"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "../atoms/Card";

type FeatureCardProps = {
    title: string;
    description: string;
    href: string;
};

export default function FeatureCard({
    title,
    description,
    href,
}: FeatureCardProps) {
    return (
        <Link
            href={href}
            className="group block rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-primary)] transition"
            aria-label={`Learn more about ${title}`}
        >
            <Card className="p-6 h-full group-hover:bg-[var(--color-primary)]  group-hover:ring-[var(--color-primary)] transition">
                <h3 className="card-heading mb-2">{title}</h3>
                <p className="card-subtext mb-4">{description}</p>
                <div className="flex items-center gap-2 font-medium">
                    <span className="card-subtext">Learn more</span>
                    <ArrowRight className="w-5 h-5 card-subtext" />
                </div>
            </Card>
        </Link>
    );
}
