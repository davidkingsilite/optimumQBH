import Hero from "@/components/Hero";
import ServicesPage from "./(root)/services/page";
import Experts from "@/components/ExpertSection";
import PersonalizedCare from "@/components/PersonalizedCare";
import WhyChooseUs from "@/components/WhyChooseUs";
import ExpertSection from "@/components/ExpertSection";
import InsuranceSection from "@/components/Insurance&payment";


export default function Home() {

  return (
    <main className="relative bg-[#F9FAFB]">
    <Hero />
    <div className="py-12 px-6">
      <PersonalizedCare />
      <WhyChooseUs />
      <ServicesPage />
      <ExpertSection />
      <InsuranceSection />
    </div>
    </main>
  )
}

