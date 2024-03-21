import { useTheme } from 'styled-components';
import { Styles } from '../../../App.styled';
import { StyledButton } from './Button.styled';
import { useMemo } from 'react';

interface ButtonProps {
  label?: string;
  icon?: string;
  type: 'button' | 'submit' | 'reset';
  hasPrimaryStyle: boolean;
  color: 'action' | 'warning' | 'default';
  ariaLabel?: string;
  onClick: () => void;
}

const defaultProps: Partial<ButtonProps> = {
  type: 'button',
  hasPrimaryStyle: false,
  color: 'default',
};

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  type,
  hasPrimaryStyle,
  color,
  ariaLabel,
  onClick,
}) => {
  const { colors } = useTheme();

  const colorMap = useMemo(
    () => ({
      action: { color: colors.accent, hoverColor: colors.accentEmphasis },
      warning: { color: colors.warning, hoverColor: colors.warningEmphasis },
      default: {
        color: colors.secondary,
        hoverColor: colors.secondaryEmphasis,
      },
    }),
    [colors],
  );

  const buttonStyles: Styles = useMemo(
    () => ({
      $styles: {
        backgroundColor: hasPrimaryStyle
          ? colorMap[color].color
          : 'transparent',
        color: hasPrimaryStyle ? colors.primary500 : colorMap[color].color,
        borderColor: hasPrimaryStyle ? 'transparent' : colorMap[color].color,
      },
      $hoverStyles: {
        backgroundColor: colorMap[color].hoverColor,
      },
    }),
    [color, hasPrimaryStyle, colors, colorMap],
  );

  return (
    <StyledButton
      type={type}
      $styles={buttonStyles.$styles}
      $hoverStyles={buttonStyles.$hoverStyles}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {icon && <img src={icon} alt={ariaLabel} aria-hidden={true} />}
      {label && <span> {label}</span>}
    </StyledButton>
  );
};

Button.defaultProps = defaultProps;

export default Button;
