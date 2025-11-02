/// <reference types="vite/client" />
import React, { useState } from 'react';

export default function PortfolioMockup() {
  const [mobTab, setMobTab] = useState<'LV2' | 'PCE' | 'EXP'>('LV2');
  const [engTab, setEngTab] = useState<'projects' | 'productions'>('projects');

const BASE = import.meta.env.BASE_URL; // "/the-e-portfolio-/" on Pages, "/" in dev

const LINKS = {
  cvEn: `${BASE}cv-en.pdf`,
  cvFr: `${BASE}cv-fr.pdf`,
  linkedin: "https://www.linkedin.com/in/louay-masbah-711188341",
  email: "mailto:louaymasbah@gmail.com",
  pitchVideo: "https://www.youtube.com/watch?v=2CWVGHkkWy8",
  tipeSlides: "https://drive.google.com/file/d/1rBdeMRVXxDqWugvwFWGsc1NjZCaESYF3/preview",
  tipeNotes: "https://docs.google.com/document/d/1n04_DgZ6X4YsNfIAeyFvhVteFrTsB5RaXlLdyD2nBr0/preview",
};



  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-violet-50 text-slate-800 relative overflow-x-hidden">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white grid place-items-center font-bold shadow-sm">L</div>
            <div className="font-semibold">Louay Masbah - E-Portfolio</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Primary">
            <a href="#welcome" className="hover:text-slate-900 hover:underline underline-offset-4 transition">Welcome</a>
            <a href="#career" className="hover:text-slate-900 hover:underline underline-offset-4 transition">Career Project</a>
            <a href="#engineering" className="hover:text-slate-900 hover:underline underline-offset-4 transition">Engineering Course</a>
            <a href="#international" className="hover:text-slate-900 hover:underline underline-offset-4 transition">Languages</a>
            <a href="#civic" className="hover:text-slate-900 hover:underline underline-offset-4 transition">Sustainability & Civic</a>
            <a href="#activities" className="hover:text-slate-900 hover:underline underline-offset-4 transition">Sport & Activities</a>
            <a href="#career-dev" className="hover:text-slate-900 hover:underline underline-offset-4 transition">Career Dev</a>
          </nav>
        </div>
      </header>

      <div id="scroll-progress" className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-violet-600 z-[60]" style={{ width: '0%' }} />
      <div className="h-[6px] w-full bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-violet-600/70" />

      <section id="welcome" className="relative max-w-6xl mx-auto px-4 pt-12 pb-14">
        <div aria-hidden className="pointer-events-none absolute -top-10 -left-32 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl animate-pulse" />
        <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-24 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" />
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-700 to-violet-600 bg-clip-text text-transparent">Digital Sciences student at ENSEEIHT Toulouse</h1>
            <p className="text-slate-700 leading-relaxed">
              Interested in AI and software engineering. This portfolio gathers my CVs, projects, elevator pitch, and international mobility plans.
            </p>
          </div>
          <div className="aspect-video rounded-2xl bg-white/80 border shadow-md ring-1 ring-indigo-100 overflow-hidden">
            <img
  src={`${BASE}photo.jpg`}
  alt="Louay Masbah - Welcome Visual"
  className="w-full h-full object-cover"
  loading="eager"
  decoding="async"
/>

          </div>
        </div>
      </section>

      <section id="career" className="bg-white border-y py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-violet-600 bg-clip-text text-transparent">Career Project</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full mb-4" />
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="md:col-span-1 rounded-2xl border bg-gray-50/90 p-5 hover:bg-gray-50 transition">
              <div className="font-semibold mb-3">Documents & Profiles</div>
              <div className="flex flex-col gap-2" aria-label="Career documents">
                <a className="px-3 py-2 rounded-xl text-sm text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow hover:shadow-md active:shadow-sm transition" href={LINKS.cvEn} target="_blank" rel="noreferrer">CV (English)</a>
                <a className="px-3 py-2 rounded-xl text-sm text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow hover:shadow-md active:shadow-sm transition" href={LINKS.cvFr} target="_blank" rel="noreferrer">CV (French)</a>
                <a className="px-3 py-2 rounded-xl text-sm text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow hover:shadow-md active:shadow-sm transition" href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
            <div className="md:col-span-2 rounded-2xl border bg-white p-3 overflow-hidden">
              <div className="text-sm uppercase tracking-wider text-slate-500 px-2 pt-2">Elevator Pitch</div>
              <div className="aspect-video grid place-items-center p-6 text-center">
                <div>
                  <div className="text-slate-700 text-sm">Embed your 2-3 minute video here (YouTube/Drive) or use the button below.</div>
                  <a
                    href={LINKS.pitchVideo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white"
                  >
                    Watch video
                  </a>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-10 mb-4">International Mobility</h3>
          <div className="mb-4 flex gap-2" role="tablist" aria-label="International Mobility tabs">
            <button onClick={() => setMobTab('LV2')} aria-selected={mobTab === 'LV2'} role="tab" className={`px-3 py-1 rounded-lg border transition ${mobTab === 'LV2' ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow' : 'bg-white hover:bg-slate-50'}`}>LV2</button>
            <button onClick={() => setMobTab('PCE')} aria-selected={mobTab === 'PCE'} role="tab" className={`px-3 py-1 rounded-lg border transition ${mobTab === 'PCE' ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow' : 'bg-white hover:bg-slate-50'}`}>PCE</button>
            <button onClick={() => setMobTab('EXP')} aria-selected={mobTab === 'EXP'} role="tab" className={`px-3 py-1 rounded-lg border transition ${mobTab === 'EXP' ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow' : 'bg-white hover:bg-slate-50'}`}>International Experience</button>
          </div>
          <div>
            {mobTab === 'LV2' && (
              <div className="rounded-2xl border bg-white p-6 text-sm text-slate-700">
                <div className="font-semibold mb-1">LV2</div>
                <p>Japanese (LV2) with Prof. Yoshiko Omatsu; interested in the "séjour linguistique" program.</p>
              </div>
            )}
            {mobTab === 'PCE' && (
              <div className="rounded-2xl border bg-white p-6 text-sm text-slate-700">
                <div className="font-semibold mb-1">PCE (Professional Communication & English)</div>
                <p>Under Prof. Barbara Billois.</p>
              </div>
            )}
            {mobTab === 'EXP' && (
              <div className="rounded-2xl border bg-white p-6 text-sm text-slate-700">
                <div className="font-semibold mb-1">International Experience</div>
                <p>Will add later.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="engineering" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-violet-600 bg-clip-text text-transparent">Engineering Course</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full mb-4" />
        <div className="mb-6 flex gap-2" role="tablist" aria-label="Engineering tabs">
          <button
            data-test="tab-projects"
            role="tab"
            onClick={() => setEngTab('projects')}
            aria-selected={engTab === 'projects'}
            className={`px-3 py-1 rounded-lg border transition ${engTab === 'projects' ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow' : 'bg-white hover:bg-slate-50'}`}
          >
            Projects
          </button>
          <button
            data-test="tab-productions"
            role="tab"
            onClick={() => setEngTab('productions')}
            aria-selected={engTab === 'productions'}
            className={`px-3 py-1 rounded-lg border transition ${engTab === 'productions' ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow' : 'bg-white hover:bg-slate-50'}`}
          >
            Productions
          </button>
        </div>

        {engTab === 'projects' && (
          <div data-test="panel-projects" role="tabpanel">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border bg-white/90 p-5 shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-0.5">
                <div className="font-semibold mb-1">TIPE project:CBOW Model for Dense Word embedding</div>
                <p className="text-sm text-slate-600">My TIPE project in french.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a data-test="tipe-slides" href={LINKS.tipeSlides} target="_blank" rel="noreferrer" className="text-xs px-3 py-1 rounded-lg border">Slides (PDF)</a>
                  <a data-test="tipe-notes" href={LINKS.tipeNotes} target="_blank" rel="noreferrer" className="text-xs px-3 py-1 rounded-lg border">Presentation Notes (Doc)</a>
                </div>
              </div>

              <div className="rounded-2xl border border-dashed bg-white p-5 shadow-sm" data-test="placeholder-card">
                <div className="font-semibold mb-1">Another Project</div>
                <p className="text-sm text-slate-500">Placeholder project - to be completed later.</p>
              </div>
              <div className="rounded-2xl border border-dashed bg-white p-5 shadow-sm" data-test="placeholder-card">
                <div className="font-semibold mb-1">Another Project</div>
                <p className="text-sm text-slate-500">Placeholder project - to be completed later.</p>
              </div>
            </div>
          </div>
        )}

        {engTab === 'productions' && (
          <div data-test="panel-productions" role="tabpanel" className="mt-10">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-dashed bg-white p-5 shadow-sm" data-test="placeholder-card">
                <div className="font-semibold mb-1">Another Project</div>
                <p className="text-sm text-slate-500">Placeholder project - to be completed later.</p>
              </div>
              <div className="rounded-2xl border border-dashed bg-white p-5 shadow-sm" data-test="placeholder-card">
                <div className="font-semibold mb-1">Another Project</div>
                <p className="text-sm text-slate-500">Placeholder project - to be completed later.</p>
              </div>
              <div className="rounded-2xl border border-dashed bg-white p-5 shadow-sm" data-test="placeholder-card">
                <div className="font-semibold mb-1">Another Project</div>
                <p className="text-sm text-slate-500">Placeholder project - to be completed later.</p>
              </div>
            </div>
          </div>
        )}
      </section>

      <section id="international" className="bg-white border-y py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-violet-600 bg-clip-text text-transparent">Languages</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full mb-4" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border bg-gray-50/90 p-5 hover:bg-gray-50 transition">
              <div className="font-semibold mb-1">Languages</div>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>Arabic - Native</li>
                <li>French - Professional working proficiency</li>
                <li>English - Professional working proficiency</li>
                <li>Japanese - Beginner (learning)</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-gray-50/90 p-5 hover:bg-gray-50 transition">
              <div className="font-semibold mb-1">Cultural / Exchange Projects</div>
              <p className="text-sm text-slate-600">To be filled in later.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="civic" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-violet-600 bg-clip-text text-transparent">Sustainability & Civic Engagement</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full mb-4" />
        <div className="grid md:grid-cols-3 gap-6">
          {["Volunteering", "Workshops", "Campus initiatives"].map((k, i) => (
            <div key={i} className="rounded-2xl border bg-white/90 p-5 shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-0.5">
              <div className="font-semibold">{k}</div>
              <p className="text-sm text-slate-600">To be filled in later.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="activities" className="bg-white border-y py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-violet-600 bg-clip-text text-transparent">Sport & Other Activities</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full mb-4" />
          <div className="grid md:grid-cols-3 gap-6">
            {["Climbing (weekly)", "Saxophone - student band", "Game development / N7 Game Jam"].map((label, i) => (
              <div key={i} className="rounded-2xl border bg-gray-50/90 p-5 hover:bg-gray-50 transition">
                <div className="font-semibold">{label}</div>
                <p className="text-sm text-slate-600 mt-1">To be filled in later.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="career-dev" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-violet-600 bg-clip-text text-transparent">Career Development</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full mb-4" />
        <div className="grid md:grid-cols-3 gap-6">
          {["Internships", "PEP / Portfolio of Achievements", "Networking / MyJobGlasses"].map((title, i) => (
            <div key={i} className="rounded-2xl border bg-white/90 p-5 shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-0.5">
              <div className="font-semibold">{title}</div>
              <p className="text-sm text-slate-600 mt-1">To be filled in later.</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-10 border-t bg-white/60 backdrop-blur relative">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Louay Masbah</div>
          <div className="flex gap-4">
            <a href="#welcome" className="hover:text-slate-700">Top</a>
            <a href={LINKS.email} className="hover:text-slate-700">Email</a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-700">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
