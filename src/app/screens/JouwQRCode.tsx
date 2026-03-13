import { ArrowLeft, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { QRCodeSVG } from 'qrcode.react';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useLanguage } from '../i18n/LanguageContext';
import { usePlanner } from '../planner/PlannerContext';
import type { TranslationKey } from '../i18n/translations';

const attractionKeys: Record<number, TranslationKey> = {
  1: 'attrTornado',
  2: 'attrToekomstzone',
  3: 'attrSprookjesbos',
  4: 'attrWaterglijbaan',
  5: 'attrAchtbaan',
  6: 'attrPiratenboot',
};

const facilityKeys: Record<string, TranslationKey> = {
  mindervaliden: 'facilityDisabled',
  kinderwagen: 'facilityStroller',
  rollator: 'facilityWheelchair',
  geen: 'facilityNone',
};

export default function JouwQRCode() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { selectedAttractions, selectedFacilities, groupSize } = usePlanner();

  const qrValue = `LakeSideMania-${groupSize}personen-20260303`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Lake Side Mania QR-code',
        text: 'Lake Side Mania toegangscode',
      });
    }
  };

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
          onClick={() => navigate('/busfaciliteiten')}
          className="p-2 -ml-2"
        >
          <ArrowLeft size={24} style={{ color: '#1E2A3A' }} />
        </button>

        {/* Title */}
        <div style={{ textAlign: 'center' }}>
          <h1 className="text-xl font-bold" style={{ color: '#1E2A3A', marginBottom: '2px' }}>
            {t('yourQRCode') as string}
          </h1>
          <p style={{ color: '#6B7280', fontSize: '11px' }}>Lake Side Mania</p>
        </div>
        
        {/* Empty space for alignment */}
        <div style={{ width: '40px' }} />
      </div>

      {/* Subtitle */}
      <div className="px-6 pt-4 pb-6 text-center">
        <p style={{ color: '#6B7280', fontSize: '15px' }}>
          {t('scanAtEveryStop') as string}
        </p>
      </div>

      {/* Content Area with Scrollable List */}
      <div className="flex-1 px-6 pb-6 overflow-y-auto" style={{ height: 'calc(844px - 88px - 64px - 156px - 80px)' }}>
        {/* QR Code Card with Corner Brackets */}
        <div 
          className="relative p-8 flex flex-col items-center mb-6"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* QR Code Container with Brackets */}
          <div className="relative mb-6">
            {/* QR Code */}
            <div className="p-4 bg-white">
              <QRCodeSVG
                value={qrValue}
                size={200}
                level="H"
                includeMargin={false}
              />
            </div>

            {/* Corner Brackets */}
            {/* Top Left */}
            <div 
              className="absolute"
              style={{
                top: '-8px',
                left: '-8px',
                width: '32px',
                height: '32px',
                borderTop: '3px solid #2C3E50',
                borderLeft: '3px solid #2C3E50',
                borderRadius: '4px 0 0 0',
              }}
            />
            
            {/* Top Right */}
            <div 
              className="absolute"
              style={{
                top: '-8px',
                right: '-8px',
                width: '32px',
                height: '32px',
                borderTop: '3px solid #2C3E50',
                borderRight: '3px solid #2C3E50',
                borderRadius: '0 4px 0 0',
              }}
            />
            
            {/* Bottom Left */}
            <div 
              className="absolute"
              style={{
                bottom: '-8px',
                left: '-8px',
                width: '32px',
                height: '32px',
                borderBottom: '3px solid #2C3E50',
                borderLeft: '3px solid #2C3E50',
                borderRadius: '0 0 0 4px',
              }}
            />
            
            {/* Bottom Right */}
            <div 
              className="absolute"
              style={{
                bottom: '-8px',
                right: '-8px',
                width: '32px',
                height: '32px',
                borderBottom: '3px solid #2C3E50',
                borderRight: '3px solid #2C3E50',
                borderRadius: '0 0 4px 0',
              }}
            />
          </div>

          {/* Group Info */}
          <p style={{ color: '#6B7280', fontSize: '14px' }}>
            {groupSize} {t('persons') as string} · 1 QR-code
          </p>
        </div>

        {/* Summary Card */}
        <div 
          className="p-5 space-y-3"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          }}
        >
          <h3 
            className="font-bold mb-3"
            style={{ color: '#1E2A3A', fontSize: '16px' }}
          >
            {t('summary') as string}
          </h3>

          {/* Attractions */}
          <div>
            <p
              className="font-semibold mb-1"
              style={{ color: '#1E2A3A', fontSize: '14px' }}
            >
              {t('selectedAttractions') as string}
            </p>
            {selectedAttractions.length > 0 ? (
              selectedAttractions.map((id) => (
                <p key={id} style={{ color: '#6B7280', fontSize: '14px' }}>
                  • {attractionKeys[id] ? t(attractionKeys[id]) as string : `Attractie ${id}`}
                </p>
              ))
            ) : (
              <p style={{ color: '#6B7280', fontSize: '14px' }}>
                —
              </p>
            )}
          </div>

          {/* Group Size */}
          <div>
            <p
              className="font-semibold mb-1"
              style={{ color: '#1E2A3A', fontSize: '14px' }}
            >
              {t('familySize') as string}
            </p>
            <p style={{ color: '#6B7280', fontSize: '14px' }}>
              {groupSize} {t('persons') as string}
            </p>
          </div>

          {/* Bus Facility */}
          <div>
            <p
              className="font-semibold mb-1"
              style={{ color: '#1E2A3A', fontSize: '14px' }}
            >
              {t('busFacility') as string}
            </p>
            {selectedFacilities.size > 0 ? (
              Array.from(selectedFacilities).map((facility) => (
                <p key={facility} style={{ color: '#6B7280', fontSize: '14px' }}>
                  • {facilityKeys[facility] ? t(facilityKeys[facility]) as string : facility}
                </p>
              ))
            ) : (
              <p style={{ color: '#6B7280', fontSize: '14px' }}>
                {t('noSpecialFacility') as string}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Buttons Area */}
      <div className="px-6 py-4 space-y-2" style={{ height: '156px' }}>
        <div className="flex gap-3">
          {/* Wijzig Button */}
          <button
            className="flex-1 py-3 font-bold rounded-xl"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#2C3E50',
              fontSize: '15px',
              borderRadius: '12px',
              border: '1px solid #C0C0CC',
            }}
            onClick={() => navigate('/busfaciliteiten')}
          >
            {t('modify') as string}
          </button>

          {/* Deel QR Button */}
          <button
            className="flex-1 py-3 font-bold rounded-xl flex items-center justify-center gap-2"
            style={{
              backgroundColor: '#F0B8B0',
              color: '#2C3E50',
              fontSize: '15px',
              borderRadius: '12px',
            }}
            onClick={handleShare}
          >
            <Share2 size={16} />
            {t('shareQR') as string}
          </button>
        </div>

      </div>

      {/* Bottom Tab Bar */}
      <TabBar activeTab="planner" />
    </PhoneFrame>
  );
}
