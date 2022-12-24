import {
    BellOutlined,
    LaptopOutlined,
    NotificationOutlined,
    // SearchOutlined,
    // ArrowRightOutlined,
    // UserOutlined,
    // RightOutlined,
    // LeftOutlined,
    // UpOutlined,
    // DownOutlined,
    // LogoutOutlined,
    SettingOutlined,
} from "@ant-design/icons";

export const MENUITEMS = [
    {
        // menutitle: "MAIN",
        Items: [
            {
                path: `/communication`,
                icon: BellOutlined,
                type: "link",
                active: false,
                selected: false,
                title: "Communication",
            },
            {
                title: "Setup",
                icon: LaptopOutlined,
                type: "sub",
                active: false,
                selected: false,
                children: [
                    {
                        path: `/first`,
                        type: "link",
                        icon: NotificationOutlined,
                        active: false,
                        selected: false,
                        title: "adnan",
                    },
                    {
                        path: `/second/first`,
                        type: "link",
                        icon: SettingOutlined,
                        active: false,
                        selected: false,
                        title: "waqar",
                    }
                ],
            },


            {
                title: "New setup",
                icon: LaptopOutlined,
                type: "sub",
                active: false,
                selected: false,
                children: [
                    {
                        path: `/first`,
                        type: "link",
                        icon: NotificationOutlined,
                        active: false,
                        selected: false,
                        title: "adnan",
                    },
                    {
                        path: `/second/first`,
                        type: "link",
                        icon: SettingOutlined,
                        active: false,
                        selected: false,
                        title: "waqar",
                    }
                ],
            },
        ],
    },
];
