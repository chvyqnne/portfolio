type ExperienceDetailProps = {
    timeline: string;
    skills: string[];
    responsibilities: string[];
};

export const ExperienceDetail = ({ timeline, skills, responsibilities }: ExperienceDetailProps) => (
    <div
        className="bg-white rounded-2xl w-full md:min-w-[400px] md:max-w-[420px] max-h-[60vh] md:max-h-[700px] flex flex-col justify-start border gap-5 p-6 md:p-8"
        style={{ boxShadow: "15px 15px 0 #8AB5FF" }}
    >
        <div className="mb-2">
            <p className="text-xl text-[#367FFF] font-bold font-inter">Timeline</p>
            <p className="text-md font-inter">{timeline}</p>
        </div>
        <div className="mb-2">
            <p className="text-xl text-[#367FFF] font-inter font-bold">Skills</p>
            <ul className="list-disc list-inside text-md font-inter">
                {skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
        </div>
        <div>
            <p className="text-xl text-[#367FFF] font-inter font-bold">Responsibilities</p>
            <ul className="list-disc list-inside text-md font-inter space-y-1">
                {responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
            </ul>
        </div>
    </div>
);
