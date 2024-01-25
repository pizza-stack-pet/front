import type { Meta, StoryObj } from "@storybook/react";
import MenuItem from "./menu-item.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Menu/Menu Item",
  component: MenuItem,
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const View: Story = {
  args: {
    imagePath: "/assets/pizza/manhattan.jpeg",
    weight: 555,
    title: "Піца Мангеттен",
    ingredients:
      "(подвійна порція грибів), Гриби, Моцарелла, Пепероні, Соус Альфредо",
    price: 215,
  },
};
