import { AboutTextSection } from "../components/about/AboutTextSection";
import { Divider } from "../components/Divider";
import { FunFactsSection } from "../components/about/FunFactsSection";
import { ImageCard } from "../components/about/ImageCard";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <div id="about-background" className="h-full bg-gradient-to-tr from-fuchsia-50 to-white animate-gradient w-full">
                <div id="about-content-container" className="flex flex-col my-30 w-full">
                    <div className='flex flex-col md:flex-row gap-10 justify-center mt-10 mx-40'>
                        <AboutTextSection />
                        <ImageCard />
                    </div>
                    <div className="mt-20 mb-10 mx-30">
                        <Divider />
                    </div>
                    <FunFactsSection />

                </div>
            </div>
        </motion.div >
    );
};
