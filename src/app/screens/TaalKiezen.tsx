import { ArrowLeft, CheckCircle2, Circle } from 'lucide-react';
import { useNavigate } from 'react-router';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useLanguage } from '../i18n/LanguageContext';

export default function TaalKiezen() {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  return (
    <PhoneFrame>
      {/* Header with gradient */}
      <div 
        className="relative px-6 py-4 flex items-center justify-between"
        style={{
          height: '88px',
          background: 'linear-gradient(to bottom, #A8D4F0, #C8E4F8)',
        }}
      >
        {/* Back Button */}
        <button 
          onClick={() => navigate('/instellingen')}
          className="p-2 -ml-2"
        >
          <ArrowLeft size={24} style={{ color: '#1E2A3A' }} />
        </button>

        {/* Title */}
        <div style={{ textAlign: 'center' }}>
          <h1 className="text-xl font-bold" style={{ color: '#1E2A3A', marginBottom: '2px' }}>
            {t('chooseLanguageTitle') as string}
          </h1>
          <p style={{ color: '#6B7280', fontSize: '11px' }}>Lake Side Mania</p>
        </div>
        
        {/* Empty space for alignment */}
        <div style={{ width: '40px' }} />
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 py-6 overflow-y-auto" style={{ height: 'calc(844px - 88px - 80px)' }}>
        {/* Language Options */}
        <div className="space-y-3">
          {/* Dutch Option */}
          <LanguageOption
            flag="🇳🇱"
            language="Nederlands"
            isSelected={language === 'nl'}
            onClick={() => setLanguage('nl')}
          />

          {/* English Option */}
          <LanguageOption
            flag="🇬🇧"
            language="English"
            isSelected={language === 'en'}
            onClick={() => setLanguage('en')}
          />

          {/* German Option */}
          <LanguageOption
            flag="🇩🇪"
            language="Deutsch"
            isSelected={language === 'de'}
            onClick={() => setLanguage('de')}
          />

          {/* Turkish Option */}
          <LanguageOption
            flag="🇹🇷"
            language="Türkçe"
            isSelected={language === 'tr'}
            onClick={() => setLanguage('tr')}
          />

          {/* Arabic Option */}
          <LanguageOption
            flag="🇸🇦"
            language="العربية"
            isSelected={language === 'ar'}
            onClick={() => setLanguage('ar')}
          />
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar activeTab="meer" />
    </PhoneFrame>
  );
}

// Language Option Component
function LanguageOption({ 
  flag, 
  language,
  isSelected,
  onClick
}: { 
  flag: string; 
  language: string;
  isSelected: boolean;
  onClick: () => void;
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
      {/* Flag Emoji */}
      <div 
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: '44px',
          height: '44px',
          backgroundColor: '#F5F5F5',
          borderRadius: '10px',
          fontSize: '24px',
        }}
      >
        {flag}
      </div>
      
      {/* Language Name */}
      <div className="flex-1">
        <h3 className="font-bold" style={{ color: '#1E2A3A', fontSize: '15px' }}>
          {language}
        </h3>
      </div>
      
      {/* Checkmark */}
      {isSelected ? (
        <CheckCircle2 
          size={24} 
          style={{ color: '#10B981' }}
          fill="#10B981"
        />
      ) : (
        <Circle 
          size={24} 
          style={{ color: '#D1D5DB' }}
        />
      )}
    </button>
  );
}
