import { BuiltInPageProps } from '../../myutils/ordinary-page-props';
import Whatever from '../../components/whatever/whatever.component';

const MyPage = ({ params }: BuiltInPageProps): React.JSX.Element => {
    const myDate = new Date(Date.now()).toLocaleString("en-US");
    const current_path_to_display = JSON.stringify(params);
    return (
        <>
            <section data-testid="mypage-section">
                <h1>Header goes here</h1>
                <p>Hello, world!  {myDate} is the current date and time.</p>
                <Whatever />
                <p>I hope you find some text HERE→→ {current_path_to_display} ←←THERE.</p>
            </section>
        </>
    )
}

export default MyPage;