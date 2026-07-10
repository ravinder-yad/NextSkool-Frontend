import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const LivePlacementTicker = () => {
  const [placements, setPlacements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/placements/students');
        if (res.data && res.data.length > 0) {
          setPlacements(res.data);
        } else {
          // Fallback dummy data if DB is empty
          setPlacements([
            { name: "Ravi Kumar", company: "Infosys", packageOffered: "8.5 LPA" },
            { name: "Priya Sharma", company: "Microsoft", packageOffered: "18 LPA" },
            { name: "Aman Verma", company: "TCS", packageOffered: "7 LPA" },
            { name: "Sneha Patel", company: "Amazon", packageOffered: "22 LPA" }
          ]);
        }
      } catch (error) {
        console.error("Error fetching live placements:", error);
        // Fallback
        setPlacements([
          { name: "Ravi Kumar", company: "Infosys", packageOffered: "8.5 LPA" },
          { name: "Priya Sharma", company: "Microsoft", packageOffered: "18 LPA" },
          { name: "Aman Verma", company: "TCS", packageOffered: "7 LPA" }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlacements();
  }, []);

  useEffect(() => {
    if (placements.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % placements.length);
      }, 5000); // 5 seconds
      return () => clearInterval(interval);
    }
  }, [placements]);

  if (loading || placements.length === 0) return null;

  const current = placements[currentIndex];

  return (
    <div className="w-full bg-[#111827] text-white py-3 border-b border-[#1f2937] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="flex items-center gap-3 font-semibold text-sm md:text-base">
          <span className="flex h-2 w-2 relative mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="text-xl">🎉</span>
              <span>
                <span className="text-blue-400">{current.name}</span> placed at <span className="text-yellow-400">{current.company}</span> – <span className="text-green-400">₹{current.packageOffered}</span>
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LivePlacementTicker;
