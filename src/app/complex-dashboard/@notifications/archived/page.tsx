import Link from "next/link";
import { Card } from "@/components/card";

export default function Archived() {
    return (
        <Card>
            <div>Archived Notifications</div>

            <Link href="/complex-dashboard">Default</Link>
        </Card>
    );
}
