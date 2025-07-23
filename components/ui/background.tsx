"use client"

import React from "react"
import { cn } from "@/lib/utils"

export const BackgroundLines = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
      {...props}
    >
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-full h-full max-w-7xl mx-auto">
          {/* Animated lines */}
          <div className="h-full w-full bg-grid-lines dark:bg-grid-lines-dark [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>
    </div>
  )
}

export const BackgroundGrid = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
      {...props}
    >
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-full h-full max-w-7xl mx-auto">
          {/* Animated grid */}
          <div className="h-full w-full bg-grid-small-white dark:bg-grid-small-dark [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_80%)]" />
        </div>
      </div>
    </div>
  )
}