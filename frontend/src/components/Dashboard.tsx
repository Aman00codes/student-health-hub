import React from 'react';
import {
  ChartBarIcon,
  CalendarIcon,
  DocumentIcon,
  ExclamationCircleIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Avatar } from './ui/Avatar';

const stats = [
  {
    name: 'Upcoming Appointments',
    stat: '2',
    icon: CalendarIcon,
    color: 'bg-blue-500',
    trend: '+1 from last week'
  },
  {
    name: 'Health Score',
    stat: '92%',
    icon: HeartIcon,
    color: 'bg-green-500',
    trend: '5% this month'
  },
  {
    name: 'Mental Wellness',
    stat: '85%',
    icon: ChartBarIcon,
    color: 'bg-purple-500',
    trend: 'Stable'
  },
  {
    name: 'Active Alerts',
    stat: '1',
    icon: ExclamationCircleIcon,
    color: 'bg-amber-500',
    trend: 'Medication reminder'
  },
];

const recentActivity = [
  {
    type: 'appointment',
    title: 'General Checkup',
    date: 'Tomorrow at 10:00 AM',
    status: 'upcoming',
  },
  {
    type: 'record',
    title: 'Blood Test Results',
    date: 'Added yesterday',
    status: 'new',
  },
  {
    type: 'mental',
    title: 'Wellness Check',
    date: '2 days ago',
    status: 'completed',
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, Alex
          </h1>
          <p className="mt-1 text-gray-500">
            Here's an overview of your health status
          </p>
        </div>
        <Button
          variant="primary"
          icon={<CalendarIcon className="h-5 w-5" />}
        >
          New Appointment
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <Card key={item.name} hover className="transform transition-all duration-200">
            <CardContent>
              <div className="flex items-center justify-between">
                <div className={`${item.color} p-3 rounded-lg`}>
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <ArrowTrendingUpIcon className="h-6 w-6 text-green-500" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">{item.stat}</p>
                <p className="text-sm text-gray-500 mt-2">{item.trend}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
              <Button variant="ghost" size="sm">
                View all
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flow-root">
              <ul role="list" className="-mb-8">
                {recentActivity.map((activity, idx) => (
                  <li key={activity.title}>
                    <div className="relative pb-8">
                      {idx !== recentActivity.length - 1 && (
                        <span
                          className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      )}
                      <div className="relative flex items-start space-x-3">
                        <div>
                          <div className={`
                            relative px-1
                            ${activity.type === 'appointment' ? 'bg-blue-100' : ''}
                            ${activity.type === 'record' ? 'bg-green-100' : ''}
                            ${activity.type === 'mental' ? 'bg-purple-100' : ''}
                            rounded-full
                          `}>
                            {activity.type === 'appointment' && (
                              <CalendarIcon className="h-5 w-5 text-blue-600" />
                            )}
                            {activity.type === 'record' && (
                              <DocumentIcon className="h-5 w-5 text-green-600" />
                            )}
                            {activity.type === 'mental' && (
                              <ChartBarIcon className="h-5 w-5 text-purple-600" />
                            )}
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <div className="text-sm">
                              <a href="#" className="font-medium text-gray-900">
                                {activity.title}
                              </a>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">{activity.date}</p>
                          </div>
                          <div className="mt-2">
                            <Badge
                              variant={
                                activity.status === 'upcoming' ? 'info' :
                                  activity.status === 'new' ? 'success' :
                                    'default'
                              }
                              size="sm"
                            >
                              {activity.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}