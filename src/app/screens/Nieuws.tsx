import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useNavigate } from 'react-router';
import { useLanguage } from '../i18n/LanguageContext';

export default function Nieuws() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      emoji: '🎢',
      iconBg: '#FFE8D4',
      title: t('news1Title') as string,
      subtitle: t('news1Sub') as string,
      timestamp: t('news1Time') as string,
    },
    {
      id: 2,
      emoji: '🌙',
      iconBg: '#E8D4FF',
      title: t('news2Title') as string,
      subtitle: t('news2Sub') as string,
      timestamp: t('news2Time') as string,
    },
    {
      id: 3,
      emoji: '🍕',
      iconBg: '#FFD4D4',
      title: t('news3Title') as string,
      subtitle: t('news3Sub') as string,
      timestamp: t('news3Time') as string,
    },
    {
      id: 4,
      emoji: '🚌',
      iconBg: '#D4E4FF',
      title: t('news4Title') as string,
      subtitle: t('news4Sub') as string,
      timestamp: t('news4Time') as string,
    },
    {
      id: 5,
      emoji: '🎭',
      iconBg: '#FFF4D4',
      title: t('news5Title') as string,
      subtitle: t('news5Sub') as string,
      timestamp: t('news5Time') as string,
    },
    {
      id: 6,
      emoji: '☀️',
      iconBg: '#FFEDD4',
      title: t('news6Title') as string,
      subtitle: t('news6Sub') as string,
      timestamp: t('news6Time') as string,
    },
  ];

  return (
    <PhoneFrame>
      {/* Header with gradient */}
      <div 
        className="relative px-6 py-4 flex items-center justify-center"
        style={{
          height: '88px',
          background: 'linear-gradient(to bottom, #A8D4F0, #C8E4F8)',
        }}
      >
        {/* Title */}
        <div style={{ textAlign: 'center' }}>
          <h1 className="text-xl font-bold" style={{ color: '#1E2A3A', marginBottom: '2px' }}>
            {t('newsTitle') as string}
          </h1>
          <p style={{ color: '#6B7280', fontSize: '11px' }}>Lake Side Mania</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 py-6 overflow-y-auto" style={{ height: 'calc(844px - 88px - 80px)' }}>
        {/* News Cards */}
        <div className="space-y-3">
          {newsItems.map((item) => (
            <NewsCard
              key={item.id}
              emoji={item.emoji}
              iconBg={item.iconBg}
              title={item.title}
              subtitle={item.subtitle}
              timestamp={item.timestamp}
              onClick={() => navigate(`/nieuws/${item.id}`)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar activeTab="nieuws" />
    </PhoneFrame>
  );
}

// News Card Component
function NewsCard({ 
  emoji, 
  iconBg, 
  title,
  subtitle,
  timestamp,
  onClick
}: { 
  emoji: string; 
  iconBg: string; 
  title: string;
  subtitle: string;
  timestamp: string;
  onClick: () => void;
}) {
  return (
    <button 
      className="w-full p-4 flex items-start gap-3 text-left hover:shadow-md transition-shadow"
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
        {emoji}
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold mb-1" style={{ color: '#1E2A3A', fontSize: '15px' }}>
          {title}
        </h3>
        <p 
          className="mb-2 line-clamp-2"
          style={{ 
            color: '#6B7280', 
            fontSize: '13px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {subtitle}
        </p>
        <p style={{ color: '#9CA3AF', fontSize: '12px' }}>
          {timestamp}
        </p>
      </div>
    </button>
  );
}