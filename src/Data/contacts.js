const contacts = [
        {
            id: 1,
            name: 'Homero',
            last_time_connected: 'Trabajando en la planta nuclear',
            img: "https://wallpapers.com/images/featured-full/imagenes-divertidas-de-homer-simpson-nv3un39cjzu6qjju.jpg",
            last_message: {
                id: 1,
                text: 'Que tal, tanto tiempo!'
            },
            unread_messages: 1,
            messages: [
                {
                    emisor: 'Homero',
                    hora: '23:10',
                    id: 1,
                    texto: 'Trabajo muy duro, como un esclavo!!!',
                    status: 'visto'
                },
            ]
        },
        {
            id: 2,
            name: 'Milhouse',
            last_time_connected: 'En la escuela',
            img: "https://i.pinimg.com/736x/cd/99/18/cd991826f502ee48035c17c3e5247d24.jpg",
            last_message: {
                id: 1,
                text: 'Que tal, tanto tiempo!'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'Milhouse',
                    hora: '23:11',
                    id: 2,
                    texto: 'Creo que esta con Nelson !!!',
                    status: 'visto'
                },
            ]
        },
        {
            id: 3,
            name: 'Barney',
            last_time_connected: 'En la taberna de Moe',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS07D3YzQJisd5Q5lmvqhXhFIh4tUB5r5YA&s",
            last_message: {
                id: 1,
                text: 'Que tal, tanto tiempo!'
            },
            unread_messages: 20,
            messages: [
                {
                    emisor: 'Barney',
                    hora: '23:12',
                    id: 3,
                    texto: 'Vamos por unas cervezas?',
                    status: 'no-visto'
                },
            ]
        },
        {
            id: 4,
            name: 'Marge',
            last_time_connected: 'Cuidando de mi familia',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpumo1YX2myK24Yk3hn7CHPfPGii-dE77oA&s",
            last_message: {
                id: 1,
                text: 'Que tal, tanto tiempo!'
            },
            unread_messages: 20,
            messages: [
                {
                    emisor: 'Marge',
                    hora: '23:12',
                    id: 3,
                    texto: 'Homero, ve al trabajo !!!',
                    status: 'no-visto'
                },
            ]
        }
    
    ]

export default contacts