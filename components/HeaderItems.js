function HeaderItems({Icon,title}) {
  return (
    <div className='group flex flex-col items-center cursor-pointer w-10 sm:w-20 hover:text-white'>
        <Icon className="h-6 mb-1 group-hover:animate-bounce"  />
        <p className=" tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
    </div>
  )
}

export default HeaderItems