import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MedFors - Healthcare Staffing Solutions for India",
    template: "%s | MedFors"
  },
  description: "Staffing India's Rural & Semi-Urban Healthcare — Fast and Credible. We connect graduating doctors, nurses, and paramedics with hospitals, NGOs, and care homes via direct hire, contract, or payrolling.",
  keywords: [
    "healthcare staffing",
    "medical recruitment", 
    "hospital staffing",
    "healthcare jobs",
    "medical professionals",
    "India healthcare",
    "rural healthcare",
    "semi-urban healthcare",
    "doctor recruitment",
    "nurse recruitment",
    "paramedic recruitment",
    "healthcare placement",
    "medical staffing agency",
    "healthcare talent",
    "hospital recruitment"
  ],
  authors: [{ name: "MedFors" }],
  creator: "MedFors",
  publisher: "MedFors",
  category: "Healthcare",
  classification: "Healthcare Staffing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://medfors.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medfors.com",
    title: "MedFors - Healthcare Staffing Solutions for India",
    description: "Staffing India's Rural & Semi-Urban Healthcare — Fast and Credible. We connect graduating doctors, nurses, and paramedics with hospitals, NGOs, and care homes.",
    siteName: "MedFors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MedFors - Healthcare Staffing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedFors - Healthcare Staffing Solutions for India",
    description: "Staffing India's Rural & Semi-Urban Healthcare — Fast and Credible. We connect graduating doctors, nurses, and paramedics with hospitals, NGOs, and care homes.",
    images: ["/og-image.jpg"],
    creator: "@medfors",
    site: "@medfors",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
