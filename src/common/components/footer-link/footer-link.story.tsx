import type { Meta, StoryObj } from "@storybook/react";
import FooterLink from "./footer-link.component";

const meta = {
  title: "Common/Footer Link",
  component: FooterLink,
} satisfies Meta<typeof FooterLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    href: "tel:+380501234567",
    children: "(050) 123 45 67",
  },
  render: (args) => (
    <ul>
      <FooterLink {...args} />
    </ul>
  ),
};