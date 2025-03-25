import { InfoGrid } from "./InfoGrid";

export const FunFactsSection = () => {
    return (
        <div id="facts-section-container" className="mx-40">
            <p className="text-[25px]">some fun facts ٩(⸝⸝ᵕᴗᵕ⸝⸝)و ✧*.ﾟ</p>
            <InfoGrid
                items={[
                    { label: "education", content: "B.S. in Computer Science & Data Science from American University" },
                    { label: "skills", content: "Full-stack development, UI/UX design, data analysis, Agile collaboration" },
                    { label: "tech stack", content: "TypeScript, React, Django, Tailwind CSS, PostgreSQL, Go, Python" },
                    { label: "tools", content: "Git, Docker, AWS, Postman, Figma, Linux, ServiceNow" },
                    { label: "hometown", content: "Wai'anae, Hawai'i" },
                    { label: "languages", content: "English, learning Mandarin Chinese + Korean" },
                    { label: "hobbies", content: "puzzling, hiking, language learning" },
                ]}
            />
        </div>
    );
};
