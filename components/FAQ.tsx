"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  Building2, 
  UserCheck, 
  Clock, 
  Shield, 
  FileText, 
  DollarSign, 
  MapPin, 
  Send 
} from "lucide-react"

const faqData = {
  employers: [
    {
      question: "How fast can you deploy?",
      answer: "Typical shortlists within 72 hours; deployment depends on interviews & paperwork.",
      icon: Clock
    },
    {
      question: "Do you cover credentialing/compliance?",
      answer: "We assist with verification and onboarding as required by the employer.",
      icon: Shield
    },
    {
      question: "What engagement models do you support?",
      answer: "Direct hire, contract, and payrolling.",
      icon: FileText
    }
  ],
  candidates: [
    {
      question: "Is there any fee for job seekers?",
      answer: "No placement fees charged to candidates.",
      icon: DollarSign
    },
    {
      question: "Do you have roles in government hospitals?",
      answer: "We support opportunities across Government, Private, NGOs, and care homes.",
      icon: MapPin
    },
    {
      question: "How do I apply?",
      answer: "Submit your resume and preferences; our team contacts you for next steps.",
      icon: Send
    }
  ]
}

export function FAQ() {
  const [activeGroup, setActiveGroup] = useState<string>("employers")

  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our healthcare staffing services 
            for both employers and job seekers.
          </p>
        </motion.div>

        {/* Group Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setActiveGroup("employers")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all ${
                activeGroup === "employers"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span className="font-medium">For Employers</span>
            </button>
            <button
              onClick={() => setActiveGroup("candidates")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all ${
                activeGroup === "candidates"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <UserCheck className="h-4 w-4" />
              <span className="font-medium">For Candidates</span>
            </button>
          </div>
        </motion.div>

        {/* FAQ Content */}
        <motion.div
          key={activeGroup}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/5 shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-2">
                  {activeGroup === "employers" ? (
                    <Building2 className="h-6 w-6 text-primary" />
                  ) : (
                    <UserCheck className="h-6 w-6 text-primary" />
                  )}
                  <h3 className="text-2xl font-bold text-foreground">
                    {activeGroup === "employers" ? "Employers" : "Candidates"}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {activeGroup === "employers" 
                    ? "Common questions from healthcare facilities and institutions"
                    : "Common questions from healthcare professionals and job seekers"
                  }
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqData[activeGroup as keyof typeof faqData].map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border rounded-lg bg-background/50"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-center space-x-3 text-left">
                          <IconComponent className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="font-medium text-foreground">
                            {item.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="pl-8">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-muted/50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is here to help you with any specific questions about our 
              healthcare staffing services and processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                <Building2 className="mr-2 h-5 w-5" />
                Contact for Employers
              </button>
              <button className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                <UserCheck className="mr-2 h-5 w-5" />
                Contact for Candidates
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
          <Card className="border-0 bg-background/50 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
              <p className="text-sm text-muted-foreground">
                72-hour shortlist guarantee
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-background/50 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Compliance Support</h4>
              <p className="text-sm text-muted-foreground">
                Full credentialing assistance
              </p>
            </CardContent>
          </Card>




        </motion.div>
      </div>
    </section>
  )
}
