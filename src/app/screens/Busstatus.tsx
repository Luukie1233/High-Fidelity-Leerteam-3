import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useLanguage } from '../i18n/LanguageContext';

export default function Busstatus() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const occupancy = 52;
  const maxCapacity = 80;
  const occupancyPercent = Math.round((occupancy / maxCapacity) * 100);

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
          {t('busStatusTitle') as string}
        </h1>
        
        {/* Empty space for alignment */}
        <div style={{ width: '40px' }} />
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 py-6 overflow-y-auto" style={{ height: 'calc(844px - 80px - 80px)' }}>
        {/* Hero Card - Bus Direction */}
        <div 
          className="p-6 mb-4 flex flex-col items-center text-center"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Large Bus Emoji */}
          <div 
            className="mb-3"
            style={{
              fontSize: '64px',
            }}
          >
            🚌
          </div>

          {/* Direction */}
          <h2 
            className="font-bold mb-2"
            style={{ color: '#1E2A3A', fontSize: '18px' }}
          >
            {t('busDirection') as string}
          </h2>

          {/* LIVE Badge */}
          <div 
            className="px-3 py-1 font-bold"
            style={{
              backgroundColor: '#2C3E50',
              color: '#FFFFFF',
              borderRadius: '8px',
              fontSize: '14px',
            }}
          >
            LIVE
          </div>
        </div>

        {/* Info Cards */}
        <div className="space-y-3 mb-4">
          {/* Current Location Card */}
          <InfoCard
            icon="📍"
            iconBg="#FFD4D4"
            title={t('busCurrentLocation') as string}
            subtitle={t('busBetweenStops') as string}
          />

          {/* Next Stop Card */}
          <InfoCard
            icon="🚏"
            iconBg="#D1F4E0"
            title={t('busNextStop') as string}
            subtitle={t('busNextStopValue') as string}
          />

          {/* Departure Frequency Card */}
          <InfoCard
            icon="⏱"
            iconBg="#FFF4D4"
            title={t('busDepartureFreq') as string}
            subtitle={t('busEvery5Min') as string}
          />
        </div>

        {/* Occupancy Card */}
        <div 
          className="p-5"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          }}
        >
          <h3 
            className="font-bold mb-4"
            style={{ color: '#1E2A3A', fontSize: '16px' }}
          >
            {t('busOccupancy') as string} (max. {maxCapacity} {t('busPersons') as string})
          </h3>

          {/* Progress Bar */}
          <div 
            className="relative w-full mb-3"
            style={{
              height: '24px',
              backgroundColor: '#E8E8E8',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            {/* Filled portion */}
            <div 
              className="absolute top-0 left-0 h-full"
              style={{
                width: `${occupancyPercent}%`,
                backgroundColor: '#2C3E50',
                borderRadius: '12px',
              }}
            />
          </div>

          {/* Occupancy Numbers */}
          <div className="flex items-center justify-between mb-3">
            <span style={{ color: '#6B7280', fontSize: '14px' }}>
              {occupancy}/{maxCapacity} {t('busPersons') as string}
            </span>
            <span className="font-bold" style={{ color: '#1E2A3A', fontSize: '16px' }}>
              {occupancyPercent}%
            </span>
          </div>

          {/* Available Space Message */}
          <div className="flex items-center gap-2">
            <span style={{ color: '#10B981', fontSize: '20px' }}>
              ✓
            </span>
            <span style={{ color: '#10B981', fontSize: '14px', fontWeight: '500' }}>
              {t('busSufficientSpace') as string}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar activeTab="planner" />
    </PhoneFrame>
  );
}

// Info Card Component
function InfoCard({ 
  icon, 
  iconBg, 
  title,
  subtitle
}: { 
  icon: string; 
  iconBg: string; 
  title: string;
  subtitle: string;
}) {
  return (
    <div 
      className="p-4 flex items-center gap-3"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E0E0E8',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
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
        {icon}
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <h3 className="font-bold mb-0.5" style={{ color: '#1E2A3A', fontSize: '15px' }}>
          {title}
        </h3>
        <p style={{ color: '#6B7280', fontSize: '13px' }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}
