import React from 'react';
import PlacementHero from './components/PlacementHero';
import TopHiringPartners from './components/TopHiringPartners';
import PlacedStudentsGrid from './components/PlacedStudentsGrid';
import UpcomingDrives from './components/UpcomingDrives';
import SuccessStoriesSlider from './components/SuccessStoriesSlider';
import JobOpportunitiesList from './components/JobOpportunitiesList';
import InternshipsList from './components/InternshipsList';

const Placements = () => {
  return (
    <div className="bg-white min-h-screen">
      <PlacementHero />
      <TopHiringPartners />
      <UpcomingDrives />
      <PlacedStudentsGrid />
      <SuccessStoriesSlider />
      <JobOpportunitiesList />
      <InternshipsList />
    </div>
  );
};

export default Placements;
