import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();
enum SANKEYLEVELS {
  LEVEL1 = 0,
  LEVEL2 = 0.5,
  LEVEL3 = 1.8,
  LEVEL4 = 2,
}
/*
 *** I recommend that you start with sunburst_data.ts to get familiar with data.
 *** How to update the data:
 *** 1. the variable "example" is the original data, and the "updated_example" is the updated data.
 *** 2. check echarts_options.json file for finding the text to substitute the original text.
 *** 3. The values need to be changed are "name", "target", "source". The other values should be kept as the same.
 */
// Example 1
const example1 = { name: "Robustness", depth: SANKEYLEVELS.LEVEL4 };
const updated_example1 = {
  name: computed(() => t("echarts.capacities.Robustness")),
  depth: SANKEYLEVELS.LEVEL4,
};
// Example 2
const example2 = {
  name: "Safe & affordable housing",
  itemStyle: { color: "#91CC75" },
  depth: SANKEYLEVELS.LEVEL2,
};
const updated_example2 = {
  name: computed(() => t("echarts.social.1.1")),
  itemStyle: { color: "#91CC75" },
  depth: SANKEYLEVELS.LEVEL2,
};
// Example 3
const example3 = {
  source: "Physical",
  target: "Natural elements, mangrove, hills, rivers, plantations, among others",
  value: 1,
};
const updated_example3 = {
  source: computed(() => t("echarts.physical.name")),
  target: computed(() => t("echarts.physical.2.2")),
  value: 1,
};
// The data need to be updated
const data = [
  { name: "Robustness", depth: SANKEYLEVELS.LEVEL4 },
  { name: "Redundancy", depth: SANKEYLEVELS.LEVEL4 },

  { name: "Diversity", depth: SANKEYLEVELS.LEVEL4 },
  { name: "Integration", depth: SANKEYLEVELS.LEVEL3 },
  { name: "Transparency", depth: SANKEYLEVELS.LEVEL3 },
  { name: "Resourcefulness", depth: SANKEYLEVELS.LEVEL4 },
  { name: "Inclusiveness", depth: SANKEYLEVELS.LEVEL3 },
  { name: "Reflectiveness", depth: SANKEYLEVELS.LEVEL3 },
  { name: "Flexibility", depth: SANKEYLEVELS.LEVEL3 },
  { name: "Social", itemStyle: { color: "#91CC75" }, depth: SANKEYLEVELS.LEVEL1 },
  {
    name: "Safe & affordable housing",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Inclusiveness access to safe drinking water",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Effective sanitation",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Adequate affordable energy supply",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Access to all the skills and experience to respond/reduce risks and respond to disaster",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Accessible criminal & civil justice",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Accessibility to training materials (language)",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Sufficient affordable food supply",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Exchange knowledge and learn from other cities facing similar challenges",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Grassroots or community organizations participating in pre-event planning and post event response",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Accessible criminal and civil justice",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Cohesive communities",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Training programmes provided to the most vulnerable and at need populations",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Citizen engagement and communications in relation to disaster resilience and recovery",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Widespread community awareness & preparedness",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Main public facilities: university, schools, health centres, markets, etc.",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Social services infrastructure, including schools, hospitals, and clinics",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Local community support",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Strong city-wide identity & culture",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Actively engaged citizens",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Practices and drills involving public and professionals",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Adequate education for all",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Major community buildings, religious buildings, and historic/cultural assets",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Relevant skills & training",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Awareness of ecosystem services being provided to the city from natural capital beyond its administrative borders",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Awareness of functions or services that natural capital provides for the city",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Public education towards awareness of hazard, risk and disaster information",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Safe places/havens and the evacuation routes",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Risk and resilience training to all sectors of the city including government, business, NGOs and community",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Awareness of equipment and supply needed + provision",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Effective systems to deter crime",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "High levels of crime are observed",
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },

  { name: "Economic", itemStyle: { color: "#FAC858" }, depth: SANKEYLEVELS.LEVEL1 },
  {
    name: "Diverse economic base",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Inclusiveness labour policies",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Local business development and innovation",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Supportive financing mechanisms",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Comprehensive business continuity planning",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Attractive business environment",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Strong integration with regional & global economies",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Industrial areas including ports, industrial zones, and factories",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Economic facilities (banks, business centres, shopping malls, markets, etc.)",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Businesses with a documented business continuity plan",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Knowledge to funding opportunities (for local economy and recovery)",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Economic impact",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Level of insurance cover exists in the city, across all sectors - business and community",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Incentives for business and society to support resilience building",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Planned investments",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Economic activities, including commercial zones, central business districts, hotels, and tourist facilities",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Changes in the overall city's boundaries",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Financial plan and budget for resilience, including contingency funds",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Densities",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Projected changes to population densities and economic activity",
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Institutional",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL1,
  },
  {
    name: "Disaster management authority have sufficient staffing capacity",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Appropriate government decision-making",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Effective co-ordination with other government bodies",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Proactive multi-stakeholder collaboration",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Comprehensive government emergency management",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Consultative planning process",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Appropriate land use and zoning",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Robust planning approval process",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Well-managed public finances",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Informal development areas",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Is there a multi-agency/sectoral mechanism with appropriate authority and resources to address disaster risk reduction?",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Urban development to promote resilience",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Building codes or standards address hazards and risks",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Enforcement and verification of zoning building zoning and regulations",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "FAIR Data sharing to enhance resilience",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Plan for post-event recovery and reconstruction, including economic reboot, societal aspects",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Proactive corruption prevention",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Comprehensive city monitoring & data management",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Land use designations",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Changes in land use designations",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Disaster and risk reduction in urban planning instruments according to Sendai framework",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Vulnerability mapping and monitoring (vulnerable groups and assets, disaster scenario analysis)",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Do post-event assessment processes incorporate failure analyses and the ability to capture lessons learned that then feed into design and delivery of rebuilding projects?",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Early warning system and reaching level",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Integration of resilience in city functions / portfolios",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Emergency operations centre: interoperability and inter-agency implementation and coordination",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Disaster management / preparedness / emergency response plan",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Appropriately land use planning considering risk, hazards and vulnerability",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Locate the various administrative/government buildings in your city, including at the neighborhood level, as applicable",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Projected changes in location of vulnerable populations",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Adequate access to quality healthcare",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Emergency medical care",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Effective emergency response services",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Robust public health systems",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Security services: fire services, police stations, etc.",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },

  { name: "Physical", itemStyle: { color: "#73C0DE" }, depth: SANKEYLEVELS.LEVEL1 },
  {
    name: "Communication: radio/TV station, cell phone towers and existing telecommunication infrastructure",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Integration of green and blue infrastructure into city policy and projects",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Reliable communications technology",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Adequate continuity for critical assets & services",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Diverse and affordable transport networks",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Natural elements, mangrove, hills, rivers, plantations, among others",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Secure technology networks",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "City boundaries and sub-municipal boundaries (e.g., districts, wards)",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "(identify, as appropriate)industrial areas, agricultural areas, environmentally sensitive areas, main public spaces (e.g. public squares, parks, sport and recreation facilities, etc.), other relevant land uses",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Water, sanitation and energy: primary drainage network, main water tanks/water storage facilities, wastewater treatment infrastructure, etc.",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Flexibility infrastructure services",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Major infrastructure: water supply, sanitation and sewerage, roads, highways, bridges, ports, power supply, among others",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Critical infrastructure: mapping, planning and protection strategies",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Infrastructure and services damaged",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Protective infrastructure: well-designed and well-built based on risk information",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: 'Water - potable and Sanitation, Energy, Transport, Communications, Health care: ensured minimal provision for "most severe" disaster scenario',
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Major roads",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Transportation: main roads, bus station, airport, train station & rail tracks, etc.",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Diligent maintenance & continuity",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Retained spare capacity",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Housing destroyed and damaged",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Affected areas",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Topography: elevation, water bodies",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Hazard mapping and monitoring (common awareness)",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Shared understanding of infrastructure risk (authorities, utility providers, infrastructure management)",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Hazard mapping and monitoring (clear and regular mapping)",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Hazard mitigation infrastructure, including location of sea walls, dikes, retention ponds",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Identification of cascading effects",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Areas of your city that were affected by natural hazards in the past, such as floods, strong winds, fire, erosion, landslides, etc.",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Changes in intensity, frequency, and location of hazards based on hazard modeling",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: '% of education structures at risk of damage from "most probable" and "most severe" scenarios',
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Comprehensive hazard monitoring and risk assessment",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "First responder equipment, with military or civilian back up",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Food, shelter, staple goods and fuel to respond to emergency of disaster scenarios",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Vulnerability and risk",
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
];
const links = [
  {
    source: "Physical",
    target: "Natural elements, mangrove, hills, rivers, plantations, among others",
    value: 1,
  },
  {
    source: "Physical",
    target:
      "Communication: radio/TV station, cell phone towers and existing telecommunication infrastructure",
    value: 1,
  },
  {
    source: "Physical",
    target: "Adequate continuity for critical assets & services",
    value: 1,
  },
  {
    source: "Physical",
    target: "Diverse and affordable transport networks",
    value: 1,
  },
  {
    source: "Physical",
    target: "Integration of green and blue infrastructure into city policy and projects",
    value: 1,
  },
  {
    source: "Physical",
    target: "Reliable communications technology",
    value: 1,
  },
  {
    source: "Physical",
    target: "Secure technology networks",
    value: 1,
  },
  {
    source: "Physical",
    target: "City boundaries and sub-municipal boundaries (e.g., districts, wards)",
    value: 1,
  },
  {
    source: "Physical",
    target:
      "(identify, as appropriate)industrial areas, agricultural areas, environmentally sensitive areas, main public spaces (e.g. public squares, parks, sport and recreation facilities, etc.), other relevant land uses",
    value: 1,
  },
  {
    source: "Physical",
    target:
      "Water, sanitation and energy: primary drainage network, main water tanks/water storage facilities, wastewater treatment infrastructure, etc.",
    value: 1,
  },
  {
    source: "Physical",
    target: "Flexibility infrastructure services",
    value: 1,
  },
  {
    source: "Flexibility infrastructure services",
    target: "Redundancy",
    value: 0.5,
  },
  {
    source: "Flexibility infrastructure services",
    target: "Flexibility",
    value: 0.5,
  },
  {
    source: "Physical",
    target:
      "Major infrastructure: water supply, sanitation and sewerage, roads, highways, bridges, ports, power supply, among others",
    value: 1,
  },
  {
    source:
      "Major infrastructure: water supply, sanitation and sewerage, roads, highways, bridges, ports, power supply, among others",
    target: "Robustness",
    value: 0.33,
  },
  {
    source:
      "Major infrastructure: water supply, sanitation and sewerage, roads, highways, bridges, ports, power supply, among others",
    target: "Redundancy",
    value: 0.33,
  },
  {
    source:
      "Major infrastructure: water supply, sanitation and sewerage, roads, highways, bridges, ports, power supply, among others",
    target: "Integration",
    value: 0.33,
  },
  {
    source: "Physical",
    target: "Critical infrastructure: mapping, planning and protection strategies",
    value: 1,
  },
  {
    source: "Critical infrastructure: mapping, planning and protection strategies",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Critical infrastructure: mapping, planning and protection strategies",
    target: "Integration",
    value: 0.5,
  },
  {
    source: "Physical",
    target: "Infrastructure and services damaged",
    value: 1,
  },
  {
    source: "Infrastructure and services damaged",
    target: "Robustness",
    value: 1,
  },
  {
    source: "Physical",
    target:
      "Protective infrastructure: well-designed and well-built based on risk information",
    value: 1,
  },
  {
    source:
      "Protective infrastructure: well-designed and well-built based on risk information",
    target: "Robustness",
    value: 1,
  },
  {
    source: "Physical",
    target:
      'Water - potable and Sanitation, Energy, Transport, Communications, Health care: ensured minimal provision for "most severe" disaster scenario',
    value: 1,
  },
  {
    source:
      'Water - potable and Sanitation, Energy, Transport, Communications, Health care: ensured minimal provision for "most severe" disaster scenario',
    target: "Robustness",
    value: 0.5,
  },
  {
    source:
      'Water - potable and Sanitation, Energy, Transport, Communications, Health care: ensured minimal provision for "most severe" disaster scenario',
    target: "Redundancy",
    value: 0.5,
  },
  {
    source: "Physical",
    target: "Major roads",
    value: 1,
  },
  {
    source: "Major roads",
    target: "Robustness",
    value: 1,
  },
  {
    source: "Physical",
    target:
      "Transportation: main roads, bus station, airport, train station & rail tracks, etc.",
    value: 1,
  },
  {
    source:
      "Transportation: main roads, bus station, airport, train station & rail tracks, etc.",
    target: "Robustness",
    value: 1,
  },
  {
    source: "Physical",
    target: "Diligent maintenance & continuity",
    value: 1,
  },
  {
    source: "Diligent maintenance & continuity",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Diligent maintenance & continuity",
    target: "Redundancy",
    value: 0.5,
  },
  {
    source: "Physical",
    target: "Retained spare capacity",
    value: 1,
  },
  {
    source: "Retained spare capacity",
    target: "Redundancy",
    value: 1,
  },
  {
    source: "Physical",
    target: "Housing destroyed and damaged",
    value: 1,
  },
  {
    source: "Housing destroyed and damaged",
    target: "Robustness",
    value: 1,
  },
  {
    source: "Physical",
    target: "Affected areas",
    value: 1,
  },
  {
    source: "Affected areas",
    target: "Robustness",
    value: 1,
  },
  {
    source: "Physical",
    target: "Topography: elevation, water bodies",
    value: 1,
  },
  // {
  //   source: "Topography: elevation, water bodies",
  //   target: "Transparency",
  //   value: 1,
  // },
  {
    source: "Physical",
    target: "Hazard mapping and monitoring (common awareness)",
    value: 1,
  },
  {
    source: "Hazard mapping and monitoring (common awareness)",
    target: "Integration",
    value: 0.5,
  },
  {
    source: "Hazard mapping and monitoring (common awareness)",
    target: "Reflectiveness",
    value: 0.5,
  },
  {
    source: "Physical",
    target:
      "Shared understanding of infrastructure risk (authorities, utility providers, infrastructure management)",
    value: 1,
  },
  {
    source:
      "Shared understanding of infrastructure risk (authorities, utility providers, infrastructure management)",
    target: "Integration",
    value: 1,
  },
  {
    source: "Physical",
    target: "Hazard mapping and monitoring (clear and regular mapping)",
    value: 1,
  },
  {
    source: "Hazard mapping and monitoring (clear and regular mapping)",
    target: "Integration",
    value: 0.5,
  },
  {
    source: "Hazard mapping and monitoring (clear and regular mapping)",
    target: "Reflectiveness",
    value: 0.5,
  },
  {
    source: "Physical",
    target:
      "Hazard mitigation infrastructure, including location of sea walls, dikes, retention ponds",
    value: 1,
  },
  {
    source:
      "Hazard mitigation infrastructure, including location of sea walls, dikes, retention ponds",
    target: "Robustness",
    value: 0.5,
  },
  {
    source:
      "Hazard mitigation infrastructure, including location of sea walls, dikes, retention ponds",
    target: "Integration",
    value: 0.5,
  },
  {
    source: "Physical",
    target: "Identification of cascading effects",
    value: 1,
  },
  {
    source: "Identification of cascading effects",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Identification of cascading effects",
    target: "Integration",
    value: 0.5,
  },
  {
    source: "Physical",
    target:
      "Areas of your city that were affected by natural hazards in the past, such as floods, strong winds, fire, erosion, landslides, etc.",
    value: 1,
  },
  {
    source:
      "Areas of your city that were affected by natural hazards in the past, such as floods, strong winds, fire, erosion, landslides, etc.",
    target: "Robustness",
    value: 1,
  },
  {
    source:
      "Changes in intensity, frequency, and location of hazards based on hazard modeling",
    target: "Robustness",
    value: 0.25,
  },
  {
    source:
      "Changes in intensity, frequency, and location of hazards based on hazard modeling",
    target: "Integration",
    value: 0.25,
  },
  {
    source:
      "Changes in intensity, frequency, and location of hazards based on hazard modeling",
    target: "Reflectiveness",
    value: 0.25,
  },
  {
    source:
      "Changes in intensity, frequency, and location of hazards based on hazard modeling",
    target: "Flexibility",
    value: 0.25,
  },
  {
    source: "Physical",
    target:
      "Changes in intensity, frequency, and location of hazards based on hazard modeling",
    value: 1,
  },
  {
    source:
      '% of education structures at risk of damage from "most probable" and "most severe" scenarios',
    target: "Robustness",
    value: 1,
  },
  {
    source: "Physical",
    target:
      '% of education structures at risk of damage from "most probable" and "most severe" scenarios',
    value: 1,
  },
  {
    source: "Comprehensive hazard monitoring and risk assessment",
    target: "Robustness",
    value: 0.33,
  },
  {
    source: "Comprehensive hazard monitoring and risk assessment",
    target: "Integration",
    value: 0.33,
  },
  {
    source: "Comprehensive hazard monitoring and risk assessment",
    target: "Reflectiveness",
    value: 0.33,
  },
  {
    source: "Physical",
    target: "Comprehensive hazard monitoring and risk assessment",
    value: 1,
  },
  {
    source: "First responder equipment, with military or civilian back up",
    target: "Robustness",
    value: 0.25,
  },
  {
    source: "First responder equipment, with military or civilian back up",
    target: "Redundancy",
    value: 0.25,
  },
  {
    source: "First responder equipment, with military or civilian back up",
    target: "Resourcefulness",
    value: 0.25,
  },
  {
    source: "First responder equipment, with military or civilian back up",
    target: "Flexibility",
    value: 0.25,
  },
  {
    source: "Physical",
    target: "First responder equipment, with military or civilian back up",
    value: 1,
  },
  {
    source:
      "Food, shelter, staple goods and fuel to respond to emergency of disaster scenarios",
    target: "Robustness",
    value: 0.33,
  },
  {
    source:
      "Food, shelter, staple goods and fuel to respond to emergency of disaster scenarios",
    target: "Resourcefulness",
    value: 0.33,
  },
  {
    source:
      "Food, shelter, staple goods and fuel to respond to emergency of disaster scenarios",
    target: "Flexibility",
    value: 0.33,
  },
  {
    source: "Physical",
    target:
      "Food, shelter, staple goods and fuel to respond to emergency of disaster scenarios",
    value: 1,
  },
  {
    source: "Vulnerability and risk",
    target: "Robustness",
    value: 0.25,
  },
  {
    source: "Vulnerability and risk",
    target: "Integration",
    value: 0.25,
  },
  {
    source: "Vulnerability and risk",
    target: "Reflectiveness",
    value: 0.25,
  },
  {
    source: "Physical",
    target: "Vulnerability and risk",
    value: 0.25,
  },
  {
    source:
      "Water, sanitation and energy: primary drainage network, main water tanks/water storage facilities, wastewater treatment infrastructure, etc.",
    target: "Robustness",
    value: 0.5,
  },
  {
    source:
      "Water, sanitation and energy: primary drainage network, main water tanks/water storage facilities, wastewater treatment infrastructure, etc.",
    target: "Integration",
    value: 0.5,
  },
  {
    source:
      "(identify, as appropriate)industrial areas, agricultural areas, environmentally sensitive areas, main public spaces (e.g. public squares, parks, sport and recreation facilities, etc.), other relevant land uses",
    target: "Diversity",
    value: 1,
  },
  {
    source: "City boundaries and sub-municipal boundaries (e.g., districts, wards)",
    target: "Integration",
    value: 0.5,
  },
  {
    source: "City boundaries and sub-municipal boundaries (e.g., districts, wards)",
    target: "Transparency",
    value: 0.5,
  },
  {
    source: "Secure technology networks",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Secure technology networks",
    target: "Flexibility",
    value: 0.5,
  },
  {
    source: "Reliable communications technology",
    target: "Robustness",
    value: 1,
  },
  {
    source: "Integration of green and blue infrastructure into city policy and projects",
    target: "Integration",
    value: 1,
  },
  {
    source: "Diverse and affordable transport networks",
    target: "Robustness",
    value: 0.25,
  },
  {
    source: "Diverse and affordable transport networks",
    target: "Diversity",
    value: 0.25,
  },
  {
    source: "Diverse and affordable transport networks",
    target: "Inclusiveness",
    value: 0.25,
  },
  {
    source: "Diverse and affordable transport networks",
    target: "Flexibility",
    value: 0.25,
  },
  {
    source: "Adequate continuity for critical assets & services",
    target: "Robustness",
    value: 0.33,
  },
  {
    source: "Adequate continuity for critical assets & services",
    target: "Redundancy",
    value: 0.33,
  },
  {
    source: "Adequate continuity for critical assets & services",
    target: "Flexibility",
    value: 0.33,
  },
  {
    source:
      "Communication: radio/TV station, cell phone towers and existing telecommunication infrastructure",
    target: "Robustness",
    value: 1,
  },
  {
    source: "Natural elements, mangrove, hills, rivers, plantations, among others",
    target: "Integration",
    value: 1,
  },
  {
    source: "Institutional",
    target: "Appropriate government decision-making",
    value: 1,
  },
  {
    source: "Institutional",
    target: "Effective co-ordination with other government bodies",
    value: 1,
  },
  {
    source: "Institutional",
    target: "Proactive multi-stakeholder collaboration",
    value: 1,
  },
  {
    source: "Institutional",
    target: "Effective emergency response services",
    value: 1,
  },
  {
    source: "Effective emergency response services",
    target: "Robustness",
    value: 0.25,
  },
  {
    source: "Effective emergency response services",
    target: "Redundancy",
    value: 0.25,
  },
  {
    source: "Effective emergency response services",
    target: "Resourcefulness",
    value: 0.25,
  },
  {
    source: "Effective emergency response services",
    target: "Flexibility",
    value: 0.25,
  },
  {
    source: "Institutional",
    target: "Disaster management authority have sufficient staffing capacity",
    value: 1,
  },
  {
    source: "Institutional",
    target: "Consultative planning process",
    value: 1,
  },
  {
    source: "Institutional",
    target: "Comprehensive government emergency management",
    value: 1,
  },
  {
    source: "Institutional",
    target: "Comprehensive city monitoring & data management",
    value: 1,
  },
  {
    source: "Comprehensive city monitoring & data management",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Comprehensive city monitoring & data management",
    target: "Integration",
    value: 0.5,
  },
  {
    source: "Institutional",
    target: "Appropriate land use and zoning",
    value: 1,
  },
  {
    source: "Institutional",
    target: "Robust planning approval process",
    value: 1,
  },
  {
    source: "Institutional",
    target: "Well-managed public finances",
    value: 1,
  },
  {
    source: "Well-managed public finances",
    target: "Redundancy",
    value: 0.5,
  },
  {
    source: "Well-managed public finances",
    target: "Transparency",
    value: 0.5,
  },
  {
    source: "Institutional",
    target: "Informal development areas",
    value: 1,
  },
  {
    source: "Informal development areas",
    target: "Integration",
    value: 0.33,
  },
  {
    source: "Informal development areas",
    target: "Inclusiveness",
    value: 0.33,
  },
  {
    source: "Institutional",
    target:
      "Is there a multi-agency/sectoral mechanism with appropriate authority and resources to address disaster risk reduction?",
    value: 1,
  },
  {
    source:
      "Is there a multi-agency/sectoral mechanism with appropriate authority and resources to address disaster risk reduction?",
    target: "Robustness",
    value: 0.25,
  },
  {
    source:
      "Is there a multi-agency/sectoral mechanism with appropriate authority and resources to address disaster risk reduction?",
    target: "Redundancy",
    value: 0.25,
  },
  {
    source:
      "Is there a multi-agency/sectoral mechanism with appropriate authority and resources to address disaster risk reduction?",
    target: "Resourcefulness",
    value: 0.25,
  },
  {
    source:
      "Is there a multi-agency/sectoral mechanism with appropriate authority and resources to address disaster risk reduction?",
    target: "Integration",
    value: 0.25,
  },
  {
    source: "Institutional",
    target: "Urban development to promote resilience",
    value: 1,
  },
  {
    source: "Urban development to promote resilience",
    target: "Robustness",
    value: 0.33,
  },
  {
    source: "Urban development to promote resilience",
    target: "Redundancy",
    value: 0.33,
  },
  {
    source: "Urban development to promote resilience",
    target: "Integration",
    value: 0.33,
  },
  {
    source: "Institutional",
    target: "Building codes or standards address hazards and risks",
    value: 1,
  },
  {
    source: "Building codes or standards address hazards and risks",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Building codes or standards address hazards and risks",
    target: "Flexibility",
    value: 0.5,
  },
  {
    source: "Institutional",
    target: "Enforcement and verification of zoning building zoning and regulations",
    value: 1,
  },
  {
    source: "Enforcement and verification of zoning building zoning and regulations",
    target: "Robustness",
    value: 1,
  },
  {
    source: "Institutional",
    target: "FAIR Data sharing to enhance resilience",
    value: 1,
  },
  {
    source: "FAIR Data sharing to enhance resilience",
    target: "Transparency",
    value: 1,
  },
  {
    source: "Institutional",
    target:
      "Plan for post-event recovery and reconstruction, including economic reboot, societal aspects",
    value: 1,
  },
  {
    source:
      "Plan for post-event recovery and reconstruction, including economic reboot, societal aspects",
    target: "Robustness",
    value: 0.33,
  },
  {
    source:
      "Plan for post-event recovery and reconstruction, including economic reboot, societal aspects",
    target: "Redundancy",
    value: 0.33,
  },
  {
    source:
      "Plan for post-event recovery and reconstruction, including economic reboot, societal aspects",
    target: "Reflectiveness",
    value: 0.33,
  },
  {
    source: "Institutional",
    target: "Proactive corruption prevention",
    value: 1,
  },
  {
    source: "Proactive corruption prevention",
    target: "Transparency",
    value: 1,
  },
  {
    source: "Institutional",
    target: "Land use designations",
    value: 1,
  },
  {
    source: "Land use designations",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Land use designations",
    target: "Integration",
    value: 0.5,
  },
  {
    source: "Institutional",
    target: "Changes in land use designations",
    value: 1,
  },
  {
    source: "Changes in land use designations",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Changes in land use designations",
    target: "Integration",
    value: 0.5,
  },
  {
    source: "Institutional",
    target:
      "Disaster and risk reduction in urban planning instruments according to Sendai framework",
    value: 1,
  },
  {
    source:
      "Disaster and risk reduction in urban planning instruments according to Sendai framework",
    target: "Robustness",
    value: 0.5,
  },
  {
    source:
      "Disaster and risk reduction in urban planning instruments according to Sendai framework",
    target: "Integration",
    value: 0.5,
  },
  {
    source: "Institutional",
    target:
      "Vulnerability mapping and monitoring (vulnerable groups and assets, disaster scenario analysis)",
    value: 1,
  },
  {
    source:
      "Vulnerability mapping and monitoring (vulnerable groups and assets, disaster scenario analysis)",
    target: "Robustness",
    value: 0.5,
  },
  {
    source:
      "Vulnerability mapping and monitoring (vulnerable groups and assets, disaster scenario analysis)",
    target: "Reflectiveness",
    value: 0.5,
  },
  {
    source: "Institutional",
    target:
      "Do post-event assessment processes incorporate failure analyses and the ability to capture lessons learned that then feed into design and delivery of rebuilding projects?",
    value: 1,
  },
  {
    source:
      "Do post-event assessment processes incorporate failure analyses and the ability to capture lessons learned that then feed into design and delivery of rebuilding projects?",
    target: "Robustness",
    value: 0.5,
  },
  {
    source:
      "Do post-event assessment processes incorporate failure analyses and the ability to capture lessons learned that then feed into design and delivery of rebuilding projects?",
    target: "Reflectiveness",
    value: 0.5,
  },
  {
    source: "Institutional",
    target: "Early warning system and reaching level",
    value: 1,
  },
  {
    source: "Early warning system and reaching level",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Early warning system and reaching level",
    target: "Reflectiveness",
    value: 0.5,
  },
  {
    source: "Institutional",
    target: "Integration of resilience in city functions / portfolios",
    value: 1,
  },
  {
    source: "Integration of resilience in city functions / portfolios",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Integration of resilience in city functions / portfolios",
    target: "Integration",
    value: 0.5,
  },
  {
    source: "Institutional",
    target:
      "Emergency operations centre: interoperability and inter-agency implementation and coordination",
    value: 1,
  },
  {
    source:
      "Emergency operations centre: interoperability and inter-agency implementation and coordination",
    target: "Robustness",
    value: 0.25,
  },
  {
    source:
      "Emergency operations centre: interoperability and inter-agency implementation and coordination",
    target: "Redundancy",
    value: 0.25,
  },
  {
    source:
      "Emergency operations centre: interoperability and inter-agency implementation and coordination",
    target: "Integration",
    value: 0.25,
  },
  {
    source:
      "Emergency operations centre: interoperability and inter-agency implementation and coordination",
    target: "Reflectiveness",
    value: 0.25,
  },
  {
    source: "Institutional",
    target: "Disaster management / preparedness / emergency response plan",
    value: 1,
  },
  {
    source: "Disaster management / preparedness / emergency response plan",
    target: "Robustness",
    value: 0.25,
  },
  {
    source: "Disaster management / preparedness / emergency response plan",
    target: "Integration",
    value: 0.25,
  },
  {
    source: "Disaster management / preparedness / emergency response plan",
    target: "Resourcefulness",
    value: 0.25,
  },
  {
    source: "Disaster management / preparedness / emergency response plan",
    target: "Flexibility",
    value: 0.25,
  },
  {
    source: "Institutional",
    target: "Appropriately land use planning considering risk, hazards and vulnerability",
    value: 1,
  },
  {
    source: "Appropriately land use planning considering risk, hazards and vulnerability",
    target: "Robustness",
    value: 0.25,
  },
  {
    source: "Appropriately land use planning considering risk, hazards and vulnerability",
    target: "Diversity",
    value: 0.25,
  },
  {
    source: "Appropriately land use planning considering risk, hazards and vulnerability",
    target: "Integration",
    value: 0.25,
  },
  {
    source: "Appropriately land use planning considering risk, hazards and vulnerability",
    target: "Flexibility",
    value: 0.25,
  },
  {
    source: "Institutional",
    target:
      "Locate the various administrative/government buildings in your city, including at the neighborhood level, as applicable",
    value: 1,
  },
  {
    source:
      "Locate the various administrative/government buildings in your city, including at the neighborhood level, as applicable",
    target: "Robustness",
    value: 0.25,
  },
  {
    source:
      "Locate the various administrative/government buildings in your city, including at the neighborhood level, as applicable",
    target: "Redundancy",
    value: 0.25,
  },
  {
    source:
      "Locate the various administrative/government buildings in your city, including at the neighborhood level, as applicable",
    target: "Integration",
    value: 0.25,
  },
  {
    source:
      "Locate the various administrative/government buildings in your city, including at the neighborhood level, as applicable",
    target: "Flexibility",
    value: 0.25,
  },
  {
    source: "Institutional",
    target: "Projected changes in location of vulnerable populations",
    value: 1,
  },
  {
    source: "Projected changes in location of vulnerable populations",
    target: "Inclusiveness",
    value: 0.5,
  },
  {
    source: "Projected changes in location of vulnerable populations",
    target: "Flexibility",
    value: 0.5,
  },
  {
    source: "Institutional",
    target: "Adequate access to quality healthcare",
    value: 1,
  },
  {
    source: "Adequate access to quality healthcare",
    target: "Robustness",
    value: 0.25,
  },
  {
    source: "Adequate access to quality healthcare",
    target: "Diversity",
    value: 0.25,
  },
  {
    source: "Adequate access to quality healthcare",
    target: "Resourcefulness",
    value: 0.25,
  },
  {
    source: "Adequate access to quality healthcare",
    target: "Inclusiveness",
    value: 0.25,
  },
  {
    source: "Institutional",
    target: "Emergency medical care",
    value: 1,
  },
  {
    source: "Emergency medical care",
    target: "Robustness",
    value: 0.25,
  },
  {
    source: "Emergency medical care",
    target: "Redundancy",
    value: 0.25,
  },
  {
    source: "Emergency medical care",
    target: "Resourcefulness",
    value: 0.25,
  },
  {
    source: "Emergency medical care",
    target: "Flexibility",
    value: 0.25,
  },
  {
    source: "Institutional",
    target: "Robust public health systems",
    value: 1,
  },
  {
    source: "Robust public health systems",
    target: "Robustness",
    value: 0.33,
  },
  {
    source: "Robust public health systems",
    target: "Redundancy",
    value: 0.33,
  },
  {
    source: "Robust public health systems",
    target: "Flexibility",
    value: 0.33,
  },
  {
    source: "Institutional",
    target: "Security services: fire services, police stations, etc.",
    value: 1,
  },
  {
    source: "Security services: fire services, police stations, etc.",
    target: "Robustness",
    value: 0.25,
  },
  {
    source: "Security services: fire services, police stations, etc.",
    target: "Redundancy",
    value: 0.25,
  },
  {
    source: "Security services: fire services, police stations, etc.",
    target: "Resourcefulness",
    value: 0.25,
  },
  {
    source: "Security services: fire services, police stations, etc.",
    target: "Flexibility",
    value: 0.25,
  },
  {
    source: "Robust planning approval process",
    target: "Robustness",
    value: 1,
  },
  {
    source: "Appropriate land use and zoning",
    target: "Robustness",
    value: 0.33,
  },
  {
    source: "Appropriate land use and zoning",
    target: "Diversity",
    value: 0.33,
  },
  {
    source: "Appropriate land use and zoning",
    target: "Integration",
    value: 0.33,
  },
  {
    source: "Comprehensive government emergency management",
    target: "Robustness",
    value: 0.25,
  },
  {
    source: "Comprehensive government emergency management",
    target: "Redundancy",
    value: 0.25,
  },
  {
    source: "Comprehensive government emergency management",
    target: "Resourcefulness",
    value: 0.25,
  },
  {
    source: "Comprehensive government emergency management",
    target: "Flexibility",
    value: 0.25,
  },
  {
    source: "Consultative planning process",
    target: "Integration",
    value: 0.33,
  },
  {
    source: "Consultative planning process",
    target: "Inclusiveness",
    value: 0.33,
  },
  {
    source: "Consultative planning process",
    target: "Transparency",
    value: 0.33,
  },
  {
    source: "Disaster management authority have sufficient staffing capacity",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Disaster management authority have sufficient staffing capacity",
    target: "Resourcefulness",
    value: 0.5,
  },
  {
    source: "Proactive multi-stakeholder collaboration",
    target: "Robustness",
    value: 0.25,
  },
  {
    source: "Proactive multi-stakeholder collaboration",
    target: "Redundancy",
    value: 0.25,
  },
  {
    source: "Proactive multi-stakeholder collaboration",
    target: "Integration",
    value: 0.25,
  },
  {
    source: "Proactive multi-stakeholder collaboration",
    target: "Inclusiveness",
    value: 0.25,
  },
  {
    source: "Effective co-ordination with other government bodies",
    target: "Integration",
    value: 1,
  },
  {
    source: "Appropriate government decision-making",
    target: "Redundancy",
    value: 0.33,
  },
  {
    source: "Appropriate government decision-making",
    target: "Integration",
    value: 0.33,
  },
  {
    source: "Appropriate government decision-making",
    target: "Transparency",
    value: 0.33,
  },
  {
    source: "Economic",
    target: "Local business development and innovation",
    value: 1,
  },
  {
    source: "Economic",
    target: "Supportive financing mechanisms",
    value: 1,
  },
  {
    source: "Economic",
    target: "Comprehensive business continuity planning",
    value: 1,
  },
  {
    source: "Economic",
    target: "Diverse economic base",
    value: 1,
  },
  {
    source: "Economic",
    target: "Attractive business environment",
    value: 1,
  },
  {
    source: "Economic",
    target: "Strong integration with regional & global economies",
    value: 1,
  },
  {
    source: "Strong integration with regional & global economies",
    target: "Integration",
    value: 1,
  },

  {
    source: "Economic",
    target: "Industrial areas including ports, industrial zones, and factories",
    value: 1,
  },
  {
    source: "Industrial areas including ports, industrial zones, and factories",
    target: "Diversity",
    value: 1,
  },
  {
    source: "Economic",
    target:
      "Economic facilities (banks, business centres, shopping malls, markets, etc.)",
    value: 1,
  },
  {
    source:
      "Economic facilities (banks, business centres, shopping malls, markets, etc.)",
    target: "Redundancy",
    value: 1,
  },
  {
    source: "Economic",
    target: "Businesses with a documented business continuity plan",
    value: 1,
  },
  {
    source: "Businesses with a documented business continuity plan",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Businesses with a documented business continuity plan",
    target: "Flexibility",
    value: 0.5,
  },
  {
    source: "Economic",
    target: "Knowledge to funding opportunities (for local economy and recovery)",
    value: 1,
  },
  {
    source: "Knowledge to funding opportunities (for local economy and recovery)",
    target: "Redundancy",
    value: 1,
  },
  {
    source: "Economic",
    target:
      "Level of insurance cover exists in the city, across all sectors - business and community",
    value: 1,
  },
  {
    source:
      "Level of insurance cover exists in the city, across all sectors - business and community",
    target: "Robustness",
    value: 0.5,
  },
  {
    source:
      "Level of insurance cover exists in the city, across all sectors - business and community",
    target: "Redundancy",
    value: 0.5,
  },
  {
    source: "Economic",
    target: "Economic impact",
    value: 1,
  },
  {
    source: "Economic impact",
    target: "Robustness",
    value: 1,
  },

  {
    source: "Economic",
    target: "Incentives for business and society to support resilience building",
    value: 1,
  },
  {
    source: "Incentives for business and society to support resilience building",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Incentives for business and society to support resilience building",
    target: "Redundancy",
    value: 0.51,
  },
  {
    source: "Economic",
    target: "Planned investments",
    value: 1,
  },
  {
    source: "Planned investments",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Planned investments",
    target: "Redundancy",
    value: 0.5,
  },
  {
    source: "Economic",
    target: "Inclusiveness labour policies",
    value: 1,
  },
  {
    source: "Inclusiveness labour policies",
    target: "Inclusiveness",
    value: 1,
  },
  {
    source: "Economic",
    target:
      "Economic activities, including commercial zones, central business districts, hotels, and tourist facilities",
    value: 1,
  },
  {
    source:
      "Economic activities, including commercial zones, central business districts, hotels, and tourist facilities",
    target: "Diversity",
    value: 1,
  },
  {
    source: "Economic",
    target: "Changes in the overall city's boundaries",
    value: 1,
  },
  {
    source: "Changes in the overall city's boundaries",
    target: "Flexibility",
    value: 1,
  },
  {
    source: "Economic",
    target: "Financial plan and budget for resilience, including contingency funds",
    value: 1,
  },
  {
    source: "Financial plan and budget for resilience, including contingency funds",
    target: "Robustness",
    value: 0.25,
  },
  {
    source: "Financial plan and budget for resilience, including contingency funds",
    target: "Redundancy",
    value: 0.25,
  },
  {
    source: "Financial plan and budget for resilience, including contingency funds",
    target: "Integration",
    value: 0.25,
  },
  {
    source: "Financial plan and budget for resilience, including contingency funds",
    target: "Flexibility",
    value: 0.25,
  },
  {
    source: "Economic",
    target: "Projected changes to population densities and economic activity",
    value: 1,
  },
  {
    source: "Projected changes to population densities and economic activity",
    target: "Flexibility",
    value: 1,
  },
  {
    source: "Economic",
    target: "Densities",
    value: 1,
  },
  {
    source: "Densities",
    target: "Flexibility",
    value: 1,
  },
  {
    source: "Attractive business environment",
    target: "Redundancy",
    value: 0.5,
  },
  {
    source: "Attractive business environment",
    target: "Diversity",
    value: 0.5,
  },
  {
    source: "Diverse economic base",
    target: "Diversity",
    value: 1,
  },
  {
    source: "Comprehensive business continuity planning",
    target: "Robustness",
    value: 0.33,
  },
  {
    source: "Comprehensive business continuity planning",
    target: "Redundancy",
    value: 0.33,
  },
  {
    source: "Comprehensive business continuity planning",
    target: "Flexibility",
    value: 0.33,
  },
  {
    source: "Supportive financing mechanisms",
    target: "Redundancy",
    value: 1,
  },
  {
    source: "Local business development and innovation",
    target: "Diversity",
    value: 1,
  },
  {
    source: "Social",
    target: "Safe & affordable housing",
    value: 1,
  },
  {
    source: "Social",
    target: "Inclusiveness access to safe drinking water",
    value: 1,
  },
  {
    source: "Social",
    target: "Adequate affordable energy supply",
    value: 1,
  },
  {
    source: "Social",
    target: "Accessibility to training materials (language)",
    value: 1,
  },
  {
    source: "Social",
    target: "Sufficient affordable food supply",
    value: 1,
  },
  {
    source: "Social",
    target:
      "Grassroots or community organizations participating in pre-event planning and post event response",
    value: 1,
  },
  {
    source: "Social",
    target: "Accessible criminal and civil justice",
    value: 1,
  },
  {
    source: "Social",
    target: "Training programmes provided to the most vulnerable and at need populations",
    value: 1,
  },
  {
    source: "Social",
    target: "Main public facilities: university, schools, health centres, markets, etc.",
    value: 1,
  },
  {
    source: "Social",
    target: "Social services infrastructure, including schools, hospitals, and clinics",
    value: 1,
  },
  {
    source: "Social",
    target: "Practices and drills involving public and professionals",
    value: 1,
  },
  {
    source: "Social",
    target: "Accessible criminal & civil justice",
    value: 1,
  },
  {
    source: "Social",
    target: "Widespread community awareness & preparedness",
    value: 1,
  },
  {
    source: "Social",
    target: "Strong city-wide identity & culture",
    value: 1,
  },
  {
    source: "Strong city-wide identity & culture",
    target: "Inclusiveness",
    value: 1,
  },
  {
    source: "Social",
    target: "Adequate education for all",
    value: 1,
  },
  {
    source: "Social",
    target: "Effective sanitation",
    value: 1,
  },
  {
    source: "Social",
    target: "Local community support",
    value: 1,
  },
  {
    source: "Social",
    target: "Cohesive communities",
    value: 1,
  },
  {
    source: "Social",
    target: "Actively engaged citizens",
    value: 1,
  },
  {
    source: "Social",
    target:
      "Access to all the skills and experience to respond/reduce risks and respond to disaster",
    value: 1,
  },
  {
    source: "Social",
    target: "Exchange knowledge and learn from other cities facing similar challenges",
    value: 1,
  },
  {
    source: "Social",
    target:
      "Citizen engagement and communications in relation to disaster resilience and recovery",
    value: 1,
  },
  {
    source: "Social",
    target:
      "Major community buildings, religious buildings, and historic/cultural assets",
    value: 1,
  },
  {
    source:
      "Major community buildings, religious buildings, and historic/cultural assets",
    target: "Inclusiveness",
    value: 1,
  },
  {
    source: "Social",
    target: "Safe places/havens and the evacuation routes",
    value: 1,
  },
  {
    source: "Safe places/havens and the evacuation routes",
    target: "Transparency",
    value: 1,
  },
  {
    source: "Social",
    target:
      "Risk and resilience training to all sectors of the city including government, business, NGOs and community",
    value: 1,
  },
  {
    source:
      "Risk and resilience training to all sectors of the city including government, business, NGOs and community",
    target: "Robustness",
    value: 0.5,
  },
  {
    source:
      "Risk and resilience training to all sectors of the city including government, business, NGOs and community",
    target: "Resourcefulness",
    value: 0.5,
  },
  {
    source: "Social",
    target: "Awareness of equipment and supply needed + provision",
    value: 1,
  },
  {
    source: "Awareness of equipment and supply needed + provision",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Awareness of equipment and supply needed + provision",
    target: "Flexibility",
    value: 0.5,
  },
  {
    source: "Social",
    target: "Effective systems to deter crime",
    value: 1,
  },
  {
    source: "Effective systems to deter crime",
    target: "Robustness",
    value: 0.33,
  },
  {
    source: "Effective systems to deter crime",
    target: "Redundancy",
    value: 0.33,
  },
  {
    source: "Effective systems to deter crime",
    target: "Flexibility",
    value: 0.33,
  },
  {
    source: "Social",
    target: "High levels of crime are observed",
    value: 1,
  },
  {
    source: "High levels of crime are observed",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "High levels of crime are observed",
    target: "Flexibility",
    value: 0.5,
  },
  {
    source: "Social",
    target: "Relevant skills & training",
    value: 1,
  },
  {
    source: "Relevant skills & training",
    target: "Resourcefulness",
    value: 1,
  },
  {
    source: "Social",
    target:
      "Awareness of ecosystem services being provided to the city from natural capital beyond its administrative borders",
    value: 1,
  },
  {
    source:
      "Awareness of ecosystem services being provided to the city from natural capital beyond its administrative borders",
    target: "Integration",
    value: 1,
  },
  {
    source: "Social",
    target:
      "Awareness of functions or services that natural capital provides for the city",
    value: 1,
  },
  {
    source:
      "Awareness of functions or services that natural capital provides for the city",
    target: "Integration",
    value: 1,
  },
  {
    source: "Social",
    target: "Public education towards awareness of hazard, risk and disaster information",
    value: 1,
  },
  {
    source: "Public education towards awareness of hazard, risk and disaster information",
    target: "Inclusiveness",
    value: 1,
  },
  {
    source:
      "Citizen engagement and communications in relation to disaster resilience and recovery",
    target: "Inclusiveness",
    value: 1,
  },
  {
    source: "Exchange knowledge and learn from other cities facing similar challenges",
    target: "Reflectiveness",
    value: 1,
  },
  {
    source: "Actively engaged citizens",
    target: "Inclusiveness",
    value: 1,
  },
  {
    source: "Cohesive communities",
    target: "Inclusiveness",
    value: 1,
  },
  {
    source: "Local community support",
    target: "Inclusiveness",
    value: 1,
  },
  {
    source: "Effective sanitation",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Effective sanitation",
    target: "Inclusiveness",
    value: 0.5,
  },
  {
    source: "Adequate education for all",
    target: "Inclusiveness",
    value: 1,
  },
  {
    source: "Widespread community awareness & preparedness",
    target: "Inclusiveness",
    value: 0.5,
  },
  {
    source: "Widespread community awareness & preparedness",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Accessible criminal & civil justice",
    target: "Transparency",
    value: 1,
  },
  {
    source: "Practices and drills involving public and professionals",
    target: "Robustness",
    value: 1,
  },
  {
    source:
      "Access to all the skills and experience to respond/reduce risks and respond to disaster",
    target: "Resourcefulness",
    value: 1,
  },
  {
    source: "Social services infrastructure, including schools, hospitals, and clinics",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Social services infrastructure, including schools, hospitals, and clinics",
    target: "Inclusiveness",
    value: 0.5,
  },
  {
    source: "Main public facilities: university, schools, health centres, markets, etc.",
    target: "Robustness",
    value: 0.5,
  },
  {
    source: "Main public facilities: university, schools, health centres, markets, etc.",
    target: "Inclusiveness",
    value: 0.5,
  },
  {
    source: "Training programmes provided to the most vulnerable and at need populations",
    target: "Inclusiveness",
    value: 1,
  },
  {
    source: "Accessible criminal and civil justice",
    target: "Inclusiveness",
    value: 1,
  },
  {
    source:
      "Grassroots or community organizations participating in pre-event planning and post event response",
    target: "Inclusiveness",
    value: 1,
  },
  {
    source: "Sufficient affordable food supply",
    target: "Inclusiveness",
    value: 1,
  },
  {
    source: "Accessibility to training materials (language)",
    target: "Inclusiveness",
    value: 1,
  },

  {
    source: "Safe & affordable housing",
    target: "Inclusiveness",
    value: 1,
  },
  {
    source: "Adequate affordable energy supply",
    target: "Inclusiveness",
    value: 1,
  },
  {
    source: "Inclusiveness access to safe drinking water",
    target: "Inclusiveness",
    value: 1,
  },
];
