import { useState } from 'react';
import { Wand2, Copy, Download, Eye } from 'lucide-react';

export default function ContentCreation() {
  const [trend, setTrend] = useState('AI Video Generation');
  const [tone, setTone] = useState('professional');
  const [length, setLength] = useState('60');
  const [targetAudience, setTargetAudience] = useState('general');
  const [generatedScript, setGeneratedScript] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const sampleScript = `[HOOK - 0:00-0:03]
"Want to create videos without filming? Here's how AI is changing everything."

[INTRO - 0:03-0:10]
AI video generation is transforming content creation. In 60 seconds, I'll show you the three best tools that are making waves right now.

[MAIN CONTENT - 0:10-0:45]
First: LovoArt - Creates studio-quality videos from text. Perfect for social media content.

Second: Runway ML - Industry standard for AI video editing. Used by major creators.

Third: Synthesia - AI avatars that speak your script. No camera needed.

[CALL TO ACTION - 0:45-0:60]
Which one will you try first? Comment below and follow for more AI tools that save you hours of work.

[VISUAL NOTES]
- Dynamic text overlays for each tool name
- Quick cuts every 5-7 seconds
- Trending audio track
- Captions throughout`;

  const handleGenerate = () => {
    setGeneratedScript(sampleScript);
  };

  const highlightSyntax = (text: string) => {
    return text
      .split('\n')
      .map((line, idx) => {
        if (line.startsWith('[') && line.includes(']')) {
          const parts = line.split(']');
          return (
            <div key={idx}>
              <span className="syntax-keyword">{parts[0]}]</span>
              {parts[1]}
            </div>
          );
        }
        if (line.startsWith('"')) {
          return (
            <div key={idx} className="syntax-string">
              {line}
            </div>
          );
        }
        if (line.startsWith('-')) {
          return (
            <div key={idx} className="syntax-comment">
              {line}
            </div>
          );
        }
        return <div key={idx}>{line}</div>;
      });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Content Creation</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Wand2 className="w-5 h-5 text-primary" aria-hidden="true" />
            Script Generator
          </h3>

          <div className="space-y-4">
            <div>
              <label htmlFor="trend-input" className="block text-sm font-medium text-gray-700 mb-2">
                Selected Trend
              </label>
              <input
                id="trend-input"
                type="text"
                value={trend}
                onChange={(e) => setTrend(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                aria-describedby="trend-help"
              />
              <p id="trend-help" className="text-xs text-gray-500 mt-1">
                Enter a trending topic or select from Trend Identification
              </p>
            </div>

            <div>
              <label htmlFor="tone-select" className="block text-sm font-medium text-gray-700 mb-2">
                Tone
              </label>
              <select
                id="tone-select"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
                <option value="humorous">Humorous</option>
                <option value="educational">Educational</option>
                <option value="inspirational">Inspirational</option>
              </select>
            </div>

            <div>
              <label htmlFor="length-input" className="block text-sm font-medium text-gray-700 mb-2">
                Length (seconds)
              </label>
              <input
                id="length-input"
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                min="15"
                max="180"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                aria-describedby="length-help"
              />
              <p id="length-help" className="text-xs text-gray-500 mt-1">
                Recommended: 15-60 seconds for shorts
              </p>
            </div>

            <div>
              <label htmlFor="audience-select" className="block text-sm font-medium text-gray-700 mb-2">
                Target Audience
              </label>
              <select
                id="audience-select"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="general">General</option>
                <option value="teens">Teens (13-19)</option>
                <option value="young-adults">Young Adults (20-35)</option>
                <option value="professionals">Professionals</option>
                <option value="parents">Parents</option>
              </select>
            </div>

            <button
              onClick={handleGenerate}
              className="btn-primary w-full flex items-center justify-center gap-2"
              aria-label="Generate script with GPT"
            >
              <Wand2 className="w-4 h-4" aria-hidden="true" />
              Generate Script with GPT
            </button>
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Generated Script</h3>
            {generatedScript && (
              <div className="flex gap-2">
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="p-2 text-primary hover:bg-blue-50 rounded"
                  aria-label="Toggle preview"
                >
                  <Eye className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  onClick={() => navigator.clipboard.writeText(generatedScript)}
                  className="p-2 text-primary hover:bg-blue-50 rounded"
                  aria-label="Copy script"
                >
                  <Copy className="w-4 h-4" aria-hidden="true" />
                </button>
                <button className="p-2 text-primary hover:bg-blue-50 rounded" aria-label="Download script">
                  <Download className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>

          {!generatedScript ? (
            <div className="flex items-center justify-center h-96 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <p className="text-gray-500">Configure parameters and click Generate to create a script</p>
            </div>
          ) : (
            <div className="script-editor" role="textbox" aria-label="Generated script content" tabIndex={0}>
              {highlightSyntax(generatedScript)}
            </div>
          )}
        </div>
      </div>

      {generatedScript && (
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">LovoArt Video Preview</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <Wand2 className="w-8 h-8" aria-hidden="true" />
                </div>
                <p className="text-lg font-semibold">AI Video Preview</p>
                <p className="text-sm text-gray-400 mt-2">Click Generate to create video</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Visual Customization</h4>
              <div>
                <label htmlFor="bg-style" className="block text-sm font-medium text-gray-700 mb-2">
                  Background Style
                </label>
                <select id="bg-style" className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                  <option>Modern Gradient</option>
                  <option>Minimalist White</option>
                  <option>Dark Tech</option>
                  <option>Colorful Abstract</option>
                </select>
              </div>

              <div>
                <label htmlFor="text-animation" className="block text-sm font-medium text-gray-700 mb-2">
                  Text Animation
                </label>
                <select id="text-animation" className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                  <option>Fade In</option>
                  <option>Slide Up</option>
                  <option>Typewriter</option>
                  <option>Bounce</option>
                </select>
              </div>

              <div>
                <label htmlFor="voice" className="block text-sm font-medium text-gray-700 mb-2">
                  Voice Selection
                </label>
                <select id="voice" className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                  <option>Professional Male</option>
                  <option>Professional Female</option>
                  <option>Energetic Young</option>
                  <option>Calm Narrator</option>
                </select>
              </div>

              <button className="btn-secondary w-full">Generate Video with LovoArt</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
