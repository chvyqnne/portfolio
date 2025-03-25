type Props = {
    allSkills: string[];
    selectedSkills: string[];
    toggleSkill: (skill: string) => void;
    clearAll: () => void;
    projects: { id: number; title: string }[];
    scrollTo: (id: number) => void;
    resultCount: number;
    variant?: "desktop" | "mobile";
};

export const FilterSidebar = ({
    allSkills,
    selectedSkills,
    toggleSkill,
    clearAll,
    projects,
    scrollTo,
    resultCount,
    variant = "desktop",
}: Props) => {
    const baseClasses =
        "max-h-[900px] overflow-y-auto border bg-pink-100 p-6 flex-col justify-between shadow-[10px_10px_0_0_#FF90C6] rounded-2xl";

    const variantClasses =
        variant === "desktop"
            ? "hidden md:flex w-[350px] sticky top-20"
            : "block w-full";


    return (
        <div className={`${baseClasses} ${variantClasses}`}>
            <div className="space-y-6">
                <h3 className="font-bold text-md font-inter">
                    — just for fun (੭˃ᴗ˂)੭⋆˚⟡˖ ࣪
                </h3>

                <div>
                    <p className="text-xl font-semibold mb-2">Projects</p>
                    <ul className="bg-white border border-black rounded-xl p-4">
                        {projects.map((p) => (
                            <li key={p.id}>
                                <button
                                    onClick={() => scrollTo(p.id)}
                                    className="text-md font-inter text-left text-gray-800 hover:text-pink-500 transition-colors"
                                >
                                    {p.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="text-xl font-semibold mb-2">Skills</p>
                    <div className="flex flex-wrap gap-2 bg-white border border-black rounded-xl p-4">
                        {allSkills.map((skill) => (
                            <button
                                key={skill}
                                onClick={() => toggleSkill(skill)}
                                className={`text-sm px-3 py-1 rounded-full hover:bg-pink-300 font-inter border ${selectedSkills.includes(skill)
                                    ? "bg-pink-400 text-white border border-black"
                                    : "bg-white text-gray-800"
                                    }`}
                            >
                                {skill}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-6">
                <button
                    type="button"
                    onClick={clearAll}
                    className="bg-pink-400 text-white text-md px-4 py-1 border border-black rounded-full hover:bg-pink-600"
                >
                    Clear All
                </button>
                <span className="text-md font-inter text-gray-700">
                    Results: {resultCount}
                </span>
            </div>
        </div>
    );
};
