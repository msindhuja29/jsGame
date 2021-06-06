const attackValue = 10;
const strongAttackValue = 14;
const monsterAttackValue = 12;
const healValue = 10;
let chosenMaxLife = 100;

let playerHealth = chosenMaxLife;
let monsterHealth = chosenMaxLife;
adjustHealthBars(chosenMaxLife);

function startActionHandler(){
    resetGame(chosenMaxLife);
}

function attackPower(){
    let damage = dealMonsterDamage(attackValue);
    monsterHealth -= damage;
    let playerDamage = dealPlayerDamage(monsterAttackValue);
    playerHealth -= playerDamage;

    if(monsterHealth <= 0){
        alert("you Won :)");
        attackBtn.disabled = true;
        strongAttackBtn.disabled = true;
        healBtn.disabled = true;
        startBtn.hidden = false;
    } else if(playerHealth <= 0) {
        alert("You Lost:( ");
        attackBtn.disabled = true;
        strongAttackBtn.disabled = true;
        healBtn.disabled = true;
        startBtn.hidden = false;
    } else if(playerHealth <= 0 && monsterHealth <=0) {
        alert("Draw Match !! ");
        attackBtn.disabled = true;
        strongAttackBtn.disabled = true;
        healBtn.disabled = true;
        startBtn.hidden = false;
    }
}

function strongAttackHandeler(){
    let damage = dealMonsterDamage(strongAttackValue);
    monsterHealth -= damage;
    let playerDamage = dealPlayerDamage(monsterAttackValue);
    playerHealth -= playerDamage;

    if(monsterHealth <= 0){
        alert("you Won :)");
        attackBtn.disabled = true;
        strongAttackBtn.disabled = true;
        healBtn.disabled = true;
        startBtn.hidden = false;
    } else if(playerHealth <= 0) {
        alert("You Lost:( ");
        attackBtn.disabled = true;
        strongAttackBtn.disabled = true;
        healBtn.disabled = true;
        startBtn.hidden = false;
    } else if(playerHealth <= 0 && monsterHealth <=0) {
        alert("Draw Match !! ");
        attackBtn.disabled = true;
        strongAttackBtn.disabled = true;
        healBtn.disabled = true;
        startBtn.hidden = false;
    }
}
function healHealthHandler(){
    increasePlayerHealth(healValue);
    playerHealth += healValue;
    if(playerHealth >= chosenMaxLife){
        playerHealth = chosenMaxLife;
    }
    let playerDamage = dealPlayerDamage(monsterAttackValue);
    playerHealth -= playerDamage;
    if(monsterHealth <= 0){
        alert("you Won :)");
        attackBtn.disabled = true;
        strongAttackBtn.disabled = true;
        healBtn.disabled = true;
        startBtn.hidden = false;
    } else if(playerHealth <= 0) {
        alert("You Lost:( ");
        attackBtn.disabled = true;
        strongAttackBtn.disabled = true;
        healBtn.disabled = true;
        startBtn.hidden = false;
    } else if(playerHealth <= 0 && monsterHealth <=0) {
        alert("Draw Match !! ");
        attackBtn.disabled = true;
        strongAttackBtn.disabled = true;
        healBtn.disabled = true;
        startBtn.hidden = false;
    }
}
attackBtn.addEventListener('click',attackPower);
startBtn.addEventListener('click',startActionHandler);
strongAttackBtn.addEventListener('click',strongAttackHandeler);
healBtn.addEventListener('click',healHealthHandler);