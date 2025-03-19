export interface OpenMenuProps {
    isOpen: boolean;
    setIsOpen?: () => void;
}

export interface OverviewData {
    title: string;
    value: number;
    percentage: number;
    progress: number;
}
