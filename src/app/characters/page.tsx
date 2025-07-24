"use client";

import { gql, useQuery } from "@apollo/client";
import CharacterGrid from "../components/organisms/CharacterGrid";
import LoadingSpinner from "../components/molecules/LoadingSpinner";
import ErrorMessage from "../components/molecules/ErrorMessage";
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

if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage message={error.message} />;
    const characters: Character[] = data?.characters?.results ?? [];

    return <CharacterGrid characters={characters} />;
}
