import React from 'react';
import {RouteType} from "../../routes/config";
import {ListItemButton, ListItemIcon} from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { apper} from "../../redux/features/appStateSlice";


type Props = {
    item: RouteType
}

const SidebarItem = ({item}: Props) => {
    const {apperState} = useSelector(apper)
    return (
            item.sidebarProps && item.path ? (
            <ListItemButton
                component = {Link}
                to={item.path}
                sx={{
                    "&: hover":{
                        backgroundColor:colorConfigs.sidebar.hoverBg
                    },
                    backgroundColor: apperState === item.state ? colorConfigs.sidebar.activeBg
                    :"unset",
                    paddingY:"12px",
                    paddingX:"24px"
                }}
            >
                <ListItemIcon
                sx={{
                    color: colorConfigs.sidebar.color
                }}
                >
                    {item.sidebarProps?.icon && item.sidebarProps.icon}

                </ListItemIcon>
                {item.sidebarProps?.displayText}
            </ListItemButton>
            ): null
    );
};

export default SidebarItem;