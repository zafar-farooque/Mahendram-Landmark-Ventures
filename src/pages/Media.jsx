import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';

const NEWS = [
  { category: 'Project Win', date: 'Jun 2024', title: 'Mahendram Landmark wins ₹85 Crore Warehousing Project in Pune', desc: 'Mahendram Landmark Ventures has been awarded a major warehousing complex project for a leading logistics company in Pune, Maharashtra.', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80', color: '#22C55E' },
  { category: 'Press Release', date: 'May 2024', title: 'Ortus Apex Expands Facility Management Portfolio to 3 Million Sq Ft', desc: 'Ortus Apex, the facility management arm of Mahendram Landmark Ventures, has reached a managed portfolio milestone of 3 million sq ft across India.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80', color: '#34D399' },
  { category: 'Award', date: 'Apr 2024', title: 'Inovvio Interior wins Best Office Fit-Out of the Year 2024', desc: 'Inovvio Interior has been recognised by the Interior Design Association of India for its award-winning fit-out project for a leading BFSI client in Delhi NCR.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80', color: '#FCD34D' },
  { category: 'Announcement', date: 'Mar 2024', title: 'Mahendram Landmark Opens New Regional Office in Hyderabad', desc: 'To support our growing project pipeline in Telangana and Andhra Pradesh, Mahendram Landmark Ventures has opened a full-service regional office in Hyderabad.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80', color: '#29ABE2' },
  { category: 'Project Win', date: 'Feb 2024', title: '₹42 Crore MEP Contract Secured for IT Park, Bengaluru', desc: 'Mahendram Landmark has been awarded the complete MEP engineering and installation contract for a 5-tower IT park in Bengaluru.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80', color: '#22C55E' },
  { category: 'Event', date: 'Jan 2024', title: 'Mahendram Participates at ACETECH Mumbai 2024', desc: 'Our team showcased our engineering, interior and facility management capabilities at ACETECH Mumbai, India\'s leading construction technology expo.', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80', color: '#A855F7' },
];

const CAT_COLOR = { 'Project Win': '#22C55E', 'Press Release': '#29ABE2', Award: '#F59E0B', Announcement: '#6366F1', Event: '#A855F7' };

export default function Media() {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen">
      <Helmet><title>Media & Newsroom | Mahendram Landmark</title><meta name="description" content="Latest news, press releases, project wins, events and awards from Mahendram Landmark Ventures." /></Helmet>
      <section className="relative pt-20 pb-16 md:pt-48 md:pb-32 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/70" />
        <div className="relative z-10 container-xl text-center">
          <FadeIn><h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6">Media &<br />Newsroom</h1></FadeIn>
          <FadeIn delay={0.2}><p className="text-lg text-white/80 max-w-2xl mx-auto">The latest news, project wins, press releases, events and announcements from Mahendram Landmark Ventures and our group companies.</p></FadeIn>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS.map((n, i) => (
              <FadeIn key={n.title} delay={i * 0.08}>
                <div className="bg-white dark:bg-[#111827] rounded-[2rem] overflow-hidden border border-gray-100 dark:border-white/10 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] font-black px-3 py-1 rounded-full text-white" style={{ background: CAT_COLOR[n.category] || '#29ABE2' }}>{n.category}</span>
                    <span className="absolute top-4 right-4 text-[10px] font-bold text-white/80 bg-black/40 px-2 py-1 rounded-full">{n.date}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-extrabold text-gray-900 dark:text-white mb-3 leading-snug text-base">{n.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{n.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
