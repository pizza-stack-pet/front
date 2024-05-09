import type { Meta, StoryObj } from "@storybook/react";
import MenuList from "./menu-list.component";
import PIZZA_MENU from "@/mocks/pizza.json";

const meta = {
  title: "Menu/Menu List",
  component: MenuList,
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    items: PIZZA_MENU,
  },
};