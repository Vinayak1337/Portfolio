'use client';

import { useEffect } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroSection from '@/components/story/HeroSection';
import ChapterOne from '@/components/story/ChapterOne';
import ChapterTwo from '@/components/story/ChapterTwo';
import ChapterThree from '@/components/story/ChapterThree';
import ChapterFour from '@/components/story/ChapterFour';
import ChapterFive from '@/components/story/ChapterFive';
import ChapterSix from '@/components/story/ChapterSix';
import ComputerView from '@/components/story/ComputerView';
import SkillsMarquee from '@/components/story/SkillsMarquee';
import ProjectVault from '@/components/story/ProjectVault';

export default function PortfolioStory() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Quick overall setup for smooth scrolling
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-black w-full min-h-screen">
      {/* 3D Background Canvas */}
      <ComputerView />

      {/* Cinematic Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <div
          className="h-full bg-white origin-left"
          style={{ transform: `scaleX(${scaleX.get()})` }}
        />
      </div>

      <div className="flex flex-col w-full">
        <HeroSection />
        <ChapterOne />
        <ChapterTwo />
        <ChapterThree />
        <ChapterFour />
        <ChapterFive />
        <ChapterSix />

        <div className="relative z-10 bg-[#020617] mt-32">
          <SkillsMarquee />
          <ProjectVault />
        </div>
      </div>
    </main>
  );
}
