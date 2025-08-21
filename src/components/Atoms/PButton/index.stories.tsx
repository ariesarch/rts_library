import { Meta, StoryObj } from "@storybook/react";
import { PButton } from ".";

const meta: Meta<typeof PButton> = {
    title: 'Component/PButton',
    component: PButton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
    args: {
        variant: "solid",
        children: "Click me Button"
    }
}
export const Outline: Story = {
    args: {
        variant: "outline",
        children: "Outline Button"
    }
}
export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "Ghost Button"
    }
}