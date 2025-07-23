"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "motion/react";
import {
  FaDownload,
  FaRocket,
  FaLock,
  FaMobileAlt,
  FaMusic,
  FaYoutube,
  FaVideo,
  FaHeadphones,
} from "react-icons/fa";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="group rounded-lg border bg-card p-6 transition-all hover:shadow-md dark:hover:shadow-primary/5"
    >
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <FaDownload className="h-6 w-6" />,
      title: "Fast Downloads",
      description:
        "Download media at maximum speed with our optimized servers and no throttling.",
    },
    {
      icon: <FaRocket className="h-6 w-6" />,
      title: "No Installation",
      description:
        "No need to install any software. Access our service directly from your browser.",
    },
    {
      icon: <FaLock className="h-6 w-6" />,
      title: "Secure & Private",
      description:
        "We don't store your data or track your downloads. Your privacy is our priority.",
    },
    {
      icon: <FaMobileAlt className="h-6 w-6" />,
      title: "Mobile Compatible",
      description:
        "Download on any device - desktop, tablet, or mobile with our responsive design.",
    },
    {
      icon: <FaVideo className="h-6 w-6" />,
      title: "Multiple Formats",
      description:
        "Choose from various video formats and resolutions for YouTube videos.",
    },
    {
      icon: <FaHeadphones className="h-6 w-6" />,
      title: "High Quality Audio",
      description:
        "Download music from JioSaavn in high-quality formats up to 320 kbps.",
    },
    {
      icon: <FaYoutube className="h-6 w-6" />,
      title: "YouTube Support",
      description:
        "Download videos, playlists, and music from YouTube quickly and easily.",
    },
    {
      icon: <FaMusic className="h-6 w-6" />,
      title: "JioSaavn Support",
      description:
        "Download your favorite songs and albums from JioSaavn in various qualities.",
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <Container>
        <SectionHeading
          title="Powerful Features"
          description="Everything you need to download media from your favorite platforms"
          className="mb-16"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
