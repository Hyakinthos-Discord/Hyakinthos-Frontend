import React from "react";

export type ButtonProps = {
    text: string,
    className: string,
}

export const PrimaryButton = ({text}: ButtonProps) => <button className="bg-primary-back p-0 rounded-lg outline-offset-1 border-none cursor-pointer">
    <span className="bg-primary-fore px-8 py-2 rounded-lg block -translate-y-1 active:-translate-y-0.5 hover:-translate-y-1.5 transition ease-in-out text-secondary">
        {text}
    </span>
</button>

export const SecondaryButton = ({text}: ButtonProps) => <button className="bg-secondary-back p-0 rounded-lg outline-offset-1 border-none cursor-pointer">
    <span className="bg-secondary-fore px-8 py-2 rounded-lg block -translate-y-1 active:-translate-y-0.5 hover:-translate-y-1.5 transition ease-in-out text-white">
        {text}
    </span>
</button>