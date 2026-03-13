"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginCard() {
const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = () => {
// For now, just redirect to the client dashboard
router.replace("/screens/client");
};

return (
<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
    className="relative w-[400px] max-w-full bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-10"
>
    <div className="absolute -top-12 left-1/2 -translate-x-1/2">
    <motion.div
        whileHover={{ scale: 1.08 }}
        className="w-28 h-28 rounded-full overflow-hidden shadow-xl border border-white/30 bg-white/10"
    >
        <img
        src="/Logo.png"
        alt="Logo"
        className="w-full h-full object-cover"
        />
    </motion.div>
    </div>

    <h2 className="text-white text-2xl font-semibold text-center mb-8">
    Welcome Back
    </h2>

    <div className="flex flex-col gap-4">
    <motion.input
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 rounded-xl bg-white/20 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-indigo-300"
    />

    <motion.input
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-3 rounded-xl bg-white/20 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-indigo-300"
    />

    <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleLogin}
        className="mt-2 w-full py-3 bg-indigo-500/95 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-400 transition"
    >
        Sign In
    </motion.button>

    <p className="mt-4 text-center text-sm text-white/70">
        Don&apos;t have an account?{' '}
        <span className="font-semibold text-white cursor-pointer hover:text-indigo-200">
        Sign up
        </span>
    </p>
    </div>
</motion.div>
);
}