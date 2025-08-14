import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export class AnimationManager {
  private tl: gsap.core.Timeline;

  constructor() {
    this.tl = gsap.timeline();
    this.initializeAnimations();
  }

  private initializeAnimations(): void {
    this.setupScrollAnimations();
    this.setupHeroAnimations();
    this.setupCardAnimations();
    this.setupParticleAnimations();
  }

  private setupScrollAnimations(): void {
    // Hero title animations
    gsap.utils.toArray('.hero-title').forEach((title: Element) => {
      gsap.fromTo(title, 
        { 
          y: 100, 
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
      });
    });

    // Hero subtitle animations
    gsap.utils.toArray('.hero-subtitle').forEach((subtitle: Element) => {
      gsap.fromTo(subtitle,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitle,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
      });
    });

    // Card animations
    gsap.utils.toArray('.card-3d').forEach((card: Element, index: number) => {
      gsap.fromTo(card,
        {
          y: 100,
          opacity: 0,
          rotationX: 15,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
      });
    });

    // Link card animations
    gsap.utils.toArray('.link-card').forEach((linkCard: Element) => {
      gsap.fromTo(linkCard,
        {
          x: -50,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: linkCard,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
      });
    });
  }

  private setupHeroAnimations(): void {
    // Initial page load animations
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle');
    
    gsap.set(heroElements, { opacity: 0, y: 50 });
    
    gsap.to('.hero-title', {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2
    });

    gsap.to('.hero-subtitle', {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.4,
      ease: "power2.out"
    });
  }

  private setupCardAnimations(): void {
    // Hover animations for cards
    gsap.utils.toArray('.card-3d').forEach((card: Element) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Navigation button hover animations
    gsap.utils.toArray('.nav-btn-3d').forEach((btn: Element) => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
          y: -5,
          scale: 1.05,
          duration: 0.2,
          ease: "power2.out"
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          y: 0,
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        });
      });
    });
  }

  private setupParticleAnimations(): void {
    // Floating particles animation
    const particles = document.querySelectorAll('#particles-container > *');
    
    gsap.to(particles, {
      y: -20,
      duration: 3,
      ease: "none",
      repeat: -1,
      yoyo: true,
      stagger: 0.1
    });
  }

  public animateTabSwitch(tabId: string): void {
    const currentTab = document.querySelector('.tab-content.active');
    const newTab = document.getElementById(tabId);
    
    if (!currentTab || !newTab) return;

    // Fade out current tab
    gsap.to(currentTab, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        currentTab.classList.remove('active');
        currentTab.classList.add('hidden');
        
        // Show new tab
        newTab.classList.remove('hidden');
        newTab.classList.add('active');
        
        // Animate new tab in
        gsap.fromTo(newTab,
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out"
          }
        );
      }
    });
  }

  public animateScrollToTop(): void {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: "power2.inOut"
    });
  }

  public setupScrollToTopButton(): void {
    const scrollBtn = document.getElementById('scroll-top-btn');
    if (!scrollBtn) return;

    // Show/hide button based on scroll position
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (self.progress > 0.1) {
          gsap.to(scrollBtn, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
          scrollBtn.classList.remove('hidden');
        } else {
          gsap.to(scrollBtn, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => scrollBtn.classList.add('hidden')
          });
        }
      }
    });

    // Click animation
    scrollBtn.addEventListener('click', () => {
      gsap.to(scrollBtn, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => this.animateScrollToTop()
      });
    });
  }

  public animateProgramCards(): void {
    const programCards = document.querySelectorAll('#programs-container > *');
    
    gsap.fromTo(programCards,
      {
        opacity: 0,
        y: 50,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#programs-container",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
    });
  }

  public animateCompanyTags(): void {
    const companyTags = document.querySelectorAll('#companies-container > *');
    
    gsap.fromTo(companyTags,
      {
        opacity: 0,
        scale: 0,
        rotation: 180
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#companies-container",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
    });
  }

  public destroy(): void {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    this.tl.kill();
  }
}
