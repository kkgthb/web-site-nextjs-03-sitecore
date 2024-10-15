import React from "react"
import { SitecorePageProps } from "../lib/sc-page-props";
import {
    ComponentPropsContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

const MyPage = ({
    notFound,
    componentProps,
    layoutData,
    headLinks,
}: SitecorePageProps): React.JSX.Element => {
    return (
        <ComponentPropsContext value={componentProps}>
            <React.Fragment>
                <h1>Header goes here</h1>
                <p>Hello, world!</p>
            </React.Fragment>
        </ComponentPropsContext>
    );
}

export default MyPage;