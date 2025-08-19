"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  Building2, 
  Users 
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

const focusStates = [
  {
    name: "Uttar Pradesh",
    districts: ["Lucknow", "Kanpur", "Varanasi", "Prayagraj", "Gorakhpur"],
    healthcareGap: "High",
    priority: "Primary"
  },
  {
    name: "Bihar",
    districts: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
    healthcareGap: "High",
    priority: "Primary"
  },
  {
    name: "Madhya Pradesh",
    districts: ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain"],
    healthcareGap: "Medium",
    priority: "Secondary"
  },
  {
    name: "Rajasthan",
    districts: ["Jaipur", "Jodhpur", "Kota", "Ajmer", "Bikaner"],
    healthcareGap: "Medium",
    priority: "Secondary"
  },
  {
    name: "Jharkhand",
    districts: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
    healthcareGap: "High",
    priority: "Primary"
  },
  {
    name: "Chhattisgarh",
    districts: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Jagdalpur"],
    healthcareGap: "Medium",
    priority: "Secondary"
  }
]

const regionStats = [
  {
    icon: Users,
    value: "25+",
    label: "Districts Covered",
    color: "text-primary"
  },
  {
    icon: Building2,
    value: "150+",
    label: "Healthcare Facilities",
    color: "text-accent"
  },
  {
    icon: Users, // Changed from Heart to Users for consistency with stats
    value: "2M+",
    label: "Population Served",
    color: "text-primary"
  },
  {
    icon: Users, // Changed from Globe to Users for consistency with stats
    value: "6",
    label: "Focus States",
    color: "text-accent"
  }
]

export function Regions() {
  return (
    <section id="regions" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <MapPin className="mr-2 h-3 w-3" />
              Regional Coverage
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Where help is needed most.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Priority to semi-urban and rural districts while serving urban centers.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Map and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="relative">
              <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/5 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center mb-6">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                        <Users className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      India Healthcare Coverage Map
                    </h3>
                    <p className="text-muted-foreground">
                      Interactive map showing our coverage across semi-urban and rural districts
                    </p>
                    <div className="flex justify-center">
                      <Badge variant="outline" className="text-sm">
                        <MapPin className="mr-1 h-3 w-3" />
                        Map Coming Soon
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Decorative map dots */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-8 right-8 w-2 h-2 bg-accent rounded-full animate-pulse delay-100" />
              <div className="absolute bottom-6 left-8 w-2 h-2 bg-primary rounded-full animate-pulse delay-200" />
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-accent rounded-full animate-pulse delay-300" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {regionStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="border-0 bg-background shadow-lg">
                    <CardContent className="p-4 text-center">
                      <div className="flex justify-center mb-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                          <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      <div className={`text-lg font-bold ${stat.color} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Focus States */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Initial Focus States
              </h3>
              <p className="text-muted-foreground">
                We&apos;re strategically focusing on states with the highest healthcare staffing gaps
              </p>
            </div>

            <div className="grid gap-4">
              {focusStates.map((state, index) => (
                <motion.div
                  key={state.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">
                              {state.name}
                            </h4>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge 
                                variant={state.priority === "Primary" ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {state.priority} Priority
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {state.healthcareGap} Gap
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Key Districts:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {state.districts.map((district) => (
                            <span
                              key={district}
                              className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-muted text-muted-foreground"
                            >
                              <CheckCircle className="h-3 w-3 mr-1 text-accent" />
                              {district}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Expansion Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Card className="border-0 bg-muted/50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Expanding rapidly</span> - 
                      More states and districts being added based on healthcare demand and facility requests.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-muted/50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to serve your region?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a healthcare facility in our focus areas or a professional looking to serve 
              underserved communities, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigateToLeadForm('employer')}>
                <Building2 className="mr-2 h-5 w-5" />
                Request Staff
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigateToLeadForm('candidate')}>
                <Users className="mr-2 h-5 w-5" />
                Join Our Network
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
