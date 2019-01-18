'use strict';

const media = [
    {
        title: 'Hop on Pop',
        description: "A delightful children's book.",
        type: 'Book',
        contributor: 'Dr. Suess',
        showDetail: false,
    },
    {
        title: 'The Joy of Painting',
        description: "Create a world of happy little trees!",
        type: 'DVD',
        contributor: 'Bob Ross',
        showDetail: false
    },
    {
        title: 'Supernatural: The Complete 12th Season',
        description: "A (literally) neverending roadtrip.",
        type: 'DVD',
        contributor: "",
        showDetail: false
    },
    {
        title: 'Planet Earth II',
        description: "Hours of beautiful but heart attack-inducing nature footage",
        type: 'Streaming video',
        contributor: 'David Attenborough',
        showDetail: false,
    },
    {
        title: 'Titanic',
        description: "The boat sinks.",
        type: 'DVD',
        contributor: 'James Cameron',
        showDetail: false,
    },
    {
        title: 'The Sirens of Titan',
        description: "Mankind flung its advance agents ever outward, ever outward... it flung them like stones.",
        type: 'Book',
        contributor: 'Kurt Vonnegut',
        showDetail: false,
    },
    {
        title: 'Better Call Saul',
        description: "A slow-burning Breaking Bad prequel.",
        type: 'Streaming video',
        contributor: '',
        showDetail: false,
    }
]

const app = new Vue({
    el: '#media-list',
    data: {
        title: 'Treehouse Public Library',
        mediaList: media,
        selectedType: '',
    },
    methods: {
        toggleDetails: function (media) {
            media.showDetail = !media.showDetail
        },
        filterList: function (event) {
            this.selectedType = event.target.value;
        },
        mapIcon: function (media) {
            return media.type.toLowerCase().replace('*', '+');
        },
    },
    computed: {
        types: function () {
            return media.reduce((accumulated, current) => {
                if (!accumulated.includes(current.type)) {
                    accumulated.push(current.type);
                }
                return accumulated;
            }, []);
        },
    },
});
