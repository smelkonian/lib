import { userEvent, within } from "@storybook/testing-library";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/button/Button";

const meta = {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "click me",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.click(canvas.getByRole("button"));
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
    size: "large",
  },
};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    variant: "tertiary",
    size: "large",
  },
};
