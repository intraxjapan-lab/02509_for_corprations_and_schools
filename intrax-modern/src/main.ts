import { TabManager } from './tabManager';
import { AnimationManager } from './animations';
import { ThreeBackground } from './threeBackground';
import { programs, companies, tabData } from './data';
import { gsap } from 'gsap';

class IntraxApp {
  private tabManager!: TabManager;
  private animationManager!: AnimationManager;
  private threeBackground!: ThreeBackground;

  constructor() {
    this.initialize();
  }

  private async initialize(): Promise<void> {
    try {
      // Initialize 3D background
      this.threeBackground = new ThreeBackground();
      
      // Initialize animation manager
      this.animationManager = new AnimationManager();
      
      // Initialize tab manager
      this.tabManager = new TabManager();
      
      // Setup other components
      this.setupProgramCards();
      this.setupCompanyTags();
      this.setupContactForm();
      this.handleURLHash();
      this.setupScrollToTop();
      this.setupParticleSystem();
      
      // Setup enhanced animations
      this.setupEnhancedAnimations();
      
    } catch (error) {
      console.error('Error initializing app:', error);
    }
  }

  private setupProgramCards(): void {
    const programContainer = document.getElementById('programs-container');
    if (programContainer) {
      programs.forEach(program => {
        const card = this.createEnhancedProgramCard(program);
        programContainer.appendChild(card);
      });
    }
  }

  private createEnhancedProgramCard(program: any): HTMLElement {
    const card = document.createElement('div');
    card.className = 'card-3d group cursor-pointer';
    card.innerHTML = `
      <div class="card-content">
        <div class="flex items-start justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">${program.title}</h3>
          <div class="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
        <p class="text-gray-600 mb-3 text-sm">${program.subtitle}</p>
        <p class="text-gray-700 mb-4 text-base">${program.description}</p>
        ${program.link ? `
          <div class="flex items-center justify-between">
            <a href="${program.link}" target="_blank" rel="noopener" class="text-intrax-blue hover:text-blue-700 underline font-medium group-hover:underline-offset-4 transition-all duration-300">
              ${program.linkText}
            </a>
            <div class="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-150"></div>
          </div>
        ` : ''}
      </div>
      <div class="card-glow"></div>
    `;

    // Add click animation
    card.addEventListener('click', () => {
      this.animateCardClick(card);
    });

    return card;
  }

  private setupCompanyTags(): void {
    const companyContainer = document.getElementById('companies-container');
    if (companyContainer) {
      companies.forEach((company, index) => {
        const tag = document.createElement('div');
        tag.className = 'company-tag group cursor-pointer';
        tag.innerHTML = `
          <span class="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mr-3 mb-3 border border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            ${company.name}
            <div class="company-tooltip opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap transition-all duration-300 pointer-events-none">
              ${company.industry || 'その他'}
            </div>
          </span>
        `;
        
        // Add staggered animation delay
        tag.style.animationDelay = `${index * 0.1}s`;
        companyContainer.appendChild(tag);
      });
    }
  }

  private setupContactForm(): void {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmit(form);
      });
    }
  }

  private handleFormSubmit(form: HTMLFormElement): void {
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
      program: formData.get('program') as string
    };

    // Show loading state with animation
    this.showLoadingState(form);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      this.showSuccessMessage();
      form.reset();
      this.hideLoadingState(form);
    }, 2000);
  }

  private showLoadingState(form: HTMLFormElement): void {
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML = `
        <div class="flex items-center justify-center">
          <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          送信中...
        </div>
      `;
    }
  }

  private hideLoadingState(form: HTMLFormElement): void {
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = '送信する';
    }
  }

  private showSuccessMessage(): void {
    const successDiv = document.createElement('div');
    successDiv.className = 'fixed top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-2xl z-50 transform translate-x-full';
    successDiv.innerHTML = `
      <div class="flex items-center">
        <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
        <span class="font-medium">お問い合わせありがとうございます。担当者よりご連絡いたします。</span>
      </div>
    `;

    document.body.appendChild(successDiv);

    // Animate in
    gsap.to(successDiv, {
      x: 0,
      duration: 0.5,
      ease: "power2.out"
    });

    // Remove after 5 seconds with animation
    setTimeout(() => {
      gsap.to(successDiv, {
        x: '100%',
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => successDiv.remove()
      });
    }, 5000);
  }

  private handleURLHash(): void {
    const hash = window.location.hash.substring(1);
    if (hash && ['tab1', 'tab2', 'tab3', 'tab4'].includes(hash)) {
      this.tabManager.showTab(hash as any);
    }
  }

  private setupScrollToTop(): void {
    this.animationManager.setupScrollToTopButton();
  }

  private setupParticleSystem(): void {
    // Create floating particles
    const particlesContainer = document.getElementById('particles-container');
    if (particlesContainer) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-60';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        particle.style.animationDuration = `${3 + Math.random() * 2}s`;
        particlesContainer.appendChild(particle);
      }
    }
  }

  private setupEnhancedAnimations(): void {
    // Animate program cards
    this.animationManager.animateProgramCards();
    
    // Animate company tags
    this.animationManager.animateCompanyTags();
    
    // Setup enhanced tab switching
    this.setupEnhancedTabSwitching();
  }

  private setupEnhancedTabSwitching(): void {
    const tabButtons = document.querySelectorAll('[data-tab]');
    tabButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const tabId = button.getAttribute('data-tab');
        if (tabId) {
          // Animate tab switch
          this.animationManager.animateTabSwitch(tabId);
          
          // Update tab manager
          this.tabManager.showTab(tabId as any);
        }
      });
    });
  }

  private animateCardClick(card: HTMLElement): void {
    gsap.to(card, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });
  }

  public destroy(): void {
    if (this.threeBackground) {
      this.threeBackground.destroy();
    }
    if (this.animationManager) {
      this.animationManager.destroy();
    }
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new IntraxApp();
});

// Handle page unload
window.addEventListener('beforeunload', () => {
  // Cleanup if needed
});
