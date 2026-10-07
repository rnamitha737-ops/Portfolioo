/* ==========================================================================
   GRAPHICS & SVG MOCKUP RENDERING ENGINE
   ========================================================================== */

/**
 * Returns SVG markup for Nova Studio (Brand Identity)
 */
export function renderNovaMockup(): string {
  return `
    <svg width="100%" height="100%" viewBox="0 0 540 360" fill="none" xmlns="http://www.w3.org/2000/svg" style="border-radius: 12px; filter: drop-shadow(0 16px 24px rgba(0,0,0,0.06));">
      <rect width="540" height="360" rx="12" fill="#F4F3EE"/>
      
      <!-- Grid Paper Background Pattern -->
      <g opacity="0.12">
        <path d="M0 40H540M0 80H540M0 120H540M0 160H540M0 200H540M0 240H540M0 280H540M0 320H540" stroke="#121212" stroke-width="1" stroke-dasharray="2 4"/>
        <path d="M40 0V360M80 0V360M120 0V360M160 0V360M200 0V360M240 0V360M280 0V360M320 0V360M360 0V360M400 0V360M440 0V360M480 0V360" stroke="#121212" stroke-width="1" stroke-dasharray="2 4"/>
      </g>
      
      <!-- Back Card Shadow -->
      <rect x="70" y="50" width="340" height="220" rx="8" fill="#18181B" transform="rotate(-4 240 160)"/>
      
      <!-- Main Stationery Card -->
      <rect x="90" y="60" width="360" height="230" rx="8" fill="#FFFFFF" stroke="rgba(18,18,18,0.08)" transform="rotate(2 270 175)"/>
      
      <!-- Card Content -->
      <g transform="rotate(2 270 175)">
        <!-- Brand Mark -->
        <circle cx="140" cy="115" r="16" fill="#121212"/>
        <path d="M140 105L145 125H135L140 105Z" fill="#FFFFFF"/>
        
        <text x="170" y="118" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="20" fill="#121212" letter-spacing="2">NOVA STUDIO</text>
        <text x="170" y="132" font-family="Space Grotesk, monospace" font-size="9" fill="#8C8B88" letter-spacing="1.5">BRAND IDENTITY & ARCHITECTURE</text>
        
        <line x1="120" y1="155" x2="410" y2="155" stroke="#E2E8F0" stroke-width="1"/>
        
        <!-- Typography Scale Sample -->
        <text x="120" y="185" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="14" fill="#121212">Aa Bb Cc 0123</text>
        <text x="120" y="205" font-family="Space Grotesk, monospace" font-size="10" fill="#575757">Syne / Plus Jakarta Sans — Brand Specimen v2.4</text>
        
        <!-- Palette Swatches -->
        <g transform="translate(120, 225)">
          <rect x="0" y="0" width="28" height="28" rx="6" fill="#121212"/>
          <rect x="36" y="0" width="28" height="28" rx="6" fill="#2563EB"/>
          <rect x="72" y="0" width="28" height="28" rx="6" fill="#E2E8F0"/>
          <rect x="108" y="0" width="28" height="28" rx="6" fill="#FAF9F6" stroke="#E2E8F0"/>
        </g>

        <!-- Badge -->
        <rect x="330" y="225" width="80" height="26" rx="13" fill="#2563EB" opacity="0.1"/>
        <text x="370" y="242" font-family="Space Grotesk, monospace" font-weight="600" font-size="10" fill="#2563EB" text-anchor="middle">VERIFIED</text>
      </g>
    </svg>
  `;
}

/**
 * Returns SVG markup for Greenhouse (Website Design)
 */
export function renderGreenhouseMockup(): string {
  return `
    <svg width="100%" height="100%" viewBox="0 0 540 360" fill="none" xmlns="http://www.w3.org/2000/svg" style="border-radius: 12px; filter: drop-shadow(0 16px 24px rgba(0,0,0,0.06));">
      <!-- Browser Window Frame -->
      <rect width="540" height="360" rx="12" fill="#FFFFFF" stroke="rgba(18,18,18,0.1)"/>
      
      <!-- Browser Top Bar -->
      <path d="M0 12C0 5.37258 5.37258 0 12 0H528C534.627 0 540 5.37258 540 12V42H0V12Z" fill="#F4F4F0" stroke="rgba(18,18,18,0.06)"/>
      
      <!-- Window Dots -->
      <circle cx="22" cy="21" r="5" fill="#EF4444"/>
      <circle cx="38" cy="21" r="5" fill="#F59E0B"/>
      <circle cx="54" cy="21" r="5" fill="#10B981"/>
      
      <!-- URL Bar -->
      <rect x="140" y="11" width="260" height="20" rx="10" fill="#FFFFFF" stroke="rgba(18,18,18,0.08)"/>
      <text x="270" y="25" font-family="Space Grotesk, monospace" font-size="10" fill="#575757" text-anchor="middle">greenhouse.studio</text>

      <!-- Web Page Content Mockup -->
      <g transform="translate(0, 42)">
        <!-- Hero Banner Background -->
        <rect width="540" height="318" fill="#FAF9F6"/>
        
        <!-- Navigation bar inside site -->
        <text x="32" y="32" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="14" fill="#064E3B">GREENHOUSE</text>
        <g transform="translate(340, 24)" font-family="Plus Jakarta Sans, sans-serif" font-size="10" fill="#575757">
          <text x="0" y="0">Catalog</text>
          <text x="50" y="0">Philosophy</text>
          <text x="110" y="0">Journal</text>
        </g>
        
        <!-- Hero Copy -->
        <text x="32" y="85" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="22" fill="#121212">Breathe Life Into</text>
        <text x="32" y="112" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="22" fill="#10B981">Living Architecture.</text>
        <text x="32" y="138" font-family="Plus Jakarta Sans, sans-serif" font-size="10" fill="#575757" width="200">Sustainable indoor plants & curated botanical design systems.</text>
        
        <!-- CTA Button -->
        <rect x="32" y="156" width="110" height="30" rx="15" fill="#064E3B"/>
        <text x="87" y="175" font-family="Plus Jakarta Sans, sans-serif" font-weight="600" font-size="10" fill="#FFFFFF" text-anchor="middle">Explore Plants</text>
        
        <!-- Featured Plant Card Visual -->
        <g transform="translate(260, 65)">
          <rect width="248" height="225" rx="12" fill="#FFFFFF" stroke="rgba(18,18,18,0.06)" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.04))"/>
          <!-- Plant Art SVG Graphic -->
          <rect x="16" y="16" width="216" height="135" rx="8" fill="#ECFDF5"/>
          <path d="M124 120C124 120 100 80 124 45C148 80 124 120 124 120Z" fill="#10B981"/>
          <path d="M124 120C124 120 80 100 65 75C100 70 124 120 124 120Z" fill="#059669"/>
          <path d="M124 120C124 120 160 100 175 75C140 70 124 120 124 120Z" fill="#047857"/>
          <rect x="114" y="115" width="20" height="25" rx="4" fill="#92400E"/>

          <text x="24" y="175" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="12" fill="#121212">Monstera Deliciosa</text>
          <text x="24" y="192" font-family="Space Grotesk, monospace" font-size="10" fill="#10B981">$48.00 — In Stock</text>
        </g>
      </g>
    </svg>
  `;
}

/**
 * Returns SVG markup for Flow (Mobile App)
 */
export function renderFlowMockup(): string {
  return `
    <svg width="100%" height="100%" viewBox="0 0 540 360" fill="none" xmlns="http://www.w3.org/2000/svg" style="border-radius: 12px; filter: drop-shadow(0 16px 24px rgba(0,0,0,0.06));">
      <!-- Outer Frame Background -->
      <rect width="540" height="360" rx="12" fill="#09090B"/>
      
      <!-- Subtle Grid Dots -->
      <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#27272A"/>
      </pattern>
      <rect width="540" height="360" fill="url(#dotPattern)" opacity="0.7"/>

      <!-- Mobile Device Screen 1 (Left - Habits) -->
      <g transform="translate(90, 30)">
        <rect width="160" height="310" rx="24" fill="#18181B" stroke="#27272A" stroke-width="3"/>
        <!-- Notch -->
        <rect x="50" y="8" width="60" height="12" rx="6" fill="#000000"/>
        
        <!-- App Content -->
        <text x="20" y="48" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="14" fill="#FFFFFF">Daily Flow</text>
        <text x="20" y="62" font-family="Space Grotesk, monospace" font-size="9" fill="#A1A1AA">OCTOBER 2026</text>
        
        <!-- Progress Ring Card -->
        <rect x="16" y="76" width="128" height="85" rx="12" fill="#27272A" opacity="0.6"/>
        <circle cx="50" cy="118" r="26" stroke="#3B82F6" stroke-width="6" stroke-dasharray="163" stroke-dashoffset="35" fill="none" stroke-linecap="round"/>
        <text x="50" y="122" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="12" fill="#FFFFFF" text-anchor="middle">78%</text>
        <text x="86" y="112" font-family="Plus Jakarta Sans, sans-serif" font-weight="600" font-size="10" fill="#FFFFFF">Goal Met</text>
        <text x="86" y="126" font-family="Space Grotesk, monospace" font-size="8" fill="#3B82F6">🔥 14 Days</text>

        <!-- Habit Checklist Items -->
        <g transform="translate(16, 175)">
          <rect width="128" height="32" rx="8" fill="#27272A"/>
          <circle cx="16" cy="16" r="6" fill="#3B82F6"/>
          <text x="32" y="20" font-family="Plus Jakarta Sans, sans-serif" font-size="9" font-weight="500" fill="#FFFFFF">30m Deep Work</text>

          <rect y="40" width="128" height="32" rx="8" fill="#27272A"/>
          <circle cx="16" cy="56" r="6" fill="#10B981"/>
          <text x="32" y="60" font-family="Plus Jakarta Sans, sans-serif" font-size="9" font-weight="500" fill="#FFFFFF">Morning Meditate</text>
        </g>
      </g>

      <!-- Mobile Device Screen 2 (Right - Timer Focus) -->
      <g transform="translate(290, 45)">
        <rect width="160" height="310" rx="24" fill="#18181B" stroke="#3F3F46" stroke-width="3"/>
        <!-- Dynamic Island -->
        <rect x="55" y="8" width="50" height="10" rx="5" fill="#000000"/>
        
        <!-- Timer UI -->
        <text x="80" y="55" font-family="Space Grotesk, monospace" font-size="9" fill="#3B82F6" text-anchor="middle" letter-spacing="1">DEEP FOCUS</text>
        
        <circle cx="80" cy="130" r="45" stroke="rgba(59, 130, 246, 0.2)" stroke-width="4" fill="none"/>
        <circle cx="80" cy="130" r="45" stroke="#3B82F6" stroke-width="4" stroke-dasharray="283" stroke-dashoffset="80" fill="none" stroke-linecap="round"/>
        <text x="80" y="136" font-family="Space Grotesk, monospace" font-weight="700" font-size="18" fill="#FFFFFF" text-anchor="middle">24:48</text>

        <rect x="40" y="200" width="80" height="28" rx="14" fill="#3B82F6"/>
        <text x="80" y="218" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="10" fill="#FFFFFF" text-anchor="middle">PAUSE</text>
      </g>
    </svg>
  `;
}

/**
 * Initializes interactive particle/wireframe canvas in the Hero section
 */
export function initHeroCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let animationFrameId: number;
  let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
  let height = (canvas.height = canvas.parentElement?.clientHeight || 260);

  const resize = () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.clientWidth;
    height = canvas.height = canvas.parentElement.clientHeight;
  };

  window.addEventListener('resize', resize);

  // Dynamic particle nodes
  const nodeCount = 22;
  const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
  
  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2.5 + 1.5
    });
  }

  // Mouse interaction
  let mouse = { x: width / 2, y: height / 2, active: false };

  const handleMouseMove = (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  };

  const handleMouseLeave = () => {
    mouse.active = false;
  };

  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.parentElement?.addEventListener('mouseleave', handleMouseLeave);

  // Render loop
  const draw = () => {
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const lineColor = isDark ? 'rgba(59, 130, 246, 0.25)' : 'rgba(37, 99, 235, 0.18)';
    const nodeColor = isDark ? '#3B82F6' : '#2563EB';

    // Update and draw nodes
    nodes.forEach((node, i) => {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      // Mouse attraction
      if (mouse.active) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          node.x += (dx / dist) * 0.5;
          node.y += (dy / dist) * 0.5;
        }
      }

      // Draw connections
      for (let j = i + 1; j < nodes.length; j++) {
        const other = nodes[j];
        const dx = other.x - node.x;
        const dy = other.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 90) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1 - dist / 90;
          ctx.stroke();
        }
      }

      // Draw node circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor;
      ctx.fill();
    });

    animationFrameId = requestAnimationFrame(draw);
  };

  draw();

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resize);
  };
}
