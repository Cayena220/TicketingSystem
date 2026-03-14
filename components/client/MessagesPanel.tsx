'use client';

interface MessagesPanelProps {
  selectedResponder: string | null;
}

export default function MessagesPanel({ selectedResponder }: MessagesPanelProps) {
  return (
    <div className="p-8 bg-[#f0fdf4] min-h-screen">
      <h1 className="text-3xl font-bold text-emerald-900 mb-4">Messages</h1>
      {selectedResponder ? (
        <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
          <div className="mb-4 border-b border-emerald-200 pb-3">
            <p className="text-sm text-emerald-500">Chat with</p>
            <h2 className="text-xl font-semibold text-emerald-900">{selectedResponder}</h2>
          </div>
          <div className="space-y-3">
            <div className="bg-emerald-50 py-2 px-3 rounded-xl max-w-[70%]">
              <p className="text-sm text-emerald-700">Hi! I’m reviewing your request now. Can you share more details?</p>
              <p className="text-xs text-emerald-400 mt-1">09:02 AM</p>
            </div>
            <div className="bg-emerald-600 text-white py-2 px-3 rounded-xl ml-auto max-w-[70%]">
              <p className="text-sm">Thanks, I tried restarting but still no power.</p>
              <p className="text-xs text-emerald-100 mt-1">09:04 AM</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input className="flex-1 rounded-md border border-emerald-300 px-3 py-2" placeholder="Type your message..." />
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition">Send</button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">Select a responder from My Tickets to start chat.</p>
        </div>
      )}
    </div>
  );
}
