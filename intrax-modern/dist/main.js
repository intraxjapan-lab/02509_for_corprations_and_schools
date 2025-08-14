// Professional Intrax Modern Site
document.addEventListener('DOMContentLoaded', function() {
    console.log('Intrax Professional Site Loaded');
    
    // Professional tab functionality
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');
    
    function showTab(tabId) {
        // Hide all content with professional animation
        tabContents.forEach(content => {
            content.classList.remove('active');
            content.classList.add('hidden');
        });
        
        // Remove active from all buttons
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Show selected content
        const selectedContent = document.getElementById(tabId);
        const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);
        
        if (selectedContent && selectedButton) {
            selectedContent.classList.remove('hidden');
            selectedContent.classList.add('active');
            selectedButton.classList.add('active');
            
            // Professional entrance animation
            selectedContent.style.opacity = '0';
            selectedContent.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                selectedContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                selectedContent.style.opacity = '1';
                selectedContent.style.transform = 'translateY(0)';
            }, 50);
        }
    }
    
    // Add click listeners with professional feedback
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            
            // Professional button animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            showTab(tabId);
        });
    });
    
    // Show first tab by default
    showTab('tab1');
    
    // Professional scroll to top button
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.remove('hidden');
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    scrollTopBtn.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    scrollTopBtn.style.opacity = '1';
                    scrollTopBtn.style.transform = 'scale(1)';
                }, 50);
            } else {
                scrollTopBtn.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    scrollTopBtn.classList.add('hidden');
                }, 300);
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            // Professional scroll animation
            scrollTopBtn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                scrollTopBtn.style.transform = 'scale(1)';
            }, 150);
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Professional intersection observer for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add professional entrance effect
                entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            }
        });
    }, observerOptions);
    
    // Observe professional cards for animation
    document.querySelectorAll('.card-professional').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        // Staggered animation
        setTimeout(() => {
            observer.observe(card);
        }, index * 100);
    });
    
    // Professional link card animations
    document.querySelectorAll('.link-card-professional').forEach((linkCard, index) => {
        linkCard.style.opacity = '0';
        linkCard.style.transform = 'translateX(-20px)';
        linkCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            observer.observe(linkCard);
        }, index * 150);
    });
    
    // Professional company tag animations
    document.querySelectorAll('.company-tag').forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.8)';
        tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            observer.observe(tag);
        }, index * 50);
    });
    
    // Professional hover effects
    document.querySelectorAll('.card-professional').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Professional navigation button effects
    document.querySelectorAll('.nav-btn-professional').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Professional mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Add mobile menu functionality here
            console.log('Mobile menu clicked');
        });
    }
    
    // Professional form interactions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
                this.parentElement.style.transition = 'transform 0.2s ease';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });
    });
    
    // Professional loading states
    function showLoadingState(element) {
        element.classList.add('loading');
        element.style.opacity = '0.7';
        element.style.pointerEvents = 'none';
    }
    
    function hideLoadingState(element) {
        element.classList.remove('loading');
        element.style.opacity = '1';
        element.style.pointerEvents = 'auto';
    }
    
    // Professional success messages
    function showSuccessMessage(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'fixed top-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 transform translate-x-full';
        successDiv.innerHTML = `
            <div class="flex items-center">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="font-medium">${message}</span>
            </div>
        `;

        document.body.appendChild(successDiv);

        // Professional entrance animation
        setTimeout(() => {
            successDiv.style.transition = 'transform 0.5s ease';
            successDiv.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 5 seconds with animation
        setTimeout(() => {
            successDiv.style.transform = 'translateX(100%)';
            setTimeout(() => successDiv.remove(), 500);
        }, 5000);
    }
    
    // Professional error handling
    function showErrorMessage(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'fixed top-6 right-6 bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 transform translate-x-full';
        errorDiv.innerHTML = `
            <div class="flex items-center">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                <span class="font-medium">${message}</span>
            </div>
        `;

        document.body.appendChild(errorDiv);

        setTimeout(() => {
            errorDiv.style.transition = 'transform 0.5s ease';
            errorDiv.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            errorDiv.style.transform = 'translateX(100%)';
            setTimeout(() => errorDiv.remove(), 500);
        }, 5000);
    }
    
    // Professional keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            // Professional focus styles
            document.querySelectorAll(':focus').forEach(element => {
                element.style.outline = '2px solid #3b82f6';
                element.style.outlineOffset = '2px';
            });
        }
    });
    
    // Professional touch interactions for mobile
    if ('ontouchstart' in window) {
        document.querySelectorAll('.card-professional, .nav-btn-professional').forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    // Professional performance optimization
    let ticking = false;
    
    function updateAnimations() {
        ticking = false;
        // Add any performance-critical animations here
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }
    
    // Professional scroll performance
    window.addEventListener('scroll', requestTick);
    
    // Professional resize handling
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Handle resize events professionally
            console.log('Window resized - updating layout');
        }, 250);
    });
    
    // Professional accessibility improvements
    document.querySelectorAll('[data-tab]').forEach((button, index) => {
        button.setAttribute('aria-label', `タブ ${index + 1}: ${button.textContent.trim()}`);
        button.setAttribute('role', 'tab');
        button.setAttribute('tabindex', '0');
    });
    
    // Professional focus management
    document.querySelectorAll('.tab-content').forEach((content, index) => {
        content.setAttribute('role', 'tabpanel');
        content.setAttribute('aria-labelledby', `tab-${index + 1}`);
    });
    
    console.log('Professional Intrax site initialized successfully');
});
