import { 
    AlertDialog, 
    AlertDialogTrigger, 
    AlertDialogContent, 
    AlertDialogHeader, 
    AlertDialogTitle, 
    AlertDialogDescription, 
    AlertDialogFooter, 
    AlertDialogCancel, 
    AlertDialogAction } from "@/components/ui/alert-dialog"
import { ToolTip } from "./tooltip"
import { Circle, Cone } from "lucide-react"
import { useState, useEffect } from "react"
import UserContextForm from "./user-context-form"
export const UserContextComponent = () => {
  const [showContextComponent, setShowContextComponent] = useState(true);

  useEffect(() => {
    const hasSeenContext = localStorage.getItem('hasSeenContext');
    if (!hasSeenContext) {
      setShowContextComponent(true);
      localStorage.setItem('hasSeenContext', 'true');
    }
  }, []);

    return (
        <AlertDialog defaultOpen={true}>
              <AlertDialogTrigger asChild>
                <button className="text-gray-400 hover:text-white" onClick={() => setShowContextComponent(true)}>
                  <ToolTip name="User Context">
                    <Cone className='text-black size-5'/>
                  </ToolTip>
                </button>
              </AlertDialogTrigger>

              {showContextComponent && (
                <AlertDialogContent className='bg-[#262626] w-full max-w-3xl'>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      <div className='flex items-center justify-between gap-2'>
                        <div className='flex items-center gap-2'>
                          <p>User Context</p>
                          <Cone className='text-white size-5'/>
                        </div>
                        <div className='cursor-pointer' onClick={() => setShowContextComponent(false)}>
                          X
                        </div>
                      </div>
                    </AlertDialogTitle>
                      <AlertDialogDescription>
                        <div className='flex items-center gap-2'>
                          <Circle className='text-green-500 fill-green-500 size-1.5'/>
                          <p>The more context you provide, the more our AI Agents can help you.</p>
                        </div>
                      </AlertDialogDescription>
                  </AlertDialogHeader>
                    <UserContextForm setShowComponent={setShowContextComponent}/>    
                </AlertDialogContent>
              )}
            </AlertDialog>
    )
}
