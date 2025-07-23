"use client";

import { gql, useQuery } from "@apollo/client";
import CharacterGrid from "../components/organisms/CharacterGrid";

type Character = {
    id: string;
    name: string;
    image: string;
    status: string;
    species: string;
};

const GET_CHARACTERS = gql`
    query GetCharacters($page: Int!) {
        characters(page: $page) {
            results {
                id
                name
                image
                status
                species
            }
        }
    }
`;

export default function CharactersPage() {
    const { data, loading, error } = useQuery(GET_CHARACTERS, {
        variables: { page: 1 },
    });

    if (loading)
        return (
            <p className="text-center text-gray-700 dark:text-gray-300 mt-10">
                Loading...
            </p>
        );
    if (error)
        return (
            <p className="text-center text-red-600 dark:text-red-400 mt-10">
                Error: {error.message}
            </p>
        );

    const characters: Character[] = data?.characters?.results ?? [];

    return <CharacterGrid characters={characters} />;
}
