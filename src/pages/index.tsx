import { useGetSuggestions } from "@/api/suggestions";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useGetSuggestions();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Hello PRY
    </main>
  );
}
