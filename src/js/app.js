
App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',
  position: '',
  pwd:'',
  balance: 0,
  employee: null,

  init: function() {

  return App.initWeb3();

},

  initWeb3: function() {
    App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    web3 = new Web3(App.web3Provider);

    $("#infoAccount").hide();
    $("#employeeAddressId").hide();
    $("#employeePosition").hide();
    $("#logoutid").hide();
  //  $("#infoAccountBalance").html("<h3  class='text-center'>  Balance  </h3><br/>  <h1  class='text-center'>"+ 10 +" AmaCoin  </h1><br/>");
  //  $("#employeeAddressId").html("Your ID: " + addr);
  //  $("#employeePosition").html("Your position: " + position);

    return App.initContract();
  },

  initContract: async function() {
        // var fs = require('fs');
        // var jsonFile = '../../build/contracts/AmaCoin.json';
        // var parsed = JSON.parse(fs.readFileSync(jsonFile));
        // var abi = parsed.abi;
        var amaCoinABI = [
            {
              "constant": true,
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "name": "",
                  "type": "string"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
              "signature": "0x06fdde03"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balances",
              "outputs": [
                {
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
              "signature": "0x27e235e3"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "decimals",
              "outputs": [
                {
                  "name": "",
                  "type": "uint8"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
              "signature": "0x313ce567"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "_totalSupply",
              "outputs": [
                {
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
              "signature": "0x3eaaf86b"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "employees",
              "outputs": [
                {
                  "name": "email",
                  "type": "string"
                },
                {
                  "name": "addressId",
                  "type": "address"
                },
                {
                  "name": "password",
                  "type": "string"
                },
                {
                  "name": "position",
                  "type": "string"
                },
                {
                  "name": "firstname",
                  "type": "string"
                },
                {
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
              "signature": "0x4739326b"
            },
            {
              "constant": false,
              "inputs": [],
              "name": "acceptOwnership",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function",
              "signature": "0x79ba5097"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
              "signature": "0x8da5cb5b"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "name": "",
                  "type": "string"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
              "signature": "0x95d89b41"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "a",
                  "type": "uint256"
                },
                {
                  "name": "b",
                  "type": "uint256"
                }
              ],
              "name": "safeSub",
              "outputs": [
                {
                  "name": "c",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "pure",
              "type": "function",
              "signature": "0xa293d1e8"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "a",
                  "type": "uint256"
                },
                {
                  "name": "b",
                  "type": "uint256"
                }
              ],
              "name": "safeDiv",
              "outputs": [
                {
                  "name": "c",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "pure",
              "type": "function",
              "signature": "0xb5931f7c"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "a",
                  "type": "uint256"
                },
                {
                  "name": "b",
                  "type": "uint256"
                }
              ],
              "name": "safeMul",
              "outputs": [
                {
                  "name": "c",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "pure",
              "type": "function",
              "signature": "0xd05c78da"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "newOwner",
              "outputs": [
                {
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
              "signature": "0xd4ee1d90"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "employeecount",
              "outputs": [
                {
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
              "signature": "0xd670c3c2"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "a",
                  "type": "uint256"
                },
                {
                  "name": "b",
                  "type": "uint256"
                }
              ],
              "name": "safeAdd",
              "outputs": [
                {
                  "name": "c",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "pure",
              "type": "function",
              "signature": "0xe6cb9013"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function",
              "signature": "0xf2fde38b"
            },
            {
              "inputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "constructor",
              "signature": "constructor"
            },
            {
              "payable": true,
              "stateMutability": "payable",
              "type": "fallback"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "email",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "name": "addressId",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "name": "password",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "name": "position",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "name": "lastname",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "name": "firstname",
                  "type": "string"
                }
              ],
              "name": "createEmployeeEvent",
              "type": "event",
              "signature": "0xb54b59e3d115c9e9b2af2ebd9f25fde581f04a5af1f712da312617eacbad0b8f"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "name": "_from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "name": "_to",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event",
              "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "name": "tokens",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event",
              "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "name": "tokenOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "name": "tokens",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event",
              "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "Burn",
              "type": "event",
              "signature": "0xcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "email",
                  "type": "string"
                },
                {
                  "name": "addressId",
                  "type": "address"
                },
                {
                  "name": "password",
                  "type": "string"
                },
                {
                  "name": "position",
                  "type": "string"
                },
                {
                  "name": "lastname",
                  "type": "string"
                },
                {
                  "name": "firstname",
                  "type": "string"
                }
              ],
              "name": "createEmployee",
              "outputs": [
                {
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function",
              "signature": "0x1f764545"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                {
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
              "signature": "0x18160ddd"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "tokenOwner",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
              "signature": "0x70a08231"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "email",
                  "type": "string"
                }
              ],
              "name": "getEmployeeByEmail",
              "outputs": [
                {
                  "name": "mail",
                  "type": "string"
                },
                {
                  "name": "addressId",
                  "type": "address"
                },
                {
                  "name": "password",
                  "type": "string"
                },
                {
                  "name": "position",
                  "type": "string"
                },
                {
                  "name": "firstname",
                  "type": "string"
                },
                {
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
              "signature": "0xafeaef72"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "to",
                  "type": "address"
                },
                {
                  "name": "tokens",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [
                {
                  "name": "success",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function",
              "signature": "0xa9059cbb"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "spender",
                  "type": "address"
                },
                {
                  "name": "tokens",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "name": "success",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function",
              "signature": "0x095ea7b3"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "from",
                  "type": "address"
                },
                {
                  "name": "to",
                  "type": "address"
                },
                {
                  "name": "tokens",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [
                {
                  "name": "success",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function",
              "signature": "0x23b872dd"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "from",
                  "type": "address"
                },
                {
                  "name": "to",
                  "type": "address"
                },
                {
                  "name": "tokens",
                  "type": "uint256"
                }
              ],
              "name": "transferToken",
              "outputs": [
                {
                  "name": "success",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function",
              "signature": "0xf5537ede"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "tokenOwner",
                  "type": "address"
                },
                {
                  "name": "spender",
                  "type": "address"
                }
              ],
              "name": "allowance",
              "outputs": [
                {
                  "name": "remaining",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function",
              "signature": "0xdd62ed3e"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "tokenAddress",
                  "type": "address"
                },
                {
                  "name": "tokens",
                  "type": "uint256"
                }
              ],
              "name": "transferAnyERC20Token",
              "outputs": [
                {
                  "name": "success",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function",
              "signature": "0xdc39d06d"
            }
          ];
        var amacoinAddress = '0x408fB1F3Cbf729A8658dF94626ad972e7509c1a7';
        App.contracts.AmaCoin = new web3.eth.Contract(amaCoinABI,amacoinAddress);
        var c = await web3.eth.getAccounts();
        App.account = c != null ? c[0] : '0x0';

        if (App.employee != null && employee[1] != '0x0') {
          App.displayBalance(App.balance, App.employee);
        }

    },

    generateAccount: function(){

        var amacoinInstance;
        var addr;
        var password = $("#passwordfield").val();
        var publicAdress = document.getElementById('publicAdress');
        //var privateKey = document.getElementById('privateKey');
        //if (password != null && password != '') {
          addr = web3.eth.accounts.create();
          //addr = web3.personal.newAccount(password);
         // web3.personal.unlockAccount(addr, password, 1600);
            //Transfer 10 ether to the new generate account
            web3.eth.sendTransaction({
              from: App.account,
              to: addr.address,
              value: web3.utils.toWei('10','ether')
            },password);
          $("#btnSub").prop('disabled', false);
          publicAdress.value = addr.address;
          //password.value = addr.privateKey;
          alert('Your account has been successfuly created!');
       // }
       // else {
       //   alert('Please, enter your password!');
       // }
      },

      createAccount: function(){

        var email = $('#emailfield').val();
        var password = $('#passwordfield').val();
        var position = $('#positionSelect').val();
        var firstname = $('#firstnamefield').val();
        var lastname = $('#lastnamefield').val();
        var addressId = $('#publicAdress').val();

        App.contracts.AmaCoin.methods.createEmployee(email, addressId, password, position, lastname, firstname)
                                      .send({from: App.account, gas: 3000000}).then(function(result){
                                            console.log('Employé n° '+ result);
                                          alert('Employé ajouté');
                                          window.location.href='./index.html';
                                        }).catch(function(err) {
                                          console.error(err);
                                          alert("An error was occured. Please let's try again");
                                        });

        // App.contracts.AmaCoin.deployed().then(function(instance){
        //   return instance.createEmployee(email, addressId, password, position, lastname, firstname, {from: web3.eth.accounts[0], gas: 3000000});
        // }).then(function(result){
        //   alert('Employé ajouté');
        //   window.location.href='./index.html';
        // }).catch(function(err) {
        //   console.error(err);
        //   alert("An error was occured. Please let's try again");
        // });
      },

      infoEmployee : function(){
        var email = $("#inputEmail").val();
        var pwd = $("#inputPassword").val();
        var employee;
      try {
        //instance = await App.contracts.AmaCoin.deployed();
        App.contracts.AmaCoin.methods.getEmployeeByEmail(email).call().then(function(result){
         employee = result;
         console.log('resultat: '+ employee);
         if (employee != null && employee[0] == email) {

             App.employee = employee;
             if (employee[2] == pwd) {
               //window.location.href='./infoEmployee.html';
               App.getInfoEmployee();
             }
             else {
               alert("Sorry, you have entered a wrong password");
             }
           }
           else {
             alert("Sorry, we don't recognize this email");
           }

        }).catch(function(err) {
          console.error(err);
          alert("An error was occured. Please let's try again");
        });


      } catch (e) {
        alert('Error: '+e);
      }



      },


      getEmployeeByEmail : function(email){
        return App.contracts.AmaCoin.methods.getEmployeeByEmail(email).call();
      },

      // getInfoEmployee : function(employee){
      //
      // },

      getBalance: function(addressId){
        return App.contracts.AmaCoin.methods.balanceOf(addressId).call();
      },

      displayBalance: function(balance, employee){
          $("#helloworld").hide();
          $("#signinid").hide();
          $("#loginid").hide();
          $("#logoutid").show();
          $("#infoAccount").show();
          $("#infoAccountBalance").show();
          $("#employeeAddressId").show();
          $("#employeePosition").show();
        $("#infoAccountBalance").html("<h3  class='text-center'>  Balance  </h3><br/>  <h1  class='text-center'>"+ balance +" AmaCoin  </h1><br/>");
        addr = employee.addressId;
        position = employee.position;
        $("#employeeAddressId").html("Your ID: " + addr);
        $("#employeePosition").html("Your position: " + position);
        if (balance == 0) {
          $("#btnSen").prop('disabled', true);
        }
        else {
          $("#btnSen").prop('disabled', false);
        }
        if (balance >= 80) {
          $("#btnTrain").prop('disabled', false);
        }
        if (balance >= 160) {
          $("#btnHol").prop('disabled', false);
        }

      },

      getInfoEmployee: function(){
          var bal;
          var instance;
          var addr;
          var position;
        //  window.location.href='./infoEmployee.html';
          var employee = App.employee;

          try {
            //instance = await App.contracts.AmaCoin.deployed();

            if (employee != null && employee[1] != '0x0') {
              addr = employee.addressId;
              position = employee.position;
              $("#employeeAddressId").html("Your ID: " + addr);
              $("#employeePosition").html("Your position: " + position);
              App.getAccountBalance(addr);
                bal = parseInt(App.balance);
              App.displayBalance(App.balance, employee);
              $('#loginModal').modal('hide');


                // App.contracts.AmaCoin.methods.balanceOf(addr).call().then(function(balance){
                //   bal = parseInt(balance);
                //   $("#infoAccountBalance").html("<h3  class='text-center'>  Balance  </h3><br/>  <h1  class='text-center'>"+ bal +" AmaCoin  </h1><br/>");
                //   if (bal == 0) {
                //     $("#btnSen").prop('disabled', true);
                //   }
                //   else {
                //     $("#btnSen").prop('disabled', false);
                //   }
                //   App.balance = bal;
                //   console.log(bal);
                //
                //   console.log("My ID: "+ addr);
                //   console.log("My position: "+ position);
                //
                //
                //  }).catch(function(err) {
                //    console.error(err);
                //    alert("An error was occured. Please let's try again");
                //  });

              }



          } catch (e) {
            alert('Error: '+e);
          }

    },

    getAccountBalance : function(addressId){
      App.contracts.AmaCoin.methods.balanceOf(addressId).call().then(function(balance){
        var bal = parseInt(balance);
        App.balance = bal;
        App.displayBalance(bal,App.employee);
      //  $("#infoAccountBalance").html("<h3  class='text-center'>  Balance  </h3><br/>  <h1  class='text-center'>"+ bal +" AmaCoin  </h1><br/>");

       }).catch(function(e) {
         console.error(e);
         alert("An error was occured. Please let's try again");
       });

    },

    // getInfoBalance : function(balance, employee){
    // //  $("#infoAccountBalance").html("<h3  class='text-center'>  Balance  </h3><br/>  <h1  class='text-center'>"+ balance +" AmaCoin  </h1><br/>");
    //   window.location.href='./infoEmployee.html';
    //   addr = employee.addressId;
    //   position = employee.position;
    //   document.getElementById("employeeAddressId").innerHTML = "Your ID: " + addr;
    //   document.getElementById("employeePosition").innerHTML = "Your position: " + position;
    //   document.getElementById("employeePosition").innerHTML = "<h3  class='text-center'>  Balance  </h3><br/>  <h1  class='text-center'>"+ balance +" AmaCoin  </h1><br/>";
    // //  $("#employeeAddressId").html("Your ID: " + addr);
    // //  $("#employeePosition").html("Your position: " + position);
    //   if (balance == 0) {
    //     $("#btnSen").prop('disabled', true);
    //   }
    //   else {
    //     $("#btnSen").prop('disabled', false);
    //   }
    // },

    receiveToken: function(){
    var from = App.account;
    var to = App.employee.addressId;
    //var nbToken = parseInt(document.getElementById('nbTokenR').value);
    App.contracts.AmaCoin.methods.transfer(to, 100).send({from: App.account, gas: 3000000}).then(function(result){
            alert('Réception de token effectuée avec succès de ' + App.account);
            App.getInfoEmployee();
      }).catch(function(err) {
        console.error(err);
        alert("An error was occured. Please let's try again");
      });
    // App.contracts.AmaCoin.deployed().then(function(instance){
    //   return instance.transfer(to, 100,{ from: from });
    // }).then(function(result){
    //   alert('Réception de token effectuée avec succès de ' + App.account);
    //   App.getInfoBalance();
    // }).catch(function(err) {
    //   console.error(err);
    // });
    // //alert('Fonctionnalité en cours de paramétrage');
  },

  sendToken: function(){

      var pass = $("#passwordsnd").val();
      var balance = parseInt(App.balance);
      if (pass == App.employee.password) {

        var to = $("#addressTo").val();
        var from = App.employee.addressId;
        var nbToken = $("#nbTokenS").val();
        if (nbToken <= balance ) {
          App.contracts.AmaCoin.methods.transferToken(from, to, parseInt(nbToken)).send({from: App.account, gas: 3000000}).then(function(result){
                  alert('Transfert de token effectuée avec succès vers ' + to);
                  App.getInfoEmployee();
                  $('#sendTokenModal').modal('hide');
            }).catch(function(err) {
              console.error(err);
              alert("An error was occured. Please let's try again");
            });
            // web3.personal.unlockAccount(from, pass, 1600);
            // App.contracts.AmaCoin.deployed().then(function(instance){
            //   return instance.transferToken(from, to, parseInt(nbToken), {from: from});
            // }).then(function(result){
            //   alert('Transfert de token effectuée avec succès vers ' + to);
            //   App.getInfoBalance();
            // }).catch(function(err) {
            //   console.error(err);
            // });
        }
        else {
          alert('Low Balance');
        }

      }
    else {
      alert('Password Invalid!!');
    }

},

requestDayOff: function(){

    var pass = $("#passwordrdo").val();
    var balance = parseInt(App.balance);
    if (pass == App.employee.password) {

      var from = App.employee.addressId;
        App.contracts.AmaCoin.methods.transferToken(from, App.account, 160).send({from: App.account, gas: 3000000}).then(function(result){
                alert('Request sent');
                App.getInfoEmployee();
                $('#requestDayOffModal').modal('hide');
          }).catch(function(err) {
            console.error(err);
            alert("An error was occured. Please let's try again");
          });
        }
},

requestTrainingPackage: function(){

  var pass = $("#passwordsnd").val();
  var balance = parseInt(App.balance);
  if (pass == App.employee.password) {

    var from = App.employee.addressId;
      App.contracts.AmaCoin.methods.transferToken(from, App.account, 80).send({from: App.account, gas: 3000000}).then(function(result){
              alert('Request sent');
              App.getInfoEmployee();
              $('#requestTrainingModal').modal('hide');
        }).catch(function(err) {
          console.error(err);
          alert("An error was occured. Please let's try again");
        });
      }
},

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
