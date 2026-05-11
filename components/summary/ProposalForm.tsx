import "../../styles/summary/form.css";

export default function ProposalForm() {
  return (
    <div className="form-box">
      <h3>Get Detailed Proposal</h3>

      <p>
        Receive a PDF breakdown of your estimate and
        technical specs via email.
      </p>

      <input placeholder="John Architect" />

      <input placeholder="John@company.com" />

      <button>Get Proposal →</button>
    </div>
  );
}