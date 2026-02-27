import Link from "next/link";
import SearchBar from "../components/SearchBar";
import MoviesCard from "../components/MoviesCard";
import Hero from "../components/Hero";
import SearchSection from "../components/SearchSection";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero></Hero>

      <SearchSection></SearchSection>
      <MoviesCard></MoviesCard>
    </>
  );
}
