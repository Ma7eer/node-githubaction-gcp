describe("/sample test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
  it("should test that true !== false", () => {
    expect(true).not.toBe(false);
  });
});
