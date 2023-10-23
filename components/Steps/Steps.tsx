import { PropsWithChildren } from 'react'

const Steps = (props: PropsWithChildren) => {
    return <div>Steps: {props.children}</div>;
};

export default Steps