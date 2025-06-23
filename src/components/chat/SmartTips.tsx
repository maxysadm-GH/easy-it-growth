
import React from 'react';
import { Lightbulb } from 'lucide-react';

interface SmartTip {
  id: string;
  title: string;
  content: string;
  action: string;
  category: string;
}

interface SmartTipsProps {
  tips: SmartTip[];
  onTipClick: (tip: SmartTip) => void;
  isVisible: boolean;
}

const SmartTips: React.FC<SmartTipsProps> = ({ tips, onTipClick, isVisible }) => {
  if (!isVisible || tips.length === 0) return null;

  return (
    <div 
      className="px-4 py-3 border-t border-white/20"
      style={{
        background: 'rgba(250, 207, 57, 0.12)',
        backdropFilter: 'blur(15px) saturate(150%)'
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Lightbulb 
          className="w-4 h-4" 
          style={{ color: 'rgba(17, 45, 78, 0.8)' }}
        />
        <span 
          className="text-xs font-semibold"
          style={{ 
            color: 'rgba(17, 45, 78, 0.9)',
            textShadow: '0 1px 1px rgba(255, 255, 255, 0.3)'
          }}
        >
          💡 Smart Tip
        </span>
      </div>
      
      <div className="space-y-2">
        {tips.slice(0, 2).map((tip) => (
          <button
            key={tip.id}
            className="w-full text-left p-2 rounded-lg border transition-all duration-200"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(15px) saturate(150%)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}
            onClick={() => onTipClick(tip)}
          >
            <div 
              className="text-xs font-medium mb-1"
              style={{ 
                color: 'rgba(17, 45, 78, 0.95)',
                textShadow: '0 1px 1px rgba(255, 255, 255, 0.3)'
              }}
            >
              {tip.title}
            </div>
            <div 
              className="text-xs line-clamp-2"
              style={{ 
                color: 'rgba(17, 45, 78, 0.8)',
                textShadow: '0 1px 1px rgba(255, 255, 255, 0.2)'
              }}
            >
              {tip.content}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SmartTips;
