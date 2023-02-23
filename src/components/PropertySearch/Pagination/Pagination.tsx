import { Properties } from 'interfaces/Properties';
import React from 'react';
interface Pagination {
    totalPages: number;
    onPagination(pageNumber: any): void;
}
const Pagination: React.FC<Pagination> = ({ totalPages, onPagination }) => {
    return (
        <React.Fragment>
            <div className="max-w-5xl mx-auto mb-10 flex justify-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <div
                        key={i}
                        className="btn"
                        onClick={() => onPagination(i + 1)}
                    >
                        {i + 1}
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};
export default Pagination;
