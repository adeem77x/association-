// components/FadeInSection.tsx
"use client"
import { ReactNode } from "react"
import { motion } from "framer-motion"

type FadeInSectionProps = {
  children: ReactNode
  className?: string
}

export default function FadeInSection({ children, className = "" }: FadeInSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
