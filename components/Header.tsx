"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Building2, Menu, X, UserCheck } from "lucide-react"

const navigation = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Services", href: "#services" },
  { name: "Universities", href: "#universities" },
  { name: "Regions", href: "#regions" },
  { name: "Board", href: "#board" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
]

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

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold text-foreground">
                MedFors
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Button size="sm" onClick={() => navigateToLeadForm('employer')}>
              <Building2 className="mr-2 h-4 w-4" />
              Request Staff
            </Button>
            <Button variant="outline" size="sm" onClick={() => navigateToLeadForm('candidate')}>
              <UserCheck className="mr-2 h-4 w-4" />
              Submit Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                        <Building2 className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <span className="font-heading text-xl font-bold">
                        MedFors
                      </span>
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  
                  <div className="flex flex-col space-y-3">
                    <Button onClick={() => {
                      navigateToLeadForm('employer')
                      setMobileMenuOpen(false)
                    }}>
                      <Building2 className="mr-2 h-4 w-4" />
                      Request Staff
                    </Button>
                    <Button variant="outline" onClick={() => {
                      navigateToLeadForm('candidate')
                      setMobileMenuOpen(false)
                    }}>
                      <UserCheck className="mr-2 h-4 w-4" />
                      Submit Resume
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
