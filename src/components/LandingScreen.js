import AppContext from "./AppContext";

import { useDarkMode } from "../hooks/useDarkMode";
import { Layout } from "./Layout/Layout";

export const LandingScreen = () => {
    const { darkMode, setDark } = useDarkMode();
    const userInfo = { name: 'Osiris' }

    return (
        <AppContext.Provider value={{ darkMode, setDark, userInfo }}>
            <Layout />
        </AppContext.Provider>
    )
};
