import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";

const HeroSlider = ({ heroSlides, handleFeatureClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const timerRef = useRef(null);

  // Auto-slide if autoplay is enabled
  useEffect(() => {
    if (isAutoPlay) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 10000);
    }
    return () => clearInterval(timerRef.current);
  }, [heroSlides.length, isAutoPlay]);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
    setIsAutoPlay(false); // pause autoplay after interaction
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlay(false); // pause autoplay after interaction
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false); // pause autoplay after interaction
  };

  return (
    <section className="relative h-[400px] md:h-[590px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 flex items-center justify-center ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white space-y-6">
              {slide.dedication && (
                <motion.div
                  className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {slide.dedication}
                </motion.div>
              )}
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  onClick={() => handleFeatureClick(slide.cta)}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold text-base"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
