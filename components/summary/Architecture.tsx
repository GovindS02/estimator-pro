import {
  LayoutPanelTop,
  Database,
  Settings2,
} from "lucide-react";

import "@/styles/summary/architecture.css";

export default function Architecture() {
  return (
    <div className="architecture">
      <span className="title">
        SUGGESTED ARCHITECTURE
      </span>

      <div className="arch-grid">
        {/* ITEM 1 */}

        <div className="arch-item">
          <div className="icon">
            <LayoutPanelTop
              size={26}
              strokeWidth={1.8}
            />
          </div>

          <h4>Web Application</h4>

          <span>React / Next.js</span>
        </div>

        <div className="divider"></div>

        {/* ITEM 2 */}

        <div className="arch-item">
          <div className="icon">
            <Database
              size={26}
              strokeWidth={1.8}
            />
          </div>

          <h4>Scalable API</h4>

          <span>Node.js / PostgreSQL</span>
        </div>

        <div className="divider"></div>

        {/* ITEM 3 */}

        <div className="arch-item">
          <div className="icon">
            <Settings2
              size={26}
              strokeWidth={1.8}
            />
          </div>

          <h4>Admin Panel</h4>

          <span>Internal Tools</span>
        </div>
      </div>
    </div>
  );
}