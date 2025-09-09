"use client"
import { useSidebar } from '@/context/SidebarContext';

export default function Sidebar() {
    const { sidebar } = useSidebar();
    return (
        <div className="flex">
          {/* Sidebar */}
          <div
            // state to control width and visibility
            className={`bg-gray-800 text-white 
                        absolute h-lvh transition-all 
                        duration-300 z-50 right-0
                        ${sidebar? 'w-64' : 'w-0 overflow-hidden'
              }`}>
            {/* Sidebar content */}
            <div className="flex flex-col items-center">
            {['Home','Dormitory','Caretakers','Tutors','Bar','Internet','FAQ'].map((l) => (
                <div className="mt-4">
                    <a
                    key={l}
                    href={l === 'Home' ? '/' : `/${l.toLowerCase()}`}
                    className="hover:text-secondary transition">
                    {l}
                    </a>
                </div>
            ))}
            </div>
          </div>
        </div>
    );
};
