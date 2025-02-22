import { useState } from 'react';
import { DocumentTextIcon, CloudArrowDownIcon, EyeIcon } from '@heroicons/react/24/outline';

interface HealthRecord {
  id: number;
  date: string;
  doctor: string;
  diagnosis: string;
  status: string;
  documents: string[];
}

export default function HealthRecords() {
  const [records] = useState<HealthRecord[]>([
    {
      id: 1,
      date: '2025-02-21',
      doctor: 'Dr. Sarah Smith',
      diagnosis: 'Common Cold',
      status: 'Completed',
      documents: ['Medical Certificate', 'Prescription'],
    },
    {
      id: 2,
      date: '2025-02-15',
      doctor: 'Dr. John Doe',
      diagnosis: 'Annual Checkup',
      status: 'Completed',
      documents: ['Health Report', 'Lab Results'],
    },
  ]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">Health Records</h1>
          <p className="mt-2 text-sm text-gray-700">
            A comprehensive list of all your medical records, consultations, and documents.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Download All Records
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <div className="sm:w-64">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date Range
          </label>
          <select
            id="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 6 months</option>
            <option>Last year</option>
            <option>All time</option>
          </select>
        </div>
        <div className="sm:w-64">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Record Type
          </label>
          <select
            id="type"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option>All Records</option>
            <option>Consultations</option>
            <option>Lab Tests</option>
            <option>Prescriptions</option>
            <option>Vaccinations</option>
          </select>
        </div>
      </div>

      {/* Records Table */}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Date
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Doctor
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Diagnosis
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Documents
                    </th>
                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {records.map((record) => (
                    <tr key={record.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {record.date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {record.doctor}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {record.diagnosis}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          {record.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          {record.documents.map((doc, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                            >
                              <DocumentTextIcon className="mr-1 h-4 w-4" />
                              {doc}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <div className="flex items-center gap-2 justify-end">
                          <button className="text-indigo-600 hover:text-indigo-900">
                            <EyeIcon className="h-5 w-5" />
                          </button>
                          <button className="text-indigo-600 hover:text-indigo-900">
                            <CloudArrowDownIcon className="h-5 w-5" />
                          </button>
                        </div>
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
