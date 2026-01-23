"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer-premium"
import { motion } from "framer-motion"
import { GraduationCap, ShieldCheck, Bug, ChevronDown, Terminal, Search } from "lucide-react"

export default function Workshops() {
    const workshops = [
        {
            title: "Alert to Evidence: Forensics & Incident Response",
            description: "Master the art of digital forensics. Learn how to track attackers, analyze breach evidence, and respond to incidents effectively.",
            icon: Search,
            time: "Day 1 | 1.00 pm - 3.30 pm",
            color: "emerald"
        },
        {
            title: "Bug Bounty Blitz",
            description: "A deep dive into vulnerability hunting. Learn modern bug discovery techniques, reporting, and how to scale your security research.",
            icon: Bug,
            time: "Day 2 | 9.00 am - 12.00 pm",
            color: "blue"
        }
    ]

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-gradient-to-br from-blue-500/10 via-background to-indigo-500/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="mb-6 flex justify-center">
                            <GraduationCap className="w-16 h-16 text-blue-500" />
                        </div>
                        <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-balance">
                            Expert <span className="text-blue-500">Workshops</span>
                        </h1>
                        <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
                            Hands-on sessions led by industry professionals. Gain practical knowledge
                            in forensics, incident response, and bug bounty hunting.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.open('https://apps.veltech.edu.in/registration/cybercatalyst/reg/', '_blank')}
                            className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 mb-12"
                        >
                            Register for Workshops
                        </motion.button>

                        {/* Enhanced Complex Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="flex flex-col items-center gap-4 mt-8"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500/60 mb-2">Explore Sessions</span>

                            <div className="relative flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
                                />
                                <div className="w-8 h-12 border-2 border-foreground/30 rounded-full flex justify-center p-1.5 relative z-10">
                                    <motion.div
                                        animate={{ y: [0, 20], opacity: [1, 0], scale: [1, 0.8] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-1.5 h-3 bg-blue-500 rounded-full"
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
                                        <ChevronDown className={`w-6 h-6 ${i === 1 ? 'text-blue-500/80' : 'text-blue-500/40'}`} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Workshop Cards */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {workshops.map((ws, idx) => {
                            const Icon = ws.icon
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group p-8 bg-card border border-border rounded-2xl hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 font-serif text-foreground group-hover:text-blue-600 transition-colors">
                                        {ws.title}
                                    </h3>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Terminal size={14} className="text-blue-500" />
                                        <span className="text-xs font-bold text-primary uppercase">{ws.time}</span>
                                    </div>
                                    <p className="text-foreground/70 leading-relaxed text-sm">
                                        {ws.description}
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
