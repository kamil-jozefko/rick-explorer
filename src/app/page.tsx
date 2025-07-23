import FeatureCard from "./components/molecules/FeatureCard";

export default function HomePage() {
    const features = [
        {
            title: "Characters",
            description:
                "Meet all your favorite (and bizarre) characters from every episode.",
            href: "/characters",
        },
    ];

    return (
        <div>
            <section className="text-center mb-20 ">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                    Discover the Universe of Rick & Morty
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Browse through hundreds of characters, explore unknown
                    dimensions, and revisit your favorite episodes — all in one
                    place.
                </p>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.href}
                        title={feature.title}
                        description={feature.description}
                        href={feature.href}
                    />
                ))}
            </section>
        </div>
    );
}
