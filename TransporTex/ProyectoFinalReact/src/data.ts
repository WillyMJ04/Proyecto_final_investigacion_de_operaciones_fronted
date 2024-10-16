

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Proveedores",
        url: "/providers",
        icon: "post.svg",
      },
      {
        id: 5,
        title: "Conductores",
        url: "/drivers",
        icon: "job.svg",
      },
    ],
  },

  {
    id: 3,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "#",
    username: "oscar",
    email: "oscar@gmail.com",
    amount: "2.00",
  },
  {
    id: 2,
    img: "#",
    username: "enrique",
    email: "oscar@gmail.com",
    amount: "2.00",
  },
  {
    id: 3,
    img: "#",
    username: "carlos",
    email: "oscar@gmail.com",
    amount: "2.00",
  },
  {
    id: 4,
    img: "#",
    username: "jose",
    email: "oscar@gmail.com",
    amount: "2.00",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Tolta Users",
  number: "11",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "WEd", users: 400 },
    { name: "Thur", users: 400 },
    { name: "Sat", users: 100 },
    { name: "Sun", users: 300 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "WEd", products: 700 },
    { name: "Thur", products: 400 },
    { name: "Sat", products: 200 },
    { name: "Sun", products: 300 },
  ],
};

export const chartBoxRevenue = {
  color: "gold",
  icon: "/userIcon.svg",
  title: "Total revenue",
  number: "2.6",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "WEd", revenue: 700 },
    { name: "Thur", revenue: 400 },
    { name: "Sat", revenue: 200 },
    { name: "Sun", revenue: 300 },
  ],
};

export const chartBoxConversion = {
  color: "gold",
  icon: "/userIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "WEd", ratio: 700 },
    { name: "Thur", ratio: 400 },
    { name: "Sat", ratio: 200 },
    { name: "Sun", ratio: 300 },
  ],
};

export const barChartBoxRevenue = {
  title: "Total Profit",
  color: "#FF8042",
  dataKey: "profit",
  chartData: [
    { name: "Sun", profit: 2000 },
    { name: "Mon", profit: 3000 },
    { name: "Tue", profit: 4000 },
    { name: "Wed", profit: 2000 },
    { name: "Thu", profit: 1000 },
    { name: "Fri", profit: 2000 },
    { name: "Sat", profit: 3000 },
  ],
};
export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    { name: "Sun", visit: 2000 },
    { name: "Mon", visit: 3000 },
    { name: "Tue", visit: 4000 },
    { name: "Wed", visit: 2000 },
    { name: "Thu", visit: 1000 },
    { name: "Fri", visit: 2000 },
    { name: "Sat", visit: 3000 },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "#",
    lastName: "Gross",
    firstName: "JOse",
    email: "oscar@gmail.com",
    phone: "5646481",
    createdAt: "01/02/2023",
  },
  {
    id: 2,
    img: "#",
    lastName: "Gross",
    firstName: "Albert",
    email: "oscar@gmail.com",
    phone: "5646481",
    createdAt: "01/02/2023",
  },
  {
    id: 3,
    img: "#",
    lastName: "Gross",
    firstName: "Pedro",
    email: "oscar@gmail.com",
    phone: "5646481",
    createdAt: "01/02/2023",
  },
  {
    id: 4,
    img: "#",
    lastName: "Gross",
    firstName: "OscMar",
    email: "oscar@gmail.com",
    phone: "5646481",
    createdAt: "01/02/2023",
  },
  {
    id: 5,
    img: "#",
    lastName: "Gross",
    firstName: "marcos",
    email: "oscar@gmail.com",
    phone: "5646481",
    createdAt: "01/02/2023",
  },
  {
    id: 6,
    img: "#",
    lastName: "Gross",
    firstName: "maria",
    email: "oscar@gmail.com",
    phone: "5646481",
    createdAt: "01/02/2023",
  },
];

export const productRows = [
    {
        id:1,
        img:"#",
        title:"Acer Laptop",
        color: "black",
        producer: "Acer",
        price: "200",
        createAt:"08.10.2024"
    },
    {
        id:2,
        img:"#",
        title:"Acer Tv",
        color: "black",
        producer: "Acer",
        price: "200",
        createAt:"08/10/2024"
    },
    {
        id:3,
        img:"#",
        title:"Acer Tip",
        color: "black",
        producer: "Acer",
        price: "200",
        createAt:"08/10/2024"
    }
]

export const singleUser ={
    id:1,
    title:"John Doe",
    img:"#",
    info:{
        userName: "Johndoe 99",
        fullName: "Jhon Doe",
        email:"johndoe@gmail.com",
        phone:"123456",
        status: "verified",
    },
    chart : {
        dataKeys: [
            {name: "visits", color: "#82ca9d"},
            {name: "clicks", color: "#8884d8"},
        ],
        data:[
            {
                name:"sun",
                visits:1500,
                clicks: 6000,
            },
            {
                name:"Mon",
                visits:3000,
                clicks: 2000,
            },
            {
                name:"Tues",
                visits:1000,
                clicks: 5000,
            },
        ]
    },
    activities:[
        {
            text:"Jhon doe purchase play 6",
            time:"I "
        },
        {
            text:"Jhon doe purchase play 7",
            time:"I week "
        },
        {
            text:"Jhon doe purchase play 5",
            time:"I week ago"
        }
    ]
}
export const singleProduct = {
    id:1,
    title:"Play 5",
    img:"#",
    info:{
        productId:"1234567",
        color:"white",
        price:"200",
        producer:"sony",
        export:"japan",
    },
    chart:{
        dataKeys:[
            {name:"visits", color:"#82ca9d"},
            {name:"orders", color:"#82ca9d"}
        ], 
        data:[
            {
                name:"sun",
                visits:3000,
                orders:2400,
            },
            {
                name:"mon",
                visits:4000,
                orders:2400,
            },
            {
                name:"tue",
                visits:1000,
                orders:2400,
            },
        ],
    },

    activities:[
        {
            text:"Jhon doe purchase play 6",
            time:"I week ago"
        },
        {
            text:"Jhon doe purchase play 7",
            time:"I week ago"
        },
        {
            text:"Jhon doe purchase play 5",
            time:"I week ago"
        }
    ]
}

export const singleOrder = {

}