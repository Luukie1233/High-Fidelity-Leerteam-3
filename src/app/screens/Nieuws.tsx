import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useNavigate } from 'react-router';

export default function Nieuws() {
  const navigate = useNavigate();
  
  const newsItems = [
    {
      id: 1,
      emoji: '🎢',
      iconBg: '#FFE8D4',
      title: 'De Waterval opent deze zomer!',
      subtitle: 'Lake Side Mania\'s grootste waterattractie komt eraan. Met een 25 meter hoge val en spectaculaire effecten.',
      timestamp: '3 uur geleden',
    },
    {
      id: 2,
      emoji: '🌙',
      iconBg: '#E8D4FF',
      title: 'Avondopenstelling dit weekend',
      subtitle: 'Park blijft open tot 23:00 uur. Geniet van verlichtte attracties en een spectaculaire vuurwerkshow om 22:30.',
      timestamp: '5 uur geleden',
    },
    {
      id: 3,
      emoji: '🍕',
      iconBg: '#FFD4D4',
      title: 'Nieuw restaurant: Meerterras',
      subtitle: 'Proef de Italiaanse keuken met uitzicht op het meer. Nu geopend naast halte H3!',
      timestamp: '1 dag geleden',
    },
    {
      id: 4,
      emoji: '🚌',
      iconBg: '#D4E4FF',
      title: 'Extra shuttlebussen ingezet',
      subtitle: 'Door de drukte rijden er nu om de 3 minuten bussen. Korte wachttijden gegarandeerd!',
      timestamp: '1 dag geleden',
    },
    {
      id: 5,
      emoji: '🎭',
      iconBg: '#FFF4D4',
      title: 'Piratenshow om 15:00 uur',
      subtitle: 'Captain Jack en zijn bemanning nemen het park over! Spectaculaire stunts bij het Dromenpark.',
      timestamp: '2 dagen geleden',
    },
    {
      id: 6,
      emoji: '☀️',
      iconBg: '#FFEDD4',
      title: 'Weerbericht: Perfect parkweer',
      subtitle: 'Komende week zonnig en 24°C. Ideaal voor een dag vol avontuur bij Lake Side Mania!',
      timestamp: '3 dagen geleden',
    },
  ];

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
          Nieuws & Updates
        </h1>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 py-6 overflow-y-auto" style={{ height: 'calc(844px - 80px - 80px)' }}>
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