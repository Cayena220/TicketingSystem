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
className="relative w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-10"
>
<div className="flex flex-col items-center gap-4 mb-6">
<div className="flex items-center gap-3">
    <motion.div
    whileHover={{ scale: 1.05 }}
    className="w-14 h-14 rounded-full overflow-hidden shadow-xl border border-white/30 bg-white/10"
    >
    <img
        src="/IctdLogo.jpg"
        alt="ICTD Logo"
        className="w-full h-full object-cover"
    />
    </motion.div>
    <motion.div
    whileHover={{ scale: 1.05 }}
    className="w-14 h-14 rounded-full overflow-hidden shadow-xl border border-white/30 bg-white/10"
    >
    <img
        src="/Logo.png"
        alt="App Logo"
        className="w-full h-full object-cover"
    />
    </motion.div>
</div>

<div className="text-white text-2xl font-semibold text-center">
    <h2>Ticketing System</h2>
</div>
</div>

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



</div>
</motion.div>
);
}