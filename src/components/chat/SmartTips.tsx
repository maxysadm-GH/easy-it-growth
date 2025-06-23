
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
      className="px-4 py-3 border-t border-white/20 backdrop-blur-sm"
      style={{
        background: 'linear-gradient(135deg, rgba(250, 207, 57, 0.1), rgba(249, 195, 7, 0.05))',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Lightbulb className="w-4 h-4 text-navy" />
        <span className="text-xs font-semibold text-navy">💡 Smart Tip</span>
      </div>
      
      <div className="space-y-2">
        {tips.slice(0, 2).map((tip) => (
          <button
            key={tip.id}
            className="w-full text-left p-2 rounded-lg border border-white/20 transition-all duration-200 backdrop-blur-sm hover:scale-[1.02]"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
            onClick={() => onTipClick(tip)}
          >
            <div className="text-xs font-medium text-navy mb-1">{tip.title}</div>
            <div className="text-xs text-navy/80 line-clamp-2">{tip.content}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SmartTips;
