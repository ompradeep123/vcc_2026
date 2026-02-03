"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer-premium"
import { motion } from "framer-motion"
import { Activity, Zap, Trophy, Users, ChevronDown, Cpu, Globe, Infinity as InfinityIcon } from "lucide-react"

export default function Vibathon() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-gradient-to-br from-emerald-500/10 via-background to-teal-500/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="mb-6 flex justify-center">
                            <Activity className="w-16 h-16 text-emerald-500 animate-pulse" />
                        </div>
                        <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-balance">
                            Vibe<span className="text-emerald-500">athon</span>
                        </h1>
                        <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
                            The Ultimate <span className="text-emerald-500 font-bold">Vibe Coding</span> Experience.
                            Solve real-life problem statements using the power of <span className="text-emerald-400 font-semibold underline decoration-emerald-500/30">AI-Augmented Coding</span>.
                            No boundaries, just pure innovation.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.open('https://apps.veltech.edu.in/registration/cybercatalyst/reg/', '_blank')}
                            className="px-8 py-4 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20 mb-12"
                        >
                            Start Vibe Coding
                        </motion.button>

                        {/* Enhanced Complex Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="flex flex-col items-center gap-4 mt-8"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500/60 mb-2">Explore the Challenge</span>

                            <div className="relative flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute w-20 h-20 bg-emerald-500/20 rounded-full blur-xl"
                                />
                                <div className="w-8 h-12 border-2 border-foreground/30 rounded-full flex justify-center p-1.5 relative z-10">
                                    <motion.div
                                        animate={{ y: [0, 20], opacity: [1, 0], scale: [1, 0.8] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-1.5 h-3 bg-emerald-500 rounded-full"
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
                                        <ChevronDown className={`w-6 h-6 ${i === 1 ? 'text-emerald-500/80' : 'text-emerald-500/40'}`} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="p-8 bg-card rounded-2xl border border-emerald-500/10"
                        >
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mx-auto mb-6">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-serif">AI-First Coding</h3>
                            <p className="text-foreground/60 text-sm">Leverage cutting-edge AI tools to accelerate development and solve complex architectural puzzles.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="p-8 bg-card rounded-2xl border border-emerald-500/10"
                        >
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mx-auto mb-6">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-serif">Real-Life Impact</h3>
                            <p className="text-foreground/60 text-sm">Work on genuine industrial and societal problem statements curated from global case studies.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="p-8 bg-card rounded-2xl border border-emerald-500/10"
                        >
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mx-auto mb-6">
                                <InfinityIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-serif">Domain-Agnostic</h3>
                            <p className="text-foreground/60 text-sm">Cross-disciplinary challenges spanning Healthcare, Finance, Security, and more. No domain limits.</p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold mb-6 font-serif">Inter-Domain Synergy</h2>
                            <p className="text-foreground/70 mb-8 leading-relaxed">
                                Vibeathon breaks the traditional silos of hackathons. We provide inter-domain discipline
                                problem statements where your security expertise might protect a medical data stream,
                                or your financial logic could secure a decentralized network.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "AI-Augmented Software Development",
                                    "Cross-Domain Problem Solving",
                                    "Real-World Industrial Challenges",
                                    "Inter-disciplinary Logic Puzzles",
                                    "No Domain Limitation - Pure Innovation",
                                ].map((track, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg group">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                            <Zap className="w-4 h-4" />
                                        </div>
                                        <span className="text-foreground/80">{track}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="p-8 bg-card/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl shadow-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Trophy className="w-8 h-8 text-emerald-500" />
                                    <h3 className="text-2xl font-bold font-serif">Rewards Pool</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex justify-between items-center text-foreground/70 border-b border-border pb-2">
                                        <span>Incubation Support</span>
                                        <span className="font-bold text-emerald-500">Priority Access</span>
                                    </li>
                                    <li className="flex justify-between items-center text-foreground/70 border-b border-border pb-2">
                                        <span>Cash Prizes</span>
                                        <span className="font-bold text-emerald-500">Exciting Packs</span>
                                    </li>
                                    <li className="flex justify-between items-center text-foreground/70">
                                        <span>Certificates</span>
                                        <span className="font-bold text-emerald-500">Global Recognition</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-8 bg-card/50 backdrop-blur-md border border-teal-500/20 rounded-2xl shadow-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="w-8 h-8 text-teal-500" />
                                    <h3 className="text-2xl font-bold font-serif">Participation</h3>
                                </div>
                                <p className="text-foreground/70 leading-relaxed">
                                    Join the Vibeathon on Day 2. Open for students who want to build the future
                                    using AI. Multidisciplinary teams of 1 - 2 members are highly welcomed to
                                    address our inter-domain problem statements.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
