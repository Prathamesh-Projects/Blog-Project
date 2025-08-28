import React from 'react';
import { Helmet } from 'react-helmet';
// import BlogList from "../components/home/BlogList";


// import WordPressPosts from "../components/home/WordPressPosts";





import { useToast } from '@/components/ui/use-toast';
import { BookOpen, FileText, Users, Award } from 'lucide-react';

import HeroSlider from '@/components/home/HeroSlider';
import Stats from '@/components/home/Stats';
import Categories from '@/components/home/Categories';

import FeaturedPosts from '@/components/home/FeaturedPosts';
import RecentPosts from '@/components/home/RecentPosts';
import RecentPostsWP from "@/components/home/RecentPostsWP";
import FeaturedPostsWP from '@/components/home/FeaturedPostsWP';





import Cta from '@/components/home/Cta';

const HomePage = () => {
  const { toast } = useToast();

  const heroSlides = [
    {
    title: "Read the Latest Marathi News",
    subtitle: "Get daily updates on politics, current affairs, and important events in simple Marathi.",
    dedication: "Stay Informed, Stay Ahead",
    image: "Hero banner showing Marathi newspaper and breaking news highlights",
    cta: "Explore News"
  },
  {
    title: "Marathi Poems & Stories",
    subtitle: "Beautifully written poems, inspiring stories, and cultural writings in your own language.",
    dedication: "For Literature Lovers",
    image: "Open book with Marathi handwriting and storytelling theme",
    cta: "Read Now"
  }
  ];

  const categoriesData = [
    {
       id: 6,
       wpId: 6,
       title: "Marathi News",
       description: "Politics, governance, and important state & national updates",
       icon: "📰",
       posts: 245,
      color: "from-blue-500 to-blue-500"
    },

    {
      id: 2,
      wpId: 2,
      title: "Finance & Economy",
      description: "Economic Survey, Budget, Financial Markets",
      icon: "📈",
      posts: 189,
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      wpId: 3,
      title: "Education",
      description: "Exam tips, study resources, career guidance, and student updates",
      icon: "📚",
      posts: 156,
      color: "from-emerald-500 to-emerald-600"
    },

    {
      id: 5,
      wpId: 5,
      title: "AI & Technology",
      description: "Latest Developments, Space, IT",
      icon: "🔬",
      posts: 134,
      color: "from-purple-500 to-purple-600"
    },
    { 
      id: 4,
      wpId: 4,
      title: "Poems & Stories",
      description: "Marathi poems, short stories, inspirational tales, and literature",
      icon: "📖",
      posts: 167,
      color: "from-orange-500 to-orange-600"
    },

    {
      id: 8,
      wpId: 8,
      title: "History & Culture",
      description: "Ancient, Medieval, Modern History",
      icon: "🏺",
      posts: 198,
      color: "from-red-500 to-red-600"
    },
    {
      id: 7,
      wpId: 7,
      title: "Current Affairs",
      description: "Foreign Policy, Global Issues",
      icon: "🌍",
      posts: 123,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 9,
      wpId: 9,
      title: "Ethics & Integrity",
      description: "Case Studies, Moral Philosophy",
      icon: "⚖️",
      posts: 89,
      color: "from-pink-500 to-pink-600"
    }
  ];

  const featuredPostsData = [
    {
      id: 1,
      title: "Prathamesh Patil: Key Highlights for UPSC Aspirants",
      excerpt: "Comprehensive analysis of Budget 2024 with focus on schemes, allocations, and policy changes relevant for Civil Services examination.",
      category: "Economy",
      author: "Dr. Rajesh Kumar",
      date: "2024-02-15",
      readTime: "8 min read",
      views: "12.5k",
      image: "Union Budget 2024 analysis with charts and key highlights",
      featured: true
    },
    {
      id: 2,
      title: "India's G20 Presidency: Achievements and Global Impact",
      excerpt: "Detailed coverage of India's G20 presidency outcomes, key initiatives, and their significance for international relations paper.",
      category: "International Relations",
      author: "Prof. Meera Sharma",
      date: "2024-02-12",
      readTime: "10 min read",
      views: "8.7k",
      image: "G20 summit meeting with world leaders and India's presidency highlights",
      featured: true
    },
    {
      id: 3,
      title: "Climate Change and India's Net Zero Commitment",
      excerpt: "Analysis of India's climate policies, renewable energy targets, and environmental challenges for Geography and GS3 papers.",
      category: "Environment",
      author: "Dr. Anita Verma",
      date: "2024-02-10",
      readTime: "12 min read",
      views: "9.2k",
      image: "Climate change infographics showing India's renewable energy progress",
      featured: true
    }
  ];

  const recentPostsData = [
    {
      id: 4,
      title: "Digital India Initiative: Progress and Challenges",
      excerpt: "Comprehensive review of Digital India's achievements in governance, education, and digital infrastructure development.",
      category: "Governance",
      date: "2024-02-14",
      readTime: "6 min read",
      views: "5.3k",
      image: "Digital India initiative showing technology adoption across rural and urban areas"
    },
    {
      id: 5,
      title: "India-Middle East-Europe Economic Corridor (IMEC)",
      excerpt: "Strategic importance of IMEC for India's trade relations and geopolitical positioning in the region.",
      category: "International Relations",
      date: "2024-02-13",
      readTime: "7 min read",
      views: "4.8k",
      image: "IMEC corridor map showing trade routes connecting India, Middle East and Europe"
    },
    {
      id: 6,
      title: "Ayushman Bharat: Healthcare Revolution in India",
      excerpt: "Impact assessment of Ayushman Bharat scheme on healthcare accessibility and quality in rural India.",
      category: "Social Issues",
      date: "2024-02-11",
      readTime: "9 min read",
      views: "6.1k",
      image: "Ayushman Bharat healthcare scheme beneficiaries receiving treatment"
    },
    {
      id: 7,
      title: "Space Technology and India's Lunar Mission Success",
      excerpt: "Chandrayaan-3's success and its implications for India's space program and technological advancement.",
      category: "Science & Technology",
      date: "2024-02-09",
      readTime: "8 min read",
      views: "7.4k",
      image: "Chandrayaan-3 lunar mission spacecraft and moon landing celebration"
    },
    {
      id: 8,
      title: "Women Reservation Bill: Constitutional Amendment Analysis",
      excerpt: "Detailed analysis of the Women's Reservation Act and its impact on political representation in India.",
      category: "Polity",
      date: "2024-02-08",
      readTime: "11 min read",
      views: "8.9k",
      image: "Women's political participation and reservation bill signing ceremony"
    },
    {
      id: 9,
      title: "Sustainable Development Goals: India's Progress Report",
      excerpt: "Assessment of India's performance on SDGs with focus on poverty, education, and environmental sustainability.",
      category: "Development",
      date: "2024-02-07",
      readTime: "10 min read",
      views: "5.7k",
      image: "SDG progress indicators and India's development achievements dashboard"
    }
  ];

  // const statsData = [
  //   { icon: BookOpen, label: "Study Materials", value: "2,500+" },
  //   { icon: FileText, label: "Practice Tests", value: "500+" },
  //   { icon: Users, label: "Success Stories", value: "1,200+" },
  //   { icon: Award, label: "Expert Faculty", value: "50+" }
  // ];

  const handleFeatureClick = (feature) => {
    toast({
      title: `📚 ${feature}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <div className="pt-16">
      <Helmet>
        <title>UPSC Civil Services Preparation - Complete Study Material & Current Affairs</title>
        <meta name="description" content="Best UPSC Civil Services preparation platform with comprehensive study materials, daily current affairs, expert guidance for Prelims, Mains and Interview. Join thousands of successful candidates." />
      </Helmet>

      <HeroSlider heroSlides={heroSlides} handleFeatureClick={handleFeatureClick} />
      {/* <Stats stats={statsData} /> */}
      <Categories categories={categoriesData} />
      <FeaturedPostsWP />

      <RecentPostsWP limit={6} />

      
      {/* <BlogList />   */}
      {/* <WordPressPosts />   */}
      <Cta handleFeatureClick={handleFeatureClick} />
    </div>
  );
};

export default HomePage;