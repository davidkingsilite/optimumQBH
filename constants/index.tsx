
type NavLink = {
    id: number;
    title: string;
    url?: string;
    isDropdown?: boolean;
  };
  
  export const navbarLinks:NavLink[] = [
    {
        id: 1,
        title: "Home",
        url: "/"
        
    },
    {
        id: 2,
        title: "Services",
        isDropdown: true,
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 4,
        title: "Contact",
        url: "/contact"
    },
    {
      id: 5,
      title: "About-us",
      url: "/about"
  },
   ]

   export interface Service {
    id: number;
    title: string;
    slug: string;
    exerpt: string;
    description: string;
    image: string;
  }
  
  export const services: Service[] = [
    {
      id: 1,
      title: "Anxiety",
      slug: "Anxiety",
      exerpt:"Welcome to a haven of tranquility and empowerment on your journey to conquer Anxiety.",
      description: "Welcome to a haven of tranquility and empowerment on your journey to conquer Anxiety. At optimum Quality Behavioral Health , we specialize in crafting personalized strategies to help you reclaim control and embrace a calmer existence. Our services go beyond traditional approaches, incorporating therapeutic techniques, stress-reducing practices, and targeted interventions to address the root of your anxiety. Together, let’s rewrite the script—transforming fear into resilience and uncertainty into unwavering confidence. Take a leap towards a life marked by serenity and newfound strength. Because in this space, your peace of mind takes precedence.",
      image: "/",
    },
    {
      id: 2,
      title: "Telepsychiatry",
      slug: "telepsychiatry",
      exerpt: "",
      description: "Virtual psychiatric care from the comfort of your home.",
      image: "/services/telepsychiatry.jpg",
    },
    {
      id: 3,
      title: "Medication Management",
      slug: "medication-management",
      exerpt: "",
      description: "Safe and effective psychiatric medication oversight.",
      image: "/services/medication.jpg",
    },
    // Add more...
  ];
  