### Project Overview
This is a modern React-based web application for "Mériem Consultante Formation," a consulting service specializing in regulatory and administrative compliance for professional training activities in France. The app serves as a landing page and business website, featuring service offerings, pricing, testimonials, and lead generation tools like Calendly integration and Stripe payments. It targets training professionals seeking assistance with NDA (Numéro de Déclaration d'Activité), Qualiopi certification, CPF (Compte Personnel de Formation), and Répertoires Spécifiques (RS).

### File Summaries

#### Configuration Files
- ****: Defines the project as "vite_react_shadcn_ts" with dependencies for React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui components (Radix UI), Stripe for payments, Supabase for backend, React Query for data fetching, React Router for navigation, and testing with Vitest. Scripts include dev, build, lint, and test commands. Uses Bun as package manager.
- ****: Base TypeScript config with strict mode disabled, path aliases (@/* for src/*), and references to app and node configs.
- ****: App-specific config for source files, targeting ES2020, with JSX as React JSX and bundler module resolution.
- ****: Node-specific config for build tools, targeting ES2022.
- ****: Vite config with React SWC plugin, path aliases, and development server on port 8080 with HMR overlay disabled. Includes componentTagger for development.
- ****: Vitest config for testing, using React SWC, jsdom environment, and path aliases.
- ****: Tailwind config with custom fonts (Baloo 2, Poppins, Open Sans), color palette (HSL-based with custom variables like coral, navy, gold, cream), and content paths including src/.
- ****: Simple PostCSS config with Tailwind and Autoprefixer plugins.
- ****: ESLint config using JS recommended rules, TypeScript rules, React hooks, and React refresh plugins. Disables some rules like no-unused-vars.
- ****: shadcn/ui config specifying default style, TypeScript, CSS variables, and aliases for components, utils, ui, lib, and hooks.
- ****: HTML entry point with French lang, meta tags for SEO (title, description, Open Graph, Twitter), Google Fonts preconnects, and script for main.tsx.
- ****: Standard Lovable project README with setup instructions, tech stack (Vite, TypeScript, React, shadcn-ui, Tailwind), and deployment notes.
- ****: Allows all user agents to crawl the site.
- ****: Binary lock file for Bun package manager (not readable as text).

#### Source Files (src/)
- ****: Main app component with React Router setup, routes for Index, Tarifs, Ebook, PaymentSuccess, and NotFound. Wraps with QueryClient, TooltipProvider, Toaster, and Sonner.
- ****: Entry point rendering App into #root with createRoot.
- ****: TypeScript declarations for Vite environment.
- ****: Basic CSS for #root container (legacy, minimal use).
- ****: Imports Google Fonts and defines CSS custom properties for design system (colors, fonts, borders, etc.) in HSL. Includes Tailwind directives.

#### Components (src/components/)
- ****: Responsive header with logo, navigation (scroll-to-section or page links), mobile menu, and Calendly CTA button. Uses scroll detection for styling.
- ****: Landing hero with badge, title, subtitle, CTAs (Calendly modal, scroll to sections), trust indicators, and decorative elements.
- ****: About section with profile card, values grid (Clarté, Rigueur, etc.), and CTA for discovery call. Uses scroll animations.
- ****: Pricing section with pack cards (NDA, Qualiopi, RS) and CTA to full tarifs page. Includes popular badge and animations.
- ****: Testimonials carousel with quotes, authors, and navigation controls.
- ****: FAQ accordion using shadcn/ui Accordion component with common questions about services, NDA, Qualiopi, etc.
- ****: Footer with brand, navigation links, contact (email), social icons (LinkedIn, Instagram, Facebook), and legal links.
- ****: Wrapper for React Router NavLink with className support for active/pending states.
- ****: Modal dialog embedding Calendly iframe for booking discovery calls.
- ****: Modal for Stripe embedded checkout, fetching client secret via Supabase function, handling errors.
- ****: Services overview with cards for NDA, Qualiopi, EDOF/CPF, RS, including descriptions and CTAs.

#### UI Components (src/components/ui/)
These are standard shadcn/ui components (boilerplate implementations):
- **accordion.tsx**: Accordion component for collapsible content.
- **alert-dialog.tsx**: Alert dialog for confirmations.
- **alert.tsx**: Alert component for notifications.
- **aspect-ratio.tsx**: Aspect ratio utility.
- **avatar.tsx**: Avatar component.
- **badge.tsx**: Badge for labels.
- **breadcrumb.tsx**: Breadcrumb navigation.
- **button.tsx**: Button with variants.
- **calendar.tsx**: Calendar picker.
- **card.tsx**: Card layout.
- **carousel.tsx**: Carousel/slider.
- **chart.tsx**: Chart components.
- **checkbox.tsx**: Checkbox input.
- **collapsible.tsx**: Collapsible content.
- **command.tsx**: Command palette.
- **context-menu.tsx**: Context menu.
- **dialog.tsx**: Modal dialog.
- **drawer.tsx**: Drawer/sidebar.
- **dropdown-menu.tsx**: Dropdown menu.
- **form.tsx**: Form utilities.
- **hover-card.tsx**: Hover card.
- **input-otp.tsx**: OTP input.
- **input.tsx**: Input field.
- **label.tsx**: Label for inputs.
- **menubar.tsx**: Menu bar.
- **navigation-menu.tsx**: Navigation menu.
- **pagination.tsx**: Pagination controls.
- **popover.tsx**: Popover.
- **progress.tsx**: Progress bar.
- **radio-group.tsx**: Radio buttons.
- **resizable.tsx**: Resizable panels.
- **scroll-area.tsx**: Scrollable area.
- **select.tsx**: Select dropdown.
- **separator.tsx**: Separator line.
- **sheet.tsx**: Sheet/sidebar.
- **sidebar.tsx**: Sidebar component.
- **skeleton.tsx**: Skeleton loaders.
- **slider.tsx**: Slider input.
- **sonner.tsx**: Toast notifications (Sonner).
- **switch.tsx**: Toggle switch.
- **table.tsx**: Table component.
- **tabs.tsx**: Tabs.
- **textarea.tsx**: Textarea input.
- **toast.tsx**: Toast component.
- ****: Toast container.
- **toggle-group.tsx**: Toggle group.
- **toggle.tsx**: Toggle button.
- ****: Tooltip.
- ****: Toast hook.

#### Hooks (src/hooks/)
- ****: Hook to detect mobile breakpoint (768px) using media query.
- ****: Custom toast hook with reducer for managing toast state (add, update, dismiss, remove).
- ****: Hook for scroll-triggered animations using IntersectionObserver, with options for threshold, margin, and trigger once.

#### Integrations (src/integrations/supabase/)
- ****: Supabase client initialization with URL and key from env, auth config for localStorage and auto-refresh.
- ****: Auto-generated TypeScript types for Supabase database (currently empty public schema).

#### Lib (src/lib/)
- ****: Utility function  for combining class names with clsx and twMerge.

#### Pages (src/pages/)
- ****: Main landing page assembling Header, HeroSection, AproposSection, TarifsSection, TemoignagesSection, FAQSection, Footer.
- ****: Detailed pricing page with pack cards, features, and Stripe checkout modals. Includes back link and payment info.
- ****: Resources page with free guide form, free ebooks list, paid ebooks with prices, and guarantee section.
- ****: Success page after Stripe payment, with confirmation message and back link.
- ****: 404 page with error logging and home link.

#### Test (src/test/)
- ****: Simple Vitest test asserting true === true.
- ****: Test setup with @testing-library/jest-dom and mock for matchMedia.

#### Supabase (supabase/)
- ****: Supabase project config with project ID.
- ****: Deno edge function for Stripe checkout, mapping product keys to price IDs, creating embedded sessions, handling CORS.

### Synthesis
This project is a single-page application (SPA) built with modern web technologies: **React 18** with **TypeScript** for type safety, **Vite** for fast development and building, **Tailwind CSS** for styling with a custom design system (HSL colors, custom fonts), and **shadcn/ui** for accessible UI components based on Radix UI. It uses **React Router** for client-side routing, **React Query** for data fetching (though minimally used here), and **Supabase** for backend functions (Stripe payment processing). The app focuses on lead generation for consulting services, with integrations for **Calendly** (scheduling) and **Stripe** (payments). Key features include responsive design, scroll animations, modals, and SEO-optimized meta tags. The structure follows best practices: config files for tooling, src/ organized by type (components, hooks, pages), and a clean separation of concerns. Technologies like Bun for package management and Vitest for testing indicate a focus on performance and developer experience. The app is French-language focused, targeting professionals in training compliance, with a professional, trustworthy aesthetic (navy, gold, coral colors). No major issues noted; it's production-ready with proper error handling in payments and animations for UX. Dependencies are pinned and widely used, with minimal custom code beyond UI assembly.