import { ArrowUpRight } from "lucide-react";

type Props = {
    link: string;
    label: string;
    variant?: "pink" | "yellow";
    showArrow?: boolean;
};

const variantMap = {
    pink: "hover:bg-pink-500 hover:text-white",
    yellow: "hover:bg-yellow-400 hover:text-black",
};

export const Button = ({ link, label, variant = "pink", showArrow }: Props) => {
    const hoverClasses = variantMap[variant];

    return (
        <a
            href={link}
            className={`bg-white inline-flex items-center font-ibm gap-1 px-4 py-2 border border-black rounded-full text-sm transition-colors w-fit ${hoverClasses}`}
        >
            {label}

            {showArrow ?
                <ArrowUpRight size={16} />
                : null
            }
        </a>
    );
};
