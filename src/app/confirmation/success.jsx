'use client';

import { useState } from 'react';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
        >
          Open Booking Modal
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="w-full max-w-md p-8 text-center bg-white rounded-2xl shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full text-emerald-600">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-slate-900">Booking confirmed!</h2>
        <p className="mt-1 text-sm text-slate-500">Your trip is booked and ready to go.</p>

        <div className="p-3 my-6 bg-slate-50 border border-dashed border-slate-300 rounded-xl">
          <span className="block text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Booking reference
          </span>
          <span className="text-lg font-extrabold tracking-widest text-slate-900">
            TL8K92P
          </span>
        </div>

        {/* Flight Details Card */}
        <div className="p-4 mb-6 text-left border border-slate-200 rounded-xl bg-white shadow-sm">
          <div className="flex items-center justify-between text-lg font-bold text-slate-900">
            <span>Lagos</span>
            <span className="text-slate-400">→</span>
            <span>London</span>
          </div>
          <div className="flex items-center justify-between mt-1 text-xs text-slate-500">
            <span>Sep 12</span>
            <span>Sep 13</span>
          </div>
          
          <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-xs font-medium text-slate-700">
            <span className="font-semibold text-slate-900">British Airways</span>
            <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-600 font-mono">BA 74</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            View booking
          </button>
          
          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-3 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
          >
            Download ticket
          </button>
          
          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-2 text-sm font-semibold text-blue-600 rounded-lg hover:underline transition-all"
          >
            Add to calendar
          </button>
        </div>

      </div>
    </div>
  );
}