const check = [
    {
        type: "select",
        name: "domain",
        message: "What domain do you want to check?",
        choices: [
            { value: "is-cool.dev" },
            { value: "is-local.org" },
            { value: "is-not-a.dev" },
            { value: "localplayer.dev" },
            { value: "is-a-fullstack.dev"}
        ]
    },

    {
        type: "text",
        name: "subdomain",
        message: "What subdomain would you like to check?"
    }
]

const register = [
    {
        type: "select",
        name: "domain",
        message: "What domain do you want your subdomain to use?",
        choices: [
            { value: "is-cool.dev" },
            { value: "is-local.org" },
            { value: "is-not-a.dev" },
            { value: "localplayer.dev" },
            { value: "is-a-fullstack.dev"}
        ]
    },

    {
        type: "text",
        name: "subdomain",
        message: "What subdomain would you like?"
    },

    {
        type: "select",
        name: "record",
        message: "What type of record do you want to use?",
        choices: [
            { value: "A" },
            { value: "AAAA" },
            { value: "CNAME" },
            { value: "MX" },
            { value: "TXT" }
        ]
    },

    {
        type: "text",
        name: "record_value",
        message: "What should the value of the record be?"
    },

    {
        type: "select",
        name: "proxy_state",
        message: "Should the record be proxied through Cloudflare?",
        choices: [
            { title: "No", value: "false" },
            { title: "Yes", value: "true" }
        ]
    }
]

module.exports = {
    check,
    register
}
