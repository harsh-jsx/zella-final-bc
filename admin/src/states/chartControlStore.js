import { create } from "zustand";

export const chartControlStore = create((set, get) => ({
  intervelOptions: [
    {
      label: "1 minute",
      value: 60,
      IntervalHistoryValue: "1m",
    },
    {
      label: "5 minutes",
      value: 300,
      IntervalHistoryValue: "5m",
    },
    {
      label: "15 minutes",
      value: 900,
      IntervalHistoryValue: "15m",
    },
    {
      label: "30 minutes",
      value: 1800,
      IntervalHistoryValue: "30m",
    },
    {
      label: "1 hour",
      value: 3600,
      IntervalHistoryValue: "1h",
    },
    {
      label: "2 hour",
      value: 3600 * 2,
      IntervalHistoryValue: "2h",
    },
    {
      label: "4 hours",
      value: 14400,
      IntervalHistoryValue: "4h",
    },
    {
      label: "12 hours",
      value: 43200,
      IntervalHistoryValue: "12h",
    },
    {
      label: "1 day",
      value: 86400,
      IntervalHistoryValue: "1d",
    },
    {
      label: "1 week",
      value: 604800,
      IntervalHistoryValue: "1w",
    },
    {
      label: "1 month",
      value: 2592000,
      IntervalHistoryValue: "1m",
    },
  ],
  selectedIntervalValue: 60,
  selectedIntervalHistoryValue: "1m",
  setSelectedInterval: (value) => {
    const intervalOption = get().intervelOptions.find(
      (option) => option.value === value
    );
    set({
      selectedIntervalValue: value,
      selectedIntervalHistoryValue: intervalOption
        ? intervalOption.IntervalHistoryValue
        : "1m",
    });
  },

  indicators: [
    {
      id: "sma",
      label: "SMA",
      status: false,
      toggle: () =>
        set({
          indicators: get().indicators.map((indicator) =>
            indicator.id === "sma"
              ? { ...indicator, status: !indicator.status }
              : indicator
          ),
        }),
    },
    {
      id: "pma",
      label: "PMA",
      status: false,
      toggle: () =>
        set({
          indicators: get().indicators.map((indicator) =>
            indicator.id === "pma"
              ? { ...indicator, status: !indicator.status }
              : indicator
          ),
        }),
    },
    {
      id: "ema",
      label: "EMA",
      status: false,
      toggle: () =>
        set({
          indicators: get().indicators.map((indicator) =>
            indicator.id === "ema"
              ? { ...indicator, status: !indicator.status }
              : indicator
          ),
        }),
    },
    {
      id: "boll",
      label: "BOLL (Bollinger Bands)",
      status: false,
      toggle: () =>
        set({
          indicators: get().indicators.map((indicator) =>
            indicator.id === "boll"
              ? { ...indicator, status: !indicator.status }
              : indicator
          ),
        }),
    },
  ],

  findIndicatorById: (id) => {
    return get().indicators.find((indicator) => indicator.id === id);
  },
}));
