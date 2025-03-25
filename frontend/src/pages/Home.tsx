import { IntroCard } from "../components/home/IntroCard";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { NavLink } from "react-router-dom";

export const Home = () => {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <div className="flex overflow-hidden items-center justify-center h-screen bg-gradient-to-tr from-fuchsia-100 to-white flex-col gap-10 relative z-10">
                <motion.div
                    whileHover={{
                        y: -6,
                        transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                >
                    <IntroCard />
                </motion.div>

                <div className="text-center mt-10 text-lg font-inter text-gray-700 italic">
                    new here? check out my{" "}
                    <NavLink
                        to="/work"
                        className="inline-flex items-center font-semibold underline underline-offset-4 decoration-pink-400 hover:text-pink-500 transition-colors"
                    >
                        projects
                    </NavLink>
                    ,{" "}
                    <NavLink
                        to="/experience"
                        className="inline-flex items-center font-semibold underline underline-offset-4 decoration-pink-400 hover:text-pink-500 transition-colors"
                    >
                        experience
                    </NavLink>
                    , or learn more {" "}
                    <NavLink
                        to="/about"
                        className="inline-flex items-center font-semibold underline underline-offset-4 decoration-pink-400 hover:text-pink-500 transition-colors"
                    >
                        about me
                    </NavLink>
                    <span className="emoji-shake ml-1" role="img" aria-label="flower">
                        🌸
                    </span>
                </div>

                <hr className="m-6" />
                <div className='w-[90%]'>
                    <Footer />
                </div>
            </div>
        </motion.div>
    );
};
