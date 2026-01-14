import { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote, Heart, Sparkles, TrendingUp, Users, Award, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../assets/testimonialdata';
import PropTypes from 'prop-types';

// Enhanced Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const floatingAnimation = {
  y: [-5, 5, -5],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const sparkleAnimation = {
  scale: [1, 1.3, 1],
  rotate: [0, 180, 360],
  opacity: [0.7, 1, 0.7],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: { 
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const TestimonialCard = ({ testimonial, index, direction }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={testimonial.id}
      initial={{ opacity: 0, x: direction === 'right' ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction === 'right' ? -50 : 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm border border-white/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
      style={{
        boxShadow: isHovered 
          ? "0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)"
          : "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating Sparkles */}
      <motion.div 
        animate={sparkleAnimation}
        className="absolute top-6 right-6 text-blue-400 opacity-30 group-hover:opacity-60 transition-opacity duration-300"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>

      {/* Quote Icon with Enhanced Design */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Quote className="w-16 h-16 text-blue-500 transform group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Premium Badge */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg"
      >
        <Star className="w-3 h-3 fill-current" />
        <span>Verified</span>
      </motion.div>

      {/* Testimonial Content */}
      <div className="relative z-10 mt-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-lg leading-relaxed mb-8 font-medium relative"
        >
          <span className="text-4xl text-blue-400 font-serif absolute -top-2 -left-2 opacity-50">&ldquo;</span>
          <span className="ml-4">{testimonial.text}</span>
          <span className="text-4xl text-blue-400 font-serif absolute -bottom-6 right-0 opacity-50">&rdquo;</span>
        </motion.p>
      </div>

      {/* Client Information Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-between mt-8"
      >
        <div className="flex items-center space-x-4">
          {/* Enhanced Profile Image */}
          <div className="relative group/avatar">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg group-hover/avatar:shadow-xl transition-shadow duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300" />
            </motion.div>
            
            {/* Status Indicator */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white rounded-full w-5 h-5 flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-white rounded-full" />
            </motion.div>
          </div>

          {/* Client Details */}
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-600 flex items-center mb-2">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2 animate-pulse" />
              {testimonial.location}
            </p>
            
            {/* Enhanced Star Rating */}
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Star
                    className={`w-4 h-4 transition-all duration-200 ${
                      i < testimonial.rating 
                        ? 'text-yellow-400 fill-current drop-shadow-sm' 
                        : 'text-gray-300'
                    }`}
                  />
                </motion.div>
              ))}
              <span className="ml-2 text-xs text-gray-500 font-medium">
                {testimonial.rating}.0
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Position Indicators for Mobile */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:hidden">
        {testimonials.map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.05 }}
            className={`rounded-full transition-all duration-300 ${
              i === index 
                ? 'w-6 h-2 bg-blue-600 shadow-md' 
                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl pointer-events-none"
      />
    </motion.div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [autoplay, setAutoplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Statistics for enhanced visual appeal
  const stats = [
    { icon: Users, value: "10K+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
    { icon: Star, value: "4.9", label: "Average Rating", color: "from-yellow-500 to-orange-500" },
    { icon: Award, value: "50+", label: "Awards Won", color: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, value: "98%", label: "Success Rate", color: "from-green-500 to-emerald-500" }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoplay || isHovered) return;
    
    const interval = setInterval(() => {
      setDirection('right');
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, isHovered]);

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handleDotClick = (index) => {
    setDirection(index > activeIndex ? 'right' : 'left');
    setActiveIndex(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  return (
    <section className="relative py-1 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 overflow-hidden">
      {/* Enhanced Background Elements */}
      
    </section>
  );
};

// PropTypes
TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Testimonials;