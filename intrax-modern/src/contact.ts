import { ContactForm } from './types';

class ContactPage {
  private form: HTMLFormElement | null;

  constructor() {
    this.form = document.getElementById('contact-form') as HTMLFormElement;
    this.initialize();
  }

  private initialize(): void {
    if (this.form) {
      this.setupFormValidation();
      this.setupFormSubmission();
    }
  }

  private setupFormValidation(): void {
    const inputs = this.form?.querySelectorAll('input, textarea, select');
    inputs?.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement));
      input.addEventListener('input', () => this.clearFieldError(input as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement));
    });
  }

  private validateField(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): boolean {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Clear previous error
    this.clearFieldError(field);

    // Required field validation
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'この項目は必須です';
    }

    // Email validation
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = '有効なメールアドレスを入力してください';
      }
    }

    // Show error if validation failed
    if (!isValid) {
      this.showFieldError(field, errorMessage);
    }

    return isValid;
  }

  private showFieldError(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, message: string): void {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'text-red-600 text-sm mt-1';
    errorDiv.textContent = message;
    errorDiv.id = `${field.id}-error`;
    
    field.parentNode?.appendChild(errorDiv);
    field.classList.add('border-red-500');
  }

  private clearFieldError(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): void {
    const errorDiv = document.getElementById(`${field.id}-error`);
    if (errorDiv) {
      errorDiv.remove();
    }
    field.classList.remove('border-red-500');
  }

  private setupFormSubmission(): void {
    this.form?.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.validateForm()) {
        this.handleFormSubmit();
      }
    });
  }

  private validateForm(): boolean {
    const fields = this.form?.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    fields?.forEach(field => {
      if (!this.validateField(field as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)) {
        isValid = false;
      }
    });

    return isValid;
  }

  private handleFormSubmit(): void {
    if (!this.form) return;

    const formData = new FormData(this.form);
    const contactData: ContactForm = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
      program: formData.get('program') as string
    };

    // Show loading state
    this.showLoadingState();

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      this.showSuccessMessage();
      this.form?.reset();
      this.hideLoadingState();
    }, 2000);
  }

  private showLoadingState(): void {
    const submitButton = this.form?.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        送信中...
      `;
    }
  }

  private hideLoadingState(): void {
    const submitButton = this.form?.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = '送信する';
    }
  }

  private showSuccessMessage(): void {
    const successDiv = document.createElement('div');
    successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    successDiv.innerHTML = `
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
        お問い合わせありがとうございます。担当者よりご連絡いたします。
      </div>
    `;

    document.body.appendChild(successDiv);

    // Remove success message after 5 seconds
    setTimeout(() => {
      successDiv.remove();
    }, 5000);
  }
}

// Initialize contact page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ContactPage();
});
