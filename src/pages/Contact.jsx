import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const API = 'http://localhost:5000';

const TABS = [
  { id: 'contact',      label: 'Contact Us' },
  { id: 'consultation', label: 'Request Consultation' },
  { id: 'vendor',       label: 'Vendor Registration' },
  { id: 'tender',       label: 'Tender Submission' },
];

const SERVICE_OPTIONS = ['Infrastructure Development','Construction Services','Pre-Engineered Buildings (PEB)','MEP Services','Fire Protection Systems','Interior Fit-Out','Facility Management','Industrial Solutions'];
const SUBJECT_OPTIONS = ['General Inquiry', 'Partnership Opportunity', 'Media & PR', 'Feedback & Suggestions', 'Other'];

const FORMS = {
  contact: {
    title: 'Contact Us', hidden: 'General Contact',
    fields: [
      { name:'name',    label:'Full Name',       type:'text',     placeholder:'Your full name',              required:true  },
      { name:'email',   label:'Email Address',   type:'email',    placeholder:'your@email.com',              required:true  },
      { name:'phone',   label:'Phone Number',    type:'tel',      placeholder:'+91 XXXXX XXXXX',             required:true  },
      { name:'subject', label:'Subject',         type:'select',   options:SUBJECT_OPTIONS,                   required:true  },
      { name:'message', label:'Your Message',    type:'textarea', placeholder:'How can we help you?',        required:true },
    ],
  },
  consultation: {
    title: 'Request Consultation', hidden: 'Consultation Request',
    fields: [
      { name:'name',    label:'Full Name',       type:'text',     placeholder:'Your full name',              required:true  },
      { name:'company', label:'Company Name',    type:'text',     placeholder:'Your company / organisation', required:false },
      { name:'email',   label:'Email Address',   type:'email',    placeholder:'your@email.com',              required:true  },
      { name:'phone',   label:'Phone Number',    type:'tel',      placeholder:'+91 XXXXX XXXXX',             required:true  },
      { name:'service', label:'Service Required',type:'select',   options:SERVICE_OPTIONS,                   required:true  },
      { name:'message', label:'Project Details', type:'textarea', placeholder:'Describe your project, location, timeline and budget...', required:true },
    ],
  },
  vendor: {
    title: 'Vendor Registration', hidden: 'Vendor Registration',
    fields: [
      { name:'company',  label:'Company Name',      type:'text',     placeholder:'Registered company name',      required:true  },
      { name:'contact',  label:'Contact Person',    type:'text',     placeholder:'Name of authorised contact',   required:true  },
      { name:'email',    label:'Email Address',     type:'email',    placeholder:'official@email.com',           required:true  },
      { name:'phone',    label:'Phone Number',      type:'tel',      placeholder:'+91 XXXXX XXXXX',              required:true  },
      { name:'services', label:'Services Offered',  type:'text',     placeholder:'e.g. Steel Fabrication, MEP…', required:true  },
      { name:'location', label:'Location / Region', type:'text',     placeholder:'City, State',                  required:true  },
      { name:'message',  label:'Company Profile',   type:'textarea', placeholder:'Years of experience, certifications, past projects...', required:false },
    ],
  },
  tender: {
    title: 'Tender Submission', hidden: 'Tender Submission',
    fields: [
      { name:'company',   label:'Company Name',    type:'text',     placeholder:'Registered company name',           required:true  },
      { name:'email',     label:'Email Address',   type:'email',    placeholder:'official@email.com',                required:true  },
      { name:'tender_ref',label:'Tender Ref. No',  type:'text',     placeholder:'e.g. MLV/2025/001',                 required:true  },
      { name:'work_type', label:'Work Type',       type:'text',     placeholder:'e.g. Civil, MEP, Interior…',        required:true  },
      { name:'message',   label:'Tender Details',  type:'textarea', placeholder:'Scope of work, timeline, queries...', required:true },
    ],
  }
};

function FieldInput({ field, value, onChange }) {
  const base = 'w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#29ABE2] transition-colors duration-150 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-medium bg-white dark:bg-[#0D1424]';
  const sharedProps = {
    id: `field-${field.name}`, name: field.name, value, onChange: (e) => onChange(field.name, e.target.value),
    required: field.required, placeholder: field.placeholder, className: base,
  };
  if (field.type === 'textarea') return <textarea {...sharedProps} rows={4} className={`${base} resize-none`} />;
  if (field.type === 'select')
    return (
      <select {...sharedProps} className={`${base} cursor-pointer`}>
        <option value="">Select {field.label}</option>
        {field.options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    );
  return <input {...sharedProps} type={field.type} />;
}

function ContactForm({ tabId }) {
  const formDef = FORMS[tabId];
  const emptyState = () => Object.fromEntries(formDef.fields.map((f) => [f.name, '']));
  const [values, setValues] = useState(emptyState);
  const [status, setStatus] = useState('idle');
  const [errMsg, setErrMsg] = useState('');

  const handleChange = (name, val) => setValues((prev) => ({ ...prev, [name]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _form_name: formDef.hidden, ...values }),
      });
      const d = await res.json();
      if (d.success) { setStatus('success'); setValues(emptyState()); }
      else { setErrMsg(d?.message || 'Submission failed. Please try again.'); setStatus('error'); }
    } catch { setErrMsg('Network error. Please try again.'); setStatus('error'); }
  };

  if (status === 'success')
    return (
      <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ background: 'rgba(41, 171, 226, 0.1)' }}>✅</div>
        <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">Thank you!</h3>
        <p className="text-sm max-w-sm text-gray-500">We'll get back to you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="mt-2 text-sm font-semibold underline text-[#29ABE2]">Submit another</button>
      </div>
    );

  return (
    <form id={`form-${tabId}`} onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 mt-6">
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
        {formDef.fields.map((field) => (
          <div key={field.name} className={field.type === 'textarea' ? 'sm:col-span-2' : ''}>
            <label htmlFor={`field-${field.name}`} className="block text-sm font-bold mb-2 text-gray-800 dark:text-gray-200">
              {field.label}{field.required && <span className="text-[#29ABE2]"> *</span>}
            </label>
            <FieldInput field={field} value={values[field.name]} onChange={handleChange} />
          </div>
        ))}
      </div>
      {status === 'error' && <p className="text-xs font-medium rounded-lg px-4 py-2 text-red-600 bg-red-50">{errMsg}</p>}
      <div className="flex justify-center mt-4">
        <button type="submit" disabled={status === 'submitting'}
          className="w-full sm:w-auto px-12 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-50"
          style={{ background: '#29ABE2', boxShadow: '0 8px 20px rgba(41, 171, 226, 0.25)' }}>
          {status === 'submitting' ? 'Submitting…' : `Submit Form`}
        </button>
      </div>
    </form>
  );
}

function PageHero() {
  return (
    <section id="contact-hero" className="relative h-[45vh] min-h-[400px] overflow-hidden bg-gray-900">
      <img
        src="/proj_interior.png"
        alt="Contact Hero"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#f8f9fa] dark:to-[#0A0F1A]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16 md:pt-32 pb-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          Get in Touch
        </h1>
        <p className="text-base max-w-xl text-white/90 mt-4 font-medium">
          Whether you need a consultation, want to book a site visit, or become a supplier — we're here to help.
        </p>
      </div>
    </section>
  );
}

export default function Contact() {
  const [activeTab, setActiveTab] = useState('contact');

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Contact Us | Mahendram Landmark</title>
        <meta name="description" content="Contact Mahendram Landmark Ventures." />
      </Helmet>
      
      <PageHero />

      <section id="contact-forms" className="relative z-20 -mt-16 md:-mt-32 pb-20">
        <div className="container-xl max-w-6xl mx-auto px-4">
          
          {/* Main Floating Form Card */}
          <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-6 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.06)] mb-8 border border-gray-100 dark:border-white/10">
            
            {/* Tabs Header */}
            <div className="flex flex-wrap items-center justify-center gap-2 bg-gray-100 dark:bg-white/5 p-1.5 rounded-full mx-auto w-fit mb-8">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                      isActive ? 'bg-[#29ABE2] text-white shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}>
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Form */}
            <ContactForm key={activeTab} tabId={activeTab} />
          </div>

          {/* Our Offices */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Office Info Card */}
            <div className="bg-[#F0F7FF] dark:bg-[#111827] rounded-[2rem] p-8 flex flex-col justify-center border border-[#E1EFFE] dark:border-white/10 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#29ABE2] mb-6">Our Offices</h3>
              
              <div className="flex items-start gap-4 mb-5">
                <div className="mt-1 text-[#29ABE2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Corporate Office</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mt-1 font-medium">Mahendram Landmark Ventures Pvt Ltd,<br/>City, State, PIN Code,<br/>India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="text-[#29ABE2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 14.92z"/></svg>
                </div>
                <a href="tel:+919876543210" className="text-xs font-bold text-gray-900 dark:text-white hover:text-[#29ABE2] transition-colors">+91 98765 43210</a>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="text-[#29ABE2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <a href="mailto:info@mahendramlandmark.com" className="text-xs font-bold text-gray-900 dark:text-white hover:text-[#29ABE2] transition-colors truncate">info@mahendramlandmark.com</a>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-[#29ABE2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>

            </div>

            {/* Images */}
            <div className="h-64 lg:h-auto rounded-[2rem] overflow-hidden shadow-sm">
              <img src="/infra_gallery_3.png" alt="Corporate Office" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="h-64 lg:h-auto rounded-[2rem] overflow-hidden shadow-sm">
              <img src="/contact_meeting.png" alt="Business Meeting" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="h-64 lg:h-auto rounded-[2rem] overflow-hidden shadow-sm">
              <img src="/contact_site_visit.png" alt="Engineers on site" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>

          {/* Book Site Visit */}
          <div className="mt-8 bg-gradient-to-br from-[#0A4D8C] to-[#0A1628] rounded-[2rem] p-8 md:p-12 text-white flex flex-col md:flex-row gap-8 items-center shadow-xl">
            <div className="flex-1">
              <p className="text-xs font-bold tracking-widest uppercase text-[#29ABE2] mb-3">Site Inspection</p>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">Book a Site Visit</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">See our work in person. Request a guided visit to one of our active project sites or completed landmark developments across India. Our project team will host you and walk you through our quality and execution standards.</p>
              <div className="flex flex-wrap gap-3">
                {['Mumbai','Delhi NCR','Bengaluru','Pune','Hyderabad','Chennai'].map(c=>(
                  <span key={c} className="px-4 py-2 rounded-full text-xs font-bold bg-white/10 border border-white/20">{c}</span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <a href="mailto:sitevisit@mahendramlandmark.com?subject=Site%20Visit%20Request" className="block px-8 py-4 rounded-full bg-[#29ABE2] text-white font-bold text-sm text-center hover:scale-105 transition-transform shadow-lg">
                Book Site Visit
              </a>
            </div>
          </div>

          {/* Regional Offices */}
          <div className="mt-8">
            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-6">Regional Offices</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {city:'Mumbai (HQ)',addr:'BKC, Bandra East, Mumbai – 400 051',ph:'+91 98765 43210'},
                {city:'Delhi NCR',addr:'Sector 62, Noida, UP – 201 301',ph:'+91 98765 43211'},
                {city:'Bengaluru',addr:'Whitefield, Bengaluru – 560 066',ph:'+91 98765 43212'},
                {city:'Hyderabad',addr:'HITEC City, Hyderabad – 500 081',ph:'+91 98765 43213'},
              ].map(o=>(
                <div key={o.city} className="bg-white dark:bg-[#111827] rounded-2xl p-5 border border-gray-100 dark:border-white/10 shadow-sm">
                  <p className="text-xs font-black text-[#29ABE2] uppercase tracking-widest mb-2">{o.city}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{o.addr}</p>
                  <a href={`tel:${o.ph.replace(/\s/g,'')}`} className="text-xs font-bold text-gray-900 dark:text-white hover:text-[#29ABE2] transition-colors">{o.ph}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Become Supplier */}
          <div className="mt-8 bg-gray-50 dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#29ABE2] mb-3">Supply Chain</p>
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">Become a Supplier</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">We partner with quality material suppliers, subcontractors, and equipment vendors across India. If you supply construction materials, MEP components, fit-out products, or facility management consumables, we'd love to hear from you.</p>
                <ul className="space-y-2 mb-6">
                  {['Construction Materials & Aggregates','Structural Steel & PEB Components','MEP Equipment & Systems','Interior Products & Furniture','Safety Equipment & PPE','Facility Management Consumables'].map(s=>(
                    <li key={s} className="flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-300"><span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]"/>{s}</li>
                  ))}
                </ul>
                <button onClick={() => { setActiveTab('vendor'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-block px-7 py-3 rounded-full bg-[#0A4D8C] dark:bg-[#29ABE2] text-white font-bold text-sm hover:scale-105 transition-transform cursor-pointer">Register as Vendor</button>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
                <img src="/infra_gallery_2.png" alt="Supplier Partnership" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>

          {/* Tender Notices */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">Tender Notices</h3>
              <a href="/tenders" className="text-xs font-bold text-[#0A4D8C] dark:text-[#29ABE2] hover:underline flex items-center gap-1">View All Tenders →</a>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {ref:'MLV/2025/001',title:'Civil & Structural Works — Industrial Facility, Pune',deadline:'Jul 30, 2025',category:'Civil'},
                {ref:'MLV/2025/002',title:'MEP Works — Corporate Campus, Bengaluru',deadline:'Aug 15, 2025',category:'MEP'},
                {ref:'MLV/2025/003',title:'Interior Fit-Out — Commercial Office, Mumbai',deadline:'Aug 28, 2025',category:'Interiors'},
              ].map(t=>(
                <div key={t.ref} className="bg-white dark:bg-[#111827] rounded-2xl p-5 border border-gray-100 dark:border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#29ABE2]/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="text-[9px] font-black px-3 py-1 rounded-full bg-[#0A4D8C] dark:bg-[#29ABE2] text-white flex-shrink-0">{t.category}</span>
                    <div>
                      <p className="text-xs font-bold text-gray-500 mb-1">{t.ref}</p>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">{t.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">Deadline: {t.deadline}</p>
                    </div>
                  </div>
                  <button onClick={() => { setActiveTab('tender'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="px-5 py-2 rounded-full text-xs font-bold bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-[#0A4D8C] hover:text-white transition-colors flex-shrink-0 cursor-pointer">Submit Bid</button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
