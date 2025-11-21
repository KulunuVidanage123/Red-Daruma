// SliderTitle.tsx
import React from 'react';

interface SliderTitleProps {
  color1?: string;
  color2?: string;
  highlightFirstWord?: boolean; // New prop for homepage-specific styling
}

const SliderTitle: React.FC<SliderTitleProps> = ({ 
  color1 = 'white', 
  color2 = 'white',
  highlightFirstWord = false
}) => {
  // Helper function to split text with special coloring for first word
  const renderHighlightedText = (text: string) => {
    const words = text.split(' ');
    if (words.length < 2 || !highlightFirstWord) return text;
    
    return (
      <>
        <span style={{ color: '#cc0000' }}>{words[0]}</span>
        <span style={{ color: '#000000' }}> {words.slice(1).join(' ')}</span>
      </>
    );
  };

  return (
    <div className="text-left max-w-none py-[1px] translate-y-[50px] sm:translate-y-[10px] md:translate-y-[15px] lg:translate-y-[20px]">
      <h1
        className="
          font-bold 
          text-[40px] 
          [@media(max-width:639px)]:text-[28px]
        "
        style={{
          fontFamily: 'Neuton, serif',
          lineHeight: '0.9',
          color: highlightFirstWord ? 'transparent' : color1, // Transparent when highlighting words
          whiteSpace: 'nowrap',
        }}
      >
        {renderHighlightedText("Forged by machines.")}
      </h1>

      <h1
        className="
          font-bold 
          text-[40px] 
          mt-1 
          [@media(max-width:639px)]:text-[28px]
        "
        style={{
          fontFamily: 'Neuton, serif',
          lineHeight: '0.9',
          color: highlightFirstWord ? 'transparent' : color2,
          whiteSpace: 'nowrap',
        }}
      >
        {renderHighlightedText("Favored by fortune.")}
      </h1>
    </div>
  );
};

export default SliderTitle;