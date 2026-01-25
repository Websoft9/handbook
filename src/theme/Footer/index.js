import React from 'react';
import Footer from '@theme-original/Footer';

/**
 * Footer wrapper with Carbon Design System integration
 * 
 * This component wraps the default Docusaurus Footer and applies Carbon design tokens.
 * Maintains all original footer functionality while adopting Carbon's enterprise design.
 * 
 * Integration approach:
 * - Wrapper pattern for safe upgrades
 * - Carbon styling applied via carbon-custom.css
 * - Preserves all existing footer links and content
 */
export default function FooterWrapper(props) {
  return (
    <div className="carbon-footer-container">
      <Footer {...props} />
    </div>
  );
}
