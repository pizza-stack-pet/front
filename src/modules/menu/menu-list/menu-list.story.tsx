import type { Meta, StoryObj } from "@storybook/react";
import MenuList from "./menu-list.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Menu/Menu List",
  component: MenuList,
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const View: Story = {};
