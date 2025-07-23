"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

export function FaqSection() {
  const faqs = [
    {
      question: "Is this service completely free?",
      answer:
        "Yes, our service is completely free to use with no hidden charges. We support ourselves through minimal advertisements.",
    },
    {
      question: "Is it legal to download videos from YouTube?",
      answer:
        "Downloading videos for personal use is generally acceptable, but redistributing or using copyrighted content commercially may violate terms of service and copyright laws. Always respect intellectual property rights.",
    },
    {
      question: "What video qualities can I download?",
      answer:
        "For YouTube videos, we support multiple qualities ranging from 360p to 1080p, as well as audio-only MP3 format. For JioSaavn, we support 96kbps to 320kbps audio quality.",
    },
    {
      question: "Are there any download limits?",
      answer:
        "We currently don't impose strict limits, but we encourage reasonable usage to maintain service quality for all users.",
    },
    {
      question: "How do I download a playlist from YouTube?",
      answer:
        "Simply paste the playlist URL in our downloader, and you'll be given options to download individual videos or the entire playlist.",
    },
    {
      question: "Which browsers are supported?",
      answer:
        "Our service works on all modern browsers including Chrome, Firefox, Safari, and Edge on both desktop and mobile devices.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          description="Get answers to common questions about our media downloader"
          className="mb-12"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}
