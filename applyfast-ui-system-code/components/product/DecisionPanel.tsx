export function DecisionPanel() {
  return <div className="card"><h3 style={{marginTop:0}}>Recommendation</h3><p className="caption">Based on sponsor signals, visa fit, and your profile.</p><div className="decision-grid">
    <div className="decision active"><b>✓ Apply Now</b><div className="caption" style={{color:'#335000'}}>Strong match. Apply with confidence.</div></div>
    <div className="decision"><b>✎ Tailor First</b><div className="caption">Improve your resume for better odds.</div></div>
    <div className="decision"><b>⚠ Risky</b><div className="caption">Weak signals or high competition.</div></div>
    <div className="decision"><b>× Skip</b><div className="caption">Low fit or sponsorship uncertainty.</div></div>
  </div><div className="divider"/><div className="badge green">Why Apply Now? Strong sponsor signals + high visa compatibility + excellent profile fit.</div></div>
}
