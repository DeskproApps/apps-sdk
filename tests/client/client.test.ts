import { DeskproClient } from "../../src/client/client";

test("onShow() callback added", () => {
  const client = new DeskproClient(jest.fn(), { settings: {} });

  const cb = jest.fn();

  client.onShow(cb);

  client.getParentMethods().onShow({ settings: {}, type:"user" });

  expect(cb.mock.calls.length).toBe(1);
});

test("onReady() callback added", () => {
  const client = new DeskproClient(jest.fn(), { settings: {} });
  const cb = jest.fn();

  client.onReady(cb);
  client.getParentMethods().onReady({ settings: {}, type:"user" });

  expect(cb.mock.calls.length).toBe(1);
});

test("onChange() callback added", () => {
  const client = new DeskproClient(jest.fn(), { settings: {} });
  const cb = jest.fn();

  client.onChange(cb);
  client.getParentMethods().onChange({ settings: {}, type:"user" });

  expect(cb.mock.calls.length).toBe(1);
});



test("run() mount core methods", async () => {
  const proxyAuthMock = jest.fn();
  const setHeightMock = jest.fn();
  const setBadgeCountMock = jest.fn();
  const getTitleMock = jest.fn();

  const parent = jest.fn().mockReturnValue({
    promise: new Promise((resolve) => {
      resolve({
        _getProxyAuth: proxyAuthMock,
        _setHeight: setHeightMock,
        setBadgeCount: setBadgeCountMock,
        setTitle: getTitleMock,
      });
    }),
  });
  const client = new DeskproClient(parent, { settings: {} });
  await client.run();

  expect(client.getProxyAuth).toBeTruthy();
  expect(client.resize).toBeTruthy();
  expect(client.setBadgeCount).toBeTruthy();
  expect(client.setTitle).toBeTruthy();
});
