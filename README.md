# Electricity Tariff Calculator in Mauritius 💡🇲🇺

This is a simple, responsive web application that calculates your **monthly electricity bill** based on the **Mauritius Central Electricity Board (CEB)** tariff structure effective **February 2023**.

It accepts your total monthly energy consumption in kWh and provides a detailed breakdown of charges, including:

- Tiered consumption rates
- Fixed fees (Meter Rental and TV License)
- Total bill in Mauritian Rupees (Rs.)

---

## 🔧 Features

- ✅ Supports CEB's detailed tariff slabs
- ✅ Automatically calculates consumption by range
- ✅ Responsive output:
  - **Desktop/tablet**: Table view
  - **Mobile (<576px)**: Clean, block-based view
- ✅ Error handling for empty/invalid input
- ✅ All values rounded to 2 decimal places
- ✅ Styled cleanly with HTML, CSS & Vanilla JS (no dependencies)

---

## 🚀 Getting Started

To run the calculator locally:

```bash
git clone https://github.com/your-username/ceb-tariff-calculator.git
cd ceb-tariff-calculator
open index.html
```

Or just open the index.html file in any modern browser.

### 📊 Tariff Structure

The following tariff rates are applied as per **Central Electricity Board (CEB), Mauritius**, effective **February 2023**:

| Bracket        | Units           | Rate (Rs./kWh) |
|----------------|-----------------|----------------|
| First          | 25              | 3.16           |
| Next           | 25              | 4.38           |
| Next           | 25              | 4.74           |
| Next           | 25              | 5.45           |
| Next           | 100             | 6.15           |
| Next           | 50              | 7.02           |
| Next           | 50              | 7.90           |
| Next           | 200             | 10.46          |
| Next           | 500             | 10.68          |
| Next           | 500             | 10.91          |
| Next           | 500             | 11.13          |
| All additional | Above 2,050 kWh | 11.36          |

#### 🔒 Fixed Charges

- **Meter Rental**: Rs. 20.00  
- **TV License Fee**: Rs. 150.00

> _These rates have been sourced from the [Central Electricity Board (CEB)](https://ceb.mu) website, effective as of February 2023._

---

## 📁 File Structure
```
📦 ceb-tariff-calculator
  ├── index.html # Main UI 
  ├── style.css # Styling (subtle, clean) 
  ├── script.js # Tariff logic & display rendering 
  └── README.md # Project documentation
```
---

## 🧪 Usage Instructions

1. Open `index.html` in any modern browser.
2. Enter your **monthly electricity consumption (in kWh)**.
3. Click the **"Calculate bill"** button.
4. View your:
   - Detailed breakdown by range
   - Meter & TV license charges
   - Final bill in bold

The output format adjusts based on screen size.

---

## ⚙️ Configuration

You can easily update the maximum kWh limit or tariff slabs by modifying constants in `script.js`:

```js
const MAX_KWH = 10000; // Editable upper input limit
const tariffBrackets = [
  { limit: 25, rate: 3.16 },
  { limit: 25, rate: 4.38 },
  ...
];
```

---

## 📌 Disclaimer

This tool is provided for **informational purposes only**.

While it uses the official tariffs published by the [Central Electricity Board (CEB)](https://ceb.mu), it is **not affiliated** with CEB or any government agency.

For official billing and inquiries, please refer to your actual CEB electricity bill or visit the [CEB official website](https://ceb.mu).
