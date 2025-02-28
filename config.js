// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Rio",
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "InsertYourAPIKeyHere123456", // Write here your API Key
  weatherIcons: "White", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "48.8575",
  defaultLongitude: "2.3514",

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Mail",
      icon: "mail",
      link: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      id: "2",
      name: "Youtube",
      icon: "youtube",
      link: "https://youtube.com/",
    },
    {
      id: "5",
      name: "Spotify",
      icon: "music",
      link: "https://open.spotify.com/",
    },
    {
      id: "4",
      name: "Hacker News",
      icon: "newspaper",
      link: "https://www.hckrnws.com/",
    },
    {
      id: "3",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "6",
      name: "Chat GPT",
      icon: "bot-message-square",
      link: "https://chatgpt.com/",
    },
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Music",
      icon: "headphones",
      link: "https://open.spotify.com",
    },
    {
      id: "2",
      name: "twitter",
      icon: "twitter",
      link: "https://twitter.com/",
    },
    {
      id: "3",
      name: "bot",
      icon: "bot",
      link: "https://discord.com/app",
    },
    {
      id: "4",
      name: "Amazon",
      icon: "shopping-bag",
      link: "https://amazon.com/",
    },
    {
      id: "5",
      name: "Hashnode",
      icon: "pen-tool",
      link: "https://hashnode.com/",
    },
    {
      id: "6",
      name: "Figma",
      icon: "figma",
      link: "https://figma.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "music",
      id: "1",
      links: [
        {
          name: "Post-rock",
          link: "https://open.spotify.com/track/05JqOBN6XW4eFUVQlgR0I3?si=59e53fae97654656&go=1",
        },
        {
          name: "Electro",
          link: "https://open.spotify.com/track/10VVCjsMTbM39bPzygGSex?si=783ac09390b44243&go=1",
        },
        {
          name: "Trip hop",
          link: "https://open.spotify.com/track/6bpK8VkbJqd7nzjwy07BVH?si=6c252e73bf414aec&go=1",
        },
        {
          name: "Pop",
          link: "https://open.spotify.com/track/2Zw3HNjaNV42LnQ2uY5JQs?si=9923cdf8993c4255&go=1",
        },
      ],
    },
    {
      icon: "coffee",
      id: "2",
      links: [
        {
          name: "Slack",
          link: "https://slack.com",
        },
        {
          name: "Trello",
          link: "https://trello.com",
        },
        {
          name: "Figma",
          link: "https://figma.com",
        },
        {
          name: "Notion",
          link: "https://notion.so",
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "binary",
      id: "1",
      links: [
        {
          name: "Spotify",
          link: "https://www.spotify.com",
        },
        {
          name: "Reddit",
          link: "https://www.reddit.com",
        },
        {
          name: "Hashnode",
          link: "https://www.hashnode.com",
        },
        {
          name: "Pocket",
          link: "https://www.pocket.com",
        },
      ],
    },
    {
      icon: "github",
      id: "2",
      links: [
        {
          name: "Front",
          link: "https://www.reddit.com/r/Frontend/",
        },
        {
          name: "Rust",
          link: "https://www.reddit.com/r/rust/",
        },
        {
          name: "Go",
          link: "https://www.reddit.com/r/golang/",
        },
        {
          name: "Repos",
          link: "https://github.com/migueravila",
        },
      ],
    },
  ],
};
