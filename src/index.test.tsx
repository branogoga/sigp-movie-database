function add(a: number, b: number) {
    return a + b;
}

it("adds two numbers", function() {
    expect(add(1,2)).toBe(3);
});