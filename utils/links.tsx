import { AreaChart, Layers, AppWindow } from 'lucide-react';

type NavLink = {
    href: string;
    label: string;
    icon: React.ReactNode;
};

const links: NavLink[] = [
    {
        href: "/addjob",
        label: "Add job",
        icon: <Layers />
    },
    {
        href: "/jobs",
        label: "Jobs",
        icon: <AppWindow />
    },
    {
        href: "/stats",
        label: "Stats",
        icon: <AreaChart />
    },
]

export default links;