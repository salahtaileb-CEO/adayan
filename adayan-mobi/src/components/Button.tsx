import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../utils/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  icon?: React.ReactNode;
  style?: any;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  icon,
  style,
}) => {
  const getButtonStyle = () => {
    const baseStyles = [styles.button];

    // Variant styles
    switch (variant) {
      case 'primary':
        baseStyles.push(styles.primaryButton);
        break;
      case 'secondary':
        baseStyles.push(styles.secondaryButton);
        break;
      case 'outline':
        baseStyles.push(styles.outlineButton);
        break;
      case 'gold':
        baseStyles.push(styles.goldButton);
        break;
    }

    // Size styles
    switch (size) {
      case 'small':
        baseStyles.push(styles.smallButton);
        break;
      case 'medium':
        baseStyles.push(styles.mediumButton);
        break;
      case 'large':
        baseStyles.push(styles.largeButton);
        break;
    }

    if (disabled) {
      baseStyles.push(styles.disabledButton);
    }

    return baseStyles;
  };

  const getTextStyle = () => {
    const textStyles = [styles.buttonText];

    switch (variant) {
      case 'primary':
      case 'gold':
        textStyles.push(styles.primaryButtonText);
        break;
      case 'secondary':
      case 'outline':
        textStyles.push(styles.secondaryButtonText);
        break;
    }

    if (disabled) {
      textStyles.push(styles.disabledButtonText);
    }

    return textStyles;
  };

  return (
    <TouchableOpacity
      style={[...getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    ...SHADOWS.small,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  secondaryButton: {
    backgroundColor: COLORS.gray[200],
  },
  outlineButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  goldButton: {
    backgroundColor: COLORS.gold,
  },
  smallButton: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
  },
  mediumButton: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
  },
  largeButton: {
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xl,
  },
  disabledButton: {
    backgroundColor: COLORS.gray[300],
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
  },
  primaryButtonText: {
    color: COLORS.white,
  },
  secondaryButtonText: {
    color: COLORS.gray[800],
  },
  disabledButtonText: {
    color: COLORS.gray[500],
  },
  iconContainer: {
    marginRight: SPACING.sm,
  },
});

export default Button;
