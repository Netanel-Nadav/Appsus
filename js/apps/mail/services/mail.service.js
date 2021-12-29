import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'


export const emailService = {
    query,
}


const STORAGE_KEY = 'emailDB'


_createMails()


function query(){
    const emails = _loadMailsFromStorage();
    return Promise.resolve(emails)
}



function _createMail(subject, body, to) {
    const email = {
        id: utilService.makeId(),
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
    _saveMailsToStorage(emails)
}



function _saveMailsToStorage(emails) {
    storageService.saveToStorage(STORAGE_KEY, emails)
}

function _loadMailsFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}
