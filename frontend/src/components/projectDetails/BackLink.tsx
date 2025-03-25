import { Link } from "react-router-dom";

type Props = {
    readonly to: string;
    readonly label?: string;
};

export const BackLink = ({ to, label = "back" }: Props) => {
    return (
        <Link to={to} className="flex flex-row hover:text-yellow-500 gap-2">
            <p>←</p>
            <p className="underline underline-offset-4 font-inter">{label}</p>
        </Link>
    );
};
