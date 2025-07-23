"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FaYoutube, FaMusic, FaDownload, FaInfoCircle } from "react-icons/fa";
import { motion } from "motion/react";

interface DownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  url: string;
  source: "youtube" | "jiosaavn";
}

type VideoQuality = "1080p" | "720p" | "480p" | "360p" | "Audio Only";
type AudioQuality = "320 kbps" | "128 kbps" | "96 kbps";

interface MediaInfo {
  title: string;
  artist?: string;
  thumbnail: string;
  duration: string;
}

export function DownloadDialog({
  open,
  onOpenChange,
  url,
  source,
}: DownloadDialogProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [videoQuality, setVideoQuality] = useState<VideoQuality>("720p");
  const [audioQuality, setAudioQuality] = useState<AudioQuality>("320 kbps");
  const [mediaInfo, setMediaInfo] = useState<MediaInfo | null>(null);

  // Simulate fetching media info
  useEffect(() => {
    if (open) {
      setCurrentStep(1);
      setProgress(25);

      // Mock data - in a real app this would come from an API
      setTimeout(() => {
        if (source === "youtube") {
          setMediaInfo({
            title: "Sample YouTube Video",
            artist: "Content Creator",
            thumbnail:
              "https://images.pexels.com/photos/2726370/pexels-photo-2726370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            duration: "10:25",
          });
        } else {
          setMediaInfo({
            title: "Sample JioSaavn Track",
            artist: "Popular Artist",
            thumbnail:
              "https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            duration: "3:45",
          });
        }
        setCurrentStep(2);
        setProgress(50);
      }, 1500);
    } else {
      setProgress(0);
      setMediaInfo(null);
    }
  }, [open, source]);

  const handleDownload = () => {
    setCurrentStep(3);
    setProgress(75);

    // Simulate download progress
    const downloadInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(downloadInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 200);

    // Simulate download completion
    setTimeout(() => {
      clearInterval(downloadInterval);
      setProgress(100);
      setCurrentStep(4);
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden bg-background/80 backdrop-blur-xl border border-border">
        <div className="grid grid-cols-1 md:grid-cols-5 min-h-[400px]">
          {/* Left side - Content */}
          <div className="md:col-span-3 p-6">
            <DialogHeader>
              <DialogTitle className="text-xl flex items-center gap-2">
                {source === "youtube" ? (
                  <FaYoutube className="text-red-500" />
                ) : (
                  <FaMusic className="text-green-500" />
                )}
                {source === "youtube" ? "YouTube" : "JioSaavn"} Downloader
              </DialogTitle>
            </DialogHeader>

            <div className="mt-6">
              {currentStep === 1 && (
                <div className="text-center space-y-4 animate-pulse">
                  <FaInfoCircle className="mx-auto h-8 w-8 text-primary/70" />
                  <p>Fetching media information...</p>
                </div>
              )}

              {currentStep >= 2 && mediaInfo && (
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="relative h-20 w-20 overflow-hidden rounded-md flex-shrink-0">
                      <img
                        src={mediaInfo.thumbnail}
                        alt={mediaInfo.title}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold line-clamp-2">
                        {mediaInfo.title}
                      </h3>
                      {mediaInfo.artist && (
                        <p className="text-sm text-muted-foreground">
                          {mediaInfo.artist}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        Duration: {mediaInfo.duration}
                      </p>
                    </div>
                  </div>

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      {source === "youtube" ? (
                        <div className="space-y-3">
                          <h4 className="text-sm font-medium">
                            Select quality:
                          </h4>
                          <RadioGroup
                            value={videoQuality}
                            onValueChange={(value) =>
                              setVideoQuality(value as VideoQuality)
                            }
                            className="grid grid-cols-2 gap-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="1080p" id="1080p" />
                              <Label htmlFor="1080p">1080p</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="720p" id="720p" />
                              <Label htmlFor="720p">720p</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="480p" id="480p" />
                              <Label htmlFor="480p">480p</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="360p" id="360p" />
                              <Label htmlFor="360p">360p</Label>
                            </div>
                            <div className="flex items-center space-x-2 col-span-2">
                              <RadioGroupItem value="Audio Only" id="audio" />
                              <Label htmlFor="audio">Audio Only (MP3)</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <h4 className="text-sm font-medium">
                            Select audio quality:
                          </h4>
                          <RadioGroup
                            value={audioQuality}
                            onValueChange={(value) =>
                              setAudioQuality(value as AudioQuality)
                            }
                            className="grid grid-cols-1 gap-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="320 kbps" id="320kbps" />
                              <Label htmlFor="320kbps">
                                High Quality (320 kbps)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="128 kbps" id="128kbps" />
                              <Label htmlFor="128kbps">
                                Medium Quality (128 kbps)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="96 kbps" id="96kbps" />
                              <Label htmlFor="96kbps">
                                Low Quality (96 kbps)
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                      )}

                      <Button onClick={handleDownload} className="w-full gap-2">
                        <FaDownload className="h-4 w-4" />
                        Download Now
                      </Button>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <p className="text-sm text-center text-muted-foreground">
                        Downloading... Please wait
                      </p>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-4">
                      <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-md">
                        <p className="text-sm text-center text-green-500">
                          Download completed successfully!
                        </p>
                      </div>
                      <Button
                        onClick={() => onOpenChange(false)}
                        variant="outline"
                        className="w-full"
                      >
                        Close
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right side - Progress */}
          <div className="md:col-span-2 bg-muted/50 p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-small-white dark:bg-grid-small-dark opacity-30" />
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h4 className="text-sm font-medium mb-2">Progress</h4>
              <Progress value={progress} className="h-2 mb-6" />

              <div className="space-y-8 mt-4">
                {[1, 2, 3, 4].map((step) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: currentStep >= step ? 1 : 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium ${
                        currentStep > step
                          ? "bg-green-500/20 text-green-500 border-green-500/50"
                          : currentStep === step
                          ? "bg-primary/20 text-primary border-primary/50"
                          : "bg-muted text-muted-foreground border-border"
                      } border`}
                    >
                      {currentStep > step ? "✓" : step}
                    </div>
                    <div className="text-sm">
                      {step === 1 && "Fetching information"}
                      {step === 2 && "Ready to download"}
                      {step === 3 && "Downloading"}
                      {step === 4 && "Complete"}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
