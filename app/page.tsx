'use client'
import { useState } from 'react'

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false) // MODO OSCURO

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
   <div className={`dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <button className="menu-toggle" onClick={toggleMenu}>☰</button>
            <h1>Sistema de Solicitud de Requerimientos de Trabajo</h1>
            <button 
              className="dark-mode-toggle" 
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* MENÚ LATERAL */}
      <nav className={`sidebar-menu ${menuOpen ? 'active' : ''}`}>
        <div className="menu-items">
          <a href="/" className="menu-item active" onClick={() => setMenuOpen(false)}>
            <span className="menu-icon">📊</span>
            Dashboard
          </a>
          <a href="/solicitar" className="menu-item" onClick={() => setMenuOpen(false)}>
            <span className="menu-icon">➕</span>
            Solicitar
          </a>
          <a href="/actualizar" className="menu-item" onClick={() => setMenuOpen(false)}>
            <span className="menu-icon">✏️</span>
            Actualizar
          </a>
          <a href="/historial" className="menu-item" onClick={() => setMenuOpen(false)}>
            <span className="menu-icon">📋</span>
            Historial
          </a>
          <a href="/reportes" className="menu-item" onClick={() => setMenuOpen(false)}>
            <span className="menu-icon">📈</span>
            Reportes
          </a>
        </div>
      </nav>

      {/* OVERLAY PARA CERRAR MENÚ */}
      {menuOpen && (
        <div 
          className="menu-overlay" 
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <main className="main-layout">
        {/* SIDEBAR IZQUIERDO - MÉTRICAS VERTICALES (15%) */}
        <aside className="metrics-sidebar">
          <div className="metric-card-vertical pending">
            <div className="metric-icon">⏳</div>
            <div className="metric-info">
              <h3>Pendientes</h3>
              <span className="metric-number">8</span>
            </div>
          </div>

          <div className="metric-card-vertical in-progress">
            <div className="metric-icon">🔧</div>
            <div className="metric-info">
              <h3>En Proceso</h3>
              <span className="metric-number">5</span>
            </div>
          </div>

          <div className="metric-card-vertical completed">
            <div className="metric-icon">✅</div>
            <div className="metric-info">
              <h3>Completados Hoy</h3>
              <span className="metric-number">12</span>
            </div>
          </div>

          <div className="metric-card-vertical average">
            <div className="metric-icon">⏱️</div>
            <div className="metric-info">
              <h3>Tiempo Promedio</h3>
              <span className="metric-number">2.5h</span>
            </div>
          </div>
        </aside>

        {/* ÁREA PRINCIPAL - 4 COLUMNAS DE ÓRDENES (80%) */}
        <section className="orders-main-area">
          <h2>Requerimientos Abiertos</h2>
          
          <div className="orders-grid-wide">
            
            {/* COLUMNA 1: CORRECTIVOS 80 Y 210 TON */}
            <div className="category-column">
              <div className="category-header">
                <h3>Correctivos 80 y 210 TON</h3>
              </div>
              <div className="orders-scroll-container">
                <div className="orders-vertical-list">
                  <div className="order-card priority-high">
                    <div className="order-header">
                      <span className="order-number">2024-001</span>
                      <span className="priority-badge high">Alta</span>
                    </div>
                    <div className="order-details">
                      <p><strong>Molde:</strong> RW1013</p>
                      <p><strong>Problema:</strong> Flash cavidad #3</p>
                      <p><strong>Técnico:</strong> Juan Pérez</p>
                      <p><strong>Tiempo:</strong> 95h</p>
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
                      <p><strong>Tiempo:</strong> 4h</p>
                    </div>
                  </div>

                  <div className="order-card priority-low">
                    <div className="order-header">
                      <span className="order-number">2024-003</span>
                      <span className="priority-badge low">Baja</span>
                    </div>
                    <div className="order-details">
                      <p><strong>Molde:</strong> RW0879</p>
                      <p><strong>Problema:</strong> Runner</p>
                      <p><strong>Técnico:</strong> Sin asignar</p>
                      <p><strong>Tiempo:</strong> 16h</p>
                    </div>
                  </div>

                  <div className="order-card priority-high">
                    <div className="order-header">
                      <span className="order-number">2024-004</span>
                      <span className="priority-badge high">Alta</span>
                    </div>
                    <div className="order-details">
                      <p><strong>Molde:</strong> RW1017</p>
                      <p><strong>Problema:</strong> Cavidad dañada</p>
                      <p><strong>Técnico:</strong> Luis Escobar</p>
                      <p><strong>Tiempo:</strong> 8h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNA 2: CORRECTIVOS FM */}
            <div className="category-column">
              <div className="category-header">
                <h3>Correctivos FM</h3>
              </div>
              <div className="orders-scroll-container">
                <div className="orders-vertical-list">
                  <div className="order-card priority-medium">
                    <div className="order-header">
                      <span className="order-number">2024-005</span>
                      <span className="priority-badge medium">Media</span>
                    </div>
                    <div className="order-details">
                      <p><strong>Molde:</strong> FM2581</p>
                      <p><strong>Problema:</strong> Temperatura</p>
                      <p><strong>Técnico:</strong> Misael García</p>
                      <p><strong>Tiempo:</strong> 12h</p>
                    </div>
                  </div>

                  <div className="order-card priority-low">
                    <div className="order-header">
                      <span className="order-number">2024-006</span>
                      <span className="priority-badge low">Baja</span>
                    </div>
                    <div className="order-details">
                      <p><strong>Molde:</strong> FM1847</p>
                      <p><strong>Problema:</strong> Calibración</p>
                      <p><strong>Técnico:</strong> Pedro Jiménez</p>
                      <p><strong>Tiempo:</strong> 6h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNA 3: PREVENTIVOS */}
            <div className="category-column">
              <div className="category-header">
                <h3>Preventivos</h3>
              </div>
              <div className="orders-scroll-container">
                <div className="orders-vertical-list">
                  <div className="order-card priority-low">
                    <div className="order-header">
                      <span className="order-number">2024-007</span>
                      <span className="priority-badge low">Programado</span>
                    </div>
                    <div className="order-details">
                      <p><strong>Molde:</strong> RI0571</p>
                      <p><strong>Trabajo:</strong> Full Cleaning</p>
                      <p><strong>Técnico:</strong> Napoleón</p>
                      <p><strong>Tiempo:</strong> 9h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNA 4: OTROS */}
            <div className="category-column">
              <div className="category-header">
                <h3>Otros</h3>
              </div>
              <div className="orders-scroll-container">
                <div className="orders-vertical-list">
                  <div className="order-card priority-high">
                    <div className="order-header">
                      <span className="order-number">2024-008</span>
                      <span className="priority-badge high">Urgente</span>
                    </div>
                    <div className="order-details">
                      <p><strong>Molde:</strong> RI0561</p>
                      <p><strong>Trabajo:</strong> Ingeniería</p>
                      <p><strong>Técnico:</strong> Sin asignar</p>
                      <p><strong>Tiempo:</strong> 1313h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  )
}
/* ===== MODO OSCURO ===== */

/* Botón de modo oscuro */
.dark-mode-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;
  position: absolute;
  right: 0;
}

.dark-mode-toggle:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Variables del modo oscuro */
.dark-mode {
  --gray-50: #0f0f0f;
  --gray-100: #1a1a1a;
  --gray-200: #2a2a2a;
  --gray-300: #3a3a3a;
  --gray-800: #e5e5e5;
  --gray-900: #f5f5f5;
}

/* Aplicar modo oscuro */
.dark-mode {
  background-color: var(--gray-50);
  color: var(--gray-800);
}

.dark-mode .metric-card-vertical,
.dark-mode .category-column,
.dark-mode .order-card,
.dark-mode .sidebar-menu {
  background-color: var(--gray-200);
  border-color: var(--gray-300);
  color: var(--gray-800);
}

.dark-mode .metric-card-vertical .metric-icon {
  background-color: var(--gray-300);
}

.dark-mode .order-details p {
  color: var(--gray-800);
}

.dark-mode .order-details strong {
  color: var(--gray-900);
}

.dark-mode .menu-item {
  color: var(--gray-800);
}

.dark-mode .menu-item:hover {
  background-color: var(--gray-300);
}

.dark-mode .menu-item.active {
  background-color: rgba(220, 38, 38, 0.2);
  color: var(--primary-color);
}

/* Scrollbar en modo oscuro */
.dark-mode .orders-vertical-list::-webkit-scrollbar-track {
  background: var(--gray-300);
}

.dark-mode .orders-vertical-list::-webkit-scrollbar-thumb {
  background: var(--primary-color);
}
