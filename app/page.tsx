import Hero from "@/components/Hero";
import ServicesPage from "./(root)/services/page";


export default function Home() {

  return (
    <main className="relative bg-[#F9FAFB]">
    <Hero />
    <div className="py-12 px-6">
      <ServicesPage />
    </div>
    </main>
  )
}

