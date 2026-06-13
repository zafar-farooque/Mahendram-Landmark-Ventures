import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/* ─────────────────────────────────────────
   Config
───────────────────────────────────────── */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_ID';
const WHATSAPP_NUMBER    = '919999999999';
const WHATSAPP_MSG       = encodeURIComponent('Hello, I would like to get in touch with Mahendram Landmark Ventures Pvt Ltd.');

/* ─────────────────────────────────────────
   Tab definitions
───────────────────────────────────────── */
const TABS = [
  { id: 'enquiry',  label: 'Business Enquiry'    },
  { id: 'tender',   label: 'Tender Submission'   },
  { id: 'vendor',   label: 'Vendor Registration' },
  { id: 'career',   label: 'Career Application'  },
];

/* ─────────────────────────────────────────
   Field definitions per tab
───────────────────────────────────────── */
const SERVICE_OPTIONS = [
  'Infrastructure Development', 'Construction Services',
  'Pre-Engineered Buildings (PEB)', 'MEP Services',
  'Fire Protection Systems', 'Interior Fit-Out',
  'Facility Management', 'Industrial Solutions',
  'Fabrication & Structural', 'Power & Utility',
  'Supply & Trading', 'Equipment Rental',
];

const DEPARTMENT_OPTIONS = [
  'Engineering', 'Construction & Site Management',
  'Interior Design', 'Facility Management',
  'Project Management', 'Business Development',
  'Finance & Accounts', 'Human Resources', 'IT & Technology',
];

const FORMS = {
  enquiry: {
    title:  'Business Enquiry',
    hidden: 'Business Enquiry',
    fields: [
      { name: 'name',     label: 'Full Name',       type: 'text',   placeholder: 'Your full name',             required: true  },
      { name: 'company',  label: 'Company Name',    type: 'text',   placeholder: 'Your company / organisation', required: false },
      { name: 'email',    label: 'Email Address',   type: 'email',  placeholder: 'your@email.com',             required: true  },
      { name: 'phone',    label: 'Phone Number',    type: 'tel',    placeholder: '+91 XXXXX XXXXX',            required: true  },
      {
        name: 'service', label: 'Service Required', type: 'select',
        options: SERVICE_OPTIONS, required: true,
      },
      { name: 'message',  label: 'Project Details', type: 'textarea', placeholder: 'Describe your project, location, timeline and budget...', required: true },
    ],
  },
  tender: {
    title:  'Tender Submission',
    hidden: 'Tender Submission',
    fields: [
      { name: 'company',   label: 'Company Name',  type: 'text',     placeholder: 'Registered company name',  required: true  },
      { name: 'gst',       label: 'GST Number',    type: 'text',     placeholder: 'GSTIN (e.g. 22AAAAA0000A1Z5)', required: false },
      { name: 'work_type', label: 'Work Type',     type: 'text',     placeholder: 'e.g. Civil, MEP, Interior…',  required: true  },
      { name: 'location',  label: 'Project Location', type: 'text', placeholder: 'City / State',               required: true  },
      { name: 'message',   label: 'Tender Details', type: 'textarea', placeholder: 'Tender reference, scope of work, submission deadline...', required: true },
    ],
  },
  vendor: {
    title:  'Vendor Registration',
    hidden: 'Vendor Registration',
    fields: [
      { name: 'company',  label: 'Company Name',      type: 'text',     placeholder: 'Your company name',           required: true  },
      { name: 'contact',  label: 'Contact Person',    type: 'text',     placeholder: 'Name of authorised contact',   required: true  },
      { name: 'services', label: 'Services Offered',  type: 'text',     placeholder: 'e.g. Steel Fabrication, MEP…', required: true  },
      { name: 'location', label: 'Location / Region', type: 'text',     placeholder: 'City, State',                  required: true  },
      { name: 'message',  label: 'Additional Details', type: 'textarea', placeholder: 'Years of experience, certifications, past projects...', required: false },
    ],
  },
  career: {
    title:  'Career Application',
    hidden: 'Career Application',
    fields: [
      { name: 'name',       label: 'Full Name',      type: 'text',   placeholder: 'Your full name',          required: true  },
      { name: 'email',      label: 'Email Address',  type: 'email',  placeholder: 'your@email.com',          required: true  },
      { name: 'phone',      label: 'Phone Number',   type: 'tel',    placeholder: '+91 XXXXX XXXXX',         required: true  },
      {
        name: 'department', label: 'Department',     type: 'select',
        options: DEPARTMENT_OPTIONS,                                  required: true,
      },
      { name: 'message',    label: 'About Yourself', type: 'textarea', placeholder: 'Your experience, skills, current role and what you bring to the team...', required: true },
    ],
  },
};

/* ─────────────────────────────────────────
   Office Cards
───────────────────────────────────────── */
const OFFICES = [
  {
    id:    'corporate',
    type:  'Corporate Office',
    name:  'Mahendram Landmark Ventures Pvt Ltd',
    addr:  'Corporate Office Address, City, State – PIN Code, India',
    phone: '+91 XXXXX XXXXX',
    email: 'info@mahendramlandmark.com',
    hours: 'Mon – Sat: 9:00 AM – 6:00 PM',
    badge: 'HQ',
  },
  {
    id:    'regional-1',
    type:  'Regional Office',
    name:  'Regional Office — North India',
    addr:  'Regional Office Address, Delhi NCR – PIN Code, India',
    phone: '+91 XXXXX XXXXX',
    email: 'north@mahendramlandmark.com',
    hours: 'Mon – Sat: 9:00 AM – 6:00 PM',
    badge: 'North',
  },
  {
    id:    'regional-2',
    type:  'Regional Office',
    name:  'Regional Office — South India',
    addr:  'Regional Office Address, Hyderabad / Chennai – India',
    phone: '+91 XXXXX XXXXX',
    email: 'south@mahendramlandmark.com',
    hours: 'Mon – Sat: 9:00 AM – 6:00 PM',
    badge: 'South',
  },
];

/* ─────────────────────────────────────────
   Shared Input component
───────────────────────────────────────── */
function Field({ field, value, onChange }) {
  const base =
    'w-full border rounded-lg px-4 py-3 text-sm text-textMain placeholder:text-gray-400 ' +
    'focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent ' +
    'transition-colors duration-150 bg-white';

  const sharedProps = {
    id:          `field-${field.name}`,
    name:        field.name,
    value:       value,
    onChange:    (e) => onChange(field.name, e.target.value),
    required:    field.required,
    placeholder: field.placeholder,
    className:   base,
    style:       { borderColor: '#E5E7EB' },
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={`field-${field.name}`}
        className="text-xs font-semibold"
        style={{ color: '#1A2B4A' }}
      >
        {field.label}
        {field.required && <span className="ml-0.5" style={{ color: '#D4891A' }}>*</span>}
      </label>

      {field.type === 'textarea' ? (
        <textarea
          {...sharedProps}
          rows={4}
          className={`${base} resize-none`}
        />
      ) : field.type === 'select' ? (
        <select {...sharedProps} className={`${base} cursor-pointer`}>
          <option value="">— Select {field.label} —</option>
          {field.options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input {...sharedProps} type={field.type} />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   Single Form
───────────────────────────────────────── */
function ContactForm({ formKey }) {
  const formDef = FORMS[formKey];

  // Build initial state from fields
  const emptyState = () =>
    Object.fromEntries(formDef.fields.map((f) => [f.name, '']));

  const [values,  setValues]  = useState(emptyState);
  const [status,  setStatus]  = useState('idle'); // idle | submitting | success | error
  const [errMsg,  setErrMsg]  = useState('');

  const handleChange = (name, val) => setValues((prev) => ({ ...prev, [name]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrMsg('');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify({ _form_name: formDef.hidden, ...values }),
      });

      if (res.ok) {
        setStatus('success');
        setValues(emptyState());
      } else {
        const data = await res.json();
        setErrMsg(data?.error || 'Submission failed. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  /* Success state */
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
          style={{ background: 'rgba(212,137,26,0.12)' }}
        >
          ✅
        </div>
        <div>
          <h3 className="text-xl font-extrabold" style={{ color: '#1A2B4A' }}>
            Thank you!
          </h3>
          <p className="mt-1 text-sm" style={{ color: '#6B7280' }}>
            We'll get back to you within 24 hours.
          </p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 px-6 py-2.5 rounded-sm text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: '#D4891A' }}
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Hidden form type */}
      <input type="hidden" name="_form_name" value={formDef.hidden} />

      {formDef.fields.map((field) => (
        <Field
          key={field.name}
          field={field}
          value={values[field.name]}
          onChange={handleChange}
        />
      ))}

      {/* Error message */}
      {status === 'error' && (
        <p
          className="text-xs font-medium px-4 py-3 rounded-lg"
          style={{ background: 'rgba(220,38,38,0.08)', color: '#DC2626' }}
        >
          ⚠ {errMsg}
        </p>
      )}

      {/* Submit */}
      <button
        id={`submit-${formKey}`}
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3.5 rounded-sm text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed mt-1"
        style={{ background: '#D4891A' }}
      >
        {status === 'submitting' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" />
            </svg>
            Sending…
          </span>
        ) : (
          `Submit ${formDef.title} →`
        )}
      </button>

      <p className="text-center text-xs" style={{ color: '#9CA3AF' }}>
        🔒 Your information is kept strictly confidential.
      </p>
    </form>
  );
}

/* ─────────────────────────────────────────
   Tab Switcher
───────────────────────────────────────── */
function TabForms() {
  const [activeTab, setActiveTab] = useState('enquiry');

  return (
    <section id="contact-forms" className="section-padding" style={{ backgroundColor: '#F7F8FA' }}>
      <div className="container-xl">
        <div className="max-w-3xl mx-auto">

          {/* Tab bar */}
          <div
            className="flex overflow-x-auto scrollbar-none rounded-xl p-1 mb-8 gap-1"
            style={{ background: '#E9ECF0' }}
            role="tablist"
            aria-label="Contact form tabs"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex-1 min-w-[5.5rem] px-3 py-2.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-200"
                  style={
                    isActive
                      ? { background: '#1A2B4A', color: '#ffffff', boxShadow: '0 2px 8px rgba(26,43,74,0.25)' }
                      : { background: 'transparent', color: '#6B7280' }
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Form card */}
          <div
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
          >
            {/* Card header */}
            <div className="mb-7 pb-5" style={{ borderBottom: '1px solid #F3F4F6' }}>
              <h2 className="text-xl font-extrabold" style={{ color: '#1A2B4A' }}>
                {FORMS[activeTab].title}
              </h2>
              <p className="text-xs mt-1" style={{ color: '#6B7280' }}>
                Fields marked <span style={{ color: '#D4891A' }}>*</span> are required.
                We respond within 24 business hours.
              </p>
            </div>

            {/* Render form — key forces full re-mount on tab change, resetting state */}
            <ContactForm key={activeTab} formKey={activeTab} />
          </div>

          {/* WhatsApp direct link */}
          <div className="mt-6 flex justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              id="contact-whatsapp-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95 shadow-md"
              style={{ background: '#25D366' }}
            >
              <svg viewBox="0 0 32 32" width="20" height="20" fill="white" aria-hidden="true">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.742 5.507 2.043 7.824L0 32l8.418-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 20.471c-.4-.2-2.362-1.165-2.728-1.298-.366-.133-.633-.2-.9.2-.266.4-1.033 1.298-1.266 1.565-.233.266-.466.3-.866.1-.4-.2-1.688-.622-3.215-1.983-1.188-1.06-1.99-2.37-2.223-2.77-.233-.4-.025-.616.175-.815.18-.179.4-.466.6-.7.2-.233.266-.4.4-.666.133-.266.066-.5-.033-.7-.1-.2-.9-2.166-1.233-2.966-.325-.78-.655-.674-.9-.686l-.767-.013c-.266 0-.7.1-1.066.5-.366.4-1.4 1.366-1.4 3.332s1.433 3.865 1.633 4.132c.2.266 2.82 4.306 6.832 6.036.955.413 1.7.66 2.282.844.958.306 1.832.263 2.52.16.769-.115 2.362-.965 2.695-1.898.333-.933.333-1.733.233-1.898-.1-.166-.366-.266-.766-.466z" />
              </svg>
              Chat Directly on WhatsApp
              <span className="opacity-70">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Office Cards
───────────────────────────────────────── */
function OfficeCards() {
  return (
    <section id="office-locations" className="py-16 bg-white">
      <div className="container-xl">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#D4891A' }}>
            Our Locations
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: '#1A2B4A' }}>
            Find Us Across India
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {OFFICES.map((office) => (
            <div
              key={office.id}
              id={`office-${office.id}`}
              className="relative flex flex-col gap-5 p-7 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Badge */}
              <span
                className="absolute top-5 right-5 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                style={{ background: '#1A2B4A' }}
              >
                {office.badge}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{ background: 'rgba(26,43,74,0.07)' }}
              >
                📍
              </div>

              {/* Info */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#D4891A' }}>
                  {office.type}
                </p>
                <h3 className="font-bold text-sm mb-3 leading-snug" style={{ color: '#1A2B4A' }}>
                  {office.name}
                </h3>

                <ul className="flex flex-col gap-2.5">
                  <li className="flex items-start gap-2.5 text-xs" style={{ color: '#6B7280' }}>
                    <span className="mt-0.5 flex-shrink-0">📍</span>
                    {office.addr}
                  </li>
                  <li className="flex items-center gap-2.5 text-xs">
                    <span className="flex-shrink-0">📞</span>
                    <a
                      href={`tel:${office.phone}`}
                      className="transition-colors duration-150 hover:underline"
                      style={{ color: '#6B7280' }}
                    >
                      {office.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs">
                    <span className="flex-shrink-0">✉️</span>
                    <a
                      href={`mailto:${office.email}`}
                      className="transition-colors duration-150"
                      style={{ color: '#D4891A' }}
                      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                    >
                      {office.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs" style={{ color: '#6B7280' }}>
                    <span className="flex-shrink-0">🕘</span>
                    {office.hours}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Hero
───────────────────────────────────────── */
function PageHero() {
  return (
    <section
      id="contact-hero"
      className="relative py-20 md:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F1C2E 0%, #1A2B4A 70%, #1e3a5f 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4891A, transparent 70%)' }}
      />

      <div className="container-xl relative z-10 flex flex-col items-center text-center gap-5">
        <div className="flex items-center gap-2 text-xs font-medium" style={{ color: '#64748B' }}>
          <Link to="/" className="hover:text-white transition-colors duration-150">Home</Link>
          <span>/</span>
          <span style={{ color: '#D4891A' }}>Contact</span>
        </div>

        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border"
          style={{ color: '#D4891A', borderColor: 'rgba(212,137,26,0.4)', background: 'rgba(212,137,26,0.1)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          We Respond Within 24 Hours
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
          Let's Build Something<br />
          <span style={{ color: '#D4891A' }}>Exceptional Together</span>
        </h1>

        <p className="text-base max-w-xl leading-relaxed" style={{ color: '#94A3B8' }}>
          Whether it's a business enquiry, tender, vendor partnership or career opportunity —
          reach us through the right form below.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Page Export
───────────────────────────────────────── */
export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us — Request a Proposal | Mahendram Landmark Ventures Pvt Ltd</title>
        <meta name="description" content="Get in touch with Mahendram Landmark Ventures. Submit a business enquiry, tender, vendor registration or career application. Pan India engineering and infrastructure company." />
        <meta property="og:title" content="Contact Mahendram Landmark Ventures Pvt Ltd" />
        <meta property="og:description" content="Request a proposal, schedule a consultation or submit a tender. We respond within 24 hours." />
        <meta property="og:url" content="https://www.mahendramlandmark.com/contact" />
      </Helmet>
      <PageHero />
      <TabForms />
      <OfficeCards />
    </>
  );
}
