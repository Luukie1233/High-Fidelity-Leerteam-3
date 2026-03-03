import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { useNavigate } from 'react-router';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useLanguage } from '../i18n/LanguageContext';
import { usePlanner, type FacilityOption } from '../planner/PlannerContext';

export default function Busfaciliteiten() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { selectedFacilities: selectedOptions, toggleFacility, groupSize, setGroupSize } = usePlanner();

  const facilities = [
    { id: 'mindervaliden' as FacilityOption, emoji: '♿', bg: '#D4E4FF', label: t('facilityDisabled') as string },
    { id: 'kinderwagen' as FacilityOption, emoji: '🍼', bg: '#FFF4D4', label: t('facilityStroller') as string },
    { id: 'rollator' as FacilityOption, emoji: '🦽', bg: '#E8E8E8', label: t('facilityWheelchair') as string },
    { id: 'geen' as FacilityOption, emoji: '✓', bg: '#E8E8E8', label: t('facilityNone') as string },
  ];

  const decrementSize = () => {
    if (groupSize > 1) setGroupSize(groupSize - 1);
  };

  const incrementSize = () => {
    if (groupSize < 10) setGroupSize(groupSize + 1);
  };

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
          onClick={() => navigate('/kies-attracties')}
          className="p-2 -ml-2"
        >
          <ArrowLeft size={24} style={{ color: '#1E2A3A' }} />
        </button>

        {/* Title */}
        <h1 
          className="text-xl font-bold"
          style={{ color: '#1E2A3A' }}
        >
          {t('busFacilitiesTitle') as string}
        </h1>
        
        {/* Step Indicator */}
        <div className="flex items-center gap-1.5">
          <div 
            className="rounded-full"
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'rgba(30, 42, 58, 0.3)',
            }}
          />
          <div 
            className="rounded-full"
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#1E2A3A',
            }}
          />
        </div>
      </div>

      {/* Subtitle */}
      <div className="px-6 pt-4 pb-3">
        <p style={{ color: '#6B7280', fontSize: '15px' }}>
          {t('busFacilitiesSubtitle') as string}
        </p>
      </div>

      {/* Content Area with Scrollable List */}
      <div className="flex-1 px-6 pb-6 overflow-y-auto" style={{ height: 'calc(844px - 80px - 70px - 100px - 80px)' }}>
        <div className="space-y-3">
          {/* Facility Options */}
          {facilities.map((facility) => (
            <FacilityCard
              key={facility.id}
              emoji={facility.emoji}
              iconBg={facility.bg}
              label={facility.label}
              selected={selectedOptions.has(facility.id)}
              onSelect={() => toggleFacility(facility.id)}
            />
          ))}

          {/* Gezinsgrootte Card */}
          <div 
            className="p-5 mt-4"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E0E0E8',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            }}
          >
            <h3 className="font-bold mb-4" style={{ color: '#1E2A3A', fontSize: '16px' }}>
              {t('familySize') as string}
            </h3>
            
            <div className="flex items-center justify-center gap-6">
              {/* Minus Button */}
              <button
                onClick={decrementSize}
                className="flex items-center justify-center"
                style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: '#2C3E50',
                  borderRadius: '50%',
                }}
                disabled={groupSize <= 1}
              >
                <Minus size={20} style={{ color: '#FFFFFF' }} />
              </button>

              {/* Counter Display */}
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold" style={{ color: '#1E2A3A' }}>
                  {groupSize}
                </span>
                <span style={{ color: '#6B7280', fontSize: '14px' }}>
                  {t('persons') as string}
                </span>
              </div>

              {/* Plus Button */}
              <button
                onClick={incrementSize}
                className="flex items-center justify-center"
                style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: '#2C3E50',
                  borderRadius: '50%',
                }}
                disabled={groupSize >= 10}
              >
                <Plus size={20} style={{ color: '#FFFFFF' }} />
              </button>
            </div>
          </div>
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
          onClick={() => navigate('/qr-code')}
        >
          {t('generateQR') as string} 🎟
        </button>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar activeTab="planner" />
    </PhoneFrame>
  );
}

// Facility Card Component with Radio Button
function FacilityCard({ 
  emoji, 
  iconBg, 
  label,
  selected,
  onSelect 
}: { 
  emoji: string; 
  iconBg: string; 
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button 
      className="w-full p-4 flex items-center gap-3 text-left"
      style={{
        backgroundColor: '#FFFFFF',
        border: selected ? '2px solid #2C3E50' : '1px solid #E0E0E8',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
      onClick={onSelect}
    >
      {/* Icon */}
      <div 
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: '44px',
          height: '44px',
          backgroundColor: iconBg,
          borderRadius: '10px',
          fontSize: '22px',
        }}
      >
        {emoji}
      </div>
      
      {/* Text */}
      <div className="flex-1">
        <h3 className="font-bold" style={{ color: '#1E2A3A', fontSize: '15px' }}>
          {label}
        </h3>
      </div>
      
      {/* Checkbox */}
      <div 
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: '24px',
          height: '24px',
          border: '2px solid #C0C0CC',
          borderRadius: '4px',
          backgroundColor: selected ? '#2C3E50' : '#FFFFFF',
        }}
      >
        {selected && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </button>
  );
}