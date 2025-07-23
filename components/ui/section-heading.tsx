import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
  descriptionClassName?: string
}

export function SectionHeading({ 
  title, 
  description, 
  className,
  descriptionClassName
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-2 text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-500 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
        {title}
      </h2>
      {description && (
        <p className={cn("mx-auto max-w-[700px] text-muted-foreground", descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  )
}