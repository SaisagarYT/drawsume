
export const Homepage = () => {
    // const list = [1,2,3,4,5];
  return (
    <section className="w-screen flex-col flex h-screen bg-white shadow rounded-t-2xl">
        <nav className="w-full h-10 bg-(--primary-bg) border border-gray-300">

        </nav>
        <div className="flex h-full w-full">
            <div className="h-full w-8 bg-(--black-bg) border border-gray-300">

            </div>
            <div className="w-40 h-full bg-(--gray-light) border border-gray-300">

            </div>
           <div className="w-full h-full flex bg-amber-100 justify-between items-center">
            <div className="flex flex-1 h-full bg-(--secondary-light)">

            </div>
            <div className=" w-60 h-3/4 r rounded-2xl bg-(--primary-bg) shadow">

            </div>
           </div> 
        </div>
    </section>
  )
}
