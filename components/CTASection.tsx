"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  UserCheck, 
  ArrowRight,
  Users,
  CheckCircle
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

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to staff or get placed?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Join hundreds of healthcare institutions and professionals who trust MedFors 
              for their staffing and career needs.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Button className="group inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" onClick={() => navigateToLeadForm('employer')}>
              <Building2 className="mr-3 h-6 w-6" />
              Request Staff
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="group inline-flex items-center justify-center rounded-md border-2 border-primary bg-background px-8 py-4 text-lg font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" onClick={() => navigateToLeadForm('candidate')}>
              <UserCheck className="mr-3 h-6 w-6" />
              Submit Resume
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-8 sm:grid-cols-3 mb-16"
          >
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                500+ Healthcare Partners
              </h3>
              <p className="text-muted-foreground">
                Trusted by hospitals, clinics, and care facilities nationwide
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                95% Success Rate
              </h3>
              <p className="text-muted-foreground">
                Proven track record of successful placements and satisfied clients
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Nationwide Coverage
              </h3>
              <p className="text-muted-foreground">
                Serving healthcare facilities and professionals across India
              </p>
            </div>
          </motion.div>



          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <div className="bg-muted/50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
                          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of healthcare institutions and professionals who trust MedFors 
              for their staffing and career needs.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors" onClick={() => navigateToLeadForm('employer')}>
                  <Building2 className="mr-2 h-5 w-5" />
                  Request Staff
                </Button>
                <Button variant="outline" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors" onClick={() => navigateToLeadForm('candidate')}>
                  <UserCheck className="mr-2 h-5 w-5" />
                  Submit Resume
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
