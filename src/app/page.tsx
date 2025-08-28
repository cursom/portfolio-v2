import Background from "@/app/components/Background"

export default function Page() {
    return (
        <div className="relative min-h-screen flex items-center justify-center p-4 lg:p-6">
            <Background />
            <div className="relative z-10 w-full max-w-5xl mx-auto">
                <h1 className="a">aaa</h1>
            </div>
        </div>
    )
}