import { Builder, Capabilities, By } from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://localhost:4000");
});

afterAll(async () => {
  await driver.quit();
});

test("I can start a game", async () => {
  let button = await (await driver).findElement(By.id("start-game"));
  await button.click();
});

test("clicking upper right corner adds an Xcell", async () => {
  let upperRight = await (await driver).findElement(By.id("cell-2"));
  await upperRight.click();
  await driver.sleep(2000);
  expect(await upperRight.getText()).toContain("X");
});

test("game crowns a winner", async () => {
  var winner = findWinner();
  var gameOver = false;

  if (winner) {
    $("h1").text(winner + "won");
    gameOver = true;
  } else if (isBoardFull()) {
    $("h1").text("Tie!");
    gameOver = true;
  }

  if (gameOver) {
    $("#game-board td").off("click");
  }

  return gameOver;
});

test("AI plays", async () => {
        function computerMove() {

        for (var i = 0; i < 9; i++) {
          if (i === 0 || i === 9) {
            board[i] = "O";
            return board;
          }
          if (board[i] > 9) {
            board[i] = "O";
            return board;
          }
        }
      }
    }


    // $(“h1).text(winner + “won”);
    // (i === 0 || i == 9) { board[i] = “O”;
