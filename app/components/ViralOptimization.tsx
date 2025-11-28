import { useState } from 'react';
import { Zap, TrendingUp, Hash, Target, BarChart3, Lightbulb } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ViralOptimization() {
  const [selectedVideo, setSelectedVideo] = useState('AI Video Generation Tips');

  const performanceData = [
    { date: 'Day 1', views: 1200, likes: 89, shares: 23 },
    { date: 'Day 2', views: 3400, likes: 245, shares: 67 },
    { date: 'Day 3', views: 8900, likes: 678, shares: 156 },
    { date: 'Day 4', views: 15600, likes: 1234, shares: 289 },
    { date: 'Day 5', views: 23400, likes: 1890, shares: 445 },
    { date: 'Day 6', views: 31200, likes: 2456, shares: 567 },
    { date: 'Day 7', views: 45000, likes: 3567, shares: 789 },
  ];

  const hashtagPerformance = [
    { tag: '#ai', engagement: 8500, reach: 125000 },
    { tag: '#viral', engagement: 7200, reach: 98000 },
    { tag: '#tutorial', engagement: 6800, reach: 87000 },
    { tag: '#trending', engagement: 5900, reach: 76000 },
    { tag: '#fyp', engagement: 9200, reach: 145000 },
  ];

  const recommendations = [
    {
      id: 1,
      type: 'Title Optimization',
      suggestion: 'Add numbers and urgency',
      example: '"5 AI Tools That Will Change Your Life in 2024"',
      impact: '+35% CTR',
      icon: Target,
    },
    {
      id: 2,
      type: 'Hashtag Strategy',
      suggestion: 'Use trending + niche hashtags',
      example: '#ai #fyp #techtutor #viral2024',
      impact: '+48% Reach',
      icon: Hash,
    },
    {
      id: 3,
      type: 'Posting Time',
      suggestion: 'Post at 9AM or 6PM for max engagement',
      example: 'Peak audience activity detected',
      impact: '+27% Initial Views',
      icon: TrendingUp,
    },
    {
      id: 4,
      type: 'Hook Optimization',
      suggestion: 'Start with a question or bold statement',
      example: '"You\'re using AI wrong - here\'s why"',
      impact: '+42% Watch Time',
      icon: Zap,
    },
  ];

  const abTests = [
    {
      id: 1,
      element: 'Title',
      variantA: 'AI Video Tools You Need',
      variantB: '5 AI Tools That Went Viral',
      winnerA: 3400,
      winnerB: 5800,
      winner: 'B',
    },
    {
      id: 2,
      element: 'Thumbnail',
      variantA: 'Person facing camera',
      variantB: 'Bold text + graphics',
      winnerA: 4200,
      winnerB: 7600,
      winner: 'B',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Viral Optimization</h2>
        <select
          value={selectedVideo}
          onChange={(e) => setSelectedVideo(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          aria-label="Select video to analyze"
        >
          <option>AI Video Generation Tips</option>
          <option>Viral Dance Tutorial</option>
          <option>Tech Review Highlights</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-semibold">Total Views</p>
              <p className="text-3xl font-bold text-primary">45.0K</p>
              <p className="text-xs text-secondary mt-1">↑ 156% vs avg</p>
            </div>
            <BarChart3 className="w-10 h-10 text-primary opacity-50" aria-hidden="true" />
          </div>
        </div>

        <div className="card bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-semibold">Engagement Rate</p>
              <p className="text-3xl font-bold text-secondary">7.9%</p>
              <p className="text-xs text-secondary mt-1">↑ 2.3% vs avg</p>
            </div>
            <TrendingUp className="w-10 h-10 text-secondary opacity-50" aria-hidden="true" />
          </div>
        </div>

        <div className="card bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-semibold">Shares</p>
              <p className="text-3xl font-bold text-purple-600">789</p>
              <p className="text-xs text-secondary mt-1">↑ 89% vs avg</p>
            </div>
            <Zap className="w-10 h-10 text-purple-600 opacity-50" aria-hidden="true" />
          </div>
        </div>

        <div className="card bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-semibold">Viral Score</p>
              <p className="text-3xl font-bold text-orange-600">8.7</p>
              <p className="text-xs text-secondary mt-1">Top 5% content</p>
            </div>
            <Target className="w-10 h-10 text-orange-600 opacity-50" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="views" stroke="#3498db" strokeWidth={2} name="Views" />
            <Line type="monotone" dataKey="likes" stroke="#2ecc71" strokeWidth={2} name="Likes" />
            <Line type="monotone" dataKey="shares" stroke="#9b59b6" strokeWidth={2} name="Shares" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Hash className="w-5 h-5 text-primary" aria-hidden="true" />
            Hashtag Analysis
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={hashtagPerformance} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="tag" type="category" width={80} />
              <Tooltip />
              <Legend />
              <Bar dataKey="engagement" fill="#3498db" name="Engagement" />
              <Bar dataKey="reach" fill="#2ecc71" name="Reach" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm font-semibold text-gray-800 mb-1">Recommended Mix</p>
            <p className="text-xs text-gray-600">
              3 trending tags + 2 niche tags + 2 branded tags for optimal reach
            </p>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" aria-hidden="true" />
            Optimization Recommendations
          </h3>
          <div className="space-y-3">
            {recommendations.map((rec) => {
              const Icon = rec.icon;
              return (
                <div key={rec.id} className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-sm">{rec.type}</h4>
                        <span className="text-xs font-bold text-secondary">{rec.impact}</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{rec.suggestion}</p>
                      <p className="text-xs bg-white p-2 rounded border border-gray-200 font-mono">
                        {rec.example}
                      </p>
                      <button className="mt-2 text-xs text-primary font-semibold hover:underline">
                        Apply This Optimization →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-4">A/B Test Results</h3>
        <div className="space-y-4">
          {abTests.map((test) => (
            <div key={test.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-3">{test.element} Test</h4>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className={`p-3 rounded-lg border-2 ${
                    test.winner === 'A'
                      ? 'bg-green-50 border-secondary'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-semibold">Variant A</span>
                    {test.winner === 'A' && (
                      <span className="text-xs bg-secondary text-white px-2 py-0.5 rounded-full">
                        Winner
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{test.variantA}</p>
                  <p className="text-lg font-bold text-primary">{test.winnerA.toLocaleString()} clicks</p>
                </div>

                <div
                  className={`p-3 rounded-lg border-2 ${
                    test.winner === 'B'
                      ? 'bg-green-50 border-secondary'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-semibold">Variant B</span>
                    {test.winner === 'B' && (
                      <span className="text-xs bg-secondary text-white px-2 py-0.5 rounded-full">
                        Winner
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{test.variantB}</p>
                  <p className="text-lg font-bold text-primary">{test.winnerB.toLocaleString()} clicks</p>
                </div>
              </div>
              <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-gray-700">
                <strong>Insight:</strong> Variant {test.winner} performed{' '}
                {Math.round(
                  ((test.winner === 'B' ? test.winnerB - test.winnerA : test.winnerA - test.winnerB) /
                    (test.winner === 'B' ? test.winnerA : test.winnerB)) *
                    100
                )}
                % better. Use similar strategies for future content.
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button className="btn-primary w-full">Create New A/B Test</button>
        </div>
      </div>

      <div className="card bg-gradient-to-r from-blue-50 to-green-50 border-2 border-primary">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary" aria-hidden="true" />
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all text-left">
            <p className="font-semibold text-sm mb-1">Generate Viral Hooks</p>
            <p className="text-xs text-gray-600">AI-powered attention grabbers</p>
          </button>
          <button className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all text-left">
            <p className="font-semibold text-sm mb-1">Optimize Thumbnails</p>
            <p className="text-xs text-gray-600">Test 5 variations instantly</p>
          </button>
          <button className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all text-left">
            <p className="font-semibold text-sm mb-1">Keyword Research</p>
            <p className="text-xs text-gray-600">Find trending search terms</p>
          </button>
        </div>
      </div>
    </div>
  );
}
