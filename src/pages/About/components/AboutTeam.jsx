import React from 'react';
import { HiOutlineBriefcase } from 'react-icons/hi2';

const AboutTeam = ({ team, isMentor }) => {
  if (!team || team.length === 0) return null;

  return (
    <section className="py-20 bg-white dark:bg-[#0F172A]">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 xl:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {isMentor ? 'Meet Our Expert Mentors' : 'The Team Behind NextSkool'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {isMentor ? 'Learn from industry veterans from top tech companies.' : 'Dedicated professionals working to make your learning experience perfect.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member._id} className="group relative">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                <img 
                  src={member.photo || `https://ui-avatars.com/api/?name=${member.name}&size=400&background=F3F4F6&color=111827`} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  {/* Hover Info (Social links could go here) */}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{member.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium flex items-center gap-2">
                <HiOutlineBriefcase className="text-blue-500" />
                {member.role}
              </p>
              {member.experience && (
                <p className="text-sm text-gray-400 mt-2">{member.experience}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;