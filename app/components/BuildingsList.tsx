
type BuildingProps = {
    id: string,
    name: string,
    city: string
}

export function BuildingsList({ id, name, city }:  BuildingProps ){
    return (
        <>
            <li className="flex gap-1 items-center">
                <input id={id} type="checkbox" className="cursor-pointer peer" />
                <label htmlFor={id} className="peer-checked:line-through peer-checked:text-red-800">
                    {name} from { city }
                </label>
            </li>
        </>
    )
}