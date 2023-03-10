import {IButtonProps} from 'native-base';
import {Type} from '../my_text/type';

declare type Variant = 'solid' | 'outline';
export declare type Size = 'xs' | 'sm' | 'md' | 'lg';

export interface MyIconButtonProps extends IButtonProps {
  colorScheme?: Type | undefined;
  variant?: Variant | undefined;
  size?: Size | undefined;
  icon: JSX.Element;
}
