import { removeEmptyValues } from "./objectHelper";

describe("Object Helper - Unit Tests", () => {
  it("Should remove empty values from object", () => {
    // given
    const givenObject = {
      prop_one: "value_one",
      prop_two: "",
      prop_three: "value_three",
    };

    const expectedResult = {
      prop_one: "value_one",
      prop_three: "value_three",
    };

    // when
    const result = removeEmptyValues(givenObject);

    // then
    expect(result).toMatchObject(expectedResult);
  });
});
