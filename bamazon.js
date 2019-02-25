const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  productQuery();
});

function productQuery() {
  connection.query("SELECT * FROM theproduct", function(err, data) {
    console.table(data);
    inquirer
      .prompt([
        {
          name: "item",
          type: "input",
          message: "What is the ID of the product you would like?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many would you like to buy?"
        }
      ])
      .then(function (answer) {
          console.log(answer);
        const query = connection.query(
            "SELECT * FROM theproduct WHERE ?",
            
                {
                    id: answer.item
                }
            ,
            function (error, res) {
                console.log(query.sql);
                if (error) throw error;
                // console.log(res);
                let quantChange = parseFloat(res[0].stock) - parseFloat(answer.quantity)
                if (res[0].stock >= answer.item) {
                    connection.query(
                        "UPDATE theproduct SET ? WHERE ?",
                        [
                            {
                                stock: quantChange
                            },
                            {
                                id: answer.item
                            }
                        ],
                        function (error) {
                            if (error) throw err;
                            console.log("Your total is " + parseInt(res[0].price) * parseInt(answer.quantity) + "\nThank you for you purchase!")
                            setTimeout(function(){
                              productQuery()
                            }, 1000)

                        }
                    );
                } else {
                    console.log("We just don't have enough to fill that order so go away.");
                }
            }
            
        );
        
    });
  });
}