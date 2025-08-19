"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { 
  Building2, 
  UserCheck, 
  Send,
  Loader2,
  CheckCircle
} from "lucide-react"

// Zod schemas for validation
const employerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  workEmail: z.string().email("Please enter a valid work email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  organization: z.string().min(2, "Organization name is required"),
  location: z.string().min(2, "City/State is required"),
  needType: z.enum(["direct", "contract", "payrolling"]),
  role: z.string().min(2, "Role/Specialty is required"),
  startDate: z.string().optional(),
  message: z.string().optional()
})

const candidateSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone/WhatsApp number"),
  locationPreference: z.string().optional(),
  role: z.enum(["doctor", "nurse", "paramedic", "other"]),
  experience: z.enum(["fresher", "1-3", "3+"]),
  resumeUrl: z.string().optional(),
  message: z.string().optional()
})

type EmployerFormData = z.infer<typeof employerSchema>
type CandidateFormData = z.infer<typeof candidateSchema>

// Employer Form Component
function EmployerForm({ onSubmit, isSubmitting }: { onSubmit: (data: EmployerFormData) => void, isSubmitting: boolean }) {
  const form = useForm<EmployerFormData>({
    resolver: zodResolver(employerSchema),
    defaultValues: {
      name: "",
      workEmail: "",
      phone: "",
      organization: "",
      location: "",
      needType: undefined,
      role: "",
      startDate: "",
      message: ""
    }
  })

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div className="sm:col-span-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Full Name *
          </Label>
          <Input
            id="name"
            {...form.register("name")}
            placeholder="Enter your full name"
            className="mt-1"
          />
          {form.formState.errors.name && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <Label htmlFor="workEmail" className="text-sm font-medium">
            Work Email *
          </Label>
          <Input
            id="workEmail"
            {...form.register("workEmail")}
            placeholder="work@company.com"
            className="mt-1"
          />
          {form.formState.errors.workEmail && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.workEmail.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone
          </Label>
          <Input
            id="phone"
            {...form.register("phone")}
            placeholder="+91 98765 43210"
            className="mt-1"
          />
          {form.formState.errors.phone && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.phone.message}
            </p>
          )}
        </div>

        {/* Organization */}
        <div>
          <Label htmlFor="organization" className="text-sm font-medium">
            Organization *
          </Label>
          <Input
            id="organization"
            {...form.register("organization")}
            placeholder="Hospital/Clinic Name"
            className="mt-1"
          />
          {form.formState.errors.organization && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.organization.message}
            </p>
          )}
        </div>

        {/* Location */}
        <div>
          <Label htmlFor="location" className="text-sm font-medium">
            Location (City/State) *
          </Label>
          <Input
            id="location"
            {...form.register("location")}
            placeholder="Mumbai, Maharashtra"
            className="mt-1"
          />
          {form.formState.errors.location && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.location.message}
            </p>
          )}
        </div>

        {/* Need Type */}
        <div>
          <Label htmlFor="needType" className="text-sm font-medium">
            Need Type *
          </Label>
          <Select onValueChange={(value) => form.setValue("needType", value as "direct" | "contract" | "payrolling")}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select need type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="direct">Direct Hire</SelectItem>
              <SelectItem value="contract">Contract Staffing</SelectItem>
              <SelectItem value="payrolling">Payrolling</SelectItem>
            </SelectContent>
          </Select>
          {form.formState.errors.needType && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.needType.message}
            </p>
          )}
        </div>

        {/* Role/Specialty */}
        <div>
          <Label htmlFor="role" className="text-sm font-medium">
            Role/Specialty *
          </Label>
          <Input
            id="role"
            {...form.register("role")}
            placeholder="e.g., Cardiologist, ICU Nurse"
            className="mt-1"
          />
          {form.formState.errors.role && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.role.message}
            </p>
          )}
        </div>

        {/* Start Date */}
        <div>
          <Label htmlFor="startDate" className="text-sm font-medium">
            Desired Start Date
          </Label>
          <Input
            id="startDate"
            type="date"
            {...form.register("startDate")}
            className="mt-1"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-sm font-medium">
          Additional Details
        </Label>
        <Textarea
          id="message"
          {...form.register("message")}
          placeholder="Tell us about your specific requirements, shift timings, or any other details..."
          rows={4}
          className="mt-1"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-8 py-3 text-lg font-semibold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Request Staff
            </>
          )}
        </Button>
      </div>
    </form>
  )
}

// Candidate Form Component
function CandidateForm({ onSubmit, isSubmitting }: { onSubmit: (data: CandidateFormData) => void, isSubmitting: boolean }) {
  const form = useForm<CandidateFormData>({
    resolver: zodResolver(candidateSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      locationPreference: "",
      role: undefined,
      experience: undefined,
      resumeUrl: "",
      message: ""
    }
  })

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div className="sm:col-span-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Full Name *
          </Label>
          <Input
            id="name"
            {...form.register("name")}
            placeholder="Enter your full name"
            className="mt-1"
          />
          {form.formState.errors.name && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-sm font-medium">
            Email *
          </Label>
          <Input
            id="email"
            {...form.register("email")}
            placeholder="your@email.com"
            className="mt-1"
          />
          {form.formState.errors.email && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone/WhatsApp
          </Label>
          <Input
            id="phone"
            {...form.register("phone")}
            placeholder="+91 98765 43210"
            className="mt-1"
          />
          {form.formState.errors.phone && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.phone.message}
            </p>
          )}
        </div>

        {/* Location Preference */}
        <div>
          <Label htmlFor="locationPreference" className="text-sm font-medium">
            Location Preference
          </Label>
          <Input
            id="locationPreference"
            {...form.register("locationPreference")}
            placeholder="Preferred cities/states"
            className="mt-1"
          />
        </div>

        {/* Role */}
        <div>
          <Label htmlFor="role" className="text-sm font-medium">
            Role *
          </Label>
          <Select onValueChange={(value) => form.setValue("role", value as "doctor" | "nurse" | "paramedic" | "other")}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="nurse">Nurse</SelectItem>
              <SelectItem value="paramedic">Paramedic</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {form.formState.errors.role && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.role.message}
            </p>
          )}
        </div>

        {/* Experience */}
        <div>
          <Label htmlFor="experience" className="text-sm font-medium">
            Experience *
          </Label>
          <Select onValueChange={(value) => form.setValue("experience", value as "fresher" | "1-3" | "3+")}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fresher">Fresher</SelectItem>
              <SelectItem value="1-3">1-3 years</SelectItem>
              <SelectItem value="3+">3+ years</SelectItem>
            </SelectContent>
          </Select>
          {form.formState.errors.experience && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.experience.message}
            </p>
          )}
        </div>

        {/* Resume URL */}
        <div>
          <Label htmlFor="resumeUrl" className="text-sm font-medium">
            Resume URL (Optional)
          </Label>
          <Input
            id="resumeUrl"
            {...form.register("resumeUrl")}
            placeholder="https://drive.google.com/..."
            className="mt-1"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-sm font-medium">
          Additional Details
        </Label>
        <Textarea
          id="message"
          {...form.register("message")}
          placeholder="Tell us about your career goals, preferred work environment, or any other details..."
          rows={4}
          className="mt-1"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-8 py-3 text-lg font-semibold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Submit Resume
            </>
          )}
        </Button>
      </div>
    </form>
  )
}

export function LeadForm() {
  const searchParams = useSearchParams()
  const [type, setType] = useState("employer")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const isEmployer = type === "employer"

  // Handle URL parameters and hash navigation
  useEffect(() => {
    console.log("LeadForm: Checking URL parameters...")
    
    // Check for query parameters first
    const urlType = searchParams.get("type")
    console.log("LeadForm: URL type from searchParams:", urlType)
    
    if (urlType && (urlType === "employer" || urlType === "candidate")) {
      console.log("LeadForm: Setting type from URL params:", urlType)
      setType(urlType)
    }

    // Check for hash parameters (for anchor links)
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      console.log("LeadForm: Current hash:", hash)
      
      if (hash.includes('lead-form')) {
        // Extract type from hash if present
        const hashParams = new URLSearchParams(hash.split('?')[1] || '')
        const hashType = hashParams.get('type')
        console.log("LeadForm: Hash type:", hashType)
        
        if (hashType && (hashType === "employer" || hashType === "candidate")) {
          console.log("LeadForm: Setting type from hash:", hashType)
          setType(hashType)
        }

        // Scroll to the form
        const element = document.getElementById('lead-form')
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 100)
        }
      }
    }
  }, [searchParams])

  // Handle form type toggle
  const handleTypeToggle = (newType: 'employer' | 'candidate') => {
    console.log("LeadForm: Toggling to:", newType)
    setType(newType)
    
    // Update URL hash
    if (typeof window !== 'undefined') {
      window.location.hash = `lead-form?type=${newType}`
    }
  }

  const onSubmit = async (data: EmployerFormData | CandidateFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type,
          ...data
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        
        // Show success toast
        if (isEmployer) {
          toast.success("Thanks! We'll reach out within 1 business day to confirm requirements.")
        } else {
          toast.success("Thanks! We'll contact you to verify details and schedule opportunities.")
        }
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Reset success state when type changes
  useEffect(() => {
    setIsSuccess(false)
  }, [type])

  if (isSuccess) {
    return (
      <section id="lead-form" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Form Submitted Successfully!
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {isEmployer 
                  ? "We'll reach out within 1 business day to confirm your requirements."
                  : "We'll contact you to verify details and schedule opportunities."
                }
              </p>
              <Button 
                onClick={() => setIsSuccess(false)}
                className="inline-flex items-center"
              >
                Submit Another Request
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-form" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">
              {isEmployer ? <Building2 className="mr-2 h-3 w-3" /> : <UserCheck className="mr-2 h-3 w-3" />}
              {isEmployer ? "For Employers" : "For Candidates"}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {isEmployer ? "Request Healthcare Staff" : "Submit Your Resume"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isEmployer 
                ? "Tell us about your staffing needs and we'll connect you with qualified healthcare professionals."
                : "Share your details and we'll match you with the right healthcare opportunities."
              }
            </p>
          </motion.div>

          {/* Form Type Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
              <Button
                variant={isEmployer ? "default" : "ghost"}
                size="sm"
                onClick={() => handleTypeToggle('employer')}
                className="rounded-md"
              >
                <Building2 className="mr-2 h-4 w-4" />
                For Employers
              </Button>
              <Button
                variant={!isEmployer ? "default" : "ghost"}
                size="sm"
                onClick={() => handleTypeToggle('candidate')}
                className="rounded-md"
              >
                <UserCheck className="mr-2 h-4 w-4" />
                For Candidates
              </Button>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/5 shadow-lg">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">
                  {isEmployer ? "Staffing Request Form" : "Candidate Application Form"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {isEmployer ? (
                  <EmployerForm onSubmit={onSubmit as (data: EmployerFormData) => void} isSubmitting={isSubmitting} />
                ) : (
                  <CandidateForm onSubmit={onSubmit as (data: CandidateFormData) => void} isSubmitting={isSubmitting} />
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                Secure & Confidential
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                No Spam
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                Quick Response
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
