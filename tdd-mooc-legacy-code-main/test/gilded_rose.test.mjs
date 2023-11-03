import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  it("should increase concert pass quality", () => {
    const gildedRose = new Shop(
      [new Item("Backstage passes to a TAFKAL80ETC concert", 1, 2)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(5);
  });

  it("should decrease items quality by two", () => {
    const gildedRose = new Shop(
      [new Item("foo", 0, 2)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it("should set concert pass quality to 0", () => {
    const gildedRose = new Shop(
      [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 3)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it("Aged Bries quality shuold increase by two", () => {
    const gildedRose = new Shop(
      [new Item("Aged Brie", 0, 3)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(5);
  });

  it("Sulfuras quality should stay the same", () => {
    const gildedRose = new Shop(
      [new Item("Sulfuras, Hand of Ragnaros", 0, 3)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(3);
  });

});
