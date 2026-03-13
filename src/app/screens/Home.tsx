import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useVoiceAssistant } from '../planner/VoiceAssistantContext';

export default function Home() {
  const navigate = useNavigate();
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const { t } = useLanguage();
  const { voiceAssistant, toggleVoiceAssistant } = useVoiceAssistant();

  return (
    <PhoneFrame>
      {/* Header with gradient */}
      <div 
        className="relative px-6 flex flex-col items-center justify-center"
        style={{
          height: '180px',
          background: 'linear-gradient(to bottom, #A8D4F0, #C8E4F8)',
          borderBottomLeftRadius: '24px',
          borderBottomRightRadius: '24px',
        }}
      >
        {/* Bus Emoji Icon */}
        <div 
          className="flex items-center justify-center mb-3"
          style={{
            width: '56px',
            height: '56px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '12px',
            fontSize: '32px',
          }}
        >
          🚌
        </div>
        
        {/* Title */}
        <h1 
          className="text-3xl font-bold mb-1"
          style={{ color: '#1E2A3A' }}
        >
          Lake Side Mania
        </h1>
        
        {/* Subtitle */}
        <p style={{ color: '#6B7280', fontSize: '14px' }}>
          {t('homeSubtitle') as string}
        </p>

        {/* Voice Assistant Toggle */}
        <button
          onClick={toggleVoiceAssistant}
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            background: 'rgba(255,255,255,0.85)',
            borderRadius: '8px',
            padding: '4px 8px',
            border: '1px solid rgba(0,0,0,0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '14px',
          }}
        >
          {voiceAssistant ? '🔊' : '🔇'}
          <span style={{ fontSize: '10px', color: '#1E2A3A', fontWeight: 600 }}>
            {voiceAssistant ? 'AAN' : 'UIT'}
          </span>
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 py-6 space-y-3 overflow-y-auto" style={{ height: 'calc(844px - 180px - 80px)' }}>
        {/* Card 1 - Planner */}
        <Card
          icon="📅"
          iconBg="#D1F4E0"
          title={t('homeStartPlanner') as string}
          subtitle={t('homeStartPlannerSub') as string}
          onClick={() => navigate('/kies-attracties')}
        />

        {/* Card 2 - Kaart */}
        <Card
          icon="🗺️"
          iconBg="#FFD4D4"
          title={t('homeViewMap') as string}
          subtitle={t('homeViewMapSub') as string}
          onClick={() => navigate('/plattegrond')}
        />

        {/* Card 3 - Nieuws */}
        <Card
          icon="📰"
          iconBg="#FFF4D4"
          title={t('homeNews') as string}
          subtitle={t('homeNewsSub') as string}
          onClick={() => navigate('/nieuws')}
        />

        {/* Card 4 - Feedback */}
        <Card
          icon="💬"
          iconBg="#FFE4F0"
          title={t('homeFeedback') as string}
          subtitle={t('homeFeedbackSub') as string}
          onClick={() => setShowFeedbackModal(true)}
        />

        {/* Live Shuttle Info Card */}
        <div 
          className="p-4 flex items-center gap-3 mt-6"
          style={{
            backgroundColor: '#2C3E50',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/busstatus')}
        >
          {/* Bus Icon */}
          <div 
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: '44px',
              height: '44px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '10px',
              fontSize: '24px',
            }}
          >
            🚌
          </div>
          
          {/* Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold" style={{ color: '#FFFFFF', fontSize: '16px' }}>
                {t('homeShuttleIn') as string}
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
            <p style={{ color: '#A0A0A8', fontSize: '13px' }}>
              {t('homeStopRoute') as string}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar activeTab="home" />

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div 
          className="absolute inset-0 flex items-center justify-center px-8"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 50,
          }}
        >
          {/* Modal Card */}
          <div 
            className="w-full p-6 flex flex-col items-center"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              maxWidth: '320px',
            }}
          >
            {/* Icon Circle */}
            <div 
              className="flex items-center justify-center mb-4"
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#E8E8E8',
                borderRadius: '50%',
                fontSize: '32px',
              }}
            >
              💬
            </div>

            {/* Heading */}
            <h2 
              className="font-bold mb-3 text-center"
              style={{ color: '#1E2A3A', fontSize: '18px' }}
            >
              {t('homeFeedbackModalTitle') as string}
            </h2>

            {/* Body Text */}
            <p 
              className="mb-6 text-center"
              style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.5' }}
            >
              {t('homeFeedbackModalBody') as string}
            </p>

            {/* Feedback Button */}
            <button
              className="w-full py-3 mb-3 font-bold"
              style={{
                backgroundColor: '#2C3E50',
                color: '#FFFFFF',
                borderRadius: '12px',
                fontSize: '16px',
              }}
              onClick={() => {
                setShowFeedbackModal(false);
                navigate('/feedback');
              }}
            >
              {t('homeFeedbackModalBtn') as string}
            </button>

            {/* Not Now Link */}
            <button
              className="py-2"
              style={{ color: '#9CA3AF', fontSize: '14px' }}
              onClick={() => setShowFeedbackModal(false)}
            >
              {t('homeNotNow') as string}
            </button>
          </div>
        </div>
      )}
    </PhoneFrame>
  );
}

// Card Component
function Card({ 
  icon, 
  iconBg, 
  title, 
  subtitle,
  onClick 
}: { 
  icon: string; 
  iconBg: string; 
  title: string; 
  subtitle: string;
  onClick?: () => void;
}) {
  return (
    <button 
      className="w-full p-4 flex items-center gap-3 text-left hover:shadow-md transition-shadow"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E0E0E8',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
      onClick={onClick}
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
      
      {/* Text */}
      <div className="flex-1">
        <h3 className="font-bold mb-0.5" style={{ color: '#1E2A3A', fontSize: '15px' }}>
          {title}
        </h3>
        <p style={{ color: '#6B7280', fontSize: '13px' }}>
          {subtitle}
        </p>
      </div>
      
      {/* Chevron */}
      <ChevronRight size={20} style={{ color: '#C0C0CC' }} />
    </button>
  );
}