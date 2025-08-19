export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="header">
        <div className="header-content">
          <h1>Sistema de Solicitud de Requerimientos de Trabajo</h1>
          <p>Taller de Mantenimiento y Reparación de Moldes</p>
        </div>
      </header>

      <nav className="navigation">
        <a href="/" className="nav-link active">Dashboard</a>
        <a href="/solicitar" className="nav-link">Solicitar</a>
        <a href="/actualizar" className="nav-link">Actualizar</a>
        <a href="/historial" className="nav-link">Historial</a>
      </nav>

      <main className="main-content">
       <div className="metrics-grid">
          <div className="metric-card pending">
            <div className="metric-icon">⏳</div>
            <div className="metric-info">
              <h3>Pendientes</h3>
              <span className="metric-number">8</span>
            </div>
          </div>

          <div className="metric-card in-progress">
            <div className="metric-icon">🔧</div>
            <div className="metric-info">
              <h3>En Proceso</h3>
              <span className="metric-number">5</span>
            </div>
          </div>

          <div className="metric-card completed">
            <div className="metric-icon">✅</div>
            <div className="metric-info">
              <h3>Completados Hoy</h3>
              <span className="metric-number">12</span>
            </div>
          </div>

          <div className="metric-card average">
            <div className="metric-icon">⏱️</div>
            <div className="metric-info">
              <h3>Tiempo Promedio</h3>
              <span className="metric-number">2.5h</span>
            </div>
          </div>
        </div>

        
        <div className="orders-section">
          <h2>Requerimientos abiertos</h2>
          <div className="order-card priority-high">
            <div className="order-header">
              <span className="order-number">2024-001</span>
              <span className="priority-badge high">Alta</span>
            </div>
            <div className="order-details">
              <p><strong>Molde:</strong> RW1013</p>
              <p><strong>Problema:</strong> Flash en cavidad</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
