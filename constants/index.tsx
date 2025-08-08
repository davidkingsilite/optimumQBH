
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
        title: "Projects",
        url: "/projects"
    },
    {
        id: 4,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    },
    {
      id: 6,
      title: "About-us",
      url: "/about"
  },
   ]

   export interface Service {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
  }
  
  export const services: Service[] = [
    {
      id: 1,
      title: "Psychotherapy",
      slug: "psychotherapy",
      description: "Personalized talk therapy for emotional and mental wellness.",
      image: "/services/psychotherapy.jpg",
    },
    {
      id: 2,
      title: "Telepsychiatry",
      slug: "telepsychiatry",
      description: "Virtual psychiatric care from the comfort of your home.",
      image: "/services/telepsychiatry.jpg",
    },
    {
      id: 3,
      title: "Medication Management",
      slug: "medication-management",
      description: "Safe and effective psychiatric medication oversight.",
      image: "/services/medication.jpg",
    },
    // Add more...
  ];
  