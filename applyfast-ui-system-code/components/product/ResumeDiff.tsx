export function ResumeDiff() {
  const rows = [
    ['Full-stack engineer with 5+ years building scalable web applications using React and Node.js.', 'Product engineer with 5+ years building high-performance payment and financial infrastructure using React, TypeScript, and Node.js.'],
    ['Built responsive UIs and improved performance.', 'Shipped React/TypeScript features used by millions of developers, improving page load performance by 32%.'],
    ['Deployed applications on AWS.', 'Deployed and scaled services on AWS using Docker, ECS, and Terraform with observability via Datadog.']
  ];
  return <div className="stack">{rows.map(([oldv,newv],i)=><div key={i} style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}><div className="card" style={{background:'#fff6f6',color:'#8a1f1f',textDecoration:'line-through'}}>{oldv}</div><div className="card" style={{background:'#f5fde9'}}>{newv}</div></div>)}</div>
}
