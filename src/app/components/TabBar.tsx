import { useNavigate } from 'react-router';

export function TabBar({ activeTab }: { activeTab: 'home' | 'kaart' | 'planner' | 'nieuws' | 'meer' }) {
  const navigate = useNavigate();

  return (
    <div 
      className="absolute bottom-0 w-full flex items-center justify-around px-4 py-4"
      style={{
        height: '80px',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E0E0E8',
      }}
    >
      <TabItem 
        icon="🏠" 
        label="Home" 
        active={activeTab === 'home'}
        onClick={() => navigate('/')}
      />
      <TabItem 
        icon="🗺️" 
        label="Kaart" 
        active={activeTab === 'kaart'}
        onClick={() => navigate('/plattegrond')}
      />
      <TabItem 
        icon="📅" 
        label="Planner" 
        active={activeTab === 'planner'}
        onClick={() => navigate('/kies-attracties')}
      />
      <TabItem 
        icon="📰" 
        label="Nieuws" 
        active={activeTab === 'nieuws'}
        onClick={() => navigate('/nieuws')}
      />
      <TabItem 
        icon="⚙️" 
        label="Meer" 
        active={activeTab === 'meer'}
        onClick={() => navigate('/instellingen')}
      />
    </div>
  );
}

function TabItem({ 
  icon, 
  label, 
  active = false,
  onClick
}: { 
  icon: string; 
  label: string; 
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button className="flex flex-col items-center gap-1" onClick={onClick}>
      <div 
        className="text-2xl"
        style={{
          opacity: active ? 1 : 0.5,
          filter: active ? 'none' : 'grayscale(50%)',
        }}
      >
        {icon}
      </div>
      <span 
        className="text-xs"
        style={{ 
          color: active ? '#1E2A3A' : '#A0A0A8',
          fontWeight: active ? '600' : '400',
        }}
      >
        {label}
      </span>
      {active && (
        <div 
          className="rounded-full"
          style={{
            width: '4px',
            height: '4px',
            backgroundColor: '#1E2A3A',
          }}
        />
      )}
    </button>
  );
}