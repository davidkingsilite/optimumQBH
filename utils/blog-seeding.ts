import mongoose from "mongoose";
import { Blog } from "../models/Blog"; // Adjust path if needed
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.DATABASE_URL as string;

async function allBlogs() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing data
    await Blog.deleteMany({});

    // Psychiatry blog posts
    await Blog.insertMany([
      {
        slug: "cbt-for-anxiety",
        title: "The Benefits of Cognitive Behavioral Therapy (CBT) for Anxiety",
        description:
          "Discover how Cognitive Behavioral Therapy helps patients manage anxiety symptoms and build healthier coping strategies.",
        image: "/compressed/1_XDffvxB_oz2Glir7ILHPuA.png",
        date: "2025-08-10",
        author: "Dr. Jane Smith, Psychiatrist",
        category: "Anxiety",
        highlight: true,
        content: `
          <p>Cognitive Behavioral Therapy (CBT) is one of the most effective treatments for anxiety disorders.</p>
          <h2>Why CBT Works</h2>
          <ul>
            <li>Helps patients identify and challenge negative thought patterns.</li>
            <li>Teaches practical coping mechanisms.</li>
            <li>Backed by decades of clinical research.</li>
          </ul>
          <p>CBT empowers patients to take control of their mental health and reduce daily anxiety triggers.</p>
        `,
      },
      {
        slug: "understanding-depression",
        title: "Understanding Depression: Symptoms, Causes, and Treatment Options",
        description:
          "Learn how to identify symptoms of depression, common causes, and evidence-based treatment approaches.",
        image: "/compressed/1_XDffvxB_oz2Glir7ILHPuA.png",
        date: "2025-08-12",
        author: "Dr. Michael Johnson, Psychiatrist",
        category: "Depression",
        highlight: false,
        content: `
          <p>Depression is more than sadness—it’s a medical condition that affects mood, energy, and daily functioning.</p>
          <h2>Common Symptoms</h2>
          <ul>
            <li>Persistent sadness or hopelessness.</li>
            <li>Loss of interest in activities.</li>
            <li>Changes in sleep or appetite.</li>
          </ul>
          <p>Treatments may include therapy, medication, or lifestyle changes. Early intervention is key.</p>
        `,
      },
      {
        slug: "adhd-in-adults",
        title: "ADHD in Adults: Signs, Challenges, and Effective Strategies",
        description:
          "ADHD is not just a childhood condition. Discover how ADHD affects adults and ways to manage it.",
        image: "/compressed/1_XDffvxB_oz2Glir7ILHPuA.png",
        date: "2025-08-15",
        author: "Dr. Sarah Lee, Psychiatrist",
        category: "ADHD",
        highlight: false,
        content: `
          <p>Many adults live with undiagnosed ADHD, which can impact work, relationships, and self-esteem.</p>
          <h2>Key Challenges</h2>
          <ul>
            <li>Difficulty staying organized.</li>
            <li>Problems with time management.</li>
            <li>Impulsivity and distractibility.</li>
          </ul>
          <p>Strategies such as behavioral therapy, medication, and coaching can significantly improve quality of life.</p>
        `,
      },
      {
        slug: "ptsd-treatment-approaches",
        title: "PTSD Treatment Approaches: From Therapy to Medication",
        description:
          "Post-traumatic Stress Disorder (PTSD) can be overwhelming. Learn about effective treatments available today.",
        image: "/compressed/1_XDffvxB_oz2Glir7ILHPuA.png",
        date: "2025-08-18",
        author: "Dr. Anthony Ramirez, Psychiatrist",
        category: "PTSD",
        highlight: false,
        content: `
          <p>PTSD affects people who have experienced trauma, leading to flashbacks, nightmares, and severe anxiety.</p>
          <h2>Treatment Options</h2>
          <ul>
            <li>Trauma-focused CBT.</li>
            <li>Eye Movement Desensitization and Reprocessing (EMDR).</li>
            <li>Medication such as SSRIs for managing symptoms.</li>
          </ul>
          <p>With proper treatment, many individuals recover and lead fulfilling lives.</p>
        `,
      },
      {
        slug: "medication-management-in-psychiatry",
        title: "The Role of Medication Management in Psychiatry",
        description:
          "Medication can be a key part of treatment for many mental health conditions. Here’s how psychiatrists manage it safely.",
        image: "/compressed/1_XDffvxB_oz2Glir7ILHPuA.png",
        date: "2025-08-20",
        author: "Dr. Emily Brown, Psychiatrist",
        category: "Medication",
        highlight: true,
        content: `
          <p>Medications can help balance brain chemistry and reduce symptoms of depression, anxiety, bipolar disorder, and more.</p>
          <h2>Why Medication Management Matters</h2>
          <ul>
            <li>Ensures correct dosage and safety.</li>
            <li>Monitors side effects and effectiveness.</li>
            <li>Often combined with therapy for best results.</li>
          </ul>
          <p>Medication should always be tailored to the patient’s unique needs under professional guidance.</p>
        `,
      },
      {
        slug: "sleep-disorders-and-mental-health",
        title: "Sleep Disorders and Mental Health: Breaking the Cycle",
        description:
          "Sleep is critical to mental health. Learn how conditions like insomnia and sleep apnea connect to psychiatric care.",
        image: "/compressed/1_XDffvxB_oz2Glir7ILHPuA.png",
        date: "2025-08-21",
        author: "Dr. Kevin Patel, Psychiatrist",
        category: "Sleep",
        highlight: false,
        content: `
          <p>Poor sleep is both a symptom and cause of many psychiatric conditions, including depression and anxiety.</p>
          <h2>Common Disorders</h2>
          <ul>
            <li>Insomnia linked to chronic stress.</li>
            <li>Sleep apnea impacting mood and energy.</li>
            <li>Circadian rhythm disorders.</li>
          </ul>
          <p>Improving sleep hygiene and treating underlying conditions can greatly enhance mental health outcomes.</p>
        `,
      },
    ]);

    console.log("✅ Seeded psychiatry blog posts successfully");
    mongoose.disconnect();
  } catch (error) {
    console.error("❌ Seeding failed", error);
    mongoose.disconnect();
  }
}

allBlogs();
