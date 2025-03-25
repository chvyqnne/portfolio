import { Contact } from "../Contact";

export const AboutTextSection = () => {
    return (
        <div id="text-container">
            <div className="text-3xl">
                <p>nice to meet you!</p>
                <p>i'm cheyanne, web app developer</p>
                <p>@ independent project analysis</p>
            </div>
            <div className="flex flex-wrap mt-5 font-dmsans text-lg">
                <p>
                    I graduated from American University and have been building responsive,
                    user-friendly apps ever since. Right now, I work at Independent Project Analysis,
                    where I develop full-stack web and mobile-friendly tools using React, Django, and PostgreSQL.
                    I love working in collaborative, Agile teams and enjoy solving problems that make people’s lives easier
                    (or at least a little less annoying). My stack includes everything from TypeScript and Tailwind CSS to Python,
                    Go, and AWS — so I’m pretty comfortable hopping around the dev world.
                </p>
            </div>
            <div className="mt-10">
                <Contact />
            </div>
        </div>
    );
};
