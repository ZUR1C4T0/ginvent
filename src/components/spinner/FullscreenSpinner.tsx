export default function FullscreenSpinner() {
    return (
        <div className="w-full min-h-screen flex z-10 bg-black bg-opacity-50">
            <div className="mx-auto my-auto">
                <span
                    id="spinner"
                    className="inline-block w-20 h-20 rounded-full animate-spin"
                ></span>
            </div>
        </div>
    )
}
