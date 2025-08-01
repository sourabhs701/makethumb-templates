import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

export function LocalTime() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString("en-AU", {
                timeZone: DATA.timezone || "UTC", // fallback if timezone missing
                hour12: true,
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
            });

            setTime(timeString);
        };

        updateTime(); // Initial call
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!time) return null;

    return (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono font-medium">{time}</span>
            </div>
            <Badge variant="secondary" className="text-xs">
                {DATA.location}
            </Badge>
        </div>
    );
}
