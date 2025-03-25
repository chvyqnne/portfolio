export const Contact = () => {
    return (
        <div className="flex flex-row gap-3 items-center text-[14px] font-ibm">
            <img
                className='emoji-shake w-6 h-6'
                src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f5d2.svg"
                alt="books-emoji"
            />
            <p className="underline underline-offset-4 hover:text-[#FFC2E7]">
                resume
            </p>
            /
            <img
                className='emoji-shake w-6 h-6'
                src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f44b.svg"
                alt="wave-emoji"
            />
            <p className="underline underline-offset-4 hover:text-[#FFC2E7]">
                <a href='https://www.linkedin.com/in/ccabang/' target="_blank" rel="noopener">
                    linkedin
                </a>
            </p>
            /
            <img
                className='emoji-shake w-6 h-6'
                src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f48c.svg"
                alt="letter-emoji"
            />
            <p className="underline underline-offset-4 hover:text-[#FFC2E7]">
                <a href='mailto:cheyannephongsavath@gmail.com'>
                    email
                </a>
            </p>
        </div>
    )
};