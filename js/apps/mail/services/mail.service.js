import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'


export const emailService = {
    query,
    getEmailById,
    removeEmail,
    markAsRead,
    saveEmail,
    moveToTrash,
    toogleExpand,
    starEmail,
}


const STORAGE_KEY = 'emailDB'




function query(filterBy = null) {
    // console.log('in-Service',filterBy);
    let emails = _loadMailsFromStorage() || _createMails()
    if (emails.length === 0) emails = _createMails()
    if (!filterBy || filterBy.isRead === 'all' && filterBy.status === 'inbox') return Promise.resolve(emails)
    const filteredEmails = _getFilteredEmails(emails, filterBy)
    return Promise.resolve(filteredEmails)
}


function toogleExpand(emailId){
    const emails = _loadMailsFromStorage();
    const email = emails.find(email => {
        return email.id === emailId;
    })
    email.isExpand = !email.isExpand;
    _saveMailsToStorage(emails);
    return Promise.resolve()
}


function _getFilteredEmails(emails, filterBy) {
    // console.log(emails);
    console.log(filterBy);
    return emails.filter(email => {
        return email.status === filterBy.status && email.isRead === filterBy.isRead
    })
}


function moveToTrash(emailId) {
    let emails = _loadMailsFromStorage()
    let email = emails.find(email => {
        console.log(email)
        return email.id === emailId
    })
    email.status = 'trash'
    _saveMailsToStorage(emails);
    return Promise.resolve()
}

function starEmail(emailId){
    let emails = _loadMailsFromStorage();
    let email = emails.find(email => {
        return email.id === emailId
    })
    email.isStarred = !email.isStarred
    _saveMailsToStorage(emails)
    return Promise.resolve()
}


function markAsRead(id) {
    const emails = _loadMailsFromStorage();
    const email = emails.find(email => {
        return email.id === id;
    })
    email.isRead = true;
    _saveMailsToStorage(emails);
    return Promise.resolve()
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


function getEmailById(emailId) {
    const emails = _loadMailsFromStorage()
    var email = emails.find(email => {
        return emailId === email.id;
    })
    return Promise.resolve(email)
}


function _createMail(subject, body, from, emailto, img) {
    const email = {
        id: utilService.makeId(),
        subject,
        body,
        status: 'sent',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        emailto,
        from,
        img,
        isExpand: false
    }
    return email
}


function _createMails() {
    const emails = [{
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        status: 'sent',
        isRead: true,
        isStarred: false,
        sentAt: Date.now(),
        to: 'natinadav932@gmail.com',
        from: 'aliBaba@gmail.shtuk',
        img: '../../../img/avatar1.svg',
        isExpand: false,
    },
    {
        id: utilService.makeId(),
        subject: 'Dare you Idiot!',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim. Ultrices vitae auctor eu augue ut lectus.',
        status: 'draft',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        to: 'rotembeneli@gmail.com',
        from: 'aliBaba@gmail.shtuk',
        img: '../../../img/avatar2.svg',
        isExpand: false,
    },
    {
        id: utilService.makeId(),
        subject: 'Ma kore Veze!',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim. Ultrices vitae auctor eu augue ut lectus.',
        status: 'sent',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        to: 'rotembeneli@gmail.com',
        from: 'aliBaba@gmail.shtuk',
        img: '../../../img/avatar2.svg',
        isExpand: false,
    },
    {
        id: utilService.makeId(),
        subject: 'Eize Lama Stam',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim. Ultrices vitae auctor eu augue ut lectus.',
        status: 'trash',
        isRead: false,
        isStarred: true,
        sentAt: Date.now(),
        to: 'rotembeneli@gmail.com',
        from: 'aliBaba@gmail.shtuk',
        img: '../../../img/avatar2.svg',
        isExpand: false,
    },
    {
        id: utilService.makeId(),
        subject: 'ani ohev avitihim with lemons',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim. Ultrices vitae auctor eu augue ut lectus.',
        status: 'draft',
        isRead: false,
        isStarred: true,
        sentAt: Date.now(),
        to: 'rotembeneli@gmail.com',
        from: 'aliBaba@gmail.shtuk',
        img: '../../../img/avatar1.svg',
        isExpand: false,
    },
    {
        id: utilService.makeId(),
        subject: 'stop that copy paste cant track like that',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim. Ultrices vitae auctor eu augue ut lectus.',
        status: 'inbox',
        isRead: false,
        isStarred: true,
        sentAt: Date.now(),
        to: 'rotembeneli@gmail.com',
        from: 'aliBaba@gmail.shtuk',
        img: '../../../img/avatar2.svg',
        isExpand: false,
    },
    {
        id: utilService.makeId(),
        subject: 'wow nu ma kore',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim. Ultrices vitae auctor eu augue ut lectus.',
        status: 'inbox',
        isRead: false,
        isStarred: true,
        sentAt: Date.now(),
        to: 'rotembeneli@gmail.com',
        from: 'aliBaba@gmail.shtuk',
        img: '../../../img/avatar2.svg',
        isExpand: false,
    },
    {
        id: utilService.makeId(),
        subject: 'im totally hegzamti',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim. Ultrices vitae auctor eu augue ut lectus.',
        status: 'inbox',
        isRead: false,
        isStarred: true,
        sentAt: Date.now(),
        to: 'rotembeneli@gmail.com',
        from: 'aliBaba@gmail.shtuk',
        img: '../../../img/avatar2.svg',
        isExpand: false,
    },
    ]
    _saveMailsToStorage(emails)
    return emails
}


function _saveMailsToStorage(emails) {
    storageService.saveToStorage(STORAGE_KEY, emails)
}


function _loadMailsFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}
