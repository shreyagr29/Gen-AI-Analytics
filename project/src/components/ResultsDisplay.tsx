import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Loader2 } from 'lucide-react';
import type { RootState } from '../store/store';

export default function ResultsDisplay() {
  const { results, isLoading, error } = useSelector((state: RootState) => state.query);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64 bg-white rounded-lg shadow-sm border border-gray-200">
        <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64 bg-white rounded-lg shadow-sm border border-gray-200">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="flex items-center justify-center h-64 bg-white rounded-lg shadow-sm border border-gray-200">
        <p className="text-gray-500">Enter a query to see results</p>
      </div>
    );
  }

  const chartData = results.labels.map((label: string, index: number) => ({
    name: label,
    value: results.data[index],
  }));

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Results</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}