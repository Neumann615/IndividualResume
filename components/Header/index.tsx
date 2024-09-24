import {Avatar} from './Avatar'
import {Navigation} from "./Navigation"

export function Header() {
    return <div className={"w-full p-4 flex justify-between items-center "} style={{border: '1px solid red'}}>
        <Avatar></Avatar>
        <Navigation></Navigation>
    </div>
}