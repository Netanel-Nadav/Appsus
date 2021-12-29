import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'


export const emailService = {
    query,
    getEmailById,
}


const STORAGE_KEY = 'emailDB'


_createMails()


function query(){
    const emails = _loadMailsFromStorage();
    return Promise.resolve(emails)
}

function _createMail(subject, body, from, to, img) {
    const email = {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        to,
        from,
        img,
    }
    return email
}


function _createMails() {
    const emails = [{
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
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
        body: 'Hi im rotem and i like to dont wirk and just lehistahel on you!',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        to: 'rotembeneli@gmail.com',
        from: 'aliBaba@gmail.shtuk',
        img: '../../../img/avatar2.svg'
    }
    ]
    _saveMailsToStorage(emails)
}


function getEmailById(emailId){
    const emails = _loadMailsFromStorage()
    var email = emails.find(email => {
        return emailId === email.id;
    })
    return Promise.resolve(email)
}


function getRandomAvatar(){

}




function _saveMailsToStorage(emails) {
    storageService.saveToStorage(STORAGE_KEY, emails)
}

function _loadMailsFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}
