import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();
/*
 *** How to update the origianl data:
 *** 1. the variable "example" is the original data, and the "updated_example" is the updated data.
 *** 2. check echarts_options.json file for finding the text to substitute the original text.
 *** 3. the data need to be updated is variable "sunburstData", you can see that some of the "name" attributes have been substitued as `t("some_text")`,
 *** and you need to change it to `computed(()=>t("some_text"))`
 *** 4. The value need to be changed is "name". The other values should be kept as the same.
 */
const example = {
  name: "ECO-\nNOMIC",
  children: [
    {
      name: "Economic activities",
      children: [
        {
          name: "Diverse economic base",
          itemStyle: { opacity: 0.6 },
          children: [
            {
              value: 2,
              itemStyle: { opacity: 0.3 },
              tooltip: { show: false },
              emphasis: { disabled: true },
            },
          ],
        },
      ],
    },
  ],
};
// t("echarts.economic.name") = "ECO-\nNOMIC",
// and the computed() property is a reactive property used to compute, updating automatically when those dependencies change.
const updated_example = {
  name: computed(() => t("echarts.economic.name")),
  children: [
    {
      name: computed(() => t("echarts.economic.1.name")),
      children: [
        {
          name: computed(() => t("echarts.economic.1.1")),
          itemStyle: { opacity: 0.6 },
          children: [
            {
              value: 2,
              itemStyle: { opacity: 0.3 },
              tooltip: { show: false },
              emphasis: { disabled: true },
            },
          ],
        },
      ],
    },
  ],
};

// The data need to be updated:
const sunburstData = {
  name: t("ecahrts.name"),
  children: [
    {
      name: t("echarts.social.name"),
      children: [
        {
          name: t("echarts.social.1.name"),
          children: [
            {
              name: t("echarts.social.1.1"),
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: t("echarts.social.1.2"),
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: t("echarts.social.1.3"),
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: t("echarts.social.1.4"),
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: t("echarts.social.1.5"),
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: t("echarts.social.2.name"),
          children: [
            {
              name: t("echarts.social.2.1"),
              children: [
                {
                  value: 6,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: t("echarts.social.2.2"),
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: t("echarts.social.2.3"),
              children: [
                {
                  value: 5,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: t("echarts.social.3.name"),
          children: [
            {
              name: t("echarts.social.3.1"),
              children: [
                {
                  value: 6,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: t("echarts.social.3.2"),
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: t("echarts.social.3.3"),
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: t("echarts.social.3.4"),
              children: [
                {
                  value: 5,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: t("echarts.social.3.5"),
              children: [
                {
                  value: 7,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: t("echarts.social.3.6"),
              children: [
                {
                  value: 5,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: t("echarts.social.3.7"),
              children: [
                {
                  value: 6,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: t("echarts.social.3.8"),
              children: [
                {
                  value: 7,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Local community support",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Strong city-wide identity & culture",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Actively engaged citizens",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Practices and drills involving public and professionals",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Adequate education for all",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Major community buildings, religious buildings, and historic/cultural assets",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 7,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Relevant skills & training",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Ecosystem Services",
          children: [
            {
              name: "Awareness of ecosystem services being provided to the city from natural capital beyond its administrative borders",
              children: [
                {
                  value: 8,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Awareness of functions or services that natural capital provides for the city",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 5,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Planning Resilience",
          children: [
            {
              name: "Public education towards awareness of hazard, risk and disaster information",
              children: [
                {
                  value: 6,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Safe places/havens and the evacuation routes",
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Risk and resilience training to all sectors of the city including government, business, NGOs and community",
              children: [
                {
                  value: 8,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Awareness of equipment and supply needed + provision",
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Security services",
          children: [
            {
              name: "Effective systems to deter crime",
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "High levels of crime are observed",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "ECO-\nNOMIC",
      children: [
        {
          name: "Economic activities",
          children: [
            {
              name: "Diverse economic base",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 2,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Industrial areas including ports, industrial zones, and factories",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 5,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Supportive financing mechanisms",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 2,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Economic facilities (banks, business centres, shopping malls, markets, etc.)",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Economic Impact",
          children: [
            {
              name: "Businesses with a documented business continuity plan",
              children: [
                {
                  value: 2,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Knowledge to funding opportunities (for local economy and recovery)",
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Attractive business environment",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 2,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Economic impact",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 2,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Level of insurance cover exists in the city, across all sectors - business and community",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Incentives for business and society to support resilience building",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Planned investments",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 2,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Comprehensive business continuity planning",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Inclusive labour policies",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 2,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Local business development and innovation",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Strong integration with regional & global economies",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Economic activities, including commercial zones, central business districts, hotels, and tourist facilities",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 7,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Planning Resilience",
          children: [
            {
              name: "Financial plan and budget for resilience, including contingency funds",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Projected changes to population densities and economic activity",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Densities",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 2,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Governance",
          children: [
            {
              name: "Changes in the overall city's boundaries",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "INSTI-\nTUTIONAL",
      children: [
        {
          name: "Governance",
          children: [
            {
              name: "Disaster management authority have sufficient staffing capacity",
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Consultative planning process",
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Informal development areas",
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Robust planning approval process",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Well-managed public finances",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Appropriate government decision-making",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Effective co-ordination with other government bodies",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Proactive multi-stakeholder collaboration",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Is there a multi-agency/sectoral mechanism with appropriate authority and resources to address disaster risk reduction?",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 8,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Urban development to promote resilience",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Building codes or standards address hazards and risks",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Enforcement and verification of zoning bulding zoning and regulations",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "FAIR Data sharing to enhance resilience",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Plan for post-event recovery and reconstruction, including economic reboot, societal aspects",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 7,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Proactive corruption prevention",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Comprehensive city monitoring & data management",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Land use",
          children: [
            {
              name: "Land use designations",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Changes in land use designations",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Planning for risk and disaster",
          children: [
            {
              name: "Disaster and risk reduction in urban planning instruments according to Sendai framework",
              children: [
                {
                  value: 6,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Vulnerability mapping and monitoring (vulnerable groups and assets, dissaster scenario analysis)",
              children: [
                {
                  value: 7,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Do post-event assessment processes incorporate failure analyses and the ability to capture lessons learned that then feed into design and delivery of rebuilding projects?",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 10,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Early warning system and reaching level",
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Comprehensive government emergency management",
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Integration of resilience in city functions / portfolios",
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Emergency operations centre: interoperability and inter-agency implementation and coordination",
              children: [
                {
                  value: 7,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Disaster management / preparedness / emergency response plan",
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Appropriate land use and zoning",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Appropriately land use planning considering risk, hazards and vulnerability",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Locate the various administrative/government buildings in your city, including at the neighbourhood level, as applicable",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 7,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Projected changes in location of vulnerable populations",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Public health systems",
          children: [
            {
              name: "Adequate access to quality healthcare",
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Emergency medical care",
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Effective emergency response services",
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Robust public health systems",
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Security services: fire services, police stations, etc.",
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "PHYSICAL",
      children: [
        {
          name: "Communication",
          children: [
            {
              name: "Communication: radio/TV station, cell phone towers and existing telecommunication infrastructure",
              children: [
                {
                  value: 7,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Reliable communications technology",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Ecosystem Services",
          children: [
            {
              name: "Integration of green and blue infrastructure into city policy and projects",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Natural elements, mangrove, hills, rivers, plantations, among others",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 5,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Governance",
          children: [
            {
              name: "Secure technology networks",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 2,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "City boundaries and sub-municipal boundaries (e.g., districts, wards)",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Land Use",
          children: [
            {
              name: "(identify, as appropriate)industrial areas, agricultural areas, environmentally sensitive areas, main public spaces (e.g. public squares, parks, sport and recreation facilities, etc.), other relevant land uses",
              children: [
                {
                  value: 10,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Major infrastructure",
          children: [
            {
              name: "Major infrastructure: water supply, sanitation and sewerage, roads, highways, bridges, ports, power supply, among others",
              children: [
                {
                  value: 8,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Critical infrastructure: mapping, planning and protection strategies",
              children: [
                {
                  value: 5,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Infrastructure and services damaged",
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Protective infrastructure: well-designed and well-built based on risk information",
              children: [
                {
                  value: 5,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: 'Water - potable and Sanitation, Energy, Transport, Communications, Health care: ensured minimal provision for "most severe" disaster scenario',
              children: [
                {
                  value: 9,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Major roads",
              children: [
                {
                  value: 2,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Transportation: main roads, bus station, airport, train station & rail tracks, etc.",
              children: [
                {
                  value: 5,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Major Infrastructure & Planning Resilience",
          children: [
            {
              name: "Diligent maintenance & continuity",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Flexible infrastructure services",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Retained spare capacity",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Planning for risk and disaster",
          children: [
            {
              name: "Housing destroyed and damaged",
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Affected areas",
              children: [
                {
                  value: 2,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Topography: elevation, water bodies",
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Hazard mapping and monitoring (common awareness)",
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Shared understanding of infrastructure risk (authorities, utility providers, infrastructure management)",
              children: [
                {
                  value: 6,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Hazard mapping and monitoring (clear and regular mapping)",
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Hazard mitigation infrastructure, including location of sea walls, dikes, retention ponds",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Identification of cascading effects",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Areas of your city that were affected by natural hazards in the past, such as floods, strong winds, fire, erosion, landslides, etc.",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 8,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Changes in intensity, frequency, and location of hazards based on hazard modeling",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 5,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: "Planning Resilience",
          children: [
            {
              name: '% of education structures at risk of damage from "most probable" and "most severe" scenarios',
              children: [
                {
                  value: 6,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Adequate continuity for critical assets & services",
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Comprehensive hazard monitoring and risk assessment",
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "First responder equipment, with military or civilian back up",
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Food, shelter, staple goods and fuel to respond to emergency of disaster scenarios",
              children: [
                {
                  value: 4,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Vulnerability and risk",
              children: [
                {
                  value: 2,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
            {
              name: "Diverse and affordable transport networks",
              itemStyle: { opacity: 0.6 },
              children: [
                {
                  value: 3,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
