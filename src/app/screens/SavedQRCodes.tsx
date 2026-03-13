import { ArrowLeft, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router';
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

export default function SavedQRCodes() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { savedQRCodes, deleteQRCode } = useSavedQRCodes();

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString(language === 'de' ? 'de-DE' : language === 'en' ? 'en-GB' : 'nl-NL', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const handleDelete = (id: string) => {
    deleteQRCode(id);
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
        <button
          onClick={() => navigate('/instellingen')}
          className="p-2 -ml-2"
        >
          <ArrowLeft size={24} style={{ color: '#1E2A3A' }} />
        </button>

        <div style={{ textAlign: 'center' }}>
          <h1 className="text-xl font-bold" style={{ color: '#1E2A3A', marginBottom: '2px' }}>
            {t('savedQRCodes') as string}
          </h1>
          <p style={{ color: '#6B7280', fontSize: '11px' }}>Lake Side Mania</p>
        </div>

        <div style={{ width: '40px' }} />
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 py-6 overflow-y-auto" style={{ height: 'calc(844px - 88px - 80px)' }}>
        {savedQRCodes.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div
              className="flex items-center justify-center mb-4"
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#E8E8E8',
                borderRadius: '16px',
                fontSize: '28px',
              }}
            >
              📱
            </div>
            <h2
              className="font-bold mb-2"
              style={{ color: '#1E2A3A', fontSize: '18px' }}
            >
              {t('noSavedQRCodes') as string}
            </h2>
            <p
              className="mb-6"
              style={{ color: '#6B7280', fontSize: '14px', maxWidth: '260px' }}
            >
              {t('noSavedQRCodesSub') as string}
            </p>
            <button
              className="py-3 px-6 font-bold rounded-xl"
              style={{
                backgroundColor: '#F0B8B0',
                color: '#2C3E50',
                fontSize: '15px',
                borderRadius: '12px',
              }}
              onClick={() => navigate('/kies-attracties')}
            >
              {t('homeStartPlanner') as string}
            </button>
          </div>
        ) : (
          /* Saved QR Codes List */
          <div className="space-y-3">
            {savedQRCodes.map((qr) => (
              <button
                key={qr.id}
                className="w-full p-4 flex items-center gap-3 text-left"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E0E0E8',
                  borderRadius: '12px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                }}
                onClick={() => navigate(`/saved-qr-code/${qr.id}`)}
              >
                {/* Mini QR Preview */}
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid #E0E0E8',
                    padding: '4px',
                  }}
                >
                  <QRCodeSVG value={qr.qrValue} size={40} level="L" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold mb-0.5" style={{ color: '#1E2A3A', fontSize: '15px' }}>
                    {qr.label}
                  </h3>
                  <p style={{ color: '#6B7280', fontSize: '13px' }}>
                    {qr.attractions.length} {t('attractions') as string} · {qr.groupSize} {t('persons') as string}
                  </p>
                  <p style={{ color: '#9CA3AF', fontSize: '12px' }}>
                    {t('savedOn') as string} {formatDate(qr.savedAt)}
                  </p>
                </div>

                {/* Delete Button */}
                <div
                  role="button"
                  tabIndex={0}
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(qr.id);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.stopPropagation();
                      handleDelete(qr.id);
                    }
                  }}
                >
                  <Trash2 size={18} style={{ color: '#E74C3C' }} />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <TabBar activeTab="meer" />
    </PhoneFrame>
  );
}
