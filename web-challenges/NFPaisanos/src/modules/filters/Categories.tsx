import { Chip } from '@/components/common';
import { useSelectedCategory, useSetSelectedCategory } from '@/store/FiltersStore';
import { CATEGORIES } from '@/config/constants';

export default function Categories() {

    const selectedCategory = useSelectedCategory()
    const setSelectedCategory = useSetSelectedCategory()

    const handleClick = (category:string) => {
        setSelectedCategory(category)
    }

    const renderedChips = CATEGORIES.map((category, index) => <Chip onClick={() => {handleClick(category)}} key={index} content={category} active={category === selectedCategory} />)

    return (
        <div className="gap-x-4 flex justify-end">
            {renderedChips}
        </div>
    )
}
