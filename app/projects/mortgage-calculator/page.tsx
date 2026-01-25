"use client";
import { useState, ChangeEvent, FormEvent } from "react"; // Added types
import { AnimatedGradient } from "@/components/backgrounds/animatedGradient";
import Link from "next/link";

export default function MortgageCalculator() {
  const [price, setPrice] = useState<number>(2500000);
  const [dpPercent, setDpPercent] = useState<number>(20);
  const [rate, setRate] = useState<number>(7.5);
  const [years, setYears] = useState<number>(15);
  
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  // Properly typed Submit Event
  const handleCalculateClientSide = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const principal = price - (price * (dpPercent / 100));
    const monthlyRate = (rate / 100) / 12;
    const totalMonths = years * 12;

    let amortization = 0;
    if (monthlyRate === 0) {
      amortization = principal / totalMonths;
    } else {
      const factor = Math.pow(1 + monthlyRate, totalMonths);
      amortization = principal * ((monthlyRate * factor) / (factor - 1));
    }

    setMonthlyPayment(amortization);
    setIsCalculated(true);
  };

  const handleCalculate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCalculated(false); // Reset while loading

    const payload = {
      totalPrice: price,
      downPaymentPercentage: dpPercent,
      interestRate: rate,
      years: years,
    };

    try {
      const response = await fetch("https://ghost16-001-site1.site4future.com/api/MortgageRequests/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("API Error");

      const data = await response.json();
      
      // Update state with the result from the C# Backend
      setMonthlyPayment(data.monthlyAmortization);
      setIsCalculated(true);
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Backend is currently unreachable. Check CORS or SSL status.");
    }
  };

  return (
    <main className="relative font-sans min-h-screen">
      <AnimatedGradient />

      <section className="relative z-10 flex justify-center px-6 py-12 md:px-12">
        <div className="w-full max-w-4xl">
          <Link
            href="/projects"
            className="text-[var(--color-primary)] mb-6 inline-block hover:underline font-medium"
          >
            ← Back to Projects
          </Link>

          <h1 className="text-4xl font-bold mb-4 text-[var(--color-highlight)]">
            Mortgage Calculator
          </h1>

          <p className="text-[var(--color-highlight2)] mb-8 text-lg">
            Estimating monthly amortization for Ovialand properties.
          </p>

          <div className="bg-white/80 backdrop-blur-sm border border-[var(--color-secondary)] rounded-2xl p-6 md:p-8 shadow-lg">
            <form onSubmit={handleCalculate} className="space-y-6">
              <div>
                <label className="block text-[var(--color-highlight2)] font-semibold mb-2">
                  Total Contract Price (PHP)
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
                  className="w-full bg-[var(--color-neutral)] border border-[var(--color-primary)]/30 rounded-lg px-4 py-3 text-[var(--color-highlight2)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[var(--color-highlight2)] font-semibold mb-2">
                    Down Payment (%)
                  </label>
                  <input
                    type="number"
                    value={dpPercent}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDpPercent(Number(e.target.value))}
                    className="w-full bg-[var(--color-neutral)] border border-[var(--color-primary)]/30 rounded-lg px-4 py-3"
                  />
                </div>
                <div>
                  <label className="block text-[var(--color-highlight2)] font-semibold mb-2">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={rate}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setRate(Number(e.target.value))}
                    className="w-full bg-[var(--color-neutral)] border border-[var(--color-primary)]/30 rounded-lg px-4 py-3"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-[var(--color-highlight2)] font-semibold">Loan Term</label>
                  <span className="text-[var(--color-primary)] font-bold">{years} Years</span>
                </div>
                <input
                  type="range" min="1" max="30" value={years}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--color-secondary)] rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-highlight)] text-white font-bold py-4 rounded-lg shadow-md hover:opacity-90 transition active:scale-[0.98]"
              >
                Calculate Amortization
              </button>
            </form>

            {isCalculated && (
              <div className="mt-8 pt-6 border-t border-[var(--color-secondary)] text-center animate-in fade-in slide-in-from-bottom-4">
                <p className="text-[var(--color-highlight2)]/70 text-sm mb-2">Estimated Monthly Payment</p>
                <div className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)]">
                  ₱{monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            )}
          </div>

          {/* THE SSL-VERIFIED BACKEND LINK */}
          <section className="mt-12 p-6 bg-[var(--color-neutral)] border-l-4 border-[var(--color-highlight)] rounded-r-lg">
            <h2 className="text-xl font-semibold mb-2 text-[var(--color-highlight2)]">Backend Architecture</h2>
            <p className="text-[var(--color-highlight2)] mb-4">
              Data integrity is handled via a secure <strong>ASP.NET Core</strong> backend. 
              The API is fully documented and accessible for cross-platform integration.
            </p>
            <a 
                href="https://ghost16-001-site1.site4future.com/swagger/index.html" 
                target="_blank"
                className="inline-flex items-center text-[var(--color-primary)] font-bold hover:underline"
            >
                🔒 View Secure API Documentation (Swagger) →
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}