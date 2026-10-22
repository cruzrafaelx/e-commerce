import { useEffect, useState } from "react"

interface TypewriterProps {
    words: string[];
    className?: string;
}

//Types out each word, pauses, deletes it, then moves on to the next one
const Typewriter = ({ words, className }: TypewriterProps) => {

    const [wordIndex, setWordIndex] = useState(0)
    const [text, setText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = words[wordIndex]

        //Word fully typed: wait, then start deleting
        if (!isDeleting && text === currentWord) {
            const pause = setTimeout(() => setIsDeleting(true), 1500)
            return () => clearTimeout(pause)
        }

        //Add or remove one letter
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.slice(0, text.length + 1))
                return
            }

            setText(text.slice(0, -1))

            //Last letter removed: move on to the next word
            if (text.length === 1) {
                setIsDeleting(false)
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length)
            }
        }, isDeleting ? 60 : 120)

        return () => clearTimeout(timeout)
    }, [text, isDeleting, wordIndex, words])

    return (
        <span className={className}>
            {text}
            <span className="animate-pulse">|</span>
        </span>
    )
}

export default Typewriter
