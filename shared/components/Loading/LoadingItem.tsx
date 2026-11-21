
import Image from "next/image";

interface LoadingProps {
    text?: string;
}

function LoadingItem({
                     text = "Preparing your experience",
                 }: LoadingProps) {
    return (
        <div
            role="status"
            aria-label="LoadingItem page"
            className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-white"
        >
            <div className="flex flex-col items-center">

                {/* Logo */}
                <div className="mb-10 animate-pulse">
                    <Image
                        src="/image/header/logo/Logo.svg"
                        alt="Luminae"
                        width={175}
                        height={50}
                        priority
                        className="h-auto w-[155px] object-contain sm:w-[175px]"
                    />
                </div>

                {/* Spinner */}
                <div className="relative flex h-12 w-12 items-center justify-center">

                    <div className="absolute inset-0 rounded-full border-[3px] border-slate-100" />

                    <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-slate-800" />

                    <div className="h-2 w-2 rounded-full bg-slate-800" />

                </div>

                {/* LoadingItem Text */}
                <div className="mt-7 flex flex-col items-center gap-3">

                    <p className="text-xs font-medium tracking-wide text-slate-600">
                        {text}
                    </p>

                    {/* Animated Dots */}
                    <div className="flex items-center gap-1.5">
                        {[0, 1, 2].map((item) => (
                            <span
                                key={item}
                                className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"
                                style={{
                                    animationDelay: `${item * 150}ms`,
                                }}
                            />
                        ))}
                    </div>

                </div>

                {/* Bottom Text */}
                <span className="mt-8 text-[9px] font-medium tracking-[3px] text-slate-300">
          LUMINAE STORE
        </span>

            </div>
        </div>
    );
}

export default LoadingItem;
