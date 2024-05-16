module.exports =
  /**
   * @type {const}
   * @satisfies {import("@clockworkdog/cogs-client").CogsPluginManifest}
   */
  ({
    name: "Popups",
    description: "A simple plugin for showing popup windows from COGS",
    version: "1",
    icon: "browsers",
    minCogsVersion: "5.0.0",
    window: {
      width: 400,
      height: 200,
    },

    config: [],
    events: {
      fromCogs: [
        {
          name: "Show Popup",
          value: {
            type: "string",
          },
        },
      ],
      toCogs: [],
    },
    state: [],
    media: {},
  });
