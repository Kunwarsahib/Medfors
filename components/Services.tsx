"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  Clock, 
  Users, 
  UserCheck,
  Stethoscope,
  Heart,
  Activity,
  FileText,
  Briefcase,
  GraduationCap,
  Shield,
  ArrowRight
} from "lucide-react"
import { motion } from "framer-motion"

const engagementModels = [
  {
    title: "Direct Hire",
    description: "Full-time placements",
    icon: Users,
    details: "Permanent staffing solutions with comprehensive onboarding and long-term support for your healthcare team.",
    features: ["Full-time positions", "Complete onboarding", "Long-term support"]
  },
  {
    title: "Contract Staffing",
    description: "Flexible durations; surge support",
    icon: Clock,
    details: "Flexible staffing solutions for temporary needs, seasonal demands, and emergency coverage requirements.",
    features: ["Flexible durations", "Surge support", "Emergency coverage"]
  },
  {
    title: "Payrolling",
    description: "On our rolls, deployed at your facility",
    icon: Building2,
    details: "We handle all HR, payroll, and compliance while professionals work directly at your healthcare facility.",
    features: ["HR management", "Payroll handling", "Compliance support"]
  }
]

const rolesWeStaff = [
  {
    title: "Doctors & Specialists",
    description: "Medical professionals across specialties",
    icon: Stethoscope,
    details: "Qualified doctors, specialists, and consultants across all medical disciplines for your healthcare facility.",
    features: ["General practitioners", "Specialists", "Consultants"]
  },
  {
    title: "Nurses",
    description: "Registered and specialized nursing staff",
    icon: Heart,
    details: "Experienced nursing professionals including RNs, LPNs, and specialized nurses for various departments.",
    features: ["Registered nurses", "Specialized care", "Department expertise"]
  },
  {
    title: "Paramedics & Technicians",
    description: "Technical and emergency care professionals",
    icon: Activity,
    details: "Skilled paramedics, lab technicians, and technical staff for diagnostic and emergency care services.",
    features: ["Emergency care", "Lab technicians", "Technical support"]
  },
  {
    title: "Allied Health & Admin",
    description: "Support and administrative professionals",
    icon: FileText,
    details: "Administrative staff, medical assistants, and allied health professionals to support your operations.",
    features: ["Administrative staff", "Medical assistants", "Operational support"]
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Briefcase className="mr-2 h-3 w-3" />
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Healthcare Staffing Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Flexible engagement models and diverse role coverage to meet all your healthcare staffing needs
            </p>
          </motion.div>
        </div>

        {/* Engagement Models */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Engagement Models
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the staffing model that best fits your organization's needs and operational requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full border-0 bg-background shadow-lg hover:shadow-xl transition-shadow group">
                  <CardContent className="p-8">
                    {/* Icon and Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <model.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs font-medium">
                        {index + 1}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">
                          {model.title}
                        </h4>
                        <p className="text-primary font-medium">
                          {model.description}
                        </p>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {model.details}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {model.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-muted-foreground">
                            <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Roles We Staff */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Roles We Staff
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage across all healthcare roles and specialties
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rolesWeStaff.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full border-0 bg-background shadow-lg hover:shadow-xl transition-shadow group">
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors mb-4">
                      <role.icon className="h-5 w-5 text-accent" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-1">
                          {role.title}
                        </h4>
                        <p className="text-accent font-medium text-sm">
                          {role.description}
                        </p>
                      </div>
                      
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {role.details}
                      </p>

                      {/* Features */}
                      <div className="space-y-1">
                        {role.features.map((feature) => (
                          <div key={feature} className="flex items-center text-xs text-muted-foreground">
                            <ArrowRight className="h-2 w-2 mr-1 text-accent" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
