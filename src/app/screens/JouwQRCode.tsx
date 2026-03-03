import { ArrowLeft, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { QRCodeSVG } from 'qrcode.react';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';

export default function JouwQRCode() {
  const navigate = useNavigate();

  const handleShare = () => {
    // Share functionality
    if (navigator.share) {
      navigator.share({
        title: 'Lake Side Mania QR-code',
        text: 'Gezin Van Dijk - Lake Side Mania toegangscode',
      });
    }
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
        {/* Back Button */}
        <button 
          onClick={() => navigate('/busfaciliteiten')}
          className="p-2 -ml-2"
        >
          <ArrowLeft size={24} style={{ color: '#1E2A3A' }} />
        </button>

        {/* Title */}
        <h1 
          className="text-xl font-bold"
          style={{ color: '#1E2A3A' }}
        >
          Jouw QR-code
        </h1>
        
        {/* Empty space for alignment */}
        <div style={{ width: '40px' }} />
      </div>

      {/* Subtitle */}
      <div className="px-6 pt-4 pb-6 text-center">
        <p style={{ color: '#6B7280', fontSize: '15px' }}>
          Scan deze code bij elke halte
        </p>
      </div>

      {/* Content Area with Scrollable List */}
      <div className="flex-1 px-6 pb-6 overflow-y-auto" style={{ height: 'calc(844px - 80px - 64px - 100px - 80px)' }}>
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
                value="LakeSideMania-VanDijk-4personen-20260303"
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

          {/* User Info */}
          <h2 
            className="font-bold mb-1"
            style={{ color: '#1E2A3A', fontSize: '18px' }}
          >
            Gezin Van Dijk
          </h2>
          <p style={{ color: '#6B7280', fontSize: '14px' }}>
            4 personen · 1 QR-code
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
            Samenvatting
          </h3>

          {/* Attractions */}
          <div>
            <p 
              className="font-semibold mb-1"
              style={{ color: '#1E2A3A', fontSize: '14px' }}
            >
              Geselecteerde attracties:
            </p>
            <p style={{ color: '#6B7280', fontSize: '14px' }}>
              • De Tornado
            </p>
          </div>

          {/* Bus Facility */}
          <div>
            <p 
              className="font-semibold mb-1"
              style={{ color: '#1E2A3A', fontSize: '14px' }}
            >
              Busfaciliteit:
            </p>
            <p style={{ color: '#6B7280', fontSize: '14px' }}>
              Geen speciale faciliteit
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Buttons Area */}
      <div className="px-6 py-5 flex gap-3" style={{ height: '100px' }}>
        {/* Wijzig Button */}
        <button
          className="flex-1 py-4 font-bold rounded-xl"
          style={{
            backgroundColor: '#FFFFFF',
            color: '#2C3E50',
            fontSize: '16px',
            borderRadius: '12px',
            border: '1px solid #C0C0CC',
          }}
          onClick={() => navigate('/busfaciliteiten')}
        >
          Wijzig
        </button>

        {/* Deel QR Button */}
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
          Deel QR
        </button>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar activeTab="planner" />
    </PhoneFrame>
  );
}
