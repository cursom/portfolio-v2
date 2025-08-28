"use client"

import { useRef, useLayoutEffect } from "react"

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useLayoutEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const canvas_size = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const dots_b = () => {
            const dots: { x: number; y: number; b: number }[] = []
            for (let x = 40; x < canvas.width; x += 40) {
                for (let y = 40; y < canvas.height; y += 40) {
                    dots.push({ x, y, b: 0.05 })
                }
            }
            return dots
        }

        canvas_size()
        let dots = dots_b()

        let mouseX = 0
        let mouseY = 0

        const cursor_move = (e: MouseEvent) => {
            mouseX = e.clientX
            mouseY = e.clientY
        }

        const resize = () => {
            canvas_size()
            dots = dots_b()
        }

        window.addEventListener("mousemove", cursor_move)
        window.addEventListener("resize", resize)

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            dots.forEach(dot => {
                const dist = Math.hypot(mouseX - dot.x, mouseY - dot.y)
                const targetBrightness = dist < 150 ? 1.2 * (1 - dist / 150) : 0.05
                dot.b += (targetBrightness - dot.b) * 0.15

                ctx.fillStyle = `rgba(255,255,255,${dot.b})`
                ctx.beginPath()
                ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2)
                ctx.fill()
            })

            requestAnimationFrame(render)
        }

        render()

        return () => {
            window.removeEventListener("mousemove", cursor_move)
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (
        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "#0f0f0fff" }}/>
    )
}