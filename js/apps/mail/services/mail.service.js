import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'


export const emailService = {
    query,
    getEmailById,
    removeEmail,
    markAsRead,
    saveEmail
}


const STORAGE_KEY = 'emailDB'




function query(filterBy = null) {
    let emails = _loadMailsFromStorage() || _createMails()
    if (emails.length === 0) emails = _createMails()
    if (!filterBy) return Promise.resolve(emails)
    const filteredEmails = _getFilteredEmails(emails, filterBy)
    return Promise.resolve(filteredEmails)
}



function _getFilteredEmails(emails, filterBy){
    return emails.filter(email => {
        return email.status === filterBy
    })
}



function markAsRead(id) {
    console.log(id);
    const emails = _loadMailsFromStorage();
    console.log(emails);
    const email = emails.find(email => {
        return email.id === id;
    })
    email.isRead = true;
    _saveMailsToStorage(emails);
    return Promise.resolve()
}

function _createMail(subject, body, from, emailto, img) {
    const email = {
        id: utilService.makeId(),
        subject,
        body,
        status: 'inbox',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        emailto,
        from,
        img,
    }
    return email
}

function saveEmail(newEmail) {
    console.log('email in save', newEmail);
    const { subject, body, emailTo } = newEmail
    let emails = _loadMailsFromStorage();
    console.log('emails in saveEmail', emails);
    let email = _createMail(subject, body, 'natinadav932@gmail.com', emailTo, '../../../img/avatar1.svg')
    emails.unshift(email);
    _saveMailsToStorage(emails);
    return Promise.resolve()
}


function _createMails() {
    const emails = [{
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        status: 'inbox',
        isRead: true,
        isStarred: false,
        sentAt: Date.now(),
        to: 'natinadav932@gmail.com',
        from: 'aliBaba@gmail.shtuk',
        img: '../../../img/avatar1.svg'
    },
    {
        id: 'e102',
        subject: 'Dare you Idiot!',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim. Ultrices vitae auctor eu augue ut lectus.',
        status: 'inbox',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        to: 'rotembeneli@gmail.com',
        from: 'aliBaba@gmail.shtuk',
        img: '../../../img/avatar2.svg'
    },
    {
        id: 'e103',
        subject: 'Ma kore Veze!',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim. Ultrices vitae auctor eu augue ut lectus.',
        status: 'sent',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        to: 'rotembeneli@gmail.com',
        from: 'aliBaba@gmail.shtuk',
        img: '../../../img/avatar2.svg'
    },
    {
        id: 'e104',
        subject: 'Eize Lama Stam',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim. Ultrices vitae auctor eu augue ut lectus.',
        status: 'trash',
        isRead: false,
        isStarred: true,
        sentAt: Date.now(),
        to: 'rotembeneli@gmail.com',
        from: 'aliBaba@gmail.shtuk',
        img: '../../../img/avatar2.svg'
    },
    {
        id: 'e105',
        subject: 'Eize Layila lefaninu',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim. Ultrices vitae auctor eu augue ut lectus.',
        status: 'draft',
        isRead: false,
        isStarred: true,
        sentAt: Date.now(),
        to: 'rotembeneli@gmail.com',
        from: 'aliBaba@gmail.shtuk',
        img: '../../../img/avatar1.svg'
    }
    ]
    _saveMailsToStorage(emails)
    return emails
}


function getEmailById(emailId) {
    const emails = _loadMailsFromStorage()
    var email = emails.find(email => {
        return emailId === email.id;
    })
    return Promise.resolve(email)
}


function removeEmail(emailId) {
    let emails = _loadMailsFromStorage();
    console.log(emails, 'service storage ');
    emails = emails.filter(email => email.id !== emailId)
    console.log(emails, 'from service after filter');
    _saveMailsToStorage(emails)
    let check = _loadMailsFromStorage();
    console.log(check, 'check');

    return Promise.resolve()
}


function _saveMailsToStorage(emails) {
    storageService.saveToStorage(STORAGE_KEY, emails)
}

function _loadMailsFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}
