import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useLanguage } from '../i18n/LanguageContext';

export default function Instellingen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <PhoneFrame>
      {/* Header with gradient */}
      <div 
        className="relative px-6 py-4 flex items-center justify-center"
        style={{
          height: '80px',
          background: 'linear-gradient(to bottom, #A8D4F0, #C8E4F8)',
        }}
      >
        {/* Title */}
        <h1 
          className="text-xl font-bold"
          style={{ color: '#1E2A3A' }}
        >
          {t('settingsTitle') as string}
        </h1>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 py-6 overflow-y-auto" style={{ height: 'calc(844px - 80px - 80px)' }}>
        {/* Settings Cards */}
        <div className="space-y-3">
          {/* Language Setting */}
          <SettingCard
            icon="🌐"
            iconBg="#E8E8E8"
            title={t('settingsLanguage') as string}
            subtitle={t('settingsLanguageSub') as string}
            onClick={() => navigate('/taal-kiezen')}
          />

          {/* Display Setting */}
          <SettingCard
            icon="T"
            iconBg="#E8E8E8"
            title={t('settingsDisplay') as string}
            subtitle={t('settingsDisplaySub') as string}
            isTextIcon
            onClick={() => navigate('/weergave')}
          />

          {/* Voice Assistant Setting */}
          <SettingCard
            icon="🔊"
            iconBg="#E8E8E8"
            title={t('settingsVoice') as string}
            subtitle={t('settingsVoiceOff') as string}
          />

          {/* About Setting */}
          <SettingCard
            icon="ℹ"
            iconBg="#E8E8E8"
            title={t('settingsAbout') as string}
            subtitle="v1.0"
            isTextIcon
          />
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar activeTab="meer" />
    </PhoneFrame>
  );
}

// Setting Card Component
function SettingCard({ 
  icon, 
  iconBg, 
  title,
  subtitle,
  isTextIcon = false,
  onClick
}: { 
  icon: string; 
  iconBg: string; 
  title: string;
  subtitle: string;
  isTextIcon?: boolean;
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
          fontSize: isTextIcon ? '20px' : '22px',
          fontWeight: isTextIcon ? '700' : 'normal',
          color: isTextIcon ? '#6B7280' : 'inherit',
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