import { logos } from '../assets/logo';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Star, Users, Award } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6
    }
  }
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 25
    }
  }
};

const floatingAnimation = {
  y: [-2, 2, -2],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const Companies = () => {
  const stats = [
    { icon: Users, value: "200+", label: "Trusted Partners" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Award, value: "50M+", label: "Properties Listed" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" }
  ];

  const companyLogos = [
    { src: logos.Googlelogo, alt: "Google", name: "Google" },
    { src: logos.Bookinglogo, alt: "Booking.com", name: "Booking.com" },
    { src: logos.Airbnblogo, alt: "Airbnb", name: "Airbnb" },
    { src: logos.Microsoftlogo, alt: "Microsoft", name: "Microsoft" },
    { src: logos.Amazonlogo, alt: "Amazon", name: "Amazon" }
  ];

  return (
    <section className=" hello">
    </section>
  );
};

export default Companies;
