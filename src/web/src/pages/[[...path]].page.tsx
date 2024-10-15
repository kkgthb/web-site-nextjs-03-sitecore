import React from "react"
import { SitecorePageProps } from "../lib/sc-page-props";
import {
    ComponentPropsContext,
    SitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

const MyPage = ({
    componentProps,
}: SitecorePageProps): React.JSX.Element => {
    return (
        <ComponentPropsContext value={componentProps}>
            <SitecoreContext componentFactory={null}>
                <React.Fragment>
                    <h1>Header goes here</h1>
                    <p>Hello, world!</p>
                </React.Fragment>
            </SitecoreContext>
        </ComponentPropsContext>
    );
}

export default MyPage;