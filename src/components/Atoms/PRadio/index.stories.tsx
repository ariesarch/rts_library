import { Meta, StoryObj } from "@storybook/react";
import { PRadio } from ".";

const meta: Meta<typeof PRadio> = {
    title: "Component/PRadio",
    component: PRadio,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
}
export default meta;

type Story = StoryObj<typeof meta>;
export const Solid: Story = {
    args: {
        variant: "solid",
    }
}
export const ReadOnly: Story = {
    args: {
        variant: "readonly"
    }
}