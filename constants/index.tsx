
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
      title: "Psychotherapy",
      slug: "psychotherapy",
      exerpt: "Embark on a transformative journey of self-discovery, growth, and healing with our specialized Psychotherapy services",
      description: `Embark on a transformative journey of self-discovery, growth, and healing with our specialized Psychotherapy services. At optimum Quality Behavioral Health, we  are committed to providing a safe and supportive space for individuals seeking psychological well-being.

      Our psychotherapy services encompass a variety of therapeutic approaches tailored to your unique needs. Whether you’re facing challenges such as anxiety, depression, trauma, or life transitions, our collaborative sessions aim to explore emotions, foster insight, and develop practical coping strategies.
      
      Welcome to a space where your story is heard, your experiences are validated, and positive change is cultivated. Together, we can unravel the complexities of your inner world, navigate challenges, and empower you to lead a more fulfilling life. Your mental health journey is a collaborative effort, and our psychotherapy services are designed to guide you towards a path of resilience and personal growth.`,
      image: "/compressed/pexels-cottonbro-studio-4101143.png",
    },
    {
      id: 2,
      title: "Eating Disorders",
      slug: "eating-disorders",
      exerpt:"Embrace a path to healing with our specialized services for Eating Disorders. At optimum Quality Behavioral Health, we are  committed to providing comprehensive care tailored to your unique journey.",
      description: "Embrace a path to healing with our specialized services for Eating Disorders. At optimum Quality Behavioral Health, we are  committed to providing comprehensive care tailored to your unique journey. Discover a compassionate approach that combines evidence-based therapies, nutritional guidance, and personalized treatment plans. From overcoming restrictive patterns to fostering a positive relationship with food, let’s embark on a transformative experience together. Your well-being is our priority, and our collaborative efforts aim to restore balance and empower you to embrace a nourishing life. Welcome to a supportive space where recovery takes center stage.",
      image: "/compressed/obese-woman-consulting-about-eating-disorder-9STGRVM.png",
    },
    {
      id: 3,
      title: "Depression",
      slug: "depression",
      exerpt: "Step into a brighter tomorrow with our personalized Depression care services. At optimum Quality Behavioral Health , we offer more than just treatment; I provide a compassionate partnership on your road to recovery.",
      description: "Step into a brighter tomorrow with our personalized Depression care services. At optimum Quality Behavioral Health , we offer more than just treatment; I provide a compassionate partnership on your road to recovery. Our approach integrates therapeutic interventions, medication management, and holistic strategies to address the complexities of Depression. Together, let’s redefine your narrative, uncover resilience, and foster a sense of hope. Your mental wellness matters, and my commitment is to guide you towards a fulfilling and joyous life. Take the first step towards healing – because every day holds the potential for a brighter, more vibrant you.",
      image: "/compressed/therapy5-1920w.png",
    },
    {
      id: 4,
      title: "Anxiety",
      slug: "anxiety",
      exerpt:"Welcome to a haven of tranquility and empowerment on your journey to conquer Anxiety.",
      description: "Welcome to a haven of tranquility and empowerment on your journey to conquer Anxiety. At optimum Quality Behavioral Health , we specialize in crafting personalized strategies to help you reclaim control and embrace a calmer existence. Our services go beyond traditional approaches, incorporating therapeutic techniques, stress-reducing practices, and targeted interventions to address the root of your anxiety. Together, let’s rewrite the script—transforming fear into resilience and uncertainty into unwavering confidence. Take a leap towards a life marked by serenity and newfound strength. Because in this space, your peace of mind takes precedence.",
      image: "/compressed/kerkez.png",
    },
    {
      id: 5,
      title: "Medication Management",
      slug: "medication-management",
      exerpt: "Experience a tailored approach to Medication Management designed to optimize your mental health journey.",
      description: "Experience a tailored approach to Medication Management designed to optimize your mental health journey. At optimum Quality Behavioral Health , we are dedicated to providing precise, personalized solutions to enhance your overall well-being. Our services encompass a meticulous assessment of your unique needs, collaborative decision-making on medication options, and ongoing monitoring to ensure effectiveness and minimal side effects. Trust in a partnership that prioritizes your comfort, empowerment, and informed choices. Discover the confidence that comes with a holistic approach to medication management, supporting you on the path to mental wellness. Your journey deserves the precision and care that our services deliver.",
      image: "/compressed/AdobeStock_162572867-scaled (1).png",
    },
    {
      id: 6,
      title: "Telepsychiatry",
      slug: "telepsychiatry",
      exerpt: "Unlock the convenience and accessibility of mental health support with our Telepsychiatry services.",
      description: "Unlock the convenience and accessibility of mental health support with our Telepsychiatry services. At optimum Quality Behavioral Health , we bring compassionate care to the comfort of your space, bridging the gap between distance and healing. Embrace virtual sessions that prioritize your mental well-being, offering a secure and confidential platform for therapy, consultation, and support. Whether you’re navigating life’s challenges or seeking ongoing mental health care, Telepsychiatry opens doors to a new era of convenience and connection. Experience the flexibility of appointments without compromising the quality of care – because your mental health matters, no matter where you are. Welcome to a seamless, supportive journey towards balance and resilience.",
      image: "/compressed/TelePsychiatry_05.png",
    },
    {
      id: 7,
      title: "Bipolar Disorder",
      slug: "bipolar-disorder",
      exerpt: "Embark on a transformative journey towards emotional balance with our specialized services for Bipolar Disorder.",
      description: "Embark on a transformative journey towards emotional balance with our specialized services for Bipolar Disorder. At optimum Quality Behavioral Health ,  our  dedicated Psychiatric Nurse Practitioner, offer comprehensive care tailored to the unique needs of individuals navigating the complexities of bipolarity. Our approach combines evidence-based therapies, mood-stabilizing medications, and personalized strategies to empower you in managing mood fluctuations. Together, we’ll explore strategies for mood regulation, develop coping mechanisms, and foster a stable, fulfilling life. Welcome to a space where understanding meets expertise, and where your journey towards emotional well-being takes center stage. Embrace stability, resilience, and a renewed sense of control with our specialized Bipolar Disorder services.",
      image: "/compressed/Depositphotos_61564905_l-2015.png",
    },
    {
      id: 8,
      title: "Mood Disorders",
      slug: "mood-disorders",
      exerpt: "Step into a realm of comprehensive care tailored to the intricate nuances of Mood Disorders. At optimum Quality Behavioral Health , our  Psychiatric Nurse Practitioner, Is here to guide you through a personalized journey toward s emotional wellness.",
      description: "Step into a realm of comprehensive care tailored to the intricate nuances of Mood Disorders. At optimum Quality Behavioral Health , our  Psychiatric Nurse Practitioner, Is here to guide you through a personalized journey toward s emotional wellness. Our specialized services for Mood Disorders encompass a holistic approach, integrating therapeutic interventions, medication management, and targeted strategies to address the unique aspects of your experience. Whether you’re navigating the ebbs and flows of depression, mania, or a combination of both, our collaborative efforts aim to empower you towards stability and resilience. Together, let’s uncover the tools to navigate life’s emotional spectrum and cultivate a lasting sense of balance. Your emotional well-being deserves a thoughtful, individualized approach, and that’s exactly what our Mood Disorders services provide.",
      image: "/compressed/Depositphotos_61564905_l-2015.png",
    },
    {
      id: 9,
      title: "Insomnia",
      slug: "insomnia",
      exerpt: "Reclaim your nights and restore your vitality with our specialized services for Insomnia. At optimum Quality Behavioral Health , we understand the profound impact sleep has on mental well-being.",
      description: "Reclaim your nights and restore your vitality with our specialized services for Insomnia. At optimum Quality Behavioral Health , we understand the profound impact sleep has on mental well-being. Our approach to addressing Insomnia goes beyond traditional methods, integrating personalized strategies, sleep hygiene techniques, and targeted interventions to guide you towards restorative sleep. Together, let’s break the cycle of sleepless nights and cultivate a harmonious relationship with rest. Welcome to a space where tranquility meets expertise, and where your journey to a revitalized, energized life begins. Say goodbye to sleepless nights and embrace a future filled with restful, rejuvenating sleep through our tailored Insomnia services.",
      image: "/compressed/massage-for-insomnia-scaled-1.png",
    },
    {
      id: 10,
      title: "ADHD",
      slug: "adhd",
      exerpt: "Embark on a journey of focus, empowerment, and success with our specialized services for ADHD. At optimum Quality Behavioral Health, our seasoned Psychiatric Nurse Practitioner, is dedicated to providing comprehensive care tailored to the unique needs of individuals navigating Attention-Deficit/Hyperactivity Disorder.",
      description: "Embark on a journey of focus, empowerment, and success with our specialized services for ADHD. At optimum Quality Behavioral Health, our seasoned Psychiatric Nurse Practitioner, is dedicated to providing comprehensive care tailored to the unique needs of individuals navigating Attention-Deficit/Hyperactivity Disorder. Our approach integrates evidence-based strategies, personalized interventions, and a collaborative partnership to enhance your ability to thrive. Whether you’re an adult seeking organizational strategies or a parent looking for support for your child, our ADHD services are designed to empower, educate, and inspire. Welcome to a space where understanding meets expertise, and where your journey towards unlocking your full potential takes center stage. Explore a world where focus becomes your strength, and success becomes your narrative with our ADHD services.",
      image: "/compressed/1_XDffvxB_oz2Glir7ILHPuA.png",
    },
    {
      id: 11,
      title: "PTSD",
      slug: "ptsd",
      exerpt: "Embark on a path of healing and resilience with our specialized services for Post-Traumatic Stress Disorder (PTSD). At optimum Quality Behavioral Health , our compassionate Psychiatric Nurse Practitioners, are  committed to providing personalized care tailored to the unique needs of those navigating the complexities of PTSD.",
      description: "Embark on a path of healing and resilience with our specialized services for Post-Traumatic Stress Disorder (PTSD). At optimum Quality Behavioral Health , our compassionate Psychiatric Nurse Practitioners, are  committed to providing personalized care tailored to the unique needs of those navigating the complexities of PTSD. Our approach integrates evidence-based therapies, trauma-focused interventions, and a supportive partnership to guide you towards reclaiming your sense of safety and well-being. Together, we’ll navigate the challenges of processing trauma, develop coping mechanisms, and foster a renewed outlook on life. Welcome to a space where understanding meets expertise, and where your journey towards healing and empowerment begins. Rediscover hope, strength, and a brighter future with our dedicated PTSD services.",
      image: "/compressed/150625-F-WU210-008-scaled.png",
    },
    {
      id: 12,
      title: "ADDICTION",
      slug: "addiction",
      exerpt: "Embark on a transformative journey towards recovery and freedom with our specialized services for Addiction. At optimum Quality Behavioral Health, we  are  dedicated to providing comprehensive care tailored to the unique challenges of overcoming addiction. ",
      description: "Embark on a transformative journey towards recovery and freedom with our specialized services for Addiction. At optimum Quality Behavioral Health, we  are  dedicated to providing comprehensive care tailored to the unique challenges of overcoming addiction. Our approach integrates evidence-based therapies, personalized interventions, and unwavering support to empower you on the path to sobriety. Whether you’re seeking assistance for yourself or supporting a loved one, our Addiction services focus on holistic healing, relapse prevention, and building a foundation for lasting recovery. Welcome to a space where understanding meets expertise, and where your journey towards a healthier, addiction-free life takes center stage. Break free from the chains of addiction and embrace a future filled with renewed purpose, resilience, and hope through our dedicated services.",
      image: "/compressed/c9f3bcdb9e400a4931e03256b8b728d4.png",
    },
    {
      id: 13,
      title: "GERIATRIC PSYCH",
      slug: "geriatric-psych",
      exerpt: "Experience a tailored approach to Medication Management designed to optimize your mental health journey.",
      description: `Embark on a journey of well-being and vitality in your golden years with our specialized Geriatric Psychiatry services. At optimum Quality Behavioral Health , we are  committed to providing comprehensive and compassionate care tailored specifically for seniors.

      Our services for the elderly address a spectrum of mental health concerns, including mood disorders, cognitive issues, and life transitions. Whether you or your loved one is navigating the challenges of aging, coping with loss, or seeking support for mental health concerns, our approach combines expertise with a deep understanding of the unique needs of the elderly.
      
      Welcome to a space where aging is embraced with dignity, and mental well-being is prioritized. Together, we can work towards enhancing quality of life, promoting emotional resilience, and navigating the various facets of geriatric mental health. Your well-being in your golden years is our focus, and our geriatric psychiatry services are tailored to support you on this meaningful journey.`,
      image: "/compressed/1a4f776480f70108ba10818cef205c63.png",
    },
    {
      id: 14,
      title: "ADULTS",
      slug: "adults",
      exerpt: "Experience a tailored approach to Medication Management designed to optimize your mental health journey.",
      description: `Unlock the full spectrum of your mental well-being with our comprehensive mental health services tailored specifically for adults. As a dedicated Psychiatric Nurse Practitioner, I am committed to providing personalized care that addresses the unique challenges and goals of individuals in their adult years.

      Our services encompass a wide range, from managing stress and anxiety to navigating life transitions and fostering resilience. Whether you are seeking support for mood disorders, relationship challenges, or personal growth, our approach combines evidence-based interventions with a deep understanding of the complexities of adult life.
      
      Welcome to a space where your individual journey is met with expertise and compassion. Together, we can explore strategies for self-discovery, resilience, and a balanced, fulfilling life. Your mental well-being matters at every stage, and our adult-focused services are designed to empower you on your path to emotional health and happiness.`,
      image: "/compressed/Adult-Students-and-Younger-Students.png",
    },
    {
      id: 15,
      title: "ADOLESCENTS",
      slug: "adolescents",
      exerpt: "Navigate the unique challenges of adolescence with our specialized mental health services tailored for teens. At optimum Quality Behavioral Health, we our caring Psychiatric Nurse Practitioner are committed to providing support that recognizes the distinct needs and concerns of adolescents.",
      description: `Navigate the unique challenges of adolescence with our specialized mental health services tailored for teens. At optimum Quality Behavioral Health, we our caring Psychiatric Nurse Practitioner are committed to providing support that recognizes the distinct needs and concerns of adolescents.

      Our services for teens encompass a range of issues, including anxiety, depression, school-related stress, and interpersonal relationships. Whether your adolescent is experiencing emotional turbulence or facing the pressures of today’s world, our approach combines empathy, evidence-based interventions, and a teen-focused perspective.
      
      Welcome to a space where teens are heard, understood, and empowered. Together, we can work towards building resilience, fostering healthy coping mechanisms, and supporting positive growth during these formative years. Your teen’s mental well-being matters, and our adolescent-focused services are designed to guide them towards a path of emotional strength and well-rounded development.`,
      image: "/compressed/jeunes-95229348.png",
    },
    {
      id: 16,
      title: "Schizophrenia",
      slug: "schizophrenia",
      exerpt: "Embark on a journey towards stability and empowerment with our specialized services for Schizophrenia. At optimum Quality Behavioral Health , are committed to providing comprehensive care tailored to the unique challenges of individuals navigating Schizophrenia.",
      description: `Embark on a journey towards stability and empowerment with our specialized services for Schizophrenia. At optimum Quality Behavioral Health , are committed to providing comprehensive care tailored to the unique challenges of individuals navigating Schizophrenia.

      Our approach integrates evidence-based therapies, medication management, and a supportive partnership to address the multifaceted aspects of Schizophrenia. Whether you or your loved one is seeking assistance for symptom management, social integration, or overall well-being, our services are designed to foster resilience and enhance the quality of life.
      
      Welcome to a space where understanding meets expertise, and where your journey towards managing Schizophrenia with dignity and strength takes center stage. Together, let’s navigate the complexities, challenge stigma, and work towards a life marked by stability, purpose, and empowerment.`,
      image: "/compressed/the-man-face-in-the-hands-1398088104GvU.png",
    },
    {
      id: 17,
      title: "Weight Management Services",
      slug: "weight-management-services",
      exerpt: "At Optimum Quality Behavioral Health, we are dedicated to supporting your journey toward a healthier lifestyle. We are certified in weight management, and we offer a comprehensive approach that includes the latest in pharmaceutical options such as Ozempic, Tirzepetide, and Phentermine.",
      description: `At Optimum Quality Behavioral Health, we are dedicated to supporting your journey toward a healthier lifestyle. We are certified in weight management, and we offer a comprehensive approach that includes the latest in pharmaceutical options such as Ozempic, Tirzepetide, and Phentermine. These treatments, combined with personalized care and expert guidance, can help you achieve and maintain your weight goals effectively and safely. Contact us today to learn more about how we can assist you in your weight management journey.`,
      image: "/compressed/Surprising-Reasons-Youre-Gaining-Weight.png",
    },
  ];
  