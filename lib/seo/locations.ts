import type { Region } from "./schema";

/**
 * Location (province / state) service pages. Each carries genuine regional
 * context — the governing standard body, the utilities that operate there, and
 * a market note — so pages are differentiated, not doorway spam. Utility names
 * are factual references for context only and do not imply any affiliation.
 *
 * SCHEMA NOTE: these pages use Service + areaServed (AdministrativeArea). They
 * do NOT use LocalBusiness or any physical address — SPANEX is a remote team.
 */

const CA_STD =
  "CSA C22.3 (No. 1 overhead, No. 7 underground) plus the distributor's own construction standard";
const US_STD =
  "the NESC (National Electrical Safety Code) plus the utility's construction standard and state PUC requirements";

export const regions: Region[] = [
  // ---- Canada ----
  {
    country: "canada", countryCode: "CA", slug: "ontario", name: "Ontario", type: "province",
    standardBody: `${CA_STD}, in the Ontario context (Electrical Safety Authority, O. Reg. 22/04)`,
    utilities: ["Hydro One", "Alectra Utilities", "Toronto Hydro", "Hydro Ottawa", "Elexicon Energy"],
    marketNote:
      "Ontario has one of the most active distribution design markets in Canada, with a large host utility and many local distribution companies (LDCs) carrying heavy make-ready and system-renewal programs.",
    timezone: "Eastern Time", handoff: "IST is 9.5 hours ahead of Eastern, so work handed off at end of day is ready for review the next morning.",
    keywords: ["utility design Ontario", "distribution drafting Ontario", "engineering outsourcing Ontario"],
  },
  {
    country: "canada", countryCode: "CA", slug: "quebec", name: "Quebec", type: "province",
    standardBody: `${CA_STD}, in the Quebec context`,
    utilities: ["Hydro-Québec"],
    marketNote:
      "Quebec's distribution network is served largely by a single crown utility, with steady overhead and underground design volume across a vast territory.",
    timezone: "Eastern Time", handoff: "IST is 9.5 hours ahead of Eastern, so overnight production returns work by the start of your day.",
    keywords: ["utility design Quebec", "distribution drafting Quebec"],
  },
  {
    country: "canada", countryCode: "CA", slug: "british-columbia", name: "British Columbia", type: "province",
    standardBody: `${CA_STD}, in the British Columbia context`,
    utilities: ["BC Hydro", "FortisBC"],
    marketNote:
      "British Columbia's mountainous terrain and mix of crown and investor-owned utilities make landbase accuracy and structural analysis especially important to distribution design here.",
    timezone: "Pacific Time", handoff: "IST is 12.5 hours ahead of Pacific — essentially a full overnight cycle against your working day.",
    keywords: ["utility design British Columbia", "distribution drafting BC", "pole line design BC"],
  },
  {
    country: "canada", countryCode: "CA", slug: "alberta", name: "Alberta", type: "province",
    standardBody: `${CA_STD}, in the Alberta context`,
    utilities: ["ENMAX", "EPCOR", "FortisAlberta", "ATCO Electric"],
    marketNote:
      "Alberta's deregulated market has several wires companies running sizeable distribution and make-ready programs, with strong demand for scalable drafting and SPIDAcalc support.",
    timezone: "Mountain Time", handoff: "IST is 11.5 hours ahead of Mountain Time, giving a clean overnight turnaround.",
    keywords: ["utility design Alberta", "distribution drafting Alberta", "engineering drafting Calgary"],
  },
  {
    country: "canada", countryCode: "CA", slug: "manitoba", name: "Manitoba", type: "province",
    standardBody: `${CA_STD}, in the Manitoba context`,
    utilities: ["Manitoba Hydro"],
    marketNote:
      "Manitoba's distribution system is served by a single crown utility with ongoing overhead design and system-maintenance work across urban and rural service areas.",
    timezone: "Central Time", handoff: "IST is 10.5 hours ahead of Central Time.",
    keywords: ["utility design Manitoba", "distribution drafting Manitoba"],
  },
  {
    country: "canada", countryCode: "CA", slug: "saskatchewan", name: "Saskatchewan", type: "province",
    standardBody: `${CA_STD}, in the Saskatchewan context`,
    utilities: ["SaskPower"],
    marketNote:
      "Saskatchewan's large rural distribution network drives steady pole line, landbase and as-built work for its crown utility.",
    timezone: "Central Time", handoff: "IST is 10.5–11.5 hours ahead depending on the season.",
    keywords: ["utility design Saskatchewan", "distribution drafting Saskatchewan"],
  },
  {
    country: "canada", countryCode: "CA", slug: "nova-scotia", name: "Nova Scotia", type: "province",
    standardBody: `${CA_STD}, in the Nova Scotia context`,
    utilities: ["Nova Scotia Power"],
    marketNote:
      "Nova Scotia's coastal network sees significant storm-hardening and make-ready activity, with demand for pole loading and construction drawing support.",
    timezone: "Atlantic Time", handoff: "IST is 8.5 hours ahead of Atlantic Time.",
    keywords: ["utility design Nova Scotia", "distribution drafting Nova Scotia"],
  },
  {
    country: "canada", countryCode: "CA", slug: "new-brunswick", name: "New Brunswick", type: "province",
    standardBody: `${CA_STD}, in the New Brunswick context`,
    utilities: ["NB Power"],
    marketNote:
      "New Brunswick's distribution system is served by a single crown utility with ongoing overhead and joint-use design work.",
    timezone: "Atlantic Time", handoff: "IST is 8.5 hours ahead of Atlantic Time.",
    keywords: ["utility design New Brunswick", "distribution drafting New Brunswick"],
  },
  {
    country: "canada", countryCode: "CA", slug: "newfoundland-and-labrador", name: "Newfoundland and Labrador", type: "province",
    standardBody: `${CA_STD}, in the Newfoundland and Labrador context`,
    utilities: ["Newfoundland Power", "Newfoundland and Labrador Hydro"],
    marketNote:
      "Newfoundland and Labrador's exposed coastal network places a premium on structural analysis and storm-resilient distribution design.",
    timezone: "Newfoundland Time", handoff: "IST is roughly 8 hours ahead of Newfoundland Time.",
    keywords: ["utility design Newfoundland", "distribution drafting Newfoundland"],
  },
  {
    country: "canada", countryCode: "CA", slug: "prince-edward-island", name: "Prince Edward Island", type: "province",
    standardBody: `${CA_STD}, in the Prince Edward Island context`,
    utilities: ["Maritime Electric"],
    marketNote:
      "Prince Edward Island's compact distribution network is served by a single utility with steady maintenance and upgrade design work.",
    timezone: "Atlantic Time", handoff: "IST is 8.5 hours ahead of Atlantic Time.",
    keywords: ["utility design PEI", "distribution drafting Prince Edward Island"],
  },
  {
    country: "canada", countryCode: "CA", slug: "yukon", name: "Yukon", type: "territory",
    standardBody: `${CA_STD}, in the Yukon context`,
    utilities: ["ATCO Electric Yukon", "Yukon Energy"],
    marketNote:
      "Yukon's northern distribution network involves challenging terrain and access, where accurate landbase and remote design support add real value.",
    timezone: "Yukon Time", handoff: "IST is 12.5 hours ahead of Yukon Time.",
    keywords: ["utility design Yukon", "distribution drafting Yukon"],
  },
  {
    country: "canada", countryCode: "CA", slug: "northwest-territories", name: "Northwest Territories", type: "territory",
    standardBody: `${CA_STD}, in the Northwest Territories context`,
    utilities: ["Northwest Territories Power Corporation"],
    marketNote:
      "The Northwest Territories' dispersed communities and northern conditions make remote design and documentation support a practical fit.",
    timezone: "Mountain Time", handoff: "IST is 11.5 hours ahead of Mountain Time.",
    keywords: ["utility design Northwest Territories", "distribution drafting NWT"],
  },
  {
    country: "canada", countryCode: "CA", slug: "nunavut", name: "Nunavut", type: "territory",
    standardBody: `${CA_STD}, in the Nunavut context`,
    utilities: ["Qulliq Energy Corporation"],
    marketNote:
      "Nunavut's remote community power systems rely on careful documentation and design support for maintenance and upgrades.",
    timezone: "Eastern Time", handoff: "IST is 9.5 hours ahead of Eastern Time.",
    keywords: ["utility design Nunavut", "distribution drafting Nunavut"],
  },

  // ---- United States (priority states) ----
  {
    country: "united-states", countryCode: "US", slug: "california", name: "California", type: "state",
    standardBody: `${US_STD} (including CPUC General Order 95 for overhead lines)`,
    utilities: ["Pacific Gas & Electric (PG&E)", "Southern California Edison (SCE)", "San Diego Gas & Electric (SDG&E)"],
    marketNote:
      "California's large investor-owned utilities run major wildfire-hardening and undergrounding programs, driving heavy pole loading, make-ready and construction drawing demand.",
    timezone: "Pacific Time", handoff: "IST is 12.5 hours ahead of Pacific Time — a full overnight production cycle.",
    keywords: ["utility design California", "SpidaCalc services California", "distribution drafting California"],
  },
  {
    country: "united-states", countryCode: "US", slug: "texas", name: "Texas", type: "state",
    standardBody: `${US_STD} (PUCT jurisdiction)`,
    utilities: ["Oncor", "CenterPoint Energy", "AEP Texas"],
    marketNote:
      "Texas's fast-growing grid and large transmission-and-distribution utilities create sustained demand for distribution design, pole loading and drafting capacity.",
    timezone: "Central Time", handoff: "IST is 10.5–11.5 hours ahead of Central Time.",
    keywords: ["utility design Texas", "SpidaCalc services Texas", "engineering drafting Texas"],
  },
  {
    country: "united-states", countryCode: "US", slug: "florida", name: "Florida", type: "state",
    standardBody: US_STD,
    utilities: ["Florida Power & Light (FPL)", "Duke Energy Florida", "Tampa Electric (TECO)"],
    marketNote:
      "Florida's hurricane exposure drives extensive storm-hardening and undergrounding, with strong demand for structural analysis and construction drawings.",
    timezone: "Eastern Time", handoff: "IST is 9.5–10.5 hours ahead of Eastern Time.",
    keywords: ["utility design Florida", "engineering support Florida", "distribution drafting Florida"],
  },
  {
    country: "united-states", countryCode: "US", slug: "new-york", name: "New York", type: "state",
    standardBody: `${US_STD} (NY PSC jurisdiction)`,
    utilities: ["Con Edison", "National Grid", "NYSEG"],
    marketNote:
      "New York's dense urban and extensive upstate networks combine underground design in the city with overhead work statewide, keeping drafting and analysis volume high.",
    timezone: "Eastern Time", handoff: "IST is 9.5 hours ahead of Eastern Time.",
    keywords: ["distribution design New York", "utility CAD New York", "engineering drafting New York"],
  },
  {
    country: "united-states", countryCode: "US", slug: "ohio", name: "Ohio", type: "state",
    standardBody: US_STD,
    utilities: ["AEP Ohio", "FirstEnergy", "Duke Energy Ohio"],
    marketNote:
      "Ohio's mix of large utilities and municipal systems runs steady distribution renewal and make-ready programs.",
    timezone: "Eastern Time", handoff: "IST is 9.5 hours ahead of Eastern Time.",
    keywords: ["utility design Ohio", "distribution drafting Ohio"],
  },
  {
    country: "united-states", countryCode: "US", slug: "pennsylvania", name: "Pennsylvania", type: "state",
    standardBody: US_STD,
    utilities: ["PECO", "PPL Electric Utilities", "Duquesne Light", "FirstEnergy"],
    marketNote:
      "Pennsylvania's multiple investor-owned utilities carry ongoing overhead and joint-use design work across urban and rural territory.",
    timezone: "Eastern Time", handoff: "IST is 9.5 hours ahead of Eastern Time.",
    keywords: ["utility design Pennsylvania", "distribution drafting Pennsylvania"],
  },
  {
    country: "united-states", countryCode: "US", slug: "illinois", name: "Illinois", type: "state",
    standardBody: US_STD,
    utilities: ["ComEd", "Ameren Illinois"],
    marketNote:
      "Illinois's grid-modernization programs drive distribution design, GIS and as-built work across the Chicago area and downstate.",
    timezone: "Central Time", handoff: "IST is 10.5–11.5 hours ahead of Central Time.",
    keywords: ["utility design Illinois", "distribution drafting Illinois", "engineering drafting Chicago"],
  },
  {
    country: "united-states", countryCode: "US", slug: "georgia", name: "Georgia", type: "state",
    standardBody: US_STD,
    utilities: ["Georgia Power", "Georgia EMCs"],
    marketNote:
      "Georgia's investor-owned utility and network of electric membership cooperatives create broad demand for distribution design and drafting support.",
    timezone: "Eastern Time", handoff: "IST is 9.5 hours ahead of Eastern Time.",
    keywords: ["utility design Georgia", "distribution drafting Georgia"],
  },
  {
    country: "united-states", countryCode: "US", slug: "north-carolina", name: "North Carolina", type: "state",
    standardBody: US_STD,
    utilities: ["Duke Energy Carolinas", "Duke Energy Progress"],
    marketNote:
      "North Carolina's growing population and grid-improvement plans sustain distribution design and make-ready demand.",
    timezone: "Eastern Time", handoff: "IST is 9.5 hours ahead of Eastern Time.",
    keywords: ["utility design North Carolina", "distribution drafting North Carolina"],
  },
  {
    country: "united-states", countryCode: "US", slug: "michigan", name: "Michigan", type: "state",
    standardBody: US_STD,
    utilities: ["DTE Energy", "Consumers Energy"],
    marketNote:
      "Michigan's two large utilities run significant reliability and tree-related hardening programs, driving distribution design and drafting work.",
    timezone: "Eastern Time", handoff: "IST is 9.5 hours ahead of Eastern Time.",
    keywords: ["utility design Michigan", "distribution drafting Michigan"],
  },
  {
    country: "united-states", countryCode: "US", slug: "washington", name: "Washington", type: "state",
    standardBody: US_STD,
    utilities: ["Puget Sound Energy", "Seattle City Light", "Avista"],
    marketNote:
      "Washington's mix of investor-owned and municipal utilities carries steady overhead and underground design work across varied terrain.",
    timezone: "Pacific Time", handoff: "IST is 12.5 hours ahead of Pacific Time.",
    keywords: ["utility design Washington", "distribution drafting Washington"],
  },
  {
    country: "united-states", countryCode: "US", slug: "virginia", name: "Virginia", type: "state",
    standardBody: US_STD,
    utilities: ["Dominion Energy", "Appalachian Power"],
    marketNote:
      "Virginia's data-center-driven load growth and undergrounding programs create strong distribution design and drafting demand.",
    timezone: "Eastern Time", handoff: "IST is 9.5 hours ahead of Eastern Time.",
    keywords: ["utility design Virginia", "distribution drafting Virginia"],
  },
  {
    country: "united-states", countryCode: "US", slug: "arizona", name: "Arizona", type: "state",
    standardBody: US_STD,
    utilities: ["Arizona Public Service (APS)", "Salt River Project (SRP)", "Tucson Electric Power"],
    marketNote:
      "Arizona's rapid growth drives new distribution construction and design volume across its major service territories.",
    timezone: "Mountain (Arizona) Time", handoff: "IST is about 11.5 hours ahead of Arizona time.",
    keywords: ["utility design Arizona", "distribution drafting Arizona"],
  },
  {
    country: "united-states", countryCode: "US", slug: "colorado", name: "Colorado", type: "state",
    standardBody: US_STD,
    utilities: ["Xcel Energy", "Colorado cooperatives"],
    marketNote:
      "Colorado's utilities and cooperatives run wildfire-mitigation and distribution-upgrade programs that generate design and analysis work.",
    timezone: "Mountain Time", handoff: "IST is 11.5 hours ahead of Mountain Time.",
    keywords: ["utility design Colorado", "distribution drafting Colorado"],
  },
  {
    country: "united-states", countryCode: "US", slug: "massachusetts", name: "Massachusetts", type: "state",
    standardBody: US_STD,
    utilities: ["Eversource", "National Grid", "Unitil"],
    marketNote:
      "Massachusetts's older, dense networks and electrification programs keep distribution design, as-built and GIS work in steady demand.",
    timezone: "Eastern Time", handoff: "IST is 9.5 hours ahead of Eastern Time.",
    keywords: ["utility design Massachusetts", "distribution drafting Massachusetts"],
  },
];

export function allRegionParams(): { country: string; region: string }[] {
  return regions.map((r) => ({ country: r.country, region: r.slug }));
}

export function getRegion(country: string, slug: string): Region | undefined {
  return regions.find((r) => r.country === country && r.slug === slug);
}
