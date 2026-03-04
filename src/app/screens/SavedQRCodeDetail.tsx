import { ArrowLeft, Share2, Trash2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { QRCodeSVG } from 'qrcode.react';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useLanguage } from '../i18n/LanguageContext';
import { useSavedQRCodes } from '../planner/SavedQRCodesContext';
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

export default function SavedQRCodeDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const { savedQRCodes, deleteQRCode } = useSavedQRCodes();

  const qrCode = savedQRCodes.find(qr => qr.id === id);

  if (!qrCode) {
    return (
      <PhoneFrame>
        <div className="flex-1 flex items-center justify-center">
          <p style={{ color: '#6B7280', fontSize: '16px' }}>QR-code niet gevonden</p>
        </div>
        <TabBar activeTab="meer" />
      </PhoneFrame>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Lake Side Mania QR-code',
        text: `${t('familyName') as string} - Lake Side Mania`,
      });
    }
  };

  const handleDelete = () => {
    deleteQRCode(qrCode.id);
    navigate('/saved-qr-codes');
  };

  return (
    <PhoneFrame>
      {/* Header with gradient */}
      <div
        className="relative px-6 py-4 flex items-center justify-between"
        style={{
          height: '80px',
          background: 'linear-gradient(to bottom, #A8D4F0, #C8E4F8)',
        }}
      >
        <button
          onClick={() => navigate('/saved-qr-codes')}
          className="p-2 -ml-2"
        >
          <ArrowLeft size={24} style={{ color: '#1E2A3A' }} />
        </button>

        <h1
          className="text-xl font-bold"
          style={{ color: '#1E2A3A' }}
        >
          {qrCode.label}
        </h1>

        <div style={{ width: '40px' }} />
      </div>

      {/* Subtitle */}
      <div className="px-6 pt-4 pb-6 text-center">
        <p style={{ color: '#6B7280', fontSize: '15px' }}>
          {t('scanAtEveryStop') as string}
        </p>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 pb-6 overflow-y-auto" style={{ height: 'calc(844px - 80px - 64px - 100px - 80px)' }}>
        {/* QR Code Card */}
        <div
          className="relative p-8 flex flex-col items-center mb-6"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* QR Code with brackets */}
          <div className="relative mb-6">
            <div className="p-4 bg-white">
              <QRCodeSVG
                value={qrCode.qrValue}
                size={200}
                level="H"
                includeMargin={false}
              />
            </div>

            {/* Corner Brackets */}
            <div
              className="absolute"
              style={{ top: '-8px', left: '-8px', width: '32px', height: '32px', borderTop: '3px solid #2C3E50', borderLeft: '3px solid #2C3E50', borderRadius: '4px 0 0 0' }}
            />
            <div
              className="absolute"
              style={{ top: '-8px', right: '-8px', width: '32px', height: '32px', borderTop: '3px solid #2C3E50', borderRight: '3px solid #2C3E50', borderRadius: '0 4px 0 0' }}
            />
            <div
              className="absolute"
              style={{ bottom: '-8px', left: '-8px', width: '32px', height: '32px', borderBottom: '3px solid #2C3E50', borderLeft: '3px solid #2C3E50', borderRadius: '0 0 0 4px' }}
            />
            <div
              className="absolute"
              style={{ bottom: '-8px', right: '-8px', width: '32px', height: '32px', borderBottom: '3px solid #2C3E50', borderRight: '3px solid #2C3E50', borderRadius: '0 0 4px 0' }}
            />
          </div>

          {/* User Info */}
          <h2
            className="font-bold mb-1"
            style={{ color: '#1E2A3A', fontSize: '18px' }}
          >
            {t('familyName') as string}
          </h2>
          <p style={{ color: '#6B7280', fontSize: '14px' }}>
            {qrCode.groupSize} {t('persons') as string} · 1 QR-code
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
            <p className="font-semibold mb-1" style={{ color: '#1E2A3A', fontSize: '14px' }}>
              {t('selectedAttractions') as string}
            </p>
            {qrCode.attractions.length > 0 ? (
              qrCode.attractions.map((id) => (
                <p key={id} style={{ color: '#6B7280', fontSize: '14px' }}>
                  • {attractionKeys[id] ? t(attractionKeys[id]) as string : `Attractie ${id}`}
                </p>
              ))
            ) : (
              <p style={{ color: '#6B7280', fontSize: '14px' }}>—</p>
            )}
          </div>

          {/* Group Size */}
          <div>
            <p className="font-semibold mb-1" style={{ color: '#1E2A3A', fontSize: '14px' }}>
              {t('familySize') as string}
            </p>
            <p style={{ color: '#6B7280', fontSize: '14px' }}>
              {qrCode.groupSize} {t('persons') as string}
            </p>
          </div>

          {/* Bus Facility */}
          <div>
            <p className="font-semibold mb-1" style={{ color: '#1E2A3A', fontSize: '14px' }}>
              {t('busFacility') as string}
            </p>
            {qrCode.facilities.length > 0 ? (
              qrCode.facilities.map((facility) => (
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
      <div className="px-6 py-5 flex gap-3" style={{ height: '100px' }}>
        {/* Delete Button */}
        <button
          className="flex-1 py-4 font-bold rounded-xl flex items-center justify-center gap-2"
          style={{
            backgroundColor: '#FFFFFF',
            color: '#E74C3C',
            fontSize: '16px',
            borderRadius: '12px',
            border: '1px solid #E74C3C',
          }}
          onClick={handleDelete}
        >
          <Trash2 size={16} />
          {t('deleteQRCode') as string}
        </button>

        {/* Share Button */}
        <button
          className="flex-1 py-4 font-bold rounded-xl flex items-center justify-center gap-2"
          style={{
            backgroundColor: '#F0B8B0',
            color: '#2C3E50',
            fontSize: '16px',
            borderRadius: '12px',
          }}
          onClick={handleShare}
        >
          <Share2 size={18} />
          {t('shareQR') as string}
        </button>
      </div>

      <TabBar activeTab="meer" />
    </PhoneFrame>
  );
}
