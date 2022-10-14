import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '@quimera-ui/react';

export default {
  title: 'Example/Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};
