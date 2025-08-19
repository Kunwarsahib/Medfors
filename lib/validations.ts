import * as z from "zod"

export const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  organization: z.string().min(2, "Organization name must be at least 2 characters"),
  role: z.enum(["employer", "candidate"]),
  message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message must be less than 500 characters"),
  source: z.string().optional(),
  region: z.string().optional(),
  specialty: z.string().optional(),
  experience: z.string().optional(),
})

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
})

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  interests: z.array(z.string()).optional(),
})

export type LeadFormData = z.infer<typeof leadFormSchema>
export type ContactFormData = z.infer<typeof contactFormSchema>
export type NewsletterData = z.infer<typeof newsletterSchema>
