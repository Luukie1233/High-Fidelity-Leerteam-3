import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Weergave() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [textSize, setTextSize] = useState(65);
  const [lineSpacing, setLineSpacing] = useState(70);
  const [voiceAssistant, setVoiceAssistant] = useState(true);

  return (
    <PhoneFrame>
      {/* Voice Assistant Notification Banner */}
      {voiceAssistant && (
        <div 
          className="flex items-center gap-2 px-4 py-2"
          style={{
            backgroundColor: '#2C3E50',
            width: '100%',
          }}
        >
          <span style={{ fontSize: '14px' }}>📢</span>
          <p style={{ color: '#FFFFFF', fontSize: '12px', flex: 1 }}>
            {t('voiceBanner') as string}
          </p>
        </div>
      )}

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
          onClick={() => navigate('/instellingen')}
          className="p-2 -ml-2"
        >
          <ArrowLeft size={24} style={{ color: '#1E2A3A' }} />
        </button>

        {/* Title */}
        <h1 
          className="text-xl font-bold"
          style={{ color: '#1E2A3A' }}
        >
          {t('displayTitle') as string}
        </h1>
        
        {/* Empty space for alignment */}
        <div style={{ width: '40px' }} />
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 py-6 overflow-y-auto" style={{ height: 'calc(844px - 80px - 80px)' }}>
        <div className="space-y-3">
          {/* Text Size Card */}
          <div 
            className="p-4"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E0E0E8',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            }}
          >
            <h3 className="font-bold mb-4" style={{ color: '#1E2A3A', fontSize: '15px' }}>
              {t('textSize') as string}
            </h3>
            <div className="flex items-center gap-4">
              {/* Small A */}
              <span style={{ fontSize: '14px', color: '#6B7280', fontWeight: '600' }}>A</span>
              
              {/* Slider */}
              <input
                type="range"
                min="0"
                max="100"
                value={textSize}
                onChange={(e) => setTextSize(Number(e.target.value))}
                className="flex-1"
                style={{
                  height: '6px',
                  borderRadius: '3px',
                  background: `linear-gradient(to right, #F0B8B0 0%, #F0B8B0 ${textSize}%, #E0E0E8 ${textSize}%, #E0E0E8 100%)`,
                  outline: 'none',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                }}
              />
              
              {/* Large A */}
              <span style={{ fontSize: '22px', color: '#6B7280', fontWeight: '600' }}>A</span>
            </div>
          </div>

          {/* Line Spacing Card */}
          <div 
            className="p-4"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E0E0E8',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            }}
          >
            <h3 className="font-bold mb-4" style={{ color: '#1E2A3A', fontSize: '15px' }}>
              {t('lineSpacing') as string}
            </h3>
            <div className="flex items-center gap-4">
              {/* Compact lines icon */}
              <div style={{ fontSize: '18px', color: '#6B7280', lineHeight: '1' }}>
                <div style={{ marginBottom: '2px' }}>—</div>
                <div style={{ marginBottom: '2px' }}>—</div>
                <div>—</div>
              </div>
              
              {/* Slider */}
              <input
                type="range"
                min="0"
                max="100"
                value={lineSpacing}
                onChange={(e) => setLineSpacing(Number(e.target.value))}
                className="flex-1"
                style={{
                  height: '6px',
                  borderRadius: '3px',
                  background: `linear-gradient(to right, #F0B8B0 0%, #F0B8B0 ${lineSpacing}%, #E0E0E8 ${lineSpacing}%, #E0E0E8 100%)`,
                  outline: 'none',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                }}
              />
              
              {/* Wide lines icon */}
              <div style={{ fontSize: '18px', color: '#6B7280', lineHeight: '1' }}>
                <div style={{ marginBottom: '4px' }}>—</div>
                <div style={{ marginBottom: '4px' }}>—</div>
                <div>—</div>
              </div>
            </div>
          </div>

          {/* Voice Assistant Card */}
          <div 
            className="p-4 flex items-center justify-between"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E0E0E8',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            }}
          >
            <div>
              <h3 className="font-bold mb-0.5" style={{ color: '#1E2A3A', fontSize: '15px' }}>
                {t('voiceAssistant') as string}
              </h3>
              <p style={{ color: '#6B7280', fontSize: '13px' }}>
                {t('readAloud') as string}
              </p>
            </div>
            
            {/* Toggle Switch */}
            <button
              onClick={() => setVoiceAssistant(!voiceAssistant)}
              className="relative flex-shrink-0"
              style={{
                width: '51px',
                height: '31px',
                borderRadius: '16px',
                backgroundColor: voiceAssistant ? '#10B981' : '#D1D5DB',
                transition: 'background-color 0.3s',
              }}
            >
              <div
                className="absolute top-1 rounded-full transition-all duration-300"
                style={{
                  width: '27px',
                  height: '27px',
                  backgroundColor: '#FFFFFF',
                  left: voiceAssistant ? '22px' : '2px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                }}
              />
            </button>
          </div>

          {/* Preview Card */}
          <div 
            className="p-4"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E0E0E8',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            }}
          >
            <h3 className="font-bold mb-3" style={{ color: '#1E2A3A', fontSize: '15px' }}>
              {t('preview') as string}
            </h3>
            <p 
              style={{ 
                color: '#4B5563', 
                fontSize: `${14 + (textSize / 100) * 6}px`,
                lineHeight: `${1.4 + (lineSpacing / 100) * 0.6}`
              }}
            >
              {t('previewText') as string}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar activeTab="planner" />
    </PhoneFrame>
  );
}