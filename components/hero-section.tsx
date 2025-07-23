"use client";

import { Typewriter } from "@/components/ui/typewriter";
import { BackgroundGrid, BackgroundLines } from "@/components/ui/background";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/ui/container";
import { useState } from "react";
import { DownloadDialog } from "@/components/download-dialog";
import { FaYoutube, FaMusic } from "react-icons/fa";
import { motion } from "motion/react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function HeroSection() {
  const [url, setUrl] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"youtube" | "jiosaavn">("youtube");

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      setIsDialogOpen(true);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden min-h-screen flex flex-col justify-center ">
      {/* <BackgroundGrid />
      <BackgroundLines /> */}
      <BackgroundBeams />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm mb-4">
            <span className="text-xs font-medium text-muted-foreground">
              Free Online Media Downloader
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Download from{" "}
            <Typewriter
              words={["YouTube", "JioSaavn"]}
              className="bg-gradient-to-r from-red-500 to-purple-600 dark:from-red-400 dark:to-purple-500 bg-clip-text text-transparent font-extrabold"
            />
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A fast, free, and easy way to download high-quality videos and music
            from YouTube and JioSaavn.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button
              variant={activeTab === "youtube" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveTab("youtube")}
              className="gap-2"
            >
              <FaYoutube className="h-5 w-5" />
              YouTube
            </Button>
            <Button
              variant={activeTab === "jiosaavn" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveTab("jiosaavn")}
              className="gap-2"
            >
              <FaMusic className="h-5 w-5" />
              JioSaavn
            </Button>
          </div>

          <form
            onSubmit={handleDownload}
            className="max-w-2xl mx-auto w-full mt-8"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder={`Paste ${
                  activeTab === "youtube" ? "YouTube" : "JioSaavn"
                } URL here...`}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-12 text-base"
              />
              <Button type="submit" size="lg" className="shrink-0">
                Download
              </Button>
            </div>
          </form>
        </motion.div>
      </Container>

      <DownloadDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        url={url}
        source={activeTab}
      />
    </section>
  );
}
