let tryouts = 0;
let wins = 0;
let loses = 0;

function computerPlay(): string | void {
  let number: number = Math.round(Math.random() * 3);
  let step = prompt("Камень, ножницы или бумага?")?.trim().toLowerCase();

  function computerStep(): string {
    if (number <= 1) {
      return "Компьютер сходил: Камень";
    } else if (number == 2) {
      return "Компьютер сходил: Ножницы";
    } else {
      return "Компьютер сходил: Бумага";
    }
  }

  function result(
    compNum: number,
    playerNum: string | undefined
  ): string | undefined {
    if (typeof playerNum == "string") {
      if (
        (playerNum == "камень" && compNum <= 1) ||
        (playerNum == "ножницы" && compNum == 2) ||
        (playerNum == "бумага" && compNum == 3)
      ) {
        tryouts++;
        return "Ничья";
      } else if (
        (playerNum == "камень" && compNum == 2) ||
        (playerNum == "ножницы" && compNum == 3) ||
        (playerNum == "бумага" && compNum <= 1)
      ) {
        tryouts++;
        wins++;
        return "Вы выиграли!";
      } else if (
        (playerNum == "камень" && compNum == 3) ||
        (playerNum == "ножницы" && compNum <= 1) ||
        (playerNum == "бумага" && compNum == 2)
      ) {
        tryouts++;
        loses++;
        return "Вы проиграли";
      } else return "Введите правильное значение";
    }
  }

  console.log(
    computerStep() +
      "\n" +
      result(number, step) +
      "\n" 
  );
}

function compute(wins: number, loses: number): void {
  if (wins < loses) {
    console.log(
      "Вы програли! " +
        "Всего побед: " +
        wins +
        "," +
        "Всего поражений: " +
        loses +
        "."
    );
  } else if (wins > loses) {
    console.log(
      "Вы выиграли! " +
        "Всего побед: " +
        wins +
        ". " +
        "Всего поражений: " +
        loses +
        "."
    );
  } else {
    console.log(
      "Ничья! " +
        +"Всего побед: " +
        wins +
        ". " +
        "Всего поражений: " +
        loses +
        "."
    );
  }
}

while (tryouts < 5) {
  //tryouts++;
  computerPlay();
}

compute(wins, loses);
