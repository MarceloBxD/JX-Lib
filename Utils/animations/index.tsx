import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

export interface iFadeInRight {
  children: React.ReactNode
  sec?: number
}

export interface iExpand {
  children: React.ReactNode
  isCurrent: boolean
}

export interface iFadeIn {
  duration?: number
}

export interface iStepAnimation {
  children: ReactNode
}

export interface iHeightAnimation {
  children: ReactNode
  active: boolean
  height: number
}

export const FadeInRight: React.FC<iFadeInRight> = ({
  children,
  sec = 1.5,
}) => {
  return (
    <motion.div
      initial={{ opacity: '0%', x: '100%' }}
      whileInView={{ opacity: '100%', x: '0%', transition: { duration: sec } }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export const Expand: React.FC<iExpand> = ({ children, isCurrent }) => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: isCurrent ? 0.9 : 0.8 }}
    >
      {children}
    </motion.div>
  )
}

export const FadeIn: React.FC<iFadeIn> = ({ children, duration = 0.15 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  )
}

export const StepAnimation: React.FC<iStepAnimation> = ({ children }) => {
  return (
    <motion.div
      style={{ height: '100%' }}
      initial={{ opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        height: '100%',
      }}
      exit={{
        opacity: 0,
        y: 0,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  )
}

export const HeightAnimation: React.FC<iHeightAnimation> = ({
  children,
  active,
  height,
}) => {
  const variants = {
    open: {
      height: height + 5,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      height: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  }

  return (
    <motion.div
      variants={variants}
      initial="closed"
      animate={active ? 'open' : 'closed'}
      style={{
        overflow: 'hidden',
        position: 'absolute',
        width: '100%',
      }}
    >
      {children}
    </motion.div>
  )
}
