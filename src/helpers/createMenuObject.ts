type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if(activeMenu === 'all') {
        returnObject.all = true;
    } else if (activeMenu === 'dog') {
        returnObject.dog = true;
    } else if (activeMenu === 'cat') {
        returnObject.cat = true;        
    } else if (activeMenu === 'fish') {
        returnObject.fish = true;
    }

    return returnObject;
}