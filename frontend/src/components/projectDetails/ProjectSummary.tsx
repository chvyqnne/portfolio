import { Button } from "../Button";

type Props = {
    readonly title: string;
    readonly description: string;
    readonly role: string;
    readonly timeline: string;
    readonly skills: string[];
    readonly link: string;
    readonly linkLabel: string;
    readonly image?: string;
}

export const ProjectSummary = ({ title, description, image, skills, link, linkLabel, role, timeline }: Props) => {
    return (
        <div className='p-4 space-y-4'>
            <div className='space-y-4'>
                <p className='font-dmsans font-bold text-3xl'>{title}</p>
                <p className='font-dmsans text-xl'>{description}</p>
            </div>
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-col gap-6'>
                    <div className='bg-[#FFEDB0] border border-black rounded-xl font-inter p-6 min-w-[350px] min-h-[300px] text-lg'>
                        <p className='text-[#8F8F8F]'>Role</p>
                        <p>{role}</p>

                        <p className='text-[#8F8F8F] mt-5'>Timeline</p>
                        <p>{timeline}</p>

                        <p className='text-[#8F8F8F] mt-5'>Skills</p>
                        <p>{skills.join(", ")}</p>
                    </div>
                    <Button
                        link={link}
                        label={linkLabel}
                        variant="yellow"
                        showArrow={true}
                    />
                </div>
                <div
                    id='project-image'
                    className="bg-white rounded-2xl h-[350px] w-[350px] flex flex-col justify-center border gap-5"
                    style={{ boxShadow: "15px 15px 0 #FFEDB0" }}
                >
                    {image}
                </div>
            </div>
        </div>
    )
}