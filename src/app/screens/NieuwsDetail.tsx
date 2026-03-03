import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';

export default function NieuwsDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const newsData: Record<string, {
    emoji: string;
    iconBg: string;
    title: string;
    timestamp: string;
    content: string[];
    category: string;
  }> = {
    '1': {
      emoji: '🎢',
      iconBg: '#FFE8D4',
      title: 'De Waterval opent deze zomer!',
      timestamp: '3 uur geleden',
      category: 'Nieuwe attractie',
      content: [
        'Lake Side Mania is trots om De Waterval aan te kondigen - onze grootste waterattractie tot nu toe!',
        'Met een adembenemende val van 25 meter stormt je bootje naar beneden, waarbij je onderweg spectaculaire licht- en watereffecten ervaart.',
        'De attractie opent op 15 juni en belooft de perfecte verkoeling tijdens warme zomerdagen. Geschikt voor bezoekers vanaf 1.20m lengte.',
        'Early bird tickets zijn nu beschikbaar via de app. Boek je plek en wees een van de eersten om deze sensatie te ervaren!',
      ],
    },
    '2': {
      emoji: '🌙',
      iconBg: '#E8D4FF',
      title: 'Avondopenstelling dit weekend',
      timestamp: '5 uur geleden',
      category: 'Evenement',
      content: [
        'Dit weekend blijft Lake Side Mania extra lang open voor een magische avondervaring!',
        'Het park is toegankelijk tot 23:00 uur, waarbij alle attracties prachtig verlicht zijn met duizenden LED-lampjes.',
        'Het hoogtepunt van de avond is de spectaculaire vuurwerkshow om 22:30 uur boven het meer. Met muziek en special effects wordt dit een onvergetelijk moment.',
        'De shuttlebussen blijven doorrijden tot 23:30 uur, dus je kunt zorgeloos van deze bijzondere avond genieten.',
        'Tickets voor de avondopenstelling kosten €15 extra bovenop je dagticket.',
      ],
    },
    '3': {
      emoji: '🍕',
      iconBg: '#FFD4D4',
      title: 'Nieuw restaurant: Meerterras',
      timestamp: '1 dag geleden',
      category: 'Horeca',
      content: [
        'Welkom bij Meerterras - Lake Side Mania\'s nieuwste culinaire hotspot!',
        'Gelegen naast bushalte H3 Kruispunt, biedt dit restaurant een prachtig uitzicht op het meer terwijl je geniet van authentieke Italiaanse gerechten.',
        'Op het menu: verse pizza\'s uit de steenoven, pasta gemaakt met liefde, en verrukkelijke tiramisu als dessert.',
        'Het terras heeft 120 zitplaatsen en is voorzien van parasols en verwarming, waardoor je het hele seizoen comfortabel kunt dineren.',
        'Reserveren is mogelijk via de app. Tip: vraag om een tafeltje bij het raam tijdens zonsondergang!',
      ],
    },
    '4': {
      emoji: '🚌',
      iconBg: '#D4E4FF',
      title: 'Extra shuttlebussen ingezet',
      timestamp: '1 dag geleden',
      category: 'Service',
      content: [
        'Goed nieuws voor alle bezoekers: we hebben extra shuttlebussen ingezet!',
        'Door de grote toestroom van gasten deze week rijden er nu bussen om de 3 minuten in plaats van om de 5 minuten.',
        'Dit betekent kortere wachttijden bij alle haltes en meer comfort tijdens je parkbezoek.',
        'Alle bussen zijn uitgerust met airconditioning en hebben extra ruimte voor kinderwagens en rolstoelen.',
        'Bekijk de live buslocaties op je Plattegrond-scherm en plan je route optimaal!',
      ],
    },
    '5': {
      emoji: '🎭',
      iconBg: '#FFF4D4',
      title: 'Piratenshow om 15:00 uur',
      timestamp: '2 dagen geleden',
      category: 'Entertainment',
      content: [
        'Ahoy mateys! Captain Jack en zijn bemanning kapen vandaag Lake Side Mania!',
        'Om precies 15:00 uur begint de spectaculaire piratenshow bij het Dromenpark (halte H5).',
        'Verwacht epische zwaardgevechten, acrobatische stunts, en een schat aan humor. De show duurt ongeveer 30 minuten.',
        'Na afloop kun je foto\'s maken met de piraten en krijgen alle kinderen een gratis piratenvlag.',
        'Kom op tijd want de tribunes zitten vaak vol. De show wordt bij mooi weer ook op het water uitgevoerd!',
      ],
    },
    '6': {
      emoji: '☀️',
      iconBg: '#FFEDD4',
      title: 'Weerbericht: Perfect parkweer',
      timestamp: '3 dagen geleden',
      category: 'Info',
      content: [
        'Het weer werkt volledig mee voor een fantastische parkweek!',
        'De komende 7 dagen verwachten we temperaturen rond de 24°C met veel zonneperiodes en af en toe een wolkje.',
        'De kans op regen is minimaal, dus je kunt je zonnecrème inpakken en je paraplu thuislaten.',
        'Tips voor warm weer: drink voldoende water (gratis bij alle fonteinen), draag een pet, en bezoek onze waterattracties tijdens de warmste uren.',
        'De avondtemperatuur daalt naar een aangename 18°C - perfect voor de avondshows!',
      ],
    },
  };

  const news = id ? newsData[id] : null;

  if (!news) {
    return (
      <PhoneFrame>
        <div className="flex items-center justify-center h-full">
          <p style={{ color: '#6B7280' }}>Nieuwsbericht niet gevonden</p>
        </div>
      </PhoneFrame>
    );
  }

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
          onClick={() => navigate('/nieuws')}
          className="p-2 -ml-2"
        >
          <ArrowLeft size={24} style={{ color: '#1E2A3A' }} />
        </button>

        {/* Category Badge */}
        <div 
          className="px-3 py-1 rounded-full"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color: '#1E2A3A',
            fontSize: '12px',
            fontWeight: '600',
          }}
        >
          {news.category}
        </div>
        
        {/* Empty space for alignment */}
        <div style={{ width: '40px' }} />
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 py-6 overflow-y-auto" style={{ height: 'calc(844px - 80px - 80px)' }}>
        {/* Icon Header */}
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: news.iconBg,
              borderRadius: '16px',
              fontSize: '32px',
            }}
          >
            {news.emoji}
          </div>
          
          <div className="flex-1">
            <h1 
              className="font-bold mb-1"
              style={{ color: '#1E2A3A', fontSize: '20px', lineHeight: '1.3' }}
            >
              {news.title}
            </h1>
            <p style={{ color: '#9CA3AF', fontSize: '13px' }}>
              {news.timestamp}
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div 
          className="p-5"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          }}
        >
          {news.content.map((paragraph, index) => (
            <p 
              key={index}
              className={index < news.content.length - 1 ? 'mb-4' : ''}
              style={{ 
                color: '#4B5563', 
                fontSize: '15px',
                lineHeight: '1.6',
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share/Action Section */}
        <div className="mt-4 flex gap-3">
          <button
            className="flex-1 py-3 font-bold rounded-xl flex items-center justify-center gap-2"
            style={{
              backgroundColor: '#F0B8B0',
              color: '#2C3E50',
              fontSize: '15px',
            }}
          >
            📤 Delen
          </button>
          <button
            className="flex-1 py-3 font-bold rounded-xl flex items-center justify-center gap-2"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#2C3E50',
              border: '2px solid #E0E0E8',
              fontSize: '15px',
            }}
          >
            🔖 Opslaan
          </button>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar activeTab="nieuws" />
    </PhoneFrame>
  );
}
