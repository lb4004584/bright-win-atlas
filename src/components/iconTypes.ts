import type {ComponentType} from 'react';

/**
 * A lucide-react-native icon passed as a prop.
 *
 * Deliberately loose: lucide ships its icons as forwardRef components whose
 * props extend react-native-svg's SvgProps, and pinning a narrower structural
 * type here makes the assignment fail type-check for reasons that have nothing
 * to do with how the icon is actually used (`size` / `color` / `strokeWidth`).
 */
export type IconComponent = ComponentType<any>;
