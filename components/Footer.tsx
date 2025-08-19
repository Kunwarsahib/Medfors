"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, 
  UserCheck, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  Shield,
  FileText,
  ExternalLink
} from "lucide-react"

const footerLinks = {
  about: [
    { name: "Our Mission", href: "#" },
    { name: "Leadership Team", href: "#" },
    { name: "Success Stories", href: "#" },
    { name: "Careers", href: "#" }
  ],
  services: [
    { name: "Direct Hire", href: "#" },
    { name: "Contract Staffing", href: "#" },
    { name: "Payrolling", href: "#" },
    { name: "Compliance Support", href: "#" }
  ],
  universities: [
    { name: "Partner Universities", href: "#" },
    { name: "Campus Programs", href: "#" },
    { name: "Student Placements", href: "#" },
    { name: "Research Collaboration", href: "#" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Data Protection", href: "#" },
    { name: "Compliance", href: "#" }
  ],
  contact: [
    { name: "info@medfors.com", href: "mailto:info@medfors.com", icon: Mail },
    { name: "+91 98765 43210", href: "tel:+919876543210", icon: Phone },
    { name: "Noida, Uttar Pradesh", href: "#", icon: MapPin }
  ]
}

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid gap-8 lg:grid-cols-6">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <Building2 className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">MedFors</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Connecting healthcare institutions with qualified professionals across India. 
                Fast, reliable, and compliant staffing solutions for better healthcare delivery.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="text-xs">
                  <Shield className="mr-1 h-3 w-3" />
                  ISO Certified
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  <FileText className="mr-1 h-3 w-3" />
                  Compliant
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  <UserCheck className="mr-1 h-3 w-3" />
                  Verified
                </Badge>
              </div>

              {/* Important Note */}
              <div className="bg-background/50 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Important:</strong> We do not charge 
                  placement fees to candidates.
                </p>
              </div>
            </motion.div>

            {/* About Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-semibold text-foreground mb-4">About</h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Universities Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-semibold text-foreground mb-4">Universities</h3>
              <ul className="space-y-3">
                {footerLinks.universities.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal & Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Legal */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                      >
                        {link.name}
                        <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Contact</h3>
                <ul className="space-y-3">
                  {footerLinks.contact.map((link) => {
                    const IconComponent = link.icon
                    return (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                        >
                          <IconComponent className="mr-2 h-4 w-4" />
                          {link.name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t py-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>&copy; 2024 MedFors. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Healthcare Staffing Solutions</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="mx-1 h-4 w-4 text-red-500" />
                <span>in India</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  <GraduationCap className="mr-1 h-3 w-3" />
                  University Partner
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Building2 className="mr-1 h-3 w-3" />
                  Healthcare Focused
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
