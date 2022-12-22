export const MENUITEMS = [
    {
        // menutitle: "MAIN",
        Items: [
            {
                path: `/communication`,
                icon: "ion-chatbubbles",
                type: "link",
                active: false,
                selected: false,
                title: "Communication",
            },
            {
                title: "Setup",
                icon: "fe fe-slack",
                type: "sub",
                Name: "",
                Names: "",
                active: false,
                selected: false,
                children: [
                    {
                        path: `/setup/businesssetup`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: "Business Setup",
                    }
                ],
            },
        ],
    },

];
