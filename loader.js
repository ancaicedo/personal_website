'use client'

export default function myImageLoader({ src, width, quality }) {
    return `https://andres-caicedo.com/${src}?w=${width}&q=${quality || 75}`
}