"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroBillboardScroll from "@/components/sections/hero/HeroBillboardScroll";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Phone, AlertCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="mediumLargeSizeMediumTitles"
      background="circleGradient"
      cardStyle="gradient-mesh"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Experiences", id: "features" },
            { name: "Contact", id: "contact" },
            { name: "Book a Table", id: "cta" },
          ]}
          brandName="YC CLUB"
          bottomLeftText="Kimberley, Northern Cape"
          bottomRightText="074 717 0462"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          tag="Limited Availability This Weekend"
          tagIcon={AlertCircle}
          tagAnimation="slide-up"
          title="Kimberley's Premier Wine Lounge"
          description="Unwind. Connect. Celebrate. Experience exceptional wines in an elegantly curated space where every moment feels premium."
          background={{ variant: "plain" }}
          imageSrc="http://img.b2bpic.net/free-photo/black-wooden-table_417767-153.jpg"
          imageAlt="YC CLUB wine lounge interior with ambient lighting"
          buttons={[
            { text: "📅 Book a Table", href: "#contact" },
            { text: "📞 Call Now", href: "tel:+27747170462" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="About YC CLUB"
          title="Locally Loved. Locally Thriving."
          description="Since opening, YC CLUB has become Kimberley's premier destination for wine enthusiasts, professionals, and friends seeking an escape into sophistication. We curate exceptional wines, craft unforgettable moments, and build lasting connections in an atmosphere of warmth and elegance."
          metrics={[
            { value: "5.0", title: "Google Rating" },
            { value: "100%", title: "Customer Satisfaction" },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/bottles-tasty-wine-posh-reastoraunt-are-stored-shelf_613910-17445.jpg"
          imageAlt="Curated wine collection at YC CLUB"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyThree
          title="Why Choose YC CLUB"
          description="Discover what sets Kimberley's favourite wine bar apart"
          features={[
            {id: "1", title: "Curated Wine Selection", tags: ["Premium Selection", "Expert Curation"], imageSrc: "http://img.b2bpic.net/free-photo/business-people-together-communication-concept_53876-138106.jpg", imageAlt: "Fine wine tasting experience"},
            {id: "2", title: "Private Event Spaces", tags: ["Birthdays", "Celebrations"], imageSrc: "http://img.b2bpic.net/free-photo/knocking-glasses-with-wine-group-friends-elegant-wear-have-luxury-dinner_146671-14449.jpg", imageAlt: "Private gathering space"},
            {id: "3", title: "Relaxed Lounge Atmosphere", tags: ["Comfort", "Ambiance"], imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-african-american-woman-long-dress-boots-sunglasses-indoor_627829-5495.jpg", imageAlt: "Comfortable lounge seating"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Loved by Locals"
          description="Hear from our happy customers who've made YC CLUB their favourite spot"
          testimonials={[
            {id: "1", name: "Sarah Johnson", role: "Professional", company: "Kimberley Local", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-african-american-man-posing-library_74855-1619.jpg", imageAlt: "Sarah Johnson"},
            {id: "2", name: "Emma Chen", role: "Event Planner", company: "Celebrate Events", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-business-woman-white-shirt_23-2148095748.jpg", imageAlt: "Emma Chen"},
            {id: "3", name: "Michael Peters", role: "Restaurant Owner", company: "Local Business", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg", imageAlt: "Michael Peters"},
            {id: "4", name: "David & Lisa Brown", role: "Couple", company: "Regular Guests", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-posing_23-2147644354.jpg", imageAlt: "David and Lisa Brown"},
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Community Partners"
          description="Recognized and endorsed by local and regional hospitality leaders"
          names={[
            "Wine Lovers Club", "Local Hospitality Association", "Kimberley Tourism Board", "Event Professionals Network", "Regional Sommelier Guild", "Vintners Collective", "Local Business Council"]}
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Experience YC CLUB?"
          ctaDescription="Get in touch to book your table, plan an event, or simply learn more about our premium wine selection and atmosphere."
          ctaButton={{ text: "Call 074 717 0462", href: "tel:+27747170462" }}
          ctaIcon={Phone}
          faqs={[
            {id: "1", title: "What are your opening hours?", content: "We're open Tuesday through Sunday, from 5 PM to late evening. Closed Mondays. Special events and private bookings available by appointment."},
            {id: "2", title: "Do you host private events?", content: "Yes! We offer intimate private spaces perfect for birthdays, corporate gatherings, and special celebrations. Contact us to discuss your event requirements and secure your preferred date."},
            {id: "3", title: "Can I book a table in advance?", content: "Absolutely. We recommend booking ahead, especially for weekends and larger groups. Call us at 074 717 0462 or fill out our booking form to reserve your spot."},
            {id: "4", title: "What makes your wine selection special?", content: "Our curated collection features premium local and international wines, carefully selected by our expert team. We focus on quality, uniqueness, and taste profiles that appeal to both enthusiasts and newcomers."},
            {id: "5", title: "Are you suitable for business meetings?", content: "Definitely! Our relaxed yet professional atmosphere makes us ideal for business discussions, client entertaining, and professional networking in a sophisticated setting."},
            {id: "6", title: "What's your location exactly?", content: "We're located in central Kimberley, Northern Cape (8301). Check our Google Maps location for directions or call us for detailed travel instructions."},
          ]}
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="YC CLUB"
          copyrightText="© 2025 YC CLUB Wine Lounge. All rights reserved."
          columns={[
            {
              title: "Navigate", items: [
                { label: "Home", href: "hero" },
                { label: "About", href: "about" },
                { label: "Experiences", href: "features" },
                { label: "Contact", href: "contact" },
              ],
            },
            {
              title: "Connect", items: [
                { label: "Call Us", href: "tel:+27747170462" },
                { label: "Book a Table", href: "#contact" },
                { label: "Private Events", href: "#contact" },
                { label: "Inquiries", href: "#contact" },
              ],
            },
            {
              title: "Location", items: [
                { label: "Kimberley, Northern Cape", href: "#" },
                { label: "South Africa 8301", href: "#" },
                { label: "Google Maps", href: "https://maps.google.com" },
                { label: "Get Directions", href: "#" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
