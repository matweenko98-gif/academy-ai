import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import AILabSection from "@/components/AILabSection";
import QuizSection from "@/components/QuizSection";
import StatsSection from "@/components/StatsSection";
import TeachersSection from "@/components/TeachersSection";
import ReviewsSection from "@/components/ReviewsSection";
import PaymentSection from "@/components/PaymentSection";
import CertificatesSection from "@/components/CertificatesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import DarkFooter from "@/components/DarkFooter";

const Index = () => {
  return (
    <>
      <AnimatedBackground />
      <div className="relative">
        <Header />
        <main className="flex w-full flex-col gap-14 pt-4 pb-10 lg:gap-20 lg:pt-5 lg:pb-14">
          <HeroSection />
          <CoursesSection />
          <StatsSection />
          <QuizSection />
          <AILabSection />
          <TeachersSection />
          <ReviewsSection />
          <PaymentSection />
          <CertificatesSection />
          <FAQSection />
          <ContactSection />
        </main>
        <DarkFooter />
      </div>
    </>
  );
};

export default Index;
