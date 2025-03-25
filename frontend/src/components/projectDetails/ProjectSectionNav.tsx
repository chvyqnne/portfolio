type Props = {
    readonly sections?: readonly { readonly title: string }[];
};

export const ProjectSectionNav = ({ sections }: Props) => {
    return (
        <div className="border border-black rounded-2xl min-w-[250px] bg-white p-6 md:min-h-[70vh] max-h-[80vh] overflow-auto">
            <ul className="text-xl space-y-6 font-inter">
                <li>
                    <a href="#summary" className="hover:text-yellow-600">
                        Summary
                    </a>
                </li>
                {sections?.map((section, index) => (
                    <li key={index}>
                        <a href={`#section-${index}`} className="hover:text-yellow-600">
                            {section.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
