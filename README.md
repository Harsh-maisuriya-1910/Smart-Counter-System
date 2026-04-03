⚡ Smart Counter System

A simple but powerful counter built with React — not just +1 / -1, but something closer to how real apps handle values.

🧩 What is this?

This started as a basic counter, but then extended step by step to include real-world behaviors like limits, reset control, and state safety.

The goal was to **practice how state actually behaves in real applications**, not just demos.

🚀 Features

- Increment / Decrement with custom step
- Reset to a custom default value
- Restore previous value (like undo)
- Prevent negative values (optional toggle)
- Max limit control
- Buttons auto-disable when limits are reached

⚙️ How it works (simple idea)

Instead of directly updating state, everything goes through a small helper:

const clamp = (value) => {
  if (preventNegative && value < 0) return 0;
  if (maxLimit !== null && value > maxLimit) return maxLimit;
  return value;
};


So every update becomes safe:
setCount(prev => clamp(prev + step));

This avoids breaking the UI and keeps logic predictable.

🧠 What I focused on

- Using `prev` state properly (important in real apps)
- Avoiding invalid values (negative / overflow)
- Keeping logic reusable instead of repeating conditions
- Making UI react to state (disable buttons, show last value)

🌐 Live Demo

👉 https://smart-counter-system.vercel.app/

🛠 Tech Stack

- React (useState)
- Tailwind CSS
- JavaScript (ES6+)

📸 Preview



💭 Why I built this

To move from **basic React examples → real-world component thinking**

🔮 Next ideas

- Custom hook (`useCounter`)
- Save data in localStorage
- Add history (multiple undo)
- Improve UI animations

👨‍💻 Author

Harsh Maisuriya


