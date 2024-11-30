import { Accessor, Setter } from "solid-js";
import { YearNavigationDrawer } from "./Navigation";

export function Toolbar({ year, setYear }: { year: Accessor<string>, setYear: Setter<string> }) {
    return <div style={{ position: 'fixed', left: 0, top: 0, right: 0, width: '100%' }}>
        <YearNavigationDrawer setYear={setYear} />
        {year()}
    </div>
}
