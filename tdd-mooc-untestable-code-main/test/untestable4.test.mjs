import { PasswordService, PostgresUserDao } from "../src/untestable4.mjs";
import argon2 from "@node-rs/argon2";
import { expect } from "chai";

describe("Untestable 4: enterprise application", () => {
  let service;
  beforeEach( async () => {
    service = new PasswordService();
    PostgresUserDao.getInstance().save({
      userId: 666,
      passwordHash: argon2.hashSync('password')
    });
  });

  afterEach( async () => {
    PostgresUserDao.getInstance().close();
  });

  it("password can be changed", async () => {
    await service.changePassword(666, 'password', 'newPass')
    const user = await PostgresUserDao.getInstance().getById(666);
    expect(
      argon2.verifySync(user.passwordHash, 'newPass')
    ).to.be.true;
  });
});
