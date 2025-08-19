"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, 
  UserCheck, 
  Shield, 
  Users, 
  Heart 
} from "lucide-react"

// Custom navigation function for lead form
const navigateToLeadForm = (type: 'employer' | 'candidate') => {
  if (typeof window !== 'undefined') {
    // Update URL with hash and query parameters
    window.location.hash = `lead-form?type=${type}`
    
    // Scroll to the form
    const element = document.getElementById('lead-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

export function Hero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Staffing India's Rural & Semi-Urban Healthcare — Fast and Credible.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We connect graduating doctors, nurses, and paramedics with hospitals, NGOs, and care homes — via direct hire, contract, or payrolling.
              </p>
            </div>

            {/* Primary Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base font-semibold" onClick={() => navigateToLeadForm('employer')}>
                <Building2 className="mr-2 h-5 w-5" />
                Request Staff
              </Button>
              <Button variant="outline" size="lg" className="text-base font-semibold" onClick={() => navigateToLeadForm('candidate')}>
                <UserCheck className="mr-2 h-5 w-5" />
                Submit Resume
              </Button>
            </div>

            {/* Trust Caption */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>Backed by decades of leadership in India's healthcare ecosystem.</span>
            </div>

            {/* Micro-badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                <Users className="mr-1 h-3 w-3" />
                Government
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                <Building2 className="mr-1 h-3 w-3" />
                Private
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                <Heart className="mr-1 h-3 w-3" />
                NGO
              </Badge>
            </div>
          </motion.div>

          {/* Right Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Hero Image */}
              <div className="relative aspect-[4/3] lg:aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Healthcare professionals in a modern medical facility"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur rounded-xl p-4 shadow-lg border"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">Trusted by</p>
                    <p className="text-2xl font-bold text-primary">500+</p>
                    <p className="text-xs text-muted-foreground">Healthcare facilities</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-sm font-medium text-foreground">Placed</p>
                    <p className="text-2xl font-bold text-accent">2,500+</p>
                    <p className="text-xs text-muted-foreground">Healthcare professionals</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  )
}
