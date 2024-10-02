import {Avatar} from "./Avatar"
import {Navigation} from "./Navigation"

function Header() {
    return (
        <div className={"w-full h-14"}>
            <div className={'w-full h-full relative pl-8 pr-12 flex justify-between items-center'}>
                {/*<div className={'absolute w-full h-full bg-white dark:bg-black -z-50 opacity-40 left-0 top-0'}></div>*/}
                <Avatar></Avatar>
                <Navigation></Navigation>
            </div>
        </div>
    )
}

export {Header}

export default Header
