import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useLanguage } from '../i18n/LanguageContext';

export default function BusHalteDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useLanguage();

  const halteData: Record<string, {
    emoji: string;
    iconBg: string;
    label: string;
    name: string;
    description: string;
    nextBus: string;
    busFrequency: string;
    facilities: Array<{ icon: string; name: string; distance: string }>;
    nearbyAttractions: Array<{ name: string; walkTime: string }>;
  }> = {
    'h1': {
      emoji: '🚏',
      iconBg: '#E8F4FD',
      label: 'H1',
      name: t('stopIngang') as string,
      description: t('h1Desc') as string,
      nextBus: '2 min',
      busFrequency: t('busEvery3Min') as string,
      facilities: [
        { icon: '🎫', name: t('facilityTicketCounter') as string, distance: '20m' },
        { icon: '🚻', name: t('facilityToilets') as string, distance: '30m' },
        { icon: '🏪', name: t('facilitySouvenirShop') as string, distance: '50m' },
        { icon: 'ℹ️', name: t('facilityInfoCenter') as string, distance: '25m' },
      ],
      nearbyAttractions: [
        { name: t('nearWelkomstplein') as string, walkTime: '1 min' },
        { name: t('nearFotoPoint') as string, walkTime: '2 min' },
      ],
    },
    'h2': {
      emoji: '🎢',
      iconBg: '#FFE8D4',
      label: 'H2',
      name: t('stopAvonturenland') as string,
      description: t('h2Desc') as string,
      nextBus: '5 min',
      busFrequency: t('busEvery3Min') as string,
      facilities: [
        { icon: '🍔', name: t('facilitySnackBar') as string, distance: '40m' },
        { icon: '🚻', name: t('facilityToilets') as string, distance: '25m' },
        { icon: '🎮', name: t('facilityArcade') as string, distance: '60m' },
        { icon: '🏥', name: t('facilityFirstAid') as string, distance: '80m' },
      ],
      nearbyAttractions: [
        { name: t('nearDeTornado') as string, walkTime: '2 min' },
        { name: t('nearVrijeVal') as string, walkTime: '3 min' },
        { name: t('nearLoopDeLoop') as string, walkTime: '5 min' },
      ],
    },
    'h3': {
      emoji: '🧩',
      iconBg: '#F0E8FF',
      label: 'H3',
      name: t('stopKruispunt') as string,
      description: t('h3Desc') as string,
      nextBus: '1 min',
      busFrequency: t('busEvery3Min') as string,
      facilities: [
        { icon: '🍕', name: t('facilityRestaurant') as string, distance: '15m' },
        { icon: '☕', name: t('facilityCoffee') as string, distance: '30m' },
        { icon: '🚻', name: t('facilityToilets') as string, distance: '20m' },
        { icon: '💧', name: t('facilityFountain') as string, distance: '10m' },
      ],
      nearbyAttractions: [
        { name: t('nearSpeeltuin') as string, walkTime: '2 min' },
        { name: t('nearReuzenrad') as string, walkTime: '4 min' },
      ],
    },
    'h4': {
      emoji: '🚀',
      iconBg: '#E8F0FF',
      label: 'H4',
      name: t('stopToekomstzone') as string,
      description: t('h4Desc') as string,
      nextBus: '4 min',
      busFrequency: t('busEvery3Min') as string,
      facilities: [
        { icon: '🍿', name: t('facilityCinemaSnacks') as string, distance: '35m' },
        { icon: '🚻', name: t('facilityToilets') as string, distance: '40m' },
        { icon: '🎬', name: t('facilityCinema') as string, distance: '50m' },
        { icon: '🎪', name: t('facilityVR') as string, distance: '70m' },
      ],
      nearbyAttractions: [
        { name: t('nearRuimteOdyssee') as string, walkTime: '2 min' },
        { name: t('nearGalacticSpinner') as string, walkTime: '3 min' },
        { name: t('nearLaserQuest') as string, walkTime: '5 min' },
      ],
    },
    'h5': {
      emoji: '⭐',
      iconBg: '#FFF4E8',
      label: 'H5',
      name: t('stopDromenpark') as string,
      description: t('h5Desc') as string,
      nextBus: '6 min',
      busFrequency: t('busEvery3Min') as string,
      facilities: [
        { icon: '🍦', name: t('facilityIceCream') as string, distance: '25m' },
        { icon: '🚻', name: t('facilityToiletsChanging') as string, distance: '30m' },
        { icon: '🎠', name: t('facilityKidsZone') as string, distance: '20m' },
        { icon: '🎪', name: t('facilityTheater') as string, distance: '45m' },
      ],
      nearbyAttractions: [
        { name: t('nearSprookjesbos') as string, walkTime: '2 min' },
        { name: t('nearDraaimolen') as string, walkTime: '1 min' },
        { name: t('nearWaterplezier') as string, walkTime: '4 min' },
      ],
    },
    'h6': {
      emoji: '💧',
      iconBg: '#E8F8FF',
      label: 'H6',
      name: t('stopUitgang') as string,
      description: t('h6Desc') as string,
      nextBus: '3 min',
      busFrequency: t('busEvery3Min') as string,
      facilities: [
        { icon: '🏪', name: t('facilitySouvenirExit') as string, distance: '25m' },
        { icon: '🚻', name: t('facilityToilets') as string, distance: '20m' },
        { icon: '🅿️', name: t('facilityParking') as string, distance: '100m' },
        { icon: '🎁', name: t('facilityPhotoPickup') as string, distance: '30m' },
      ],
      nearbyAttractions: [
        { name: t('nearWaterval') as string, walkTime: '3 min' },
        { name: t('nearWildwaterbaan') as string, walkTime: '5 min' },
      ],
    },
  };

  const halte = id ? halteData[id] : null;

  if (!halte) {
    return (
      <PhoneFrame>
        <div className="flex items-center justify-center h-full">
          <p style={{ color: '#6B7280' }}>{t('stopNotFound') as string}</p>
        </div>
      </PhoneFrame>
    );
  }

  return (
    <PhoneFrame>
      {/* Header with gradient */}
      <div 
        className="relative px-6 py-4 flex items-center"
        style={{
          height: '80px',
          background: 'linear-gradient(to bottom, #A8D4F0, #C8E4F8)',
        }}
      >
        {/* Back Button */}
        <button 
          onClick={() => navigate('/plattegrond')}
          className="p-2 -ml-2"
        >
          <ArrowLeft size={24} style={{ color: '#1E2A3A' }} />
        </button>

        {/* Title */}
        <h1 
          className="flex-1 text-center font-bold mr-10"
          style={{ color: '#1E2A3A', fontSize: '18px' }}
        >
          {t('stopDetails') as string}
        </h1>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 py-6 overflow-y-auto" style={{ height: 'calc(844px - 80px - 80px)' }}>
        {/* Halte Header */}
        <div className="flex items-center gap-4 mb-5">
          <div 
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: halte.iconBg,
              borderRadius: '16px',
              fontSize: '32px',
            }}
          >
            {halte.emoji}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span 
                className="px-2 py-1 font-bold rounded"
                style={{
                  backgroundColor: '#2C3E50',
                  color: '#FFFFFF',
                  fontSize: '12px',
                }}
              >
                {halte.label}
              </span>
              <h1 
                className="font-bold"
                style={{ color: '#1E2A3A', fontSize: '20px' }}
              >
                {halte.name}
              </h1>
            </div>
            <p style={{ color: '#6B7280', fontSize: '14px' }}>
              {halte.description}
            </p>
          </div>
        </div>

        {/* Live Bus Info Card */}
        <div 
          className="p-4 mb-4"
          style={{
            backgroundColor: '#2C3E50',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="flex items-center justify-center"
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                fontSize: '22px',
              }}
            >
              🚌
            </div>
            <div className="flex-1">
              <h3 className="font-bold" style={{ color: '#FFFFFF', fontSize: '16px' }}>
                {t('nextBus') as string}
              </h3>
              <p style={{ color: '#A0A0A8', fontSize: '13px' }}>
                {halte.busFrequency}
              </p>
            </div>
            <div 
              className="px-4 py-2 rounded-lg font-bold"
              style={{
                backgroundColor: '#F0B8B0',
                color: '#2C3E50',
                fontSize: '18px',
              }}
            >
              {halte.nextBus}
            </div>
          </div>
          
          <button
            className="w-full py-2 rounded-lg font-bold"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              fontSize: '14px',
            }}
            onClick={() => navigate('/busstatus')}
          >
            🗺️ {t('viewLiveBus') as string}
          </button>
        </div>

        {/* Facilities Section */}
        <div 
          className="p-4 mb-4"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          }}
        >
          <h3 className="font-bold mb-3" style={{ color: '#1E2A3A', fontSize: '16px' }}>
            📍 {t('facilitiesNearby') as string}
          </h3>
          <div className="space-y-2">
            {halte.facilities.map((facility, index) => (
              <div 
                key={index}
                className="flex items-center justify-between py-2"
                style={{
                  borderBottom: index < halte.facilities.length - 1 ? '1px solid #F0F0F0' : 'none',
                }}
              >
                <div className="flex items-center gap-3">
                  <span style={{ fontSize: '20px' }}>{facility.icon}</span>
                  <span style={{ color: '#4B5563', fontSize: '14px' }}>
                    {facility.name}
                  </span>
                </div>
                <span 
                  className="font-bold"
                  style={{ color: '#9CA3AF', fontSize: '13px' }}
                >
                  {facility.distance}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Attractions Section */}
        <div 
          className="p-4"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          }}
        >
          <h3 className="font-bold mb-3" style={{ color: '#1E2A3A', fontSize: '16px' }}>
            🎢 {t('attractionsNearby') as string}
          </h3>
          <div className="space-y-2">
            {halte.nearbyAttractions.map((attraction, index) => (
              <div 
                key={index}
                className="flex items-center justify-between py-2"
                style={{
                  borderBottom: index < halte.nearbyAttractions.length - 1 ? '1px solid #F0F0F0' : 'none',
                }}
              >
                <span style={{ color: '#4B5563', fontSize: '14px' }}>
                  {attraction.name}
                </span>
                <span 
                  className="px-2 py-1 rounded font-bold"
                  style={{ 
                    backgroundColor: '#F0F0F0',
                    color: '#6B7280', 
                    fontSize: '12px' 
                  }}
                >
                  🚶 {attraction.walkTime}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar activeTab="kaart" />
    </PhoneFrame>
  );
}
