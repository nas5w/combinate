import combinate from "../index";

describe("combinate", () => {
  it("generates combinations for an empty object", () => {
    expect(combinate({})).toEqual([]);
  });

  it("generates combinations", () => {
    const obj = {
      x: [1, 2, 3],
      y: ["a", "b"],
      z: [20, 30],
    };
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
