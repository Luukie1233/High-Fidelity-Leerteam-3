import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useLanguage } from '../i18n/LanguageContext';

export default function NieuwsDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useLanguage();

  const newsData: Record<string, {
    emoji: string;
    iconBg: string;
    title: string;
    timestamp: string;
    content: string[];
    category: string;
  }> = {
    '1': {
      emoji: '🎢',
      iconBg: '#FFE8D4',
      title: t('news1Title') as string,
      timestamp: t('news1Time') as string,
      category: t('catNewAttraction') as string,
      content: t('news1Content') as string[],
    },
    '2': {
      emoji: '🌙',
      iconBg: '#E8D4FF',
      title: t('news2Title') as string,
      timestamp: t('news2Time') as string,
      category: t('catEvent') as string,
      content: t('news2Content') as string[],
    },
    '3': {
      emoji: '🍕',
      iconBg: '#FFD4D4',
      title: t('news3Title') as string,
      timestamp: t('news3Time') as string,
      category: t('catFood') as string,
      content: t('news3Content') as string[],
    },
    '4': {
      emoji: '🚌',
      iconBg: '#D4E4FF',
      title: t('news4Title') as string,
      timestamp: t('news4Time') as string,
      category: t('catService') as string,
      content: t('news4Content') as string[],
    },
    '5': {
      emoji: '🎭',
      iconBg: '#FFF4D4',
      title: t('news5Title') as string,
      timestamp: t('news5Time') as string,
      category: t('catEntertainment') as string,
      content: t('news5Content') as string[],
    },
    '6': {
      emoji: '☀️',
      iconBg: '#FFEDD4',
      title: t('news6Title') as string,
      timestamp: t('news6Time') as string,
      category: t('catInfo') as string,
      content: t('news6Content') as string[],
    },
  };

  const news = id ? newsData[id] : null;

  if (!news) {
    return (
      <PhoneFrame>
        <div className="flex items-center justify-center h-full">
          <p style={{ color: '#6B7280' }}>{t('newsNotFound') as string}</p>
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
          height: '88px',
          background: 'linear-gradient(to bottom, #A8D4F0, #C8E4F8)',
        }}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate('/nieuws')}
          className="p-2 -ml-2"
        >
          <ArrowLeft size={24} style={{ color: '#1E2A3A' }} />
        </button>

        {/* Category Badge + branding */}
        <div style={{ textAlign: 'center' }}>
          <div
            className="px-3 py-1 rounded-full inline-block"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              color: '#1E2A3A',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            {news.category}
          </div>
          <p style={{ color: '#6B7280', fontSize: '11px', marginTop: '2px' }}>Lake Side Mania</p>
        </div>

        {/* Empty space for alignment */}
        <div style={{ width: '40px' }} />
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 py-6 overflow-y-auto" style={{ height: 'calc(844px - 88px - 80px)' }}>
        {/* Icon Header */}
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: news.iconBg,
              borderRadius: '16px',
              fontSize: '32px',
            }}
          >
            {news.emoji}
          </div>
          
          <div className="flex-1">
            <h1 
              className="font-bold mb-1"
              style={{ color: '#1E2A3A', fontSize: '20px', lineHeight: '1.3' }}
            >
              {news.title}
            </h1>
            <p style={{ color: '#9CA3AF', fontSize: '13px' }}>
              {news.timestamp}
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div 
          className="p-5"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          }}
        >
          {news.content.map((paragraph, index) => (
            <p 
              key={index}
              className={index < news.content.length - 1 ? 'mb-4' : ''}
              style={{ 
                color: '#4B5563', 
                fontSize: '15px',
                lineHeight: '1.6',
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share/Action Section */}
        <div className="mt-4 flex gap-3">
          <button
            className="flex-1 py-3 font-bold rounded-xl flex items-center justify-center gap-2"
            style={{
              backgroundColor: '#F0B8B0',
              color: '#2C3E50',
              fontSize: '15px',
            }}
          >
            📤 {t('share') as string}
          </button>
          <button
            className="flex-1 py-3 font-bold rounded-xl flex items-center justify-center gap-2"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#2C3E50',
              border: '2px solid #E0E0E8',
              fontSize: '15px',
            }}
          >
            🔖 {t('save') as string}
          </button>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar activeTab="nieuws" />
    </PhoneFrame>
  );
}
