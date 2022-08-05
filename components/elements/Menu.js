import { useRecoilState } from 'recoil';
import { sideBarAtom } from '../../context/sideBarAtom';

export default function Menu() {
  const [open, setOpen] = useRecoilState(sideBarAtom);

  return (
    <div
      onClick={() => setOpen(!open)}
      className='relative flex justify-center items-center p-4'>
      <div className='w-7 flex flex-col items-end'>
        <div className={`h-1 transform duration-500 transition-all rounded-full my-0.5 w-full ${open ? 'origin-bottom -rotate-45 translate-y-2 bg-white' : 'bg-blue-900'}`} />
        <div className={`h-1 transform duration-500 transition-all rounded-full my-0.5 w-4/5 bg-blue-900 ${open && 'opacity-0'}`} />
        <div className={`h-1 transform duration-500 transition-all rounded-full my-0.5 ${open ? 'origin-top rotate-45 w-full -translate-y-1.5 bg-white' : 'w-3/5 bg-blue-900'}`} />
      </div>
    </div>
  )
}
