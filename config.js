const config = {
  "modalQuestions": [
    {
      "id": "favorite_local_events",
      "questionText": "Which type of local events do you enjoy attending most in Toronto?",
      "options": [
        { "value": "major_league_sports", "text": "Major league sports games" },
        { "value": "food_wine_festivals", "text": "Food and wine festivals" },
        { "value": "music_concerts", "text": "Music concerts" },
        { "value": "art_exhibitions", "text": "Art exhibitions" }
      ]
    },
    {
      "id": "lifestyle_preferences",
      "questionText": "On a typical weekend, how do you prefer to spend your time?",
      "options": [
        { "value": "exploring_real_estate", "text": "Exploring new real estate developments or open houses" },
        { "value": "relaxing_home", "text": "Relaxing at home with friends and family" },
        { "value": "outdoor_activities", "text": "Engaging in outdoor activities like hiking or biking" },
        { "value": "dining_trendy", "text": "Dining at trendy restaurants or cafes" }
      ]
    },
    {
      "id": "travel_habits",
      "questionText": "How do you typically spend your vacations?",
      "options": [
        { "value": "international_destinations", "text": "Traveling to international destinations" },
        { "value": "local_attractions", "text": "Visiting local attractions around Toronto" },
        { "value": "staycations_luxury", "text": "Taking staycations in luxury accommodations" },
        { "value": "road_trips", "text": "Going on road trips to explore new areas" }
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How involved are you in community activities or neighborhood associations?",
      "options": [
        { "value": "very_involved", "text": "Very involved, I attend meetings and events regularly" },
        { "value": "somewhat_involved", "text": "Somewhat involved, I participate occasionally" },
        { "value": "interested_not_involved", "text": "Not very involved, but I’m interested in what's happening" },
        { "value": "not_involved", "text": "Not involved at all" }
      ]
    }
  ],
  "giveaway": {
    "name": "Jays Tickets Giveaway",
    "heroHeadline": "Win Tickets to an Exciting <span class='highlight'>Toronto Blue Jays Game</span>!",
    "heroSubheadline": "Celebrate Canada Day with us and get a chance to win tickets worth $100! Visit our booth on July 1st and enter today.",
    "promotionDates": "Promotion runs from June 1, 2025 until July 1, 2025.",
    "endDate": "2025-07-01T23:59:59",
    "heroBackgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/yjtdpv18tsrma0cqfe6vwzwc8r.jpg",
    "heroCtaText": "Enter Now for Your Chance to Win!",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 You're In! 🎉",
    "successModalMainMessage": "Your entry for the <strong>Toronto Blue Jays Tickets Giveaway</strong> has been successfully submitted. Best of luck!",
    "successModalEmailPrompt": "We'll announce the winner via email after the draw date. Keep an eye on your inbox!"
  },
  "prize": {
    "name": "Toronto Blue Jays Tickets",
    "value": "$100 Value",
    "description": "Enjoy a thrilling live baseball experience with tickets to a Toronto Blue Jays game. Perfect for fans and families looking to enjoy a summer day filled with excitement at the ballpark.",
    "images": [
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/bvwyew9z61rme0cqfe6rb1cvaw.jpg",
        "alt": "Blue Jays Tickets and Baseball"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/pg11a72phdrme0cqfe6tb63hk0.jpg",
        "alt": "Toronto Blue Jays Fans"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/cgzm213f61rm80cqfe6sbbjdfw.jpg",
        "alt": "Baseball Stadium Atmosphere"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/wmfpr4c7g9rm80cqfe6rbmqsdc.jpg",
        "alt": "Toronto Blue Jays Game in Action"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "Exclusive tickets to a Toronto Blue Jays game worth $100" },
      { "icon": "fas fa-users", "text": "Fun outing for family or friends" },
      { "icon": "fas fa-baseball-ball", "text": "Experience live Major League Baseball excitement" },
      { "icon": "fas fa-check-circle", "text": "No purchase necessary to enter or win" },
      { "icon": "fas fa-bolt", "text": "Quick and easy entry at our booth" }
    ],
    "limitedTimeOfferText": "🎁 Limited Time Giveaway!",
    "ctaButtonText": "I WANT TO WIN THESE TICKETS!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-map-marker-alt",
        "title": "Visit Our Booth",
        "description": "Catch us at the Canada Day event on July 1st to enter your details."
      },
      {
        "icon": "fas fa-list",
        "title": "Complete a Quick Survey",
        "description": "Fill out a short survey at the booth to qualify for the prize draw."
      },
      {
        "icon": "fas fa-envelope-open-text",
        "title": "Wait for the Draw",
        "description": "We'll contact the winner via email shortly after the draw on July 2nd."
      }
    ],
    "highlights": [
      { "icon": "fas fa-stopwatch", "text": "Fast & Simple Entry" },
      { "icon": "fas fa-ticket-alt", "text": "Amazing $100 Value Prize" },
      { "icon": "fas fa-smile", "text": "Free to Enter" }
    ]
  },
  "entryForm": {
    "subtitle": "Provide your details below for a chance to win tickets to a Blue Jays game!",
    "entryCountText": "Join hundreds of baseball fans already entered!",
    "socialSharePrompt": "Share this exciting giveaway with your friends:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win tickets to a Toronto Blue Jays game!")
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Transparent Winner Selection",
      "text": "Our winner will be chosen through a completely random and unbiased process using a certified random number generator during the designated draw date."
    },
    "importantNotice": {
      "title": "Winner Notification",
      "text": "The winner will be contacted by email on or about July 2, 2025. Please ensure your email is valid and keep an eye on your inbox, including your spam/junk folders."
    },
    "faq": [
      {
        "q": "Who can enter?",
        "a": "Open to legal residents of Toronto aged 18 or older."
      },
      {
        "q": "What is the giveaway period?",
        "a": "Entry is open from June 1, 2025 to July 1, 2025 (Canada Day event)."
      },
      {
        "q": "How is the winner selected?",
        "a": "A single winner will be randomly chosen from all eligible entries after the promotion ends."
      },
      {
        "q": "When will the winner be notified?",
        "a": "Notification will be sent around July 2, 2025 via email."
      },
      {
        "q": "How many times can I enter?",
        "a": "Limit one entry per person/email for the duration of the promotion."
      },
      {
        "q": "Is my information secure?",
        "a": "All data collected is protected and used solely for this giveaway as per our Privacy Policy."
      }
    ],
    "tips": [
      "Ensure your email address is correct.",
      "Add our email address to your contacts to avoid missing winner notifications.",
      "Follow Sky Group on social media for updates and announcements."
    ]
  },
  "footerContact": {
    "organizerName": "Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/eed1f4ef-c781-4015-8092-dda5b2f860d9/68278639dbfc24a322fd422d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PMSJ5I%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T012310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgDNhTCUUEyvwQJBqwPMaHnJdr4OTXNrahzIVMDdnxbQIgdHXEQg2ahz7%2FL5X65R4yGptftWmNJbi4wdQ0MSnH%2FkMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPR9LLGKqI9vT%2FOmJyrcA0MUrGjJJFM4nMdCjDWy1oy0LmBFRtAeUxJu2EPSMQ23NoDqFR1kPBVXK2Xe1KOZWhpq1DPJgU23DSD9T0xSXreCzJ8U8u%2BHI6eyy2%2FVeuucVCVafwJXwT%2FErSPffLINj8ELcl9eDQ38QKjEuoEBlrlnKvLPyjkRgT1U%2Fhly7HN6Zu%2FzMwd5%2FjYxTCPwLEvyQtspbKkmRF0t93ByAHRHzuL4oYFppGFP8%2BbxraiforhQIp2rt1R0j0Ht5xFjRNOr7sHJHVx1GhTGBwrtx20R%2BrU2QkJYlCR8rLfNWwjWJXBlE9yGP5E5VZrmejW%2FYCNQcAmAJ33iQ%3Bi6NHip6QWoewZ88H5lMJ7npxpTGMkNMw7g5OEl3w4Gayv%2BYPGG70qx4IMgt9eVHvXmGbiPna2A679a%2Beis06X0GFMpHOKqx9%2F9AwQ%2B6xpmT9uVwmzm8FOWo%2FE3edBV8rMU8MmrdtrdA%2FBkDzqpnZ6ojf6GaTqNGu5uPtjKousK0lWEgV3IDBQVEqDJaz0sPhQiOkCW4K40EzD6CJ857%2FMZvaatohRUjVFPzoMUGGmc1t4lIp%2F2kpGCX7Or8Xgd67oPlxEQcL5LAge1JUrky1cVbyIc%2FXtxS29E5PMmWxFBX%2Bu3WNEDML7ewsIGOqUB5e3uZ%2F9N79jWYsm7ouzLAAJTykJUoHeqbwsGovEm9ZxUlIeQ8Uf97%2FbJxw0XSgkw6Jd%2BWw7PpRBiNXKnpazwNwrj%2FoqnKgeBf67R0KXzzcVFB38cdRL7rsH9S7MRqpXWrBBF4HbwF9fIH5IyQQ2ptw5QyWoiF22hUYEd%2FBvz0SznYNo9953u6RTLIrGTfXBEXdi9OstuwG5rC7XoSeHyEsdY0g2A&X-Amz-Signature=38a5932939a2aebd3e07ca280ed17a26afd830adead793e180feb8b77af66f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "copyrightOwner": "Sky Group"
  },
  "meta": {
    "pageTitle": "Win Toronto Blue Jays Tickets!",
    "navBrandLogoText": "Sky Group",
    "privacyPolicyLink": "https://www.mls.theskygroup.ca/privacy-policy"
  },
  "settings": {
    "ghlWebhookUrl": "",
    "theme": "dark",
    "confettiColors": ["#004C97", "#00AEEF", "#E8291C", "#FFFFFF"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-976",
    "repoUrl": "https://github.com/arslvn93/Giveaway-976",
    "tag": "Toronto Blue Jays Giveaway 2025",
    "netlifyUrl": "http://Giveaway-976.netlify.app",
    "netlifyId": "1003329858"
  }
};