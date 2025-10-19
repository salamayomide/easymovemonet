
import type { Route } from "../types/route";

/**
 * City-complete interconnected Lagos starter dataset.
 * - Many major corridors included.
 * - Reverse routes added where appropriate for bidirectional search.
 * - Coordinates are approximate; refine as you collect better data.
 */

export const routes: Route[] = [
  // ===== LAGOS EAST-WEST / IKORODU CORRIDOR =====
  {
    id: "r-001",
    name: "Ikorodu → Mile 12 → Ojota → CMS",
    transportType: "BRt",
    fare: 900,
    stops: [
      { id: "ikorodu", name: "Ikorodu", latitude: 6.619, longitude: 3.508, type: "Danfo" },
      { id: "mile12", name: "Mile 12", latitude: 6.60797, longitude: 3.3968, type: "Danfo" },
      { id: "ojota", name: "Ojota", latitude: 6.580, longitude: 3.350, type: "Danfo" },
      { id: "maryland", name: "Maryland", latitude: 6.560, longitude: 3.363, type: "Danfo" },
      { id: "yaba", name: "Yaba", latitude: 6.509, longitude: 3.378, type: "Danfo" },
      { id: "obalende", name: "Obalende", latitude: 6.447, longitude: 3.406, type: "Danfo" },
      { id: "cms", name: "CMS", latitude: 6.447, longitude: 3.395, type: "Danfo" },
    ],
    travelTime: false
  },
  
  {
    id: "r-002",
    name: "CMS → Ojota → Mile 12 → Ikorodu",
    transportType: "BRT",
    fare: 900,
    stops: [
      { id: "cms", name: "CMS", latitude: 6.447, longitude: 3.395, type: "Danfo" },
      { id: "obalende", name: "Obalende", latitude: 6.447, longitude: 3.406, type: "Danfo" },
      { id: "yaba", name: "Yaba", latitude: 6.509, longitude: 3.378, type: "Danfo" },
      { id: "maryland", name: "Maryland", latitude: 6.560, longitude: 3.363, type: "Danfo" },
      { id: "ojota", name: "Ojota", latitude: 6.580, longitude: 3.350, type: "Danfo" },
      { id: "mile12", name: "Mile 12", latitude: 6.60797, longitude: 3.3968, type: "Danfo" },
      { id: "ikorodu", name: "Ikorodu", latitude: 6.619, longitude: 3.508, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== IKORODU - LEKKI / AJAH BRT =====
  {
    id: "r-003",
    name: "Ikorodu BRT → Ojota → Lekki → Ajah",
    transportType: "BRT",
    fare: 1500,
    stops: [
      { id: "ikorodu_brt", name: "Ikorodu (BRT)", latitude: 6.619, longitude: 3.508, type: "BRT" },
      { id: "ojota_brt", name: "Ojota (BRT)", latitude: 6.580, longitude: 3.350, type: "BRT" },
      { id: "maryland_brt", name: "Maryland (BRT)", latitude: 6.560, longitude: 3.363, type: "BRT" },
      { id: "lekki_phase1", name: "Lekki Phase I", latitude: 6.442, longitude: 3.474, type: "BRT" },
      { id: "ajah", name: "Ajah", latitude: 6.466, longitude: 3.603, type: "BRT" },
    ],
    travelTime: false
  },
  {
    id: "r-004",
    name: "Ajah → Lekki → Ojota → Ikorodu (BRT)",
    transportType: "BRT",
    fare: 1500,
    stops: [
      { id: "ajah", name: "Ajah", latitude: 6.466, longitude: 3.603, type: "BRT" },
      { id: "lekki_phase1", name: "Lekki Phase I", latitude: 6.442, longitude: 3.474, type: "BRT" },
      { id: "maryland_brt", name: "Maryland (BRT)", latitude: 6.560, longitude: 3.363, type: "BRT" },
      { id: "ojota_brt", name: "Ojota (BRT)", latitude: 6.580, longitude: 3.350, type: "BRT" },
      { id: "ikorodu_brt", name: "Ikorodu (BRT)", latitude: 6.619, longitude: 3.508, type: "BRT" },
    ],
    travelTime: false
  },

  // ===== IKEJA - CMS / MARYLAND =====
  {
    id: "r-005",
    name: "Ikeja → Maryland → Obalende → CMS (BRT)",
    transportType: "BRT",
    fare: 700,
    stops: [
      { id: "ikeja", name: "Ikeja", latitude: 6.601, longitude: 3.351, type: "BRT" },
      { id: "adeen", name: "Adeniyi Jones/Ikeja", latitude: 6.600, longitude: 3.341, type: "BRT" },
      { id: "maryland", name: "Maryland", latitude: 6.560, longitude: 3.363, type: "BRT" },
      { id: "obalende", name: "Obalende", latitude: 6.447, longitude: 3.406, type: "BRT" },
      { id: "cms", name: "CMS", latitude: 6.447, longitude: 3.395, type: "BRT" },
    ],
    travelTime: false
  },
  {
    id: "r-006",
    name: "CMS → Obalende → Maryland → Ikeja (BRT)",
    transportType: "BRT",
    fare: 700,
    stops: [
      { id: "cms", name: "CMS", latitude: 6.447, longitude: 3.395, type: "BRT" },
      { id: "obalende", name: "Obalende", latitude: 6.447, longitude: 3.406, type: "BRT" },
      { id: "maryland", name: "Maryland", latitude: 6.560, longitude: 3.363, type: "BRT" },
      { id: "ikeja", name: "Ikeja", latitude: 6.601, longitude: 3.351, type: "BRT" },
    ],
    travelTime: false
  },

  // ===== OSHODI - IKEJA - AGEGE CORRIDOR (Danfo) =====
  {
    id: "r-007",
    name: "Oshodi → Mushin → Agege → Ikeja",
    transportType: "Danfo",
    fare: 500,
    stops: [
      { id: "oshodi", name: "Oshodi", latitude: 6.5535, longitude: 3.3430, type: "Danfo" },
      { id: "mushin", name: "Mushin", latitude: 6.537, longitude: 3.329, type: "Danfo" },
      { id: "agege", name: "Agege", latitude: 6.620, longitude: 3.321, type: "Danfo" },
      { id: "ikeja", name: "Ikeja", latitude: 6.601, longitude: 3.351, type: "Danfo" },
    ],
    travelTime: false
  },
  {
    id: "r-008",
    name: "Ikeja → Agege → Mushin → Oshodi",
    transportType: "Danfo",
    fare: 600,
    stops: [
      { id: "ikeja", name: "Ikeja", latitude: 6.601, longitude: 3.351, type: "Danfo" },
      { id: "agege", name: "Agege", latitude: 6.620, longitude: 3.321, type: "Danfo" },
      { id: "mushin", name: "Mushin", latitude: 6.537, longitude: 3.329, type: "Danfo" },
      { id: "oshodi", name: "Oshodi", latitude: 6.5535, longitude: 3.3430, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== OSHODI - OBULE EGBA / CAPACITY CORRIDOR (BRT) =====
  {
    id: "r-009",
    name: "Oshodi → Iyana-Ipaja → Abule-Egba (BRT)",
    transportType: "BRT",
    fare: 600,
    stops: [
      { id: "oshodi", name: "Oshodi", latitude: 6.5535, longitude: 3.3430, type: "BRT" },
      { id: "iyanipaja", name: "Iyana-Ipaja", latitude: 6.582, longitude: 3.265, type: "BRT" },
      { id: "abuleegba", name: "Abule-Egba", latitude: 6.600, longitude: 3.333, type: "BRT" },
    ],
    travelTime: false
  },
  {
    id: "r-010",
    name: "Abule-Egba → Iyana-Ipaja → Oshodi (BRT)",
    transportType: "BRT",
    fare: 600,
    stops: [
      { id: "abuleegba", name: "Abule-Egba", latitude: 6.600, longitude: 3.333, type: "BRT" },
      { id: "iyanipaja", name: "Iyana-Ipaja", latitude: 6.582, longitude: 3.265, type: "BRT" },
      { id: "oshodi", name: "Oshodi", latitude: 6.5535, longitude: 3.3430, type: "BRT" },
    ],
    travelTime: false
  },

  // ===== MILE 2 / APAPA CORRIDOR =====
  {
    id: "r-011",
    name: "Mile 2 → Iganmu → Apapa → CMS",
    transportType: "Danfo",
    fare: 700,
    stops: [
      { id: "mile2", name: "Mile 2", latitude: 6.460, longitude: 3.287, type: "Danfo" },
      { id: "iganmu", name: "Iganmu", latitude: 6.472, longitude: 3.360, type: "Danfo" },
      { id: "apapa", name: "Apapa", latitude: 6.449, longitude: 3.355, type: "Danfo" },
      { id: "cms", name: "CMS", latitude: 6.447, longitude: 3.395, type: "Danfo" },
    ],
    travelTime: false
  },
  {
    id: "r-012",
    name: "CMS → Apapa → Iganmu → Mile 2",
    transportType: "Danfo",
    fare: 700,
    stops: [
      { id: "cms", name: "CMS", latitude: 6.447, longitude: 3.395, type: "Danfo" },
      { id: "apapa", name: "Apapa", latitude: 6.449, longitude: 3.355, type: "Danfo" },
      { id: "iganmu", name: "Iganmu", latitude: 6.472, longitude: 3.360, type: "Danfo" },
      { id: "mile2", name: "Mile 2", latitude: 6.460, longitude: 3.287, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== YABA - SURULERE - OJU ELEGBA =====
  {
    id: "r-013",
    name: "Yaba → Ojuelegba → Surulere",
    transportType: "Danfo",
    fare: 400,
    stops: [
      { id: "yaba", name: "Yaba", latitude: 6.509, longitude: 3.378, type: "Danfo" },
      { id: "ojuelegba", name: "Ojuelegba", latitude: 6.511604, longitude: 3.363265, type: "Danfo" },
      { id: "surulere", name: "Surulere", latitude: 6.496, longitude: 3.356, type: "Danfo" },
    ],
    travelTime: false
  },
  {
    id: "r-014",
    name: "Surulere → Ojuelegba → Yaba",
    transportType: "Danfo",
    fare: 400,
    stops: [
      { id: "surulere", name: "Surulere", latitude: 6.496, longitude: 3.356, type: "Danfo" },
      { id: "ojuelegba", name: "Ojuelegba", latitude: 6.511604, longitude: 3.363265, type: "Danfo" },
      { id: "yaba", name: "Yaba", latitude: 6.509, longitude: 3.378, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== BERGER - TBS - VI CORRIDOR =====
  {
    id: "r-015",
    name: "Berger → Ojota → Yaba → TBS (BRT)",
    transportType: "BRT",
    fare: 1000,
    stops: [
      { id: "berger", name: "Berger", latitude: 6.561, longitude: 3.350, type: "BRT" },
      { id: "ojota_brt", name: "Ojota (BRT)", latitude: 6.580, longitude: 3.350, type: "BRT" },
      { id: "yaba_brt", name: "Yaba (BRT)", latitude: 6.509, longitude: 3.378, type: "BRT" },
      { id: "tbs", name: "TBS", latitude: 6.451, longitude: 3.392, type: "BRT" },
    ],
    travelTime: false
  },
  {
    id: "r-016",
    name: "TBS → Yaba → Ojota → Berger (BRT)",
    transportType: "BRT",
    fare: 1000,
    stops: [
      { id: "tbs", name: "TBS", latitude: 6.451, longitude: 3.392, type: "BRT" },
      { id: "yaba_brt", name: "Yaba (BRT)", latitude: 6.509, longitude: 3.378, type: "BRT" },
      { id: "ojota_brt", name: "Ojota (BRT)", latitude: 6.580, longitude: 3.350, type: "BRT" },
      { id: "berger", name: "Berger", latitude: 6.561, longitude: 3.350, type: "BRT" },
    ],
    travelTime: false
  },

  // ===== VICTORIA ISLAND / IKOYI / LEKKI =====
  {
    id: "r-017",
    name: "CMS → Lekki Phase I → VI → Ikoyi",
    transportType: "BRT",
    fare: 800,
    stops: [
      { id: "cms", name: "CMS", latitude: 6.447, longitude: 3.395, type: "BRT" },
      { id: "lekki_phase1", name: "Lekki Phase I", latitude: 6.442, longitude: 3.474, type: "BRT" },
      { id: "victoria_island", name: "Victoria Island", latitude: 6.428, longitude: 3.421, type: "BRT" },
      { id: "ikoyi", name: "Ikoyi", latitude: 6.450, longitude: 3.433, type: "BRT" },
    ],
    travelTime: false
  },
  {
    id: "r-018",
    name: "Ikoyi → VI → Lekki → CMS (BRT)",
    transportType: "BRT",
    fare: 800,
    stops: [
      { id: "ikoyi", name: "Ikoyi", latitude: 6.450, longitude: 3.433, type: "BRT" },
      { id: "victoria_island", name: "Victoria Island", latitude: 6.428, longitude: 3.421, type: "BRT" },
      { id: "lekki_phase1", name: "Lekki Phase I", latitude: 6.442, longitude: 3.474, type: "BRT" },
      { id: "cms", name: "CMS", latitude: 6.447, longitude: 3.395, type: "BRT" },
    ],
    travelTime: false
  },

  // ===== VGC / JAKANDE - AJAH CONNECTORS =====
  {
    id: "r-019",
    name: "Lekki Phase I → Jakande → VGC → Ajah",
    transportType: "Danfo",
    fare: 1000,
    stops: [
      { id: "lekki_phase1", name: "Lekki Phase I", latitude: 6.442, longitude: 3.474, type: "Danfo" },
      { id: "jakande", name: "Jakande Estate", latitude: 6.440, longitude: 3.511, type: "Danfo" },
      { id: "vgc", name: "VGC", latitude: 6.451, longitude: 3.553, type: "Danfo" },
      { id: "ajah", name: "Ajah", latitude: 6.466, longitude: 3.603, type: "Danfo" },
    ],
    travelTime: false
  },
  {
    id: "r-020",
    name: "Ajah → VGC → Jakande → Lekki Phase I",
    transportType: "Danfo",
    fare: 1000,
    stops: [
      { id: "ajah", name: "Ajah", latitude: 6.466, longitude: 3.603, type: "Danfo" },
      { id: "vgc", name: "VGC", latitude: 6.451, longitude: 3.553, type: "Danfo" },
      { id: "jakande", name: "Jakande Estate", latitude: 6.440, longitude: 3.511, type: "Danfo" },
      { id: "lekki_phase1", name: "Lekki Phase I", latitude: 6.442, longitude: 3.474, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== OJOTA - ILUPEJU - PALMGROVE =====
  {
    id: "r-021",
    name: "Ojota → Ilupeju → Palmgrove → Oshodi",
    transportType: "Danfo",
    fare: 500,
    stops: [
      { id: "ojota", name: "Ojota", latitude: 6.580, longitude: 3.350, type: "Danfo" },
      { id: "ilupeju", name: "Ilupeju", latitude: 6.587, longitude: 3.319, type: "Danfo" },
      { id: "palmgrove", name: "Palmgrove", latitude: 6.561, longitude: 3.358, type: "Danfo" },
      { id: "oshodi", name: "Oshodi", latitude: 6.5535, longitude: 3.3430, type: "Danfo" },
    ],
    travelTime: false
  },
  {
    id: "r-022",
    name: "Oshodi → Palmgrove → Ilupeju → Ojota",
    transportType: "Danfo",
    fare: 500,
    stops: [
      { id: "oshodi", name: "Oshodi", latitude: 6.5535, longitude: 3.3430, type: "Danfo" },
      { id: "palmgrove", name: "Palmgrove", latitude: 6.561, longitude: 3.358, type: "Danfo" },
      { id: "ilupeju", name: "Ilupeju", latitude: 6.587, longitude: 3.319, type: "Danfo" },
      { id: "ojota", name: "Ojota", latitude: 6.580, longitude: 3.350, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== AGEGE - OGBA - GRA CONNECT =====
  {
    id: "r-023",
    name: "Agege → Ogba → GRA → Ikeja",
    transportType: "Danfo",
    fare: 300,
    stops: [
      { id: "agege", name: "Agege", latitude: 6.620, longitude: 3.321, type: "Danfo" },
      { id: "ogba", name: "Ogba", latitude: 6.636, longitude: 3.338, type: "Danfo" },
      { id: "gbagada_gra", name: "Gbagada / GRA", latitude: 6.546, longitude: 3.365, type: "Danfo" },
      { id: "ikeja", name: "Ikeja", latitude: 6.601, longitude: 3.351, type: "Danfo" },
    ],
    travelTime: false
  },
  {
    id: "r-024",
    name: "Ikeja → GRA → Ogba → Agege",
    transportType: "Danfo",
    fare: 300,
    stops: [
      { id: "ikeja", name: "Ikeja", latitude: 6.601, longitude: 3.351, type: "Danfo" },
      { id: "gbagada_gra", name: "Gbagada / GRA", latitude: 6.546, longitude: 3.365, type: "Danfo" },
      { id: "ogba", name: "Ogba", latitude: 6.636, longitude: 3.338, type: "Danfo" },
      { id: "agege", name: "Agege", latitude: 6.620, longitude: 3.321, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== LEKKI - VICTORIA ISLAND LOOP (Danfo / BRT mix) =====
  {
    id: "r-025",
    name: "Lekki Phase I → VI → Obalende → CMS",
    transportType: "Danfo",
    fare: 500,
    stops: [
      { id: "lekki_phase1", name: "Lekki Phase I", latitude: 6.442, longitude: 3.474, type: "Danfo" },
      { id: "victoria_island", name: "Victoria Island", latitude: 6.428, longitude: 3.421, type: "Danfo" },
      { id: "obalende", name: "Obalende", latitude: 6.447, longitude: 3.406, type: "Danfo" },
      { id: "cms", name: "CMS", latitude: 6.447, longitude: 3.395, type: "Danfo" },
    ],
    travelTime: false
  },
  {
    id: "r-026",
    name: "CMS → Obalende → VI → Lekki Phase I",
    transportType: "Danfo",
    fare: 500,
    stops: [
      { id: "cms", name: "CMS", latitude: 6.447, longitude: 3.395, type: "Danfo" },
      { id: "obalende", name: "Obalende", latitude: 6.447, longitude: 3.406, type: "Danfo" },
      { id: "victoria_island", name: "Victoria Island", latitude: 6.428, longitude: 3.421, type: "Danfo" },
      { id: "lekki_phase1", name: "Lekki Phase I", latitude: 6.442, longitude: 3.474, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== SURULERE - FESTAC - LAGOS ISLAND LINKS =====
  {
    id: "r-027",
    name: "Surulere → Ojuelegba → Apapa → TBS",
    transportType: "Danfo",
    fare: 500,
    stops: [
      { id: "surulere", name: "Surulere", latitude: 6.496, longitude: 3.356, type: "Danfo" },
      { id: "ojuelegba", name: "Ojuelegba", latitude: 6.511604, longitude: 3.363265, type: "Danfo" },
      { id: "apapa", name: "Apapa", latitude: 6.449, longitude: 3.355, type: "Danfo" },
      { id: "tbs", name: "TBS", latitude: 6.451, longitude: 3.392, type: "Danfo" },
    ],
    travelTime: false
  },
  {
    id: "r-028",
    name: "TBS → Apapa → Ojuelegba → Surulere",
    transportType: "Danfo",
    fare: 500,
    stops: [
      { id: "tbs", name: "TBS", latitude: 6.451, longitude: 3.392, type: "Danfo" },
      { id: "apapa", name: "Apapa", latitude: 6.449, longitude: 3.355, type: "Danfo" },
      { id: "ojuelegba", name: "Ojuelegba", latitude: 6.511604, longitude: 3.363265, type: "Danfo" },
      { id: "surulere", name: "Surulere", latitude: 6.496, longitude: 3.356, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== IKoyi - Victoria Island feeder =====
  {
    id: "r-029",
    name: "Ikoyi → Falomo → Oniru → VI",
    transportType: "Danfo",
    fare: 400,
    stops: [
      { id: "ikoyi", name: "Ikoyi", latitude: 6.450, longitude: 3.433, type: "Danfo" },
      { id: "falomo", name: "Falomo", latitude: 6.441, longitude: 3.412, type: "Danfo" },
      { id: "oniru", name: "Oniru", latitude: 6.427, longitude: 3.427, type: "Danfo" },
      { id: "victoria_island", name: "Victoria Island", latitude: 6.428, longitude: 3.421, type: "Danfo" },
    ],
    travelTime: false
  },
  {
    id: "r-030",
    name: "VI → Oniru → Falomo → Ikoyi",
    transportType: "Danfo",
    fare: 400,
    stops: [
      { id: "victoria_island", name: "Victoria Island", latitude: 6.428, longitude: 3.421, type: "Danfo" },
      { id: "oniru", name: "Oniru", latitude: 6.427, longitude: 3.427, type: "Danfo" },
      { id: "falomo", name: "Falomo", latitude: 6.441, longitude: 3.412, type: "Danfo" },
      { id: "ikoyi", name: "Ikoyi", latitude: 6.450, longitude: 3.433, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== AGEGE - IKEJA - ILUPEJU LINKS =====
  {
    id: "r-031",
    name: "Agege → Mushin → Ojota → Yaba",
    transportType: "Danfo",
    fare: 500,
    stops: [
      { id: "agege", name: "Agege", latitude: 6.620, longitude: 3.321, type: "Danfo" },
      { id: "mushin", name: "Mushin", latitude: 6.537, longitude: 3.329, type: "Danfo" },
      { id: "ojota", name: "Ojota", latitude: 6.580, longitude: 3.350, type: "Danfo" },
      { id: "yaba", name: "Yaba", latitude: 6.509, longitude: 3.378, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== INNER-CITY SHORT-HOPS (connectivity enhancers) =====
  {
    id: "r-032",
    name: "Maryland → Ojuelegba → Yaba",
    transportType: "Danfo",
    fare: 500,
    stops: [
      { id: "maryland", name: "Maryland", latitude: 6.560, longitude: 3.363, type: "Danfo" },
      { id: "ojuelegba", name: "Ojuelegba", latitude: 6.511604, longitude: 3.363265, type: "Danfo" },
      { id: "yaba", name: "Yaba", latitude: 6.509, longitude: 3.378, type: "Danfo" },
    ],
    travelTime: false
  },
  {
    id: "r-033",
    name: "Ojuelegba → Maryland → Ikeja",
    transportType: "Danfo",
    fare: 500,
    stops: [
      { id: "ojuelegba", name: "Ojuelegba", latitude: 6.511604, longitude: 3.363265, type: "Danfo" },
      { id: "maryland", name: "Maryland", latitude: 6.560, longitude: 3.363, type: "Danfo" },
      { id: "ikeja", name: "Ikeja", latitude: 6.601, longitude: 3.351, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== APONGBON / EBUSIRI / LAGOS ISLAND SHORT-HOPS =====
  {
    id: "r-034",
    name: "Apongbon → Broad Street → CMS",
    transportType: "Danfo",
    fare: 300,
    stops: [
      { id: "apongbon", name: "Apongbon", latitude: 6.441, longitude: 3.369, type: "Danfo" },
      { id: "broad_st", name: "Broad Street", latitude: 6.447, longitude: 3.394, type: "Danfo" },
      { id: "cms", name: "CMS", latitude: 6.447, longitude: 3.395, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== FERRIES / WATER CONNECTORS (light) =====
  {
    id: "r-035",
    name: "TBS → Apapa Ferry Terminal → Apongbon",
    transportType: "Danfo",
    fare: 500,
    stops: [
      { id: "tbs", name: "TBS", latitude: 6.451, longitude: 3.392, type: "Danfo" },
      { id: "apapa_ferry", name: "Apapa Ferry Terminal", latitude: 6.446, longitude: 3.360, type: "Danfo" },
      { id: "apongbon", name: "Apongbon", latitude: 6.441, longitude: 3.369, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== EXTENDED CONNECTIVITY: CROSS-TOWN LINKS =====
  {
    id: "r-036",
    name: "Berger → Ojota → Maryland → Ikeja → Agege",
    transportType: "Danfo",
    fare: 800,
    stops: [
      { id: "berger", name: "Berger", latitude: 6.561, longitude: 3.350, type: "Danfo" },
      { id: "ojota", name: "Ojota", latitude: 6.580, longitude: 3.350, type: "Danfo" },
      { id: "maryland", name: "Maryland", latitude: 6.560, longitude: 3.363, type: "Danfo" },
      { id: "ikeja", name: "Ikeja", latitude: 6.601, longitude: 3.351, type: "Danfo" },
      { id: "agege", name: "Agege", latitude: 6.620, longitude: 3.321, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== FEEDERS & MINOR CONNECTORS (help transfer options) =====
  {
    id: "r-037",
    name: "Iyana-Ipaja → Ojota (feeder)",
    transportType: "Danfo",
    fare: 500,
    stops: [
      { id: "iyanipaja", name: "Iyana-Ipaja", latitude: 6.582, longitude: 3.265, type: "Danfo" },
      { id: "ojota", name: "Ojota", latitude: 6.580, longitude: 3.350, type: "Danfo" },
    ],
    travelTime: false
  },
  {
    id: "r-038",
    name: "Ikeja → Maryland (feeder)",
    transportType: "Danfo",
    fare: 300,
    stops: [
      { id: "ikeja", name: "Ikeja", latitude: 6.601, longitude: 3.351, type: "Danfo" },
      { id: "maryland", name: "Maryland", latitude: 6.560, longitude: 3.363, type: "Danfo" },
    ],
    travelTime: false
  },


  
  // ===== CATCH-ALL: ADD REVERSE OF MAJOR BRTs (for transfers) =====
  {
    id: "r-039",
    name: "Ojota (BRT) → Mile 12 → Ikorodu (BRT)",
    transportType: "BRT",
    fare: 900,
    stops: [
      { id: "ojota_brt", name: "Ojota (BRT)", latitude: 6.580, longitude: 3.350, type: "BRT" },
      { id: "mile12", name: "Mile 12", latitude: 6.60797, longitude: 3.3968, type: "BRT" },
      { id: "ikorodu_brt", name: "Ikorodu (BRT)", latitude: 6.619, longitude: 3.508, type: "BRT" },
    ],
    travelTime: false
  },
  {
    id: "r-040",
    name: "TBS → CMS → Obalende → Ikoyi (BRT)",
    transportType: "BRT",
    fare: 900,
    stops: [
      { id: "tbs", name: "TBS", latitude: 6.451, longitude: 3.392, type: "BRT" },
      { id: "cms", name: "CMS", latitude: 6.447, longitude: 3.395, type: "BRT" },
      { id: "obalende", name: "Obalende", latitude: 6.447, longitude: 3.406, type: "BRT" },
      { id: "ikoyi", name: "Ikoyi", latitude: 6.450, longitude: 3.433, type: "BRT" },
    ],
    travelTime: false
  },

  // ===== SAFETY NET: SHORT CONNECTORS AROUND CITY CENTRES =====
  {
    id: "r-041",
    name: "Maryland → Ojota (short)",
    transportType: "Danfo",
    fare: 300,
    stops: [
      { id: "maryland", name: "Maryland", latitude: 6.560, longitude: 3.363, type: "Danfo" },
      { id: "ojota", name: "Ojota", latitude: 6.580, longitude: 3.350, type: "Danfo" },
    ],
    travelTime: false
  },
  {
    id: "r-042",
    name: "Obalende → Broad Street → Apongbon",
    transportType: "Danfo",
    fare: 300,
    stops: [
      { id: "obalende", name: "Obalende", latitude: 6.447, longitude: 3.406, type: "Danfo" },
      { id: "broad_st", name: "Broad Street", latitude: 6.447, longitude: 3.394, type: "Danfo" },
      { id: "apongbon", name: "Apongbon", latitude: 6.441, longitude: 3.369, type: "Danfo" },
    ],
    travelTime: false
  },

  // ===== LONG SHOT CONNECTOR: BERGER → AJAH (via Ikeja & Lekki) =====
  {
    id: "r-043",
    name: "Berger → Ikeja → Ojota → Lekki → Ajah",
    transportType: "Danfo",
    fare: 1500,
    stops: [
      { id: "berger", name: "Berger", latitude: 6.561, longitude: 3.350, type: "Danfo" },
      { id: "ikeja", name: "Ikeja", latitude: 6.601, longitude: 3.351, type: "Danfo" },
      { id: "ojota", name: "Ojota", latitude: 6.580, longitude: 3.350, type: "Danfo" },
      { id: "lekki_phase1", name: "Lekki Phase I", latitude: 6.442, longitude: 3.474, type: "Danfo" },
      { id: "ajah", name: "Ajah", latitude: 6.466, longitude: 3.603, type: "Danfo" },
    ],
    travelTime: false
  },

{
  id: "r-063",
  name: "Ajah → Oshodi → Ikotun",
  transportType: "Danfo",
  fare: 850,
  stops: [
    { id: "ajah", name: "Ajah", latitude: 6.466, longitude: 3.603, type: "Danfo" },
    { id: "lekki_phase1", name: "Lekki Phase I", latitude: 6.442, longitude: 3.474, type: "Danfo" },
    { id: "obanikoro", name: "Obanikoro", latitude: 6.544, longitude: 3.370, type: "Danfo" },
    { id: "oshodi", name: "Oshodi", latitude: 6.556, longitude: 3.343, type: "Danfo" },
    { id: "cele", name: "Cele", latitude: 6.505, longitude: 3.326, type: "Danfo" },
    { id: "ikotun", name: "Ikotun", latitude: 6.544, longitude: 3.267, type: "Danfo" },
  ],
  travelTime: false,
},
{
  id: "r-064",
  name: "Ajah → Oshodi → Ijegun",
  transportType: "Danfo",
  fare: 900,
  stops: [
    { id: "ajah", name: "Ajah", latitude: 6.466, longitude: 3.603, type: "Danfo" },
    { id: "lekki_phase1", name: "Lekki Phase I", latitude: 6.442, longitude: 3.474, type: "Danfo" },
    { id: "obanikoro", name: "Obanikoro", latitude: 6.544, longitude: 3.370, type: "Danfo" },
    { id: "oshodi", name: "Oshodi", latitude: 6.556, longitude: 3.343, type: "Danfo" },
    { id: "cele", name: "Cele", latitude: 6.505, longitude: 3.326, type: "Danfo" },
    { id: "ikotun", name: "Ikotun", latitude: 6.544, longitude: 3.267, type: "Danfo" },
    { id: "ijegun", name: "Ijegun", latitude: 6.561, longitude: 3.258, type: "Danfo" },
  ],
  travelTime: false,
},
// 🚌 Ikotun → Oshodi
{
  id: "r-060",
  name: "Ikotun → Oshodi",
  transportType: "Danfo",
  fare: 400,
  stops: [
    { id: "ikotun", name: "Ikotun", latitude: 6.544, longitude: 3.267, type: "Danfo" },
    { id: "ijegun", name: "Ijegun", latitude: 6.561, longitude: 3.258, type: "Danfo" },
    { id: "cele", name: "Cele", latitude: 6.505, longitude: 3.326, type: "Danfo" },
    { id: "oshodi", name: "Oshodi", latitude: 6.556, longitude: 3.343, type: "Danfo" },
  ],
  travelTime: false,
},

// 🚌 Oshodi → Ajah
{
  id: "r-061",
  name: "Oshodi → Ajah",
  transportType: "Danfo",
  fare: 700,
  stops: [
    { id: "oshodi", name: "Oshodi", latitude: 6.556, longitude: 3.343, type: "Danfo" },
    { id: "obanikoro", name: "Obanikoro", latitude: 6.537, longitude: 3.361, type: "Danfo" },
    { id: "cms", name: "CMS", latitude: 6.454, longitude: 3.391, type: "Danfo" },
    { id: "lekki_phase1", name: "Lekki Phase I", latitude: 6.442, longitude: 3.474, type: "Danfo" },
    { id: "ajah", name: "Ajah", latitude: 6.466, longitude: 3.603, type: "Danfo" },
  ],
  travelTime: false,
},
{
  id: "r-062",
  name: "Ijegun → Oshodi",
  transportType: "Danfo",
  fare: 350,
  stops: [
    { id: "ijegun", name: "Ijegun", latitude: 6.561, longitude: 3.258, type: "Danfo" },
    { id: "ikotun", name: "Ikotun", latitude: 6.544, longitude: 3.267, type: "Danfo" },
    { id: "cele", name: "Cele", latitude: 6.505, longitude: 3.326, type: "Danfo" },
    { id: "oshodi", name: "Oshodi", latitude: 6.556, longitude: 3.343, type: "Danfo" },
  ],
  travelTime: false,
},
// Ikotun → Oshodi → Ikorodu
{
  id: "r-051",
  name: "Ikotun → Oshodi → Ikorodu",
  transportType: "Danfo",
  fare: 850,
  stops: [
    { id: "ikotun", name: "Ikotun", latitude: 6.543, longitude: 3.288, type: "Danfo" },
    { id: "oshodi", name: "Oshodi", latitude: 6.556, longitude: 3.343, type: "Danfo" },
    { id: "ikorodu", name: "Ikorodu", latitude: 6.619, longitude: 3.512, type: "Danfo" },
  ],
  travelTime: false
},

// Ijegun → Oshodi → Ikorodu
{
  id: "r-052",
  name: "Ijegun → Oshodi → Ikorodu",
  transportType: "Danfo",
  fare: 870,
  stops: [
    { id: "ijegun", name: "Ijegun", latitude: 6.551, longitude: 3.272, type: "Danfo" },
    { id: "oshodi", name: "Oshodi", latitude: 6.556, longitude: 3.343, type: "Danfo" },
    { id: "ikorodu", name: "Ikorodu", latitude: 6.619, longitude: 3.512, type: "Danfo" },
  ],
  travelTime: false
},

// Reverse routes
{
  id: "r-053",
  name: "Ikorodu → Oshodi → Ikotun",
  transportType: "Danfo",
  fare: 850,
  stops: [
    { id: "ikorodu", name: "Ikorodu", latitude: 6.619, longitude: 3.512, type: "Danfo" },
    { id: "oshodi", name: "Oshodi", latitude: 6.556, longitude: 3.343, type: "Danfo" },
    { id: "ikotun", name: "Ikotun", latitude: 6.543, longitude: 3.288, type: "Danfo" },
  ],
  travelTime: false
},
{
  id: "r-054",
  name: "Ikorodu → Oshodi → Ijegun",
  transportType: "Danfo",
  fare: 870,
  stops: [
    { id: "ikorodu", name: "Ikorodu", latitude: 6.619, longitude: 3.512, type: "Danfo" },
    { id: "oshodi", name: "Oshodi", latitude: 6.556, longitude: 3.343, type: "Danfo" },
    { id: "ijegun", name: "Ijegun", latitude: 6.551, longitude: 3.272, type: "Danfo" },
  ],
  travelTime: false
},
// Ikorodu → Oshodi → Ikotun
{
  id: "r-055",
  name: "Ikorodu → Oshodi → Ikotun",
  transportType: "Danfo",
  fare: 850,
  stops: [
    { id: "ikorodu", name: "Ikorodu", latitude: 6.619, longitude: 3.512, type: "Danfo" },
    { id: "oshodi", name: "Oshodi", latitude: 6.556, longitude: 3.343, type: "Danfo" },
    { id: "ikotun", name: "Ikotun", latitude: 6.543, longitude: 3.288, type: "Danfo" },
  ],
  travelTime: false
},

// Ikorodu → Oshodi → Ijegun
{
  id: "r-056",
  name: "Ikorodu → Oshodi → Ijegun",
  transportType: "Danfo",
  fare: 870,
  stops: [
    { id: "ikorodu", name: "Ikorodu", latitude: 6.619, longitude: 3.512, type: "Danfo" },
    { id: "oshodi", name: "Oshodi", latitude: 6.556, longitude: 3.343, type: "Danfo" },
    { id: "ijegun", name: "Ijegun", latitude: 6.551, longitude: 3.272, type: "Danfo" },
  ],
  travelTime: false
},

  
  // --- Ikorodu Ferry Routes ---

{
  id: "r-038",
  name: "Ikorodu → Falomo → CMS",
  transportType: "Ferry",
  fare: 3000,
  stops: [
    {
      id: "s-ikorodujetty", name: "Ikorodu Jetty", latitude: 6.6152, longitude: 3.5089,
      type: ""
    },
    {
      id: "s-falomo", name: "Falomo Jetty", latitude: 6.4472, longitude: 3.4148,
      type: ""
    },
    {
      id: "s-cmsjetty", name: "CMS Jetty", latitude: 6.4533, longitude: 3.3947,
      type: ""
    },
  ],
  travelTime:false
},

{
  id: "r-039",
  name: "CMS → Falomo → Ikorodu",
  transportType: "Ferry",
  fare: 3000,
  stops: [
    {
      id: "s-cmsjetty", name: "CMS Jetty", latitude: 6.4533, longitude: 3.3947,
      type: "ferry"
    },
    {
      id: "s-falomo", name: "Falomo Jetty", latitude: 6.4472, longitude: 3.4148,
      type: "ferry"
    },
    {
      id: "s-ikorodujetty", name: "Ikorodu Jetty", latitude: 6.6152, longitude: 3.5089,
      type: "ferry"
    },
  ],
  travelTime:false
},

{
  id: "r-040",
  name: "Ikorodu → Five Cowries Terminal (Falomo) → Apapa",
  transportType: "Ferry",
  fare: 3000,
  stops: [
    {
      id: "s-ikorodujetty", name: "Ikorodu Jetty", latitude: 6.6152, longitude: 3.5089,
      type: "ferry"
    },
    {
      id: "s-falomo", name: "Five Cowries Terminal (Falomo)", latitude: 6.4472, longitude: 3.4148,
      type: "fery"
    },
    {
      id: "s-apapa", name: "Apapa Ferry Terminal", latitude: 6.4416, longitude: 3.3625,
      type: "ferry"
    },
  ],
  travelTime:false
},

{
  id: "r-041",
  name: "Apapa → Falomo → Ikorodu",
  transportType: "Ferry",
  fare: 3000,
  stops: [
    {
      id: "s-apapa", name: "Apapa Ferry Terminal", latitude: 6.4416, longitude: 3.3625,
      type: "ferry"
    },
    {
      id: "s-falomo", name: "Five Cowries Terminal (Falomo)", latitude: 6.4472, longitude: 3.4148,
      type: "ferry"
    },
    {
      id: "s-ikorodujetty", name: "Ikorodu Jetty", latitude: 6.6152, longitude: 3.5089,
      type: "ferry"
    },
  ],
  travelTime:false
},


 {
    id: "ferry-ikorodu-apapa",
    name: "Ikorodu - Apapa - CMS Ferry",
    transportType: "jetty",
    fare: 3000,
    stops: [
      {id: "ikorodu", name: "Ikorodu Jetty", latitude: 6.605, longitude: 3.509, type: "ferry" },
      { id: "lekki1", name: "Lekki Phase 1 Jetty", latitude: 6.438, longitude: 3.482,type: "ferry" },
      {id: "vi", name: "Victoria Island Jetty", latitude: 6.426, longitude: 3.450,type: "ferry" },
      {   id: "ikoyi", name: "Ikoyi Jetty", latitude: 6.450, longitude: 3.430,type: "ferry" },
      { id: "apapa", name: "Apapa Jetty", latitude: 6.445, longitude: 3.370,type: "ferry"},
      { id: "cms", name: "CMS Jetty", latitude: 6.450, longitude: 3.395,type: "ferry"},
    ],
    travelTime:false
  },

 
// Route 1: Somolu → Palmgrove
{
  id: "r-057a",
  name: "Somolu → Palmgrove",
  transportType: "Danfo",
  fare: 400,
  stops: [
    { id: "somolu", name: "Somolu", latitude: 6.537, longitude: 3.380, type: "Danfo" },
    { id: "palmgrove", name: "Palmgrove", latitude: 6.545, longitude: 3.369, type: "Danfo" },
  ],
  travelTime: false,
},

// Route 2: Palmgrove → Ikeja
{
  id: "r-057b",
  name: "Palmgrove → Ikeja",
  transportType: "Danfo",
  fare: 500,
  stops: [
    { id: "palmgrove", name: "Palmgrove", latitude: 6.545, longitude: 3.369, type: "Danfo" },
    { id: "ikeja", name: "Ikeja", latitude: 6.601, longitude: 3.351, type: "Danfo" },
  ],
  travelTime: false,
},

// Route 3: Ikeja → Ayobo
{
  id: "r-057c",
  name: "Ikeja → Ayobo",
  transportType: "Danfo",
  fare: 700,
  stops: [
    { id: "ikeja", name: "Ikeja", latitude: 6.601, longitude: 3.351, type: "Danfo" },
    { id: "ayobo", name: "Ayobo", latitude: 6.620, longitude: 3.235, type: "Danfo" },
  ],
  travelTime: false,
},
// Route 4: Ayobo → Ikeja
{
  id: "r-057d",
  name: "Ayobo → Ikeja",
  transportType: "Danfo",
  fare: 700,
  stops: [
    { id: "ayobo", name: "Ayobo", latitude: 6.620, longitude: 3.235, type: "Danfo" },
    { id: "ikeja", name: "Ikeja", latitude: 6.601, longitude: 3.351, type: "Danfo" },
  ],
  travelTime: false,
},

// Route 5: Ikeja → Palmgrove
{
  id: "r-057e",
  name: "Ikeja → Palmgrove",
  transportType: "Danfo",
  fare: 500,
  stops: [
    { id: "ikeja", name: "Ikeja", latitude: 6.601, longitude: 3.351, type: "Danfo" },
    { id: "palmgrove", name: "Palmgrove", latitude: 6.545, longitude: 3.369, type: "Danfo" },
  ],
  travelTime: false,
},

// Route 6: Palmgrove → Somolu
{
  id: "r-057f",
  name: "Palmgrove → Somolu",
  transportType: "Danfo",
  fare: 400,
  stops: [
    { id: "palmgrove", name: "Palmgrove", latitude: 6.545, longitude: 3.369, type: "Danfo" },
    { id: "somolu", name: "Somolu", latitude: 6.537, longitude: 3.380, type: "Danfo" },
  ],
  travelTime: false,
},

// ===== Egbeda <-> Oshodi (feeder) =====
{
  id: "r-058",
  name: "Egbeda → Oshodi",
  transportType: "Danfo",
  fare: 500,
  stops: [
    { id: "egbeda", name: "Egbeda", latitude: 6.6030, longitude: 3.2760, type: "Danfo" },
    { id: "oshodi", name: "Oshodi", latitude: 6.5535, longitude: 3.3430, type: "Danfo" }
  ],
  travelTime: false
},
{
  id: "r-059",
  name: "Oshodi → Egbeda",
  transportType: "Danfo",
  fare: 500,
  stops: [
    { id: "oshodi", name: "Oshodi", latitude: 6.5535, longitude: 3.3430, type: "Danfo" },
    { id: "egbeda", name: "Egbeda", latitude: 6.6030, longitude: 3.2760, type: "Danfo" }
  ],
  travelTime: false
},

// ===== Oshodi <-> Ajah (longer connector) =====
{
  id: "r-060",
  name: "Oshodi → Ajah (via major corridor)",
  transportType: "Danfo",
  fare: 1200,
  stops: [
    { id: "oshodi", name: "Oshodi", latitude: 6.5535, longitude: 3.3430, type: "Danfo" },
    // You can insert intermediate stops if you want here (ikeja / ojota / lekki_phase1 etc.)
    { id: "ajah", name: "Ajah", latitude: 6.4660, longitude: 3.6030, type: "Danfo" }
  ],
  travelTime: false
},
{
  id: "r-061",
  name: "Ajah → Oshodi",
  transportType: "Danfo",
  fare: 1200,
  stops: [
    { id: "ajah", name: "Ajah", latitude: 6.4660, longitude: 3.6030, type: "Danfo" },
    { id: "oshodi", name: "Oshodi", latitude: 6.5535, longitude: 3.3430, type: "Danfo" }
  ],
  travelTime: false
},

// ===== Egbeda ↔ Oshodi =====
{
  id: "r-062",
  name: "Egbeda → Oshodi",
  transportType: "Danfo",
  fare: 500,
  stops: [
    { id: "egbeda", name: "Egbeda", latitude: 6.6030, longitude: 3.2760, type: "Danfo" },
    { id: "oshodi", name: "Oshodi", latitude: 6.5535, longitude: 3.3430, type: "Danfo" },
  ],
  travelTime: false,
},
{
  id: "r-062",
  name: "Oshodi → Egbeda",
  transportType: "Danfo",
  fare: 500,
  stops: [
    { id: "oshodi", name: "Oshodi", latitude: 6.5535, longitude: 3.3430, type: "Danfo" },
    { id: "egbeda", name: "Egbeda", latitude: 6.6030, longitude: 3.2760, type: "Danfo" },
  ],
  travelTime: false,
},

// ===== Oshodi ↔ Ikorodu =====
{
  id: "r-063",
  name: "Oshodi → Ikorodu",
  transportType: "Danfo",
  fare: 700,
  stops: [
    { id: "oshodi", name: "Oshodi", latitude: 6.5535, longitude: 3.3430, type: "Danfo" },
    { id: "mile12", name: "Mile 12", latitude: 6.6005, longitude: 3.3931, type: "Danfo" },
    { id: "ikorodu", name: "Ikorodu", latitude: 6.6194, longitude: 3.5105, type: "Danfo" },
  ],
  travelTime: false,
},
{
  id: "r-064",
  name: "Ikorodu → Oshodi",
  transportType: "Danfo",
  fare: 700,
  stops: [
    { id: "ikorodu", name: "Ikorodu", latitude: 6.6194, longitude: 3.5105, type: "Danfo" },
    { id: "mile12", name: "Mile 12", latitude: 6.6005, longitude: 3.3931, type: "Danfo" },
    { id: "oshodi", name: "Oshodi", latitude: 6.5535, longitude: 3.3430, type: "Danfo" },
  ],
  travelTime: false,
},



];
