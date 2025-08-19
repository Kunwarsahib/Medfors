"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, 
  ClipboardList, 
  Rocket,
  Users,
  UserCheck,
  ArrowRight
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const hospitalSteps = [
  {
    step: "1",
    title: "Tell us your need",
    description: "role, specialty, shift, location",
    icon: ClipboardList,
    details: "Share your staffing requirements including role, specialty, shift preferences, and location. We'll understand your specific needs."
  },
  {
    step: "2", 
    title: "Curated shortlist",
    description: "verified profiles from partner universities",
    icon: Users,
    details: "We provide a carefully curated list of verified candidates from our partner universities, pre-screened for your requirements."
  },
  {
    step: "3",
    title: "Hire & deploy", 
    description: "direct/contract/payrolling, compliance and onboarding support",
    icon: Rocket,
    details: "Choose your preferred hiring model and we handle all compliance, documentation, and onboarding support for seamless deployment."
  }
]

const jobSeekerSteps = [
  {
    step: "1",
    title: "Create your profile",
    description: "upload resume + select preferences",
    icon: ClipboardList,
    details: "Upload your resume and specify your preferences including location, specialty, shift preferences, and career goals."
  },
  {
    step: "2",
    title: "Interview & match",
    description: "we coordinate slots with facilities", 
    icon: UserCheck,
    details: "We coordinate interview slots with healthcare facilities and match you with opportunities that align with your profile."
  },
  {
    step: "3",
    title: "Join and grow",
    description: "credentialing support, optional upskilling",
    icon: Rocket,
    details: "Get comprehensive credentialing support and access to optional upskilling programs to advance your healthcare career."
  }
]

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'hospitals' | 'job-seekers'>('hospitals')

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Building2 className="mr-2 h-3 w-3" />
              Simple Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Streamlined processes for both healthcare facilities and professionals
            </p>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex rounded-lg bg-muted p-1">
            <Button
              variant={activeTab === 'hospitals' ? 'default' : 'ghost'}
              size="lg"
              onClick={() => setActiveTab('hospitals')}
              className="rounded-md"
            >
              <Building2 className="mr-2 h-4 w-4" />
              For Hospitals
            </Button>
            <Button
              variant={activeTab === 'job-seekers' ? 'default' : 'ghost'}
              size="lg"
              onClick={() => setActiveTab('job-seekers')}
              className="rounded-md"
            >
              <UserCheck className="mr-2 h-4 w-4" />
              For Job Seekers
            </Button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {(activeTab === 'hospitals' ? hospitalSteps : jobSeekerSteps).map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 bg-background shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-sm font-medium">
                        Step {step.step}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {step.description}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.details}
                      </p>
                    </div>

                    {/* Arrow (except for last step) */}
                    {index < 2 && (
                      <div className="hidden lg:flex justify-center mt-6">
                        <ArrowRight className="h-6 w-6 text-muted-foreground" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  )
}
