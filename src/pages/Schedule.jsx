import React from 'react'

export default function Schedule() {
  const events = [
    { time: 'Day 1 — 10:00', activity: 'Registration & Opening Ceremony' },
    { time: 'Day 1 — 12:00', activity: 'Hacking Begins 🚀' },
    { time: 'Day 2 — 12:00', activity: 'Submission Deadline' },
    { time: 'Day 2 — 14:00', activity: 'Final Presentations' },
    { time: 'Day 2 — 17:00', activity: 'Prize Ceremony & Closing' },
  ]

  return (
    <section className="pt-24 pb-16 px-6 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Event Schedule</h1>
      <div className="max-w-3xl mx-auto">
        {events.map((e, idx) => (
          <div key={idx} className="flex justify-between py-3 border-b border-gray-700">
            <span className="font-semibold">{e.time}</span>
            <span>{e.activity}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
