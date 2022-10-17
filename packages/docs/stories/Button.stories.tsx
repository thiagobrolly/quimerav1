// import type { Meta, StoryObj } from '@storybook/react';

// import { Button, ButtonProps } from '@quimera-ui/react';

// export default {
//   title: 'Example2/Button',
//   component: Button,

//   args: {
//     children: 'Enviar',
//   },
// } as Meta<ButtonProps>;

// export const Primary: StoryObj<ButtonProps> = {};
// export const Secondary: StoryObj<ButtonProps> = {
//   args: {
//     size: 'large',
//   },
// };

// Button.stories.ts|tsx

import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from '@quimera-ui/react';

export default {
  title: 'Example2/Button',
  component: Button,
  args: {
    children: 'Click',
    variant: 'filled',
    size: 'medium',
    fullSize: false,
    disabled: false,
    isLoading: false,
    maintainDimentions: false,
  },
  argTypes: {
    variant: {
      options: ['standard', 'filled', 'outline', 'approve', 'danger'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      source: {
        language: 'jsx',
        type: 'auto',
        state: 'open',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<ButtonProps>;

export const Primary: Story<ButtonProps> = (args) => <Button {...args} />;
Primary.args = {
  children: 'Primary',
  variant: 'outline',
};

export const Sec: Story<ButtonProps> = (args) => <Button {...args} />;
Primary.args = {
  variant: 'outline',
};
