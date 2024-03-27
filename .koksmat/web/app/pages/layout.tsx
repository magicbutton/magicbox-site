/* eslint-disable turbo/no-undeclared-env-vars */
import { TopNav } from "../koksmat/components/topnavloader"

export default function JourneyLayoutRoot(props: {
    children: React.ReactNode
    }) {

    
    return (
    <div>
        <TopNav fileRootPath={process.env.KOKSMATROOT ?? "" +"/pages"} rootPath="/pages/"/>
        {props.children}
            
            
        </div>
    )
    }