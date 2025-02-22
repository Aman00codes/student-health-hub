import { useState } from 'react';
import { CalendarDaysIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

interface Appointment {
  id: number;
  date: string;
  time: string;
  doctor: string;
  department: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  type: string;
}

export default function Appointments() {
  const [appointments] = useState<Appointment[]>([
    {
      id: 1,
      date: '2025-02-25',
      time: '10:00 AM',
      doctor: 'Dr. Sarah Smith',
      department: 'General Medicine',
      status: 'scheduled',
      type: 'Regular Checkup',
    },
    {
      id: 2,
      date: '2025-02-28',
      time: '2:30 PM',
      doctor: 'Dr. John Doe',
      department: 'Dentistry',
      status: 'scheduled',
      type: 'Dental Cleaning',
    },
  ]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">Appointments</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your upcoming and past medical appointments.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Book New Appointment
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm">
          <div className="flex-shrink-0">
            <CalendarDaysIcon className="h-10 w-10 text-indigo-600" />
          </div>
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none">
              <p className="text-sm font-medium text-gray-900">Next Appointment</p>
              <p className="truncate text-sm text-gray-500">Feb 25, 10:00 AM</p>
            </a>
          </div>
        </div>

        <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm">
          <div className="flex-shrink-0">
            <UserIcon className="h-10 w-10 text-indigo-600" />
          </div>
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none">
              <p className="text-sm font-medium text-gray-900">Your Doctor</p>
              <p className="truncate text-sm text-gray-500">Dr. Sarah Smith</p>
            </a>
          </div>
        </div>

        <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm">
          <div className="flex-shrink-0">
            <ClockIcon className="h-10 w-10 text-indigo-600" />
          </div>
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none">
              <p className="text-sm font-medium text-gray-900">Wait Time</p>
              <p className="truncate text-sm text-gray-500">Estimated: 10 mins</p>
            </a>
          </div>
        </div>
      </div>

      {/* Appointments List */}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Date & Time
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Doctor
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Department
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Type
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {appointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">
                        <div className="font-medium">{appointment.date}</div>
                        <div className="text-gray-500">{appointment.time}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {appointment.doctor}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {appointment.department}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {appointment.type}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            appointment.status === 'scheduled'
                              ? 'bg-green-100 text-green-800'
                              : appointment.status === 'completed'
                              ? 'bg-gray-100 text-gray-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                          Reschedule
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
