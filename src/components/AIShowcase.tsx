"use client";

import styles from "./AIShowcase.module.css";
import FadeIn from "./FadeIn";

const aiServices = [
  {
    title: "Smart Chatbots",
    description:
      "Custom AI-powered chatbots for customer support, lead generation, and user engagement. Integrates seamlessly with your existing systems.",
    icon: "🤖",
    tag: "Conversational AI",
    features: ["24/7 Support", "Multi-language", "Learning Capability"],
  },
  {
    title: "LLM Integration",
    description:
      "Harness the power of GPT, Claude, and other large language models. Build intelligent apps that understand and generate human-like text.",
    icon: "🧠",
    tag: "Language Models",
    features: ["GPT-4 / Claude", "Custom Fine-tuning", "RAG Systems"],
  },
  {
    title: "AI Automation",
    description:
      "Streamline workflows with intelligent automation. From document processing to data analysis, let AI handle the heavy lifting.",
    icon: "⚙️",
    tag: "Workflow Automation",
    features: ["Document OCR", "Data Extraction", "Smart Routing"],
  },
  {
    title: "Voice & Vision",
    description:
      "Computer vision for image analysis and voice AI for speech recognition. Build apps that can see and hear.",
    icon: "👁️",
    tag: "Multimodal AI",
    features: ["Speech-to-Text", "Image Recognition", "Video Analysis"],
  },
  {
    title: "Recommendation Systems",
    description:
      "Personalized content and product recommendations that drive engagement and conversions using machine learning algorithms.",
    icon: "🎯",
    tag: "Machine Learning",
    features: ["User Profiling", "Real-time Suggestions", "A/B Testing"],
  },
  {
    title: "AI API Development",
    description:
      "Build robust AI-powered REST APIs and microservices. Deploy and scale your AI models with confidence.",
    icon: "🔌",
    tag: "API Services",
    features: ["REST/GraphQL", "Scalable Deployment", "Rate Limiting"],
  },
];

export default function AIShowcase() {
  return (
    <section className={styles.section} id="ai-services">
      <div className={styles.backgroundGlow} />
      <FadeIn className="container">
        <div className={styles.header}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            Powered by AI
          </span>
          <h2 className={styles.subtitle}>Artificial Intelligence</h2>
          <h3 className={styles.title}>
            Intelligent Solutions for the{" "}
            <span className={styles.gradient}>Future</span>
          </h3>
          <p className={styles.description}>
            From conversational AI to advanced automation, we build cutting-edge
            AI solutions that transform how businesses operate and engage with
            customers.
          </p>
        </div>

        <div className={styles.grid}>
          {aiServices.map((service, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardGlow} />
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.tag}>{service.tag}</span>
                <h4 className={styles.cardTitle}>{service.title}</h4>
                <p className={styles.cardDescription}>{service.description}</p>
                <div className={styles.features}>
                  {service.features.map((feature, i) => (
                    <span key={i} className={styles.feature}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.techLogos}>
          <span className={styles.techLabel}>Powered by</span>
          <div className={styles.logos}>
            <span className={styles.techItem}>OpenAI</span>
            <span className={styles.techItem}>Claude</span>
            <span className={styles.techItem}>LangChain</span>
            <span className={styles.techItem}>Hugging Face</span>
            <span className={styles.techItem}>TensorFlow</span>
            <span className={styles.techItem}>PyTorch</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
