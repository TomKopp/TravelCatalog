export default [
    {
        id: 0
        , sections: [
            {
                id: 0
                , content: [ 'Flight 1', 'to Malle' ]
                , media: [
                    {
                        type: 'img'
                        , src: 'https://dummyimage.com/400x300/757575/fff&text=Flight1'
                        , description: 'Image description goes here. Maybe with a second line'
                    }
                ]
                , location: 'Frankfurt'
                , rating: 2
                , transportation: { date: new Date() }
            }
            , {
                id: 1
                , content: ['string 1', 'string 2']
                , media: [
                    {
                        type: 'img'
                        , src: 'https://dummyimage.com/400x300/757575/fff&text=Planet_Earth'
                        , description: 'Image description goes here. Maybe with a second line'
                    }
                ]
                , location: 'Planet Earth'
                , rating: 5
            }
            , {
                id: 2
                , content: [
                    'Hotel 1'
                    , 'Am Ballermann'
                    , 'Nur 3m vom Strand entfernt.'
                ]
                , media: [
                    {
                        type: 'img'
                        , src: 'https://dummyimage.com/400x300/757575/fff&text=Hotel1'
                        , description: 'Image description goes here. Maybe with a second line'
                    }
                ]
                , location: 'Mallorca'
                , rating: 4
                , accomodation: {
                    roomType: 'normal'
                    , catering: 'Breakfast'
                    , organizer: 'Air Marin'
                }
            }
            , {
                id: 3
                , content: [ 'Flight 2', 'to Frankfurt' ]
                , media: [
                    {
                        type: 'img'
                        , src: 'https://dummyimage.com/400x300/757575/fff&text=Flight2'
                        , description: 'Image description goes here. Maybe with a second line'
                    }
                ]
                , location: 'Malle'
                , rating: 3
                , transportation: { date: new Date() }
            }
        ]
    }
];
