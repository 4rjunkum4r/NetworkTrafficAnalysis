import { tokens } from "../theme";

export const mockTraffic = [
  {
    txId: "01e4dsa",
    user: "11916159",
    date: "2021-09-01 10:24 PM",
    usage: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "11907201",
    date: "2021-09-01 10:00 PM",
    usage: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "12207242",
    date: "2021-09-01 9:24 PM",
    usage: "43.95",
  },
  {
    txId: "51034szv",
    user: "12202356",
    date: "2021-09-01 9:24 PM",
    usage: "200.95",
  },
  {
    txId: "0a123sb",
    user: "11912345",
    date: "2021-09-01 9:24 PM",
    usage: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "12210121",
    date: "2021-09-01 9:24 PM",
    usage: "43.95",
  },
  {
    txId: "120s51a",
    user: "12212122",
    date: "2021-09-01 9:24 PM",
    usage: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "12222211",
    date: "2021-09-01 10:24 PM",
    usage: "133.45",
  },
  {
    txId: "0315dsaa",
    user: "12301202",
    date: "2021-09-01 10:24 PM",
    usage: "133.45",
  },
  {
    txId: "0315dsaa",
    user: "12345678",
    date: "2021-09-01 10:24 PM",
    usage: "133.45",
  },
  {
    txId: "0315dsaa",
    user: "11287653",
    date: "2021-09-01 10:24 PM",
    usage: "133.45",
  },
  {
    txId: "0315dsaa",
    user: "12239384",
    date: "2021-09-01 10:24 PM",
    usage: "133.45",
  },
];

export const mockBarData = [
  {
    registrationNumber: "11916159",
    morning: 137,
    morningColor: "hsl(229, 70%, 50%)",
    afternoon: 96,
    afternoonColor: "hsl(296, 70%, 50%)",
    night: 140,
    nightColor: "hsl(340, 70%, 50%)",
  },
  {
    registrationNumber: "12210121",
    morning: 55,
    morningColor: "hsl(307, 70%, 50%)",
    afternoon: 28,
    afternoonColor: "hsl(111, 70%, 50%)",
    night: 29,
    nightColor: "hsl(275, 70%, 50%)",
  },
  {
    registrationNumber: "12239384",
    morning: 109,
    morningColor: "hsl(72, 70%, 50%)",
    afternoon: 23,
    afternoonColor: "hsl(96, 70%, 50%)",
    night: 152,
    nightColor: "hsl(256, 70%, 50%)",
  },
  {
    registrationNumber: "11287653",
    morning: 133,
    morningColor: "hsl(257, 70%, 50%)",
    afternoon: 52,
    afternoonColor: "hsl(326, 70%, 50%)",
    night: 83,
    nightColor: "hsl(9, 70%, 50%)",
  },
  {
    registrationNumber: "11912345",
    morning: 81,
    morningColor: "hsl(190, 70%, 50%)",
    afternoon: 80,
    afternoonColor: "hsl(325, 70%, 50%)",
    night: 35,
    nightColor: "hsl(285, 70%, 50%)",
  },
  {
    registrationNumber: "11907201",
    morning: 66,
    morningColor: "hsl(208, 70%, 50%)",
    afternoon: 111,
    afternoonColor: "hsl(334, 70%, 50%)",
    night: 18,
    nightColor: "hsl(76, 70%, 50%)",
  },
  {
    registrationNumber: "122393843",
    morning: 80,
    morningColor: "hsl(87, 70%, 50%)",
    afternoon: 47,
    afternoonColor: "hsl(141, 70%, 50%)",
    night: 49,
    nightColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "Over 1000 MB",
    label: "Over 1000 MB",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "750-1000 MB",
    label: "750-1000 MB",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "500-750 MB",
    label: "500-750 MB",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "250-500 MB",
    label: "250-500 MB",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "0-250 MB",
    label: "0-250 MB",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "Morning Slot",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "11916159",
        y: 200,
      },
      {
        x: "11907201",
        y: 75,
      },
      {
        x: "12207242",
        y: 36,
      },
      {
        x: "12202356",
        y: 216,
      },
      {
        x: "11912345",
        y: 35,
      },
      {
        x: "12210121",
        y: 236,
      },
      {
        x: "12212122",
        y: 88,
      },
      {
        x: "12222211",
        y: 232,
      },
      {
        x: "12301202",
        y: 281,
      },
      {
        x: "12345678",
        y: 1,
      },
      {
        x: "11287653",
        y: 35,
      },
      {
        x: "12239384",
        y: 14,
      },
    ],
  },
  {
    id: "Afternoon Slot",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "11916159",
        y: 212,
      },
      {
        x: "11907201",
        y: 190,
      },
      {
        x: "12207242",
        y: 270,
      },
      {
        x: "12202356",
        y: 9,
      },
      {
        x: "11912345",
        y: 75,
      },
      {
        x: "12210121",
        y: 175,
      },
      {
        x: "12212122",
        y: 33,
      },
      {
        x: "12222211",
        y: 189,
      },
      {
        x: "12301202",
        y: 97,
      },
      {
        x: "12345678",
        y: 87,
      },
      {
        x: "11287653",
        y: 299,
      },
      {
        x: "12239384",
        y: 251,
      },
    ],
  },
  {
    id: "Night Slot",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "11916159",
        y: 191,
      },
      {
        x: "11907201",
        y: 136,
      },
      {
        x: "12207242",
        y: 91,
      },
      {
        x: "12202356",
        y: 190,
      },
      {
        x: "11912345",
        y: 211,
      },
      {
        x: "12210121",
        y: 152,
      },
      {
        x: "12212122",
        y: 189,
      },
      {
        x: "12222211",
        y: 152,
      },
      {
        x: "12301202",
        y: 8,
      },
      {
        x: "12345678",
        y: 197,
      },
      {
        x: "11287653",
        y: 107,
      },
      {
        x: "12239384",
        y: 170,
      },
    ],
  },
];