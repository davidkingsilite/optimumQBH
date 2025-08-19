
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
      image: "/compressed/Depositphotos_61564905_l-2015.png",
    },
    {
      id: 2,
      title: "Telepsychiatry",
      slug: "telepsychiatry",
      exerpt: "Unlock the convenience and accessibility of mental health support with our Telepsychiatry services.",
      description: "Unlock the convenience and accessibility of mental health support with our Telepsychiatry services. At optimum Quality Behavioral Health , we bring compassionate care to the comfort of your space, bridging the gap between distance and healing. Embrace virtual sessions that prioritize your mental well-being, offering a secure and confidential platform for therapy, consultation, and support. Whether you’re navigating life’s challenges or seeking ongoing mental health care, Telepsychiatry opens doors to a new era of convenience and connection. Experience the flexibility of appointments without compromising the quality of care – because your mental health matters, no matter where you are. Welcome to a seamless, supportive journey towards balance and resilience.",
      image: "/compressed/Depositphotos_61564905_l-2015.png",
    },
    {
      id: 3,
      title: "Medication Management",
      slug: "medication-management",
      exerpt: "Experience a tailored approach to Medication Management designed to optimize your mental health journey.",
      description: "Experience a tailored approach to Medication Management designed to optimize your mental health journey. At optimum Quality Behavioral Health , we are dedicated to providing precise, personalized solutions to enhance your overall well-being. Our services encompass a meticulous assessment of your unique needs, collaborative decision-making on medication options, and ongoing monitoring to ensure effectiveness and minimal side effects. Trust in a partnership that prioritizes your comfort, empowerment, and informed choices. Discover the confidence that comes with a holistic approach to medication management, supporting you on the path to mental wellness. Your journey deserves the precision and care that our services deliver.",
      image: "/compressed/Depositphotos_61564905_l-2015.png",
    },
    
    {
      id: 4,
      title: "Medication Management",
      slug: "medication-management",
      exerpt: "Experience a tailored approach to Medication Management designed to optimize your mental health journey.",
      description: "Experience a tailored approach to Medication Management designed to optimize your mental health journey. At optimum Quality Behavioral Health , we are dedicated to providing precise, personalized solutions to enhance your overall well-being. Our services encompass a meticulous assessment of your unique needs, collaborative decision-making on medication options, and ongoing monitoring to ensure effectiveness and minimal side effects. Trust in a partnership that prioritizes your comfort, empowerment, and informed choices. Discover the confidence that comes with a holistic approach to medication management, supporting you on the path to mental wellness. Your journey deserves the precision and care that our services deliver.",
      image: "/compressed/Depositphotos_61564905_l-2015.png",
    },
    {
      id: 5,
      title: "Medication Management",
      slug: "medication-management",
      exerpt: "Experience a tailored approach to Medication Management designed to optimize your mental health journey.",
      description: "Experience a tailored approach to Medication Management designed to optimize your mental health journey. At optimum Quality Behavioral Health , we are dedicated to providing precise, personalized solutions to enhance your overall well-being. Our services encompass a meticulous assessment of your unique needs, collaborative decision-making on medication options, and ongoing monitoring to ensure effectiveness and minimal side effects. Trust in a partnership that prioritizes your comfort, empowerment, and informed choices. Discover the confidence that comes with a holistic approach to medication management, supporting you on the path to mental wellness. Your journey deserves the precision and care that our services deliver.",
      image: "/compressed/Depositphotos_61564905_l-2015.png",
    },
    {
      id: 6,
      title: "Medication Management",
      slug: "medication-management",
      exerpt: "Experience a tailored approach to Medication Management designed to optimize your mental health journey.",
      description: "Experience a tailored approach to Medication Management designed to optimize your mental health journey. At optimum Quality Behavioral Health , we are dedicated to providing precise, personalized solutions to enhance your overall well-being. Our services encompass a meticulous assessment of your unique needs, collaborative decision-making on medication options, and ongoing monitoring to ensure effectiveness and minimal side effects. Trust in a partnership that prioritizes your comfort, empowerment, and informed choices. Discover the confidence that comes with a holistic approach to medication management, supporting you on the path to mental wellness. Your journey deserves the precision and care that our services deliver.",
      image: "/compressed/Depositphotos_61564905_l-2015.png",
    },
    {
      id: 7,
      title: "Medication Management",
      slug: "medication-management",
      exerpt: "Experience a tailored approach to Medication Management designed to optimize your mental health journey.",
      description: "Experience a tailored approach to Medication Management designed to optimize your mental health journey. At optimum Quality Behavioral Health , we are dedicated to providing precise, personalized solutions to enhance your overall well-being. Our services encompass a meticulous assessment of your unique needs, collaborative decision-making on medication options, and ongoing monitoring to ensure effectiveness and minimal side effects. Trust in a partnership that prioritizes your comfort, empowerment, and informed choices. Discover the confidence that comes with a holistic approach to medication management, supporting you on the path to mental wellness. Your journey deserves the precision and care that our services deliver.",
      image: "/compressed/Depositphotos_61564905_l-2015.png",
    },
    {
      id: 8,
      title: "Medication Management",
      slug: "medication-management",
      exerpt: "Experience a tailored approach to Medication Management designed to optimize your mental health journey.",
      description: "Experience a tailored approach to Medication Management designed to optimize your mental health journey. At optimum Quality Behavioral Health , we are dedicated to providing precise, personalized solutions to enhance your overall well-being. Our services encompass a meticulous assessment of your unique needs, collaborative decision-making on medication options, and ongoing monitoring to ensure effectiveness and minimal side effects. Trust in a partnership that prioritizes your comfort, empowerment, and informed choices. Discover the confidence that comes with a holistic approach to medication management, supporting you on the path to mental wellness. Your journey deserves the precision and care that our services deliver.",
      image: "/services/medication.jpg",
    },
    {
      id: 9,
      title: "Medication Management",
      slug: "medication-management",
      exerpt: "Experience a tailored approach to Medication Management designed to optimize your mental health journey.",
      description: "Experience a tailored approach to Medication Management designed to optimize your mental health journey. At optimum Quality Behavioral Health , we are dedicated to providing precise, personalized solutions to enhance your overall well-being. Our services encompass a meticulous assessment of your unique needs, collaborative decision-making on medication options, and ongoing monitoring to ensure effectiveness and minimal side effects. Trust in a partnership that prioritizes your comfort, empowerment, and informed choices. Discover the confidence that comes with a holistic approach to medication management, supporting you on the path to mental wellness. Your journey deserves the precision and care that our services deliver.",
      image: "/services/medication.jpg",
    },
    {
      id: 10,
      title: "Medication Management",
      slug: "medication-management",
      exerpt: "Experience a tailored approach to Medication Management designed to optimize your mental health journey.",
      description: "Experience a tailored approach to Medication Management designed to optimize your mental health journey. At optimum Quality Behavioral Health , we are dedicated to providing precise, personalized solutions to enhance your overall well-being. Our services encompass a meticulous assessment of your unique needs, collaborative decision-making on medication options, and ongoing monitoring to ensure effectiveness and minimal side effects. Trust in a partnership that prioritizes your comfort, empowerment, and informed choices. Discover the confidence that comes with a holistic approach to medication management, supporting you on the path to mental wellness. Your journey deserves the precision and care that our services deliver.",
      image: "/services/medication.jpg",
    },
    {
      id: 11,
      title: "Medication Management",
      slug: "medication-management",
      exerpt: "Experience a tailored approach to Medication Management designed to optimize your mental health journey.",
      description: "Experience a tailored approach to Medication Management designed to optimize your mental health journey. At optimum Quality Behavioral Health , we are dedicated to providing precise, personalized solutions to enhance your overall well-being. Our services encompass a meticulous assessment of your unique needs, collaborative decision-making on medication options, and ongoing monitoring to ensure effectiveness and minimal side effects. Trust in a partnership that prioritizes your comfort, empowerment, and informed choices. Discover the confidence that comes with a holistic approach to medication management, supporting you on the path to mental wellness. Your journey deserves the precision and care that our services deliver.",
      image: "/services/medication.jpg",
    },
    {
      id: 12,
      title: "Medication Management",
      slug: "medication-management",
      exerpt: "Experience a tailored approach to Medication Management designed to optimize your mental health journey.",
      description: "Experience a tailored approach to Medication Management designed to optimize your mental health journey. At optimum Quality Behavioral Health , we are dedicated to providing precise, personalized solutions to enhance your overall well-being. Our services encompass a meticulous assessment of your unique needs, collaborative decision-making on medication options, and ongoing monitoring to ensure effectiveness and minimal side effects. Trust in a partnership that prioritizes your comfort, empowerment, and informed choices. Discover the confidence that comes with a holistic approach to medication management, supporting you on the path to mental wellness. Your journey deserves the precision and care that our services deliver.",
      image: "/services/medication.jpg",
    },
  ];
  