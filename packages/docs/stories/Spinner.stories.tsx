import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Spinner, SpinnerProps } from '@quimera-ui/react';

export default {
  title: 'FEEDBACK/Spinner',
  component: Spinner,
  args: {
    size: 50,
  },
} as Meta<SpinnerProps>;

export const Default: Story<SpinnerProps> = (args) => <Spinner {...args} />;
