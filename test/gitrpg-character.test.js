import { html, fixture, expect } from '@open-wc/testing';
import "../gitrpg-character.js";

describe("GitrpgCharacter test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <gitrpg-character
        title="title"
      ></gitrpg-character>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
