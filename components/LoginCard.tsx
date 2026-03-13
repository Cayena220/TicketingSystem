"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginCard() {
const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = () => {
// For now, just redirect
router.replace("/superadmin/dashboard");
};

return (
<div className="relative w-[400px] bg-white/20 backdrop-opacity-0-md rounded-2xl shadow-2xl border border-white/30 p-8 pt-20">

    {/* Logo Circle */}
    <div className="absolute -top-16 left-1/2 -translate-x-1/2">
    <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-28 h-28 rounded-full overflow-hidden shadow-lg"
    >
        <img
        src="/Logo.png"
        alt="Logo"
        className="w-full h-full object-cover"
        />
    </motion.div>
    </div>

    <h2 className="text-black text-xl mb-6 font-semibold text-center">
    Sign In
    </h2>

    <div className="flex flex-col gap-4">
    <motion.input
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
        type="text"
        placeholder="Enter Gmail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 rounded-lg bg-white/50 outline-white"
    />

    <motion.input
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-3 rounded-lg bg-white/50 outline-white"
    />

    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLogin}
        className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-00 transition-colors"
    >
        Login
    </motion.button>
    </div>
</div>
);
}