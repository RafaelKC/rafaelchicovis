import React from "react";

export function Backgroud(props: { children: React.ReactElement | React.ReactElement[] }) {
    return (
        <div className="min-h-screen text-zinc-900 p-8 from-gray-900 to-gray-600 bg-gradient-to-r">
            <div className="bg-slate-100 mx-auto rounded-xl shadow-sm border border-black/20">
                {props.children}
            </div>
        </div>
    )
}