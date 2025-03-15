import { ThemedText } from '@/components/ThemedText';
import Image from 'next/image';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({
    totalPages,
    currentPage,
    onPageChange,
}: PaginationProps) => {
    const getPaginationRange = () => {
        const range = [];

        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        // Завжди показуємо першу сторінку
        range.push(1);

        // Якщо поточна сторінка більше 4, додаємо ...
        if (currentPage > 3) range.push('...');

        // Визначаємо початок і кінець діапазону для поточної сторінки
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages, currentPage + 1);

        // Додаємо сторінки від поточної, зліва та справа
        for (let i = start; i <= end; i++) {
            range.push(i);
        }

        // Якщо поточна сторінка не остання або передостання, додаємо ...
        if (currentPage < totalPages - 2) range.push('...');

        return range;
    };

    return (
        <div className='flex items-center gap-1'>
            <button
                className='flex items-center gap-2 p-2 sm:p-4'
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <Image
                    alt='arrow left'
                    src='/icons/chevron.svg'
                    width={9}
                    height={18}
                />
                <ThemedText
                    type='empty'
                    className='hidden min-[360px]:block text-[15px] md:text-[20px] font-semibold leading-none text-blue-100 font-poppins'
                >
                    Previous
                </ThemedText>
            </button>

            {getPaginationRange().map((page, index) =>
                page === '...' ? (
                    <span key={index} className='px-2'>
                        ...
                    </span>
                ) : (
                    <button
                        key={index}
                        className={`h-[32px] w-[32px] sm:h-[40px] sm:w-[40px] flex items-center justify-center rounded-md border text-base md:text-lg font-normal leading-none text-brown-100 font-poppins ${
                            page === currentPage
                                ? 'border-white-200'
                                : 'border-transparent'
                        }`}
                        onClick={() => onPageChange(Number(page))}
                    >
                        {page}
                    </button>
                ),
            )}

            <button
                className='flex items-center gap-2 p-2 sm:p-4'
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <ThemedText
                    type='empty'
                    className='hidden min-[360px]:block text-[15px] md:text-[20px] font-semibold leading-none text-blue-100 font-poppins'
                >
                    Next
                </ThemedText>
                <Image
                    alt='arrow right'
                    src='/icons/chevron.svg'
                    width={9}
                    height={18}
                    className='rotate-180'
                />
            </button>
        </div>
    );
};

export default Pagination;
