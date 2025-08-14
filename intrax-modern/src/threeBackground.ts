export class ThreeBackground {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private particles: THREE.Points;
  private animationId: number;

  constructor() {
    this.init();
    this.animate();
  }

  private init(): void {
    const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x87ceeb, 1, 100);

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
    this.createParticles();

    // Handle window resize
    window.addEventListener('resize', () => this.onWindowResize());
  }

  private createParticles(): void {
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Random positions in a sphere
      const radius = Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);

      // Random colors (blue to purple gradient)
      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.1, 0.8, 0.6 + Math.random() * 0.4);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  private animate(): void {
    this.animationId = requestAnimationFrame(() => this.animate());

    // Rotate particles
    if (this.particles) {
      this.particles.rotation.x += 0.001;
      this.particles.rotation.y += 0.002;
    }

    // Move camera slightly based on mouse position
    const mouseX = (window.mouseX || 0) * 0.0001;
    const mouseY = (window.mouseY || 0) * 0.0001;
    
    if (this.camera) {
      this.camera.position.x += (mouseX - this.camera.position.x) * 0.05;
      this.camera.position.y += (-mouseY - this.camera.position.y) * 0.05;
      this.camera.lookAt(this.scene.position);
    }

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize(): void {
    if (this.camera && this.renderer) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }

  public destroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}

// Add mouse tracking to window
declare global {
  interface Window {
    mouseX: number;
    mouseY: number;
  }
}

// Track mouse movement
document.addEventListener('mousemove', (event) => {
  window.mouseX = event.clientX - window.innerWidth / 2;
  window.mouseY = event.clientY - window.innerHeight / 2;
});
