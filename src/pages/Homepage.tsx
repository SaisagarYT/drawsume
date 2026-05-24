
export const Homepage = () => {
    const list = [1,2,3,4,5];
  return (
    <div className="w-2/3 h-5/6 bg-white shadow overflow-hidden rounded-t-2xl">
        <div className="w-20 bg-(--black-bg) h-full flex flex-col justify-between">
            <div>
                {
                    list.map((x, i) => (
                        <div key={i} className="text-white">
                            <span className={`w-full flex h-20 ${x === 1 ? 'bg-(--secondary-bg)' : ''} justify-center items-center text-2xl mb-1`}>{x}</span>
                        </div>
                    ))
                }
            </div>
            <span className="w-full flex h-20 justify-center items-center text-2xl mb-1 text-white">6</span>
        </div>
    </div>
  )
}
