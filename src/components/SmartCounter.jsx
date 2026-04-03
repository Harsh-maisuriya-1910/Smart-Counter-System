import React, { useState } from "react";

export const SmartCounter = () => {
  /** 
   **  State
   */
  const [count, setCount] = useState(0);
  const [defaultValue, setDefaultValue] = useState(0);
  const [step, setStep] = useState(1);
  const [preventNegative, setPreventNegative] = useState(false);
  const [lastValue, setLastValue] = useState(null);
  const [maxLimit, setMaxLimit] = useState(50);

  /**
   ** Helper: Clamp Logic (🔥 clean & reusable)
   */
  const clamp = (value) => {
    if (preventNegative && value < 0) return 0;
    if (maxLimit !== null && value > maxLimit) return maxLimit;
    return value;
  };

  /**
   **  Handlers
   */
  const increment = () => {
    setCount((prev) => clamp(prev + step));
  };

  const decrement = () => {
    setCount((prev) => clamp(prev - step));
  };

  const reset = () => {
    setLastValue(count);
    setCount(clamp(defaultValue));
  };

  const restore = () => {
    if (lastValue !== null) {
      setCount(clamp(lastValue));
    }
  };

  /**
   ** Conditions
   */
  const isDecrementDisabled = preventNegative && count <= 0;
  const isIncrementDisabled = maxLimit !== null && count >= maxLimit;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  px-4">

      {/* CARD */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg p-4 sm:p-6 md:p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-white space-y-6">

        {/* TITLE */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center tracking-wide">
          Smart Counter System
        </h1>

        {/* COUNT */}
        <div className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold">
          {count}
        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4">
          <button
            onClick={increment}
            disabled={isIncrementDisabled}
            className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-green-500/80 hover:bg-green-500 transition disabled:opacity-30"
          >
            +{step}
          </button>

          <button
            onClick={decrement}
            disabled={isDecrementDisabled}
            className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-red-500/80 hover:bg-red-500 transition disabled:opacity-30"
          >
            -{step}
          </button>

          <button
            onClick={reset}
            className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-yellow-400/80 hover:bg-yellow-400 text-black font-semibold transition"
          >
            Reset
          </button>

          <button
            onClick={restore}
            disabled={lastValue === null}
            className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-blue-500/80 hover:bg-blue-500 transition disabled:opacity-30"
          >
            Restore
          </button>
        </div>

        {/* INPUT SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div>
            <label className="text-sm text-gray-300">Step</label>
            <input
              type="number"
              min="1"
              value={step}
              onChange={(e) =>
                setStep(Math.max(1, Number(e.target.value)))
              }
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/80 text-black focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Default</label>
            <input
              type="number"
              value={defaultValue}
              onChange={(e) => setDefaultValue(Number(e.target.value))}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/80 text-black focus:outline-none"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="text-sm text-gray-300">Max Limit</label>
            <input
              type="number"
              value={maxLimit ?? ""}
              onChange={(e) => {
                const value = e.target.value;
                setMaxLimit(value === "" ? null : Number(value));
              }}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/80 text-black focus:outline-none"
            />
          </div>
        </div>

        {/* TOGGLE */}
        <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl">
          <span className="text-gray-300 text-sm sm:text-base">
            Prevent Negative
          </span>
          <input
            type="checkbox"
            checked={preventNegative}
            onChange={() => setPreventNegative((prev) => !prev)}
            className="w-5 h-5"
          />
        </div>

        {/* LAST VALUE */}
        {lastValue !== null && (
          <div className="text-center text-xs sm:text-sm text-gray-400">
            Last value was: <span className="text-white">{lastValue}</span>
          </div>
        )}
      </div>
    </div>
  );
};