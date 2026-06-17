import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgdpebq';
const WHATSAPP_NUMBER = '918210146579';
const WHATSAPP_MSG = encodeURIComponent('Hello, I would like to get in touch with Mahendram Landmark Ventures Pvt Ltd.');

const TABS = [
  { id: 'enquiry', label: 'Business Enquiry' },
  { id: 'tender',  label: 'Tender Submission' },
  { id: 'vendor',  label: 'Vendor Registration' },
  { id: 'career',  label: 'Career Application' },
];

const SERVICE_OPTIONS = ['Infrastructure Development','Construction Services','Pre-Engineered Buildings (PEB)','MEP Services','Fire Protection Systems','Interior Fit-Out','Facility Management','Industrial Solutions','Fabrication & Structural','Power & Utility','Supply & Trading','Equipment Rental'];
const DEPARTMENT_OPTIONS = ['Engineering','Construction & Site Management','Interior Design','Facility Management','Project Management','Finance & Accounts','HR & Administration','Sales & Business Development','Operations'];

const FORMS = {
  enquiry: {
    title: 'Business Enquiry', hidden: 'Business Enquiry',
    fields: [
      { name:'name',    label:'Full Name',       type:'text',     placeholder:'Your full name',              required:true  },
      { name:'company', label:'Company Name',    type:'text',     placeholder:'Your company / organisation', required:false },
      { name:'email',   label:'Email Address',   type:'email',    placeholder:'your@email.com',              required:true  },
      { name:'phone',   label:'Phone Number',    type:'tel',      placeholder:'+91 XXXXX XXXXX',             required:true  },
      { name:'service', label:'Service Required',type:'select',   options:SERVICE_OPTIONS,                   required:true  },
      { name:'message', label:'Project Details', type:'textarea', placeholder:'Describe your project, location, timeline and budget...', required:true },
    ],
  },
  tender: {
    title: 'Tender Submission', hidden: 'Tender Submission',
    fields: [
      { name:'company',   label:'Company Name',    type:'text',     placeholder:'Registered company name',           required:true  },
      { name:'gst',       label:'GST Number',      type:'text',     placeholder:'GSTIN (e.g. 22AAAAA0000A1Z5)',       required:false },
      { name:'work_type', label:'Work Type',       type:'text',     placeholder:'e.g. Civil, MEP, Interior…',        required:true  },
      { name:'location',  label:'Project Location',type:'text',     placeholder:'City / State',                      required:true  },
      { name:'message',   label:'Tender Details',  type:'textarea', placeholder:'Tender reference, scope of work, submission deadline...', required:true },
    ],
  },
  vendor: {
    title: 'Vendor Registration', hidden: 'Vendor Registration',
    fields: [
      { name:'company',  label:'Company Name',      type:'text',     placeholder:'Your company name',            required:true  },
      { name:'contact',  label:'Contact Person',    type:'text',     placeholder:'Name of authorised contact',   required:true  },
      { name:'services', label:'Services Offered',  type:'text',     placeholder:'e.g. Steel Fabrication, MEP…',required:true  },
      { name:'location', label:'Location / Region', type:'text',     placeholder:'City, State',                  required:true  },
      { name:'message',  label:'Additional Details',type:'textarea', placeholder:'Years of experience, certifications, past projects...', required:false },
    ],
  },
  career: {
    title: 'Career Application', hidden: 'Career Application',
    fields: [
      { name:'name',       label:'Full Name',     type:'text',     placeholder:'Your full name',  required:true },
      { name:'email',      label:'Email Address', type:'email',    placeholder:'your@email.com',  required:true },
      { name:'phone',      label:'Phone Number',  type:'tel',      placeholder:'+91 XXXXX XXXXX', required:true },
      { name:'department', label:'Department',    type:'select',   options:DEPARTMENT_OPTIONS,    required:true },
      { name:'message',    label:'About Yourself',type:'textarea', placeholder:'Your experience, skills, current role and what you bring to the team...', required:true },
    ],
  },
};

function FieldInput({ field, value, onChange }) {
  const base = 'w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#29ABE2] transition-colors duration-150 text-gray-900 placeholder-gray-400 font-medium';
  const lightStyle = { borderColor: '#E5E7EB', background: '#ffffff' };
  const sharedProps = {
    id: `field-${field.name}`, name: field.name, value, onChange: (e) => onChange(field.name, e.target.value),
    required: field.required, placeholder: field.placeholder, className: base, style: lightStyle,
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
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _form_name: formDef.hidden, ...values }),
      });
      if (res.ok) { setStatus('success'); setValues(emptyState()); }
      else { const d = await res.json(); setErrMsg(d?.error || 'Submission failed. Please try again.'); setStatus('error'); }
    } catch { setErrMsg('Network error. Please try again.'); setStatus('error'); }
  };

  if (status === 'success')
    return (
      <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ background: 'rgba(41, 171, 226, 0.1)' }}>✅</div>
        <h3 className="text-2xl font-extrabold text-gray-900">Thank you!</h3>
        <p className="text-sm max-w-sm text-gray-500">We'll get back to you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="mt-2 text-sm font-semibold underline text-[#29ABE2]">Submit another</button>
      </div>
    );

  return (
    <form id={`form-${tabId}`} onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 mt-6">
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
        {formDef.fields.map((field) => (
          <div key={field.name} className={field.type === 'textarea' ? 'sm:col-span-2' : ''}>
            <label htmlFor={`field-${field.name}`} className="block text-sm font-bold mb-2 text-gray-800">
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
          {status === 'submitting' ? 'Submitting…' : `Submit`}
        </button>
      </div>
    </form>
  );
}

function PageHero() {
  return (
    <section id="contact-hero" className="relative h-[45vh] min-h-[400px] overflow-hidden bg-gray-900">
      <img
        src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1920&q=80"
        alt="Contact Hero"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#f8f9fa]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-32 pb-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          Get in Touch
        </h1>
        <p className="text-base max-w-xl text-white/90 mt-4 font-medium">
          Business enquiries, tender submissions, vendor registrations and career applications — all in one place.
        </p>
      </div>
    </section>
  );
}

export default function Contact() {
  const [activeTab, setActiveTab] = useState('enquiry');

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <Helmet>
        <title>Contact Us | Mahendram Landmark</title>
        <meta name="description" content="Contact Mahendram Landmark Ventures." />
      </Helmet>
      
      <PageHero />

      <section id="contact-forms" className="relative z-20 -mt-32 pb-20">
        <div className="container-xl max-w-6xl mx-auto px-4">
          
          {/* Main Floating Form Card */}
          <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.06)] mb-8 border border-gray-100">
            
            {/* Tabs Header */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 border-b border-gray-100 pb-6 mb-6" role="tablist">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button key={tab.id} id={`tab-${tab.id}`} role="tab" aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 ${
                      isActive ? 'bg-[#29ABE2] text-white shadow-md transform scale-105' : 'bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                    }`}>
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Form */}
            <ContactForm key={activeTab} tabId={activeTab} />
          </div>

          {/* Bottom Row: Office Info + Images (4-column grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Office Info Card */}
            <div className="bg-[#F0F7FF] rounded-[2rem] p-8 flex flex-col justify-center border border-[#E1EFFE] shadow-sm">
              <h3 className="text-xl font-extrabold text-[#29ABE2] mb-6">Our Offices</h3>
              
              <div className="flex items-start gap-4 mb-5">
                <div className="mt-1 text-[#29ABE2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Corporate Office</p>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1 font-medium">Mahendram Landmark Ventures Pvt Ltd,<br/>City, State, PIN Code,<br/>India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="text-[#29ABE2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 14.92z"/></svg>
                </div>
                <a href="tel:+919876543210" className="text-xs font-bold text-gray-900 hover:text-[#29ABE2] transition-colors">+91 98765 43210</a>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="text-[#29ABE2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <a href="mailto:info@mahendramlandmark.com" className="text-xs font-bold text-gray-900 hover:text-[#29ABE2] transition-colors truncate">info@mahendramlandmark.com</a>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-[#29ABE2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <p className="text-xs font-bold text-gray-900">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>

            </div>

            {/* Images */}
            <div className="h-64 lg:h-auto rounded-[2rem] overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" alt="Corporate Office" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="h-64 lg:h-auto rounded-[2rem] overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" alt="Meeting" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="h-64 lg:h-auto rounded-[2rem] overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" alt="Professionals" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>

        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform z-50">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="white"><path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.742 5.507 2.043 7.824L0 32l8.418-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.471c-.4-.2-2.362-1.165-2.728-1.298-.366-.133-.633-.2-.9.2-.266.4-1.033 1.298-1.266 1.565-.233.266-.466.3-.866.1-.4-.2-1.688-.622-3.215-1.983-1.188-1.06-1.99-2.37-2.223-2.77-.233-.4-.025-.616.175-.815.18-.179.4-.466.6-.7.2-.233.266-.4.4-.666.133-.266.066-.5-.033-.7-.1-.2-.9-2.166-1.233-2.966-.325-.78-.655-.674-.9-.686l-.767-.013c-.266 0-.7.1-1.066.5-.366.4-1.4 1.366-1.4 3.332s1.433 3.865 1.633 4.132c.2.266 2.82 4.306 6.832 6.036.955.413 1.7.66 2.282.844.958.306 1.832.263 2.52.16.769-.115 2.362-.965 2.695-1.898.333-.933.333-1.733.233-1.898-.1-.166-.366-.266-.766-.466z"/></svg>
      </a>
    </div>
  );
}
