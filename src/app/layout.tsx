import { ApolloWrapper } from "@/lib/apollo/ApolloWrapper";
import Header from "./components/organisms/Header";
import "./globals.css";

const routes = [{ href: "/characters", label: "Characters" }];
export const metadata = {
    title: "Rick & Morty Explorer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header routes={routes} />
                <main className="bg-white dark:bg-gray-900 min-h-screen pt-16 transition-colors duration-300">
                    <div className="px-6 py-12 container mx-auto">
                        <ApolloWrapper>{children}</ApolloWrapper>
                    </div>
                </main>
            </body>
        </html>
    );
}
