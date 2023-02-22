import { MainMenuItem } from 'interfaces/Menu';
import { v4 as uuid } from 'uuid';

export const mapMainMenuItems = (mainMenuItems: MainMenuItem[]) => {
    return mainMenuItems.map((menuItem) => ({
        id: uuid(),
        destination: menuItem.menuItem.destination?.uri,
        label: menuItem.menuItem.label,
        subMenuItems: (menuItem.items || []).map((subMenuItem) => ({
            id: uuid(),
            destination: subMenuItem.destination?.uri,
            label: subMenuItem.label,
        })),
    }));
};
