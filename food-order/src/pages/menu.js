import React from 'react';

import { Data } from "../data/data"
import MenuItem from "../components/menuItem"
import "../style/menu.css"

const Menu = () => {
    return (
        <div className={"menu"}>
            <div className={"menuTitle"}>
                <h1>Our Products</h1>
                <div className={"menuList"}>
                    {Data.map((menuItem, key) => {
                        return(
                            <MenuItem
                                key={key}
                                image={menuItem.image}
                                name={menuItem.name}
                                price={menuItem.price }
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Menu;