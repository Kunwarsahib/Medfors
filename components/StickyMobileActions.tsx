"use client"

import { Button } from "@/components/ui/button"
import { 
  Building2, 
  UserCheck
} from "lucide-react"
import { motion } from "framer-motion"

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

export function StickyMobileActions() {
  return (
    <motion.div 
      className="fixed bottom-4 left-4 right-4 z-50 lg:hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <div className="flex items-center space-x-2 rounded-full bg-background/95 backdrop-blur shadow-lg border p-1">
        <Button 
          size="sm" 
          className="flex-1 rounded-full text-xs font-medium"
          onClick={() => navigateToLeadForm('employer')}
        >
          <Building2 className="mr-1 h-3 w-3" />
          Request Staff
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 rounded-full text-xs font-medium"
          onClick={() => navigateToLeadForm('candidate')}
        >
          <UserCheck className="mr-1 h-3 w-3" />
          Submit Resume
        </Button>
      </div>
    </motion.div>
  )
}
