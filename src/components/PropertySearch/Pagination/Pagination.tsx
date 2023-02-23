import { Properties } from 'interfaces/Properties';
import React from 'react';
interface Pagination {
    totalPages: number;
}
const Pagination: React.FC<Pagination> = ({ totalPages }) => {
    return (
        <React.Fragment>
            <div className="max-w-5xl mx-auto mb-10 flex justify-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <div
                        key={i}
                        className="btn"
                        // style={{ background: '#202020' }}
                    >
                        {i + 1}
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};
export default Pagination;
