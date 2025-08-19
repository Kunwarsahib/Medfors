"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, 
  UserCheck, 
  GraduationCap,
  MapPin,
  Shield,
  Clock,
  Users,
  FileText,
  Heart,
  Globe
} from "lucide-react"
import { motion } from "framer-motion"

const hospitalBenefits = [
  {
    icon: GraduationCap,
    title: "Verified talent",
    description: "University partnerships & verified pipelines"
  },
  {
    icon: Clock,
    title: "Faster shortlists",
    description: "Rapid shortlists, interview coordination, deployment"
  },
  {
    icon: Shield,
    title: "Compliance help",
    description: "Compliance & credentialing support"
  },
  {
    icon: Building2,
    title: "Flexible models",
    description: "Direct hire, contract, and payrolling options"
  }
]

const jobSeekerBenefits = [
  {
    icon: Globe,
    title: "Multiple facility types",
    description: "Opportunities across Government, Private, NGOs, nursing homes, elder care"
  },
  {
    icon: MapPin,
    title: "Nationwide roles",
    description: "Roles nationwide with rural & semi-urban priority"
  },
  {
    icon: FileText,
    title: "Credentialing support",
    description: "Help with documents, onboarding, and credentialing"
  },
  {
    icon: Heart,
    title: "Relocation help",
    description: "Support with relocation and settling into new locations"
  }
]

export function Audiences() {
  return (
    <section id="audiences" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Users className="mr-2 h-3 w-3" />
              Our Audiences
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tailored Solutions for Every Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you&apos;re a healthcare facility seeking reliable staff or a graduate looking for opportunities, 
              we have the right solution for you.
            </p>
          </motion.div>
        </div>

        {/* Two Panels */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* For Hospitals Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-0 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 lg:p-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    For Hospitals (Employers)
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Predictable supply for rural & semi-urban facilities.
                  </h3>
                </div>

                {/* Benefits */}
                <div className="space-y-6 mb-8">
                  {hospitalBenefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>


              </CardContent>
            </Card>
          </motion.div>

          {/* For Job Seekers Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full border-0 bg-gradient-to-br from-accent/5 to-accent/10 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 lg:p-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                      <UserCheck className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    For Job Seekers (Graduates)
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Get placed faster — with support beyond Day 1.
                  </h3>
                </div>

                {/* Benefits */}
                <div className="space-y-6 mb-8">
                  {jobSeekerBenefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                        <benefit.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>


              </CardContent>
            </Card>
          </motion.div>
        </div>


      </div>
    </section>
  )
}
