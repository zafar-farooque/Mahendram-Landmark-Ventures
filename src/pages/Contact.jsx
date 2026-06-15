import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgdpebq';
const WHATSAPP_NUMBER = '918210146579';
const WHATSAPP_MSG = encodeURIComponent('Hello, I would like to get in touch with Mahendram Landmark Ventures Pvt Ltd.');

const BORDER = 'rgba(255,255,255,0.08)';

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

const OFFICES = [
  { id:'corporate',  type:'Corporate Office', name:'Mahendram Landmark Ventures Pvt Ltd', addr:'Corporate Office Address, City, State – PIN Code, India', phone:'+91 XXXXX XXXXX', email:'info@mahendramlandmark.com',   hours:'Mon – Sat: 9:00 AM – 6:00 PM' },
  { id:'regional-1', type:'Regional Office',  name:'Regional Office — North India',        addr:'Regional Office Address, Delhi NCR – PIN Code, India',   phone:'+91 XXXXX XXXXX', email:'north@mahendramlandmark.com',  hours:'Mon – Sat: 9:00 AM – 6:00 PM' },
  { id:'regional-2', type:'Regional Office',  name:'Regional Office — South India',        addr:'Regional Office Address, Hyderabad / Chennai – India',   phone:'+91 XXXXX XXXXX', email:'south@mahendramlandmark.com',  hours:'Mon – Sat: 9:00 AM – 6:00 PM' },
];

function FieldInput({ field, value, onChange }) {
  const base = 'w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors duration-150';
  const darkStyle = { borderColor: BORDER, background: 'var(--color-bg)', color: 'var(--color-primary)' };
  const sharedProps = {
    id: `field-${field.name}`, name: field.name, value, onChange: (e) => onChange(field.name, e.target.value),
    required: field.required, placeholder: field.placeholder, className: base, style: darkStyle,
  };
  if (field.type === 'textarea') return <textarea {...sharedProps} rows={4} className={`${base} resize-none`} style={darkStyle} />;
  if (field.type === 'select')
    return (
      <select {...sharedProps} className={`${base} cursor-pointer`} style={darkStyle}>
        <option value="" style={{ background: 'var(--color-card)' }}>Select {field.label}</option>
        {field.options.map((o) => <option key={o} value={o} style={{ background: 'var(--color-card)' }}>{o}</option>)}
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
      <div className="flex flex-col items-center justify-center py-8 md:py-10 gap-4 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ background: 'rgba(41, 171, 226, 0.1)' }}>✅</div>
        <h3 className="text-xl font-extrabold text-white">Thank you!</h3>
        <p className="text-sm max-w-sm" style={{ color: 'var(--color-muted)' }}>We'll get back to you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="mt-2 text-sm font-semibold underline" style={{ color: 'var(--color-accent)' }}>Submit another</button>
      </div>
    );

  return (
    <form id={`form-${tabId}`} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {formDef.fields.map((field) => (
          <div key={field.name} className={field.type === 'textarea' ? 'sm:col-span-2' : ''}>
            <label htmlFor={`field-${field.name}`} className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-muted)' }}>
              {field.label}{field.required && <span style={{ color: 'var(--color-accent)' }}> *</span>}
            </label>
            <FieldInput field={field} value={values[field.name]} onChange={handleChange} />
          </div>
        ))}
      </div>
      {status === 'error' && <p className="text-xs font-medium rounded-lg px-4 py-2" style={{ color: '#FCA5A5', background: 'rgba(239,68,68,0.1)' }}>{errMsg}</p>}
      <button type="submit" disabled={status === 'submitting'}
        className="w-full sm:w-auto self-start px-8 py-3.5 rounded-sm text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-50"
        style={{ background: 'linear-gradient(135deg,var(--color-accent),var(--color-accent-2))', boxShadow: '0 4px 20px rgba(41, 171, 226, 0.1)' }}>
        {status === 'submitting' ? 'Submitting…' : `Submit ${formDef.title}`}
      </button>
    </form>
  );
}

function PageHero() {
  return (
    <section id="contact-hero" className="relative pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      {/* Background image overlay */}
      <img
        src="/contact_hero.png"
        alt="Contact Hero"
        aria-hidden="true"
        className="section-img-overlay ken-burns-bg"
        style={{ opacity: 0.25, objectFit: 'cover', position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      />
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize:'60px 60px' }} />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none" style={{ background:'radial-gradient(circle, rgba(41, 171, 226, 0.2), transparent 70%)', filter:'blur(60px)' }} />
      <div className="container-xl relative z-10 flex flex-col items-center text-center gap-5">
        <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--color-muted)' }}>
          <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-accent)' }}>Contact</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text leading-tight tracking-tight">Get in Touch</h1>
        <p className="text-base max-w-xl leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          Business enquiries, tender submissions, vendor registrations and career applications — all in one place.
        </p>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer" id="contact-whatsapp-hero"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
          style={{ background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.3)' }}>
          <svg width="18" height="18" viewBox="0 0 32 32" fill="white"><path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.742 5.507 2.043 7.824L0 32l8.418-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.471c-.4-.2-2.362-1.165-2.728-1.298-.366-.133-.633-.2-.9.2-.266.4-1.033 1.298-1.266 1.565-.233.266-.466.3-.866.1-.4-.2-1.688-.622-3.215-1.983-1.188-1.06-1.99-2.37-2.223-2.77-.233-.4-.025-.616.175-.815.18-.179.4-.466.6-.7.2-.233.266-.4.4-.666.133-.266.066-.5-.033-.7-.1-.2-.9-2.166-1.233-2.966-.325-.78-.655-.674-.9-.686l-.767-.013c-.266 0-.7.1-1.066.5-.366.4-1.4 1.366-1.4 3.332s1.433 3.865 1.633 4.132c.2.266 2.82 4.306 6.832 6.036.955.413 1.7.66 2.282.844.958.306 1.832.263 2.52.16.769-.115 2.362-.965 2.695-1.898.333-.933.333-1.733.233-1.898-.1-.166-.366-.266-.766-.466z"/></svg>
          Chat Directly on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default function Contact() {
  const [activeTab, setActiveTab] = useState('enquiry');

  return (
    <>
      <Helmet>
        <title>Contact Us — Business Enquiry, Tender, Vendor & Careers | Mahendram Landmark</title>
        <meta name="description" content="Contact Mahendram Landmark Ventures for business enquiries, tender submissions, vendor registrations and career opportunities. Pan India engineering and infrastructure company." />
        <meta property="og:title" content="Contact Mahendram Landmark Ventures Pvt Ltd" />
        <meta property="og:description" content="Get in touch for engineering, construction, PEB, MEP, interior fit-out, facility management projects across India." />
        <meta property="og:url" content="https://www.mahendramlandmark.com/contact" />
      </Helmet>
      <PageHero />

      {/* Forms + offices */}
      <section id="contact-forms" className="section-padding relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container-xl relative z-10">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10">
            {/* Left: tab forms */}
            <div>
              {/* Tabs */}
              <div className="flex overflow-x-auto scrollbar-none rounded-xl p-1 mb-8 gap-1" style={{ background: 'var(--color-card)' }} role="tablist" aria-label="Contact form tabs">
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button key={tab.id} id={`tab-${tab.id}`} role="tab" aria-selected={isActive} aria-controls={`panel-${tab.id}`}
                      onClick={() => setActiveTab(tab.id)}
                      className="flex-1 min-w-[5.5rem] px-3 py-2.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-200"
                      style={isActive ? { background: 'var(--color-accent)', color: '#ffffff', boxShadow: '0 2px 8px rgba(41, 171, 226, 0.1)' } : { background: 'transparent', color: 'var(--color-muted)' }}>
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Form panel */}
              <div id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`}
                className="p-8 rounded-2xl border" style={{ background: 'var(--color-card)', borderColor: BORDER }}>
                <h2 className="text-xl font-extrabold gradient-text mb-1">{FORMS[activeTab].title}</h2>
                <p className="text-xs mb-6" style={{ color: 'var(--color-muted)' }}>
                  Fields marked <span style={{ color: 'var(--color-accent)' }}>*</span> are required.
                </p>
                <ContactForm key={activeTab} tabId={activeTab} />
              </div>
            </div>

            {/* Right: offices */}
            <div className="flex flex-col gap-5">
              <h2 className="text-lg font-extrabold gradient-text">Our Offices</h2>
              {OFFICES.map((office) => (
                <div key={office.id} id={`office-${office.id}`}
                  className="p-6 rounded-2xl border flex flex-col gap-4" style={{ background: 'var(--color-card)', borderColor: BORDER }}>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: 'rgba(41, 171, 226, 0.1)', color: 'var(--color-accent)' }}>{office.type}</span>
                    <h3 className="font-bold text-sm text-white mt-2 leading-snug">{office.name}</h3>
                  </div>
                  <ul className="flex flex-col gap-2.5 text-xs" style={{ color: 'var(--color-muted)' }}>
                    <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span><span>{office.addr}</span></li>
                    <li className="flex items-center gap-2"><span className="flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 14.92z"/></svg></span>
                      <a href={`tel:${office.phone}`} className="hover:text-white transition-colors">{office.phone}</a>
                    </li>
                    <li className="flex items-center gap-2"><span className="flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
                      <a href={`mailto:${office.email}`} className="hover:text-white transition-colors break-all">{office.email}</a>
                    </li>
                    <li className="flex items-center gap-2"><span className="flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span><span>{office.hours}</span></li>
                  </ul>
                </div>
              ))}

              {/* WhatsApp card */}
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer" id="contact-whatsapp-card"
                className="flex items-center gap-4 p-5 rounded-2xl border transition-all hover:scale-[1.02]" style={{ background: 'rgba(37,211,102,0.06)', borderColor: 'rgba(37,211,102,0.2)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#25D366' }}>
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="white"><path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.742 5.507 2.043 7.824L0 32l8.418-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.471c-.4-.2-2.362-1.165-2.728-1.298-.366-.133-.633-.2-.9.2-.266.4-1.033 1.298-1.266 1.565-.233.266-.466.3-.866.1-.4-.2-1.688-.622-3.215-1.983-1.188-1.06-1.99-2.37-2.223-2.77-.233-.4-.025-.616.175-.815.18-.179.4-.466.6-.7.2-.233.266-.4.4-.666.133-.266.066-.5-.033-.7-.1-.2-.9-2.166-1.233-2.966-.325-.78-.655-.674-.9-.686l-.767-.013c-.266 0-.7.1-1.066.5-.366.4-1.4 1.366-1.4 3.332s1.433 3.865 1.633 4.132c.2.266 2.82 4.306 6.832 6.036.955.413 1.7.66 2.282.844.958.306 1.832.263 2.52.16.769-.115 2.362-.965 2.695-1.898.333-.933.333-1.733.233-1.898-.1-.166-.366-.266-.766-.466z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: '#25D366' }}>Quick Response on WhatsApp</p>
                  <p className="text-xs" style={{ color: 'var(--color-muted)' }}>Typically replies within 1 hour</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
