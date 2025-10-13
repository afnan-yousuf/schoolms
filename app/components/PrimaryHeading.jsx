export default function PrimaryHeading({a}){
    return (
        <>
            <h1 className="text-blue-400 text-2xl">{a ? a : "No value"}</h1>
        </>
    )
}