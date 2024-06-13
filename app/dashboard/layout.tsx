import SideNav from "../ui/dashboard/sidenav";

export default function LayoutDashboard({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
          <div className=" flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav/>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </div>
            
           
          </div> 
        <div>
              <footer className='py-3 flex justify-center items-center bg-gray-300'>
              esto es parte del dashboard para las subpaginas de dashboard
            </footer>
        </div>
        </div>
        
        
    )
  }