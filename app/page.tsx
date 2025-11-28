'use client';

import { useState } from 'react';
import Navigation from './components/Navigation';
import TrendIdentification from './components/TrendIdentification';
import ContentCreation from './components/ContentCreation';
import VideoClipping from './components/VideoClipping';
import Scheduling from './components/Scheduling';
import ViralOptimization from './components/ViralOptimization';

export default function Home() {
  const [activeSection, setActiveSection] = useState('trends');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-1 ml-64 p-8" role="main" aria-label="Main content">
        <div className="max-w-7xl mx-auto">
          {activeSection === 'trends' && <TrendIdentification />}
          {activeSection === 'content' && <ContentCreation />}
          {activeSection === 'clipping' && <VideoClipping />}
          {activeSection === 'scheduling' && <Scheduling />}
          {activeSection === 'optimization' && <ViralOptimization />}
        </div>
      </main>
    </div>
  );
}
