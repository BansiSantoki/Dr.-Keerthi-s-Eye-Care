/**
 * SINGLE SOURCE OF TRUTH FOR EVERY LINK ON THE CARD.
 * Replace the three social URLs below with the official pages.
 */
export const FACEBOOK_URL = 'PASTE_FACEBOOK_URL_HERE';
export const INSTAGRAM_URL = 'PASTE_INSTAGRAM_URL_HERE';
export const YOUTUBE_URL = 'PASTE_YOUTUBE_URL_HERE';

export const MAPS_QUERY =
'4th Floor, JJ Makuta Building, Metro Pillar Number C963, At Metro Station NGRT, Habsiguda Main Road, Hyderabad, 500007';

export const LINKS = {
  phone: 'tel:+917670811451',
  website: 'https://drkeerthiseyecare.com',
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`,
  facebook: FACEBOOK_URL,
  instagram: INSTAGRAM_URL,
  youtube: YOUTUBE_URL
};

export const CLINIC = {
  name: "Dr. Keerthi's Eye Care",
  tagline: 'Expert Care for a Clear Vision',
  phoneDisplay: '767 0811 451',
  websiteDisplay: 'www.drkeerthiseyecare.com',
  address: [
  '4th Floor, JJ Makuta Building,',
  'Metro Pillar Number: C963,',
  'At Metro Station NGRT,',
  'Habsiguda Main Rd,',
  'Hyderabad, 500007']

};