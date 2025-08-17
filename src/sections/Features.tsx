import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-owen-garcia.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
import Image from "next/image";


const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-center text-6xl font-medium mt-6 lg:text-8xl max-w-2xl mx-auto">
                    Where power meets{" "}
                    <span className="text-lime-400">Simplicity</span>
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Real-time Collaboration"
                        description="Work together seamlessly with conflict-free team editing"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center relative">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="Avatar 1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500">
                                <Image
                                    src={avatar2}
                                    alt="Avatar 2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500">
                                <Image
                                    src={avatar3}
                                    alt="Avatar 3"
                                    className="rounded-full"
                                />
                            </Avatar>

                            <div className="-ml-6 relative w-12 h-12">
                                <div className="relative w-full h-full rounded-full bg-neutral-800 flex items-center justify-center overflow-hidden">
                                    {/* Dots (shown by default) */}
                                    <div className="flex flex-col gap-1.5 group-hover:opacity-0 transition-opacity">
                                        {[1, 2, 3].map((dot) => (
                                            <span
                                                key={dot}
                                                className="w-1 h-1 rounded-full bg-neutral-400 block"
                                            />
                                        ))}
                                    </div>

                                    {/* Avatar Image (hidden by default, shown on hover) */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Image
                                            src={avatar4}
                                            alt="Owen Garcia avatar"
                                            className="rounded-full w-full h-full object-cover"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-neutral-900"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Interactive Prototyping"
                        description="Engage your clients with prototypes that react to user action"
                        className="md:col-span-2 lg:col-span-1 group relative"
                    >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-auto z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <video 
                                src="/assets/gif-incredible.mp4"
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                                className="w-full h-auto rounded-2xl shadow-xl pointer-events-none"
                            />
                        </div>
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                                we&apos;ve achieved{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    incredible
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="Powerful commands to help you create designs more quickly"
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28 outline outline-2 outline-transparent transition-all duration-300 group-hover:outline-lime-400 group-hover:outline-2 group-hover:outline-offset-4 group-hover:-translate-y-1">shift</Key>
                            <Key className="outline outline-2 outline-transparent transition-all duration-300 group-hover:outline-lime-400 group-hover:outline-2 group-hover:outline-offset-4 group-hover:-translate-y-1 group-hover:delay-150">alt</Key>
                            <Key className="outline outline-2 outline-transparent transition-all duration-300 group-hover:outline-lime-400 group-hover:outline-2 group-hover:outline-offset-4 group-hover:translate-y-1 group-hover:delay-300">C</Key>
                        </div>
                    </FeatureCard>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-900 border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 duration-500  group"
                        >
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition  duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
