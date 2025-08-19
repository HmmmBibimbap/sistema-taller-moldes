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
          <h2>Órdenes Activas</h2>
          
          {/* CORRECTIVOS 80 Y 210 TON */}
          <div className="category-section">
            <div className="category-header">
              <h3>Correctivos 80 y 210 TON</h3>
              <div className="carousel-controls">
                <button className="carousel-btn prev">‹</button>
                <button className="carousel-btn next">›</button>
              </div>
            </div>
            <div className="carousel-container">
              <div className="orders-carousel">
                <div className="order-card priority-high">
                  <div className="order-header">
                    <span className="order-number">2024-001</span>
                    <span className="priority-badge high">Alta</span>
                  </div>
                  <div className="order-details">
                    <p><strong>Molde:</strong> RW1013</p>
                    <p><strong>Problema:</strong> Flash en cavidad #3</p>
                    <p><strong>Técnico:</strong> Juan Pérez</p>
                    <p><strong>Tiempo:</strong> 95 horas</p>
                  </div>
                </div>

                <div className="order-card priority-medium">
                  <div className="order-header">
                    <span className="order-number">2024-002</span>
                    <span className="priority-badge medium">Media</span>
                  </div>
                  <div className="order-details">
                    <p><strong>Molde:</strong> CI0515</p>
                    <p><strong>Problema:</strong> Inserto movido</p>
                    <p><strong>Técnico:</strong> Ana García</p>
                    <p><strong>Tiempo:</strong> 4 horas</p>
                  </div>
                </div>

                <div className="order-card priority-low">
                  <div className="order-header">
                    <span className="order-number">2024-003</span>
                    <span className="priority-badge low">Baja</span>
                  </div>
                  <div className="order-details">
                    <p><strong>Molde:</strong> RW0879</p>
                    <p><strong>Problema:</strong> Problema con runner</p>
                    <p><strong>Técnico:</strong> Sin asignar</p>
                    <p><strong>Tiempo:</strong> 16 horas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CORRECTIVOS FM */}
          <div className="category-section">
            <div className="category-header">
              <h3>Correctivos FM</h3>
              <div className="carousel-controls">
                <button className="carousel-btn prev">‹</button>
                <button className="carousel-btn next">›</button>
              </div>
            </div>
            <div className="carousel-container">
              <div className="orders-carousel">
                <div className="order-card priority-medium">
                  <div className="order-header">
                    <span className="order-number">2024-005</span>
                    <span className="priority-badge medium">Media</span>
                  </div>
                  <div className="order-details">
                    <p><strong>Molde:</strong> FM2581</p>
                    <p><strong>Problema:</strong> Ajuste temperatura</p>
                    <p><strong>Técnico:</strong> Misael García</p>
                    <p><strong>Tiempo:</strong> 12 horas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </div>
  )
}
