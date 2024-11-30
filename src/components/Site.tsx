import { Accessor } from "solid-js";

export default function SiteIframe({ year }: { year: Accessor<string> }) {
    return <iframe
        src={`https://adventofcode.com/${year()}`}
        style={{ height: '100vh' }}
    ></iframe>
}
