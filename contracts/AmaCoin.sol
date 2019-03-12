pragma solidity  >=0.4.24 <0.6.0;

// import "./Owned.sol";
// import "./ERC20Interface.sol";
// import "./SafeMath.sol";

contract SafeMath {
    function safeAdd(uint a, uint b) public pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }
    function safeSub(uint a, uint b) public pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }
    function safeMul(uint a, uint b) public pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }
    function safeDiv(uint a, uint b) public pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}

contract ERC20Interface {
    function totalSupply() public view returns (uint);
    function balanceOf(address tokenOwner) public view returns (uint);
    function allowance(address tokenOwner, address spender) public returns (uint remaining);
    function transfer(address to, uint tokens) public returns (bool success);
    function approve(address spender, uint tokens) public returns (bool success);
    function transferFrom(address from, address to, uint tokens) public returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
    event Burn(address indexed from, uint value);
}

contract ApproveAndCallFallBack {
    function receiveApproval(address from, uint256 tokens, address token, bytes memory data) public;
}


contract Owned {
    address public owner;
    address public newOwner;

    event OwnershipTransferred(address indexed _from, address indexed _to);

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address _newOwner) public onlyOwner {
        newOwner = _newOwner;
    }
    function acceptOwnership() public {
        require(msg.sender == newOwner);
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
        newOwner = address(0);
    }
}

contract AmaCoin is ERC20Interface, Owned, SafeMath {
    string public symbol;
    string public  name;
    uint8 public decimals;
    uint public _totalSupply;


    struct Employee {
      string email;
      address addressId;
      string password;
      string position;
      string firstname;
      string lastname;
    }

    Employee[] public employees;

    uint public employeecount;

    mapping(address => uint) public balances;    //default as private if not explicitly declare
    mapping(address => mapping(address => uint)) allowed;
    mapping (string => Employee) employes;

    event createEmployeeEvent(string email, address addressId, string password, string position, string lastname, string firstname);

    constructor() public {
        symbol = "A$";  //our coin's symbol
        name = "AmaCoin"; //our coin's name
        decimals = 18;
        _totalSupply = 1000000000;
        balances[msg.sender] = _totalSupply;
        emit Transfer(address(0), msg.sender, _totalSupply);
    }

    function createEmployee(string memory email, address addressId, string memory password, string memory position,
                            string memory lastname, string memory firstname) public returns (uint) {
    //  function createEmployee(string memory email, address addressId, string memory password, string memory position) public returns (bool success) {
        employeecount++;
        employes[email] = Employee(email, addressId, password, position, lastname, firstname);
      //  employes[email] = Employee(email, addressId, password, position);
        employees.push(Employee(email, addressId, password, position, lastname, firstname));
        emit createEmployeeEvent(email, addressId, password, position, lastname, firstname);
      return employeecount++;
    }


    function totalSupply() public view returns (uint) {
        return _totalSupply  - balances[address(0)];
    }

    function balanceOf(address tokenOwner) public view returns (uint) {
        return balances[tokenOwner];
    }

    // function getEmployeeByEmail(string memory email) public view returns (string memory , address, string memory, string memory, string memory, string memory){
    //   Employee memory e = employes[email];
    //   return (e.email, e.addressId, e.password, e.position, e.firstname, e.lastname);
    // }

    function getEmployeeByEmail(string memory email) public view returns (string memory mail , address addressId, string memory password, string memory position,string memory firstname, string memory lastname){
      Employee memory e = employes[email];
      return (e.email, e.addressId, e.password, e.position, e.firstname, e.lastname);
    }


    function transfer(address to, uint tokens) public returns (bool success) {
        balances[msg.sender] = safeSub(balances[msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(msg.sender, to, tokens);
        return true;
    }

    function approve(address spender, uint tokens) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }


    function transferFrom(address from, address to, uint tokens) public returns (bool success) {
        balances[from] = safeSub(balances[from], tokens);
        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(from, to, tokens);
        return true;
    }


    function allowance(address tokenOwner, address spender) public returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }

    function () external payable {
        revert();
    }


    function transferAnyERC20Token(address tokenAddress, uint tokens) public onlyOwner returns (bool success) {
        return ERC20Interface(tokenAddress).transfer(owner, tokens);
    }

}
