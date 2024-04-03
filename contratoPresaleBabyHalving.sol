pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT

library SafeMath {
   
    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            uint256 c = a + b;
            if (c < a) return (false, 0);
            return (true, c);
        }
    }

    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b > a) return (false, 0);
            return (true, a - b);
        }
    }

    
    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
            // benefit is lost if 'b' is also tested.
            // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
            if (a == 0) return (true, 0);
            uint256 c = a * b;
            if (c / a != b) return (false, 0);
            return (true, c);
        }
    }

    
    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a / b);
        }
    }

    
    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a % b);
        }
    }

    
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        return a + b;
    }

    
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return a - b;
    }

    
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        return a * b;
    }

    
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return a / b;
    }

    
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return a % b;
    }

    
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        unchecked {
            require(b <= a, errorMessage);
            return a - b;
        }
    }

    
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a / b;
        }
    }

    
    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a % b;
        }
    }
}

pragma solidity ^0.8.0;

interface AggregatorV3Interface {
  function decimals() external view returns (uint8);

  function description() external view returns (string memory);

  function version() external view returns (uint256);

  function getRoundData(
    uint80 _roundId
  ) external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);

  function latestRoundData()
    external
    view
    returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);
}


pragma solidity ^0.8.20;


abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }

    function _contextSuffixLength() internal view virtual returns (uint256) {
        return 0;
    }
}

pragma solidity ^0.8.0;

abstract contract Pausable is Context {
    
    event Paused(address account);

   
    event Unpaused(address account);

    bool private _paused;

    
    constructor() {
        _paused = false;
    }

    
    modifier whenNotPaused() {
        _requireNotPaused();
        _;
    }

    
    modifier whenPaused() {
        _requirePaused();
        _;
    }

    
    function paused() public view virtual returns (bool) {
        return _paused;
    }

    function _requireNotPaused() internal view virtual {
        require(!paused(), "Pausable: paused");
    }

    
    function _requirePaused() internal view virtual {
        require(paused(), "Pausable: not paused");
    }

    
    function _pause() internal virtual whenNotPaused {
        _paused = true;
        emit Paused(_msgSender());
    }

    
    function _unpause() internal virtual whenPaused {
        _paused = false;
        emit Unpaused(_msgSender());
    }
}

pragma solidity ^0.8.20;

abstract contract Ownable is Context {
    address private _owner;

    
    error OwnableUnauthorizedAccount(address account);

    
    error OwnableInvalidOwner(address owner);

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

   
    constructor(address initialOwner) {
        if (initialOwner == address(0)) {
            revert OwnableInvalidOwner(address(0));
        }
        _transferOwnership(initialOwner);
    }

   
    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    
    function owner() public view virtual returns (address) {
        return _owner;
    }

   
    function _checkOwner() internal view virtual {
        if (owner() != _msgSender()) {
            revert OwnableUnauthorizedAccount(_msgSender());
        }
    }

    
    function renounceOwnership() public virtual onlyOwner {
        _transferOwnership(address(0));
    }

    
    function transferOwnership(address newOwner) public virtual onlyOwner {
        if (newOwner == address(0)) {
            revert OwnableInvalidOwner(address(0));
        }
        _transferOwnership(newOwner);
    }

   
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

pragma solidity ^0.8.0;

abstract contract ReentrancyGuard {
    
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    
    modifier nonReentrant() {
        _nonReentrantBefore();
        _;
        _nonReentrantAfter();
    }

    function _nonReentrantBefore() private {
        // On the first call to nonReentrant, _status will be _NOT_ENTERED
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        // Any calls to nonReentrant after this point will fail
        _status = _ENTERED;
    }

    function _nonReentrantAfter() private {
        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Returns true if the reentrancy guard is currently set to "entered", which indicates there is a
     * `nonReentrant` function in the call stack.
     */
    function _reentrancyGuardEntered() internal view returns (bool) {
        return _status == _ENTERED;
    }
}

pragma solidity ^0.8.20;
interface IERC20 {
    
    event Transfer(address indexed from, address indexed to, uint256 value);

   
    event Approval(address indexed owner, address indexed spender, uint256 value);

   
    function totalSupply() external view returns (uint256);

   
    function balanceOf(address account) external view returns (uint256);

   
    function transfer(address to, uint256 value) external returns (bool);

    
    function allowance(address owner, address spender) external view returns (uint256);


    function approve(address spender, uint256 value) external returns (bool);

    
    function transferFrom(address from, address to, uint256 value) external returns (bool);
}

pragma solidity ^0.8.20;


interface IERC20Extended {

    function decimals() external view returns (uint);

    
    event Transfer(address indexed from, address indexed to, uint256 value);

   
    event Approval(address indexed owner, address indexed spender, uint256 value);

   
    function totalSupply() external view returns (uint256);

   
    function balanceOf(address account) external view returns (uint256);

    
    function transfer(address to, uint256 value) external returns (bool);

    
    function allowance(address owner, address spender) external view returns (uint256);

    
    function approve(address spender, uint256 value) external returns (bool);

    
    function transferFrom(address from, address to, uint256 value) external returns (bool);
}


contract BabyHalvingPresale is Ownable, ReentrancyGuard, Pausable {
    using SafeMath for uint256;

    enum PresaleStage { Stage1, Stage2, Stage3, Stage4 }
    PresaleStage public currentStage;
    mapping(PresaleStage => uint256) public stagePrices;
    mapping(PresaleStage => uint256) public stageTokenSupplies;
    mapping(PresaleStage => uint256) public tokensSold;

    IERC20 public presaleToken;
    IERC20Extended public usdtToken;
    AggregatorV3Interface public ethPriceFeed;

    uint256 public totalETHRaised;
    uint256 public totalUSDRaised;
    uint256 public totalTokensSold;
    uint256 public baseDecimals;

    uint256 public minLimitETH;
    uint256 public maxLimitETH;
    uint256 public minLimitUSD;
    uint256 public maxLimitUSD;

    event PresaleEnded();
    event PresaleAdvanced(PresaleStage newStage);
    event TokensPurchased(address buyer, uint256 amount, uint256 value, string currency);
    event StageChanged(PresaleStage newStage);

    address payable[3] private ethReceivers;
    address[3] private usdtReceivers;

    mapping(address => uint256) public referralRewardsETH; // Tracks referral rewards for each address
    mapping(address => uint256) public referralRewardsUSDT;
    mapping(address => uint256) public totalReferrals; // Tracks total referrals made by each address
    uint256 public referralPercentage;


    constructor(address _presaleTokenAddress, address _usdtTokenAddress, address _ethPriceFeedAddress) Ownable(msg.sender) {
        presaleToken = IERC20(_presaleTokenAddress);
        usdtToken = IERC20Extended(_usdtTokenAddress);
        ethPriceFeed = AggregatorV3Interface(_ethPriceFeedAddress);
        currentStage = PresaleStage.Stage1;
        initializeStageData();

        baseDecimals = (10 ** 18);
        referralPercentage = 5;

        minLimitETH = 0.05 ether;
        maxLimitETH = 80 ether;
        minLimitUSD = 25;
        maxLimitUSD = 25000;

        ethReceivers = [payable(0x8067F9A7be9C4386F615aa6bb1e616299Cc9714c), payable(0x846B275785d890d2e0b5E0901e30743FC1a393e7), payable(0xC5C8638B64865d1DE675CfCD8764AaBE3c9cBB6b)]; // Replace
        usdtReceivers = [0x8067F9A7be9C4386F615aa6bb1e616299Cc9714c, 0x846B275785d890d2e0b5E0901e30743FC1a393e7, 0xC5C8638B64865d1DE675CfCD8764AaBE3c9cBB6b]; // Replace
    }

    function initializeStageData() private {
        // Initialize stage prices in USDT and token supplies
        stagePrices[PresaleStage.Stage1] = 0.001800 ether;
        stagePrices[PresaleStage.Stage2] = 0.003880 ether;
        stagePrices[PresaleStage.Stage3] = 0.004868 ether;
        stagePrices[PresaleStage.Stage4] = 0.018065 ether;

        stageTokenSupplies[PresaleStage.Stage1] = 30000000;
        stageTokenSupplies[PresaleStage.Stage2] = 80000000;
        stageTokenSupplies[PresaleStage.Stage3] = 80000000;
        stageTokenSupplies[PresaleStage.Stage4] = 80000000;
    }

    function buyWithETH(address referral) public payable nonReentrant whenNotPaused {
        require(msg.value > minLimitETH, "Min ETH not met");
        require(msg.value < maxLimitETH, "Max ETH not met");

        // Calculate referral reward if referral is valid
        uint256 referralReward = 0;
        if (referral != address(0) && referral != msg.sender) {
            referralReward = msg.value.mul(referralPercentage).div(100); // 5% referral reward
            payable(referral).transfer(referralReward);
            referralRewardsETH[referral] += referralReward;
            totalReferrals[referral] += 1;
        }

        // Distribute remaining ETH among the three wallets
        uint256 remainingETH = msg.value.sub(referralReward);
        uint256 share = remainingETH.div(3);
        for (uint i = 0; i < ethReceivers.length; i++) {
            ethReceivers[i].transfer(share);
        }

        uint256 ethPriceInUSDT = getLatestETHPrice(); // Get the latest price of ETH in USDT with 8 decimals
        // Convert ETH sent to USDT equivalent, adjusting for 8 decimals from the price feed and 18 decimals from ETH
        uint256 usdtAmount = (msg.value * ethPriceInUSDT * (10 ** 10));

        uint256 currentPriceInUSDT = stagePrices[currentStage]; // Price per token in USDT for current stage
        uint256 tokensToBuy = usdtAmount / currentPriceInUSDT; // Adjust for decimals to get the correct token amount

        processPurchase(tokensToBuy, (usdtAmount / baseDecimals), "ETH");

        totalETHRaised += msg.value;
        totalTokensSold += tokensToBuy;
    }

    function buyWithUSDT(uint256 usdtAmount, address referral) public nonReentrant whenNotPaused {
        uint256 usdtDecimals = usdtToken.decimals();
        uint256 adjustedUsdtAmount = usdtAmount * baseDecimals;
        require(usdtAmount > minLimitUSD, "Min Price Limit Reached");
        require(usdtAmount < maxLimitUSD, "Max Price Limit Reached");

        uint256 ourAllowance = usdtToken.allowance(_msgSender(), address(this));
        require(ourAllowance >= (usdtAmount * (10**usdtDecimals)), "Error! Increase usdt token allowance");

        // Calculate referral reward if referral is valid
        uint256 referralReward = 0;
        if (referral != address(0) && referral != msg.sender) {
            referralReward = (usdtAmount * (10**usdtDecimals)).mul(referralPercentage).div(100); // 5% referral reward in USDT
            
            (bool success, ) = address(usdtToken).call(abi.encodeWithSignature('transferFrom(address,address,uint256)', _msgSender(), referral, referralReward));
            require(success, 'Token payment failed');

            referralRewardsUSDT[referral] += referralReward;
            totalReferrals[referral] += 1;
        }

        uint256 remainingUSDT = (usdtAmount * (10**usdtDecimals)).sub(referralReward);
        uint256 share = remainingUSDT.div(3);
        for (uint i = 0; i < usdtReceivers.length; i++) {
            (bool success, ) = address(usdtToken).call(abi.encodeWithSignature('transferFrom(address,address,uint256)', _msgSender(), usdtReceivers[i], share));
            require(success, 'Token payment failed');
        }

        uint256 currentPriceInUSDT = stagePrices[currentStage]; // Price per token in USDT "wei"
        uint256 tokensToBuy = (adjustedUsdtAmount / currentPriceInUSDT) * baseDecimals; // Direct division for token amount calculation

        processPurchase(tokensToBuy, adjustedUsdtAmount, "USDT");

        totalUSDRaised += usdtAmount * (10**usdtDecimals);
        totalTokensSold += tokensToBuy;
    }


    function processPurchase(uint256 tokensToBuy, uint256 value, string memory currency) private {
        uint256 availableTokens = (stageTokenSupplies[currentStage] * baseDecimals) - tokensSold[currentStage];

        if (tokensToBuy <= availableTokens) {
            // Purchase can be fulfilled within the current stage
            tokensSold[currentStage] += tokensToBuy;
            presaleToken.transfer(msg.sender, tokensToBuy);
            emit TokensPurchased(msg.sender, tokensToBuy, value, currency);
        } else {
            // Purchase spans to the next stage
            require(currentStage < PresaleStage.Stage4, "Not enough tokens available");

            // Fulfill part of the purchase with the current stage's remaining tokens
            tokensSold[currentStage] = stageTokenSupplies[currentStage] * baseDecimals;
            uint256 stageValue = availableTokens * stagePrices[currentStage] / baseDecimals;
            presaleToken.transfer(msg.sender, availableTokens);
            emit TokensPurchased(msg.sender, availableTokens, stageValue, currency);

            // Move to the next stage and fulfill the remaining part of the purchase
            checkAndAdvanceStage();
            uint256 remainingTokensToBuy = tokensToBuy - availableTokens;
            uint256 remainingValue = (value > stageValue) ? value - stageValue : 0;
            tokensSold[currentStage] += remainingTokensToBuy;
            presaleToken.transfer(msg.sender, remainingTokensToBuy);
            emit TokensPurchased(msg.sender, remainingTokensToBuy, remainingValue, currency);
        }
    
        // Check and advance stage after processing the purchase
        checkAndAdvanceStage();
    }

    function checkAndAdvanceStage() private {
        if (tokensSold[currentStage] >= stageTokenSupplies[currentStage] * baseDecimals) {
            if (currentStage == PresaleStage.Stage4) {
                _pause();
                emit PresaleEnded();
            } else {
                currentStage = PresaleStage(uint256(currentStage) + 1);
                emit PresaleAdvanced(currentStage);
            }
        }
    }

    function setPresaleStage(PresaleStage stage) public onlyOwner {
        currentStage = stage;
        emit StageChanged(stage);
    }

    function getLatestETHPrice() public view returns (uint256) {
        (,int price,,,) = ethPriceFeed.latestRoundData();
        require(price > 0, "Invalid ETH price");
        return uint256(price);
    }

    function withdrawETH() external onlyOwner {
        uint256 balance = address(this).balance;
        uint256 share = balance.div(3);
        for (uint i = 0; i < ethReceivers.length; i++) {
            ethReceivers[i].transfer(share);
        }
    }

    function withdrawUSDT() external onlyOwner {
        uint256 balance = usdtToken.balanceOf(address(this));
        uint256 share = balance.div(3);
        for (uint i = 0; i < usdtReceivers.length; i++) {
            usdtToken.transfer(usdtReceivers[i], share);
        }
    }

    function pausePresale() public onlyOwner {
        _pause();
    }

    function unpausePresale() public onlyOwner {
        _unpause();
    }
    
    function updateReferralPercentage(uint256 val) public onlyOwner {
        referralPercentage = val;
    }

    // Function to distribute tokens to users based on purchases on different chains
    function distributeTokens(address[] calldata userAddresses, uint256[] calldata tokenAmounts) external onlyOwner nonReentrant whenNotPaused {
        require(userAddresses.length == tokenAmounts.length, "Arrays must have the same length");

        for (uint256 i = 0; i < userAddresses.length; i++) {
            address userAddress = userAddresses[i];
            uint256 tokensToBuy = tokenAmounts[i] * baseDecimals;
            uint256 availableTokens = (stageTokenSupplies[currentStage] * baseDecimals) - tokensSold[currentStage];

            require(tokensToBuy <= availableTokens, "Not enough tokens available in the current stage");

            // Simulate purchase logic without affecting totalETHRaised or totalUSDRaised since the funds were raised on other chains
            tokensSold[currentStage] += tokensToBuy;
            totalTokensSold += tokensToBuy;
            presaleToken.transfer(userAddress, tokensToBuy);
            emit TokensPurchased(userAddress, tokensToBuy, 0, "Cross-Chain");

            // Check and advance stage after processing each purchase
            checkAndAdvanceStage();
        }
    }

    // Function to update stage prices
    function setStagePrice(PresaleStage stage, uint256 price) public onlyOwner {
        stagePrices[stage] = price;
    }

    // Function to update stage token supplies
    function setStageTokenSupply(PresaleStage stage, uint256 supply) public onlyOwner {
        stageTokenSupplies[stage] = supply;
    }

    // Functions to update min and max limits for ETH and USD
    function setMinLimitETH(uint256 _minLimitETH) public onlyOwner {
        minLimitETH = _minLimitETH;
    }

    function setMaxLimitETH(uint256 _maxLimitETH) public onlyOwner {
        maxLimitETH = _maxLimitETH;
    }

    function setMinLimitUSD(uint256 _minLimitUSD) public onlyOwner {
        minLimitUSD = _minLimitUSD;
    }

    function setMaxLimitUSD(uint256 _maxLimitUSD) public onlyOwner {
        maxLimitUSD = _maxLimitUSD;
    }

    // Function to update ETH receivers
    function setEthReceivers(address payable[3] memory _ethReceivers) public onlyOwner {
        ethReceivers = _ethReceivers;
    }

    // Function to update USDT receivers
    function setUsdtReceivers(address[3] memory _usdtReceivers) public onlyOwner {
        usdtReceivers = _usdtReceivers;
    }

    // Function to update referral percentage
    function setReferralPercentage(uint256 _referralPercentage) public onlyOwner {
        referralPercentage = _referralPercentage;
    }

    // Function to update the USDT token contract address
    function updateUsdtTokenAddress(address _newUsdtTokenAddress) external onlyOwner {
        require(_newUsdtTokenAddress != address(0), "Invalid address");
        usdtToken = IERC20Extended(_newUsdtTokenAddress);
    }

    // Function to update the ETH price feed contract address
    function updateEthPriceFeedAddress(address _newEthPriceFeedAddress) external onlyOwner {
        require(_newEthPriceFeedAddress != address(0), "Invalid address");
        ethPriceFeed = AggregatorV3Interface(_newEthPriceFeedAddress);
    }
}