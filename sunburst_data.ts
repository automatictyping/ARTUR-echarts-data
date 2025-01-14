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
// The data need to be updated:
const sunburstData = {
  name: computed(() =>t("ecahrts.name")),
  children: [
    {
      name: computed(() => t("echarts.social.name")),
      children: [
        {
          name: computed(() => t("echarts.social.1.name")),
          children: [
            {
              name: computed(() => t("echarts.social.1.1")),
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
              name: computed(() => t("echarts.social.1.2")),
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
              name: computed(() => t("echarts.social.1.3")),
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
              name: computed(() => t("echarts.social.1.4")),
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
              name: computed(() => t("echarts.social.1.5")),
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
          name: computed(() => t("echarts.social.2.name")),
          children: [
            {
              name: computed(() =>t("echarts.social.2.1")),
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
              name: computed(() => t("echarts.social.2.2")),
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
              name: computed(() => t("echarts.social.2.3")),
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
          name: computed(() => t("echarts.social.3.name")),
          children: [
            {
              name: computed(() => t("echarts.social.3.1")),
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
              name: computed(() => t("echarts.social.3.2")),
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
              name: computed(() => t("echarts.social.3.3")),
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
              name: computed(() => t("echarts.social.3.4")),
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
              name: computed(() => t("echarts.social.3.5")),
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
              name: computed(() => t("echarts.social.3.6")),
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
              name: computed(() => t("echarts.social.3.7")),
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
              name: computed(() => t("echarts.social.3.8")),
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
              name: computed(() => t("echarts.social.3.9")),
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
              name: computed(() => t("echarts.social.3.10")),
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
              name: computed(() => t("echarts.social.3.11")),
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
              name: computed(() => t("echarts.social.3.12")),
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
              name: computed(() => t("echarts.social.3.13")),
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
              name: computed(() => t("echarts.social.3.14")),
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
              name: computed(() => t("echarts.social.3.15")),
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
          name: computed(() => t("echarts.social.4.name")),
          children: [
            {
              name: computed(() => t("echarts.social.4.1")),
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
              name: computed(() => t("echarts.social.4.2")),
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
          name: computed(() => t("echarts.social.5.name")),
          children: [
            {
              name: computed(() => t("echarts.social.5.1")),
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
              name: computed(() => t("echarts.social.5.2")),
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
              name: computed(() => t("echarts.social.5.3")),
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
              name: computed(() => t("echarts.social.5.4")),
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
          name: computed(() => t("echarts.social.6.name")),
          children: [
            {
              name: computed(() => t("echarts.social.6.1")),
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
              name: computed(() => t("echarts.social.6.2")),
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
    {//Economic Start
      name: computed(() => t("echarts.economic.name")),
      children: [
        {
          name: computed(() => t("echarts.economic.1.name")),
          children: [
            {
              name: computed(() => t("echarts.economic.1.1")),
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
              name: computed(() => t("echarts.economic.1.2")),
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
              name: computed(() => t("echarts.economic.1.3")),
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
              name: computed(() => t("echarts.economic.1.4")),
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
          name: computed(() => t("echarts.economic.2.name")),
          children: [
            {
              name: computed(() =>t("echarts.economic.2.1")),
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
              name: computed(() => t("echarts.economic.2.2")),
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
              name: computed(() => t("echarts.economic.2.3")),
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
              name: computed(() =>t("echarts.economic.2.4")),
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
              name: computed(() => t("echarts.economic.2.5")),
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
              name: computed(() => t("echarts.economic.2.6")),
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
              name: computed(() =>t("echarts.economic.2.7")),
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
              name: computed(() => t("echarts.economic.2.8")),
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
              name: computed(() => t("echarts.economic.2.9")),
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
              name: computed(() => t("echarts.economic.2.10")),
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
              name: computed(() => t("echarts.economic.2.11")),
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
              name: computed(() => t("echarts.economic.2.12")),
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
          name: computed(() => t("echarts.economic.3.name")),
          children: [
            {
              name: computed(() => t("echarts.economic.3.1")),
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
              name: computed(() => t("echarts.economic.3.2")),
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
              name: computed(() => t("echarts.economic.3.3")),
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
          name: computed(() => t("echarts.economic.4.name")),
          children: [
            {
              name: computed(() => t("echarts.economic.4.1")),
              children: [
                {
                  value: 6,
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
    {//Institutional start
      name: computed(() => t("echarts.institutional.name")),
      children: [
        {
          name: computed(() => t("echarts.institutional.1.name")),
          children: [
            {
              name: computed(() => t("echarts.institutional.1.1")),
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
              name: computed(() => t("echarts.institutional.1.2")),
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
              name: computed(() => t("echarts.institutional.1.3")),
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
              name: computed(() => t("echarts.institutional.1.4")),
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
              name: computed(() => t("echarts.institutional.1.5")),
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
              name: computed(() => t("echarts.institutional.1.6")),
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
              name: computed(() => t("echarts.institutional.1.7")),
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
              name: computed(() => t("echarts.institutional.1.8")),
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
              name: computed(() => t("echarts.institutional.1.9")),
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
              name: computed(() => t("echarts.institutional.1.10")),
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
              name: computed(() => t("echarts.institutional.1.11")),
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
              name: computed(() => t("echarts.institutional.1.12")),
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
              name: computed(() => t("echarts.institutional.1.13")),
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
              name: computed(() => t("echarts.institutional.1.14")),
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
              name: computed(() => t("echarts.institutional.1.15")),
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
              name: computed(() => t("echarts.institutional.1.16")),
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
          name: computed(() => t("echarts.institutional.2.name")),
          children: [
            {
              name: computed(() =>t("echarts.institutional.2.1")),
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
              name: computed(() => t("echarts.institutional.2.2")),
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
          name: computed(() => t("echarts.institutional.3.name")),
          children: [
            {
              name: computed(() => t("echarts.institutional.3.1")),
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
              name: computed(() => t("echarts.institutional.3.2")),
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
              name: computed(() => t("echarts.institutional.3.3")),
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
              name: computed(() => t("echarts.institutional.3.4")),
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
              name: computed(() => t("echarts.institutional.3.5")),
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
              name: computed(() => t("echarts.institutional.3.6")),
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
              name: computed(() => t("echarts.institutional.3.7")),
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
              name: computed(() => t("echarts.institutional.3.8")),
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
              name: computed(() => t("echarts.institutional.3.9")),
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
              name: computed(() => t("echarts.institutional.3.10")),
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
              name: computed(() => t("echarts.institutional.3.11")),
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
              name: computed(() => t("echarts.institutional.3.12")),
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
          name: computed(() => t("echarts.institutional.4.name")),
          children: [
            {
              name: computed(() => t("echarts.institutional.4.1")),
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
              name: computed(() => t("echarts.institutional.4.2")),
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
              name: computed(() => t("echarts.institutional.4.3")),
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
              name: computed(() => t("echarts.institutional.4.4")),
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
              name: computed(() => t("echarts.institutional.4.5")),
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
    {//Physical start
      name: computed(() => t("echarts.physical.name")),
      children: [
        {
          name: computed(() => t("echarts.physical.1.name")),
          children: [
            {
              name: computed(() => t("echarts.physical.1.1")),
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
              name: computed(() => t("echarts.physical.1.2")),
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
          name: computed(() => t("echarts.physical.2.name")),
          children: [
            {
              name: computed(() =>t("echarts.physical.2.1")),
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
              name: computed(() => t("echarts.physical.2.2")),
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
          name: computed(() => t("echarts.physical.3.name")),
          children: [
            {
              name: computed(() => t("echarts.physical.3.1")),
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
              name: computed(() => t("echarts.physical.3.2")),
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
          name: computed(() => t("echarts.physical.4.name")),
          children: [
            {
              name: computed(() => t("echarts.physical.4.1")),
              children: [
                {
                  value: 6,
                  itemStyle: { opacity: 0.3 },
                  tooltip: { show: false },
                  emphasis: { disabled: true },
                },
              ],
            },
          ],
        },
        {
          name: computed(() => t("echarts.physical.5.name")),
          children: [
            {
              name: computed(() => t("echarts.physical.5.1")),
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
              name: computed(() => t("echarts.physical.5.2")),
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
              name: computed(() => t("echarts.physical.5.3")),
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
              name: computed(() => t("echarts.physical.5.4")),
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
              name: computed(() => t("echarts.physical.5.5")),
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
              name: computed(() => t("echarts.physical.5.6")),
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
              name: computed(() => t("echarts.physical.5.7")),
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
          name: computed(() => t("echarts.physical.6.name")),
          children: [
            {
              name: computed(() => t("echarts.physical.6.1")),
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
              name: computed(() => t("echarts.physical.6.2")),
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
              name: computed(() => t("echarts.physical.6.3")),
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
          name: computed(() => t("echarts.physical.7.name")),
          children: [
            {
              name: computed(() => t("echarts.physical.7.1")),
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
              name: computed(() => t("echarts.physical.7.2")),
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
              name: computed(() => t("echarts.physical.7.3")),
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
              name: computed(() => t("echarts.physical.7.4")),
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
              name: computed(() => t("echarts.physical.7.5")),
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
              name: computed(() => t("echarts.physical.7.6")),
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
              name: computed(() => t("echarts.physical.7.7")),
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
              name: computed(() => t("echarts.physical.7.8")),
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
              name: computed(() => t("echarts.physical.7.9")),
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
              name: computed(() => t("echarts.physical.7.10")),
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
          name: computed(() => t("echarts.physical.8.name")),
          children: [
            {
              name: computed(() => t("echarts.physical.8.1")),
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
              name: computed(() => t("echarts.physical.8.2")),
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
              name: computed(() => t("echarts.physical.8.3")),
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
              name: computed(() => t("echarts.physical.8.4")),
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
              name: computed(() => t("echarts.physical.8.5")),
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
              name: computed(() => t("echarts.physical.8.6")),
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
              name: computed(() => t("echarts.physical.8.7")),
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