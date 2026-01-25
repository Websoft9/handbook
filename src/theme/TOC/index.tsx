import React, {type ReactNode} from 'react';
import TOC from '@theme-original/TOC';
import type TOCType from '@theme/TOC';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof TOCType>;

/**
 * TOC (Table of Contents) wrapper with Carbon Design System integration
 * 
 * This component wraps the default Docusaurus TOC and applies Carbon design tokens.
 * It maintains all original TOC functionality while adopting Carbon's visual design.
 * 
 * Integration approach:
 * - Uses wrapper pattern (safer than eject for upgrades)
 * - Applies Carbon CSS classes via className
 * - Preserves all Docusaurus TOC features (headings navigation)
 * 
 * Carbon styling applied via carbon-custom.css.
 */
export default function TOCWrapper(props: Props): ReactNode {
  return (
    <div className="carbon-toc-container">
      <TOC {...props} />
    </div>
  );
}
