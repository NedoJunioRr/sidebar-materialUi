import React, {useEffect, useState} from 'react';
import {RouteType} from "../../routes/config";
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import {ExpandLessOutlined, ExpandMoreOutlined} from "@mui/icons-material";
import appRoutes from "../../routes/appRouter";
import SidebarItem from "./SidebarItem";
import {useSelector} from "react-redux";
import {apper} from "../../redux/features/appStateSlice";

type Props = {
    item: RouteType;
}

const SidebarItemCollapse = ({item}: Props) => {
    const [open, setOpen] = useState(false);

    const {apperState} = useSelector(apper);

    useEffect(()=>{
        if(apperState.includes(item.state)){
            setOpen(true)
        }
    },[apperState,item])

    return (
        item.sidebarProps ? (
            <>
                <ListItemButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        "&: hover": {
                            backgroundColor: colorConfigs.sidebar.hoverBg
                        },
                        paddingY: "12px",
                        paddingX: "24px"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            color: colorConfigs.sidebar.color
                        }}
                    >
                        {item.sidebarProps.icon && item.sidebarProps.icon}

                    </ListItemIcon>
                    <ListItemText>
                        <Typography>
                            {item.sidebarProps.displayText}
                        </Typography>
                    </ListItemText>
                    {open ? <ExpandLessOutlined/> : <ExpandMoreOutlined/>}
                </ListItemButton>
                <Collapse in={open} timeout="auto">
                    <List>
                        {item.child?.map((route, index) => (
                            route.sidebarProps ? (
                                route.child ? (
                                        <SidebarItemCollapse item={route} key={index}/>
                                    ) :
                                    <SidebarItem item={route} key={index}/>
                            ) : null
                        ))}
                    </List>
                </Collapse>
            </>
        ) : null
    );
};

export default SidebarItemCollapse;