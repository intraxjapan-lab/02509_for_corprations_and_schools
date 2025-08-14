import { TabId } from './types';

export class TabManager {
  private currentTab: TabId = 'tab1';
  private tabButtons: NodeListOf<Element>;
  private tabContents: NodeListOf<Element>;

  constructor() {
    this.tabButtons = document.querySelectorAll('[data-tab]');
    this.tabContents = document.querySelectorAll('.tab-content');
    this.initialize();
  }

  private initialize(): void {
    this.setupEventListeners();
    this.showTab(this.currentTab);
  }

  private setupEventListeners(): void {
    this.tabButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const tabId = button.getAttribute('data-tab') as TabId;
        if (tabId) {
          this.showTab(tabId);
        }
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        this.navigateTab(e.key === 'ArrowRight' ? 'next' : 'prev');
      }
    });
  }

  private navigateTab(direction: 'next' | 'prev'): void {
    const tabs: TabId[] = ['tab1', 'tab2', 'tab3', 'tab4'];
    const currentIndex = tabs.indexOf(this.currentTab);
    let newIndex: number;

    if (direction === 'next') {
      newIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    }

    this.showTab(tabs[newIndex]);
  }

  public showTab(tabId: TabId): void {
    // Hide all content
    this.tabContents.forEach(content => {
      content.classList.remove('active');
      content.classList.add('fade-out');
    });

    // Remove active from all buttons
    this.tabButtons.forEach(button => {
      button.classList.remove('active');
    });

    // Show selected content
    const selectedContent = document.getElementById(tabId);
    const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);

    if (selectedContent && selectedButton) {
      // Add small delay for smooth transition
      setTimeout(() => {
        selectedContent.classList.remove('fade-out');
        selectedContent.classList.add('active');
      }, 100);

      selectedButton.classList.add('active');
      this.currentTab = tabId;

      // Update URL hash
      history.pushState(null, null, `#${tabId}`);
    }
  }

  public getCurrentTab(): TabId {
    return this.currentTab;
  }
}
