import { ReactNode } from 'react';

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#E0E0EA' }}>
      {/* iPhone 14 Frame */}
      <div 
        className="relative overflow-hidden" 
        style={{
          width: '390px',
          height: '844px',
          borderRadius: '24px',
          border: '2px solid #C0C0CC',
          backgroundColor: '#FFFFFF',
        }}
      >
        {children}
      </div>
    </div>
  );
}
