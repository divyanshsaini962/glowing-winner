"use client";

import { useState, useEffect } from "react";

export default function SiteForSalePopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if popup was previously closed
        const hasClosedPopup = localStorage.getItem("siteForSalePopupClosed");

        if (!hasClosedPopup) {
            // Show popup after 60 seconds
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 60000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem("siteForSalePopupClosed", "true");
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999] flex items-center justify-center px-4 animate-in fade-in duration-500">
            <div className="bg-white rounded-3xl p-8 shadow-xl max-w-md w-full relative">
                {/* Gradient Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 w-full bg-gradient-to-r from-[#C7B9FF] via-[#5B6EE1] to-[#FFD9C8] rounded-t-3xl" />

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-50"
                    aria-label="Close popup"
                >
                    ✕
                </button>

                {/* Content */}
                <div className="text-center mt-2">
                    <h2 className="text-2xl font-bold text-slate-900">
                        This website is for sale
                    </h2>
                    <p className="mt-3 text-slate-600">
                        If you are interested in acquiring this project or domain, please feel
                        free to reach out.
                    </p>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col gap-3">
                    <a
                        href="https://www.linkedin.com/in/divyanshu-saini-8ab623231/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-[#5B6EE1] text-white rounded-full px-4 py-2.5 text-sm font-semibold hover:bg-[#4a5fd4] transition-colors shadow-md shadow-[#5B6EE1]/20"
                    >
                        Contact via LinkedIn
                    </a>

                    <a
                        href="mailto:divyanshu@sainistudio.com"
                        className="inline-flex items-center justify-center border border-slate-300 text-slate-700 rounded-full px-4 py-2.5 text-sm font-semibold hover:bg-slate-50 transition-colors"
                    >
                        Send an Email
                    </a>

                    <a
                        href="https://www.instagram.com/a_divyansh.saini/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-[#FFD9C8] to-[#C7B9FF] text-slate-900 rounded-full px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
                    >
                        DM on Instagram
                    </a>
                </div>
            </div>
        </div>
    );
}
