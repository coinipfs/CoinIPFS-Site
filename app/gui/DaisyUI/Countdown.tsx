'use client'

export default function Countdown() {
    return (
        <>
            <div className="flex gap-5">
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 46 }}></span>
                    </span>
                    sec
                </div>
            </div>
        </>
    )
}