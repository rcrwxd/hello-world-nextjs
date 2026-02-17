export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif', backgroundColor: '#fafafa' }}>
      <div style={{ padding: '40px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <h1 style={{ color: '#0070f3', fontSize: '2.5rem', marginBottom: '1rem' }}>🚀 RuhrCloud is Live!</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>This Next.js app was deployed automatically via Railpack & Nomad.</p>
        <hr style={{ margin: '2rem 0', border: '0', borderTop: '1px solid #eee' }} />
        <div style={{ fontSize: '0.9rem', color: '#888' }}>
          Infrastructure: <strong>Hetzner Cloud</strong><br/>
          Orchestrator: <strong>HashiCorp Nomad</strong><br/>
          Builder: <strong>Railpack (Go SDK)</strong>
        </div>
      </div>
    </main>
  );
}
