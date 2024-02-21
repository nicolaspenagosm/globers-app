import { Decorator} from "@storybook/react";
import React from "react";


export const withThemeBackground:Decorator = (StoryFn, context) => {
    const {theme} = context.globals;
    const bgColor = theme === "light" ? "#F8F8F8":"#2F2F2F"
    return (<div style={{backgroundColor:bgColor, height:"100%", padding:"15px" }}>
    <StoryFn/>
</div>)
}

