import "../../styles/summary/investment.css";

export default function InvestmentCard() {
  return (
    <div className="investment-card">
      <span className="label">
        ESTIMATED INVESTMENT
      </span>

      <h2>$12,500 - $18,000</h2>

      <p>
        Full delivery including QA, deployment,
        <br />
        and 1 month of support.
      </p>

      <div className="time">⏱ 6 - 8 Weeks</div>
    </div>
  );
}