'use client'
import {useEffect, useRef} from 'react'
import p5 from "p5"

interface GlobalBgProps {
    type: 'GrandLightSpot' | 'AcousticWave'
}

export function GlobalBg(props: GlobalBgProps = {
    type: 'GrandLightSpot',
}) {
    const bgContainer = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!bgContainer?.current) return
        let pointSpacing = 24
        let waveAmplitude = 6
        let waveFrequency = 200
        let sketch = (p: any) => {
            let fillColor = p.color(71, 85, 105); // 初始填充颜色为紫色，可以根据需要修改
            p.setup = () => {
                let canvas = p.createCanvas((bgContainer?.current as HTMLDivElement).offsetWidth, (bgContainer?.current as HTMLDivElement).offsetHeight);
                canvas.parent(bgContainer?.current);
            }
            p.draw = () => {
                p.background(255)
                p.fill(fillColor)
                for (let x = 0; x < p.width; x += pointSpacing) {
                    for (let y = 0; y < p.height; y += pointSpacing) {
                        let waveOffset = p.sin(x * waveFrequency + p.frameCount * 0.03) * waveAmplitude
                        p.ellipse(x, y + waveOffset, 0.5, 0.5)
                    }
                }
            }
        }
        new p5(sketch)
    }, [])
    return <div ref={bgContainer} style={{position: 'fixed', width: '100%', height: '100%', zIndex: -1}}
                id={'global-bg'}></div>
}