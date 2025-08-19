"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Users, 
  Building2, 
  Award,
  Shield,
  Quote,
  ArrowRight,
  Mail,
  Linkedin
} from "lucide-react"
import { motion } from "framer-motion"

const boardMembers = [
  {
    name: "Mr. S. N. Sathu",
    role: "Ex-CEO, HLL Infra Tech Services (2014–2018)",
    experience: "36+ years in Central Public Sector, 31 years in healthcare",
    avatar: "",
    badges: ["Governance", "Healthcare", "Public Sector"],
    bio: "Distinguished leader with extensive experience in healthcare infrastructure and public sector management. Led HLL Infra Tech Services during critical growth phase and brings deep understanding of healthcare systems and governance.",
    achievements: [
      "Led HLL Infra Tech Services as CEO for 4 years",
      "36+ years experience in Central Public Sector",
      "31 years dedicated to healthcare sector",
      "Expertise in healthcare infrastructure development"
    ]
  },
  {
    name: "Dr. R. K. Srivastava",
    role: "Former Chairman, Medical Council of India",
    experience: "Ex-Director General of Health Services (GoI)",
    avatar: "",
    badges: ["Policy", "Regulation", "Leadership"],
    bio: "Renowned healthcare leader who served as Chairman of Medical Council of India and Director General of Health Services. Brings unparalleled expertise in medical education, healthcare policy, and regulatory frameworks.",
    achievements: [
      "Former Chairman, Medical Council of India",
      "Ex-Director General of Health Services (GoI)",
      "Expert in medical education and regulation",
      "Healthcare policy and governance specialist"
    ]
  }
]

const governanceQuote = {
  quote: "Our mission is to bridge the healthcare talent gap in India&apos;s underserved regions through ethical, transparent, and efficient staffing solutions. We are committed to maintaining the highest standards of governance and ensuring quality healthcare delivery across the nation.",
  author: "Board of Directors",
  role: "MedFors"
}

export function Board() {
  return (
    <section id="board" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Shield className="mr-2 h-3 w-3" />
              Leadership
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Board of Directors
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experienced healthcare leaders and policy experts guiding our mission to transform 
              healthcare staffing in India&apos;s underserved regions.
            </p>
          </motion.div>
        </div>

        {/* Mission & Governance Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/5 shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed max-w-4xl mx-auto">
                  &ldquo;{governanceQuote.quote}&rdquo;
                </blockquote>
                <div className="space-y-2">
                  <div className="font-semibold text-foreground">
                    {governanceQuote.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {governanceQuote.role}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Board Members Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full border-0 bg-background shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {member.experience}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.badges.map((badge) => (
                          <Badge key={badge} variant="secondary" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm">
                      Key Achievements:
                    </h4>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Award className="h-3 w-3 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Links */}
                  <div className="flex items-center space-x-3 mt-6 pt-4 border-t">
                    <a
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@medfors.com`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="h-3 w-3" />
                    </a>
                    <a
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Space for More Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Card className="border-0 bg-background/50 shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <Users className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Expanding Our Leadership
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We&apos;re actively seeking additional board members with expertise in healthcare policy, 
                rural development, and healthcare technology to strengthen our governance and expand our impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="outline" className="text-sm">
                  <Building2 className="mr-1 h-3 w-3" />
                  Healthcare Policy
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Shield className="mr-1 h-3 w-3" />
                  Rural Development
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Award className="mr-1 h-3 w-3" />
                  Technology
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-lg border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Trusted Leadership for Healthcare Transformation
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our board brings decades of combined experience in healthcare, policy, and governance 
              to ensure we deliver on our mission with integrity and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Board
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#about">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
