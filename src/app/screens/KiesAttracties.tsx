import { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useLanguage } from '../i18n/LanguageContext';
import { usePlanner } from '../planner/PlannerContext';

export default function KiesAttracties() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { selectedAttractions, toggleAttraction } = usePlanner();
  const [searchQuery, setSearchQuery] = useState('');

  const attractions = [
    { id: 1, name: t('attrTornado') as string, duration: '15 min', zone: 'Zone A', slug: 'tornado' },
    { id: 2, name: t('attrToekomstzone') as string, duration: '22 min', zone: 'Zone D', slug: 'toekomstzone' },
    { id: 3, name: t('attrSprookjesbos') as string, duration: '8 min', zone: 'Zone A', slug: 'sprookjesbos' },
    { id: 4, name: t('attrWaterglijbaan') as string, duration: '18 min', zone: 'Zone E', slug: 'waterglijbaan' },
    { id: 5, name: t('attrAchtbaan') as string, duration: '35 min', zone: 'Zone C', slug: 'achtbaan' },
    { id: 6, name: t('attrPiratenboot') as string, duration: '12 min', zone: 'Zone F', slug: 'piratenboot' },
  ];

  return (
    <PhoneFrame>
      {/* Header with gradient */}
      <div 
        className="relative px-6 py-4 flex items-center justify-between"
        style={{
          height: '80px',
          background: 'linear-gradient(to bottom, #A8D4F0, #C8E4F8)',
        }}
      >
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="p-2 -ml-2"
        >
          <ArrowLeft size={24} style={{ color: '#1E2A3A' }} />
        </button>

        {/* Title */}
        <h1 
          className="text-xl font-bold"
          style={{ color: '#1E2A3A' }}
        >
          {t('chooseAttractions') as string}
        </h1>
        
        {/* Step Indicator */}
        <div className="flex items-center gap-1.5">
          <div 
            className="rounded-full"
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#1E2A3A',
            }}
          />
          <div 
            className="rounded-full"
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'rgba(30, 42, 58, 0.3)',
            }}
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 pt-4 pb-3">
        <div 
          className="flex items-center gap-3 px-4 py-3"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
          }}
        >
          <Search size={20} style={{ color: '#9CA3AF' }} />
          <input
            type="text"
            placeholder={t('searchAttraction') as string}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 outline-none"
            style={{
              color: '#1E2A3A',
              fontSize: '15px',
            }}
          />
        </div>
      </div>

      {/* Content Area with Scrollable List */}
      <div className="flex-1 px-6 pb-6 overflow-y-auto" style={{ height: 'calc(844px - 80px - 76px - 100px - 80px)' }}>
        <div className="space-y-3">
          {attractions.map((attraction) => (
            <AttractionCard
              key={attraction.id}
              name={attraction.name}
              duration={attraction.duration}
              zone={attraction.zone}
              slug={attraction.slug}
              checked={selectedAttractions.includes(attraction.id)}
              onToggle={() => toggleAttraction(attraction.id)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Button Area */}
      <div className="px-6 py-5" style={{ height: '100px' }}>
        <button
          className="w-full py-4 font-bold rounded-xl"
          style={{
            backgroundColor: '#F0B8B0',
            color: '#2C3E50',
            fontSize: '16px',
            borderRadius: '12px',
          }}
          onClick={() => navigate('/busfaciliteiten')}
        >
          {selectedAttractions.length > 0
            ? `${selectedAttractions.length} ${t('attractionsSelected') as string} · ${t('further') as string} →`
            : t('selectAttractions') as string
          }
        </button>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar activeTab="planner" />
    </PhoneFrame>
  );
}

// Attraction Card Component
function AttractionCard({ 
  name, 
  duration, 
  zone,
  slug,
  checked,
  onToggle 
}: { 
  name: string; 
  duration: string; 
  zone: string;
  slug: string;
  checked: boolean;
  onToggle: () => void;
}) {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent) => {
    // Navigate to detail page
    navigate(`/attractie/${slug}`);
  };

  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle();
  };

  return (
    <button 
      className="w-full p-4 flex items-center gap-3 text-left"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E0E0E8',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
      onClick={handleCardClick}
    >
      {/* Icon */}
      <div 
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: '44px',
          height: '44px',
          backgroundColor: '#E8D4FF',
          borderRadius: '10px',
          fontSize: '22px',
        }}
      >
        🎢
      </div>
      
      {/* Text */}
      <div className="flex-1">
        <h3 className="font-bold mb-0.5" style={{ color: '#1E2A3A', fontSize: '15px' }}>
          {name}
        </h3>
        <p style={{ color: '#6B7280', fontSize: '13px' }}>
          {duration} · {zone}
        </p>
      </div>
      
      {/* Checkbox - Much larger hit area */}
      <button
        onClick={handleCheckboxClick}
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: '56px',
          height: '56px',
          padding: '16px',
          marginRight: '-12px',
        }}
      >
        <div 
          style={{
            width: '24px',
            height: '24px',
            border: checked ? '2px solid #2C3E50' : '2px solid #C0C0CC',
            borderRadius: '6px',
            backgroundColor: checked ? '#2C3E50' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {checked && (
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path 
                d="M1 5L5 9L13 1" 
                stroke="#FFFFFF" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </button>
    </button>
  );
}