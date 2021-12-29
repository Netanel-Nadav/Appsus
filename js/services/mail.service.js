

function _createMail(subject, body, to) {
    const email = {
        id: makeId(),
        subject,
        body,
        isRead: false,
        sentAt: Date.now(),
        to,
    }
    return email
}


function _createMails() {
    const emails = [{
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'natinadav932@gmail.com'
    },
    {
        id: 'e102',
        subject: 'Dare you Idiot!',
        body: 'Hi im rotem',
        isRead: false,
        sentAt: 1551133930594,
        to: 'rotembeneli@gmail.com'
    }
    ]
    return emails
}