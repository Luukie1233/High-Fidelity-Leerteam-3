import { useNavigate } from 'react-router';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useLanguage } from '../i18n/LanguageContext';

export default function Plattegrond() {
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
          {t('mapTitle') as string}
        </h1>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 py-6 flex flex-col" style={{ height: 'calc(844px - 80px - 80px)', overflow: 'hidden' }}>
        {/* Map Container */}
        <div 
          className="relative mb-3 flex-shrink-0"
          style={{
            backgroundColor: '#F5F5F5',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
            height: '340px',
            overflow: 'hidden',
          }}
        >
          {/* Decorative landmark - top left star/cross */}
          <div 
            className="absolute"
            style={{
              top: '30px',
              left: '30px',
              fontSize: '24px',
            }}
          >
            ✨
          </div>

          {/* Background buildings/attractions (scattered gray squares) */}
          <div className="absolute" style={{ top: '80px', left: '50px', width: '20px', height: '20px', backgroundColor: '#D0D0D0', borderRadius: '3px' }} />
          <div className="absolute" style={{ top: '120px', left: '100px', width: '20px', height: '20px', backgroundColor: '#D0D0D0', borderRadius: '3px' }} />
          <div className="absolute" style={{ top: '150px', left: '250px', width: '20px', height: '20px', backgroundColor: '#D0D0D0', borderRadius: '3px' }} />
          <div className="absolute" style={{ top: '200px', left: '180px', width: '20px', height: '20px', backgroundColor: '#D0D0D0', borderRadius: '3px' }} />
          <div className="absolute" style={{ top: '250px', left: '80px', width: '20px', height: '20px', backgroundColor: '#D0D0D0', borderRadius: '3px' }} />
          <div className="absolute" style={{ top: '280px', left: '230px', width: '20px', height: '20px', backgroundColor: '#D0D0D0', borderRadius: '3px' }} />
          <div className="absolute" style={{ top: '320px', left: '150px', width: '20px', height: '20px', backgroundColor: '#D0D0D0', borderRadius: '3px' }} />

          {/* H1 - Ingang (top right) */}
          <BusStop
            emoji="🚏"
            label="H1"
            name={t('stopIngang') as string}
            top="30px"
            right="30px"
            onClick={() => navigate('/bushalte/h1')}
          />

          {/* H2 - Avonturenland (middle left) */}
          <BusStop
            emoji="🎢"
            label="H2"
            name={t('stopAvonturenland') as string}
            top="130px"
            left="25px"
            onClick={() => navigate('/bushalte/h2')}
          />

          {/* H3 - Kruispunt (center) */}
          <BusStop
            emoji="🧩"
            label="H3"
            name={t('stopKruispunt') as string}
            top="160px"
            left="120px"
            onClick={() => navigate('/bushalte/h3')}
          />

          {/* Live Bus Position - between H3 and H4 */}
          <div 
            className="absolute flex flex-col items-center"
            style={{
              top: '150px',
              left: '200px',
            }}
          >
            <div 
              className="flex items-center justify-center"
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#2C3E50',
                borderRadius: '50%',
                fontSize: '18px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              🚌
            </div>
          </div>

          {/* H4 - Toekomstzone (middle right) */}
          <BusStop
            emoji="🚀"
            label="H4"
            name={t('stopToekomstzone') as string}
            top="120px"
            right="25px"
            onClick={() => navigate('/bushalte/h4')}
          />

          {/* H5 - Dromenpark (lower center) */}
          <BusStop
            emoji="⭐"
            label="H5"
            name={t('stopDromenpark') as string}
            top="240px"
            left="140px"
            onClick={() => navigate('/bushalte/h5')}
          />

          {/* H6 - Uitgang (bottom center) */}
          <BusStop
            emoji="💧"
            label="H6"
            name={t('stopUitgang') as string}
            bottom="25px"
            left="130px"
            onClick={() => navigate('/bushalte/h6')}
          />
        </div>

        {/* Legend Bar */}
        <div 
          className="p-3 mb-3 flex items-center justify-center gap-4 text-sm flex-shrink-0"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
            color: '#6B7280',
          }}
        >
          <span>🚏 {t('mapLegendStop') as string}</span>
          <span>🚌 {t('mapLegendBus') as string}</span>
          <span>👆 {t('mapLegendTap') as string}</span>
        </div>

        {/* Live Shuttle Info Card */}
        <div 
          className="p-4 flex items-center gap-3 flex-shrink-0"
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
                {t('mapShuttleTo') as string}
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
              {t('mapPersonsArrival') as string}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar activeTab="kaart" />
    </PhoneFrame>
  );
}

// Bus Stop Component
function BusStop({ 
  emoji, 
  label, 
  name,
  top,
  bottom,
  left,
  right,
  onClick
}: { 
  emoji: string; 
  label: string; 
  name: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  onClick?: () => void;
}) {
  return (
    <button 
      className="absolute flex flex-col items-center hover:scale-110 transition-transform"
      style={{
        top,
        bottom,
        left,
        right,
      }}
      onClick={onClick}
    >
      {/* Emoji Icon */}
      <div 
        className="flex items-center justify-center mb-1"
        style={{
          width: '36px',
          height: '36px',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          fontSize: '20px',
          border: '2px solid #A8D4F0',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {emoji}
      </div>
      
      {/* Label */}
      <div 
        className="text-xs font-bold px-2 py-0.5 rounded whitespace-nowrap"
        style={{
          backgroundColor: '#FFFFFF',
          color: '#1E2A3A',
          border: '1px solid #E0E0E8',
        }}
      >
        {label}
      </div>
      
      {/* Name */}
      <div 
        className="text-xs mt-0.5"
        style={{
          color: '#6B7280',
          fontSize: '10px',
        }}
      >
        {name}
      </div>
    </button>
  );
}