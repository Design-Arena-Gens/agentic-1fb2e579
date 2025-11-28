import { useState } from 'react';
import { Play, Scissors, Plus, Type, Sparkles, Download } from 'lucide-react';

interface Clip {
  id: number;
  title: string;
  source: string;
  duration: string;
  thumbnail: string;
}

export default function VideoClipping() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClip, setSelectedClip] = useState<Clip | null>(null);
  const [startTime, setStartTime] = useState('0:00');
  const [endTime, setEndTime] = useState('0:15');
  const [addCaptions, setAddCaptions] = useState(true);

  const clips: Clip[] = [
    {
      id: 1,
      title: 'MrBeast - Extreme Challenge Reaction',
      source: 'YouTube - MrBeast',
      duration: '2:34',
      thumbnail: 'mrbeast-1',
    },
    {
      id: 2,
      title: 'Joe Rogan - AI Discussion',
      source: 'Podcast - JRE #2041',
      duration: '4:12',
      thumbnail: 'jre-1',
    },
    {
      id: 3,
      title: 'Tech Review - Latest Gadget',
      source: 'YouTube - MKBHD',
      duration: '1:45',
      thumbnail: 'mkbhd-1',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Video Clipping</h2>
      </div>

      <div className="card">
        <div className="mb-4">
          <label htmlFor="search-clips" className="block text-sm font-medium text-gray-700 mb-2">
            Search Popular Videos
          </label>
          <div className="flex gap-2">
            <input
              id="search-clips"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search MrBeast, podcasts, trending videos..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
              aria-describedby="search-help"
            />
            <button className="btn-primary px-6" aria-label="Search videos">
              Search
            </button>
          </div>
          <p id="search-help" className="text-xs text-gray-500 mt-2">
            🔒 Includes proper attribution and compliance with content usage rights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {clips.map((clip) => (
            <div
              key={clip.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedClip(clip)}
              role="button"
              tabIndex={0}
              aria-label={`Select ${clip.title}`}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedClip(clip);
              }}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center">
                <Play className="w-12 h-12 text-white" aria-hidden="true" />
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-sm mb-1">{clip.title}</h4>
                <p className="text-xs text-gray-500">{clip.source}</p>
                <p className="text-xs text-gray-500 mt-1">Duration: {clip.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedClip && (
        <div className="card">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Scissors className="w-5 h-5 text-primary" aria-hidden="true" />
            Clip Editor - {selectedClip.title}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm">Video Player</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Waveform Timeline
                  </label>
                  <div className="waveform relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 w-0.5 h-full" style={{ left: '20%' }}></div>
                      <div className="bg-white/20 w-0.5 h-full" style={{ left: '60%' }}></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2" id="waveform-help">
                    Drag handles to select clip region
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="start-time" className="block text-sm font-medium text-gray-700 mb-2">
                      Start Time
                    </label>
                    <input
                      id="start-time"
                      type="text"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="end-time" className="block text-sm font-medium text-gray-700 mb-2">
                      End Time
                    </label>
                    <input
                      id="end-time"
                      type="text"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="btn-primary flex-1 flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" aria-hidden="true" />
                    Preview Clip
                  </button>
                  <button className="btn-secondary flex-1 flex items-center justify-center gap-2">
                    <Scissors className="w-4 h-4" aria-hidden="true" />
                    Extract Clip
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Enhancements</h4>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Type className="w-5 h-5 text-primary" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Auto Captions</p>
                      <p className="text-xs text-gray-500">Generate captions with perfect timing</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addCaptions}
                      onChange={(e) => setAddCaptions(e.target.checked)}
                      className="sr-only peer"
                      aria-label="Toggle auto captions"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
                    <p className="font-medium">Visual Effects</p>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-primary" />
                      <span className="text-sm">Zoom effects on key moments</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-primary" />
                      <span className="text-sm">Add trending transitions</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-primary" />
                      <span className="text-sm">Background music overlay</span>
                    </label>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <label htmlFor="caption-style" className="block font-medium mb-2">
                    Caption Style
                  </label>
                  <select id="caption-style" className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                    <option>Bold White with Black Outline</option>
                    <option>Animated Word Highlight</option>
                    <option>Modern Minimal</option>
                    <option>TikTok Style</option>
                  </select>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm font-medium text-gray-800 mb-2">Attribution</p>
                  <p className="text-xs text-gray-600">
                    Source: {selectedClip.source}<br />
                    This clip will include proper attribution as required by content usage policies.
                  </p>
                </div>

                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Export Finished Clip
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
