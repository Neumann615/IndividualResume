'use client'
import "./GlobalBg2.css"
import {useEffect, useState} from 'react'
import {createStyles} from 'antd-style'

const useStyles = createStyles(({token, css}) => ({
    gradientBg: css`
        width: 100%;
        height: 100%;
        position: fixed;
        overflow: hidden;
        background: linear-gradient(40deg, rgb(8, 10, 15), rgb(0, 17, 32));
        top: 0;
        left: 0;
        z-index: -1;
        @keyframes moveInCircle {
            0% {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(180deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        @keyframes moveVertical {
            0% {
                transform: translateY(-50%);
            }
            50% {
                transform: translateY(50%);
            }
            100% {
                transform: translateY(-50%);
            }
        }

        @keyframes moveHorizontal {
            0% {
                transform: translateX(-50%) translateY(-10%);
            }
            50% {
                transform: translateX(50%) translateY(10%);
            }
            100% {
                transform: translateX(-50%) translateY(-10%);
            }
        }
    `,
    svgBlur: css`
        display: none;
    `,
    noiseBg: css`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        mix-blend-mode: soft-light;
        opacity: 0.3;
    `,
    gradientsContainer: css`
        filter: url(#goo) blur(40px);
        width: 100%;
        height: 100%;
    `,
    g1: css`
        position: absolute;
        background: radial-gradient(circle at center, ${token.red} 0, transparent 50%) no-repeat;
        mix-blend-mode: hard-light;
        width: 80%;
        height: 80%;
        top: calc(50% - 80% / 2);
        left: calc(50% - 80% / 2);
        transform-origin: center center;
        animation: moveVertical 30s ease infinite;
        opacity: 1;
    `,
    g2: css`
        position: absolute;
        background: radial-gradient(circle at center, ${token.pink} 0, transparent 50%) no-repeat;
        mix-blend-mode: hard-light;
        width: 80%;
        height: 80%;
        top: calc(50% - 80% / 2);
        left: calc(50% - 80% / 2);
        transform-origin: calc(50% - 400px);
        animation: moveInCircle 20s reverse infinite;
        opacity: 1;
    `,
    g3: css`
        position: absolute;
        background: radial-gradient(circle at center, ${token.blue} 0, transparent 50%) no-repeat;
        mix-blend-mode: hard-light;
        width: 80%;
        height: 80%;
        top: calc(50% - 80% / 2 + 200px);
        left: calc(50% - 80% / 2 - 500px);
        transform-origin: calc(50% + 400px);
        animation: moveInCircle 40s linear infinite;
        opacity: 1;
    `,
    g4: css`
        position: absolute;
        background: radial-gradient(circle at center, ${token.green} 0, transparent 50%) no-repeat;
        mix-blend-mode: hard-light;
        width: 80%;
        height: 80%;
        top: calc(50% - 80% / 2);
        left: calc(50% - 80% / 2);
        transform-origin: calc(50% - 200px);
        animation: moveHorizontal 40s ease infinite;
        opacity: 0.7;
    `,
    g5: css`
        position: absolute;
        background: radial-gradient(circle at center, ${token.orange} 0, transparent 50%) no-repeat;
        mix-blend-mode: hard-light;
        width: calc(80% * 2);
        height: calc(80% * 2);
        top: calc(50% - 80%);
        left: calc(50% - 80%);
        transform-origin: calc(50% - 800px) calc(50% + 200px);
        animation: moveInCircle 20s ease infinite;
        opacity: 1;
    `,
    interactive: css`
        position: absolute;
        background: radial-gradient(circle at center, ${token.purple} 0, transparent 50%) no-repeat;
        mix-blend-mode: hard-light;
        width: 100%;
        height: 100%;
        top: -50%;
        left: -50%;
        opacity: 0.7;
    `

}))

export function GradientLightSpot() {
    const {styles} = useStyles()
    const [curX, setCurX] = useState(0)
    const [curY, setCurY] = useState(0)
    const [tgX, setTgX] = useState(0)
    const [tgY, setTgY] = useState(0)
    useEffect(() => {

        // const move = () => {
        //     console.log(curX, curY, tgX, tgY)
        //     setCurX(curX + ((tgX - curX) / 20))
        //     setCurY(curY + ((tgY - curY) / 20))
        //     requestAnimationFrame(move)
        // }

        window.addEventListener('mousemove', event => {

            setTgX(() => 222)
            setTgY(event.clientY)
            console.log(event.clientX, event.clientY, tgX, tgY)
        })
        //move()
    }, [])
    return <div className={styles['gradientBg']}>

        <svg
            viewBox="0 0 100vw 100vw"
            xmlns="http://www.w3.org/2000/svg"
            className={styles["noiseBg"]}
        >
            <filter id="noiseFilterBg">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.6"
                    stitchTiles="stitch"/>
            </filter>

            <rect
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                filter="url(#noiseFilterBg)"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles["svgBlur"]}>
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                                   result="goo"/>
                    <feBlend in="SourceGraphic" in2="goo"/>
                </filter>
            </defs>
        </svg>
        <div className={styles['gradientsContainer']}>
            <div className={styles["g1"]}></div>
            <div className={styles["g2"]}></div>
            <div className={styles["g3"]}></div>
            <div className={styles["g4"]}></div>
            <div className={styles["g5"]}></div>
            <div className={styles["interactive"]}
                 style={{transform: `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`}}
            ></div>
        </div>
    </div>
}