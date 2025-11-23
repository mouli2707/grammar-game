export default function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ height: '15%' }}>
        <path fill="rgba(255,255,255,0.3)" d="M0,64 C150,96 350,32 600,64 C850,96 1050,32 1200,64 L1200,120 L0,120 Z">
          <animate attributeName="d" dur="4s" repeatCount="indefinite"
            values="M0,64 C150,96 350,32 600,64 C850,96 1050,32 1200,64 L1200,120 L0,120 Z;
                    M0,64 C150,32 350,96 600,64 C850,32 1050,96 1200,64 L1200,120 L0,120 Z;
                    M0,64 C150,96 350,32 600,64 C850,96 1050,32 1200,64 L1200,120 L0,120 Z" />
        </path>
      </svg>
      <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ height: '12%' }}>
        <path fill="rgba(255,255,255,0.2)" d="M0,32 C200,64 400,0 600,32 C800,64 1000,0 1200,32 L1200,120 L0,120 Z">
          <animate attributeName="d" dur="3s" repeatCount="indefinite"
            values="M0,32 C200,64 400,0 600,32 C800,64 1000,0 1200,32 L1200,120 L0,120 Z;
                    M0,32 C200,0 400,64 600,32 C800,0 1000,64 1200,32 L1200,120 L0,120 Z;
                    M0,32 C200,64 400,0 600,32 C800,64 1000,0 1200,32 L1200,120 L0,120 Z" />
        </path>
      </svg>
    </div>
  );
}
