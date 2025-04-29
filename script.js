const MAX_KWH = 10000;

const METER_RENTAL = 20;
const TV_LICENSE = 150;

const tariffBrackets = [
    { limit: 25, rate: 3.16 },
    { limit: 25, rate: 4.38 },
    { limit: 25, rate: 4.74 },
    { limit: 25, rate: 5.45 },
    { limit: 100, rate: 6.15 },
    { limit: 50, rate: 7.02 },
    { limit: 50, rate: 7.90 },
    { limit: 200, rate: 10.46 },
    { limit: 500, rate: 10.68 },
    { limit: 500, rate: 10.91 },
    { limit: 500, rate: 11.13 },
    { limit: MAX_KWH, rate: 11.36 },
];

function calculateBill() {
    const input = document.getElementById("consumption");
    const resultEl = document.getElementById("result");
    const tableBody = document.querySelector("#breakdownTable tbody");
    const table = document.getElementById("breakdownTable");
    const mobileBreakdown = document.getElementById("mobileBreakdown");

    let consumption = parseFloat(input.value);
    tableBody.innerHTML = "";
    mobileBreakdown.innerHTML = "";
    table.classList.add("hidden");
    resultEl.innerHTML = "";

    if (isNaN(consumption) || consumption <= 0) {
        resultEl.textContent = "Please enter a valid consumption value.";
        return;
    }

    if (consumption > MAX_KWH) {
        resultEl.textContent = `Please enter a value below ${MAX_KWH} kWh.`;
        return;
    }

    const isMobile = window.innerWidth < 576;
    let energyTotal = 0;
    let remaining = consumption;
    let start = 0;

    for (let i = 0; i < tariffBrackets.length; i++) {
        const { limit, rate } = tariffBrackets[i];
        if (remaining <= 0) break;

        const units = Math.min(remaining, limit);
        const range = `${start + 1}-${start + units} kWh`;
        const subtotal = units * rate;
        energyTotal += subtotal;

        if (isMobile) {
            // Mobile breakdown block
            const mobileEntry = document.createElement("div");
            mobileEntry.className = "mobile-entry";
            mobileEntry.innerHTML = `
                <div><strong>Range:</strong> ${range}</div>
                <div><strong>Units Charged:</strong> ${units}</div>
                <div><strong>Rate (Rs./kWh):</strong> ${rate.toFixed(2)}</div>
                <div><strong>Subtotal (Rs.):</strong> ${subtotal.toFixed(2)}</div>
            `;
            mobileBreakdown.appendChild(mobileEntry);
        } else {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${start + 1}-${start + units} kWh</td>
                <td>${units}</td>
                <td>Rs. ${rate.toFixed(2)}</td>
                <td>Rs. ${subtotal.toFixed(2)}</td>
            `;
            tableBody.appendChild(row);
        }

        start += units;
        remaining -= units;
    }

    const totalBill = energyTotal + METER_RENTAL + TV_LICENSE;

    resultEl.innerHTML = `
    <p><strong>Your monthly bill is Rs. ${Math.round(totalBill).toFixed(2)}</strong></p>
    <p>Your monthly consumption is Rs. ${Math.round(energyTotal).toFixed(2)}</p>
    <p>Monthly meter rental is Rs. ${METER_RENTAL.toFixed(2)}.</p>
    <p>TV License fee is Rs. ${TV_LICENSE.toFixed(2)}.</p>
  `;

    if (isMobile) {
        mobileBreakdown.classList.remove("hidden");
        table.classList.add("hidden");
    } else {
        table.classList.remove("hidden");
        mobileBreakdown.classList.add("hidden");
    }
    document.querySelector(".disclaimer").classList.remove("hidden");
}
