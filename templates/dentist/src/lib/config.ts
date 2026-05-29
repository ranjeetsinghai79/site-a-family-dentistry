import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "A+ Family Dentistry",
    tagline: "Smile Brighter, Live Healthier",
    phone: "(619) 739-4869",
    phoneHref: "tel:+16197394869",
    email: "info@aplusfamilydentistry.com",
    address: "3780 El Cajon Blvd #1, San Diego, CA 92105",
    city: "San Diego",
    serviceAreas: ["San Diego", "Poway", "Sorrento Valley"],
    license: "CA Dental License #123456",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "ocean",
    niche: "dentist",
  },

  services: [
    { icon: "star", title: "Cosmetic Dentistry", desc: "Enhance your smile with veneers, whitening, and bonding.", urgent: false },
    { icon: "shield-check", title: "Dental Implants", desc: "Restore missing teeth with durable, natural-looking implants.", urgent: false },
    { icon: "wrench", title: "Emergency Dentistry", desc: "Immediate care for toothaches, broken teeth, and dental injuries.", urgent: true },
    { icon: "home", title: "General Dentistry", desc: "Routine check-ups, cleanings, and preventative care for all ages.", urgent: false },
    { icon: "sparkles", title: "Invisalign", desc: "Straighten your teeth discreetly with clear, removable aligners.", urgent: false },
    { icon: "scissors", title: "Oral Surgery", desc: "Expert care for extractions, wisdom teeth, and other surgical needs.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah M.", location: "San Diego, CA", stars: 5, text: "I had a dental emergency on a Saturday morning, and A+ Family Dentistry got me in right away. Dr. Lee was incredibly kind and fixed my chipped tooth perfectly. The staff was so understanding and made a stressful situation much easier. Highly recommend their prompt and professional service!" },
    { name: "David R.", location: "Poway, CA", stars: 5, text: "Getting my Invisalign here has been a fantastic experience. The team explained everything clearly, and my teeth are looking amazing. They always make sure I'm comfortable during my appointments, and the results are exactly what I hoped for. Best dental office in the area!" },
    { name: "Jessica L.", location: "San Diego, CA", stars: 5, text: "My entire family comes here for general dentistry. The hygienists are gentle, and Dr. Chen is wonderful with my kids. They make going to the dentist a positive experience, which is huge for us. We've been patients for years and always receive top-notch care." }
  ],

  trustBadges: [
    "ADA Member", "GAF Master Elite", "NATE Certified", "24/7 Emergency Care", "Modern Technology", "Family-Friendly"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Happy Smiles", suffix: "+", decimals: 0 },
    { value: 10, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize urgent dental needs with quick appointment scheduling." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Clear, upfront cost estimates before any treatment begins." },
    { icon: "award", title: "Certified Pros", desc: "Our dentists are highly trained and continuously educated in the latest techniques." },
    { icon: "thumbs-up", title: "Patient Comfort", desc: "We ensure a comfortable and anxiety-free experience for every visit." },
    { icon: "phone", title: "Emergency Hotline", desc: "Dedicated line for immediate assistance with dental emergencies." },
    { icon: "truck", title: "Multiple Locations", desc: "Conveniently located offices across San Diego and surrounding areas." }
  ],

  formServiceOptions: ["Cosmetic Dentistry", "Dental Implants", "Dentures", "Emergency Dentistry", "General Dentistry", "Invisalign", "Oral Surgery", "Orthodontics"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!