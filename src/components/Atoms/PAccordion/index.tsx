import { cva, VariantProps } from "class-variance-authority"
import { useState } from "react"
import { PRadio } from "../PRadio"

const accordionStyles = cva(["w-full"])
type PAccordionProps = VariantProps<typeof accordionStyles>
export const PAccordion = ({ ...props }: PAccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative cursor-pointer w-full">
            <h3 onClick={() => setIsOpen(!isOpen)}>Server Settings</h3>
            <div className={isOpen ? "w-full flex transition-all duration-300 ease-in-out bg-primary-200" : "hidden"}>
                <ul>
                    <li>
                        <div className="flex gap-2">
                            <span className="bg-primary-500 rounded-full w-8 h-8 flex items-center justify-center">1</span>
                            <span>Spam Block</span>
                        </div>
                        <ul className="px-4">
                            <li>
                                <PRadio variant="readonly" id="spam_filter" />
                                <label htmlFor="spam_filter">
                                    Spam Filter
                                </label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div >
    )
}