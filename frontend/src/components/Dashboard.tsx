import React from 'react';
import {
  ChartBarIcon,
  CalendarIcon,
  DocumentIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

const stats = [
  { name: 'Upcoming Appointments', stat: '2', icon: CalendarIcon },
  { name: 'Pending Documents', stat: '3', icon: DocumentIcon },
  { name: 'Health Score', stat: '92%', icon: ChartBarIcon },
  { name: 'Alerts', stat: '1', icon: ExclamationCircleIcon },
];

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Welcome back, Student
      </h2>

      {/* Stats */}
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
            </dd>
          </div>
        ))}
      </dl>

      {/* Recent Activity */}
      <div className="mt-8">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Recent Activity
        </h3>
        <div className="mt-4 overflow-hidden bg-white shadow sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {[
              {
                title: 'Medical Certificate Generated',
                date: '2 hours ago',
                type: 'document',
              },
              {
                title: 'Appointment Scheduled',
                date: '1 day ago',
                type: 'appointment',
              },
              {
                title: 'Health Record Updated',
                date: '2 days ago',
                type: 'record',
              },
            ].map((activity, idx) => (
              <li key={idx}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-sm font-medium text-indigo-600">
                      {activity.title}
                    </p>
                    <div className="ml-2 flex flex-shrink-0">
                      <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        {activity.type}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <div className="sm:flex">
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* AI Health Insights */}
      <div className="mt-8">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          AI Health Insights
        </h3>
        <div className="mt-4 rounded-lg bg-white shadow p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <ChartBarIcon
                className="h-6 w-6 text-indigo-600"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h4 className="text-base font-medium text-gray-900">
                Your Health Trend
              </h4>
              <p className="mt-2 text-sm text-gray-500">
                Based on your recent health data, your overall health score has
                improved by 5% this month. Keep up the good work with regular
                exercise and proper medication adherence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
