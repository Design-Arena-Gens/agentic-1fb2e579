import { useState } from 'react';
import { Calendar as CalendarIcon, Upload, FileSpreadsheet, Clock } from 'lucide-react';
import { format, addDays, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';

interface ScheduledVideo {
  id: number;
  title: string;
  date: Date;
  time: string;
  platform: 'TikTok' | 'YouTube Shorts';
  status: 'scheduled' | 'published';
}

export default function Scheduling() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const scheduledVideos: ScheduledVideo[] = [
    { id: 1, title: 'AI Video Generation Tips', date: new Date(), time: '09:00', platform: 'TikTok', status: 'scheduled' },
    { id: 2, title: 'Viral Dance Tutorial', date: new Date(), time: '18:00', platform: 'YouTube Shorts', status: 'scheduled' },
    { id: 3, title: 'Tech Review Highlights', date: addDays(new Date(), 1), time: '09:00', platform: 'TikTok', status: 'scheduled' },
    { id: 4, title: 'Cooking Hack Compilation', date: addDays(new Date(), 1), time: '18:00', platform: 'YouTube Shorts', status: 'scheduled' },
  ];

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getVideosForDate = (date: Date) => {
    return scheduledVideos.filter((video) => isSameDay(video.date, date));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Scheduling & Uploading</h2>
        <div className="flex gap-3">
          <button className="btn-primary flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4" aria-hidden="true" />
            Connect Google Sheets
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="btn-secondary flex items-center gap-2"
          >
            <Upload className="w-4 h-4" aria-hidden="true" />
            Schedule Video
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-primary" aria-hidden="true" />
              {format(currentDate, 'MMMM yyyy')}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentDate(addDays(currentDate, -30))}
                className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50"
                aria-label="Previous month"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentDate(addDays(currentDate, 30))}
                className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50"
                aria-label="Next month"
              >
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                {day}
              </div>
            ))}

            {daysInMonth.map((day) => {
              const videosOnDay = getVideosForDate(day);
              const isToday = isSameDay(day, new Date());
              const isSelected = selectedDate && isSameDay(day, selectedDate);

              return (
                <button
                  key={day.toISOString()}
                  onClick={() => setSelectedDate(day)}
                  className={`aspect-square p-2 rounded-lg border transition-all ${
                    isToday
                      ? 'border-primary bg-blue-50'
                      : isSelected
                      ? 'border-primary bg-blue-100'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                  aria-label={`${format(day, 'MMMM d, yyyy')} - ${videosOnDay.length} videos scheduled`}
                >
                  <div className="text-sm font-medium">{format(day, 'd')}</div>
                  {videosOnDay.length > 0 && (
                    <div className="flex gap-1 mt-1 justify-center">
                      {videosOnDay.map((video) => (
                        <div
                          key={video.id}
                          className={`w-1.5 h-1.5 rounded-full ${
                            video.platform === 'TikTok' ? 'bg-pink-500' : 'bg-red-500'
                          }`}
                          aria-hidden="true"
                        ></div>
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pink-500"></div>
              <span>TikTok</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span>YouTube Shorts</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Upcoming Uploads</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {scheduledVideos.map((video) => (
              <div
                key={video.id}
                className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-sm">{video.title}</h4>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      video.platform === 'TikTok'
                        ? 'bg-pink-100 text-pink-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {video.platform}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  <span>{format(video.date, 'MMM d')}</span>
                  <span>•</span>
                  <span>{video.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FileSpreadsheet className="w-5 h-5 text-primary" aria-hidden="true" />
          Google Sheets Integration
        </h3>

        <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
          <div className="text-center">
            <FileSpreadsheet className="w-12 h-12 mx-auto text-gray-400 mb-3" aria-hidden="true" />
            <p className="text-gray-600 mb-4">
              Connect your Google Sheets to manage content, scripts, and scheduling data
            </p>
            <button className="btn-primary">Connect Google Sheets</button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold mb-2">Content Library</h4>
            <p className="text-sm text-gray-600">Store all generated scripts and video metadata</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold mb-2">Schedule Manager</h4>
            <p className="text-sm text-gray-600">Plan posting times and track performance</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold mb-2">Analytics Dashboard</h4>
            <p className="text-sm text-gray-600">Monitor views, engagement, and trends</p>
          </div>
        </div>
      </div>

      {showAddModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
        >
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <h3 id="modal-title" className="text-xl font-bold mb-4">
              Schedule New Video
            </h3>

            <div className="space-y-4">
              <div>
                <label htmlFor="video-title" className="block text-sm font-medium text-gray-700 mb-2">
                  Video Title
                </label>
                <input
                  id="video-title"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter video title..."
                />
              </div>

              <div>
                <label htmlFor="video-description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="video-description"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter video description..."
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="video-platform" className="block text-sm font-medium text-gray-700 mb-2">
                    Platform
                  </label>
                  <select id="video-platform" className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                    <option>TikTok</option>
                    <option>YouTube Shorts</option>
                    <option>Both</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="video-frequency" className="block text-sm font-medium text-gray-700 mb-2">
                    Frequency
                  </label>
                  <select id="video-frequency" className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                    <option>Once</option>
                    <option>Daily</option>
                    <option>Twice Daily (9AM & 6PM)</option>
                    <option>Weekly</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="video-date" className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    id="video-date"
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="video-time" className="block text-sm font-medium text-gray-700 mb-2">
                    Time
                  </label>
                  <input
                    id="video-time"
                    type="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="video-tags" className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma separated)
                </label>
                <input
                  id="video-tags"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="ai, tutorial, trending..."
                />
              </div>

              <div>
                <label htmlFor="video-thumbnail" className="block text-sm font-medium text-gray-700 mb-2">
                  Thumbnail
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" aria-hidden="true" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 btn-primary"
                >
                  Schedule Video
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
