"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  GraduationCap, 
  Users, 
  Shield, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Building2,
  FileText
} from "lucide-react"
import { motion } from "framer-motion"

const partnershipFeatures = [
  {
    icon: Shield,
    title: "Secure data and consent-based resumes",
    description: "All student data is collected with proper consent and stored securely following privacy regulations."
  },
  {
    icon: TrendingUp,
    title: "Early forecasting of specialty demand",
    description: "Predict future staffing needs based on graduation trends and healthcare market analysis."
  },
  {
    icon: CheckCircle,
    title: "Job-ready profiles with licensing status",
    description: "Pre-verified candidates with complete documentation and licensing information."
  }
]

export function UniversityPartnership() {
  return (
    <section id="universities" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                <GraduationCap className="mr-2 h-3 w-3" />
                University Partnerships
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                University Partnerships
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We maintain a live database of final-year students and recent graduates, forecast specialty demand, and make hiring predictable.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {partnershipFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="#contact">
                  <Building2 className="mr-2 h-5 w-5" />
                  Partner Your University
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid gap-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="border-0 bg-background shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">50+</div>
                      <div className="text-sm text-muted-foreground">Partner Universities</div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card className="border-0 bg-background shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                          <GraduationCap className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-accent mb-1">5,000+</div>
                      <div className="text-sm text-muted-foreground">Graduates Database</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Process Flow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="border-0 bg-background shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4 text-center">
                      Partnership Process
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          1
                        </div>
                        <span className="text-sm text-muted-foreground">
                          University partnership agreement
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          2
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Student consent and data collection
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          3
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Profile verification and licensing check
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          4
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Hospital placement and onboarding
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Benefits Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/5 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <FileText className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">
                        Benefits for Universities
                      </h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-accent" />
                        <span>Higher placement rates for graduates</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-accent" />
                        <span>Industry connections and partnerships</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-accent" />
                        <span>Real-time market insights</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
