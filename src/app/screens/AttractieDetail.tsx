import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useLanguage } from '../i18n/LanguageContext';

export default function AttractieDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  const attractionsData: Record<string, { name: string; emoji: string; bgColor: string; waitTime: string; stopNumber: string; stopName: string; busArrival: string }> = {
    'tornado': {
      name: t('attrTornado') as string,
      emoji: '🎢',
      bgColor: '#E8D4FF',
      waitTime: '15 min',
      stopNumber: 'H2',
      stopName: t('attrTornadoStop') as string,
      busArrival: t('attrTornadoBus') as string,
    },
    'toekomstzone': {
      name: t('attrToekomstzone') as string,
      emoji: '🚀',
      bgColor: '#D4E8FF',
      waitTime: '22 min',
      stopNumber: 'H4',
      stopName: t('attrToekomstzoneStop') as string,
      busArrival: t('attrToekomstzoneBus') as string,
    },
    'sprookjesbos': {
      name: t('attrSprookjesbos') as string,
      emoji: '🧚',
      bgColor: '#D1F4E0',
      waitTime: '8 min',
      stopNumber: 'H1',
      stopName: t('attrSprookjesbosStop') as string,
      busArrival: t('attrSprookjesbosBus') as string,
    },
    'waterglijbaan': {
      name: t('attrWaterglijbaan') as string,
      emoji: '🌊',
      bgColor: '#D4F4FF',
      waitTime: '18 min',
      stopNumber: 'H5',
      stopName: t('attrWaterglijbaanStop') as string,
      busArrival: t('attrWaterglijbaanBus') as string,
    },
    'achtbaan': {
      name: t('attrAchtbaan') as string,
      emoji: '🎪',
      bgColor: '#FFE4F0',
      waitTime: '35 min',
      stopNumber: 'H3',
      stopName: t('attrAchtbaanStop') as string,
      busArrival: t('attrAchtbaanBus') as string,
    },
    'piratenboot': {
      name: t('attrPiratenboot') as string,
      emoji: '🏴‍☠️',
      bgColor: '#FFF4D4',
      waitTime: '12 min',
      stopNumber: 'H6',
      stopName: t('attrPiratenbootStop') as string,
      busArrival: t('attrPiratenbootBus') as string,
    },
  };

  const attraction = id ? attractionsData[id] : attractionsData['tornado'];

  if (!attraction) {
    return (
      <PhoneFrame>
        <div className="flex items-center justify-center h-full">
          <p style={{ color: '#6B7280' }}>{t('attractionNotFound') as string}</p>
        </div>
      </PhoneFrame>
    );
  }

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
          {attraction.name}
        </h1>
        
        {/* Empty space for alignment */}
        <div style={{ width: '40px' }} />
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 py-6 overflow-y-auto" style={{ height: 'calc(844px - 80px - 100px - 80px)' }}>
        {/* Large Image Card */}
        <div 
          className="flex items-center justify-center mb-6"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            height: '200px',
          }}
        >
          <div 
            className="flex items-center justify-center"
            style={{
              width: '120px',
              height: '120px',
              backgroundColor: attraction.bgColor,
              borderRadius: '16px',
              fontSize: '64px',
            }}
          >
            {attraction.emoji}
          </div>
        </div>

        {/* Info Cards */}
        <div className="space-y-3">
          {/* Wait Time Card */}
          <InfoCard
            icon="⏱"
            iconBg="#FFF4D4"
            title={t('waitTime') as string}
            value={attraction.waitTime}
          />

          {/* Stop Location Card */}
          <InfoCard
            icon="📍"
            iconBg="#FFD4D4"
            title={t('stop') as string}
            subtitle={`${attraction.stopNumber} – ${attraction.stopName}`}
          />

          {/* Bus Arrival Card */}
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
                backgroundColor: '#D4E4FF',
                borderRadius: '10px',
                fontSize: '22px',
              }}
            >
              🚌
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold" style={{ color: '#1E2A3A', fontSize: '15px' }}>
                  {t('nextBus') as string}
                </span>
                <span 
                  className="px-2 py-0.5 text-xs font-bold"
                  style={{
                    backgroundColor: '#F0B8B0',
                    color: '#2C3E50',
                    borderRadius: '6px',
                  }}
                >
                  LIVE
                </span>
              </div>
              <p style={{ color: '#6B7280', fontSize: '13px' }}>
                {attraction.busArrival}
              </p>
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
          onClick={() => navigate('/kies-attracties')}
        >
          {t('addToPlan') as string}
        </button>
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
  subtitle,
  value
}: { 
  icon: string; 
  iconBg: string; 
  title: string;
  subtitle?: string;
  value?: string;
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
        <h3 className="font-bold" style={{ color: '#1E2A3A', fontSize: '15px' }}>
          {title}
        </h3>
        {subtitle && (
          <p style={{ color: '#6B7280', fontSize: '13px' }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Value (right aligned) */}
      {value && (
        <div className="font-bold" style={{ color: '#1E2A3A', fontSize: '18px' }}>
          {value}
        </div>
      )}
    </div>
  );
}
