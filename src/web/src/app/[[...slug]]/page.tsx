import { BuiltInProps } from '../../myutils/ordinary-page-props';

const MyPage = ({ params }: BuiltInProps): React.JSX.Element => {
    const myDate = new Date(Date.now()).toLocaleString("en-US");
    const current_path_to_display = JSON.stringify(params);
    return (
        <>
            <h1>Header goes here</h1>
            <p>Hello, world!  {myDate} is the current date and time.</p>
            <p>I hope you find some text HERE→→ {current_path_to_display} ←←THERE.</p>
        </>
    )
}

export default MyPage;