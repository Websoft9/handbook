import React, {type ReactNode} from 'react';
import Navbar from '@theme-original/Navbar';
import type NavbarType from '@theme/Navbar';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof NavbarType>;

/**
 * Navbar wrapper with Carbon Design System integration
 * 
 * This component wraps the default Docusaurus Navbar and applies Carbon design tokens.
 * It maintains all original Docusaurus functionality (navigation, search, i18n)
 * while adopting Carbon's visual design language for enterprise consistency.
 * 
 * Integration approach:
 * - Uses wrapper pattern (safer than eject for upgrades)
 * - Applies Carbon CSS classes via className
 * - Preserves all Docusaurus navbar features (search plugin, locale dropdown)
 * 
 * Carbon components not directly used here to avoid SSR conflicts.
 * Instead, Carbon styles are applied via carbon-custom.css.
 */
export default function NavbarWrapper(props: Props): ReactNode {
  return (
    <div className="carbon-navbar-container">
      <Navbar {...props} />
    </div>
  );
}
