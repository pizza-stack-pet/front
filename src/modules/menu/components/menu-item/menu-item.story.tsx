import type { Meta, StoryObj } from "@storybook/react";
import MenuItem from "./menu-item.component";

const meta = {
  title: "Menu/Menu Item",
  component: MenuItem,
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

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
