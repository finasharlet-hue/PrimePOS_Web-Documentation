const ICONS = {
  key: `<svg class="icon" viewBox="0 0 24 24"><circle cx="7" cy="15" r="4"/><path d="M10.5 11.5L21 1"/><path d="M17 5l3 3"/><path d="M14 8l3 3"/></svg>`,
  grid: `<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  box: `<svg class="icon" viewBox="0 0 24 24"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>`,
  truck: `<svg class="icon" viewBox="0 0 24 24"><rect x="1" y="6" width="14" height="11" rx="1"/><path d="M15 10h4l3 3v4h-7z"/><circle cx="6" cy="19" r="1.8"/><circle cx="17.5" cy="19" r="1.8"/></svg>`,
  cart: `<svg class="icon" viewBox="0 0 24 24"><circle cx="9" cy="20" r="1.3"/><circle cx="18" cy="20" r="1.3"/><path d="M2 3h3l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6"/></svg>`,
  people: `<svg class="icon" viewBox="0 0 24 24"><circle cx="8.5" cy="8" r="3.2"/><path d="M2.5 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="8.5" r="2.5"/><path d="M15.5 14.2c2.5.3 4.5 2.6 4.5 5.3"/></svg>`,
  wallet: `<svg class="icon" viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v3"/><path d="M3 7v11a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-4a2.5 2.5 0 0 0 0 5h5"/></svg>`,
  calc: `<svg class="icon" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8"/><path d="M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01"/></svg>`,
  folder: `<svg class="icon" viewBox="0 0 24 24"><path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z"/></svg>`,
  chart: `<svg class="icon" viewBox="0 0 24 24"><path d="M4 20V10"/><path d="M11 20V4"/><path d="M18 20v-7"/><path d="M2 20h20"/></svg>`,
  shield: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 2l8 3.5v6C20 16.5 16.6 20.7 12 22c-4.6-1.3-8-5.5-8-10.5v-6L12 2z"/><path d="M9 12l2 2 4-4"/></svg>`,
  gear: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 13a7.6 7.6 0 0 0 0-2l2-1.6-2-3.5-2.4 1a7.6 7.6 0 0 0-1.7-1L15 3h-4l-.3 2.9a7.6 7.6 0 0 0-1.7 1l-2.4-1-2 3.5L6.6 11a7.6 7.6 0 0 0 0 2l-2 1.6 2 3.5 2.4-1a7.6 7.6 0 0 0 1.7 1L11 21h4l.3-2.9a7.6 7.6 0 0 0 1.7-1l2.4 1 2-3.5z"/></svg>`,
  book: `<svg class="icon" viewBox="0 0 24 24"><path d="M3 5a2 2 0 0 1 2-2h6v18H5a2 2 0 0 1-2-2z"/><path d="M21 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 0 2-2z"/></svg>`,
  camera: `<svg class="icon" viewBox="0 0 24 24"><path d="M4 8a2 2 0 0 1 2-2h1.5l1-2h7l1 2H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="3.5"/></svg>`,
  play: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="6,4 20,12 6,20"/></svg>`,
  pin: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/></svg>`,
  menu: `<svg class="icon" viewBox="0 0 24 24"><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></svg>`,
  sun: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8"/></svg>`,
  moon: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>`
};


const GROUP_ICONS = {
  "Getting Started": "key",
  "Items & Inventory": "box",
  "Purchases": "truck",
  "Sales": "cart",
  "Suppliers & Customers": "people",
  "Expenses": "wallet",
  "Accounting": "calc",
  "Documents": "folder",
  "Reports": "chart",
  "Users & Access": "shield",
  "Settings": "gear"
};
