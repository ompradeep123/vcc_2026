"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer-premium"
import { motion } from "framer-motion"
import { Gamepad2, Brain, Joystick, Target, Search, Lock, Shield, ChevronDown, HelpCircle, Eye } from "lucide-react"

export default function TechGames() {
    const games = [
        { title: "Data Detectives", icon: Search, desc: "Forensics-based challenge where you track digital footprints.", day: "Day 1", time: "3.30 pm - 4.30 pm" },
        { title: "Logic Links", icon: Lock, desc: "QR code hunt where logic is your only key to progress.", day: "Day 1", time: "3.30 pm - 4.30 pm" },
        { title: "Cyber Sentinels", icon: HelpCircle, desc: "Comprehensive technical quiz testing your security knowledge.", day: "Day 2", time: "1.00 pm - 2.30 pm" },
        { title: "Escape Rooms", icon: Joystick, desc: "Solve puzzles and bypass security to escape the virtual maze.", day: "Day 2", time: "1.00 pm - 2.30 pm" },
        { title: "Log Hunters", icon: Eye, desc: "Analyze and decode system logs to detect stealthy attacks.", day: "Day 2", time: "2.30 pm - 4.00 pm" },
        { title: "Aware Geeks", icon: Shield, desc: "A creative game centered around cybersecurity awareness.", day: "Day 2", time: "2.30 pm - 4.00 pm" }
    ]

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-gradient-to-br from-orange-500/10 via-background to-amber-500/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="mb-6 flex justify-center">
                            <Gamepad2 className="w-16 h-16 text-orange-500 animate-bounce" />
                        </div>
                        <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-balance">
                            Tech <span className="text-orange-500">Games</span>
                        </h1>
                        <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
                            Challenge your instincts! Participate in interactive games designed to test
                            your forensic skills, logic, and cybersecurity awareness.
                        </p>
                        <div className="flex flex-col items-center gap-4 mb-12">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                disabled
                                className="px-8 py-4 bg-orange-500/50 text-white rounded-full font-semibold cursor-not-allowed transition-colors shadow-lg shadow-orange-500/20"
                            >
                                Registration Closed
                            </motion.button>
                            <p className="text-orange-500 font-bold animate-pulse text-sm sm:text-base">See you next year!</p>
                        </div>

                        {/* Enhanced Complex Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="flex flex-col items-center gap-4 mt-8"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500/60 mb-2">Game Library</span>

                            <div className="relative flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute w-20 h-20 bg-orange-500/20 rounded-full blur-xl"
                                />
                                <div className="w-8 h-12 border-2 border-foreground/30 rounded-full flex justify-center p-1.5 relative z-10">
                                    <motion.div
                                        animate={{ y: [0, 20], opacity: [1, 0], scale: [1, 0.8] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-1.5 h-3 bg-orange-500 rounded-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-center -space-y-2 mt-2">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ opacity: [0.2, 1, 0.2], y: [0, 4, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                                    >
                                        <ChevronDown className={`w-6 h-6 ${i === 1 ? 'text-orange-500/80' : 'text-orange-500/40'}`} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Game Categories */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {games.map((game, idx) => {
                            const Icon = game.icon
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-card border border-orange-500/10 rounded-2xl group relative overflow-hidden transition-all hover:border-orange-500/30 shadow-sm hover:shadow-xl"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                                        {game.title}
                                    </h3>
                                    <div className="flex flex-col gap-1 mb-4">
                                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{game.day}</span>
                                        <span className="text-xs font-medium text-foreground/40 italic">{game.time}</span>
                                    </div>
                                    <p className="text-foreground/60 text-sm leading-relaxed">
                                        {game.desc}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
