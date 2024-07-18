import ContactImg from './assets/contact.png'

function ContactMe() {
    return (
        <section className="sm:p-10 p-5" id="Contact">
            <div className="basis-1/2 h-100 space-y-2">
                <div>
                    <h1 className="text-2xl font-bold text-purple-600 sm:text-center">Contact Me</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:place-items-center">
                    <div>
                        <div className="flex flex-wrap gap-2">
                            <div className="flex flex-col w-full">
                                <label htmlFor="name" className="leading-8">Your Name</label>
                                <input type="text" id="name" className="px-5 py-3 rounded-md border border-zinc-700 text-sm w-full max-w-xl" placeholder="John Doe" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="email" className="leading-8">Email</label>
                                <input type="text" id="email" className="px-5 py-3 rounded-md border border-zinc-700 text-sm w-full max-w-xl" placeholder="johndoe@gmail.com" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-3">
                            <div>
                                <label htmlFor="message" className="leading-8">Message</label>
                                <textarea name="message" className="px-5 py-3 rounded-md border border-zinc-700 text-sm w-full max-w-xl" rows={5} id="message"></textarea>
                            </div>
                            <div>
                                <button type="#" className='py-3 px-5 bg-purple-600 rounded-md text-zinc-200 hover:bg-purple-700 hover:text-zinc-100'>Send</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full hidden sm:block'>
                        <img src={ContactImg} className='w-[400px]' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe