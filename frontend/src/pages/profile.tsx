import { useState } from 'react';
import {
  UserCircleIcon,
  BellIcon,
  ShieldCheckIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';

interface UserProfile {
  fullName: string;
  email: string;
  studentId: string;
  dateOfBirth: string;
  bloodGroup: string;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  allergies: string[];
  notifications: {
    email: boolean;
    sms: boolean;
    appointments: boolean;
    reports: boolean;
  };
}

export default function Profile() {
  const [profile] = useState<UserProfile>({
    fullName: 'John Doe',
    email: 'john.doe@university.edu',
    studentId: '2025CS001',
    dateOfBirth: '2000-01-01',
    bloodGroup: 'O+',
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Parent',
      phone: '+1 (555) 123-4567',
    },
    allergies: ['Penicillin', 'Peanuts'],
    notifications: {
      email: true,
      sms: true,
      appointments: true,
      reports: false,
    },
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">Profile Settings</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your personal information and preferences.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Personal Information */}
        <div className="col-span-2 bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    value={profile.fullName}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="student-id" className="block text-sm font-medium text-gray-700">
                  Student ID
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="student-id"
                    id="student-id"
                    value={profile.studentId}
                    disabled
                    className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={profile.email}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="blood-group" className="block text-sm font-medium text-gray-700">
                  Blood Group
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="blood-group"
                    id="blood-group"
                    value={profile.bloodGroup}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">
                  Allergies
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="allergies"
                    id="allergies"
                    value={profile.allergies.join(', ')}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Account Security
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Enhance your account security with these options.</p>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <KeyIcon className="mr-2 h-5 w-5 text-gray-500" />
                  Change Password
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Two-Factor Authentication
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Add an extra layer of security to your account.</p>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <ShieldCheckIcon className="mr-2 h-5 w-5 text-gray-500" />
                  Enable 2FA
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="col-span-2 bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Emergency Contact</h3>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="contact-name"
                    id="contact-name"
                    value={profile.emergencyContact.name}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="relationship" className="block text-sm font-medium text-gray-700">
                  Relationship
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="relationship"
                    id="relationship"
                    value={profile.emergencyContact.relationship}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={profile.emergencyContact.phone}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="col-span-2 bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Notification Settings</h3>
            <div className="mt-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="email-notifications"
                    name="email-notifications"
                    type="checkbox"
                    checked={profile.notifications.email}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="email-notifications" className="ml-3 text-sm text-gray-700">
                    Email Notifications
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="sms-notifications"
                    name="sms-notifications"
                    type="checkbox"
                    checked={profile.notifications.sms}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="sms-notifications" className="ml-3 text-sm text-gray-700">
                    SMS Notifications
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="appointment-reminders"
                    name="appointment-reminders"
                    type="checkbox"
                    checked={profile.notifications.appointments}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="appointment-reminders" className="ml-3 text-sm text-gray-700">
                    Appointment Reminders
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="report-notifications"
                    name="report-notifications"
                    type="checkbox"
                    checked={profile.notifications.reports}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="report-notifications" className="ml-3 text-sm text-gray-700">
                    Report Notifications
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
