export default function Button({ label, disabled=false }: {
    label: string;
    disabled?: boolean;
}) {
    return (
        <button
            className="font-bold py-2 px-4 rounded bg-green-700 outline-rose-700 hover:bg-green-900 cursor-pointer"
            disabled={disabled}
        >
            {label}
        </button>
    )
}