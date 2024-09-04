import { Checkbox } from '@/components/ui/checkbox'
import { CategoryParam } from '@prisma/client'

interface FilterParametersProps {
    options: CategoryParam[]
}

const FilterParameters = ({
    options
} : FilterParametersProps) => {




  return (
    <div className='px-3 gap-2 flex flex-col pt-2'>
        {/* {options.map((option) => (
            <button
                // onClick={setParameter(value)}
            >
                {option.name}
            </button>
        ))} */}
        <div className='gap-2 flex items-center transition-all hover:bg-accent px-2 rounded-md'>
            <Checkbox id='value' className='w-6 h-6 rounded-md'/>
            <label
                    // onClick={setParameter(value)}
                    htmlFor='value'
                    className='select-none py-2 px-1 relative bottom-[1px]'>
                    Управление с телефона
            </label>
        </div>
    </div>
  )
}

export default FilterParameters