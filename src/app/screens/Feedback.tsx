import { ArrowLeft, Star } from 'lucide-react';
import { useNavigate } from 'react-router';
import { PhoneFrame } from '../components/PhoneFrame';
import { TabBar } from '../components/TabBar';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Feedback() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [comments, setComments] = useState('');

  const tags = [
    t('feedbackTagComfortable') as string,
    t('feedbackTagOnTime') as string,
    t('feedbackTagClean') as string,
    t('feedbackTagFriendly') as string,
    t('feedbackTagFast') as string,
    t('feedbackTagQuiet') as string,
  ];

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
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
          onClick={() => navigate('/')}
          className="p-2 -ml-2"
        >
          <ArrowLeft size={24} style={{ color: '#1E2A3A' }} />
        </button>

        {/* Title */}
        <h1 
          className="text-xl font-bold"
          style={{ color: '#1E2A3A' }}
        >
          {t('feedbackTitle') as string}
        </h1>
        
        {/* Empty space for alignment */}
        <div style={{ width: '40px' }} />
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 py-6 overflow-y-auto" style={{ height: 'calc(844px - 80px - 80px)' }}>
        {/* Section 1 - Rating Card */}
        <div 
          className="p-5 mb-4"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          }}
        >
          <h3 
            className="font-bold mb-4"
            style={{ color: '#1E2A3A', fontSize: '16px' }}
          >
            {t('feedbackHowSatisfied') as string}
          </h3>

          {/* Star Rating */}
          <div className="flex items-center gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="transition-all"
              >
                <Star 
                  size={36}
                  style={{ 
                    color: star <= rating ? '#FFC107' : '#D1D5DB',
                    fill: star <= rating ? '#FFC107' : 'none',
                    strokeWidth: 2,
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Section 2 - Tags Card */}
        <div 
          className="p-5 mb-4"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          }}
        >
          <h3 
            className="font-bold mb-4"
            style={{ color: '#1E2A3A', fontSize: '16px' }}
          >
            {t('feedbackWhatGood') as string}
          </h3>

          {/* Tag Chips */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className="px-4 py-2 transition-all"
                style={{
                  backgroundColor: selectedTags.includes(tag) ? '#F0B8B0' : '#FFFFFF',
                  color: selectedTags.includes(tag) ? '#1E2A3A' : '#6B7280',
                  border: `1px solid ${selectedTags.includes(tag) ? '#F0B8B0' : '#D1D5DB'}`,
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: selectedTags.includes(tag) ? '600' : '400',
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Section 3 - Text Area Card */}
        <div 
          className="p-5 mb-6"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E8',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          }}
        >
          <h3 
            className="font-bold mb-4"
            style={{ color: '#1E2A3A', fontSize: '16px' }}
          >
            {t('feedbackExtraComments') as string}
          </h3>

          {/* Text Area */}
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder={t('feedbackPlaceholder') as string}
            rows={5}
            className="w-full px-4 py-3 resize-none"
            style={{
              backgroundColor: '#F9FAFB',
              border: '1px solid #E5E7EB',
              borderRadius: '10px',
              color: '#1E2A3A',
              fontSize: '14px',
              outline: 'none',
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          className="w-full py-3 font-bold"
          style={{
            backgroundColor: '#F0B8B0',
            color: '#1E2A3A',
            borderRadius: '12px',
            fontSize: '16px',
          }}
          onClick={() => {
            // Handle form submission
            alert(t('feedbackThanks') as string);
            navigate('/');
          }}
        >
          {t('feedbackSubmit') as string}
        </button>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar activeTab="planner" />
    </PhoneFrame>
  );
}
