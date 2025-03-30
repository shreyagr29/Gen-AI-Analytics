import React from 'react';
import { History, ArrowRight } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentQuery } from '../store/querySlice';
import type { RootState } from '../store/store';

export default function QueryHistory() {
  const dispatch = useDispatch();
  const { queryHistory } = useSelector((state: RootState) => state.query);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-4">
        <History className="h-5 w-5 text-gray-500" />
        <h2 className="text-lg font-semibold">Recent Queries</h2>
      </div>
      <div className="space-y-2">
        {queryHistory.map((query, index) => (
          <button
            key={index}
            className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between group"
            onClick={() => dispatch(setCurrentQuery(query))}
          >
            <span className="text-gray-700">{query}</span>
            <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
        {queryHistory.length === 0 && (
          <p className="text-gray-500 text-center py-4">No recent queries</p>
        )}
      </div>
    </div>
  );
}