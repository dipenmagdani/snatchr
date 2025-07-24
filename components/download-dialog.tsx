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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FaYoutube, FaMusic, FaDownload, FaInfoCircle, FaEye, FaThumbsUp, FaCalendarAlt, FaFileVideo, FaFileAudio, FaLayerGroup, FaClock, FaUser, FaHashtag, FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

interface DownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  url: string;
  source: "youtube" | "jiosaavn";
}

type VideoQuality = "4K" | "1440p" | "1080p" | "720p" | "480p" | "360p";
type AudioQuality = "320 kbps" | "256 kbps" | "192 kbps" | "128 kbps" | "96 kbps";
type DownloadType = "video" | "audio" | "both";

interface MediaInfo {
  title: string;
  artist?: string;
  channel?: string;
  thumbnail: string;
  duration: string;
  views?: string;
  likes?: string;
  uploadDate?: string;
  description?: string;
  tags?: string[];
  fileSize?: string;
  bitrate?: string;
  resolution?: string;
  codec?: string;
}

export function DownloadDialog({
  open,
  onOpenChange,
  url,
  source,
}: DownloadDialogProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [videoQuality, setVideoQuality] = useState<VideoQuality>("1080p");
  const [audioQuality, setAudioQuality] = useState<AudioQuality>("320 kbps");
  const [downloadType, setDownloadType] = useState<DownloadType>("both");
  const [mediaInfo, setMediaInfo] = useState<MediaInfo | null>(null);

  // Simulate fetching media info with multiple stages
  useEffect(() => {
    if (open) {
      setCurrentStep(1);
      setProgress(0);

      // Stage 1: URL Analysis
      setTimeout(() => {
        setProgress(15);
      }, 500);

      // Stage 2: Metadata Fetching
      setTimeout(() => {
        setProgress(35);
      }, 1000);

      // Stage 3: Quality Detection
      setTimeout(() => {
        setProgress(65);
      }, 1500);

      // Stage 4: Complete Info Loading
      setTimeout(() => {
        if (source === "youtube") {
          setMediaInfo({
            title: "Building Amazing React Components with TypeScript - Complete Tutorial",
            artist: "React Master",
            channel: "TechEducation Pro",
            thumbnail: "https://images.pexels.com/photos/2726370/pexels-photo-2726370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            duration: "25:47",
            views: "1.2M",
            likes: "45K",
            uploadDate: "2024-01-15",
            description: "Learn how to build professional React components using TypeScript. This comprehensive tutorial covers best practices, advanced patterns, and real-world examples.",
            tags: ["React", "TypeScript", "Tutorial", "Web Development", "JavaScript"],
            fileSize: "485 MB",
            resolution: "1920x1080",
            codec: "H.264",
            bitrate: "2.5 Mbps"
          });
        } else {
          setMediaInfo({
            title: "Midnight Melodies - Acoustic Sessions",
            artist: "Luna Rodriguez",
            thumbnail: "https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            duration: "4:23",
            likes: "128K",
            uploadDate: "2024-02-20",
            description: "A beautiful acoustic rendition featuring soulful melodies and heartfelt lyrics that capture the essence of late-night reflections.",
            tags: ["Acoustic", "Indie", "Chill", "Singer-Songwriter"],
            fileSize: "12.8 MB",
            bitrate: "320 kbps",
            codec: "MP3"
          });
        }
        setProgress(100);
        setCurrentStep(2);
      }, 2000);
    } else {
      setProgress(0);
      setMediaInfo(null);
    }
  }, [open, source]);

  const handleDownload = () => {
    setCurrentStep(3);
    setProgress(0);

    // Simulate download with realistic stages
    const stages = [
      { progress: 15, delay: 300 },
      { progress: 35, delay: 600 },
      { progress: 55, delay: 900 },
      { progress: 75, delay: 1200 },
      { progress: 90, delay: 1500 },
      { progress: 100, delay: 1800 }
    ];

    stages.forEach(({ progress: targetProgress, delay }) => {
      setTimeout(() => {
        setProgress(targetProgress);
        if (targetProgress === 100) {
          setTimeout(() => setCurrentStep(4), 500);
        }
      }, delay);
    });
  };

  const getDownloadTypeIcon = () => {
    switch (downloadType) {
      case "video": return <FaFileVideo className="text-blue-400" />;
      case "audio": return <FaFileAudio className="text-green-400" />;
      case "both": return <FaLayerGroup className="text-purple-400" />;
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    completed: { opacity: 1, x: 0, scale: 1.05 }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[950px] p-0 overflow-hidden border-0 bg-transparent shadow-2xl">
        {/* Glassmorphism container */}
        <div className="relative backdrop-blur-3xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] min-h-[550px]">
          
          {/* Enhanced animated background gradients */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 via-purple-500/10 to-pink-400/20 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-green-400/15 via-blue-500/10 to-purple-400/15 blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-7 min-h-[550px]">
            {/* Left side - Content */}
            <div className="lg:col-span-5 p-8">
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-3 text-white drop-shadow-lg">
                  {source === "youtube" ? (
                    <div className="p-3 rounded-xl bg-red-500/20 backdrop-blur-md border border-red-400/30">
                      <FaYoutube className="text-red-400 text-xl" />
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl bg-green-500/20 backdrop-blur-md border border-green-400/30">
                      <FaMusic className="text-green-400 text-xl" />
                    </div>
                  )}
                  {source === "youtube" ? "YouTube" : "JioSaavn"} Downloader
                </DialogTitle>
              </DialogHeader>

              <div className="mt-8">
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                        <div className="flex items-center justify-center space-x-4 mb-6">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="p-3 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30"
                          >
                            <FaInfoCircle className="h-8 w-8 text-blue-400" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">Analyzing Media</h3>
                            <p className="text-white/70">Extracting information from URL...</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3 text-sm text-white/80">
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span>Validating URL structure...</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span>Fetching metadata...</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                            <span>Detecting available qualities...</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep >= 2 && mediaInfo && (
                    <motion.div 
                      key="step2+"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      {/* Enhanced Media info card */}
                      <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                        <div className="flex gap-6 items-start">
                          <div className="relative h-32 w-48 overflow-hidden rounded-xl flex-shrink-0 shadow-lg">
                            <img
                              src={mediaInfo.thumbnail}
                              alt={mediaInfo.title}
                              className="object-cover h-full w-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white font-medium">
                              {mediaInfo.duration}
                            </div>
                          </div>
                          
                          <div className="flex-1 space-y-3">
                            <h3 className="font-bold text-xl line-clamp-2 text-white drop-shadow-md">
                              {mediaInfo.title}
                            </h3>
                            
                            <div className="flex items-center gap-4 text-white/80">
                              {mediaInfo.channel && (
                                <div className="flex items-center gap-2">
                                  <FaUser className="h-4 w-4" />
                                  <span className="font-medium">{mediaInfo.channel}</span>
                                </div>
                              )}
                              {mediaInfo.artist && (
                                <div className="flex items-center gap-2">
                                  <FaMusic className="h-4 w-4" />
                                  <span className="font-medium">{mediaInfo.artist}</span>
                                </div>
                              )}
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                              {mediaInfo.views && (
                                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                                  <FaEye className="h-4 w-4 text-blue-400" />
                                  <span className="text-sm font-medium text-white">{mediaInfo.views}</span>
                                </div>
                              )}
                              {mediaInfo.likes && (
                                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                                  <FaHeart className="h-4 w-4 text-red-400" />
                                  <span className="text-sm font-medium text-white">{mediaInfo.likes}</span>
                                </div>
                              )}
                              {mediaInfo.uploadDate && (
                                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                                  <FaCalendarAlt className="h-4 w-4 text-green-400" />
                                  <span className="text-sm font-medium text-white">{mediaInfo.uploadDate}</span>
                                </div>
                              )}
                              {mediaInfo.fileSize && (
                                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                                  <FaDownload className="h-4 w-4 text-purple-400" />
                                  <span className="text-sm font-medium text-white">{mediaInfo.fileSize}</span>
                                </div>
                              )}
                            </div>

                            {mediaInfo.description && (
                              <p className="text-white/70 text-sm line-clamp-2 leading-relaxed">
                                {mediaInfo.description}
                              </p>
                            )}

                            {mediaInfo.tags && (
                              <div className="flex flex-wrap gap-2">
                                {mediaInfo.tags.slice(0, 5).map((tag, index) => (
                                  <Badge key={index} className="bg-white/20 backdrop-blur-sm border-white/30 text-white/90 hover:bg-white/30">
                                    <FaHashtag className="h-3 w-3 mr-1" />
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {currentStep === 2 && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="space-y-6"
                        >
                          {/* Download Type Selection */}
                          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                            <h4 className="text-lg font-semibold text-white drop-shadow-md mb-4 flex items-center gap-2">
                              {getDownloadTypeIcon()}
                              Download Type
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              {[
                                { value: "video", label: "Video Only", icon: <FaFileVideo />, desc: "Download video without audio" },
                                { value: "audio", label: "Audio Only", icon: <FaFileAudio />, desc: "Extract audio track only" },
                                { value: "both", label: "Video + Audio", icon: <FaLayerGroup />, desc: "Complete media file" }
                              ].map((type) => (
                                <div
                                  key={type.value}
                                  onClick={() => setDownloadType(type.value as DownloadType)}
                                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                                    downloadType === type.value
                                      ? "bg-blue-500/30 border-blue-400/50 shadow-lg shadow-blue-500/25"
                                      : "bg-white/10 border-white/20 hover:bg-white/20"
                                  } backdrop-blur-sm`}
                                >
                                  <div className="flex items-center gap-3 mb-2">
                                    <div className={`text-lg ${downloadType === type.value ? "text-blue-300" : "text-white/70"}`}>
                                      {type.icon}
                                    </div>
                                    <span className={`font-medium ${downloadType === type.value ? "text-white" : "text-white/80"}`}>
                                      {type.label}
                                    </span>
                                  </div>
                                  <p className={`text-xs ${downloadType === type.value ? "text-blue-200" : "text-white/60"}`}>
                                    {type.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Quality Selection */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {(downloadType === "video" || downloadType === "both") && source === "youtube" && (
                              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                                <h4 className="text-lg font-semibold text-white drop-shadow-md mb-4">
                                  Video Quality
                                </h4>
                                <Select value={videoQuality} onValueChange={(value) => setVideoQuality(value as VideoQuality)}>
                                  <SelectTrigger className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent className="bg-black/90 backdrop-blur-xl border-white/20">
                                    {["4K", "1440p", "1080p", "720p", "480p", "360p"].map((quality) => (
                                      <SelectItem key={quality} value={quality} className="text-white hover:bg-white/20">
                                        {quality} {quality === "4K" && "(Ultra HD)"} {quality === "1440p" && "(2K)"} {quality === "1080p" && "(Full HD)"}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            )}

                            {(downloadType === "audio" || downloadType === "both") && (
                              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                                <h4 className="text-lg font-semibold text-white drop-shadow-md mb-4">
                                  Audio Quality
                                </h4>
                                <Select value={audioQuality} onValueChange={(value) => setAudioQuality(value as AudioQuality)}>
                                  <SelectTrigger className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent className="bg-black/90 backdrop-blur-xl border-white/20">
                                    {["320 kbps", "256 kbps", "192 kbps", "128 kbps", "96 kbps"].map((quality) => (
                                      <SelectItem key={quality} value={quality} className="text-white hover:bg-white/20">
                                        {quality} {quality === "320 kbps" && "(Highest)"} {quality === "128 kbps" && "(Standard)"}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            )}
                          </div>

                          <Button 
                            onClick={handleDownload} 
                            className="w-full gap-3 h-16 text-lg font-semibold bg-gradient-to-r from-blue-500/80 to-purple-600/80 hover:from-blue-600/90 hover:to-purple-700/90 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                          >
                            <FaDownload className="h-5 w-5" />
                            Download {downloadType === "both" ? "Video + Audio" : downloadType === "video" ? "Video" : "Audio"}
                          </Button>
                        </motion.div>
                      )}

                      {currentStep === 3 && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="space-y-6"
                        >
                          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="h-16 w-16 border-4 border-white/30 border-t-blue-400 rounded-full mx-auto mb-6"
                            />
                            <h3 className="text-xl font-semibold text-white mb-2">
                              Downloading {downloadType === "both" ? "Video + Audio" : downloadType}...
                            </h3>
                            <p className="text-white/70 mb-4">
                              Processing your {downloadType === "video" ? videoQuality : downloadType === "audio" ? audioQuality : `${videoQuality} + ${audioQuality}`} file
                            </p>
                            <div className="text-2xl font-bold text-blue-400">
                              {progress}%
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 4 && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ type: "spring", damping: 15 }}
                          className="space-y-6"
                        >
                          <div className="p-8 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-400/30 shadow-lg">
                            <div className="text-center">
                              <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", damping: 10, delay: 0.2 }}
                                className="h-20 w-20 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-green-400/50"
                              >
                                <span className="text-3xl">✓</span>
                              </motion.div>
                              <h3 className="text-2xl text-green-100 font-bold mb-2">
                                Download Complete!
                              </h3>
                              <p className="text-green-200/80">
                                Your {downloadType} file has been downloaded successfully
                              </p>
                            </div>
                          </div>
                          <Button
                            onClick={() => onOpenChange(false)}
                            variant="outline"
                            className="w-full h-14 text-lg font-medium bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                          >
                            Close
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right side - Enhanced Progress */}
            <div className="lg:col-span-2 relative overflow-hidden">
              {/* Glass panel background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-l border-white/10"></div>
              
              {/* Enhanced floating orbs */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>
              <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-pink-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FaClock className="text-white/80 text-lg" />
                  <h4 className="text-lg font-semibold text-white drop-shadow-md">Progress</h4>
                </div>
                
                {/* Enhanced glassmorphism progress bar */}
                <div className="mb-8 p-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-inner">
                  <motion.div 
                    className="h-4 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 transition-all duration-500 ease-out shadow-lg relative overflow-hidden"
                    style={{ width: `${progress}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  {[
                    { step: 1, label: "Analyzing Media", icon: <FaInfoCircle />, color: "blue" },
                    { step: 2, label: "Configure Download", icon: <FaDownload />, color: "purple" },
                    { step: 3, label: "Processing", icon: <FaClock />, color: "orange" },
                    { step: 4, label: "Completed", icon: <span>✓</span>, color: "green" }
                  ].map(({ step, label, icon, color }) => (
                    <motion.div
                      key={step}
                      variants={stepVariants}
                      initial="hidden"
                      animate={currentStep > step ? "completed" : currentStep === step ? "visible" : "hidden"}
                      transition={{ delay: step * 0.1, type: "spring", damping: 15 }}
                      className="flex items-center gap-4"
                    >
                      <motion.div
                        className={`h-12 w-12 rounded-full flex items-center justify-center text-sm font-bold backdrop-blur-md border transition-all duration-500 ${
                          currentStep > step
                            ? `bg-${color}-500/30 text-${color}-100 border-${color}-400/50 shadow-lg shadow-${color}-500/25`
                            : currentStep === step
                            ? `bg-${color}-500/30 text-${color}-100 border-${color}-400/50 shadow-lg shadow-${color}-500/25`
                            : "bg-white/10 text-white/60 border-white/20"
                        }`}
                        animate={currentStep === step ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 2, repeat: currentStep === step ? Infinity : 0 }}
                      >
                        {currentStep > step ? <span>✓</span> : currentStep === step ? icon : step}
                      </motion.div>
                      <div className={`transition-all duration-300 ${
                        currentStep >= step ? "text-white drop-shadow-sm" : "text-white/50"
                      }`}>
                        <div className="text-base font-semibold">{label}</div>
                        {currentStep === step && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xs text-white/70 mt-1"
                          >
                            {step === 1 && "Extracting metadata..."}
                            {step === 2 && "Ready for download"}
                            {step === 3 && `${progress}% complete`}
                            {step === 4 && "File ready!"}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Download Stats */}
                {currentStep >= 2 && mediaInfo && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <h5 className="text-sm font-semibold text-white mb-3">File Info</h5>
                    <div className="space-y-2 text-xs text-white/80">
                      {mediaInfo.resolution && (
                        <div className="flex justify-between">
                          <span>Resolution:</span>
                          <span className="font-medium">{mediaInfo.resolution}</span>
                        </div>
                      )}
                      {mediaInfo.codec && (
                        <div className="flex justify-between">
                          <span>Codec:</span>
                          <span className="font-medium">{mediaInfo.codec}</span>
                        </div>
                      )}
                      {mediaInfo.bitrate && (
                        <div className="flex justify-between">
                          <span>Bitrate:</span>
                          <span className="font-medium">{mediaInfo.bitrate}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="font-medium capitalize">{downloadType}</span>
                      </div>
                      {downloadType !== "audio" && (
                        <div className="flex justify-between">
                          <span>Quality:</span>
                          <span className="font-medium">{videoQuality}</span>
                        </div>
                      )}
                      {downloadType !== "video" && (
                        <div className="flex justify-between">
                          <span>Audio:</span>
                          <span className="font-medium">{audioQuality}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}