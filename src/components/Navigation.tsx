import {
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@suid/material";
import { DrawerProps } from "@suid/material/Drawer";
import { Setter } from "solid-js";
import { createMutable } from "solid-js/store";

type Anchor = NonNullable<DrawerProps["anchor"]>;

export function YearNavigationDrawer({ setYear }: { setYear: Setter<string> }) {
    const state = createMutable<{
        [K in Anchor]: boolean;
    }>({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) => (event: MouseEvent | KeyboardEvent) => {
            if (event.type === "keydown") {
                const keyboardEvent = event as KeyboardEvent;
                if (keyboardEvent.key === "Tab" || keyboardEvent.key === "Shift")
                    return;
            }
            state[anchor] = open;
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 200 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {["2021", "2022", "2023", "2024"].reverse().map((text, _) => (
                    <ListItem disablePadding>
                        <ListItemButton onClick={(e) => { e.preventDefault(); setYear(text) }}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div
            style={{ display: 'flex', "justify-content": 'start' }}
        >
            <Button onClick={toggleDrawer("left", true)}
            >Select Year</Button>
            <Drawer
                anchor={"left"}
                open={state["left"]}
                sx={{ zIndex: 9999 }}
                onClose={toggleDrawer("left", false)}
            >
                {list("left")}
            </Drawer>
        </div>
    );
}
