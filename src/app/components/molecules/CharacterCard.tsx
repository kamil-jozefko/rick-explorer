import Link from "next/link";
import Avatar from "../atoms/Avatar";
import Card from "../atoms/Card";

type Character = {
    id: string;
    name: string;
    image: string;
    status: string;
    species: string;
};

export default function CharacterCard({ character }: { character: Character }) {
    return (
        <Link
            href={`/characters/${character.id}`}
            className="group block rounded-xl focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)] transition"
            aria-label={`View details about ${character.name}`}
            tabIndex={0}
        >
            <Card className="flex flex-col items-center group-hover:bg-[var(--color-primary)] group-hover:ring-[var(--color-primary)] transition">
                <Avatar src={character.image} alt={character.name} size={112} />
                <h3 className="card-heading mt-4">{character.name}</h3>
                <p className="card-subtext mt-1">
                    {character.status} - {character.species}
                </p>
            </Card>
        </Link>
    );
}
