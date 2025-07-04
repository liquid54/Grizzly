'use client';
import { ThemedText } from '@/components/ThemedText';
import { Fragment, useState, type ReactNode } from 'react';
import Pagination from '../pagination/Pagination';
import Link from 'next/link';

interface RowData {
    [key: string]: ReactNode;
}

interface TableProps {
    tableHeader: string[];
    data: RowData[];
    gridTemplateColumns: string;
    indexMobileDismiss?: number[];
    firstRenderElementKeys?: string[];
    pagination?: boolean;
    href?: string;
}

const Table: React.FC<TableProps> = ({
    data,
    tableHeader,
    gridTemplateColumns,
    indexMobileDismiss,
    firstRenderElementKeys,
    pagination = true,
    href,
}) => {
    const [page, setPage] = useState(1);
    const totalPages = 6;

    return (
        <div className='flex flex-col gap-2 w-full items-center'>
            <div className='w-full overflow-x-auto'>
                <div className='hidden md:grid items-center min-w-fit gap-[10px]'>
                    <div
                        className={`grid items-center justify-between gap-4 bg-gray-300 rounded-xl min-h-[42px] px-4 llg:px-[30px] py-2`}
                        style={{
                            gridTemplateColumns,
                        }}
                    >
                        {tableHeader.map((title, i) => (
                            <ThemedText
                                type='panel-table-header'
                                className='text-gray-200 llg:text-brown-100 md:whitespace-nowrap'
                                key={`table-header-${title}-${i}`}
                            >
                                {title}
                            </ThemedText>
                        ))}
                    </div>

                    {data.map((row, rowIndex) => {
                        if (href) {
                            return (
                                <Link
                                    key={`${href}-${rowIndex}`}
                                    href={`${href}${rowIndex}`}
                                >
                                    <Column
                                        row={row}
                                        gridTemplateColumns={
                                            gridTemplateColumns
                                        }
                                    />
                                </Link>
                            );
                        } else {
                            return (
                                <Column
                                    key={rowIndex}
                                    row={row}
                                    gridTemplateColumns={gridTemplateColumns}
                                />
                            );
                        }
                    })}
                </div>
                {/* Mobile */}
                <div className='md:hidden flex flex-col gap-[10px]'>
                    {data.map((row, rowIndex) => {
                        return (
                            <div
                                key={rowIndex}
                                className='flex flex-col gap-[10px] rounded-xl border border-white-200 p-[15px]'
                            >
                                {Object.keys(row).map((key, i) => {
                                    if (indexMobileDismiss?.includes(i)) return;

                                    const value = row[key];
                                    const isNode = typeof value === 'object';

                                    let left: ReactNode = (
                                        <ThemedText
                                            type='panel-table-header'
                                            className='text-gray-200 capitalize'
                                        >
                                            {key}
                                        </ThemedText>
                                    );

                                    let right = isNode ? (
                                        (value as ReactNode)
                                    ) : (
                                        <ThemedText
                                            type='panel-table-header'
                                            className='whitespace-nowrap truncate'
                                        >
                                            {value}
                                        </ThemedText>
                                    );

                                    if (
                                        i === 0 &&
                                        firstRenderElementKeys?.length
                                    ) {
                                        left = row[firstRenderElementKeys[0]];
                                        right = row[firstRenderElementKeys[1]];
                                    }

                                    return (
                                        <div
                                            key={`m-card-${key}-${i}`}
                                            className='flex justify-between items-center gap-2'
                                        >
                                            {left}
                                            {right}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
            {pagination && (
                <Pagination
                    totalPages={totalPages}
                    currentPage={page}
                    onPageChange={setPage}
                />
            )}
        </div>
    );
};

export default Table;

interface ColumnType {
    gridTemplateColumns: string;
    row: RowData;
}

const Column = ({ gridTemplateColumns, row }: ColumnType) => {
    return (
        <div
            className='grid gap-4 items-center justify-between rounded-2xl border border-white-200 overflow-hidden px-4 llg:px-[30px] py-[9px] llg:py-[14px]'
            style={{
                gridTemplateColumns,
            }}
        >
            {Object.keys(row).map((key, i) => {
                const value = row[key];
                const isNode = typeof value === 'object';

                if (isNode) {
                    return <Fragment key={`${key}-${i}`}>{value}</Fragment>;
                }
                return (
                    <ThemedText
                        key={`${key}-${i}`}
                        type='panel-table-header'
                        className='whitespace-nowrap max-[1420px]:truncate'
                    >
                        {value}
                    </ThemedText>
                );
            })}
        </div>
    );
};
