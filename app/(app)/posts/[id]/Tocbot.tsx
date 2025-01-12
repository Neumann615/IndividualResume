'use client';
import { Variants, motion, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import { destroy, init } from 'tocbot';
import './tocbot.css';

const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.08,
            delay: 0.255,
            type: 'spring',
            stiffness: 150,
            damping: 20
        }
    }
};

function Tocbot() {
    const { scrollY } = useScroll()
    useEffect(() => {
        init({
            tocSelector: '.js-toc',
            contentSelector: '.js-toc-content',
            headingSelector: 'h1, h2, h3, h4, h5, h6',
            linkClass: 'toc-link',
            activeListItemClass: 'is-active-li',
            listClass: 'toc-list',
            listItemClass: 'toc-list-item',
            collapseDepth: 6,
            scrollSmooth: true,
            scrollSmoothDuration: 300,
            scrollSmoothOffset: -10,
            hasInnerContainers: true
        });


        return () => {
            destroy()

        }
    }, [scrollY])

    return (
        <div className="toc-container">
            <h2 className="text-lg font-semibold mb-4">目录</h2>
            <motion.ul
                className="js-toc group pointer-events-auto flex flex-col space-y-2 text-zinc-500"
                initial="hidden"
                animate="visible"
                variants={listVariants}
            />
        </div>
    );
}

export { Tocbot };

