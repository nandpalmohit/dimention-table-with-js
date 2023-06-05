const options = [
  {
    type: "round",
    title: "Round",
    imgSrc: "/assets/round.jpg",
    tableSizes: ["48", "60", "72"],
    tableClothSize: ["70", "90", "108", "120", "132"],
    tableDropSize: {
      70: ["11 drop", "5 drop", "to short"],
      90: ["21 drop", "15 drop", "9 drop"],
      108: ["30 drop", "24 drop", "18 drop"],
      120: ["36 drop", "30 drop", "24 drop"],
      132: ["42 drop", "36 drop", "30 drop"],
    },
    availableOptions: [
      {
        tableSize: "48",
        src: "/assets/round/48-70.png",
        options: ["70", "90", "108", "120", "132"],
        desc: 'A round 48" table with a 70" tablecloth that seats 6 people.',
        data: [
          {
            clothSize: "70",
            src: "/assets/round/48-70.png",
            desc: 'A round 48" table with a 70" tablecloth that seats 6 people.',
          },
          {
            clothSize: "90",
            src: "/assets/round/48-90.png",
            desc: 'A round 48" table with a 90" tablecloth that seats 6 people.',
          },
          {
            clothSize: "108",
            src: "/assets/round/48-108.png",
            desc: 'A round 48" table with a 108" tablecloth that seats 6 people.',
          },
          {
            clothSize: "120",
            src: "/assets/round/48-120.png",
            desc: 'A round 48" table with a 120" tablecloth that seats 6 people.',
          },
          {
            clothSize: "132",
            src: "/assets/round/48-132.png",
            desc: 'A round 48" table with a 132" tablecloth that seats 6 people.',
          },
        ],
      },
      {
        tableSize: "60",
        src: "/assets/round/60-70.png",
        options: ["70", "90", "108", "120", "132"],
        desc: 'A round 60" table with a 70" tablecloth that seats 8 people.',
        data: [
          {
            clothSize: "70",
            src: "/assets/round/60-70.png",
            desc: 'A round 60" table with a 70" tablecloth that seats 8 people.',
          },
          {
            clothSize: "90",
            src: "/assets/round/60-90.png",
            desc: 'A round 60" table with a 90" tablecloth that seats 8 people.',
          },
          {
            clothSize: "108",
            src: "/assets/round/60-108.png",
            desc: 'A round 60" table with a 108" tablecloth that seats 8 people.',
          },
          {
            clothSize: "120",
            src: "/assets/round/60-120.png",
            desc: 'A round 60" table with a 120" tablecloth that seats 8 people.',
          },
          {
            clothSize: "132",
            src: "/assets/round/60-132.png",
            desc: 'A round 60" table with a 132" tablecloth that seats 8 people.',
          },
        ],
      },
      {
        tableSize: "72",
        src: "/assets/round/60-70.png",
        options: ["90", "108", "120", "132"],
        desc: 'A round 72" table with a 70" tablecloth that seats 10 people.',
        data: [
          {
            clothSize: "90",
            src: "/assets/round/72-90.png",
            desc: 'A round 72" table with a 90" tablecloth that seats 10 people.',
          },
          {
            clothSize: "108",
            src: "/assets/round/72-108.png",
            desc: 'A round 72" table with a 108" tablecloth that seats 10 people.',
          },
          {
            clothSize: "120",
            src: "/assets/round/72-120.png",
            desc: 'A round 72" table with a 120" tablecloth that seats 10 people.',
          },
          {
            clothSize: "132",
            src: "/assets/round/72-132.png",
            desc: 'A round 72" table with a 132" tablecloth that seats 10 people.',
          },
        ],
      },
    ],
  },
  {
    type: "square",
    title: "Square",
    imgSrc: "/assets/square.jpg",
    tableSizes: ["48 x 48", "60 x 60", "72 x 72"],
    tableClothSize: ["54 x 54", "60 x 60", "70 x 70", "90 x 90"],
    tableDropSize: {
      "54 x 54": ["3 drop", "to short", "to short"],
      "60 x 60": ["6 drop", "to short", "to short"],
      "70 x 70": ["11 drop", "5 drop", "to short"],
      "90 x 90": ["21 drop", "15 drop", "9 drop"],
    },
    availableOptions: [
      {
        tableSize: "48 x 48",
        src: "/assets/square/48x48-54.png",
        options: ["54 x 54", "60 x 60", "70 x 70", "90 x 90"],
        desc: 'A square 48" x 48" (4 ft) table with a 54" x 54" tablecloth that seats 6 people.',
        data: [
          {
            clothSize: "54 x 54",
            src: "/assets/square/48x48-54.png",
            desc: 'A square 48" x 48" (4 ft) table with a 54" x 54" tablecloth that seats 6 people.',
          },
          {
            clothSize: "60 x 60",
            src: "/assets/square/48x48-60.png",
            desc: 'A square 48" x 48" (4 ft) table with a 60" x 60" tablecloth that seats 6 people.',
          },
          {
            clothSize: "70 x 70",
            src: "/assets/square/48x48-70.png",
            desc: 'A square 48" x 48" (4 ft) table with a 70" x 70" tablecloth that seats 6 people.',
          },
          {
            clothSize: "90 x 90",
            src: "/assets/square/48x48-90.png",
            desc: 'A square 48" x 48" (4 ft) table with a 90" x 90" tablecloth that seats 6 people.',
          },
        ],
      },
      {
        tableSize: "60 x 60",
        src: "/assets/square/48x48-54.png",
        options: ["70 x 70", "90 x 90"],
        desc: 'A square 60" x 60" (5 ft) table with a 70" x 70" tablecloth that seats 8 people.',
        data: [
          {
            clothSize: "70 x 70",
            src: "/assets/square/60x60-70.png",
            desc: 'A square 60" x 60" (5 ft) table with a 70" x 70" tablecloth that seats 8 people.',
          },
          {
            clothSize: "90 x 90",
            src: "/assets/square/60x60-90.png",
            desc: 'A square 60" x 60" (5 ft) table with a 90" x 90" tablecloth that seats 8 people.',
          },
        ],
      },
      {
        tableSize: "72 x 72",
        src: "/assets/square/72x72-90.png",
        options: ["90 x 90"],
        desc: 'A square 72" x 72" (6 ft) table with a 90" x 90" tablecloth that seats 8 people.',
        data: [
          {
            clothSize: "90 x 90",
            src: "/assets/square/72x72-90.png",
            desc: 'A square 72" x 72" (6 ft) table with a 90" x 90" tablecloth that seats 8 people.',
          },
        ],
      },
    ],
  },
  {
    type: "rectangle",
    title: "Rectangle",
    imgSrc: "/assets/rectangle.jpg",
    tableSizes: ["30 x 48", "30 x 72", "30 x 96"],
    tableClothSize: ["60 x 102", "60 x 126", "90 x 132", "90 x 156"],
    tableDropSize: {
      "54 x 54": ["3 drop", "to short", "to short"],
      "60 x 60": ["6 drop", "to short", "to short"],
      "70 x 70": ["11 drop", "5 drop", "to short"],
      "90 x 90": ["21 drop", "15 drop", "9 drop"],
    },
    availableOptions: [
      {
        tableSize: "30 x 48",
        src: "/assets/rectangle/4F-60-102.png",
        options: ["60 x 102", "60 x 126", "90 x 132", "90 x 156"],
        desc: 'A rectangle 30" x 48" (4 ft) table with a 60" x 102" tablecloth that seats 4 people.',
        data: [
          {
            clothSize: "60 x 102",
            src: "/assets/rectangle/4F-60-102.png",
            desc: 'A rectangle 30" x 48" (4 ft) table with a 60" x 102" tablecloth that seats 4 people.',
          },
          {
            clothSize: "60 x 126",
            src: "/assets/rectangle/4F-60-126.png",
            desc: 'A rectangle 30" x 48" (4 ft) table with a 60" x 126" tablecloth that seats 4 people.',
          },
          {
            clothSize: "90 x 132",
            src: "/assets/rectangle/4F-90-132.png",
            desc: 'A rectangle 30" x 48" (4 ft) table with a 90" x 132" tablecloth that seats 4 people.',
          },
          {
            clothSize: "90 x 156",
            src: "/assets/rectangle/4F-90-156.png",
            desc: 'A rectangle 30" x 48" (4 ft) table with a 90" x 156" tablecloth that seats 4 people.',
          },
        ],
      },
      {
        tableSize: "30 x 72",
        src: "/assets/rectangle/6F-60-102.png",
        options: ["60 x 102", "60 x 126", "90 x 132", "90 x 156"],
        desc: 'A rectangle 30" x 72" (6 ft) table with a 60" x 102" tablecloth that seats 6 people.',
        data: [
          {
            clothSize: "60 x 102",
            src: "/assets/rectangle/6F-60-102.png",
            desc: 'A rectangle 30" x 72" (6 ft) table with a 60" x 102" tablecloth that seats 6 people.',
          },
          {
            clothSize: "60 x 126",
            src: "/assets/rectangle/6F-60-126.png",
            desc: 'A rectangle 30" x 72" (6 ft) table with a 60" x 126" tablecloth that seats 6 people.',
          },
          {
            clothSize: "90 x 132",
            src: "/assets/rectangle/6F-90-132.png",
            desc: 'A rectangle 30" x 72" (6 ft) table with a 90" x 132" tablecloth that seats 6 people.',
          },
          {
            clothSize: "90 x 156",
            src: "/assets/rectangle/6F-90-156.png",
            desc: 'A rectangle 30" x 72" (6 ft) table with a 90" x 156" tablecloth that seats 6 people.',
          },
        ],
      },
      {
        tableSize: "30 x 96",
        src: "/assets/rectangle/8F-60-102.png",
        options: ["60 x 102", "60 x 126", "90 x 132", "90 x 156"],
        desc: 'A rectangle 30" x 96" (6 ft) table with a 60" x 102" tablecloth that seats 8 people.',
        data: [
          {
            clothSize: "60 x 102",
            src: "/assets/rectangle/8F-60-102.png",
            desc: 'A rectangle 30" x 96" (6 ft) table with a 60" x 102" tablecloth that seats 8 people.',
          },
          {
            clothSize: "60 x 126",
            src: "/assets/rectangle/8F-60-126.png",
            desc: 'A rectangle 30" x 96" (6 ft) table with a 60" x 126" tablecloth that seats 8 people.',
          },
          {
            clothSize: "90 x 132",
            src: "/assets/rectangle/8F-90-132.png",
            desc: 'A rectangle 30" x 96" (6 ft) table with a 90" x 132" tablecloth that seats 8 people.',
          },
          {
            clothSize: "90 x 156",
            src: "/assets/rectangle/8F-90-156.png",
            desc: 'A rectangle 30" x 96" (6 ft) table with a 90" x 156" tablecloth that seats 8 people.',
          },
        ],
      },
    ],
  },
];
