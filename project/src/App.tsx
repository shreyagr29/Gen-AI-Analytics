import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import QueryInput from './components/QueryInput';
import QueryHistory from './components/QueryHistory';
import ResultsDisplay from './components/ResultsDisplay';
import { BrainCircuit } from 'lucide-react';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Gen AI Analytics</h1>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            <QueryInput />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <QueryHistory />
              </div>
              <div className="lg:col-span-3">
                <ResultsDisplay />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;