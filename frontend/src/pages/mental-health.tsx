import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { HeartIcon, BoltIcon, SparklesIcon } from '@heroicons/react/24/outline';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MoodLog {
  date: string;
  mood: number;
  stress: number;
  notes: string;
}

export default function MentalHealth() {
  const [moodLogs] = useState<MoodLog[]>([
    { date: '2025-02-15', mood: 8, stress: 3, notes: 'Feeling energetic and positive' },
    { date: '2025-02-16', mood: 7, stress: 4, notes: 'Good day overall' },
    { date: '2025-02-17', mood: 6, stress: 6, notes: 'Busy with assignments' },
    { date: '2025-02-18', mood: 7, stress: 5, notes: 'Regular day' },
    { date: '2025-02-19', mood: 8, stress: 3, notes: 'Productive day' },
    { date: '2025-02-20', mood: 9, stress: 2, notes: 'Great day!' },
    { date: '2025-02-21', mood: 8, stress: 4, notes: 'Feeling good' },
  ]);

  const chartData = {
    labels: moodLogs.map(log => log.date),
    datasets: [
      {
        label: 'Mood Score',
        data: moodLogs.map(log => log.mood),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
      {
        label: 'Stress Level',
        data: moodLogs.map(log => log.stress),
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Mood and Stress Trends',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
      },
    },
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">Mental Health Tracker</h1>
          <p className="mt-2 text-sm text-gray-700">
            Monitor your mental well-being and track your mood patterns over time.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Log Today's Mood
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm">
          <div className="flex-shrink-0">
            <HeartIcon className="h-10 w-10 text-pink-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900">Average Mood</p>
            <p className="text-2xl font-bold text-gray-500">7.5/10</p>
          </div>
        </div>

        <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm">
          <div className="flex-shrink-0">
            <BoltIcon className="h-10 w-10 text-yellow-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900">Stress Level</p>
            <p className="text-2xl font-bold text-gray-500">Low</p>
          </div>
        </div>

        <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm">
          <div className="flex-shrink-0">
            <SparklesIcon className="h-10 w-10 text-purple-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900">Streak</p>
            <p className="text-2xl font-bold text-gray-500">7 Days</p>
          </div>
        </div>
      </div>

      {/* Mood Chart */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <Line options={chartOptions} data={chartData} />
      </div>

      {/* AI Recommendations */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">AI-Powered Recommendations</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="text-base font-semibold text-blue-900">Wellness Activities</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-blue-700">
                <span className="mr-2">•</span>
                Try a 10-minute meditation session
              </li>
              <li className="flex items-center text-blue-700">
                <span className="mr-2">•</span>
                Take a short walk outside
              </li>
              <li className="flex items-center text-blue-700">
                <span className="mr-2">•</span>
                Practice deep breathing exercises
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-green-50 p-6">
            <h3 className="text-base font-semibold text-green-900">Mood Boosters</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-green-700">
                <span className="mr-2">•</span>
                Connect with a friend
              </li>
              <li className="flex items-center text-green-700">
                <span className="mr-2">•</span>
                Listen to uplifting music
              </li>
              <li className="flex items-center text-green-700">
                <span className="mr-2">•</span>
                Write in your gratitude journal
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mood Log History */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Recent Mood Logs</h2>
        <div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Mood</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Stress</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {moodLogs.map((log, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900">
                    {log.date}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      {log.mood}/10
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                      {log.stress}/10
                    </span>
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">{log.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
