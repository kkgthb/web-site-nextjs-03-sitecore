import React from "react"
import { SitecorePageProps } from "../myutils/sc-page-props";
import {
    ComponentPropsContext,
    SitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import useFormattedDate from "../myutils/get-hydration-friendly-datestamp";

const MyPage = (myPageProps: SitecorePageProps): React.JSX.Element => {
    const myDate = useFormattedDate(Date.now());
    const current_path_to_display = JSON.stringify("CURRENT_PATH_PLACEHOLDER");
    return (
        <ComponentPropsContext value={null}>
            <SitecoreContext componentFactory={null}>
                <React.Fragment>
                    <h1>Header goes here</h1>
                    <p>Hello, world!  {myDate} is the current date and time.</p>
                    <p>I hope you find some text HERE→→ {current_path_to_display} ←←THERE.</p>
                </React.Fragment>
            </SitecoreContext>
        </ComponentPropsContext>
    );
}

export default MyPage;