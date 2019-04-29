import { login, logout } from "../../actions/auth";

test("should generate login action object", () => {
  const action = login("44aa");
  expect(action).toEqual({ type: "LOGIN", uid: "44aa" });
});

test("should generate login action object", () => {
  const action = logout();
  expect(action).toEqual({ type: "LOGOUT" });
});
