import { Meta, StoryObj } from "@storybook/react";
import { PAccordion } from ".";

const meta: Meta<typeof PAccordion> = {
    title: "Component/PAccordion",
    component: PAccordion,
    parameters: {
        layout: "centered"
    }
}
export default meta;

type Story = StoryObj<typeof meta>
export const Solid: Story = {

}