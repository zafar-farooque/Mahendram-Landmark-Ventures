import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = '918210146579';
const WHATSAPP_MSG    = encodeURIComponent('Hello, I would like to request a proposal from Mahendram Landmark Ventures.');

const FOOTER_LINKS = [
  {
    heading: 'Company',
    links: [
      { label: 'About',                 to: '/about' },
      { label: 'Leadership',            to: '/about' },
      { label: 'Governance',            to: '/about' },
      { label: 'ESG',                   to: '/sustainability' },
      { label: 'Awards',                to: '/about' },
      { label: 'Certifications',        to: '/quality' },
      { label: 'Safety & Quality',      to: '/safety' },
      { label: '1Project 1Tree 1Life',  to: '/sustainability' },
    ],
  },
  {
    heading: 'What We Do',
    links: [
      { label: 'Mahendram Landmark',    to: '/about' },
      { label: 'Inovvio Interior',      to: '/inovvio' },
      { label: 'Ortus Apex',            to: '/ortus' },
      { label: 'Solutions',             to: '/solutions' },
      { label: 'Industries',            to: '/industries' },
      { label: 'PEB Solutions',         to: '/services' },
      { label: 'Construction',          to: '/services' },
      { label: 'Engineering & Design',  to: '/services' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Projects',              to: '/projects' },
      { label: 'Case Studies',          to: '/projects' },
      { label: 'Insights',              to: '/resources' },
      { label: 'News',                  to: '/media' },
      { label: 'Downloads',             to: '/resources' },
      { label: 'Media Gallery',         to: '/media' },
    ],
  },
  {
    heading: 'Business',
    links: [
      { label: 'Careers',               to: '/careers' },
      { label: 'Vendor Hub',            to: '/partner' },
      { label: 'Investor Relations',    to: '/about' },
      { label: 'Contact Us',            to: '/contact' },
      { label: 'Request Consultation',  to: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy',        to: '/privacy' },
      { label: 'Terms & Conditions',    to: '/terms' },
      { label: 'Cookies Policy',        to: '/cookies' },
      { label: 'Disclaimer',            to: '/disclaimer' },
      { label: 'Sitemap',               to: '/sitemap' },
      { label: 'Code of Conduct',       to: '/code-of-conduct' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer id="main-footer" className="relative overflow-hidden bg-white dark:bg-[#050A15] border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="absolute w-[800px] h-[800px] rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(41, 171, 226, 0.05) 0%, transparent 70%)' }} />

        <div className="container-xl px-4 sm:px-6 py-8 md:py-10 relative z-10">
          
          {/* Top Brand Banner */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-200 dark:border-gray-800/60 mb-6">
            <Link to="/" id="footer-logo" className="relative flex items-center select-none w-fit">
              <img src="/final_logo.png" alt="Mahendram Landmark Ventures" className="h-10 md:h-12 w-auto object-contain dark:hidden" style={{ maxWidth: '240px' }} />
              <img src="/logo_dark_mode.png" alt="Mahendram Landmark Ventures" className="h-10 md:h-12 w-auto object-contain hidden dark:block" style={{ maxWidth: '240px' }} />
            </Link>
            <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-[#0A4D8C] dark:text-[#29ABE2] text-center md:text-right">
              Engineering | Infrastructure | Interiors | Facility Management
            </p>
          </div>

          {/* Links Grid — 5 Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 pb-6 border-b border-gray-200 dark:border-gray-800/60">
            {FOOTER_LINKS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[11px] font-black tracking-[0.15em] uppercase mb-4 text-gray-900 dark:text-white">{col.heading}</h3>
                <ul className="flex flex-col gap-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-[#0A4D8C] dark:hover:text-[#29ABE2] transition-colors duration-200 group">
                        <span className="w-1 h-1 rounded-full flex-shrink-0 bg-gray-300 dark:bg-gray-700 transition-colors group-hover:bg-[#0A4D8C] dark:group-hover:bg-[#29ABE2]" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Details Grid */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-gray-200 dark:border-gray-800/60">
            <div>
              <p className="text-[11px] font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-widest">Corporate Information</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Mahendram Landmark Ventures Pvt. Ltd.<br/>
                India's Integrated Infrastructure Company
              </p>
            </div>
            
            <div>
              <p className="text-[11px] font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-widest">Registered & Corporate Office</p>
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A4D8C] dark:text-[#29ABE2] mt-0.5 flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Mumbai, Maharashtra, India<br/>
                  (Pan India Delivery Network)
                </p>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-widest">Contact Details</p>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A4D8C] dark:text-[#29ABE2] flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 14.92z"/></svg>
                  <a href="tel:+919876543210" className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#0A4D8C] dark:hover:text-white transition-colors">+91 98765 43210</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A4D8C] dark:text-[#29ABE2] flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <a href="mailto:info@mahendramlandmark.com" className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#0A4D8C] dark:hover:text-white transition-colors">info@mahendramlandmark.com</a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-widest">Connect</p>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color:'#25D366'}} className="flex-shrink-0"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer" className="text-xs font-medium hover:text-[#0A4D8C] dark:hover:text-white transition-colors" style={{color:'#25D366'}}>WhatsApp Support</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#0A66C2] flex-shrink-0"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-[#0A4D8C] dark:hover:text-white transition-colors">LinkedIn Network</a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-[11px] font-medium tracking-wide text-gray-500 uppercase">
              © {year} Mahendram Landmark Ventures Pvt. Ltd. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-[11px] font-medium text-gray-500 hover:text-white uppercase tracking-wide">Privacy</Link>
              <Link to="/terms" className="text-[11px] font-medium text-gray-500 hover:text-white uppercase tracking-wide">Terms</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} id="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp"
        className="fixed bottom-[88px] md:bottom-6 right-4 md:right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ backgroundColor: '#25D366' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="white" aria-hidden="true">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.742 5.507 2.043 7.824L0 32l8.418-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.784-1.856l-.487-.289-5.003 1.193 1.255-4.874-.317-.502A13.267 13.267 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.27-9.862c-.4-.2-2.362-1.165-2.728-1.298-.366-.133-.633-.2-.9.2-.266.4-1.033 1.298-1.266 1.565-.233.266-.466.3-.866.1-.4-.2-1.688-.622-3.215-1.983-1.188-1.06-1.99-2.37-2.223-2.77-.233-.4-.025-.616.175-.815.18-.179.4-.466.6-.7.2-.233.266-.4.4-.666.133-.266.066-.5-.033-.7-.1-.2-.9-2.166-1.233-2.966-.325-.78-.655-.674-.9-.686l-.767-.013c-.266 0-.7.1-1.066.5-.366.4-1.4 1.366-1.4 3.332s1.433 3.865 1.633 4.132c.2.266 2.82 4.306 6.832 6.036.955.413 1.7.66 2.282.844.958.306 1.832.263 2.52.16.769-.115 2.362-.965 2.695-1.898.333-.933.333-1.733.233-1.898-.1-.166-.366-.266-.766-.466z" />
        </svg>
        <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#25D366' }} />
      </a>
    </>
  );
}
