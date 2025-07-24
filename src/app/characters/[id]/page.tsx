"use client";

import Avatar from "@/app/components/atoms/Avatar";
import Card from "@/app/components/atoms/Card";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const GET_CHARACTER = gql`
    query GetCharacter($id: ID!) {
        character(id: $id) {
            id
            name
            image
            status
            species
            gender
            origin {
                name
            }
            location {
                name
            }
            episode {
                id
                name
                episode
            }
        }
    }
`;

export default function CharacterDetailPage() {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_CHARACTER, {
        variables: { id },
        skip: !id,
    });

    if (loading) return <p className="text-center py-8 ">Loading...</p>;
    if (error)
        return (
            <p className="text-center py-8 text-red-500">
                Error: {error.message}
            </p>
        );

    const char = data.character;

    return (
        <div>
            <Card>
                <div className="flex items-center gap-8">
                    <Avatar src={char.image} alt={char.name} size={160} />
                    <div>
                        <h1 className="card-heading">{char.name}</h1>
                        <div className="card-subtext">
                            <span>{char.status}</span> ·
                            <span>{char.species}</span> ·
                            <span>{char.gender}</span>
                        </div>
                        <p className="card-subtext">
                            Origin: {char.origin.name}
                        </p>
                        <p className="card-subtext">
                            Current Location: {char.location.name}
                        </p>
                    </div>
                </div>
            </Card>

            <section className="mt-10 text-default-muted dark:text-dark-default-muted">
                <h2 className="text-xl font-semibold mb-2">Episodes</h2>
                <ul className="space-y-1 text-sm list-inside list-disc">
                    {char.episode.map(
                        (ep: { id: string; episode: string; name: string }) => (
                            <li key={ep.id}>
                                <span className="font-medium">
                                    {ep.episode}
                                </span>{" "}
                                – {ep.name}
                            </li>
                        )
                    )}
                </ul>
            </section>
        </div>
    );
}
