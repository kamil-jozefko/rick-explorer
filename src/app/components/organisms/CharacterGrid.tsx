import CharacterCard from "../molecules/CharacterCard";

type Character = {
    id: string;
    name: string;
    image: string;
    status: string;
    species: string;
};

interface CharacterGridProps {
    characters: Character[];
}

export default function CharacterGrid({ characters }: CharacterGridProps) {
    if (characters.length === 0) {
        return (
            <p className="text-center text-gray-600 dark:text-gray-400 mt-10">
                No characters found.
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {characters.map((char) => (
                <CharacterCard key={char.id} character={char} />
            ))}
        </div>
    );
}
