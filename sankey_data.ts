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
const example1 = { name: computed(() => t("echarts.capacities.Robustness")), depth: SANKEYLEVELS.LEVEL4 };
const updated_example1 = {
  name: computed(() => t("echarts.capacities.Robustness")),
  depth: SANKEYLEVELS.LEVEL4,
};
// Example 2
const example2 = {
  name: computed(() => t("echarts.social.1.1")),
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
  target: computed(() => t("echarts.physical.2.2")),
  value: 1,
};
const updated_example3 = {
  source: computed(() => t("echarts.physical.name")),
  target: computed(() => t("echarts.physical.2.2")),
  value: 1,
};
// The data need to be updated
const data = [
  { name: computed(()=>t("echarts.capacities.Robustness")), depth: SANKEYLEVELS.LEVEL4 },
  { name: computed(()=>t("echarts.capacities.Redundancy")), depth: SANKEYLEVELS.LEVEL4 },

  { name: computed(()=>t("echarts.capacities.Diversity")), depth: SANKEYLEVELS.LEVEL4 },
  { name: computed(()=>t("echarts.capacities.Integration")), depth: SANKEYLEVELS.LEVEL3 },
  { name: computed(()=>t("echarts.capacities.Transparency")), depth: SANKEYLEVELS.LEVEL3 },
  { name: computed(()=>t("echarts.capacities.Resourcefulness")), depth: SANKEYLEVELS.LEVEL4 },
  { name: computed(()=>t("echarts.capacities.Inclusiveness")), depth: SANKEYLEVELS.LEVEL3 },
  { name: computed(()=>t("echarts.capacities.Reflectiveness")), depth: SANKEYLEVELS.LEVEL3 },
  { name: computed(()=>t("echarts.capacities.Flexibility")), depth: SANKEYLEVELS.LEVEL3 },
  { name: "Social", itemStyle: { color: "#91CC75" }, depth: SANKEYLEVELS.LEVEL1 },
  {
    name: computed(() => t("echarts.social.1.1")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.1.3")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.1.4")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.1.2")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.2.1")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.2")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.2.2")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.1.5")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.2.3")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.1")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.2")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.3")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.4")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.5")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.6")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.7")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.8")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.9")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.10")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.11")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.12")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.13")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.14")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.3.15")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.4.1")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.4.2")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.5.1")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.5.2")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.5.3")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.5.4")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.6.1")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.social.6.2")),
    itemStyle: { color: "#91CC75" },
    depth: SANKEYLEVELS.LEVEL2,
  },

  { name: "Economic", itemStyle: { color: "#FAC858" }, depth: SANKEYLEVELS.LEVEL1 },
  {
    name: computed(() => t("echarts.economic.1.1")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.2.9")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.2.10")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.1.3")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.2.8")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.2.3")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.2.11")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.1.2")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.1.4")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.2.1")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.2.2")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.2.4")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.2.5")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.2.6")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.2.7")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.2.12")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.4.1")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.3.1")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.3.3")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.economic.3.2")),
    itemStyle: { color: "#FAC858" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: "Institutional",
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL1,
  },
  {
    name: computed(() => t("echarts.institutional.1.1")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.1.6")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.1.7")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.1.8")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.3.5")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.1.2")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.3.9")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.1.4")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.1.5")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.1.3")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.1.9")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.1.10")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.1.11")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.1.12")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.1.13")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.1.14")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.1.15")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.1.16")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.2.1")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.2.2")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.3.1")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.3.2")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.3.3")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.3.4")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.3.6")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.3.7")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.3.8")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.3.10")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.3.11")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.3.12")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.4.1")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.4.2")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.4.3")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.4.4")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.institutional.4.5")),
    itemStyle: { color: "#EE6666" },
    depth: SANKEYLEVELS.LEVEL2,
  },

  { name: "Physical", itemStyle: { color: "#73C0DE" }, depth: SANKEYLEVELS.LEVEL1 },
  {
    name: computed(() => t("echarts.physical.1.1")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.2.1")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.1.2")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.8.2")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.8.7")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.2.2")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.3.1")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.3.2")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.4.1")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.5.8")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.6.2")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.5.1")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.5.2")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.5.3")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.5.4")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.5.5")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.5.6")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.5.7")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.6.2")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.6.3")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.7.1")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name:  computed(() => t("echarts.physical.7.2")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.7.3")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.7.4")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.7.5")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.7.6")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.7.7")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.7.8")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.7.9")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.7.10")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.8.1")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.8.3")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.8.4")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.8.5")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
  {
    name: computed(() => t("echarts.physical.8.6")),
    itemStyle: { color: "#73C0DE" },
    depth: SANKEYLEVELS.LEVEL2,
  },
];
const links = [
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.2.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.2.2")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.2.2")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.2.2")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.2.2")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.2.2")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.1.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.1.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.1.1")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.1.1")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.1.1")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.1.1")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.1.1")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.8.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.8.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.8.1")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.8.1")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.8.1")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.8.1")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.8.7")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.8.7")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.7")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.7")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.7")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.7")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.7")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.7")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.2.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.2.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.2.1")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.2.1")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.2.1")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.2.1")),
    target: "Reflectiveness",
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.2.1")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.2.1")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.14,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.1.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.1.2")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.1.2")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.1.2")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.1.2")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.1.2")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.3.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.3.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.3.1")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.3.1")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.3.1")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.3.1")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.3.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.3.2")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.physical.3.2")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.physical.3.2")),
    target: "Reflectiveness",
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.physical.3.2")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.25,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.4.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.4.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.4.1")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.4.1")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.4.1")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.4.1")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.5.8")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.5.8")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.8")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.8")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.8")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.8")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.6.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.6.2")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.6.2")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.6.2")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.6.2")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.6.2")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.6.2")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.5.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.5.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.1")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.1")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.1")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.1")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.5.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.5.2")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.5.2")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.5.2")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.5.2")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.5.2")),
    target: "Reflectiveness",
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.5.2")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.5.2")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.14,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.5.3")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.5.3")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.3")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.3")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.3")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.3")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.5.4")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.5.4")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.4")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.4")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.4")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.5.4")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.5.5")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.5.5")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.5.5")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.5.5")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.5.5")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.5.5")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.5.5")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.5.6")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.5.6")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.5.6")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.5.6")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.5.6")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.5.6")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.5.6")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.5.7")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.5.7")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.5.7")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.5.7")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.5.7")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.5.7")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.5.7")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.6.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.6.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.physical.6.1")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.physical.6.1")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.physical.6.1")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.25,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.6.3")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.6.3")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.6.3")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.6.3")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.6.3")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.6.3")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.7.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.7.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.1")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.1")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.1")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.1")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.7.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.7.2")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.2")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.2")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.2")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.2")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.7.3")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.7.3")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.3")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.3")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.3")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.3")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  // {
  //   source: computed(() => t("echarts.physical.7.3")),
  //   target: computed(() => t("echarts.capacities.Transparency")),
  //   value: 1,
  // },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.7.4")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.7.4")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.4")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.4")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.4")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.4")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Physical",
    target:
      computed(() => t("echarts.physical.7.5")),
    value: 1,
  },
  {
    source:
      computed(() => t("echarts.physical.7.5")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.25,
  },
  {
    source:
      computed(() => t("echarts.physical.7.5")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.25,
  },
  {
    source:
      computed(() => t("echarts.physical.7.5")),
    target: "Reflectiveness",
    value: 0.25,
  },
  {
    source:
      computed(() => t("echarts.physical.7.5")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.25,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.7.6")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.7.6")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.6")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.6")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.6")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.6")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Physical",
    target:
      computed(() => t("echarts.physical.7.7")),
    value: 1,
  },
  {
    source:
      computed(() => t("echarts.physical.7.7")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source:
      computed(() => t("echarts.physical.7.7")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source:
      computed(() => t("echarts.physical.7.7")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source:
      computed(() => t("echarts.physical.7.7")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source:
      computed(() => t("echarts.physical.7.7")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source:
      computed(() => t("echarts.physical.7.7")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.7.8")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.7.8")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.8")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.8")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.8")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.physical.7.8")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },

  {
    source: "Physical",
    target: computed(() => t("echarts.physical.7.9")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.7.9")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.physical.7.9")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.physical.7.9")),
    target: "Reflectiveness",
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.physical.7.9")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.25,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.7.10")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.7.10")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.7.10")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.7.10")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source:  computed(() => t("echarts.physical.7.10")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.7.10")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.7.10")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.8.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.8.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.25,
  },
  {
    source:  computed(() => t("echarts.physical.8.1")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.physical.8.1")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.25,
  },
  {
    source:  computed(() => t("echarts.physical.8.1")),
    target: "Reflectiveness",
    value: 0.25,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.8.3")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.8.3")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.8.3")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.8.3")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.8.3")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.8.3")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.physical.8.3")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },

  {
    source: "Physical",
    target: computed(() => t("echarts.physical.8.4")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.8.4")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.4")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.4")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.4")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.4")),
    target: "Reflectiveness",
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.4")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.4")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.14,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.8.5")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.8.5")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.5")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.5")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.5")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.5")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.14,
  },
  {
    source:  computed(() => t("echarts.physical.8.5")),
    target: "Reflectiveness",
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.5")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: "Physical",
    target: computed(() => t("echarts.physical.8.6")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.physical.8.6")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.6")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.6")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.6")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.6")),
    target: "Reflectiveness",
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.6")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.physical.8.6")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.14,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.6")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.6")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.6")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.6")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.6")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.6")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.6")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.7")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.7")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.institutional.1.7")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.institutional.1.7")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.institutional.1.7")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.25,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.8")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.8")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.8")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.8")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.8")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.8")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.8")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.4.3")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.4.3")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.4.3")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.4.3")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.4.3")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.4.3")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.institutional.1.1")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.institutional.1.1")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.institutional.1.1")),
    target: "Reflectiveness",
    value: 0.25,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.2")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.2")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.2")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.2")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.3.5")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.3.5")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.5")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.5")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.5")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.5")),
    target: "Reflectiveness",
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.5")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.5")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.14,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.16")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.16")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.16")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.16")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.16")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.16")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.3.9")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.3.9")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.9")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.9")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.9")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.9")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.9")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.4")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.4")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.institutional.1.4")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.institutional.1.4")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.institutional.1.4")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.25,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.5")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.5")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.1.5")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.1.5")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.1.5")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.1.5")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.1.5")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.1.5")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.14,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.3")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.3")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.3")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.3")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },

  {
    source: computed(() => t("echarts.institutional.1.3")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.3")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.9")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.9")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.1.9")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.1.9")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.1.9")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.1.9")),
    target: "Reflectiveness",
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.1.9")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.1.9")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.14,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.10")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.10")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.10")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.10")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.10")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.10")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },

  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.11")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.11")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.11")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.11")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.11")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.11")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.11")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.12")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.12")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.12")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.12")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.12")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.12")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.13")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.13")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.13")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.13")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.13")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.1.13")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.14")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.14")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.14")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.14")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.14")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.14")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.1.14")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.1.15")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.1.15")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.33,
  },
  {
    source: computed(() => t("echarts.institutional.1.15")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.33,
  },
  {
    source: computed(() => t("echarts.institutional.1.15")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.33,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.2.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.2.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.2.1")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.2.1")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.2.1")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.2.1")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.2.1")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.2.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.2.2")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.2.2")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.2.2")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.2.2")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.2.2")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.2.2")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },

  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.3.1")),
    value: 1,
  },
  {
    source:  computed(() => t("echarts.institutional.3.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.1")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.1")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.1")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.1")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.1")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.3.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.3.2")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.2")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.2")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.2")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.2")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.2")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.3.3")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.3.3")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.3")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.3")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.3")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.3")),
    target: "Reflectiveness",
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.3")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.3")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.14,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.3.4")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.3.4")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.institutional.3.4")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.institutional.3.4")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.institutional.3.4")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.25,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.3.6")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.3.6")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.6")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.6")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.6")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.6")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.6")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.3.7")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.3.7")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.7")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.7")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.7")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.7")),
    target: "Reflectiveness",
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.7")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.7")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.14,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.3.8")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.3.8")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.8")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.8")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.8")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.8")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.3.8")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.14,
  },

  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.3.10")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.3.10")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.10")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.10")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.10")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.10")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.10")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.3.11")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.3.11")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.11")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.11")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.11")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.11")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.11")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.3.12")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.3.12")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.12")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.12")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.12")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.12")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.3.12")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.4.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.4.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.4.1")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.4.1")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.4.1")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.4.1")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.4.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.4.2")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.4.2")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.4.2")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.4.2")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.institutional.4.2")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.4.4")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.4.4")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.4.4")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.4.4")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.4.4")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.4.4")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.institutional.4.4")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Institutional",
    target: computed(() => t("echarts.institutional.4.5")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.institutional.4.5")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.4.5")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.4.5")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.4.5")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.4.5")),
    target: "Reflectiveness",
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.4.5")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.institutional.4.5")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.14,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.2.10")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.2.10")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.2.10")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.2.10")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.2.10")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.25,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.1.3")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.1.3")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.1.3")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.1.3")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.1.3")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.25,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.2.8")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.2.8")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.8")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.8")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.8")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.8")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.8")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.1.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.1.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.1.1")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.1.1")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.1.1")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.1.1")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.1.1")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.2.3")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.2.3")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.3")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.3")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.3")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.3")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.3")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.2.11")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.2.11")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.2.11")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.2.11")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.2.11")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.25,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.1.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.1.2")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.33,
  },
  {
    source: computed(() => t("echarts.economic.1.2")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.33,
  },
  {
    source: computed(() => t("echarts.economic.1.2")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.33,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.1.4")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.1.4")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.1.4")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.1.4")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.1.4")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.25,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.2.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.2.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.2.1")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.2.1")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.2.1")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.25,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.2.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.2.2")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.2.2")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.2.2")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.economic.2.2")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.25,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.2.5")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.2.5")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.economic.2.5")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.economic.2.5")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.economic.2.5")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.economic.2.5")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.2.4")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.2.4")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.4")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.4")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.4")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.4")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.4")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.2.6")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.2.6")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.6")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.6")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.6")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.6")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.2.6")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.2.7")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.2.7")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.economic.2.7")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.economic.2.7")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.economic.2.7")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.economic.2.7")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.economic.2.7")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.economic.2.7")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.14,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.2.9")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.2.9")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.33,
  },
  {
    source: computed(() => t("echarts.economic.2.9")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.33,
  },
  {
    source: computed(() => t("echarts.economic.2.9")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.33,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.2.12")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.2.12")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.economic.2.12")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.economic.2.12")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.economic.2.12")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.economic.2.12")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.4.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.4.1")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.33,
  },
  {
    source: computed(() => t("echarts.economic.4.1")),
    target: "Reflectiveness",
    value: 0.33,
  },
  {
    source: computed(() => t("echarts.economic.4.1")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.33,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.3.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.3.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.economic.3.1")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.economic.3.1")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.economic.3.1")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.economic.3.1")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.economic.3.1")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.economic.3.1")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.14,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.3.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.3.2")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.3.2")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.3.2")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.3.2")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.3.2")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.economic.3.2")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Economic",
    target: computed(() => t("echarts.economic.3.3")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.economic.3.3")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.economic.3.3")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.economic.3.3")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.economic.3.3")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.economic.3.3")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.1.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.1.1")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.1.1")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.1.1")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.1.1")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.1.3")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.1.3")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.1.3")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.1.3")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.1.3")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.1.3")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.1.3")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.1.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.1.2")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.1.2")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.1.2")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.1.2")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.1.2")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.1.2")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.2.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.2.2")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.2.2")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.2.2")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.2.2")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.2.2")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.1.5")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.1.5")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.social.1.5")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.social.1.5")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.social.1.5")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.25,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.3.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.3.1")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.1")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.1")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.1")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.1")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.3.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.3.2")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.2")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.2")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.2")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.2")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.3.4")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.3.4")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.4")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.4")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.4")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.4")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.4")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.3.7")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.3.7")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.7")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.7")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.7")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.7")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.7")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.3.8")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.3.8")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.8")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.8")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.8")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.8")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.8")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.8")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.3.12")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.3.12")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.12")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.12")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.12")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.12")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.12")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.3.6")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.3.6")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.6")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.6")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.6")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.6")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.6")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.3.10")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.3.10")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.10")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.10")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.10")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.10")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.10")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.3.13")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.3.13")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.13")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.13")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.13")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.13")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.13")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.1.4")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.1.4")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.1.4")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.1.4")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.1.4")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.1.4")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.1.4")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.3.9")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.3.9")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.9")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.9")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.9")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.9")),
    target: "Reflectiveness",
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.9")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.9")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.14,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.3.3")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.3.3")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.3")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.3")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.3")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.3")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.3.11")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.3.11")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.11")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.11")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.11")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.11")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.11")),
    target: "Reflectiveness",
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.3.11")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.14,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.2.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.2.1")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.13,
  },
  {
    source: computed(() => t("echarts.social.2.1")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.13,
  },
  {
    source: computed(() => t("echarts.social.2.1")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.13,
  },
  {
    source: computed(() => t("echarts.social.2.1")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.13,
  },
  {
    source: computed(() => t("echarts.social.2.1")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.13,
  },
  {
    source: computed(() => t("echarts.social.2.1")),
    target: "Reflectiveness",
    value: 0.13,
  },
  {
    source: computed(() => t("echarts.social.2.1")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.13,
  },
  {
    source: computed(() => t("echarts.social.2.1")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.13,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.2.3")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.2.3")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.2.3")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.2.3")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.2.3")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.2.3")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.3.5")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.3.5")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.5")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.5")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.5")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.3.5")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.3.14")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.3.14")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.14")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.14")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.14")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.14")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.3.14")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    //Not available in spreadsheet
    source: "Social",
    target: computed(() => t("echarts.social.5.2")),
    value: 1,
  },
  {
    //Not available in spreadsheet
    source: computed(() => t("echarts.social.5.2")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 1,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.5.3")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.5.3")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.5.3")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.5.3")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.5.3")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.5.3")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.5.3")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.5.4")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.5.4")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.5.4")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.5.4")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.5.4")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.5.4")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.5.4")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.6.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.6.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.6.1")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.6.1")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.6.1")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.6.1")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.6.1")),
    target: "Reflectiveness",
    value: 0.14,
  },
  {
    source: computed(() => t("echarts.social.6.1")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.14,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.6.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.6.2")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.6.2")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.6.2")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.6.2")),
    target: "Reflectiveness",
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.6.2")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.6.2")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.3.15")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.3.15")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.social.3.15")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.social.3.15")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.25,
  },
  {
    source: computed(() => t("echarts.social.3.15")),
    target: computed(() => t("echarts.capacities.Flexibility")),
    value: 0.25,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.4.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.4.1")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.4.1")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.4.1")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.4.1")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.4.1")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.4.2")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.4.2")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.4.2")),
    target: computed(() => t("echarts.capacities.Redundancy")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.4.2")),
    target: computed(() => t("echarts.capacities.Diversity")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.4.2")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.4.2")),
    target: computed(() => t("echarts.capacities.Resourcefulness")),
    value: 0.16,
  },
  {
    source: computed(() => t("echarts.social.4.2")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.16,
  },
  {
    source: "Social",
    target: computed(() => t("echarts.social.5.1")),
    value: 1,
  },
  {
    source: computed(() => t("echarts.social.5.1")),
    target: computed(() => t("echarts.capacities.Robustness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.5.1")),
    target: computed(() => t("echarts.capacities.Integration")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.5.1")),
    target: computed(() => t("echarts.capacities.Inclusiveness")),
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.5.1")),
    target: "Reflectiveness",
    value: 0.2,
  },
  {
    source: computed(() => t("echarts.social.5.1")),
    target: computed(() => t("echarts.capacities.Transparency")),
    value: 0.2,
  },
];
