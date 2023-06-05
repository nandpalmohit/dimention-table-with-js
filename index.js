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

$(document).ready(function () {
  // set table shape size
  $("#table_shape").append(
    `<option value="null" selected disabled> Select table shape...</option>`
  );
  $("#table_size").append(
    `<option value="null" selected disabled> Select table size...</option>`
  );
  $("#table_cloth_size").append(
    `<option value="null" selected disabled> Select table cloth size...</option>`
  );

  // insert option data into table size input
  options.forEach((option) => {
    $("#table_shape").append(
      `<option value='${option.title}'> ${option.title}</option>`
    );
  });

  var tableData;

  // onChange table_shape, event triggers!
  $("#table_shape").change(function () {
    $("#table_size").html(""); // reset table size input
    $("#table_cloth_size").html(""); // reset cloth size input

    var selectedTableShape = $("#table_shape").val(); // get selected table shape data

    // check selected table shape is exist or not
    if (selectedTableShape !== "null") {
      $("#html-data-table tr.table-rows").remove();

      // insert selected table size data to tableData.
      options.filter(
        (data) => data.title == selectedTableShape && (tableData = data)
      );

      $("#table_shape_img").attr("src", tableData.imgSrc); // change image by table shape

      // append data into table shape size input
      tableData.tableSizes.forEach((option) => {
        $("#table_size").append(
          `<option value='${option}'> ${option}</option>`
        );
      });

      // append data into table cloth size input
      tableData.tableClothSize.forEach((option) => {
        $("#table_cloth_size").append(
          `<option value='${option}'> ${option}</option>`
        );
      });

      // get table tbody
      var table = document
        .getElementById("html-data-table")
        .getElementsByTagName("tbody")[0];

      var tableSizeRow = document.getElementById("current-table-size-row"); // get current table size row
      tableSizeRow.innerHTML = ""; // remove all the data from row

      // insert each data to row using loop
      tableData.tableSizes.forEach((size, index) => {
        var data = tableSizeRow.insertCell();
        data.innerHTML = size + " " + tableData.title;
      });

      // insert each data to cloth size rows
      Object.entries(tableData.tableDropSize).forEach((value, index) => {
        let tableDropSizeRow = table.insertRow(-1);
        tableDropSizeRow.className = "table-rows";
        var data = tableDropSizeRow.insertCell();
        data.innerHTML = value[0] + " " + tableData.title;

        // insert table drop size on rows
        value[1].forEach((dropSize, index) => {
          var data = tableDropSizeRow.insertCell();
          data.innerHTML = dropSize;
        });
      });

      var currentTableSize = $("#table_size").val(); // get current table size
      var currentTableClothSize = $("#table_cloth_size").val(); // get current table cloth size

      // get current Table size index
      var currentTableSizeIndex = tableData.tableSizes.findIndex((elem) => {
        return elem === currentTableSize;
      });

      // get current table cloth size index
      var currentTableClothSizeIndex = tableData.tableClothSize.findIndex(
        (elem) => {
          return elem == currentTableClothSize;
        }
      );

      var rows =
        document.getElementsByClassName("table-rows")[currentTableSizeIndex]; // get current index tr from table
      var cols = rows.cells[currentTableClothSizeIndex + 1]; // get current index td from tr
      cols.className = "current-rows "; // add current selected result class
      setSizeOption();
    } else {
      var tableSizeRow = document.getElementById("current-table-size-row");
      tableSizeRow.innerHTML = "";
    }

    function setSizeOption() {
      // get value of current table size
      var currentTableSize = $("#table_size").val();

      // get table size data
      var imgOption = tableData.availableOptions.find(
        (elem, index) => elem.tableSize.toString() == currentTableSize
      );

      $("#table_cloth_size").html(""); // empty cloth size select input
      imgOption.options.forEach((option) =>
        $("#table_cloth_size").append(
          `<option value='${option}'> ${option}</option>`
        )
      );

      var currentTableClothSize = $("#table_cloth_size").val();

      // get current Table size
      var currentTableSizeIndex = tableData.tableSizes.findIndex((elem) => {
        return elem === currentTableSize;
      });

      // get current table cloth size
      var currentTableClothSizeIndex = tableData.tableClothSize.findIndex(
        (elem) => {
          return elem == currentTableClothSize;
        }
      );

      // set Img and desc
      setImgData(imgOption);

      var headingRows = document.getElementById("current-table-size-row"); // get heading rows

      // remove class from heading rows
      for (let j = 0; j < headingRows.cells.length; j++) {
        headingRows.cells[j].classList.remove("current-cols");
      }
      headingRows.cells[currentTableSizeIndex].className = "current-cols ";

      allRows = document.getElementsByClassName("table-rows"); // get all rows by table-rows

      // removing all class from td
      for (let i = 0; i < allRows.length; i++) {
        var singleRows = allRows[i];
        for (let j = 0; j < singleRows.cells.length; j++) {
          singleRows.cells[j].className = "";
        }
        // console.log(singleRows);
      }
      var rows =
        document.getElementsByClassName("table-rows")[
          currentTableClothSizeIndex
        ];
      // add current-rows class to td
      var cols = rows.cells[currentTableSizeIndex + 1];
      cols.className = "current-rows";

      // add current-cols class to current column
      for (let i = 0; i < currentTableClothSizeIndex; i++) {
        rows = document.getElementsByClassName("table-rows")[i];
        // console.log(rows, currentTableClothSizeIndex, currentTableSizeIndex);
        rows.cells[currentTableSizeIndex + 1].className = "current-cols";
      }

      // add current-cols class to current row
      rows =
        document.getElementsByClassName("table-rows")[
          currentTableClothSizeIndex
        ]; // get current row

      // get cols from current row
      for (let i = 0; i <= currentTableSizeIndex; i++) {
        rows.cells[i].className = "current-cols";
      }
    }

    function setClothOption() {
      // get value of current table size
      var currentTableSize = $("#table_size").val();
      var currentTableClothSize = $("#table_cloth_size").val();

      // set image
      var imgOption = tableData.availableOptions.find(
        (elem, index) => elem.tableSize.toString() == currentTableSize
      );
      var imgSrc = imgOption.data.find(
        (elem, index) => elem.clothSize.toString() == currentTableClothSize
      );

      setImgData(imgSrc);

      // get current Table size
      var currentTableSizeIndex = tableData.tableSizes.findIndex((elem) => {
        return elem === currentTableSize;
      });

      // get current table cloth size
      var currentTableClothSizeIndex = tableData.tableClothSize.findIndex(
        (elem) => {
          return elem == currentTableClothSize;
        }
      );

      var headingRows = document.getElementById("current-table-size-row"); // get heading rows

      // remove class from heading rows
      for (let j = 0; j < headingRows.cells.length; j++) {
        headingRows.cells[j].classList.remove("current-cols");
      }
      headingRows.cells[currentTableSizeIndex].className = "current-cols ";

      allRows = document.getElementsByClassName("table-rows"); // get all rows by table-rows

      // removing all class from td
      for (let i = 0; i < allRows.length; i++) {
        var singleRows = allRows[i];
        for (let j = 0; j < singleRows.cells.length; j++) {
          singleRows.cells[j].className = "";
        }
        // console.log(singleRows);
      }
      var rows =
        document.getElementsByClassName("table-rows")[
          currentTableClothSizeIndex
        ];
      // add current-rows class to td
      var cols = rows.cells[currentTableSizeIndex + 1];
      cols.className = "current-rows";

      // add current-cols class to current column
      for (let i = 0; i < currentTableClothSizeIndex; i++) {
        rows = document.getElementsByClassName("table-rows")[i];
        // console.log(rows, currentTableClothSizeIndex, currentTableSizeIndex);
        rows.cells[currentTableSizeIndex + 1].className = "current-cols";
      }

      // add current-cols class to current row
      rows =
        document.getElementsByClassName("table-rows")[
          currentTableClothSizeIndex
        ]; // get current row

      // get cols from current row
      for (let i = 0; i <= currentTableSizeIndex; i++) {
        rows.cells[i].className = "current-cols";
      }
    }

    $("#table_size").change(setSizeOption);
    $("#table_cloth_size").change(setClothOption);
  });
});

function setImgData(data) {
  $("#table_shape_img").attr("src", data.src);
  $("#table_description").html(data.desc);
}
