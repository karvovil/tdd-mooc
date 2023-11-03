import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });
  it("empty items should be empty", () => {
    const gildedRose = new Shop();
    const items = gildedRose.updateQuality();
    expect(items).to.be.an('array').that.is.empty;
  });
  it("sellIn should decrease", () => {
    const gildedRose = new Shop(
      [new Item("foo", 3, 3)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(2);

  });
  it("should decrease items quality by two if sellIn has passed", () => {
    const gildedRose = new Shop(
      [new Item("foo", 0, 3)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);

  });
  it("items quality should not be negative", () => {
    const gildedRose = new Shop(
      [new Item("foo", 0, 0)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);

  });
  it("Aged Bries quality should increase", () => {
    const gildedRose = new Shop(
      [new Item("Aged Brie", 1, 3)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(4);
    
  });
  it("Aged Bries quality should increase more", () => {
    const gildedRose = new Shop(
      [new Item("Aged Brie", 0, 3)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(5);
    
  });
  it("If Aged bries quality is 50, it won't increase", () => {
    const gildedRose = new Shop(
      [new Item("Aged Brie", 0, 50)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  it("concert pass quality should increase", () => {
    const gildedRose = new Shop(
      [new Item("Backstage passes to a TAFKAL80ETC concert", 15, 2)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(3);
  });
  it("concert pass quality should increase by 2", () => {
    const gildedRose = new Shop(
      [new Item("Backstage passes to a TAFKAL80ETC concert", 9, 2)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(4);
  });
  it("concert pass quality should increase by 3", () => {
    const gildedRose = new Shop(
      [new Item("Backstage passes to a TAFKAL80ETC concert", 4, 2)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(5);
  });
  it("concert pass quality can't go over 50", () => {
    const gildedRose = new Shop(
      [new Item("Backstage passes to a TAFKAL80ETC concert", 2, 49)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });
  it("should set concert pass quality to 0", () => {
    const gildedRose = new Shop(
      [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 33)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
  
  it("Sulfuras quality should stay the same", () => {
    const gildedRose = new Shop(
      [new Item("Sulfuras, Hand of Ragnaros", 5, 80)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(80);
  });
  it("Sulfuras sellIn should stay the same", () => {
    const gildedRose = new Shop(
      [new Item("Sulfuras, Hand of Ragnaros", 7, 45)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(7);
  });
  


});
