import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { TrustBar } from "@/components/TrustBar"
import { HowItWorks } from "@/components/HowItWorks"
import { Services } from "@/components/Services"
import { Audiences } from "@/components/Audiences"
import { UniversityPartnership } from "@/components/UniversityPartnership"
import { Regions } from "@/components/Regions"
import { Board } from "@/components/Board"
import { Testimonials } from "@/components/Testimonials"
import { FAQ } from "@/components/FAQ"
import { CTASection } from "@/components/CTASection"
import { LeadForm } from "@/components/LeadForm"
import { Footer } from "@/components/Footer"
import { StickyMobileActions } from "@/components/StickyMobileActions"
import Script from "next/script"

export default function Home() {
  // JSON-LD Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MedFors",
    "url": "https://medfors.com",
    "logo": "https://medfors.com/logo.png",
    "description": "Healthcare staffing solutions for India's rural and semi-urban healthcare facilities",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Maharashtra",
      "addressLocality": "Mumbai"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "email": "info@medfors.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/medfors",
      "https://twitter.com/medfors",
      "https://www.facebook.com/medfors"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MedFors",
    "url": "https://medfors.com",
    "description": "Healthcare staffing solutions for India's rural and semi-urban healthcare facilities",
    "publisher": {
      "@type": "Organization",
      "name": "MedFors"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://medfors.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can you deploy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typical shortlists within 72 hours; deployment depends on interviews & paperwork."
        }
      },
      {
        "@type": "Question",
        "name": "Do you cover credentialing/compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We assist with verification and onboarding as required by the employer."
        }
      },
      {
        "@type": "Question",
        "name": "What engagement models do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Direct hire, contract, and payrolling."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any fee for job seekers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No placement fees charged to candidates."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have roles in government hospitals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support opportunities across Government, Private, NGOs, and care homes."
        }
      },
      {
        "@type": "Question",
        "name": "How do I apply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Submit your resume and preferences; our team contacts you for next steps."
        }
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <main className="min-h-screen">
        <Header />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="trust">
        <TrustBar />
      </section>
      
      <section id="how-it-works">
        <HowItWorks />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="audiences">
        <Audiences />
      </section>
      
      <section id="universities">
        <UniversityPartnership />
      </section>
      
      <section id="regions">
        <Regions />
      </section>
      
      <section id="board">
        <Board />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="faq">
        <FAQ />
      </section>
      
      <section id="cta">
        <CTASection />
      </section>
      
      <section id="lead-form">
        <LeadForm />
      </section>
      
      <Footer />
      <StickyMobileActions />
      </main>
    </>
  )
}
