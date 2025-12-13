export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <div className="text-xl font-serif font-bold text-navy-blue mb-2">
                        Sara Prosperi
                    </div>
                    <p className="text-sm text-slate-500">
                        Senior IT Delivery Manager & Product Owner
                    </p>
                </div>

                <div className="text-sm text-slate-400">
                    &copy; {new Date().getFullYear()} Sara Prosperi. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
