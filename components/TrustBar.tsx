"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, 
  Users, 
  GraduationCap, 
  MapPin,
  Clock,
  Shield,
  CheckCircle
} from "lucide-react"
import { motion } from "framer-motion"

const trustBadges = [
  {
    icon: Building2,
    label: "Government & Private",
    description: "Serving all sectors"
  },
  {
    icon: MapPin,
    label: "Rural-first",
    description: "Focus on underserved areas"
  },
  {
    icon: GraduationCap,
    label: "University-linked",
    description: "Direct graduate pipeline"
  }
]

const kpis = [
  {
    icon: Users,
    value: "300+",
    label: "verified graduates on file",
    color: "text-primary"
  },
  {
    icon: Building2,
    value: "50+",
    label: "facilities served",
    color: "text-accent"
  },
  {
    icon: Clock,
    value: "<10 days",
    label: "median deployment",
    color: "text-primary"
  },
  {
    icon: Shield,
    value: "100%",
    label: "compliance verified",
    color: "text-accent"
  }
]

export function TrustBar() {
  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why MedFors Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Why MedFors
            </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            University pipelines, verified credentials, rapid deployment. Built for Government, Private, and NGO providers.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Trust Badges */}
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-0 bg-background/60 backdrop-blur shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <badge.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge variant="secondary" className="text-xs font-medium mb-1">
                        {badge.label}
                      </Badge>
                      <p className="text-xs text-muted-foreground">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* KPIs */}
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
            >
              <Card className="border-0 bg-background/60 backdrop-blur shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <kpi.icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline space-x-1">
                        <span className={`text-lg font-bold ${kpi.color}`}>
                          {kpi.value}
                        </span>
                        <CheckCircle className="h-3 w-3 text-green-500" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {kpi.label}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
