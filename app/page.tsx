import LoginCard from "@/components/LoginCard";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[url('/bg.jpg')] bg-cover bg-center">
      <div className="pointer-events-none absolute inset-0 bg-black/60" />

      <div className="relative flex min-h-screen items-center justify-center px-4 py-24">
        <LoginCard />
      </div>
    </div>
  );
}