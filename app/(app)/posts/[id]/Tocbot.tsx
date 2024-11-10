'use client';
import './tocbot.css'
import {motion, useScroll, Variants} from 'framer-motion'
import {useEffect} from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import tocbot from 'tocbot'

const listVariants: Variants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.08,
            delay: 0.5,
            type: 'spring',
            stiffness: 150,
            damping: 20
        }
    }
}

function Tocbot() {
    const {scrollY} = useScroll();

    useEffect(() => {
        tocbot.init({
            tocSelector: '.js-toc',
            contentSelector: '.js-toc-content',
            headingSelector: 'h1, h2, h3, h4, h5, h6',
            linkClass: 'toc-link',
            activeListItemClass: 'is-active-li',
            listClass: 'toc-list',
            listItemClass: 'toc-list-item',
            collapseDepth: 6,
            scrollSmooth: true,
            scrollSmoothDuration: 420,
            scrollSmoothOffset: -10
        });

        const handleScroll = () => {
            const activeLink = document.querySelector('.toc-link.is-active-link');

            if (activeLink) {
                // setHighlightedHeadingId(
                //     activeLink.getAttribute('href')?.slice(1) || null
                // );
            }
        };
        tocbot.refresh()
        window.addEventListener('scroll', handleScroll);

        return () => {
            tocbot.destroy();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

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

export {Tocbot}
