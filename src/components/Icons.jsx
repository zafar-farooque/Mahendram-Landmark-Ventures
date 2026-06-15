/* ─────────────────────────────────────────────────────────────
   Icons.jsx — Centralized SVG icon library
   All icons accept: size (number, default 24), color (string, default 'currentColor'), className
   ───────────────────────────────────────────────────────────── */

const base = (d, viewBox = '0 0 24 24') =>
  ({ size = 24, color = 'currentColor', className = '' }) =>
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={viewBox} fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{d}</svg>;

/* ── Construction & Engineering ─────────────── */
export const IconCrane = base(<><path d="M4 21V8l8-5 8 5v13"/><path d="M12 3v18"/><path d="M4 12h16"/><path d="M4 17h16"/></>);
export const IconBuilding = base(<><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22V12h6v10"/><path d="M9 7h1"/><path d="M14 7h1"/><path d="M9 11h1"/><path d="M14 11h1"/></>);
export const IconFactory = base(<><path d="M2 20V9l7-4v4l7-4v15H2z"/><path d="M16 20V4l6 3v13"/><path d="M6 14v2"/><path d="M10 14v2"/></>);
export const IconBridge = base(<><path d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4"/><path d="M4 18H2"/><path d="M22 18h-2"/><path d="M8 14V6"/><path d="M16 14V6"/><path d="M6 6h12"/></>);
export const IconWarehouse = base(<><path d="M2 21V7l10-4 10 4v14"/><path d="M12 3v18"/><path d="M2 12h20"/><path d="M6 17h2"/><path d="M16 17h2"/></>);
export const IconHospital = base(<><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8"/><path d="M8 12h8"/></>);
export const IconHotel = base(<><rect x="1" y="5" width="22" height="16" rx="2"/><path d="M1 12h22"/><circle cx="8" cy="9" r="1"/><circle cx="16" cy="9" r="1"/></>);
export const IconAnchor = base(<><circle cx="12" cy="5" r="3"/><path d="M12 8v13"/><path d="M5 15a7 7 0 0 0 14 0"/><path d="M5 15H3"/><path d="M19 15h2"/></>);
export const IconTrain = base(<><rect x="4" y="3" width="16" height="14" rx="3"/><path d="M4 11h16"/><path d="M9 3v8"/><path d="M15 3v8"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/><path d="m7 20 2-2"/><path d="m17 20-2-2"/></>);
export const IconTruck = base(<><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>);
export const IconDataCenter = base(<><rect x="2" y="3" width="20" height="5" rx="1"/><rect x="2" y="10" width="20" height="5" rx="1"/><rect x="2" y="17" width="20" height="5" rx="1"/><circle cx="18" cy="5.5" r="1" fill="currentColor"/><circle cx="18" cy="12.5" r="1" fill="currentColor"/><circle cx="18" cy="19.5" r="1" fill="currentColor"/></>);

/* ── MEP & Utilities ────────────────────────── */
export const IconLightning = base(<><path d="m13 2-8 11h7l-2 9 8-11h-7l2-9z"/></>);
export const IconFire = base(<><path d="M12 21c-4-4-6-8-2-13 1 3 3 4 4 4-1-4 2-7 4-9 0 4 2 6 4 8 0 3-1 7-4 8 0-2-1-3-2-4 0 2-1 4-4 6z"/></>);
export const IconGear = base(<><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 1.38 13.2M4.93 4.93a10 10 0 0 0-1.38 13.2M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></>);
export const IconWrench = base(<><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"/></>);

/* ── Interiors & Design ─────────────────────── */
export const IconPalette = base(<><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></>);
export const IconPencil = base(<><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></>);

/* ── Supply Chain & Logistics ───────────────── */
export const IconBox = base(<><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></>);
export const IconRefresh = base(<><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></>);

/* ── Soft / Values ──────────────────────────── */
export const IconGraduate = base(<><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></>);
export const IconLink = base(<><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>);
export const IconMap = base(<><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></>);
export const IconChart = base(<><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></>);
export const IconCheckCircle = base(<><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></>);
export const IconShield = base(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>);
export const IconHandshake = base(<><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-1"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></>);
export const IconMuscle = base(<><path d="M14.5 12.5c.83-.83 2.17-.83 3 0l4 4a2.12 2.12 0 0 1-3 3l-4-4c-.83-.83-.83-2.17 0-3z"/><path d="m8 12 4-8 2 3 2-1 2 4"/><path d="M10.5 14.5c-.83.83-2.17.83-3 0l-4-4a2.12 2.12 0 0 1 3-3l4 4c.83.83.83 2.17 0 3z"/></>);
export const IconLightbulb = base(<><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></>);
export const IconLeaf = base(<><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></>);
export const IconTrophy = base(<><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></>);

/* ── Contact & Location ─────────────────────── */
export const IconPin = base(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>);
export const IconPhone = base(<><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 14.92z"/></>);
export const IconMail = base(<><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>);
export const IconChat = base(<><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></>);
export const IconClock = base(<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>);
export const IconGlobe = base(<><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>);

/* ── Sectors ────────────────────────────────── */
export const IconCity = base(<><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></>);
export const IconShoppingBag = base(<><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></>);
export const IconGovernment = base(<><path d="M3 22h18"/><path d="M6 18v-7"/><path d="M10 18v-7"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M12 2 3 7h18L12 2z"/><path d="M3 7v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7"/></>);
export const IconPower = base(<><path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/><line x1="12" x2="12" y1="2" y2="12"/></>);
export const IconPSU = base(<><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></>);

/* ── Other ──────────────────────────────────── */
export const IconEducation = base(<><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></>);
