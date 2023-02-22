import Link from 'next/link';
import React from 'react';
import { Items } from '../../interfaces/Menu';

import ButtonLink from 'components/ButtonLink/ButtonLink';

interface Menu {
    callToActionLabel: string;
    callToActionDestination: string;
    homeLabel: string;
    items: Items[];
}

const MainMenu: React.FC<Menu> = ({
    items,
    callToActionLabel,
    callToActionDestination,
    homeLabel,
}) => {
    /*   const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setScroll(true);
                console.log('more than', scroll);
            } else if (window.scrollY < 20) {
                setScroll(false);
                console.log('less than', scroll);
            }
        });
    }, []); */

    return (
        <React.Fragment>
            <div className="secondary">
                {/* className={scroll ? 'primary' : 'secondary' } */}
                <div className="py-4 flex items-center clss">
                    {/*
                        <FaHome size={30} />
                        <FaHeart size={25} /> 
                        */}
                    <Link href="/">
                        <h1 className="text-xl hover:text-slate-600">
                            <b>{homeLabel}</b>
                        </h1>
                    </Link>
                </div>

                <div className="hidden space-x-2 lg:flex justify-end flex-1">
                    <div className="flex flex-1 justify-end">
                        {(items || []).map((item: Items) => (
                            <div
                                key={item.id}
                                className="hover:bg-slate-100 cursor-pointer relative group"
                            >
                                <div>
                                    <Link href={item.destination}>
                                        <p className="p-5 block">
                                            {item.label}
                                        </p>
                                    </Link>
                                </div>
                                {!!item.subMenuItems?.length && (
                                    <div className=" group-hover:block hidden bg-slate-100 text-right absolute right-0 top-full -mt-3">
                                        {item.subMenuItems.map((s) => {
                                            return (
                                                <Link
                                                    key={s.id}
                                                    href={s.destination}
                                                    className="block whitespace-nowrap p-5 hover:text-slate-400"
                                                >
                                                    {s.label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="ml-3 my-auto">
                        <ButtonLink
                            destination={callToActionDestination}
                            label={callToActionLabel}
                        />
                    </div>
                </div>
                <div className="flex justify-end flex-1 items-center lg:hidden">
                    <div className="space-y-2">
                        <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                        <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                        <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MainMenu;
