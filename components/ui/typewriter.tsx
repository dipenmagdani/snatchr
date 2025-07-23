"use client"

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TypewriterProps {
  words: string[]
  className?: string
  loop?: boolean
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
}

export function Typewriter({
  words,
  className,
  loop = true,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    
    const timeout = setTimeout(() => {
      // Typing
      if (!isDeleting && currentText !== word) {
        setCurrentText(word.substring(0, currentText.length + 1))
        return
      }
      
      // Delay after typing full word
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords)
        return
      }
      
      // Deleting
      if (isDeleting && currentText !== '') {
        setCurrentText(word.substring(0, currentText.length - 1))
        return
      }
      
      // Move to next word
      if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentWordIndex((currentWordIndex + 1) % words.length)
        
        if (currentWordIndex === words.length - 1 && !loop) {
          return
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)
    
    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, loop, typingSpeed, deletingSpeed, delayBetweenWords])
  
  return (
    <span className={cn("inline-block", className)}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}