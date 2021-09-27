const initialState = {
    portfolioItems: [
        {
            text: "\"IT Support Company\" CRM project (React, JS, NodeJS)",
            shortName: "IT Support Company",
            linkProject: null,
            linkGitHub: "https://github.com/starman-cook/it_support",
            imagesAndDetails:  [
                {
                    original: './screenshots/ItSupport/login_simple_1000_600.png',
                    thumbnail: './screenshots/ItSupport/login_simple_250_150.png',
                    description: "Login by username and password, used by directors of the client companies only"
                },
                {
                    original: './screenshots/ItSupport/login_phone_1000_600.png',
                    thumbnail: './screenshots/ItSupport/login_phone_250_150.png',
                    description: "Login by phone number is used by all the employees of the client companies"
                },
                {
                    original: './screenshots/ItSupport/sms_verification_1000_600.png',
                    thumbnail: './screenshots/ItSupport/sms_verification_250_150.png',
                    description: "After typing in your phone number, if you are registered user you will receive an sms"
                },
                {
                    original: './screenshots/ItSupport/history_1000_600.png',
                    thumbnail: './screenshots/ItSupport/history_250_150.png',
                    description: "Users may see the history of companies applications"
                },
                {
                    original: './screenshots/ItSupport/filters_1000_600.png',
                    thumbnail: './screenshots/ItSupport/filters_250_150.png',
                    description: "There are bunch of different filters that can be combined together for precise filtration. Directors also have a filter by their employees with preloading list of all existing employees in director's company"
                },
                {
                    original: './screenshots/ItSupport/period_1000_600.png',
                    thumbnail: './screenshots/ItSupport/period_250_150.png',
                    description: "One of the filters opens modal window with calendar where user may choose a period of dates"
                },
                {
                    original: './screenshots/ItSupport/full_info_1000_600.png',
                    thumbnail: './screenshots/ItSupport/full_info_250_150.png',
                    description: "By clicking on the application you can see all the details of the application including files. Canceled applications can be returned back to work from here. Image files are seeing as images, others seen as links to download this files"
                },
                {
                    original: './screenshots/ItSupport/form_1000_600.png',
                    thumbnail: './screenshots/ItSupport/form_250_150.png',
                    description: "This is a form to create new application. There is also a possibility to activate previous application, if it was canceled"
                },
                {
                    original: './screenshots/ItSupport/timer_1000_600.png',
                    thumbnail: './screenshots/ItSupport/timer_250_150.png',
                    description: "After sending a form user sees a timer. Time is generated on the backend, reloading a page will not drop down the timer"
                },
                {
                    original: './screenshots/ItSupport/status_1000_600.png',
                    thumbnail: './screenshots/ItSupport/status_250_150.png',
                    description: "Specialist is working on your application in realtime. User may leave comments for the application, comments for the specialist, and user can rate the work of the specialist"
                }
            ]
        },
        {
            text: "\"Attractor School\", notification bot (TypeScript, Telegram, MongoDB, NodeJS)",
            shortName: "Attractor bot",
            linkProject: null,
            linkGitHub: "https://github.com/starman-cook/attractor_notification_bot_version_2p",
            imagesAndDetails:  [
                {
                    original: './screenshots/bot/instructions_1000_600.png',
                    thumbnail: './screenshots/bot/instructions_250_150.png',
                    description: "Telegram bot has built-in instruction to help school administration in creating a group chat with bot"
                },
                {
                    original: './screenshots/bot/lesson_and_exam_1000_600.png',
                    thumbnail: './screenshots/bot/lesson_and_exam_250_150.png',
                    description: "Bot doesnt use calendar, it sends messages about lessons and exams with precise dates thanks to algorithms that counts it automatically"
                },
                {
                    original: './screenshots/bot/payment_and_vacances_1000_600.png',
                    thumbnail: './screenshots/bot/payment_and_vacances_250_150.png',
                    description: "Bot tells students about upcoming holidays and doesn't disturb chat during the holidays. Also, bot sends reminders about payments"
                },
                {
                    original: './screenshots/bot/allgroups_1000_600.png',
                    thumbnail: './screenshots/bot/allgroups_250_150.png',
                    description: "Administration may see all the existing groups in the school with all the information about the group. Groups can be edited or deleted"
                },
                {
                    original: './screenshots/bot/ciphers_1000_600.png',
                    thumbnail: './screenshots/bot/ciphers_250_150.png',
                    description: "It also has a game inside for the most curious students. There are several ciphers that lead to new commands until you find a command that finishes the game"
                }
            ]
        },
        {
            text: "\"Froot\" Company, survey over employees (Electron, React, JS, NodeJS, MongoDB)",
            shortName: "Froot survey program",
            linkProject: null,
            linkGitHub: "https://github.com/starman-cook/FrootWatcher",
            imagesAndDetails:  [
                {
                    original: './screenshots/bigBrother/tray_icon_1000_600.png',
                    thumbnail: './screenshots/bigBrother/tray_icon_250_150.png',
                    description: "After employee launches the application an icon appears at the taskbar"
                },
                {
                    original: './screenshots/bigBrother/login_1000_600.png',
                    thumbnail: './screenshots/bigBrother/login_250_150.png',
                    description: "As an employee user has a username and password from the main desktop application."
                },
                {
                    original: './screenshots/bigBrother/start_1000_600.png',
                    thumbnail: './screenshots/bigBrother/start_250_150.png',
                    description: "After login user opens the window where he(she) works and then clicks Start. Program registers the time and makes a screenshot of display"
                },
                {
                    original: './screenshots/bigBrother/stop_1000_600.png',
                    thumbnail: './screenshots/bigBrother/stop_250_150.png',
                    description: "When user finishes a task he(she) clicks Stop and program makes another screenshot"
                },
                {
                    original: './screenshots/bigBrother/results_1000_600.png',
                    thumbnail: './screenshots/bigBrother/results_250_150.png',
                    description: "Director can see all the screenshots and total time spent on any task by any of its employees"
                }
            ]
        },
        {
            text: "\"Froot\" Company, conversation room(s) reserve (React, JS, NodeJS, MongoDB)",
            shortName: "Froot room reserves",
            linkProject: null,
            linkGitHub: "https://github.com/starman-cook/froot_project",
            imagesAndDetails:  [
                {
                    original: './screenshots/roomReserve/calendar_1000_600.png',
                    thumbnail: './screenshots/roomReserve/calendar_250_150.png',
                    description: "All employees are able to see calendar with information about conversation room reserve and they may make their own reserves. Administrator can add new rooms"
                },
                {
                    original: './screenshots/roomReserve/makingReserve_1000_600.png',
                    thumbnail: './screenshots/roomReserve/makingReserve_250_150.png',
                    description: "Reservation includes choice of time, description, file attachment and choice of participants. Participants are preloaded with their name, surname and position"
                },
                {
                    original: './screenshots/roomReserve/busyDay_1000_600.png',
                    thumbnail: './screenshots/roomReserve/busyDay_250_150.png',
                    description: "Calendar shows in colors how busy days are, where green is half free, yellow is more than half of the day is reserved, and red means that there are no more free hours to make a reserve"
                },
                {
                    original: './screenshots/roomReserve/notification_1000_600.png',
                    thumbnail: './screenshots/roomReserve/notification_250_150.png',
                    description: "After reservation all participants receive the invitation on their Telegram app, where they may accept or decline participation"
                }
            ]
        },
        {
            text: "Game \"Snake\" (JS, CSS, HTML)",
            shortName: "Game Snake",
            linkProject: "https://starman-cook.github.io/snake/index.html",
            linkGitHub: "https://github.com/starman-cook/snake",
            imagesAndDetails: [
                {
                    original: './screenshots/snake/snake_start_1000_600.png',
                    thumbnail: './screenshots/snake/snake_start_250_150.png',
                    description: "Made a game just for fun, try it yourself"
                },
                {
                    original: './screenshots/snake/snake_level_1000_600.png',
                    thumbnail: './screenshots/snake/snake_level_250_150.png',
                    description: "There are 4 levels, speed increases with each level and each apple"
                }
            ]
        },
        {
            text: "Messenger (JS, React, WebSocket, MongoDB, NodeJS, Cucumber, Selenium, CSS, HTML)",
            shortName: "Messenger",
            linkProject: null,
            linkGitHub: "https://github.com/starman-cook/tt_chat",
            imagesAndDetails: [
                {
                    original: './screenshots/chat/fullScreen_noMessages_1000_600.png',
                    thumbnail: './screenshots/chat/fullScreen_noMessages_250_150.png',
                    description: "Messenger shows who is online, who is registered and what chats do I already have"
                },
                {
                    original: './screenshots/chat/actionChat_1000_600.png',
                    thumbnail: './screenshots/chat/actionChat_250_150.png',
                    description: "Messages appear immediately in interlocutor message window, no reload or interval needed, thanks to WebSocket"
                },
                {
                    original: './screenshots/chat/register_1000_600.png',
                    thumbnail: './screenshots/chat/register_250_150.png',
                    description: "Users register and each user has its own chats"
                },
                {
                    original: './screenshots/chat/login_1000_600.png',
                    thumbnail: './screenshots/chat/login_250_150.png',
                    description: "Just a login page))"
                }
            ]
        }
    ]
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return {...state}
    }
}
export default reducer