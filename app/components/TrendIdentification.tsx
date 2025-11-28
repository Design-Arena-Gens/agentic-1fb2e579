import { useState } from 'react';
import { ArrowUpDown, Search } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Trend {
  id: number;
  title: string;
  searchVolume: number;
  source: string;
  region: string;
  growth: number;
}

export default function TrendIdentification() {
  const [region, setRegion] = useState('Global');
  const [sortBy, setSortBy] = useState('searchVolume');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const trends: Trend[] = [
    { id: 1, title: 'AI Video Generation', searchVolume: 125000, source: 'Google Trends', region: 'Global', growth: 45 },
    { id: 2, title: 'Viral Dance Challenge', searchVolume: 98000, source: 'TikTok', region: 'US', growth: 78 },
    { id: 3, title: 'Tech Product Reviews', searchVolume: 87000, source: 'YouTube', region: 'Global', growth: 23 },
    { id: 4, title: 'Cooking Hacks 2024', searchVolume: 76000, source: 'Google Trends', region: 'EU', growth: 56 },
    { id: 5, title: 'Fitness Transformation', searchVolume: 65000, source: 'TikTok', region: 'US', growth: 34 },
    { id: 6, title: 'Travel Vlog Destinations', searchVolume: 54000, source: 'YouTube', region: 'Global', growth: 67 },
  ];

  const filteredTrends = trends
    .filter((trend) => region === 'Global' || trend.region === region)
    .sort((a, b) => {
      const aValue = a[sortBy as keyof Trend];
      const bValue = b[sortBy as keyof Trend];
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });

  const chartData = filteredTrends.slice(0, 5).map((trend) => ({
    name: trend.title.substring(0, 15) + '...',
    volume: trend.searchVolume / 1000,
  }));

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Trend Identification</h2>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search trends..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              aria-label="Search trends"
            />
          </div>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            aria-label="Filter by region"
          >
            <option value="Global">Global</option>
            <option value="US">United States</option>
            <option value="EU">Europe</option>
          </select>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Search Volume Overview</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Volume (K)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="volume" fill="#3498db" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="table" role="table" aria-label="Trending topics">
            <thead>
              <tr>
                <th>
                  <button
                    onClick={() => handleSort('title')}
                    className="flex items-center gap-2 hover:text-primary"
                    aria-label="Sort by title"
                  >
                    Title
                    <ArrowUpDown className="w-4 h-4" aria-hidden="true" />
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleSort('searchVolume')}
                    className="flex items-center gap-2 hover:text-primary"
                    aria-label="Sort by search volume"
                  >
                    Search Volume
                    <ArrowUpDown className="w-4 h-4" aria-hidden="true" />
                  </button>
                </th>
                <th>Volume Chart</th>
                <th>
                  <button
                    onClick={() => handleSort('source')}
                    className="flex items-center gap-2 hover:text-primary"
                    aria-label="Sort by source"
                  >
                    Source
                    <ArrowUpDown className="w-4 h-4" aria-hidden="true" />
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleSort('growth')}
                    className="flex items-center gap-2 hover:text-primary"
                    aria-label="Sort by growth"
                  >
                    Growth
                    <ArrowUpDown className="w-4 h-4" aria-hidden="true" />
                  </button>
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrends.map((trend) => (
                <tr key={trend.id}>
                  <td className="font-medium">{trend.title}</td>
                  <td>{trend.searchVolume.toLocaleString()}</td>
                  <td>
                    <div className="w-32 bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${(trend.searchVolume / 125000) * 100}%` }}
                        role="progressbar"
                        aria-valuenow={trend.searchVolume}
                        aria-valuemin={0}
                        aria-valuemax={125000}
                        aria-label={`Search volume: ${trend.searchVolume}`}
                      ></div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        trend.source === 'TikTok'
                          ? 'bg-pink-100 text-pink-700'
                          : trend.source === 'YouTube'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {trend.source}
                    </span>
                  </td>
                  <td>
                    <span className="text-secondary font-semibold">+{trend.growth}%</span>
                  </td>
                  <td>
                    <button
                      className="btn-primary text-sm"
                      aria-label={`Analyze ${trend.title}`}
                    >
                      Analyze
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
