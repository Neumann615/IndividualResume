import {Avatar} from './Avatar'
import {Navigation} from "./Navigation"

export function Header() {
    return <div className={"w-full p-2 flex justify-between items-center"}>
        <Avatar></Avatar>
        <Navigation></Navigation>
    </div>
}