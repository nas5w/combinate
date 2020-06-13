import combinate from "../index";

describe("combinate", () => {
  it("generates combinations for empty object", () => {
    const combos = combinate({});
    expect(combos).toEqual([]);
  });
  it("generates combinations", () => {
    var obj = {
      x: [1, 2, 3],
      y: ["a", "b"],
      z: [20, 30],
    } as const;
    const combos = combinate(obj);
    expect(combos).toEqual([
      { x: 1, y: "a", z: 20 },
      { x: 2, y: "a", z: 20 },
      { x: 3, y: "a", z: 20 },
      { x: 1, y: "b", z: 20 },
      { x: 2, y: "b", z: 20 },
      { x: 3, y: "b", z: 20 },
      { x: 1, y: "a", z: 30 },
      { x: 2, y: "a", z: 30 },
      { x: 3, y: "a", z: 30 },
      { x: 1, y: "b", z: 30 },
      { x: 2, y: "b", z: 30 },
      { x: 3, y: "b", z: 30 },
    ]);
  });
});
