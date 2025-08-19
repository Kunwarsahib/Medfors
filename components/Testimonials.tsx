"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Quote, 
  Star,
  Building2,
  GraduationCap,
  UserCheck,
  ArrowLeft,
  ArrowRight
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    quote: "MedFors has transformed our staffing challenges. Within 10 days, we had qualified nurses and doctors ready to serve our rural community. Their pre-verified professionals and compliance support have made all the difference for our district hospital.",
    author: "Dr. Priya Sharma",
    role: "Medical Superintendent",
    organization: "District Hospital, Lucknow",
    avatar: "",
    type: "hospital",
    rating: 5,
    badge: "Hospital Partner"
  },
  {
    id: 2,
    quote: "As a placement officer, I've seen how MedFors creates genuine opportunities for our nursing graduates. They don't just place students; they build careers. Our placement rate has improved by 40% since partnering with them.",
    author: "Mr. Rajesh Kumar",
    role: "Placement Officer",
    organization: "College of Nursing, Patna",
    avatar: "",
    type: "college",
    rating: 5,
    badge: "Education Partner"
  },
  {
    id: 3,
    quote: "MedFors helped me find my dream job in a rural hospital where I can make a real difference. The support during onboarding and the ongoing career guidance have been incredible. I'm proud to be part of their network.",
    author: "Nurse Anjali Patel",
    role: "Staff Nurse",
    organization: "Community Health Center, Gorakhpur",
    avatar: "",
    type: "nurse",
    rating: 5,
    badge: "Success Story"
  }
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "hospital":
      return Building2
    case "college":
      return GraduationCap
    case "nurse":
      return UserCheck
    default:
      return Quote
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "hospital":
      return "text-primary"
    case "college":
      return "text-accent"
    case "nurse":
      return "text-primary"
    default:
      return "text-muted-foreground"
  }
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Quote className="mr-2 h-3 w-3" />
              Testimonials
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Partners Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from healthcare institutions, educational partners, and professionals 
              who have experienced the MedFors difference.
            </p>
          </motion.div>
        </div>

        {/* Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/5 shadow-lg">
                  <CardContent className="p-8 lg:p-12">
                    <div className="text-center space-y-8">
                      {/* Quote Icon */}
                      <div className="flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                          <Quote className="h-8 w-8 text-primary" />
                        </div>
                      </div>

                      {/* Quote Text */}
                                             <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed max-w-3xl mx-auto">
                         &ldquo;{testimonials[currentIndex].quote}&rdquo;
                       </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center justify-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].author} />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <div className="font-semibold text-foreground">
                            {testimonials[currentIndex].author}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonials[currentIndex].role}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {testimonials[currentIndex].organization}
                          </div>
                        </div>
                      </div>

                      {/* Rating and Badge */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Badge variant="outline" className="text-sm">
                          {testimonials[currentIndex].badge}
                        </Badge>
                      </div>

                      {/* Type Indicator */}
                      <div className="flex items-center justify-center space-x-2">
                        {(() => {
                          const IconComponent = getTypeIcon(testimonials[currentIndex].type)
                          return (
                            <IconComponent className={`h-4 w-4 ${getTypeColor(testimonials[currentIndex].type)}`} />
                          )
                        })()}
                        <span className="text-sm text-muted-foreground capitalize">
                          {testimonials[currentIndex].type} Partner
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background shadow-lg border hover:bg-muted transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background shadow-lg border hover:bg-muted transition-colors"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>




      </div>
    </section>
  )
}
